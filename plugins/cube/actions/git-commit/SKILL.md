---
name: git-commit
description: >
  Use whenever the user asks to commit, split, organize, or prepare
  uncommitted Git changes. Group related changes, protect unrelated work,
  create Conventional Commits, and verify the result. Do not publish changes.
---

# Git commits

Create small, reviewable commits from the current changes. Use
`token-efficient-retrieval` for repository and diff inspection.

## Workflow

1. Inspect status, branch, staged and unstaged diff statistics, and changed paths.
2. Read only the context needed to understand intent, dependencies, and repository rules.
3. Group changes by responsibility and dependency. Keep required files together.
4. Include every change clearly related to the request. If a change is unrelated or
   ambiguous, stop and ask one concise question listing the affected paths.
5. Stage only the selected files or hunks. Preserve existing staged work unless the
   user explicitly includes it.
6. Before each commit, inspect the staged diff, run `git diff --cached --check`,
   check for secrets and temporary files, and run the narrowest relevant test or lint.
7. Create one Conventional Commit per logical group, using an imperative English
   message such as `fix(parser): reject malformed input`.
8. After each commit, inspect the commit and `git status --short`.

Do not ask the user to choose `A` or `B`, fill in group IDs, or approve a routine
plan. Ask only when the intended scope cannot be determined safely. If there are no
changes, report that and stop.

Use `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `build`, `ci`, `chore`, or
`revert` as appropriate. Add `!` and a `BREAKING CHANGE:` footer only for a real
breaking change.

If a Git write fails, distinguish a repository error, active lock, and permission
or sandbox restriction. For a permission-only failure, use the available
escalation mechanism and retry the same operation without changing scope. Do not
narrate routine retries or permission details. Report them only if the retry fails
or user action is required. Read [references/execution-environment.md](references/execution-environment.md)
when this path is needed.

Do not use `git reset --hard`, `git clean`, `git commit --amend`, rebase, or force
push unless the user explicitly requests it. Creating commits does not authorize
publishing them.

Read these references only when needed:

- [references/context-efficiency.md](references/context-efficiency.md) for detailed Git retrieval scope.
- [references/selective-staging.md](references/selective-staging.md) for mixed files or hunk staging.
- [references/verification.md](references/verification.md) for verification and test escalation.
- [references/execution-environment.md](references/execution-environment.md) for blocked Git writes.

Report commit IDs, messages, verification results, and remaining changes. Keep the
report short.
