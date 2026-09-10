---
name: commit
description: Suggest concise Conventional Commit message(s) from all uncommitted Git changes.
---

# Commit

Suggest commit message(s) for the complete current working-tree change set.

## Workflow

1. Inspect `git status --short`.
2. Inspect staged and unstaged tracked changes with `git diff HEAD`.
3. Include untracked files from `git status --short`; read their contents when needed to understand the change. Do not include ignored files.
4. Group changes by coherent purpose, not merely by file. Use one commit by default; split only clearly independent topics.
5. Choose the best Conventional Commits type (`feat`, `fix`, `refactor`, `docs`, `test`, `chore`, or another valid type) and an optional concise scope.

## Output

When all changes form one coherent topic, output only one copyable message:

```text
<type>(<scope>): <imperative English description>
```

When changes are clearly independent, output numbered suggestions. For each suggestion include the message and a compact `Files:` line using directories where that is clearer than listing every file:

```text
1. <type>(<scope>): <imperative English description>
   Files: src/auth/, tests/auth/

2. <type>: <imperative English description>
   Files: docs/
```

Keep the result short and in English. Do not write files and do not run `git add`, `git commit`, or other mutating Git commands. If there are no uncommitted changes, say so instead of inventing a message. If the diff is ambiguous, provide the best proposal and add one brief uncertainty note.
