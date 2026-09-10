# Cube Skills

Reusable Agent Skills distributed as one plugin for Codex and Claude Code. The plugin includes the complete skill collection organized by category under `plugins/cube/`.

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
/cube:problem-solve
/cube:fix-me
/cube:implemented-plan
/cube:code-audit
/cube:refactor
```

## How the skill system works

Use the map below to choose the entry point. It is an orientation guide, not a replacement for the detailed workflow documents.

```text
USER INTENT
→ ENTRYPOINT
→ OWNING WORKFLOW
→ SUPPORT / DOMAIN CAPABILITY
→ HANDOFF OR EXECUTION
→ VERIFICATION
→ FINISHED RESULT
```

An entrypoint is a small skill that only recognizes intent, preserves
confirmed state, and routes to one owning workflow. The owning workflow keeps
lifecycle, stage order, and completion. **One workflow owns the task**: a
support or domain capability always returns its result to the workflow that
called it and never keeps ownership after returning. See
[AGENTS.md](AGENTS.md#skill-categories) for the full category model.

Choose the path that matches the user's goal:

~~~text
Need to decide what to do?
→ problem-solve → problem-solving (THINK)
→ confirmed solution / Execution Handoff

Need to transfer established work into another agent or chat?
→ implemented-plan (TRANSFER, manual only)
→ self-contained copyable implementation prompt

Need to execute confirmed work now?
→ fix-me → fixing (EXECUTE)
→ implemented and verified change
~~~

implemented-plan is not an automatic step between problem-solving and
fixing. It is a deliberate bridge used only when a developer explicitly wants
to move established work to a fresh ChatGPT chat, Claude Code, Codex, or
another agent.

| Layer | Owns |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Project-wide routing, ownership, category model, and framework evolution rules. |
| This README | Map of skills, roles, categories, entry points, callers, and continuations. |
| [docs/flows/](docs/flows/README.md) | Detailed orchestration, stages, gates, and handoffs. |
| `SKILL.md` | The complete normal-path contract of one skill. |
| `references/` | Explicitly triggered, conditional knowledge only. |
| Project documentation | Evidence and project-specific facts. |

### Category and role legend

| Category | Meaning | Role in one task |
| --- | --- | --- |
| **Entrypoint** | Small, user-facing skill that recognizes intent and routes to one owning workflow. | Starts a flow; owns nothing else. |
| **Workflow** | Owns the lifecycle of one task: stages, capability selection, completion. | Coordinates work; the single owner for the task. |
| **Domain** | Owns one professional method for a type of work. | Called by a workflow; returns a compact result. |
| **Support** | Cross-cutting capability usable by any workflow. | Called by any caller that needs it; returns a compact result. |
| **Action** | Narrow technical operation. | Performed on request; no lifecycle of its own. |
| **Presentation** | Controls result shape or delivery only, never task logic. Manual-only. | Applied to an already-finished result. |

## Skill map

| Skill | Category | Purpose | Direct activation | Called by / flow activation | Returns or continues to |
| --- | --- | --- | --- | --- | --- |
| [problem-solve](plugins/cube/entrypoints/problem-solve/SKILL.md) | Entrypoint | Recognize an open problem and route to `problem-solving`. | Yes: open problem, requirement, symptom, or change proposal. | User or router. | `problem-solving`. |
| [problem-solving](plugins/cube/workflows/problem-solving/SKILL.md) | Workflow | Confirm what should be done for an open problem. | Yes, directly (back-compat). | `problem-solve`, user. | Confirmed solution and Execution Handoff for `fix-me` → `fixing`. |
| [fix-me](plugins/cube/entrypoints/fix-me/SKILL.md) | Entrypoint | Recognize confirmed work to execute now and route to `fixing`. | Yes: requested implementation, fix, update, test, documentation, or confirmed instruction. | User, `problem-solving` handoff, `implemented-plan` output. | `fixing`. |
| [fixing](plugins/cube/workflows/fixing/SKILL.md) | Workflow | Execute confirmed work now and drive justified quality refinement. | Yes, directly (back-compat). | `fix-me`. | Changed artifacts, quality saturation, final verification, and finished result. |
| [implementation-refinement](plugins/cube/workflows/implementation-refinement/SKILL.md) | Workflow | Critically improve a completed non-trivial implementation within its confirmed scope. | No separate user lifecycle; normally called by `fixing`. | `fixing` after initial verification. | Improvements, verification, saturation decision, and out-of-scope escalation to caller. |
| [grill-me](plugins/cube/entrypoints/grill-me/SKILL.md) | Entrypoint | Explicitly start a guided decision interview. | Yes: user requests an interview. | User. | `grilling`. |
| [grilling](plugins/cube/workflows/grilling/SKILL.md) | Workflow | Resolve material, non-discoverable decisions. | Normally no; use `grill-me` for a direct interview. | Any workflow with a material open decision. | Compact decision update to caller and `context-state`. |
| [implemented-plan](plugins/cube/entrypoints/implemented-plan/SKILL.md) | Entrypoint | Turn established session state into one portable implementation instruction. | **Only explicit request**, for example `/cube:implemented-plan`. | User only; never router, `problem-solving`, or `fixing`. | A self-contained copyable prompt; `READY_FOR_TRANSFER`. |
| [business-process-analysis](plugins/cube/domains/business-process-analysis/SKILL.md) | Domain | Reconstruct the business process affected by a subject. | Yes: process explanation or analysis. | `problem-solving` or `fixing` when process behavior matters. | Process model to caller, or direct user-facing explanation. |
| [solution-design](plugins/cube/domains/solution-design/SKILL.md) | Domain | Define the behavior-level solution, not technical implementation. | Yes when problem inputs are confirmed. | Usually `problem-solving`. | Confirmed concept to `problem-solving` and its handoff. |
| [refactor](plugins/cube/domains/refactor/SKILL.md) | Domain | Assess or perform a behavior-preserving structural change. | Yes: refactor assessment or selected refactor. | `fixing` and `implementation-refinement` in embedded mode. | Direct proposals for selection, or compact opportunities to caller. |
| [code-audit](plugins/cube/domains/code-audit/SKILL.md) | Domain | Find material code risks with evidence. | Yes: targeted audit. | `fixing` and `implementation-refinement` in embedded mode. | Direct findings for selection, or compact material findings to caller. |
| [documentation-analysis](plugins/cube/domains/documentation-analysis/SKILL.md) | Domain | Establish facts and conflicts from project documentation. | Yes: documentation fact analysis. | Usually `problem-solving`; any caller with a documentation question. | Evidence and decision inputs to caller. |
| [documentation-guidelines](plugins/cube/domains/documentation-guidelines/SKILL.md) | Domain | Control presentation quality and information structure. | Yes for documentation guidance. | Any skill creating documentation or explanations. | Presentation rules applied by caller. |
| [programming-principles](plugins/cube/domains/programming-principles/SKILL.md) | Domain | Guide code and test design decisions. | Yes for design guidance. | `fixing`, `refactor`, or `code-audit` when design quality matters. | Principles applied by caller. |
| [implementation-discovery](plugins/cube/support/implementation-discovery/SKILL.md) | Support | Locate the exact technical scope of confirmed work. | Yes for exact-scope discovery. | `fixing` for non-trivial execution. | Affected scope to its caller. |
| [token-efficient-retrieval](plugins/cube/support/token-efficient-retrieval/SKILL.md) | Support | Retrieve the smallest evidence set needed for a decision. | Normally no; it is the gate before repository or data retrieval. | Any skill that needs external or workspace evidence. | Minimum sufficient evidence to caller. |
| [task-decomposition](plugins/cube/support/task-decomposition/SKILL.md) | Support | Split non-trivial work into coherent, verifiable stages. | Yes when task staging itself is requested. | `problem-solving`, `fixing`, or another specialist. | Stage model to caller. |
| [context-state](plugins/cube/support/context-state/SKILL.md) | Support | Maintain compact authoritative state across stages. | Normally no. | Staged workflows and manual transfer preparation. | Checkpoint, Execution Handoff, or final canonical state. |
| [git-commit](plugins/cube/actions/git-commit/SKILL.md) | Action | Create small, logical Conventional Commits without publishing. | Yes: commit, split, organize, or prepare local changes. | User or execution work after changes are ready. | Commit IDs, verification, and remaining local changes. |
| [feedback-summary](plugins/cube/presentation/feedback-summary/SKILL.md) | Presentation | Summarize established progress and next steps. | Yes: continue without restarting analysis. | Any staged task that needs a concise continuity summary. | Compact state and recommended continuation. |
| [short-result](plugins/cube/presentation/short-result/SKILL.md) | Presentation | Keep an answer compact without losing required information. | Yes: concise output requested. | Any result-producing skill. | Compact final presentation. |
| [long-result](plugins/cube/presentation/long-result/SKILL.md) | Presentation | Produce a complete, structured, reusable result. | Yes: detailed result requested. | Any result-producing skill. | Full final presentation. |
| [export-result](plugins/cube/presentation/export-result/SKILL.md) | Presentation | Export a completed result as Markdown. | Yes: Markdown export requested. | A completed workflow or result skill. | Exported artifact. |

### Ownership model

~~~text
entrypoint recognizes intent → owning workflow runs lifecycle → caller selects needed frameworks → framework owns its method → compact result returns to caller
~~~

`implementation-refinement` is not an entry flow. It strengthens a non-trivial `fixing` run after initial verification. It may use only justified frameworks such as `programming-principles`, `refactor`, `code-audit`, `token-efficient-retrieval`, and `documentation-guidelines`; their direct-mode approval boundaries remain intact.

### Quick routing

| Need | Start with |
| --- | --- |
| "I have a problem but do not know the solution." | `problem-solve` |
| "Make a self-contained prompt so I can continue in another chat or agent." | `implemented-plan` — explicit manual activation only |
| "Implement this confirmed ticket, plan, handoff, or portable prompt." | `fix-me` |
| "Assess this refactor." | `refactor` |
| "I am in execution and need a behavior-preserving structural change." | `refactor` through `fixing` support mode |
| "Find only the evidence needed to decide." | `token-efficient-retrieval` through the active caller |
| "A user choice is materially open." | `grilling`, or `grill-me` for a direct interview |
| "Create logical commits from existing changes." | `git-commit` |

## Repository layout

```text
plugins/cube/
├── .codex-plugin/plugin.json
├── .claude-plugin/plugin.json
├── entrypoints/     <skill-name>/SKILL.md      # grill-me, fix-me, problem-solve, implemented-plan
├── workflows/       <skill-name>/SKILL.md      # grilling, fixing, problem-solving, implementation-refinement
├── domains/         <skill-name>/SKILL.md      # refactor, code-audit, business-process-analysis, ...
├── support/         <skill-name>/SKILL.md      # token-efficient-retrieval, context-state, ...
├── actions/         <skill-name>/SKILL.md      # git-commit
└── presentation/    <skill-name>/SKILL.md      # short-result, long-result, export-result, feedback-summary
```

Each `<skill-name>/` directory holds one `SKILL.md` and, when needed, a
`references/` folder with conditional knowledge. Both `plugin.json` manifests
declare all six category directories as skill roots, so every skill is
discovered regardless of which category it lives in. See
[AGENTS.md](AGENTS.md#skill-categories) for what each category owns.

## License

MIT. Copyright (c) 2026 Rafał Pilecki.
