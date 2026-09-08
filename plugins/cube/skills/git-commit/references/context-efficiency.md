# Progressive context

Use the smallest amount of repository information that can support a safe decision. Do not load the whole repository, full Git history, or a large diff by default.

## Reconnaissance order

Start with:

1. `git status --short`
2. `git branch --show-current`
3. `git diff --stat`
4. `git diff --cached --stat`
5. Lists of changed and untracked paths

Then expand only as needed:

`file list → one file's diff → relevant hunks → surrounding code → dependencies → wider repository context`

Inspect unstaged and staged changes separately. Treat pre-existing staged changes as user work unless their ownership and scope are clear.

## Repository rules

Search narrowly for applicable instructions and commit conventions, such as `AGENTS.md`, `CONTRIBUTING.md`, local project instructions, commitlint or Conventional Commit configuration, and development workflow documentation. Read only sources that can affect the commits in scope.

If the convention remains unclear, inspect a small sample such as `git log -10 --oneline`. Do not inspect broader history without a concrete reason.

Expand context when needed to understand intent, dependencies, grouping, repository rules, or verification. Stop once the evidence is sufficient for a confident decision.
