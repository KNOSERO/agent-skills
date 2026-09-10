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

Find material, evidence-based risks — not style issues, refactor
preferences, or automatic bug fixes. Every finding needs evidence, a
mechanism, a plausible scenario, an impact, and a confidence level.

Screen security, correctness, reliability, performance, and maintainability
only when relevant to scope or a concrete hypothesis. Priority is Blocker,
Critical, Major, or Minor; category never determines priority — read
[references/priorities.md](references/priorities.md) when priority is
disputed or ambiguous.

## Invocation modes

| Mode | Caller and purpose | Approval / return |
| --- | --- | --- |
| Direct audit | User requests an audit | Report stable T1/T2/T3 findings; wait for selection before editing |
| Embedded framework | `implementation-refinement` or `fixing` inspects changed scope | Return compact material findings, hypotheses, and classification; no user dialog, no T-IDs; caller decides in-scope action |

## Workflow

1. Work only the selected scope and goal. Use `token-efficient-retrieval`
   before new evidence and retrieve only what tests a concrete hypothesis.
2. Screen relevant categories and confirm, reject, or mark uncertain each
   meaningful hypothesis. Read
   [references/finding-evaluation.md](references/finding-evaluation.md)
   when evidence sufficiency, a finding's boundary, or its confidence
   classification is ambiguous.
3. Use `programming-principles` for material design/maintainability
   evaluation. Read only the relevant category reference:
   [security](references/security.md), [correctness](references/correctness.md),
   [reliability](references/reliability.md), [performance](references/performance.md),
   or [maintainability](references/maintainability.md).
4. Direct mode: use stable T-IDs and
   [references/finding-format.md](references/finding-format.md). Don't edit
   until the user selects IDs.
5. Embedded mode: return material findings with evidence, mechanism,
   impact, confidence, priority, and one classification — required for safe
   completion; safe high-value improvement inside changed implementation;
   unrelated existing problem; or a material behavior/architecture change
   needing escalation.
6. An embedded caller may fix only the first two classifications, and only
   inside confirmed scope and behavior. Report unrelated problems; escalate
   material behavior/architecture changes.
7. Read [references/verification.md](references/verification.md) when
   verification is planned or run.

Active testing (exploit attempts, dynamic security testing, service
scanning, active probing, anything touching a running environment) needs
explicit authorization — never test production without it. Read
[references/active-testing.md](references/active-testing.md) before any of
that. Never expose secrets. Stop once the relevant categories are screened
and more evidence is unlikely to change a material finding or its
confidence.
