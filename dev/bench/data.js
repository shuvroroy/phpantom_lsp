window.BENCHMARK_DATA = {
  "lastUpdate": 1788529603888,
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
          "id": "8a172e437457592ade5bf530d6ce3443082d3ade",
          "message": "fix: exclude relationship builder methods from virtual properties",
          "timestamp": "2026-08-01T21:33:37+02:00",
          "tree_id": "ff224df83c622b2d169d6bb8dc7b4550f823b7e9",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/8a172e437457592ade5bf530d6ce3443082d3ade"
        },
        "date": 1785613550521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.258,
            "range": "± 0.196",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.053,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.113,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.157,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.244,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.296,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.163,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.276,
            "range": "± 0.092",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.125,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.067,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.055,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.075,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.593,
            "range": "± 0.054",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.15,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.364,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.069,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.051,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.132,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.117,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.093,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.21,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.101,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.663,
            "range": "± 0.041",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.114,
            "range": "± 0.014",
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
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 54.733,
            "range": "± 0.466",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.71,
            "range": "± 0.047",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "committer": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "distinct": true,
          "id": "b9d0da90554862fe867d6e3b3ca00139f53856cf",
          "message": "docs: update nvim installation instructions\n\nCloses #310",
          "timestamp": "2026-08-01T19:01:44-05:00",
          "tree_id": "ef31ad51851e08623dbed919c501fe3669c0bd31",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/b9d0da90554862fe867d6e3b3ca00139f53856cf"
        },
        "date": 1785649627654,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.344,
            "range": "± 0.2",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.049,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.102,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.145,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.238,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.291,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.159,
            "range": "± 0.041",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.262,
            "range": "± 0.119",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.117,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.056,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.051,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.063,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.815,
            "range": "± 0.102",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.148,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.333,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.063,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.048,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.125,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.111,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.085,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.21,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.086,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.657,
            "range": "± 0.075",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.108,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.036,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.035,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 56.854,
            "range": "± 0.676",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.675,
            "range": "± 0.049",
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
          "id": "329f1112e7f91099cf912f1cf577983ce4c212fd",
          "message": "A long `??` chain or a deeply nested ternary still resolves",
          "timestamp": "2026-08-03T11:36:34+02:00",
          "tree_id": "ace84829305c783a24aa3ed8e586e84e4108e454",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/329f1112e7f91099cf912f1cf577983ce4c212fd"
        },
        "date": 1785767848546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.466,
            "range": "± 0.101",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.042,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.103,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.155,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.255,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.288,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.252,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.431,
            "range": "± 0.062",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.104,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.056,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.052,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.056,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.142,
            "range": "± 0.035",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.18,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.356,
            "range": "± 0.003",
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
            "value": 0.047,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.129,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.092,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.072,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.205,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.179,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.724,
            "range": "± 0.114",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.194,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.041,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.04,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 51.657,
            "range": "± 0.343",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.757,
            "range": "± 0.036",
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
          "id": "19a485120e946efd3ba46efbe8d3946b0977327e",
          "message": "Included route file paths behind a local variable are now resolved",
          "timestamp": "2026-08-07T19:47:58+02:00",
          "tree_id": "a6cca38c598e90ddf2c6f7ce33f907a829119dbf",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/19a485120e946efd3ba46efbe8d3946b0977327e"
        },
        "date": 1786126575253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.297,
            "range": "± 0.07",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.024,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.051,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.075,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.124,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.139,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.599,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.155,
            "range": "± 0.032",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.051,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.031,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.028,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.028,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 2.802,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.092,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.179,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.03,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.026,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.067,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.042,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.115,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.648,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3.629,
            "range": "± 0.083",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.641,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.022,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.022,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 27.6,
            "range": "± 0.118",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 0.95,
            "range": "± 0.02",
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
          "id": "27fc2c19c7e28319b404defb9b7d217229434c7a",
          "message": "`analyze` reports the same diagnostics on every run",
          "timestamp": "2026-08-08T04:17:56+02:00",
          "tree_id": "4d1c83baedcdc73839d98bd4474cd8cb299a81e8",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/27fc2c19c7e28319b404defb9b7d217229434c7a"
        },
        "date": 1786159646167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.77,
            "range": "± 0.101",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.039,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.088,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.131,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.216,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.236,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.013,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.98,
            "range": "± 0.116",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.087,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.049,
            "range": "± 0.003",
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
            "value": 0.047,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.004,
            "range": "± 0.11",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.175,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.307,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.053,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.045,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.119,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.074,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.062,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.166,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.972,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.67,
            "range": "± 0.048",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.99,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.036,
            "range": "± 0",
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
            "value": 40.013,
            "range": "± 0.27",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.525,
            "range": "± 0.043",
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
          "id": "99b5e44b37003a5e1be5ed0e75976e53e2750a2f",
          "message": "Update priority tasks",
          "timestamp": "2026-08-08T05:36:39+02:00",
          "tree_id": "2da42c4415ae172b5b447f3dcb4157d31acfede3",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/99b5e44b37003a5e1be5ed0e75976e53e2750a2f"
        },
        "date": 1786160963705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.157,
            "range": "± 0.056",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.03,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.074,
            "range": "± 0.003",
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
            "value": 0.184,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.218,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.949,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.842,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.079,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.039,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.035,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.039,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 4.769,
            "range": "± 0.03",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.121,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.266,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.042,
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
            "value": 0.091,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.067,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.055,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.151,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.833,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 4.446,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.846,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.029,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.028,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 40.614,
            "range": "± 0.19",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.255,
            "range": "± 0.05",
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
          "id": "e6ce00540fc603f6242ccd1fef5f83ce49b6606b",
          "message": "A container call through the `App` facade resolves when it is chained\ndirectly",
          "timestamp": "2026-08-08T05:40:25+02:00",
          "tree_id": "25ba27d4d5392e6e4d5092d19e39a342272b7468",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/e6ce00540fc603f6242ccd1fef5f83ce49b6606b"
        },
        "date": 1786161550748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.14,
            "range": "± 0.212",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.037,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.095,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.139,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.234,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.284,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.224,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.403,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.101,
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
            "value": 0.045,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.05,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.313,
            "range": "± 0.038",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.164,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.331,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.053,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.04,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.114,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.086,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.07,
            "range": "± 0.006",
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
            "value": 1.079,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.739,
            "range": "± 0.036",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.095,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.036,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.035,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 52.562,
            "range": "± 0.326",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.602,
            "range": "± 0.044",
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
          "id": "671b5a02da4485e11b369186ffd76565f993e71a",
          "message": "A check on a method call narrows the call, not just a variable",
          "timestamp": "2026-08-10T07:33:45+02:00",
          "tree_id": "9702408e50e8f38fd997bc22b3558b15aadc209d",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/671b5a02da4485e11b369186ffd76565f993e71a"
        },
        "date": 1786342785222,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.203,
            "range": "± 0.106",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.05,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.11,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.157,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.241,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.287,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.198,
            "range": "± 0.031",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.286,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.142,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.064,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.058,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.076,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.491,
            "range": "± 0.028",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.149,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.395,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.072,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.051,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.126,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.113,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.099,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.219,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.1,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.598,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.116,
            "range": "± 0.027",
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
            "value": 0.034,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 54.817,
            "range": "± 0.254",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.247,
            "range": "± 0.069",
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
          "id": "caa56651660660b55c0d309a8bedd2e0756815a9",
          "message": "A check on `$a->value` no longer keeps narrowing it after `$a` itself is\nreplaced",
          "timestamp": "2026-08-11T05:31:51+02:00",
          "tree_id": "10bf24e720b2d1552406a9cb3f6d04c4239246c2",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/caa56651660660b55c0d309a8bedd2e0756815a9"
        },
        "date": 1786443486059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.084,
            "range": "± 0.337",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.038,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.096,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.143,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.241,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.286,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.242,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.42,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.114,
            "range": "± 0.007",
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
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.051,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.474,
            "range": "± 0.034",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.162,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.341,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.056,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.04,
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
            "value": 0.09,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.07,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.203,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.109,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.961,
            "range": "± 0.241",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.118,
            "range": "± 0.02",
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
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 57.32,
            "range": "± 0.348",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.064,
            "range": "± 0.019",
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
          "id": "92e0d51b7e3d8f1d785a8675210b027eea8b9278",
          "message": "by-ref out-parameters are non-null after the call",
          "timestamp": "2026-08-14T05:57:58+02:00",
          "tree_id": "251c6d3b90473c3c2493010d3e2f260aa896d549",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/92e0d51b7e3d8f1d785a8675210b027eea8b9278"
        },
        "date": 1786714504362,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.238,
            "range": "± 0.218",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.04,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.098,
            "range": "± 0.002",
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
            "value": 0.244,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.281,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.238,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.397,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.115,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.05,
            "range": "± 0.003",
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
            "value": 0.052,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.15,
            "range": "± 0.064",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.171,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.362,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.055,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.043,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.126,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.086,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.071,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.212,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.188,
            "range": "± 0.026",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.515,
            "range": "± 0.037",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.194,
            "range": "± 0.01",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.042,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.041,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 50.658,
            "range": "± 0.161",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.796,
            "range": "± 0.018",
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
          "id": "fab739b2448877e3e62642856255c08cd406e9ef",
          "message": "Fix a couple of issues with constants",
          "timestamp": "2026-08-14T16:59:16+02:00",
          "tree_id": "06e8f9f63f86bce66ec966c65bb2334662780581",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/fab739b2448877e3e62642856255c08cd406e9ef"
        },
        "date": 1786720950372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.27,
            "range": "± 0.263",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.047,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.11,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.153,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.24,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.296,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.177,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.284,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.143,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.062,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.055,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.072,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.519,
            "range": "± 0.107",
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
            "value": 0.36,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.07,
            "range": "± 0.005",
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
            "value": 0.129,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.121,
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
            "value": 0.22,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.132,
            "range": "± 0.027",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.82,
            "range": "± 0.039",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.134,
            "range": "± 0.028",
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
            "value": 66.275,
            "range": "± 0.317",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.871,
            "range": "± 0.015",
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
          "id": "bf399a89d4a443535bd977a6756115a604be6a53",
          "message": "A `Stringable` object passed to a `string` parameter is checked against\nthe file's `strict_types` setting",
          "timestamp": "2026-08-15T08:06:08+02:00",
          "tree_id": "ac5ea05d29dce3fe3b8e89d468547bd9d9ff77f0",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/bf399a89d4a443535bd977a6756115a604be6a53"
        },
        "date": 1786774772479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.306,
            "range": "± 0.132",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.044,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.109,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.159,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.248,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.297,
            "range": "± 0.022",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.191,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.481,
            "range": "± 0.086",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.139,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.062,
            "range": "± 0.005",
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
            "value": 0.062,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.462,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.146,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.363,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.077,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.047,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.128,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.104,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.089,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.224,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.114,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.643,
            "range": "± 0.136",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.118,
            "range": "± 0.011",
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
            "value": 0.036,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 62.592,
            "range": "± 0.28",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.745,
            "range": "± 0.014",
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
          "id": "97a422af93ea2e41bfd55a89210f10487640227d",
          "message": "A standalone `@var` cast above `return` is honoured",
          "timestamp": "2026-08-15T08:28:00+02:00",
          "tree_id": "621aa5b24f89d452d1aeafe65b76cbb2380c3496",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/97a422af93ea2e41bfd55a89210f10487640227d"
        },
        "date": 1786781228405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.598,
            "range": "± 0.108",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.05,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.112,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.157,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.251,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.283,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.207,
            "range": "± 0.065",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.328,
            "range": "± 0.053",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.149,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.064,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.057,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.064,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 5.54,
            "range": "± 0.035",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.154,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.37,
            "range": "± 0.044",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.076,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.051,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.124,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.116,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.107,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.22,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.125,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.832,
            "range": "± 0.175",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.123,
            "range": "± 0.022",
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
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 64.014,
            "range": "± 1.469",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.812,
            "range": "± 0.041",
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
          "id": "1d056bc51ade82b5fba52d7e7c5e75a63c600be7",
          "message": "Editing a service provider takes effect immediately",
          "timestamp": "2026-08-16T07:18:42+02:00",
          "tree_id": "23e6190922111ffc3f1540826149289bc73cb6ce",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/1d056bc51ade82b5fba52d7e7c5e75a63c600be7"
        },
        "date": 1786861114976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.721,
            "range": "± 0.346",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.038,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.099,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.148,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.249,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.28,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.27,
            "range": "± 0.051",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.467,
            "range": "± 0.023",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.116,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.055,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.049,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.05,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.931,
            "range": "± 0.05",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.175,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.387,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.054,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.044,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.126,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.091,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.073,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.21,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.177,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.559,
            "range": "± 0.108",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.181,
            "range": "± 0.013",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.043,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.041,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 60.187,
            "range": "± 0.26",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.944,
            "range": "± 0.016",
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
          "distinct": false,
          "id": "1b2705869265c17c098eeb0ec73d9ed4c7ef1146",
          "message": "A non-Laravel project's own `config()`, `route()`, `view()`, `__()`, or\n`trans()` function no longer hovers, navigates, or renames as a Laravel\nstring key",
          "timestamp": "2026-08-16T19:21:34+02:00",
          "tree_id": "b159658533d1fc800f451a78ef98e643a4652c9b",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/1b2705869265c17c098eeb0ec73d9ed4c7ef1146"
        },
        "date": 1786903471176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.44,
            "range": "± 0.092",
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
            "value": 0.097,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.143,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.234,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.286,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.231,
            "range": "± 0.025",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.393,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.112,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.051,
            "range": "± 0.002",
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
            "value": 0.051,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.146,
            "range": "± 0.029",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.157,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.344,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.055,
            "range": "± 0.005",
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
            "value": 0.118,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.092,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.075,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.203,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.111,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.928,
            "range": "± 0.07",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.127,
            "range": "± 0.028",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.038,
            "range": "± 0.001",
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
            "value": 66.812,
            "range": "± 0.5",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.537,
            "range": "± 0.014",
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
          "id": "77878bb055c3d298ea7c7c35e35a473c269c9f15",
          "message": "A route under a dynamic group prefix is no longer flagged as unknown",
          "timestamp": "2026-08-17T21:23:49+02:00",
          "tree_id": "fa1a2f982db460331a9ae768059863a7d91332f8",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/77878bb055c3d298ea7c7c35e35a473c269c9f15"
        },
        "date": 1787066814280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 2.51,
            "range": "± 0.065",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.024,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.053,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.077,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.127,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.142,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.631,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.238,
            "range": "± 0.052",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.06,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.031,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.029,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.029,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 2.981,
            "range": "± 0.166",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.101,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.183,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.031,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.027,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.069,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.046,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.038,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.124,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.682,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 3.943,
            "range": "± 0.12",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.665,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.022,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.021,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 33.404,
            "range": "± 0.952",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 1.552,
            "range": "± 0.031",
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
          "id": "533ef884630924b774a2d74ac3d6050f7b3fbce0",
          "message": "Bump version to 0.10.0",
          "timestamp": "2026-08-20T02:59:57+02:00",
          "tree_id": "b90ca259a1428baf1cf2ed8b0075c2568b0c65f4",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/533ef884630924b774a2d74ac3d6050f7b3fbce0"
        },
        "date": 1787209868321,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 3.385,
            "range": "± 0.041",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.037,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.083,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.121,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.195,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.218,
            "range": "± 0.035",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 0.9,
            "range": "± 0.029",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 1.821,
            "range": "± 0.099",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.092,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.045,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.043,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.047,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 3.554,
            "range": "± 0.021",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.183,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.247,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.052,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.043,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.111,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.069,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.06,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.144,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 0.868,
            "range": "± 0.074",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 5.084,
            "range": "± 0.246",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 0.876,
            "range": "± 0.016",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.03,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.029,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 106.525,
            "range": "± 4.117",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.28,
            "range": "± 0.074",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "committer": {
            "email": "anders@jenbo.dk",
            "name": "Anders Jenbo",
            "username": "AJenbo"
          },
          "distinct": true,
          "id": "6a4c95b0f9497edb13ce54f014a7860d3c766b2c",
          "message": "feat: move classes and namespaces from the command line\n\nRenaming a class's FQN or a namespace segment already moves the files\nand rewrites the references across a project, but only through\ntextDocument/rename, which needs a cursor position and hands the\nresulting WorkspaceEdit to an editor to apply. That leaves the bulk\ncase — a migration script, a pre-commit hook, an agent working through\na list of classes — with no way in short of driving an editor.\n\n`phpantom_lsp move FROM TO` exposes the same engine headlessly. Either\nside accepts a fully-qualified name or a Composer PSR-4 path, so a\nclass or a whole namespace can be named however the caller already has\nit to hand, and `--dry-run --format json` gives a validation-only form\nfor scripts.\n\nTwo cursor-free planners drive the existing rename builders rather than\nduplicating them, and the CLI applies the WorkspaceEdit itself: every\nfile is read and every edit computed in memory, and every destination\nchecked, before anything is written, so a refused move leaves the tree\nexactly as it was.\n\nMoving a class into a namespace no PSR-4 mapping covers rewrites the\ndeclaration but cannot take the file with it, leaving the class\nsomewhere the autoloader will not find it. Reporting that as a plain\nsuccess would hand a script a quietly broken project, so it is called\nout on stderr and in the JSON output instead.",
          "timestamp": "2026-09-01T21:16:50+02:00",
          "tree_id": "fac670182d27639b39b6eabaf4a9121d9b84ecb7",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/6a4c95b0f9497edb13ce54f014a7860d3c766b2c"
        },
        "date": 1788451490412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.43,
            "range": "± 0.385",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.039,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.1,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.147,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.239,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.281,
            "range": "± 0.007",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.231,
            "range": "± 0.024",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.43,
            "range": "± 0.02",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.12,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.051,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.045,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.053,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.101,
            "range": "± 0.051",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.159,
            "range": "± 0.012",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.335,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.06,
            "range": "± 0.004",
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
            "value": 0.116,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.103,
            "range": "± 0.009",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.084,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.206,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.127,
            "range": "± 0.015",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.92,
            "range": "± 0.378",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.143,
            "range": "± 0.042",
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
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 94.176,
            "range": "± 0.964",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.617,
            "range": "± 0.078",
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "committer": {
            "email": "cdwhite3@pm.me",
            "name": "Caleb White",
            "username": "calebdw"
          },
          "distinct": true,
          "id": "9c3f121059da6b9a8c3d1e910a6cdfe06cb17b66",
          "message": "test: distinguish import class quick fixes",
          "timestamp": "2026-09-03T12:56:29-05:00",
          "tree_id": "177c385111e4e7788b33169cc70d9b5dafe7d907",
          "url": "https://github.com/shuvroroy/phpantom_lsp/commit/9c3f121059da6b9a8c3d1e910a6cdfe06cb17b66"
        },
        "date": 1788529603276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cold_start_completion",
            "value": 4.468,
            "range": "± 0.158",
            "unit": "ms"
          },
          {
            "name": "completion_simple_class",
            "value": 0.038,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_5",
            "value": 0.103,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_10",
            "value": 0.149,
            "range": "± 0.008",
            "unit": "ms"
          },
          {
            "name": "completion_inheritance_depth/depth_20",
            "value": 0.241,
            "range": "± 0.014",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/100_classes",
            "value": 0.292,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/500_classes",
            "value": 1.249,
            "range": "± 0.019",
            "unit": "ms"
          },
          {
            "name": "completion_classmap_size/1000_classes",
            "value": 2.476,
            "range": "± 0.067",
            "unit": "ms"
          },
          {
            "name": "completion_generics_and_mixins",
            "value": 0.12,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "completion_with_narrowing",
            "value": 0.052,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_5_method_chain",
            "value": 0.047,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "completion_cross_file_type_hint",
            "value": 0.054,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "completion_carbon_class",
            "value": 6.042,
            "range": "± 0.079",
            "unit": "ms"
          },
          {
            "name": "completion_yii_deep_hierarchy",
            "value": 0.177,
            "range": "± 0.011",
            "unit": "ms"
          },
          {
            "name": "completion_large_file",
            "value": 0.336,
            "range": "± 0.005",
            "unit": "ms"
          },
          {
            "name": "completion_short_file",
            "value": 0.06,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "variable_completion/short",
            "value": 0.041,
            "range": "± 0.002",
            "unit": "ms"
          },
          {
            "name": "variable_completion/long",
            "value": 0.114,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "hover_method_call",
            "value": 0.105,
            "range": "± 0.006",
            "unit": "ms"
          },
          {
            "name": "goto_definition_method",
            "value": 0.085,
            "range": "± 0.004",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/100_lines",
            "value": 0.206,
            "range": "± 0.001",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/500_lines",
            "value": 1.12,
            "range": "± 0.017",
            "unit": "ms"
          },
          {
            "name": "update_ast_parse_time/2000_lines",
            "value": 6.269,
            "range": "± 0.205",
            "unit": "ms"
          },
          {
            "name": "reparse_500_line_file",
            "value": 1.132,
            "range": "± 0.018",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_generic_objects",
            "value": 0.037,
            "range": "± 0.003",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_new_objects",
            "value": 0.035,
            "range": "± 0",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/lots_of_missing_methods",
            "value": 83.331,
            "range": "± 0.851",
            "unit": "ms"
          },
          {
            "name": "diagnostics/fixture/method_chain",
            "value": 2.523,
            "range": "± 0.03",
            "unit": "ms"
          }
        ]
      }
    ]
  }
}