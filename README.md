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
| [grill](plugins/cube/skills/grill/SKILL.md) | Resolve assumptions, ambiguity, decisions, and contradictions through dependency-aware question rounds. |
| [code-audit](plugins/cube/skills/code-audit/SKILL.md) | Audit code for meaningful risks. |
| [documentation-guidelines](plugins/cube/skills/documentation-guidelines/SKILL.md) | Set a consistent documentation standard. |
| [export-result](plugins/cube/skills/export-result/SKILL.md) | Export a completed result as Markdown. |
| [feedback-summary](plugins/cube/skills/feedback-summary/SKILL.md) | Summarize established progress, decisions, open points, and next steps without restarting analysis. |
| [git-commit](plugins/cube/skills/git-commit/SKILL.md) | Create logical Conventional Commits. |
| [implementation-plan](plugins/cube/skills/implementation-plan/SKILL.md) | Turn established analysis into a concrete implementation plan. |
| [long-result](plugins/cube/skills/long-result/SKILL.md) | Produce complete, useful responses. |
| [problem-solving](plugins/cube/skills/problem-solving/SKILL.md) | Drive problems toward justified solutions. |
| [programming-principles](plugins/cube/skills/programming-principles/SKILL.md) | Guide source-code and test design. |
| [refactor](plugins/cube/skills/refactor/SKILL.md) | Propose and implement behavior-preserving refactorings. |
| [short-result](plugins/cube/skills/short-result/SKILL.md) | Produce concise, sufficient responses. |
| [task-decomposition](plugins/cube/skills/task-decomposition/SKILL.md) | Break non-trivial work into verifiable stages. |
| [token-efficient-retrieval](plugins/cube/skills/token-efficient-retrieval/SKILL.md) | Retrieve only the evidence needed for a decision. |

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
