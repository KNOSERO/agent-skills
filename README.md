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
/cube:implementation-plan
/cube:fix-me
/cube:code-audit
/cube:refactor
```

## How the skill system works

Use the map below to choose the entry point. It is an orientation guide, not a replacement for the detailed workflow documents.

```text
USER INTENT
→ FLOW ENTRY / ORCHESTRATOR
→ SPECIALIST OR SUPPORT CAPABILITY
→ HANDOFF OR EXECUTION
→ VERIFICATION
→ FINISHED RESULT
```

Choose the path that matches the user's goal:

~~~text
Need to decide what to do?
→ problem-solving (THINK)
→ confirmed solution / Execution Handoff

Need to transfer established work into another agent or chat?
→ implementation-plan (TRANSFER, manual only)
→ self-contained copyable implementation prompt

Need to execute confirmed work now?
→ fix-me (EXECUTE)
→ implemented and verified change
~~~

implementation-plan is not an automatic step between problem-solving and
fix-me. It is a deliberate bridge used only when a developer explicitly wants
to move established work to a fresh ChatGPT chat, Claude Code, Codex, or
another agent.

| Layer | Owns |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Project-wide routing, ownership, and framework evolution rules. |
| This README | Map of skills, roles, entry points, callers, and continuations. |
| [docs/flows/](docs/flows/README.md) | Detailed orchestration, stages, gates, and handoffs. |
| `SKILL.md` | The complete normal-path contract of one skill. |
| `references/` | Explicitly triggered, conditional knowledge only. |
| Project documentation | Evidence and project-specific facts. |

### Role legend

| Role | Meaning |
| --- | --- |
| **Flow entry / orchestrator** | Can start and coordinate a whole flow. |
| **Specialist** | Owns one domain task; can be used directly when that task is requested or by a flow. |
| **Support capability** | Helps a caller; normally returns a compact result to that caller. |
| **State / handoff** | Preserves compact task state between stages or contexts. |
| **Result / output** | Controls result depth, export, or continuity. |
| **Utility / action** | Performs a narrow operational action. |

## Skill map

| Skill | Purpose | Role | Direct activation | Called by / flow activation | Returns or continues to |
| --- | --- | --- | --- | --- | --- |
| [problem-solving](plugins/cube/skills/problem-solving/SKILL.md) | Confirm what should be done for an open problem. | Flow entry / orchestrator | Yes: open problem, requirement, symptom, or change proposal. | User or router. | Confirmed solution and Execution Handoff for `fix-me`. |
| [fix-me](plugins/cube/skills/fix-me/SKILL.md) | Execute confirmed work now. | Flow entry / orchestrator | Yes: requested implementation, fix, update, test, documentation, or confirmed instruction. | User or `problem-solving` handoff. | Changed artifacts, verification, and finished result. |
| [business-process-analysis](plugins/cube/skills/business-process-analysis/SKILL.md) | Reconstruct the business process affected by a subject. | Specialist | Yes: process explanation or analysis. | `problem-solving` or `fix-me` when process behavior matters. | Process model to caller, or direct user-facing explanation. |
| [solution-design](plugins/cube/skills/solution-design/SKILL.md) | Define the behavior-level solution, not technical implementation. | Specialist | Yes when problem inputs are confirmed. | Usually `problem-solving`. | Confirmed concept to `problem-solving` and its handoff. |
| [implementation-discovery](plugins/cube/skills/implementation-discovery/SKILL.md) | Locate the exact technical scope of confirmed work. | Specialist | Yes for exact-scope discovery. | `fix-me` for non-trivial execution. | Affected scope to its caller. |
| [implementation-plan](plugins/cube/skills/implementation-plan/SKILL.md) | Turn established session state into one portable implementation instruction. | Manual transfer flow | **Only explicit request**, for example `/cube:implementation-plan`. | User only; never router, `problem-solving`, or `fix-me`. | A self-contained copyable prompt; `READY_FOR_TRANSFER`. |
| [refactor](plugins/cube/skills/refactor/SKILL.md) | Assess or perform a behavior-preserving structural change. | Specialist | Yes: refactor assessment or selected refactor. | `fix-me` in execution-support mode. | Direct proposals for selection, or compact support result to `fix-me`. |
| [code-audit](plugins/cube/skills/code-audit/SKILL.md) | Find material code risks with evidence. | Specialist | Yes: targeted audit. | `fix-me` when risk inspection is required. | Findings for explicit selection, or verified selected changes. |
| [documentation-analysis](plugins/cube/skills/documentation-analysis/SKILL.md) | Establish facts and conflicts from project documentation. | Specialist | Yes: documentation fact analysis. | Usually `problem-solving`; any caller with a documentation question. | Evidence and decision inputs to caller. |
| [grill-me](plugins/cube/skills/grill-me/SKILL.md) | Explicitly start a guided decision interview. | Flow entry | Yes: user requests an interview. | User. | Invokes `grilling`; returns confirmed decisions or blockers. |
| [grilling](plugins/cube/skills/grilling/SKILL.md) | Resolve material, non-discoverable decisions. | Support capability | Normally no; use `grill-me` for a direct interview. | Any workflow with a material open decision. | Compact decision update to caller and `context-state`. |
| [token-efficient-retrieval](plugins/cube/skills/token-efficient-retrieval/SKILL.md) | Retrieve the smallest evidence set needed for a decision. | Support capability | Normally no; it is the gate before repository or data retrieval. | Any skill that needs external or workspace evidence. | Minimum sufficient evidence to caller. |
| [task-decomposition](plugins/cube/skills/task-decomposition/SKILL.md) | Split non-trivial work into coherent, verifiable stages. | Support capability | Yes when task staging itself is requested. | `problem-solving`, `fix-me`, or another specialist. | Stage model to caller. |
| [programming-principles](plugins/cube/skills/programming-principles/SKILL.md) | Guide code and test design decisions. | Support capability | Yes for design guidance. | `fix-me`, `refactor`, or `code-audit` when design quality matters. | Principles applied by caller. |
| [documentation-guidelines](plugins/cube/skills/documentation-guidelines/SKILL.md) | Control presentation quality and information structure. | Support capability | Yes for documentation guidance. | Any skill creating documentation or explanations. | Presentation rules applied by caller. |
| [context-state](plugins/cube/skills/context-state/SKILL.md) | Maintain compact authoritative state across stages. | State / handoff | Normally no. | Staged workflows and manual transfer preparation. | Checkpoint, Execution Handoff, or final canonical state. |
| [feedback-summary](plugins/cube/skills/feedback-summary/SKILL.md) | Summarize established progress and next steps. | State / handoff | Yes: continue without restarting analysis. | Any staged task that needs a concise continuity summary. | Compact state and recommended continuation. |
| [short-result](plugins/cube/skills/short-result/SKILL.md) | Keep an answer compact without losing required information. | Result / output | Yes: concise output requested. | Any result-producing skill. | Compact final presentation. |
| [long-result](plugins/cube/skills/long-result/SKILL.md) | Produce a complete, structured, reusable result. | Result / output | Yes: detailed result requested. | Any result-producing skill. | Full final presentation. |
| [export-result](plugins/cube/skills/export-result/SKILL.md) | Export a completed result as Markdown. | Result / output | Yes: Markdown export requested. | A completed workflow or result skill. | Exported artifact. |
| [git-commit](plugins/cube/skills/git-commit/SKILL.md) | Create small, logical Conventional Commits without publishing. | Utility / action | Yes: commit, split, organize, or prepare local changes. | User or execution work after changes are ready. | Commit IDs, verification, and remaining local changes. |

### Quick routing

| Need | Start with |
| --- | --- |
| “I have a problem but do not know the solution.” | `problem-solving` |
| “Make a self-contained prompt so I can continue in another chat or agent.” | `implementation-plan` — explicit manual activation only |
| “Implement this confirmed ticket, plan, handoff, or portable prompt.” | `fix-me` |
| “Assess this refactor.” | `refactor` |
| “I am in execution and need a behavior-preserving structural change.” | `refactor` through `fix-me` support mode |
| “Find only the evidence needed to decide.” | `token-efficient-retrieval` through the active caller |
| “A user choice is materially open.” | `grilling`, or `grill-me` for a direct interview |
| “Create logical commits from existing changes.” | `git-commit` |

## Repository layout

```text
plugins/cube/
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
└── skills/
    └── <skill-name>/
        ├── SKILL.md
        └── references/        # only conditional knowledge
```

The packaged copies under `plugins/cube/skills/` are the single source distributed by both marketplaces.

## License

MIT. Copyright (c) 2026 Rafał Pilecki.
