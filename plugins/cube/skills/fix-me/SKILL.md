---
name: fix-me
description: >
  Execute confirmed work now. Use this skill whenever the user asks to fix,
  implement, apply, update, change, correct, repair, refactor, add tests,
  update documentation, execute a plan, or finish a task. Also use it when the
  user provides a confirmed solution, ticket, specification, plan, execution
  handoff, or portable implementation prompt and wants it carried out. Inspect
  only what is needed, change the requested artifacts, verify the result, and
  return a finished result. Do not use it when the user asks what should be
  done or when the required solution is still materially open; use
  problem-solving for that work. Never auto-run implementation-plan.
---

# Fix me

## Responsibility

Own the execution lifecycle:

~~~text
instruction → implementation → verification → finished result
~~~

Do the work in the project when artifacts can be changed. Do not return only
code suggestions or an implementation plan.

Treat a supplied Execution Handoff, approved solution, ticket, specification,
plan, or portable implementation prompt as confirmed context. Preserve its
confirmed decisions. Do not reopen them without contradictory evidence.

If the supplied instruction already names the needed scope, dependencies, and
verification, execute it. Do not recreate its planning. Use task-decomposition
only when the work needs internal stages to make safe execution possible, then
continue to implementation.

## Interpret the input

| Input | Action |
| --- | --- |
| Confirmed instruction | Execute it. Do not ask again. |
| Discoverable fact | Find it with the smallest sufficient evidence. |
| Material open decision | Use grilling. |
| Execution detail | Decide it locally. |
| Material contradiction | Adapt locally when safe. Otherwise use grilling or return to problem-solving. |

## Execution flow

1. Define the expected final state, confirmed decisions, constraints, acceptance criteria, and verification.
2. Inspect only the current project state needed to perform the next safe action.
3. Resolve a material open decision before a dependent change. Do not ask about a discoverable fact or a small execution detail.
4. Select the smallest required specialist set. For non-trivial work, discover exact scope when needed and use task-decomposition only for meaningful stages, dependencies, risks, or verification boundaries.
5. Change every required artifact: code, tests, documentation, configuration, or another stated target.
6. Verify the changed behavior. Read [verification-loop.md](references/verification-loop.md) when selecting checks or when a check fails.
7. Complete a final scope and acceptance check. Do not silently skip a required part.

For a simple coherent change, use only:

~~~text
understand → edit → verify → finish
~~~

## Artifact rules

For a code change, locate the affected contract, direct dependencies, callers,
and focused tests only when they can change the implementation. Change the
code and add or update tests when the required behavior needs proof.

For a documentation change, find the relevant source of truth, use
documentation-guidelines, edit the documentation, and verify important links,
references, and consistency.

For configuration, schema, generated output, or another artifact, apply the
same rule: change the required target and run the smallest validation that can
prove the result.

## Capability routing

| Condition | Action |
| --- | --- |
| Evidence from a repository, document, log, test, or data source is needed | Use token-efficient-retrieval before retrieval. |
| A material user decision is unresolved | Use grilling in the correct scope. |
| Exact technical scope is needed before a non-trivial change | Use implementation-discovery. |
| Work has dependent stages, several components, important order, risk, or verification boundaries | Use task-decomposition. |
| Existing business or system process affects the change | Use business-process-analysis. |
| Code or test design quality affects the change | Use programming-principles. |
| A behavior-preserving structural change is required | Use refactor in execution support mode. |
| Existing code needs a material risk inspection | Use code-audit. |
| Documentation is created, updated, or restructured | Use documentation-guidelines. |
| Another available specialist skill directly owns required work | Use that skill instead of a generic procedure. |

implementation-plan is manual-only and is never an execution-stage dependency
of this flow. Do not load every related skill or reference. The routed skill
owns its method; this skill owns the whole execution lifecycle.

## Decision and scope rules

Use grilling when two valid choices have materially different effects on
behavior, public contracts, compatibility, architecture, data, security,
business rules, rollout, maintenance, or documentation scope. State the
decision and its consequence. Decide local names, formatting, private helpers,
file order, and similar details without an interview.

If project evidence contradicts the instruction, do not implement blindly.
Continue only when a local adjustment preserves the confirmed result. Otherwise
use grilling for an unresolved material choice or problem-solving when the
solution itself must be reconsidered.

Change the smallest coherent scope. Do not add unrelated cleanup. Include an
otherwise unrelated change only when it is necessary to complete the instruction
safely or to avoid an obvious material regression.

## Completion and report

Call work finished only when all required changes are present, acceptance
criteria are met, relevant available verification passed, no known material
regression remains, and no required part was silently skipped.

Return a short execution report with:

1. changed artifacts and resulting behavior;
2. material decisions made during execution;
3. verification performed and its result;
4. any remaining blocker or risk.
