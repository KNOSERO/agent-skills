# Codex Skills

Skills for code analysis, audits, refactoring, documentation, and Git commits. Skill instructions are written in Polish.

## Installation

You need Codex with the `skill-installer` skill available and network access to GitHub. Paste one of the following prompts into Codex.

### Install all skills

Install the complete set to include the skills that depend on each other:

```text
$skill-installer Install all skills from https://github.com/KNOSERO/codex/tree/master/skills. Treat each subdirectory containing SKILL.md as a separate skill.
```

### Install a selected skill

Provide the URL of the skill's directory:

```text
$skill-installer Install the documentation-guidelines skill from https://github.com/KNOSERO/codex/tree/master/skills/documentation-guidelines.
```

Replace `documentation-guidelines` in both the name and URL to select another skill. Include its dependencies from the table below. For example:

```text
$skill-installer Install refactor and programming-principles from https://github.com/KNOSERO/codex/tree/master/skills, using skills/refactor and skills/programming-principles as the skill paths.
```

### Verify installation

After installation, send a new message to Codex:

```text
Check whether documentation-guidelines is available and report the path to its SKILL.md file.
```

Use the name of a skill you installed. Codex detects newly installed skills automatically; if a skill does not appear, restart Codex. See the [official installation guidance](https://learn.chatgpt.com/docs/build-skills#install-curated-skills-for-local-use).

## Available skills

| Skill | Purpose | Dependencies |
| --- | --- | --- |
| [analysis-problem](skills/analysis-problem/SKILL.md) | Analyze a problem, assess affected modules, and propose an implementation approach in chat. | `documentation-guidelines`; `code-analysis` when analyzing existing modules |
| [code-analysis](skills/code-analysis/SKILL.md) | Explain a module, its flow, and potential issues in a report in chat, without modifying files. | `documentation-guidelines` |
| [code-audit](skills/code-audit/SKILL.md) | Audit code, prioritize findings, and implement fixes selected by the user. | `programming-principles` |
| [documentation-guidelines](skills/documentation-guidelines/SKILL.md) | Create and update Markdown documentation with a consistent structure and useful diagrams. | None |
| [git-commit](skills/git-commit/SKILL.md) | Split uncommitted changes into logical Conventional Commits and create them. | None |
| [programming-principles](skills/programming-principles/SKILL.md) | Apply shared principles for code design, refactoring, and testing. | None |
| [refactor](skills/refactor/SKILL.md) | Propose prioritized refactorings and implement changes selected by the user. | `programming-principles` |

## Installation details

The prompts use the `master` branch of `KNOSERO/codex`. Each skill lives in `skills/<skill-name>/SKILL.md`.

By default, `skill-installer` installs into `$CODEX_HOME/skills`, outside the project repository. If `CODEX_HOME` is not set, it uses `~/.codex/skills`.

For example, the default location of `documentation-guidelines` is:

| System | Installed file |
| --- | --- |
| Windows | `%USERPROFILE%\.codex\skills\documentation-guidelines\SKILL.md` |
| macOS / Linux | `~/.codex/skills/documentation-guidelines/SKILL.md` |

The installer stops if a destination skill directory already exists. Repeating an installation prompt does not update an existing copy. To update a skill, ask Codex to compare the installed copy with the repository version and preserve any local changes before replacing it.
