---
name: implementation-refinement
description: >
  Critically improve an already implemented and initially verified non-trivial
  change inside its confirmed scope. Normally called by fix-me, it iterates on
  material quality improvements and returns a compact quality-saturation result
  to its caller. Do not use it as a user entry workflow, to redesign confirmed
  behavior, or for cosmetic cleanup.
---

# Implementation refinement

## Responsibility

Own iterative quality improvement of the current implementation, not execution lifecycle, product design, or user approvals.

~~~text
current implementation → evaluate → concrete improvement hypotheses → select justified improvements → apply → verify → evaluate again → quality saturation
~~~

Caller provides confirmed behavior, scope, constraints, acceptance criteria, current implementation, and initial verification. Return compact results to caller; do not start a separate user dialogue.

## Activation

Strongly prefer after initial verification of non-trivial fix-me involving business logic, several components, a new abstraction, structural change, persistence, concurrency, error handling, public API, integration, security/performance-sensitive behavior, complex tests, or material change to existing code.

Skip plainly trivial work such as a typo, simple constant, obvious one-line documentation correction, or trivial configuration edit. Do not decide only from line count.

## Operating rules

1. Confirm behavior, scope, constraints, and verification boundary. Use token-efficient-retrieval before additional evidence.
2. Rethink implementation approach before editing only when it materially improves the confirmed solution's execution. Do not reopen problem-solving for a local detail.
3. Inspect changed scope deeply, not the repository broadly. Form concrete hypotheses about responsibilities, dependencies, duplication, testability, error handling, edge cases, reliability, simplicity, and relevant performance/security.
4. Select only improvements whose expected benefit exceeds implementation cost, added complexity, and regression risk. Prefer highest value first.
5. Use only justified frameworks: programming-principles for design, refactor embedded mode for structural opportunities, code-audit embedded mode for material risks, documentation-guidelines for documentation presentation.
6. Apply only improvements inside confirmed scope that preserve confirmed behavior and public contracts, or are necessary to complete the instruction safely.
7. Verify each material improvement with the smallest relevant check; evaluate again and iterate when a result reveals another concrete material hypothesis.
8. Escalate changes to confirmed behavior, public contracts, business scope, or material architecture. Use grilling for an open material decision; use problem-solving only when confirmed solution itself must be reconsidered.

## Embedded framework contracts

Call refactor or code-audit with changed scope, confirmed behavior, constraints, and precise question. They return compact opportunities or material findings, never T IDs or a separate user approval loop.

Caller may apply a finding or structural improvement only when it is safe, behavior-preserving, and inside confirmed scope. Report unrelated existing problems; do not automatically fix them.

## Quality saturation

Stop only when required behavior and acceptance criteria are satisfied, relevant verification passes, no known Blocker/Critical/Major issue remains in changed scope, no obvious high-value refactor/correctness/reliability/security/complexity reduction remains, and the next iteration is marginal or cosmetic with benefit no greater than cost, complexity, and regression risk.

Do not use a percentage score. Stop instead of continuing with variable renames, formatting, preference-only abstractions, or cosmetic cleanup. Prefer correct, simple, coherent, maintainable, well-verified work over endless perfectionism.

## Return contract

Return applied improvements and justification, verification results, material findings left unmodified with scope reason, required escalation, and quality-saturation decision with concise basis.
