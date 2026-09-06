---
name: code-audit
description: Audit selected code for security, performance, reliability, correctness, and maintainability; present evidence-based findings with Blocker, Critical, Major, and Minor priorities; then implement items selected by the user.
---

# Code audit

## 1. Foundation and scope

Required skill: `programming-principles`.

Before analysis, find and load this skill through the skill mechanism available in the current environment. Apply its rules when analyzing, proposing, implementing, and verifying changes. Do not copy its contents here.

Work on the code specified by the user. Read its contracts, usages, tests, configuration, and run instructions when available. If the scope cannot be determined, ask the user to specify it.

By default, an audit is analysis without code changes. Make changes only after presenting findings and receiving the user's selection. If the user wants only a report, stop after presenting the results.

Do not call code vulnerable, incorrect, or slow without evidence, a possible scenario, and an impact. Separate confirmed issues from hypotheses requiring measurement or further checks.

## 2. Audit areas

| Category | Check |
| --- | --- |
| Security | Trust boundaries, validation and encoding, authentication, authorization, secrets, sensitive data, injection, cryptography, deserialization, file paths, SSRF, configuration, and dependencies. |
| Performance | Algorithmic complexity, repeated I/O, N+1 queries, memory use, concurrency, caching, data size, and unnecessary computation. Confirm important findings with measurements, benchmarks, or a profiler. |
| Reliability | Error handling, timeouts, retries, idempotency, transactions, resource release, race conditions, partial failures, and observability. |
| Correctness | Business rules, validation, invariants, data consistency, transaction boundaries, and compliance with the public contract. |
| Maintainability | Responsibilities, dependencies, encapsulation, reuse, testability, readability, and compliance with `programming-principles`. |

Do not create a finding only because code differs from a preferred style. Consider its actual effect on security, behavior, operating cost, or future changes.

## 3. Workflow

| Stage | Action |
| --- | --- |
| Scope and context | Establish what is audited, what data the code processes, who can call it, its dependencies, and the contract it should preserve. Record important assumptions. |
| Analysis | Review all relevant categories. Trace the path from input to outcome and identify where the contract, security, or operating cost may be affected. |
| Evidence | For each finding, identify a file, line, or symbol; describe the observed mechanism, scenario, and impact. If uncertain, state what is missing for confirmation. |
| Findings | Sort findings from most to least important. Assign stable `T1`, `T2`, `T3`, and subsequent identifiers. Each finding should describe one coherent problem and one proposed change. |
| User selection | Present the list, ask which identifiers to implement, and wait before the first change. A selection already given remains valid. |
| Implementation | Apply selected changes in stages, starting with the highest priority and respecting dependencies. Address security and correctness risks before reliability and performance unless evidence supports another order. |
| Verification | Choose checks appropriate to the finding: contract or security tests, static analysis, dependency audit, benchmark, profiler, or resilience test. Do not replace integration checks with mocks when the real dependency is available in an isolated environment. |
| Summary | Report completed identifiers, changed files, verification results, and findings that could not be confirmed or implemented. |

Add newly discovered problems with new identifiers and stop before implementing them if they are outside the user's selection.

## 4. Priorities

| Priority | Use when |
| --- | --- |
| Blocker | The problem prevents safe execution, a reliable audit, or further work without immediate risk. State what it blocks. |
| Critical | There is confirmed or strongly supported risk of exploitation, data loss, business-rule violation, serious failure, or unacceptable operating cost. |
| Major | The problem can significantly harm security, reliability, performance, or further development but does not block current operation. |
| Minor | A local improvement with small impact, such as removing unnecessary work, simplifying error handling, or resolving a minor ambiguity. |

Justify priority by impact and likelihood, not by category alone. If evidence is insufficient, state the uncertainty.

## 5. Finding format

| ID | Category | Priority | Location and evidence | Risk or impact | Recommended change | Confidence and dependencies | Verification |
| --- | --- | --- | --- | --- | --- | --- | --- |

Explain why each finding matters. Do not describe only what the code does. Refer to dependencies by the identifiers of other findings.

## 6. Security testing boundaries

Perform static analysis of code and configuration within the specified repository. Perform dynamic tests, exploit attempts, and service scans only in environments to which the user has indicated authorized access. Do not test production or disclose discovered secrets.
