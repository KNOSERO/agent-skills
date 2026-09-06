---
name: git-commit
description: Split uncommitted repository changes into logical commits and create them using Conventional Commits.
---

# Git commits

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

## 2. Splitting changes

- One commit should contain one logical change that can be read, tested, and reverted separately.
- Do not combine unrelated features, refactoring, formatting, and documentation updates.
- Changes required together for the project to run should remain together or have a clear order.
- Include tests for a change in that change's commit unless the repository follows another convention.
- Preserve unrelated user changes. Do not remove, overwrite, or commit them without explicit scope.
- Do not create empty commits.

## 3. Workflow

| Stage | Action |
| --- | --- |
| Reconnaissance | Check `git status`, unstaged and staged differences, the current branch, and repository rules such as `CONTRIBUTING.md` or commitlint configuration. |
| Classification | Assign each change to a logical group and Conventional Commit type. Split mixed responsibilities. |
| Plan | Present the commit order, file or hunk scope, proposed message, and dependencies for each commit. |
| Selection | Before the first commit, wait for the user's selection if they have not specified the scope and authorized creating commits. Use identifiers such as `T1`, `T2`, and `T3` for groups. |
| Preparation | Stage only elements belonging to the selected group. Use selective staging when a file contains independent changes. |
| Verification | Check the staged diff, `git diff --cached --check`, and appropriate tests or lint. Ensure there are no secrets, temporary files, or unrelated changes. |
| Commit | Create the agreed commit. After each commit, inspect its contents and repository status before continuing. |
| Summary | Report commit IDs, messages, scope, verification results, and remaining uncommitted changes. |

Do not use `git reset --hard`, `git clean`, `commit --amend`, rebase, or force push unless explicitly requested. Creating commits does not authorize publishing them to a remote repository.

## 4. Plan format

| ID | Order | Type and scope | Change scope | Commit message | Dependencies | Verification |
| --- | --- | --- | --- | --- | --- | --- |

Examples: `feat(auth): add refresh token rotation`, `fix(parser): reject malformed headers`, `docs: describe local development setup`.

## 5. Scope and history protection

Before staging, check that the repository contains no secrets, keys, tokens, passwords, or data that should not be committed. If you find any, stop and report the issue.

Do not change the history of published commits without an explicit request. If the message or split needs correction, fix the staged changes and plan instead of creating temporary commits.
