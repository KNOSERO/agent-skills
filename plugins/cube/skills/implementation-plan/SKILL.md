---
name: implementation-plan
description: >
  Turn a confirmed solution and implementation discovery into a concrete,
  step-by-step implementation plan with exact changes, dependencies, acceptance
  criteria, and verification. Use this skill only after material product,
  design, and implementation decisions are settled.
---

# Implementation plan

## Responsibility and boundary

Turn already collected information into an executable implementation plan. The plan must explain exactly what will be changed, in what order, and how the result will be verified.

This skill does not replace problem analysis, make unresolved product or architecture decisions, or implement changes. It may organize a confirmed solution into tasks, but it must stop and ask when the solution itself is not settled.

An execution orchestrator such as fix-me uses this plan internally only when
the confirmed work is non-trivial. Return the plan to that caller, which must
continue to implementation and verification. Never treat a plan as the final
result of an execution request.

## Inputs and readiness

Use the confirmed problem, process, solution, implementation-discovery result,
decisions, constraints, repository evidence, risks, and verification
expectations. Before writing the plan:

1. Separate confirmed facts and decisions from assumptions, proposals, and unknowns.
2. Check that the proposed implementation still satisfies the stated goal and constraints.
3. Retrieve only the repository facts needed to identify exact files, symbols, interfaces, schemas, tests, and dependencies.
4. Invoke `grilling` in `implementation` scope for every unresolved material
   choice, assumption, interpretation, or contradiction in the plan.

Do not silently convert an analysis recommendation into an approved implementation
decision. If the input is incomplete, return the exact blocker to
`problem-solving` instead of inventing details or producing a speculative plan.

## Plan construction

Create the minimum complete sequence of coherent tasks. Each task must describe one meaningful change and include:

- `Target` — exact file, directory, module, component, endpoint, schema, or other affected element;
- `Change` — the concrete modification to make, using observable language;
- `Reason` — which confirmed requirement, decision, or dependency it satisfies;
- `Depends on` — preceding task or decision, or `none`;
- `Acceptance` — how to tell that this task is complete;
- `Verification` — test, inspection, command, or evidence required at this boundary.

Order tasks by dependency, not by the order in which they were discovered. Group tightly coupled edits together, and split tasks at meaningful boundaries such as a different component, dependency, decision, risk, or verification point. Do not create vague tasks such as “update the code” or artificial micro-steps such as every individual editor action.

## Required output

Present the result in this order:

1. `Implementation outcome` — one concise statement of the intended final state.
2. `Scope` — what is included and explicitly excluded.
3. `Prerequisites and decisions` — confirmed inputs required before work starts; unresolved decisions are marked `blocked`.
4. `Execution plan` — numbered tasks in dependency order, each using the six fields above.
5. `Change map` — compact mapping from affected elements to planned changes.
6. `Verification plan` — checks for each task and final integration checks.
7. `Risks and rollback` — only risks that can change execution or recovery.
8. `Open questions and blockers` — exact decision or fact still needed, its impact, and the task it blocks.

If no blockers remain, pass the plan to `context-state` in `final` mode. Do
not claim that the implementation is complete.

## Plan quality gate

Before returning the plan, verify that:

- every planned change maps to a confirmed requirement or decision;
- every affected element is named precisely enough for another agent to find it;
- task order and dependencies are explicit;
- no task hides an unresolved choice;
- acceptance criteria are observable;
- verification covers behavior, compatibility, and important failure paths;
- the plan does not include unrelated cleanup or scope expansion.

For non-trivial plans, use `task-decomposition` to keep stages coherent and dependencies explicit. Use `documentation-guidelines` for the final presentation and `token-efficient-retrieval` when locating repository evidence.
