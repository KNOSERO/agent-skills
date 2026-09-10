# Refactoring execution

Load after the user selects at least one proposal and implementation is about to begin.

- Implement only selected IDs and their necessary dependencies.
- Make the minimum coherent change required for safe, correct completion.
- Preserve observable behavior and keep proposal IDs stable.
- Do not implement unrelated cleanup, formatting, renames, architecture work, abstractions, or tests.
- Treat pure execution details needed to complete an approved proposal as included scope.
- If a material change outside approved scope is required, stop the dependent work, explain why, and request expanded approval; use `grilling` for an unresolved material decision.
- If a selected proposal is blocked, report the blocker and continue independent approved work when safe.
- If a new issue appears, assign the next ID and report it; do not implement it automatically or restart the whole analysis. Continue approved work unless safe completion is blocked.
