---
name: code-audit
description: Audit selected code for meaningful security, performance, reliability, correctness, and maintainability risks; report evidence-based findings with stable priorities and IDs, then implement only findings selected by the user.
---

# Code audit

Audit selected code, identify risks worth acting on, wait for the user's selection, implement only the approved scope, verify it, and report the result.

## Dependencies and boundaries

Before auditing, find and load these skills by name through the skill mechanism available in the environment:

- `token-efficient-retrieval` — obtain the minimum sufficient evidence.
- `programming-principles` — support maintainability, design, responsibilities, and testability evaluation.
- `documentation-guidelines` — govern how the audit, findings, and result are presented.

Do not copy their rules or assume their installation paths. If a required dependency is unavailable, report that fact instead of guessing its rules. Let each dependency control its own conditional references. Do not eagerly load all references.

The responsibility split is:

```text
Retrieval decides how much evidence to gather.
Programming principles support maintainability and design evaluation.
Code audit decides which risks are relevant and whether evidence justifies a finding.
Documentation guidelines decide how to communicate the result.
```

`programming-principles` does not replace audit-specific evaluation of security, performance, reliability, or correctness. `code-audit` is not a general refactoring review: it discovers and evaluates risks; `refactor` improves structure while preserving behavior.

## Evidence-first evaluation

Do not call code vulnerable, incorrect, unreliable, or slow without evidence, a plausible mechanism or scenario, and meaningful impact.

Every finding requires:

```text
evidence + mechanism + plausible scenario + impact + confidence
```

Create a finding only when the observed issue creates meaningful security, correctness, reliability, performance, operational, or maintainability risk or cost worth acting on. Do not report stylistic preferences, differences from a favored pattern, or issues added merely to fill a category.

Use this threshold:

```text
observation
→ meaningful risk or cost?
   no → omit
   yes → sufficient evidence?
            no → hypothesis / unconfirmed concern
            yes → finding
```

Priority and confidence are independent. Use `Confirmed`, `Strongly supported`, or `Hypothesis` when useful, and state what evidence is missing for an uncertain concern.

## Audit areas

Screen every category, but investigate deeply only categories relevant to the selected scope and available evidence.

| Category | Audit-specific focus |
| --- | --- |
| Security | Trust boundaries, input handling, authentication and authorization, secrets and sensitive data, injection, cryptography, deserialization, paths, SSRF, configuration, and dependencies. |
| Performance | Complexity, repeated I/O, N+1 behavior, memory, concurrency, caching, data size, and unnecessary work. Distinguish a visible mechanism from its measured cost. |
| Reliability | Error paths, timeouts, retries, idempotency, transactions, resource release, races, partial failures, and observability. |
| Correctness | Contracts, business rules, validation, invariants, consistency, and transaction boundaries. |
| Maintainability | Real impact of responsibilities, dependencies, coupling, testability, readability, or design decisions, evaluated with `programming-principles`. |

For each category, use:

```text
screen category → relevant? → concrete hypothesis → minimum evidence → confirm / reject / mark uncertain
```

Do not turn maintainability into a refactor review. Recommend refactoring only when it addresses a real risk or cost.

## One workflow

1. **Scope.** Work only on the user's selected code and goal. If scope is already clear from the conversation, do not ask again. If it genuinely cannot be determined, ask for the goal. Record assumptions that affect confidence.
2. **Retrieve minimum sufficient evidence.** Use `token-efficient-retrieval` and expand context only when a concrete uncertainty affects correctness or confidence. Do not automatically read the whole repository, all usages, full dependency trees, all tests, entire configurations, or large logs.
3. **Screen relevant audit areas.** Quickly dismiss categories with no meaningful connection to the code; do not deep-dive every category, class, or file.
4. **Investigate concrete risks.** For each hypothesis, retrieve only the evidence needed to confirm, reject, or leave it unconfirmed. Do not build a full system model when local evidence is sufficient.
5. **Produce findings.** Report only coherent, actionable problems with stable IDs `T1`, `T2`, `T3`, …; sort by priority. An ID is an identity, not a severity, and its meaning must not change during the conversation. New findings receive subsequent IDs.
6. **User selection.** By default, make no code changes. Present findings and wait for the user's selection. A previously explicit approval of particular IDs remains valid. If the user requests only a report, stop here.
7. **Implement selected findings.** Apply only selected findings, necessary dependent changes, and necessary verification. Do not add unrelated refactors, renames, formatting, cleanup, abstractions, or test rewrites. If an extra change outside the approved scope is required, explain the dependency and request expanded approval.
8. **Verify.** Start with the narrowest sufficient checks and expand only when risk or dependency scope requires it. Use real dependencies in an isolated environment when available; do not replace valuable integration checks with mocks.
9. **Summarize.** Report completed IDs, changed files, verification results, unresolved uncertainty, and blockers.

Stop analysis when relevant categories have been screened, concrete risks have sufficient evidence or are explicitly marked uncertain, and further retrieval is unlikely to change the findings. Stop implementation when all selected findings are complete or explicitly blocked and required verification is complete.

## Findings and priorities

Each finding must include at least: stable ID, category, priority, concrete evidence, mechanism or scenario, impact, recommended action, and confidence. Use the smallest clear representation; for several findings a table may use:

```text
ID | Category | Priority | Location / evidence | Risk / impact | Recommended change | Confidence / dependencies | Verification
```

Priorities remain `Blocker`, `Critical`, `Major`, and `Minor`, based primarily on impact × likelihood as a heuristic, not a formula. Do not raise priority merely because the category is security.

- `Blocker`: prevents safe execution, reliable auditing, verification, or further work; state what it blocks.
- `Critical`: confirmed or strongly supported exploitation, data loss, serious business-rule violation, severe reliability failure, or unacceptable operating cost.
- `Major`: significant harm to security, correctness, reliability, performance, operations, or future changes without blocking current work.
- `Minor`: limited but actionable impact.

## Performance, maintainability, and verification

Do not claim measurable performance impact without measurement when measurement is feasible. Without measurement, describe the mechanism and expected scaling behavior, avoid unsupported numbers, and mark the concern uncertain or measurement-dependent. A statically visible mechanism such as N+1 may itself justify a finding, but its actual cost must remain distinct from the mechanism.

Use `programming-principles` for maintainability and design judgments; do not duplicate its detailed guidance on naming, composition, extraction, domain modeling, testing, mocks, abstractions, or responsibilities.

Match verification to the finding:

```text
correctness → contract / behavior tests
security → focused tests, static analysis, or dependency checks
performance → benchmark, profiler, query count, or measurement
reliability → failure-path, resilience, timeout, or retry checks
maintainability → relevant behavior tests plus structural verification
```

## Scope, new findings, and security boundaries

If implementation reveals a new problem, assign the next stable ID but do not implement it automatically when it is outside the approved scope. Continue approved work unless the problem blocks safe completion; then report it as a blocker. Do not restart the entire audit after every new finding.

Static analysis of code and configuration is allowed within the selected scope. Dynamic tests, exploit attempts, service scans, and other active tests require user-indicated authorization for the environment. Never test production without explicit authorization, and never disclose discovered secrets in the report.
