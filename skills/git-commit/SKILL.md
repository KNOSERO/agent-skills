---
name: git-commit
description: Split uncommitted repository changes into logical commits and create them using Conventional Commits.
---

# Git commits

Create safe, logical, reviewable commits from the changes in scope. Protect all existing user work and follow repository-specific rules.

## Priorities

Apply these priorities in order:

1. Protect existing user work and history.
2. Understand the changes and their dependencies.
3. Create atomic commits that can be reviewed, tested, and reverted independently.
4. Follow repository conventions.
5. Run verification proportionate to risk.
6. Minimize context and tool calls without reducing confidence.

Stop gathering context when there is sufficient evidence to make a safe and confident decision. If confidence is insufficient, expand context rather than guessing.

## 1. Purpose and standard

Use **Conventional Commits 1.0.0**. The basic message format is:

```text
<type>(<scope>): <description>
```

`scope` is optional. Keep the description short and unambiguous, and write it in the imperative mood. Use English commit types so tools and contributors can recognize them.

| Type | Use when |
| --- | --- |
| `feat` | Adding a feature or capability. |
| `fix` | Correcting a bug in existing behavior. |
| `refactor` | Changing structure without changing behavior. |
| `perf` | Improving performance without changing the contract. |
| `test` | Changing tests without changing production code. |
| `docs` | Changing documentation. |
| `build` | Changing dependencies or the build process. |
| `ci` | Changing CI or automation configuration. |
| `chore` | Performing other technical maintenance. |
| `revert` | Reverting an earlier commit. |

Mark a breaking change with `!`, for example `feat(api)!: change response shape`, and describe it in a `BREAKING CHANGE:` footer. Do not use `feat` or `fix` as generic labels for every change.

## Splitting changes

- One commit should contain one logical change that can be read, tested, and reverted separately.
- Do not combine unrelated features, refactoring, formatting, and documentation updates.
- Changes required together for the project to run should remain together or have a clear order.
- Include tests for a change in that change's commit unless the repository follows another convention.
- Preserve unrelated user changes. Do not remove, overwrite, or commit them without explicit scope.
- Do not create empty commits.

## Workflow

| Stage | Action |
| --- | --- |
| Reconnaissance | Follow [references/context-efficiency.md](references/context-efficiency.md). Start with cheap Git metadata and inspect content progressively. |
| Classification | Assign each change to a logical group and Conventional Commit type. Split mixed responsibilities. |
| Plan | Present the commit order, file or hunk scope, proposed message, and dependencies for each commit. |
| Selection | Before the first commit, wait for the user's selection if they have not specified the scope and authorized creating commits. Use identifiers such as `T1`, `T2`, and `T3` for groups. |
| Preparation | Follow [references/selective-staging.md](references/selective-staging.md). Stage only elements belonging to the selected group. |
| Verification | Follow [references/verification.md](references/verification.md). Check the staged diff, whitespace errors, secrets, unrelated changes, and proportionate tests or lint. |
| Commit | Create the agreed commit. After each commit, inspect its contents and repository status before continuing. |
| Summary | Report commit IDs, messages, scope, verification results, and remaining uncommitted changes. |

Do not use `git reset --hard`, `git clean`, `commit --amend`, rebase, or force push unless explicitly requested. Creating commits does not authorize publishing them to a remote repository.

## Plan format

| ID | Order | Type and scope | Change scope | Commit message | Dependencies | Verification |
| --- | --- | --- | --- | --- | --- | --- |

Examples: `feat(auth): add refresh token rotation`, `fix(parser): reject malformed headers`, `docs: describe local development setup`.

## Scope and history protection

Before staging, check the selected content for secrets, keys, tokens, passwords, temporary files, and other data that should not be committed. If you find any, stop and report the issue.

Do not remove, overwrite, or silently include unrelated user changes. Do not change the history of published commits without an explicit request. Do not use `git reset --hard`, `git clean`, `git commit --amend`, rebase, or force push unless explicitly requested. Creating commits does not authorize publishing them to a remote repository.

If the message or split needs correction, fix the staged changes and plan instead of creating temporary commits. Do not create empty commits.
