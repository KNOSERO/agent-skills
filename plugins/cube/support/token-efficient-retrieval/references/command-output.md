# Command-output retrieval

Design commands so verbosity is bounded before execution. Ask what decision the output must support, then choose the narrowest projection, path, selector, count, time range, or limit.

Useful patterns:

```text
git diff --stat
git diff -- path/to/file
git log -n 10 --oneline
rg -l "pattern" src/
find src -maxdepth 2 -type f
```

Avoid unbounded `git diff`, `git log`, `cat` on large files, recursive `find . -type f`, and verbose test/build output unless the task specifically requires it. Prefer summaries, selected paths, machine-readable fields, pagination, and `head`/`tail`/line ranges. If a command unexpectedly produces a large result, stop consuming it, narrow the command, and rerun rather than carrying the entire output into context.

For diffs, begin with stat and changed-file pointers, inspect only relevant files/hunks, and expand to surrounding code only to understand a changed behavior or validation failure.

