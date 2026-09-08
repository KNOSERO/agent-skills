# Process explanation

Use this reference when the subject has order, communication, decisions, state changes, or alternative paths.

## Recommended structure

For a larger or non-obvious process, prefer:

```text
Overview → Participants → Diagram → Step-by-step explanation → Decisions / alternatives / failures → Result
```

This is a progression, not a mandatory template. Small processes may need only a short explanation or a diagram with one clarifying paragraph.

## Participants

When several components, actors, or systems are needed to understand the process, consider a short table before the diagram:

| Participant | Responsibility |
| --- | --- |
| API Gateway | Accepts the request |
| Order Service | Processes the order |
| Payment Service | Authorizes payment |

Include only participants that affect comprehension. Do not turn this table into full component documentation.

## Diagram and steps

For a non-trivial process, combine a focused diagram with a step-by-step explanation. The diagram shows structure, ordering, communication, branches, or states. The text adds information that is not easy to infer from the diagram: intent, data passed, conditions, expected results, state changes, errors, and consequences.

Do not repeat a diagram as a list of its obvious arrows. If the only possible text is `A calls B; B calls C`, the diagram may be sufficient. Add steps when they explain behavior that changes the reader's understanding or action.

## Completeness

For a larger process, consider only relevant and evidenced paths:

| Area | Include when relevant and confirmed |
| --- | --- |
| Happy path | The expected successful sequence and result. |
| Decisions | The condition and resulting branch. |
| Alternative paths | Valid paths that differ from the main sequence. |
| Failure paths | What fails, where it is visible, and the resulting state. |
| Retry / timeout | Trigger, limit, and eventual outcome. |
| Rollback / compensation | What is undone or compensated and when. |
| Final state | The state reached by each meaningful path. |

Never invent missing paths. Base the description on code, configuration, tests, requirements, contracts, decisions, or other reliable evidence.
