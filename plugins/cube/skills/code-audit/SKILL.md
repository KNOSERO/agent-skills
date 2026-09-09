---
name: code-audit
description: Audit selected code for material security, correctness, reliability, performance, and maintainability risks; report evidence-based findings with stable IDs, then implement only findings explicitly selected by the user.
---

# Code audit

Audit selected code for material risks and evidence-based findings. It is not style review, refactor review, or automatic bug fixing.

## Dependencies

Load dependencies conditionally:

- before additional evidence retrieval, load and follow `token-efficient-retrieval`;
- for maintainability or design evaluation, load and follow `programming-principles`;
- before preparing user-facing findings or results, load and follow `documentation-guidelines`.

Do not retrieve evidence already sufficient in caller context. Retrieve only to resolve a concrete hypothesis.

## Workflow

```text
scope
→ screen relevant categories
→ form concrete hypotheses
→ retrieve minimum sufficient evidence
→ confirm / reject / mark uncertain
→ report findings
→ user selects IDs
→ implement approved scope
→ verify
```

Work only within the selected scope and stated audit goal. Do not expand scope silently.

## Audit areas

Screen relevant categories:

- Security
- Correctness
- Reliability
- Performance
- Maintainability

Investigate deeply only categories supported by scope, evidence, or a concrete hypothesis. Preserve the model:

```text
category → concrete hypothesis → minimum evidence → finding threshold
```

## Finding invariant

Every finding requires:

```text
evidence + mechanism + plausible scenario + impact + confidence
```

```text
observation
→ meaningful risk or cost?
   no → omit
   yes → sufficient evidence?
      no → hypothesis / unconfirmed concern
      yes → finding
```

Priority is `Blocker`, `Critical`, `Major`, or `Minor`; category alone does not determine it. Priority and confidence are independent.

Use stable IDs `T1`, `T2`, `T3`, …; never change the meaning of an existing ID. A newly discovered problem receives a new ID.

## Conditional references

| Reference | Trigger |
|---|---|
| `security.md` | material security hypothesis |
| `correctness.md` | correctness or contract hypothesis |
| `reliability.md` | failure, resilience, or concurrency hypothesis |
| `performance.md` | performance hypothesis |
| `maintainability.md` | material maintainability hypothesis |
| `finding-evaluation.md` | ambiguous evidence, finding boundary, confidence, merging/splitting, or hypothesis-vs-finding status |
| `finding-format.md` | an actual finding must be presented |
| `priorities.md` | ambiguous severity, comparison, dispute, or materially consequential priority |
| `verification.md` | verification is being planned or executed |
| `active-testing.md` | active testing is being considered |

## Approval

Audit is read-only until the user explicitly selects findings. Implement only selected findings, dependent changes, and verification. Do not implement unrelated cleanup, formatting, refactors, architecture changes, or additional findings.

## Safety

- Active testing requires appropriate authorization.
- Never test production without explicit authorization.
- Never expose discovered secrets; redact values and report only the minimum necessary location and impact.

## Stop

Stop analysis when relevant categories are screened and further evidence is unlikely to change findings or confidence materially.

Stop implementation when approved findings are complete or blocked and required verification is complete.
