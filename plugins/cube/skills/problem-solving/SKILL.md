---
name: problem-solving
description: Drive a problem, idea, goal, requirement, symptom, or change proposal toward the strongest justified solution using focused evidence, explicit decisions, clarification, and solution comparison.
---

# Problem solving

## Role and invariants

Own end-to-end reasoning from a meaningful problem input to the strongest solution justified by evidence. Missing information reduces certainty; it does not stop useful analysis when a valid partial or conditional solution exists.

Read-only: do not edit code or documentation, create commits, refactor, or implement unless explicitly assigned. Solve the actual problem, not the most interesting technical problem.

## Core flow

```text
understand problem → maintain minimum problem state → identify material uncertainty
→ retrieve evidence or resolve decisions when needed → develop candidate solution(s)
→ compare or challenge when materially useful → return the strongest justified solution
```

Maintain only the material problem state needed for reasoning. Load [problem-model.md](references/problem-model.md) for multiple interacting constraints, decisions, dependencies, or unresolved states.

Before additional evidence retrieval, load and follow `token-efficient-retrieval`. Retrieve only evidence needed for the current uncertainty; do not retrieve again when caller context is sufficient. Load [evidence-and-documentation.md](references/evidence-and-documentation.md) when documentation affects requirements, contracts, expected behavior, source-of-truth interpretation, or conflicts with implementation/runtime evidence.

For unresolved material decisions, ambiguities, contradictions, or unsupported assumptions, load and follow `grill`. Let it classify facts, material decisions, and execution details. Do not choose a material user decision without `grill`; continue independent reasoning where safe while dependent work remains conditional. Recommendations are not decisions; delegation applies only to its stated scope.

## Capability routing

| Capability | Trigger |
| --- | --- |
| `token-efficient-retrieval` | additional evidence retrieval is needed |
| `grill` | an unresolved material decision, ambiguity, contradiction, or unsupported assumption requires resolution |
| `business-process-analysis` | business process materially affects scope, behavior, state, contracts, dependencies, failure paths, or solution choice |
| `task-decomposition` | reasoning has meaningful stages, dependencies, responsibilities, decisions, risks, or verification boundaries |
| `documentation-guidelines` | preparing the user-facing result |

When business process matters, load `business-process-analysis` and use its result as context. Use `task-decomposition` only for non-trivial reasoning and `documentation-guidelines` for presentation. Load [solution-development.md](references/solution-development.md) for multiple materially plausible approaches or meaningful trade-offs. Load [solution-challenge.md](references/solution-challenge.md) when material risks or assumptions could make the preferred solution fail.

## Completion

Return the strongest justified solution. If material uncertainty remains, return the strongest valid partial or conditional solution and state what is unresolved and what changes with it. Do not call it solved while a material blocker could change the main solution. Load [completion.md](references/completion.md) for partial, conditional, blocked, deferred, or branched results.
