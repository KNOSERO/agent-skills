# Finding priorities

**Trigger:** Load when a finding requires a priority or its priority is ambiguous.

Use only:

- `Blocker`
- `Critical`
- `Major`
- `Minor`

Priority reflects material impact and likelihood. Category alone does not determine priority.

- `Blocker` — prevents safe execution, auditing, verification, or completion; explain what is blocked.
- `Critical` — severe confirmed or strongly supported harm, such as exploitation, data loss, severe business-rule violation, severe reliability failure, or unacceptable operating cost.
- `Major` — significant security, correctness, reliability, performance, operational, or maintainability impact without blocking current work.
- `Minor` — limited but actionable material impact.

Do not assign a higher priority merely because the category is security.

When likelihood, impact, or reachability is uncertain, preserve that uncertainty in confidence and evidence rather than hiding it in the priority.
