# Grouping and selective staging

Group changes by responsibility, intent, module, change type, and dependencies—not by file boundaries alone.

Keep changes together when they are required to build or function correctly, and record the required commit order. Separate unrelated features, refactors, formatting, tests, and documentation.

If one file contains independent groups, stage only the relevant hunks. Prefer an interactive or patch-based staging method that preserves the other hunks exactly. Reinspect the staged path list and diff after every staging operation.

Never stage all changes merely for convenience when unrelated or ambiguous work is present. If a group cannot be separated safely, explain the coupling and keep it together or ask the user to resolve the ambiguity.
