# Context management

## Soft budget

Use these defaults as a review trigger, not a correctness constraint:

| Item | Default |
| --- | --- |
| Directory depth | 2–3 |
| Search results | 10–20 |
| Source context | ±20–40 lines |
| Log context | ±10–30 lines |
| Deeply inspected files | 1–5 |
| Full file | Prefer below 300–500 lines |

When a limit is exceeded, explain the concrete reason for expansion and narrow again after the needed evidence is found. Correctness, security, and reproducibility outrank the budget.

## Notes and deduplication

Maintain a compact retrieval map: `path:range/symbol → purpose → confirmed fact or open question`. Keep facts, decisions, hypotheses, dependencies, and unresolved questions. Replace raw output with summaries after it has been interpreted. Do not reload unchanged ranges, repeated matches, stale logs, duplicate stack traces, or verbose command output unless the underlying data changed or a precise gap remains.

## Stop and escalate

Stop when evidence supports the answer, change, or test conclusion and another retrieval is unlikely to alter it. Escalate from local context to callers, dependencies, module, or repository only for a named uncertainty, contradiction, failed validation, or risk. Capture the reason and the new boundary before expanding.

