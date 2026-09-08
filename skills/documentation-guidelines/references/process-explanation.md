# Process explanation

Use this reference when the subject has order, communication, decisions, state changes, or alternative paths.

## Present the process

For a non-trivial process, combine a compact diagram with a step-by-step explanation. The diagram communicates order and relationships; the text explains conditions, inputs, outputs, and observable behavior.

Cover only paths supported by code, configuration, tests, requirements, contracts, decisions, or other reliable evidence.

For a larger process, consider:

| Area | Include when relevant and evidenced |
| --- | --- |
| Main path | The expected successful sequence and result. |
| Decisions | The condition and the resulting branch. |
| Alternatives | Valid paths that differ from the main sequence. |
| Failures | What fails, where it is visible, and the resulting state. |
| Retry/timeout | Trigger, limit, and eventual outcome. |
| Rollback/compensation | What is undone or compensated and when. |
| Final state | The state reached by each meaningful path. |

Avoid narrating every implementation detail. Explain behavior that changes what the reader should understand or do.
