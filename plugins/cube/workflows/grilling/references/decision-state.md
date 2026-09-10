# Decision state

Load this reference when the caller provides existing decisions, the interview spans multiple rounds, or delegation and deferral must be preserved across turns.

Maintain a compact state rather than replaying the conversation:

```text
confirmed facts:       facts established by evidence
confirmed decisions:   choices explicitly accepted by the user
delegated decisions:   choices the user authorized the agent to make, with scope
deferred decisions:    choices postponed, with trigger and affected work
unresolved decisions:  material choices still requiring an answer
contradictions:        incompatible facts, decisions, or interpretations
constraints:           conditions that bound the current solution
frontier:              unresolved decisions whose prerequisites are settled
```

For each decision, retain its stable ID, short statement, relevant evidence, dependencies, consequence, status, and scope. Preserve the user's wording when it defines a contract or boundary; summarize procedural history away.

An answer can update several fields at once. Remove a question when a new decision makes it irrelevant, and create a new item only when it has a material consequence. A recommendation belongs in evidence or notes until the user accepts it or delegates that scope.

Return the compact state to the consuming skill. Do not return the full interview transcript or repeat domain analysis owned by that skill.
