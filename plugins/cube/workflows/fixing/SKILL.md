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

~~~text
instruction → implementation → verification → justified refinement → quality saturation → final verification → finished result
~~~

Do work in the project, not only suggestions. implementation-refinement is a support capability that returns to this flow; it never becomes a parallel user workflow. Preserve confirmed decisions unless evidence contradicts them.

## Execution flow

1. Define final state, confirmed decisions, constraints, acceptance criteria, and verification.
2. Inspect only evidence needed for the next safe action; use token-efficient-retrieval before retrieval.
3. Resolve a material open decision with grilling; decide small execution details locally.
4. Select the smallest required specialists. For non-trivial work, use implementation-discovery for exact scope and task-decomposition only for real stages or verification boundaries.
5. Rethink implementation approach before editing only when it materially improves execution of the already confirmed solution. Do not restart problem-solving for a local detail.
6. Change required artifacts and run smallest relevant verification. Read references/verification-loop.md when selecting checks or when a check fails.
7. After initial verification of non-trivial changed scope, invoke implementation-refinement. Apply its justified in-scope improvements, verify them, and accept its saturation result or escalate its blocker.
8. Complete final scope, acceptance, and verification checks.

For a simple coherent change: understand → edit → verify → finish.

## Capability routing

| Condition | Action |
| --- | --- |
| Evidence is needed | token-efficient-retrieval |
| Material user decision is unresolved | grilling |
| Exact scope is needed before non-trivial change | implementation-discovery |
| Meaningful stages or verification boundaries exist | task-decomposition |
| Process behavior matters | business-process-analysis |
| Code/test design quality matters | programming-principles |
| Behavior-preserving structural work is required | refactor in execution support mode |
| Material risk inspection is required | code-audit in execution support mode |
| Non-trivial implementation passed initial verification | implementation-refinement |
| Documentation is created or changed | documentation-guidelines |

The routed skill owns its method; fixing owns lifecycle, scope, approvals, and final result. implemented-plan is never an execution-stage dependency.

## Scope and completion

Apply behavior-preserving or safely required high-value refinement only within confirmed scope. Report unrelated existing problems. If an improvement changes behavior, public contracts, architecture, or scope, use grilling or problem-solving according to ownership.

Finish only after quality saturation: required changes and acceptance criteria are complete, relevant available verification passes, no known Blocker/Critical/Major regression remains in changed scope, and the next likely improvement is marginal compared with its cost and regression risk.

Report changed artifacts and behavior, material decisions and improvements, verification, saturation basis, and any blocker or unrelated risk.
