# Cube Skills

Reusable Agent Skills distributed as one plugin for Codex and Claude Code. The plugin includes the complete skill collection in `plugins/cube/skills/`.

## Install in Codex

From the repository root, Codex can discover the repo marketplace at `.agents/plugins/marketplace.json`. Install the `cube` plugin from the marketplace UI, or use the local plugin path during development.

After installation, all skills are available from the `cube` plugin.

## Install in Claude Code

Add this repository as a marketplace:

```text
/plugin marketplace add https://github.com/KNOSERO/codex
```

Install the complete plugin and reload it:

```text
/plugin install cube@knosero
/reload-plugins
```

Claude Code exposes plugin skills under the `cube` namespace:

```text
/cube:problem-solving
/cube:code-audit
/cube:refactor
```

## Included skills

| Skill | Purpose |
| --- | --- |
| [business-process-analysis](plugins/cube/skills/business-process-analysis/SKILL.md) | Reconstruct business processes from system evidence. |
| [context-state](plugins/cube/skills/context-state/SKILL.md) | Maintain the compact canonical state of a staged task. |
| [code-audit](plugins/cube/skills/code-audit/SKILL.md) | Audit code for meaningful risks. |
| [documentation-analysis](plugins/cube/skills/documentation-analysis/SKILL.md) | Establish facts and conflicts from project documentation. |
| [documentation-guidelines](plugins/cube/skills/documentation-guidelines/SKILL.md) | Set a consistent documentation standard. |
| [export-result](plugins/cube/skills/export-result/SKILL.md) | Export a completed result as Markdown. |
| [feedback-summary](plugins/cube/skills/feedback-summary/SKILL.md) | Summarize established progress, decisions, open points, and next steps without restarting analysis. |
| [git-commit](plugins/cube/skills/git-commit/SKILL.md) | Create logical Conventional Commits. |
| [grill-me](plugins/cube/skills/grill-me/SKILL.md) | Explicitly start a guided decision interview. |
| [grilling](plugins/cube/skills/grilling/SKILL.md) | Resolve material decisions in dependency-aware interview rounds. |
| [implementation-discovery](plugins/cube/skills/implementation-discovery/SKILL.md) | Locate exact technical scope for a confirmed solution. |
| [implementation-plan](plugins/cube/skills/implementation-plan/SKILL.md) | Turn confirmed discovery into a concrete implementation plan. |
| [long-result](plugins/cube/skills/long-result/SKILL.md) | Produce complete, useful responses. |
| [problem-solving](plugins/cube/skills/problem-solving/SKILL.md) | Orchestrate staged analysis through implementation readiness. |
| [programming-principles](plugins/cube/skills/programming-principles/SKILL.md) | Guide source-code and test design. |
| [refactor](plugins/cube/skills/refactor/SKILL.md) | Propose and implement behavior-preserving refactorings. |
| [short-result](plugins/cube/skills/short-result/SKILL.md) | Produce concise, sufficient responses. |
| [task-decomposition](plugins/cube/skills/task-decomposition/SKILL.md) | Break non-trivial work into verifiable stages. |
| [token-efficient-retrieval](plugins/cube/skills/token-efficient-retrieval/SKILL.md) | Retrieve only the evidence needed for a decision. |
| [solution-design](plugins/cube/skills/solution-design/SKILL.md) | Define and confirm the behavior-level solution concept. |

## Repository layout

```text
plugins/cube/
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
└── skills/
    └── <skill-name>/SKILL.md
```

The packaged copies under `plugins/cube/skills/` are the single source distributed by both marketplaces.

## License

MIT. Copyright (c) 2026 Rafał Pilecki.
