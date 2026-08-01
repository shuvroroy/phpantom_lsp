window.BENCHMARK_DATA = {
  "lastUpdate": 1785612076970,
  "repoUrl": "https://github.com/shuvroroy/phpantom_lsp",
  "entries": {
    "PHPantom Benchmarks": [
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
        "date": 1784993352479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.888,
            "range": "± 0.129",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.047,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.118,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.16,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.245,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.286,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.156,
            "range": "± 0.020",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.205,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.127,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.058,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.053,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.077,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.298,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.152,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.337,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.082,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.05,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.127,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.125,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.1,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.222,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.157,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.123,
            "range": "± 0.059",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.167,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.047,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.045,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 74.194,
            "range": "± 0.668",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.701,
            "range": "± 0.022",
            "unit": "ms"
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
        "date": 1785074874229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.927,
            "range": "± 0.091",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.039,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.1,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.143,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.235,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.273,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.163,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.263,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.106,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.051,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.046,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.055,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.896,
            "range": "± 0.038",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.165,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.311,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.061,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.042,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.117,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.096,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.077,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.202,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.129,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.413,
            "range": "± 0.087",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.146,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.045,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.043,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 75.999,
            "range": "± 0.251",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.554,
            "range": "± 0.045",
            "unit": "ms"
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
        "date": 1785170254775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.03,
            "range": "± 0.03",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.029,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.077,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.111,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.185,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.208,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.921,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.797,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.08,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.038,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.034,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.042,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 4.822,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.134,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.233,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.044,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.032,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.086,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.071,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.058,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.154,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.867,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4.664,
            "range": "± 0.064",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.875,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.035,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.033,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 56.819,
            "range": "± 0.259",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.166,
            "range": "± 0.034",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shuvro.nsu.cse@gmail.com",
            "name": "Shuvro Roy",
            "username": "shuvroroy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55dde0b659106ce6b2df1a9fbdd12c39cd60f8f2",
          "message": "Request input key completion from validation rules (#292)",
          "timestamp": "2026-07-28T19:31:05+02:00",
          "tree_id": "296b388b147d42451e6d78d49116fe787f12582c",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/55dde0b659106ce6b2df1a9fbdd12c39cd60f8f2"
        },
        "date": 1785260734054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.253,
            "range": "± 0.111",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.039,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.1,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.147,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.242,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.285,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.241,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.47,
            "range": "± 0.03",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.103,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.05,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.046,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.055,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.991,
            "range": "± 0.258",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.153,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.312,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.059,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.041,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.113,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.098,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.077,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.2,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.119,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.796,
            "range": "± 0.356",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.149,
            "range": "± 0.034",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.048,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.046,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 76.56,
            "range": "± 0.764",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.703,
            "range": "± 0.068",
            "unit": "ms"
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
          "id": "52f7d45a3aad12294b496ebb4994fd1ff7e7584b",
          "message": "Argument checking no longer slows down quadratically with file size",
          "timestamp": "2026-07-31T10:08:35+02:00",
          "tree_id": "377846a760d6b67295774edad8c00bce2b23d882",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/52f7d45a3aad12294b496ebb4994fd1ff7e7584b"
        },
        "date": 1785510499746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.185,
            "range": "± 0.24",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.04,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.094,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.14,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.231,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.279,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.207,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.343,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.099,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.051,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.045,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.052,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.542,
            "range": "± 0.028",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.14,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.322,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.052,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.042,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.115,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.086,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.069,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.195,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.073,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.762,
            "range": "± 0.052",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.095,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.037,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.036,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 54.854,
            "range": "± 0.607",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.532,
            "range": "± 0.049",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shuvro.nsu.cse@gmail.com",
            "name": "Shuvro Roy",
            "username": "shuvroroy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88ba719a9a297ad6bf0e392696b76d3919453428",
          "message": "Route parameter name completion",
          "timestamp": "2026-07-31T23:15:34+02:00",
          "tree_id": "72bf174c87ffbc1b14a072303908269823f91e51",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/88ba719a9a297ad6bf0e392696b76d3919453428"
        },
        "date": 1785554231751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.325,
            "range": "± 0.266",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.047,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.108,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.148,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.234,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.29,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.136,
            "range": "± 0.032",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.216,
            "range": "± 0.101",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.116,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.057,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.052,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.071,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.419,
            "range": "± 0.04",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.144,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.336,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.068,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.05,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.13,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.114,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.085,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.213,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.098,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.752,
            "range": "± 0.129",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.115,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.037,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 55.96,
            "range": "± 0.319",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.702,
            "range": "± 0.053",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shuvro.nsu.cse@gmail.com",
            "name": "Shuvro Roy",
            "username": "shuvroroy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27fe59d40cb5165435416e2b658b91847df47806",
          "message": "Backing type for enum validation rules",
          "timestamp": "2026-08-01T17:00:43+02:00",
          "tree_id": "521767b4be19d3971c8aca006dd702f73cc2ef97",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/27fe59d40cb5165435416e2b658b91847df47806"
        },
        "date": 1785607351620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.295,
            "range": "± 0.085",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.048,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.12,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.165,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.237,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.293,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.159,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.231,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.125,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.063,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.059,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.07,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.538,
            "range": "± 0.028",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.151,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.361,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.07,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.051,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.129,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.111,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.095,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.208,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.097,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.616,
            "range": "± 0.1",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.105,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.034,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 54.226,
            "range": "± 0.352",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.688,
            "range": "± 0.043",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shuvro.nsu.cse@gmail.com",
            "name": "Shuvro Roy",
            "username": "shuvroroy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "976bb69a9d4dca6686d3b4fc687764b595f3cdc0",
          "message": "Route parameter name completion",
          "timestamp": "2026-08-01T20:51:44+02:00",
          "tree_id": "1c07c72716da06536260f1f0c9f97f0c64195174",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/976bb69a9d4dca6686d3b4fc687764b595f3cdc0"
        },
        "date": 1785612076660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.18,
            "range": "± 0.15",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.054,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.108,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.155,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.243,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.293,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.175,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.314,
            "range": "± 0.038",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.12,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.061,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.059,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.072,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.595,
            "range": "± 0.03",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.145,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.35,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.072,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.052,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.131,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.112,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.096,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.214,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.112,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.848,
            "range": "± 0.226",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.111,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.036,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 56.695,
            "range": "± 0.392",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.71,
            "range": "± 0.062",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}