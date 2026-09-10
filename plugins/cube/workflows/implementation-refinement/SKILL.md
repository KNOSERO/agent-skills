---
name: implementation-refinement
description: >
  Critically improve an already implemented and initially verified non-trivial
  change inside its confirmed scope. Normally called by fixing, it iterates on
  material quality improvements and returns a compact quality-saturation result
  to its caller. Do not use it as a user entry workflow, to redesign confirmed
  behavior, or for cosmetic cleanup.
---

# Implementation refinement

## Responsibility

```text
current implementation → evaluate → improvement hypotheses → select justified ones → apply → verify → evaluate again → quality saturation
```

Own iterative quality improvement of the current implementation — not
execution lifecycle, product design, or user approvals. The caller provides
confirmed behavior, scope, constraints, acceptance criteria, current
implementation, and initial verification. Return a compact result; don't
open a separate user dialogue.

## Activation

Run after initial verification of a non-trivial `fixing` change: business
logic, several components, a new abstraction, structural change,
persistence, concurrency, error handling, a public API, an integration,
security- or performance-sensitive behavior, complex tests, or material
change to existing code.

Skip plainly trivial work — a typo, a simple constant, an obvious one-line
doc fix, a trivial config edit. Don't decide by line count alone.

## Operating rules

1. Confirm behavior, scope, constraints, and the verification boundary; use
   `token-efficient-retrieval` before pulling more evidence.
2. Rethink the implementation approach before editing only when it
   materially improves execution of the confirmed solution — not to reopen
   problem-solving over a local detail.
3. Inspect the changed scope deeply, not the repository broadly. Form
   concrete hypotheses: responsibilities, dependencies, duplication,
   testability, error handling, edge cases, reliability, simplicity,
   relevant performance or security.
4. Select only improvements whose expected benefit exceeds their cost,
   added complexity, and regression risk. Highest value first.
5. Use only justified specialists: `programming-principles` for design,
   `refactor` (embedded mode) for structural opportunities, `code-audit`
   (embedded mode) for material risks, `documentation-guidelines` for
   documentation presentation. Each returns compact opportunities or
   findings, never T-IDs or its own approval loop with the user.
6. Apply only improvements inside confirmed scope that preserve confirmed
   behavior and public contracts, or are necessary to complete the
   instruction safely. Report unrelated problems instead of fixing them.
7. Verify each material improvement with the smallest relevant check;
   evaluate again and iterate when a result reveals another concrete
   hypothesis.
8. Escalate a change to confirmed behavior, public contracts, business
   scope, or material architecture — `grilling` for an open decision,
   `problem-solving` only if the confirmed solution itself must be
   reconsidered.

## Quality saturation

Stop when required behavior and acceptance criteria are satisfied, relevant
verification passes, no known Blocker/Critical/Major issue remains in the
changed scope, no obvious high-value refactor/correctness/reliability/
security/complexity reduction remains, and the next iteration would be
marginal or cosmetic against its cost and regression risk.

No percentage score. Stop instead of chasing variable renames, formatting,
preference-only abstractions, or cosmetic cleanup — correct, simple,
coherent, well-verified work beats endless polish.

## Return contract

Return applied improvements with justification, verification results,
material findings left unmodified with the reason, any required escalation,
and the quality-saturation decision with a concise basis.
