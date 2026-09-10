# Finding-specific verification

**Trigger:** Load when planning or executing verification for an actual finding.

Map each finding to the narrowest sufficient evidence that verifies its mechanism and fix. Expand only when risk, dependency scope, or failure behavior requires it.

| Category | Verification evidence |
|---|---|
| correctness | behavior, contract, invariant, state, or edge-condition check |
| security | focused security, authorization, input, static, or dependency check |
| performance | benchmark, profiler, query count, load measurement, or equivalent |
| reliability | failure-path, timeout, retry, cancellation, cleanup, concurrency, or resilience check |
| maintainability | relevant behavior plus structural or dependency verification |

Report the check, scope, result, remaining uncertainty, and any blocker. Passing unrelated tests is not verification.
