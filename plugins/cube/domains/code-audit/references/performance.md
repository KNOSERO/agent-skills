# Performance audit guidance

**Trigger:** Load only when a concrete performance mechanism, large data path, repeated I/O, N+1 behavior, algorithmic complexity concern, memory pressure, concurrency bottleneck, caching issue, or repeated work exists.

Investigate mechanisms such as:

- algorithmic complexity;
- repeated I/O;
- N+1 access;
- large data handling;
- memory growth or excessive allocation;
- concurrency bottlenecks;
- ineffective caching;
- unnecessary repeated work.

Separate:

```text
visible mechanism
≠ measured cost
```

A visible mechanism may justify a finding when its scaling behavior and scenario are clear. Do not claim a measured or numeric impact without measurement.

For each finding distinguish:

- confirmed mechanism;
- affected workload or scaling condition;
- expected consequence;
- measured cost, if available;
- measurement required for final confidence.

Use measurement, profiling, query counts, benchmarks, or equivalent verification when performance impact is material.
