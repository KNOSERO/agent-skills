---
name: code-audit
description: Audit selected code for material security, correctness, reliability, performance, and maintainability risks; report evidence-based findings with stable IDs, then implement only findings explicitly selected by the user.
---

# Code audit

Detect, assess, and report material risks in selected code. Implement only findings explicitly approved by the user and verify the approved changes.

This skill is not general code review, style review, refactor review, an automatic bug fixer, or a security scanner without evidence.

## Dependencies and boundaries

Before additional evidence retrieval, load and follow `token-efficient-retrieval`.

Load and follow `programming-principles` when evaluating maintainability or design.

Load and follow `documentation-guidelines` when presenting findings, decisions, verification, and results.

Do not copy the rules of these dependencies. Do not assume their filesystem paths. Do not load their conditional references eagerly.

If sufficient evidence already exists in caller context, do not perform additional retrieval.

## Scope and workflow

Work only within the user's selected code and stated audit goal.

```text
scope
→ load required dependencies
→ retrieve minimum evidence
→ screen audit areas
→ form concrete hypotheses
→ investigate relevant hypotheses
→ apply finding threshold
→ report findings
→ user selects IDs
→ implement selected scope
→ verify
→ summarize
```

Record assumptions that affect confidence. Do not expand scope silently.

## Audit areas

Screen all relevant categories, but investigate deeply only categories supported by scope, evidence, or a concrete hypothesis.

- Security
- Correctness
- Reliability
- Performance
- Maintainability

Use this decision pattern:

```text
category
→ materially relevant?
   no → dismiss
   yes → concrete hypothesis
            ↓
      minimum evidence
            ↓
   confirm / reject / uncertain
```

Do not complete checklists for their own sake.

Route detailed investigation only when needed:

- load `references/security.md` for a security-relevant scope or security hypothesis;
- load `references/correctness.md` for contracts, business rules, validation, invariants, consistency, state, transactions, or edge conditions;
- load `references/reliability.md` for failures, retries, timeouts, idempotency, partial failure, cleanup, races, concurrency, transactions, or observability;
- load `references/performance.md` only for a concrete performance mechanism or hypothesis;
- load `references/maintainability.md` only for a material maintainability hypothesis;
- load `references/finding-evaluation.md` when evaluating evidence, finding boundaries, or hypotheses;
- load `references/priorities.md` when assigning or resolving priority;
- load `references/verification.md` when defining or executing verification;
- load `references/active-testing.md` only when active testing is explicitly being considered.

## Evidence threshold

Every finding requires:

```text
evidence + mechanism + plausible scenario + impact + confidence
```

Apply this threshold:

```text
observation
→ meaningful risk or cost?
   no → omit
   yes → sufficient evidence?
            no → hypothesis / unconfirmed concern
            yes → finding
```

Do not report stylistic preferences, unusual code, pattern differences, or hypothetical refactor opportunities as findings without material risk or cost.

Use these confidence states:

- `Confirmed`
- `Strongly supported`
- `Hypothesis`

Priority and confidence are independent.

For each retrieval:

```text
observation
→ hypothesis
→ evidence need
→ load and follow token-efficient-retrieval
→ update confidence
→ stop or widen
```

Stop retrieval when further evidence is unlikely to change the finding, confidence, priority, or verification.

## Finding lifecycle

```text
candidate
→ investigated
→ rejected
   OR
→ hypothesis
   OR
→ finding
→ reported
→ selected / not selected
→ implemented / blocked
→ verified
```

Use stable IDs `T1`, `T2`, `T3`, ….

An ID is identity, not severity. Never change the meaning of an existing ID. A new problem receives the next available ID.

Each finding must include:

- ID;
- category;
- priority;
- evidence/location;
- mechanism/scenario;
- impact;
- recommended action;
- confidence;
- verification.

Priority reflects material impact and likelihood; category alone does not determine severity.

Load `references/finding-evaluation.md` and `references/priorities.md` when their decisions are needed.

## User approval gate

Audit is read-only until the user selects findings.

Do not implement findings automatically. Previously explicit approval of particular IDs remains valid.

Implement only:

- selected findings;
- necessary dependent changes;
- necessary verification.

Do not implement unrelated cleanup, renames, formatting, opportunistic refactors, architecture changes, or additional findings.

If a newly discovered problem is outside the approved scope, assign the next ID and report it. If it blocks safe completion, report it as a blocker.

## Verification

Verification is finding-specific. Start with the narrowest sufficient check and expand only when risk or dependency scope requires it.

Route verification through `references/verification.md`.

The default routing is:

```text
correctness → behavior or contract checks
security → focused security checks
performance → measurement
reliability → failure-path or resilience checks
maintainability → behavior plus structural verification
```

## Active testing safety

Static analysis within the selected scope is allowed.

Exploit attempts, dynamic security testing, service scans, active probing, and tests affecting a running environment require appropriate authorization. Never test production without explicit authorization. Do not expose secrets found during the audit.

Load `references/active-testing.md` only when active testing is under consideration.

## Stop conditions

Stop analysis when:

```text
relevant categories screened
+
material hypotheses resolved enough
+
further retrieval unlikely to change findings materially
```

Stop implementation when:

```text
all selected findings implemented or explicitly blocked
+
required verification complete
```

Summarize findings, selected IDs, changed scope, verification, unresolved uncertainty, and blockers.
