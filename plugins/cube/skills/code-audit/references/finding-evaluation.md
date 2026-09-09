# Finding evaluation

**Trigger:** Load when deciding whether an observation is a finding, whether evidence is sufficient, whether a concern remains a hypothesis, or whether symptoms should be combined.

A finding must contain:

```text
evidence + mechanism + plausible scenario + impact + confidence
```

Evaluate candidates in this order:

1. Is the observation connected to a meaningful risk or cost?
2. Is there a concrete mechanism?
3. Is there a plausible reachable scenario?
4. Is the impact material?
5. Is the evidence sufficient?
6. Is confidence stated accurately?
7. Is the recommended action proportionate?
8. Is verification specific and feasible?

Use:

- `Confirmed` when the behavior or mechanism is directly established;
- `Strongly supported` when evidence is compelling but one material condition remains indirect;
- `Hypothesis` when the concern is plausible but evidence is insufficient.

Keep `Hypothesis` separate from a confirmed finding. Do not inflate uncertainty to create a finding.

Combine observations into one finding when they share the same mechanism, scenario, impact, and remediation. Split them when remediation, verification, priority, or affected contract differs.

A finding should contain:

- ID;
- category;
- priority;
- location/evidence;
- mechanism/scenario;
- impact;
- recommended action;
- confidence;
- verification.
