# Problem model

Load this reference when the problem has multiple interacting constraints, decisions, dependencies, or unresolved states and a compact explicit model materially improves reasoning.

Keep the model compact and update it after each material discovery or decision. Record only information that can change the solution:

| Element | Record |
| --- | --- |
| Goal | desired outcome and, when relevant, current versus expected behavior |
| Evidence | confirmed facts and their sources |
| Boundaries | constraints, scope, and affected contracts or process |
| Decisions | confirmed, delegated, deferred, or unresolved choices |
| Dependencies | systems, components, people, or evidence the solution relies on |
| Risks | material failure paths, compatibility concerns, and assumptions |
| Unknowns | facts or decisions still capable of changing the result |

Do not force empty fields. Separate facts, inferences, assumptions, and decisions. Preserve unresolved dependencies as conditional branches instead of filling them with defaults.
