"""Measure PR 527 and its parent with identical settings on one Linux runner."""

import json
import os
from pathlib import Path
import platform
import re
import shutil
import subprocess
import sys


ROOT = Path.cwd()
RESULTS = ROOT / "pr527-results"
TEMP = Path(os.environ["RUNNER_TEMP"]) / "pr527-comparison"
CASES = {
    "completion": [
        "cold_start_completion",
        "completion_simple_class",
        "completion_5_method_chain",
        "hover_method_call",
        "reparse_500_line_file",
        "update_ast_parse_time/100_lines",
    ],
    "custom_builder": ["custom_builder_completion/custom_builder_deep_inheritance"],
    "laravel_completion": ["laravel_completion/model_where_prefix"],
    "wordpress_completion": ["wordpress_completion/stub_member_get_post"],
}


def main():
    if platform.system() != "Linux" or platform.machine() != "x86_64":
        raise RuntimeError("This comparison requires native Linux x86_64")
    RESULTS.mkdir(exist_ok=True)
    TEMP.mkdir()
    sources = {}
    executables = {}
    for revision, commit in [
        ("base", os.environ["BASE_COMMIT"]),
        ("head", os.environ["HEAD_COMMIT"]),
    ]:
        source = TEMP / revision
        subprocess.run(
            ["git", "worktree", "add", "--detach", str(source), commit],
            check=True,
        )
        sources[revision] = source
        command = ["cargo", "bench", "--locked"]
        for target in CASES:
            command.extend(["--bench", target])
        command.extend(["--no-run", "--message-format=json"])
        build_log = RESULTS / f"{revision}-build.jsonl"
        print(f"Building {revision}: {commit}", flush=True)
        with build_log.open("w") as output:
            subprocess.run(command, cwd=source, stdout=output, check=True)
        binaries = {}
        for line in build_log.read_text().splitlines():
            record = json.loads(line)
            if (
                record.get("reason") == "compiler-artifact"
                and "bench" in record.get("target", {}).get("kind", [])
                and record.get("executable")
            ):
                target = record["target"]["name"]
                binary = TEMP / f"{revision}-{target}"
                shutil.copy2(record["executable"], binary)
                binaries[target] = binary
        if set(binaries) != set(CASES):
            raise RuntimeError(f"Missing benchmark binaries for {revision}")
        executables[revision] = binaries

    measured = {"base": {}, "head": {}}
    # Both builds finish before measurement, and each target's two revisions
    # run consecutively so compilation and different machines cannot skew it.
    for target, names in CASES.items():
        pattern = "^(?:" + "|".join(re.escape(name) for name in names) + ")$"
        for revision in ["base", "head"]:
            print(f"Measuring {revision}: {target}", flush=True)
            process = subprocess.run(
                [
                    str(executables[revision][target]),
                    "--bench",
                    "--noplot",
                    "--output-format",
                    "bencher",
                    pattern,
                ],
                cwd=sources[revision],
                env=dict(os.environ, CRITERION_HOME=str(TEMP / f"criterion-{revision}")),
                stdout=subprocess.PIPE,
                text=True,
                check=True,
            )
            print(process.stdout, flush=True)
            (RESULTS / f"{revision}-{target}.txt").write_text(process.stdout)
            converted = subprocess.run(
                [sys.executable, str(ROOT / "benches/format_bench_output.py")],
                input=process.stdout,
                stdout=subprocess.PIPE,
                text=True,
                check=True,
            )
            values = json.loads(converted.stdout)
            if sorted(value["name"] for value in values) != sorted(names):
                raise RuntimeError(f"Incomplete results for {revision}: {target}")
            measured[revision].update((value["name"], value) for value in values)

    (RESULTS / "measurements.json").write_text(json.dumps(measured, indent=2) + "\n")
    lines = [
        "## PR 527: parent and PR on the same Linux runner",
        "",
        f"Parent: {os.environ['BASE_COMMIT']}",
        f"PR: {os.environ['HEAD_COMMIT']}",
        "",
        "Both builds use the default features, musl, mold, and normal Criterion sampling.",
        "",
        "| Benchmark | Parent (ms) | PR (ms) | PR / parent |",
        "|---|---:|---:|---:|",
    ]
    regressions = []
    for target, names in CASES.items():
        for name in names:
            base = measured["base"][name]["value"]
            head = measured["head"][name]["value"]
            ratio = head / base
            lines.append(f"| {name} | {base:.3f} | {head:.3f} | {ratio:.3f} |")
            if ratio > 1.30:
                regressions.append(name)
    report = "\n".join(lines) + "\n"
    print(report, flush=True)
    (RESULTS / "comparison.md").write_text(report)
    with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as summary:
        summary.write(report)
    if regressions:
        raise RuntimeError(f"Regressions over 30% on the same runner: {regressions}")


if __name__ == "__main__":
    main()
