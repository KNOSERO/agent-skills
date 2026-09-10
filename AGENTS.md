# AGENTS.md — Operating Contract for `KNOSERO/agent-skills`

## Purpose

This file governs how agents use the skill system in this repo: activation,
routing, ownership, safety. It does not redefine what any single skill does.

```text
AGENTS.md    — when to route, and to what
WORKFLOWS    — how a task's lifecycle runs
SKILLS       — how one capability works
REFERENCES   — conditional detail for a genuine branch
PROJECT DOCS — facts about this codebase
```

No layer takes over another layer's job.

## Categories

Every skill has exactly one:

| Category | Owns | Examples |
| --- | --- | --- |
| Entrypoint | Recognizes intent, routes to one workflow, stays thin | `fix-me`, `problem-solve`, `grill-me`, `implemented-plan` |
| Workflow | A task's full lifecycle: stages, routing, completion | `fixing`, `problem-solving`, `grilling`, `implementation-refinement` |
| Domain | Doing one kind of work well, no lifecycle ownership | `refactor`, `code-audit`, `business-process-analysis`, `documentation-analysis`, `documentation-guidelines`, `programming-principles`, `solution-design` |
| Support | A cross-cutting capability any workflow can call | `token-efficient-retrieval`, `context-state`, `task-decomposition`, `implementation-discovery` |
| Action | One narrow technical operation | `git-commit` |
| Presentation | Result shape and delivery only, manual-only | `short-result`, `long-result`, `export-result`, `feedback-summary` |

One workflow owns the task. An entrypoint never does the workflow's job. A
domain or support skill returns its result and lets go — it never keeps the
task, and never starts a parallel one.

## The rule

Use the skill system. Don't reimplement it.

```text
request → read this file → pick the owning workflow → activate what it needs
→ gather evidence → do the work → verify → finish
```

No ad-hoc reasoning in place of routing, no direct implementation that skips
the owning workflow.

## Routing

Activate the owning skill as soon as you recognize the task; don't wait to
be asked by name. Use intent, task type, artifact type, and repository
context.

`implemented-plan` is the one manual-only exception: activate it only on an
explicit request for a portable handoff, e.g. `/cube:implemented-plan`. No
workflow may trigger it automatically.

Run one primary workflow plus the smallest support set it actually needs.
Don't preload every related skill or reference "just in case."

**Workflow selection**

| Situation | Flow |
| --- | --- |
| The solution is materially open — needs analysis or a decision | [problem-solve → problem-solving](docs/flows/problem-solving.md) |
| A confirmed solution, ticket, plan, or handoff needs executing | [fix-me → fixing](docs/flows/fix-me.md) |
| Anything else defined | [flow index](docs/flows/README.md) |

Don't restart problem-solving on a confirmed handoff unless new evidence
contradicts an established decision or exposes one that's still open. Don't
combine stages or gates from different flows by default.

**Capability ownership**

| Need | Owner |
| --- | --- |
| Materially open solution | `problem-solve` → `problem-solving` |
| Confirmed implementation or change | `fix-me` → `fixing` |
| Repository or documentation retrieval | `token-efficient-retrieval` |
| Material user decision | `grill-me` → `grilling` |
| Business-process reasoning | `business-process-analysis` |
| Exact implementation scope | `implementation-discovery` |
| Iterating a non-trivial implementation | `implementation-refinement`, via `fixing` |
| Portable transfer to another chat or agent | `implemented-plan` — manual only |
| Compact inter-stage state | `context-state` |

The caller decides *when* a capability is needed; the owning skill decides
*how*. It always hands control back — never a parallel workflow, never kept
lifecycle ownership.

## Boundaries

Don't:

- run a parallel workflow next to the owning one;
- skip the owning skill because the task looks easy;
- fold a skill's job into ad-hoc reasoning, here or anywhere else;
- widen a skill's responsibility while using it;
- move responsibility between skills without a routing rule saying so;
- edit a skill just to make today's task more convenient.

`AGENTS.md` decides *when* to route. Each `SKILL.md` decides *how* the
routed work happens. Project docs are evidence, not orchestration: they
supply facts (architecture, business rules, contracts, tests); skills
decide which facts they need.

## Writing a skill

```text
SKILL.md    = the complete contract for the normal path
references/ = detail for a genuine branch off that path
```

Put a rule in `SKILL.md` when most normal runs need it: activation,
responsibility, scope, exclusions, the normal flow, core decision rules,
mandatory boundaries, approvals, normal capability routing, output and
handoff contracts, stop conditions, required formats.

Before adding a reference, ask: would a normal run read this anyway? If
yes, it belongs in `SKILL.md` — splitting it out doesn't save context, it
scatters the contract across files a normal run has to open regardless.

A reference earns its place only for a genuine split from the normal path:
a different interface, platform, or provider; a rarely taken branch; a
large lookup table; a named edge case such as conflict resolution,
migration, or recovery. Give it an explicit trigger (`When <condition>,
read <reference>`), say when not to load it, and never duplicate the same
contract in both places.

## Prose style

Say it once, plainly. A short sentence beats a bulleted taxonomy; one
well-chosen metaphor, reused, beats redefining a concept every time it
appears. If a sentence only restates the frontmatter or the line above it,
cut it.

This approach, and the reference threshold above, draws on community
skill-authoring conventions — notably
[mattpocock/skills' CLAUDE.md](https://github.com/mattpocock/skills/blob/main/CLAUDE.md).
Read it for the approach, not the content: our categories, routing table,
and thresholds are project-specific and stay as defined here.

## Framework infrastructure

Don't touch these for a normal implementation task — only for an explicit,
requested framework change:

- `plugins/*/{entrypoints,workflows,domains,support,actions,presentation}/`
- `AGENTS.md`
- `docs/flows/`
- routing rules or skill descriptions

Before changing any of them, check: activation and routing impact,
responsibility ownership and overlap, token and context impact,
compatibility with other workflows, stop conditions and handoff contracts,
and whether content belongs in `SKILL.md` or a reference. Make the smallest
coherent change; don't fix one skill's ergonomics by breaking another's
contract.

## Docs and versioning

Keep `README.md` in English. Write everything else in Polish unless asked
otherwise. Include only what changes understanding or action.

Version as `MAJOR.MINOR.PATCH`: bump `MINOR` for a normal change, `PATCH`
for a small fix, `MAJOR` only when asked. Update the version wherever the
project tracks it.

## Before finishing

- An owning workflow was selected, not invented.
- Only the skills the task needed were activated.
- The work is backed by project evidence.
- No responsibility was duplicated, skipped, or moved without a rule saying so.
- Every skill's normal path still runs from its `SKILL.md` alone.
- Every reference has an explicit trigger and isn't secretly load-bearing.
- The requested artifact was verified.
