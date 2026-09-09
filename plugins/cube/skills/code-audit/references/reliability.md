# Reliability audit guidance

**Trigger:** Load when failures, retries, timeouts, idempotency, partial failures, cleanup, races, concurrency, transactions, or observability are material.

Investigate only relevant paths involving:

- error propagation and recovery;
- timeouts;
- retries and retry amplification;
- idempotency;
- partial failure;
- resource cleanup;
- concurrency or races;
- transaction boundaries;
- cancellation;
- recovery visibility and observability.

For each hypothesis establish:

- failure or interruption point;
- resulting state;
- whether work can be repeated, lost, duplicated, or left incomplete;
- recovery behavior;
- evidence that the path is reachable;
- operational impact.

Do not report generic missing defensive code without a plausible failure scenario and material consequence.
