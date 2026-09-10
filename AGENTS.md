# AGENTS.md — Operating Contract for `KNOSERO/agent-skills`

## Purpose and scope

This file protects the skill framework while agents work in this repository.
It defines project-wide activation, routing, ownership, and safety rules.

It does **not** duplicate or redefine the internal behavior of a skill.

```text
AGENTS.md protects usage rules.
WORKFLOWS coordinate work.
SKILLS own capabilities.
REFERENCES provide conditional knowledge.
PROJECT DOCS provide project knowledge.
```

No layer may silently take responsibility from another layer.

## Core invariant

```text
USE THE SKILL SYSTEM.
DO NOT REIMPLEMENT THE SKILL SYSTEM.
```

For every task, use this order:

```text
USER REQUEST
→ read this contract
→ select the owning workflow
→ activate required skills
→ retrieve project evidence
→ perform work
→ verify
→ finish
```

Do not replace this with ad-hoc reasoning, random file reading, or direct implementation.

## Activation and routing

Activate a matching owning skill without waiting for the user to name it.
Use intent, task type, artifact type, and repository context.

Use one primary workflow and the smallest required supporting capability set:

```text
PRIMARY WORKFLOW
→ smallest required capability set
```

Do not load every related skill, reference, or document.

### Workflow selection

Use [problem-solving](docs/flows/problem-solving.md) when the requested solution is materially open: a complex problem, requirement, symptom, or change proposal needs analysis or decisions. It owns **THINK** and produces a confirmed solution and execution handoff.

Use [fix-me](docs/flows/fix-me.md) when the user asks to execute a confirmed solution, ticket, plan, specification, or execution handoff. It owns **EXECUTE**. Do not restart full problem-solving unless evidence contradicts a confirmed decision or exposes a material open decision.

Use [the workflow index](docs/flows/README.md) to select another defined workflow. Do not combine workflow stages or gates by default.

### Capability ownership

If an existing skill owns the needed responsibility, use it. Do not perform the same responsibility manually while leaving that skill inactive.

| Need | Owning skill |
| --- | --- |
| Complex, materially open solution | `problem-solving` |
| Confirmed implementation or change | `fix-me` |
| Repository or documentation retrieval | `token-efficient-retrieval` |
| Material user decision | `grilling` |
| Business-process reasoning | `business-process-analysis` |
| Exact implementation scope | `implementation-discovery` |
| Non-trivial execution ordering | `implementation-plan` |
| Compact inter-stage state | `context-state` |

The caller decides **when** a capability is required. The owning skill decides **how** to perform it.

## Boundaries

Agents must not:

- invent a parallel workflow;
- bypass an owning skill;
- copy a skill workflow into ad-hoc reasoning or this file;
- weaken required skill activation because a task appears easy;
- expand a skill's responsibility while using it;
- transfer responsibility between skills unless routing explicitly requires it;
- edit a skill only to make the current task easier.

`AGENTS.md` owns **when** the repository must route to a workflow or skill.
Each `SKILL.md` owns **how** that workflow or capability works.

Project documentation is evidence, not orchestration. Skills determine the evidence needed; architecture, business rules, API contracts, development rules, and tests provide the project-specific facts.

## Skill authoring and references

Use this rule for every new or changed skill:

```text
SKILL.md = minimal complete contract for the normal path.
references/ = conditional knowledge for a specific non-normal path.
```

Keep a rule in `SKILL.md` when it is required for most normal executions. This includes activation, responsibility, scope, exclusions, normal workflow, core decision rules, mandatory boundaries, approval rules, normal capability routing, output and handoff contracts, stop conditions, invariants, and required formats.

Before creating or keeping a reference, ask:

```text
Will a normal execution usually need to read this reference?
```

- **Yes:** move the required contract into `SKILL.md`.
- **No:** the reference may be appropriate.

A reference that must be read on nearly every execution is not lazy-loaded knowledge.

### Reference rules

- Add a reference **ONLY WHEN** its knowledge is conditional: an edge case, optional workflow branch, special mode, provider/tool/framework rule, large lookup table, migration, recovery, conflict resolution, unusual verification, or extended examples.
- Give every reference an explicit trigger: `When <condition>, read <reference>.`
- State when not to load the reference when that prevents unnecessary context.
- Keep the normal path executable from `SKILL.md` without mandatory reference reads.
- Do not create a reference only to make `SKILL.md` shorter.
- Do not duplicate a normal-path contract in both `SKILL.md` and a reference.
- Optimize the total context needed for the current task, not the line count of one file.

`AGENTS.md` must contain only cross-skill authoring rules. Do not add domain workflow rules such as testing, refactoring, logging, or code-search procedures here; the owning skill defines them.

When reviewing an existing skill, trace its normal path first. Mark a reference for future review when the skill normally opens it every time. Do not mass-refactor skills unless the user requests it or a direct contradiction prevents correct behavior.

## Framework infrastructure

For normal project implementation, do not modify:

- `skills/` or `plugins/*/skills/`;
- `AGENTS.md`;
- `docs/flows/`;
- skill routing rules or descriptions.

Treat these files as framework infrastructure. Change them only when the user explicitly requests an agent-framework change.

Before changing a skill, workflow, routing rule, or this file, determine whether the task changes framework behavior. If it does, check:

- activation and routing impact;
- responsibility ownership and overlap;
- token and context impact;
- compatibility with other workflows;
- stop conditions and handoff contracts;
- normal-path contract versus conditional reference boundary.

For a skill change, identify its responsibility, callers, routed skills, exclusions, and handoff contracts. Make the smallest coherent change. Do not optimize one skill in isolation if it breaks another skill's responsibility.

## Documentation and versioning

Keep `README.md` installation and usage information in English. Write other documentation in Polish unless the user asks for another language. Include only content that changes understanding or action.

Use `MAJOR.MINOR.PATCH`. For a normal change, increase `MINOR` and reset `PATCH`. For a small fix, increase `PATCH`. Increase `MAJOR` only when the user requests it. Update the project's version location when one exists.

## Final check

Before finishing, confirm:

- an owning workflow was selected;
- required skills were activated and unrelated skills were not loaded;
- project evidence supports the work;
- no framework responsibility was duplicated, bypassed, or moved;
- every normal path remains executable from its `SKILL.md`;
- references have explicit conditional triggers and no mandatory normal-path dependency;
- the requested artifact was verified.
