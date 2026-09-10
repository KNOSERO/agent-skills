---
name: refactor
description: >
  Analyze selected code and perform only justified behavior-preserving
  refactorings. Direct use proposes stable T1, T2, T3, and later IDs and
  requires user selection. Embedded mode for implementation-refinement returns
  compact justified opportunities so its caller can decide safe in-scope work.
---

# Refactor

## Responsibility

Refactoring preserves public contracts, business rules, outputs, side effects, APIs, and other observable behavior. A bug fix or functional change is separate and must never be hidden in a refactoring.

Refactor only when expected benefit exceeds added complexity, navigation cost, and regression risk. No meaningful refactoring is justified is a valid result.

## Invocation modes

| Mode | Caller and purpose | Approval / return |
| --- | --- | --- |
| Direct assessment | User requests assessment. | Present stable T1/T2/T3 proposals; wait for explicit selection before editing. |
| Execution support | fix-me supplies explicitly confirmed structural work. | Exact confirmed scope is approved; implement, verify, return to fix-me. |
| Embedded framework | implementation-refinement evaluates current changed scope. | Return compact opportunity, benefit, scope, risk, and safety; no T IDs or user dialog. Caller may apply safe in-scope work. |

## Workflow

1. Use token-efficient-retrieval for minimum evidence needed for a concrete structural hypothesis.
2. Evaluate responsibilities, duplication of knowledge, boundaries, coupling, testability, navigation cost, and unnecessary complexity. Use programming-principles when needed.
3. In direct mode, use references/proposal-evaluation.md and references/proposal-format.md, then present only material stable proposals.
4. Implement only after direct selection, inside exact execution-support scope, or when embedded caller authorizes safe behavior-preserving work inside confirmed scope. Read references/execution.md and references/verification.md before implementation.
5. Escalate material out-of-scope or behavior-changing opportunities.

Stop after evidence decides whether refactoring is justified and authorized work is verified. Do not continue with style preferences, unrelated cleanup, or preference-only abstractions.
