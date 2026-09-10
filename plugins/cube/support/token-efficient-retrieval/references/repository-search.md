# Repository search

Use repository search as an index-building phase. Prefer `rg`; use `grep` where `rg` is unavailable and `find`/`rg --files` for paths. Exclude build, generated, vendor, cache, coverage, and dependency directories unless they are the subject of the task.

## Retrieval order

1. Inspect only shallow structure (`Get-ChildItem`, `find ... -maxdepth 2`, or equivalent); identify source, tests, configuration, and likely entry points.
2. List candidate paths with a bounded result count (`rg --files src tests | Select-Object -First 50`).
3. Search exact filenames, identifiers, symbols, errors, endpoints, or configuration keys.
4. Count or summarize matches by file, then select a small set of likely files.
5. Read only selected ranges or symbols. Increase directory depth or broaden terms only to resolve a known gap.

Use `-l` for file pointers, `-n` for line pointers, and bounded output (`-m`, `Select-Object -First`, or an equivalent). Search specific → general. If a search returns hundreds of matches, reduce it by file, path, type, time, or a more distinctive term before reading content.

## Evidence discipline

Keep pointers such as `src/auth/token.ts:148` separate from payload. A match identifies where to look; it does not explain behavior. Preserve the selected paths and line ranges in working notes so the same search is not repeated.

