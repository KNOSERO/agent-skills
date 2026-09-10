---
name: fixing
description: >
  Own the execution lifecycle for confirmed work: a fix, implementation,
  update, refactor, tests, documentation, or other confirmed instruction.
  Normally entered through fix-me, but usable by any caller that already
  holds a confirmed instruction. For non-trivial work, implement, verify,
  invoke implementation-refinement, reach quality saturation, then verify
  finally. Do not use for a materially open solution; use problem-solving.
  Never auto-run implemented-plan.
---

# Fixing

## Responsibility

```text
instruction → implementation → verification → justified refinement → quality saturation → final verification → finished result
```

Do the work in the project, not just suggest it. Preserve confirmed
decisions unless evidence contradicts them. `implementation-refinement` is a
support step that always returns here; it never becomes a parallel workflow.

## Execution flow

1. Define the final state: confirmed decisions, constraints, acceptance
   criteria, verification.
2. Inspect only the evidence needed for the next safe action, via
   `token-efficient-retrieval`.
3. Resolve a material open decision with grilling; decide small execution
   details yourself.
4. Pick the smallest specialists the change needs. For non-trivial work, use
   `implementation-discovery` for exact scope, `task-decomposition` only for
   real stages or verification boundaries.
5. Rethink the implementation approach before editing, only when it
   materially improves execution of the already confirmed solution — not to
   reopen problem-solving over a local detail.
6. Change the required artifacts, then verify (see below).
7. After initial verification of a non-trivial change, invoke
   `implementation-refinement`. Apply its justified improvements, verify
   them, and accept its saturation call or escalate its blocker.
8. Close out: final scope, acceptance, verification.

Repeat step 3 whenever a later step exposes a decision that wasn't visible
earlier — discovery narrowing scope, implementation revealing a contract
choice, refinement finding a structural trade-off. Don't batch several
steps before checking.

For a simple, coherent change: understand → edit → verify → finish.

## Verifying

Start with the smallest check that can prove the change, then widen only if
risk or a result demands it: targeted test or inspection → affected module →
broader check. Use whatever fits: test, compile, type-check, lint, static
analysis, schema/config validation, doc check, contract check, integration
test. Don't run a large suite when a targeted check is enough, and don't
skip a broader one the changed contract or risk actually requires.

When a check fails, work out why before touching anything else: caused by
this change, pre-existing and unrelated, or a sign the confirmed solution is
wrong. If this change caused it, fix the smallest cause and re-check. If
it's pre-existing, establish that with evidence and report the limitation.
If it challenges a confirmed decision, go back to it — grilling for a
material choice, problem-solving if the solution itself needs
reconsidering. Never report a finished result while a change-caused failure
stands.

## Capability routing

| Condition | Action |
| --- | --- |
| Evidence is needed | `token-efficient-retrieval` |
| Material user decision is unresolved | `grilling` |
| Exact scope is needed before a non-trivial change | `implementation-discovery` |
| Meaningful stages or verification boundaries exist | `task-decomposition` |
| Process behavior matters | `business-process-analysis` |
| Code/test design quality matters | `programming-principles` |
| Behavior-preserving structural work is needed | `refactor`, execution support mode |
| Material risk inspection is needed | `code-audit`, execution support mode |
| A non-trivial implementation passed initial verification | `implementation-refinement` |
| Documentation is created or changed | `documentation-guidelines` |

The routed skill owns its method; fixing owns lifecycle, scope, approvals,
and the final result. `implemented-plan` is never a dependency of this flow.

## Scope and completion

Apply behavior-preserving or safely required high-value refinement only
within confirmed scope. Report unrelated problems instead of fixing them.
If an improvement would change behavior, public contracts, architecture, or
scope, escalate through grilling or problem-solving.

Finish only at quality saturation: required changes and acceptance criteria
are complete, relevant verification passes, no known Blocker/Critical/Major
regression remains in the changed scope, and the next likely improvement is
marginal against its cost and regression risk.

Report changed artifacts and behavior, material decisions and improvements,
verification, the saturation basis, and any blocker or unrelated risk found
along the way.
