window.BENCHMARK_DATA = {
  "lastUpdate": 1785170569466,
  "repoUrl": "https://github.com/shuvroroy/phpantom_lsp",
  "entries": {
    "PHPantom Memory Usage": [
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "62753f888e1800dda9a8e0822d8119b6d2a47f4b",
          "message": "Property and constant sharing",
          "timestamp": "2026-07-25T14:29:20+02:00",
          "tree_id": "109cefe7990e3530cac6a53340a81e38b6bec799",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/62753f888e1800dda9a8e0822d8119b6d2a47f4b"
        },
        "date": 1784993649537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "memory_hello_world",
            "value": 33.9,
            "unit": "MiB"
          },
          {
            "name": "memory_laravel_model",
            "value": 72.2,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "b10603ea22fa2b04172a49083b18740bf808e75a",
          "message": "Switch all linux release builds to musl + mimalloc, add memory profiling\nfeatures, plan memory optimizations",
          "timestamp": "2026-07-26T05:17:44+02:00",
          "tree_id": "91d1f3303b0c2295947eeb95439dcb8bf9ca66d6",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/b10603ea22fa2b04172a49083b18740bf808e75a"
        },
        "date": 1785075194048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "memory_hello_world",
            "value": 33.7,
            "unit": "MiB"
          },
          {
            "name": "memory_laravel_model",
            "value": 73.2,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "579bce936bc3490a19aba6487b7bc7b46a87cce9",
          "message": "Type narrowing against `@phpstan-assert`/`@psalm-assert` no longer leaks\nmemory",
          "timestamp": "2026-07-27T14:59:08+02:00",
          "tree_id": "c186c899c7211dd4d6d2eec0cd8753aaa3e86f63",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/579bce936bc3490a19aba6487b7bc7b46a87cce9"
        },
        "date": 1785170568567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "memory_hello_world",
            "value": 33.3,
            "unit": "MiB"
          },
          {
            "name": "memory_laravel_model",
            "value": 71.3,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}