---
name: code-audit
description: >
  Audit selected code for material security, correctness, reliability,
  performance, and maintainability risks. Direct use reports stable findings
  for user selection; embedded mode returns compact material findings to an
  owning workflow such as implementation-refinement without a separate user
  dialog.
---

# Code audit

## Responsibility

Find material evidence-based risks, not style issues, refactor preferences, or automatic bug fixes. Every finding requires evidence, mechanism, plausible scenario, impact, and confidence.

Screen security, correctness, reliability, performance, and maintainability only when relevant to scope or a concrete hypothesis. Priority is Blocker, Critical, Major, or Minor; category does not determine priority.

## Invocation modes

| Mode | Caller and purpose | Approval / return |
| --- | --- | --- |
| Direct audit | User requests audit. | Report stable T1/T2/T3 findings; wait for selection before editing. |
| Embedded framework | implementation-refinement or fix-me inspects changed scope. | Return compact material findings, hypotheses, and classification; no user dialog or T IDs. Caller decides in-scope action. |

## Workflow

1. Work only on selected scope and goal. Use token-efficient-retrieval before new evidence and retrieve only what tests a concrete hypothesis.
2. Screen relevant categories and confirm, reject, or mark uncertain meaningful hypotheses.
3. Use programming-principles for material design/maintainability evaluation. Read only relevant reference: security.md, correctness.md, reliability.md, performance.md, or maintainability.md.
4. For direct mode, use stable T IDs and references/finding-format.md. Do not edit until user selects IDs.
5. For embedded mode, return material findings with evidence, mechanism, impact, confidence, priority, and one classification: required for safe completion; safe high-value improvement inside changed implementation; unrelated existing problem; or material behavior/architecture change requiring escalation.
6. Embedded caller may fix only first two classifications when work remains inside confirmed scope and behavior. Report unrelated problems and escalate material behavior/architecture changes.
7. Read references/verification.md when verification is planned or run.

Active testing requires authorization; never test production without it. Never expose secrets. Stop when relevant categories are screened and further evidence is unlikely to change a material finding or confidence.
