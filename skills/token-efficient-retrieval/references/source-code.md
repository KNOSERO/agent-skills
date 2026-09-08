# Source-code retrieval

Read code at the narrowest useful unit:

`symbol → function/method → class → file section → full file → caller/dependency → module`

Locate the symbol first. Retrieve its definition with a small line range, then inspect only the imports, direct callers/callees, relevant types, configuration, and tests needed to establish the contract. Prefer line-range tools (`Get-Content` with selected lines, `sed -n`, editor symbol lookup, or equivalent) over dumping a large file.

Before editing, confirm the smallest safe scope: implementation, direct contract, affected call sites, and a focused test. Inspect neighboring code when control flow, error handling, lifecycle, or invariants cross the initial range. Treat generated code as output: find its source or generator unless the generated artifact itself is the required target.

Expand to the whole file or module only when local context cannot establish behavior, ownership, or compatibility. Do not reread unchanged ranges; retain path, symbol, range, and a one-line purpose in notes.

