# Finding-specific verification

**Trigger:** Load when preparing verification for a finding or verifying implemented findings.

Start with the narrowest sufficient verification. Expand only when risk, dependency scope, or failure behavior requires it.

Route by category:

- correctness — behavior, contract, invariant, state-transition, or edge-condition checks;
- security — focused security tests, static analysis, dependency checks, or authorization/input checks;
- performance — benchmark, profiler, query count, load measurement, or equivalent measurement;
- reliability — failure-path, timeout, retry, cancellation, cleanup, concurrency, or resilience checks;
- maintainability — relevant behavior checks plus structural or dependency verification.

Verification must test the mechanism addressed by the finding. Do not claim verification from unrelated passing tests.

For each selected finding state:

- check performed;
- scope;
- result;
- remaining uncertainty;
- blocker, if verification could not be completed.
