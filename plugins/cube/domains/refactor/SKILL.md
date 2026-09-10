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

Refactor only when the expected benefit exceeds added complexity,
navigation cost, and regression risk. "No meaningful refactoring is
justified" is a valid result.

## Invocation modes

| Mode | Caller and purpose | Approval / return |
| --- | --- | --- |
| Direct assessment | User requests assessment | Present stable T1/T2/T3 proposals; wait for explicit selection before editing |
| Execution support | `fixing` supplies explicitly confirmed structural work | Exact confirmed scope is approved; implement, verify, return to `fixing` |
| Embedded framework | `implementation-refinement` evaluates current changed scope | Return compact opportunity, benefit, scope, risk, and safety; no T-IDs or user dialog; caller may apply safe in-scope work |

## Workflow

1. Use `token-efficient-retrieval` for the minimum evidence needed for a
   concrete structural hypothesis.
2. Evaluate responsibilities, duplication of knowledge, boundaries,
   coupling, testability, navigation cost, and unnecessary complexity. Use
   `programming-principles` when needed.
3. In direct mode, use
   [references/proposal-evaluation.md](references/proposal-evaluation.md)
   and [references/proposal-format.md](references/proposal-format.md), then
   present only material, stable proposals. Read
   [references/priorities.md](references/priorities.md) when severity is
   ambiguous or materially affects ordering.
4. Implement only after direct selection, inside exact execution-support
   scope, or when the embedded caller authorizes safe behavior-preserving
   work inside confirmed scope. Read
   [references/execution.md](references/execution.md) and
   [references/verification.md](references/verification.md) before
   implementing.
5. Escalate material out-of-scope or behavior-changing opportunities.

Stop once evidence has decided whether refactoring is justified and
authorized work is verified. Don't continue with style preferences,
unrelated cleanup, or preference-only abstractions.
