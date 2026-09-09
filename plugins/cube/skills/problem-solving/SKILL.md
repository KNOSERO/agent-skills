---
name: problem-solving
description: >
  Drive a problem, idea, goal, requirement, symptom, or change proposal toward
  the strongest justified solution through a separate problem-framing phase.
  First think through and present the problem; do not present a solution in
  the framing turn. Use grill to question the user when the problem, intent,
  priorities, scope, behavior, or acceptance boundary is unresolved. Do not
  use it for tasks whose requirements and decisions are already explicit. When
  solving a problem about existing business or system behavior, always run
  business-process-analysis after the problem model is confirmed when the
  affected process may matter. Use
  referenced capabilities in dependent stages and re-evaluate the problem
  after each returned result.
---

# Problem solving

## Role and invariants

Own end-to-end reasoning from a meaningful problem input to the strongest solution justified by evidence. Missing information reduces certainty; it does not stop useful analysis when a valid partial or conditional solution exists.

Read-only: do not edit code or documentation, create commits, refactor, or implement unless explicitly assigned. Solve the actual problem, not the most interesting technical problem.

## Core flow

```text
understand problem → build problem model → present and confirm it
→ identify the next missing input → grill only for that input
→ assess whether a business process may matter
→ analyze that process when the answer is yes
→ run the next required capability → merge its result into the problem model
→ grill again for decisions exposed by that result
→ run the next required capability → develop and challenge solutions
→ complete or return a conditional result
```

### Problem-framing gate

Before presenting any solution, reason about and present the problem itself.
The first response for an open problem must contain only:

- the observed symptoms or situation;
- the evidence and facts that are known;
- the impact or why it matters;
- the desired outcome;
- constraints and non-goals;
- assumptions, unknowns, and the questions that can change the problem model.

Do not name, compare, or recommend solutions in this response. End by asking
the user to confirm or correct the problem model when its scope, meaning,
cause, goal, or success criteria are not explicit. Treat the confirmed model
as a gate: do not enter solution development until the user confirms it or
explicitly delegates that confirmation.

### Solution gate

After the problem model is confirmed, do not develop or recommend the main
solution before this gate:

1. List the assumptions that can change the solution, scope, behavior, or
   acceptance boundary.
2. Retrieve facts that can be established without the user.
3. Route every remaining material decision to `grill`.
4. Let `grill` ask the user in focused interview rounds. Do not answer on the
   user's behalf from a guess or from a default preference.

## Staged capability loop

Treat every routed skill as a stage, not as a one-time handoff. Before each
stage, state the current question that the stage must answer and pass only the
relevant confirmed facts, decisions, constraints, and unknowns. Do not invoke
all capabilities at the start. After the problem model is confirmed, assess
whether an existing business process may affect the problem. Treat a plausible
process connection as sufficient to run `business-process-analysis` before
solution development. If it is materially unclear whether a process may
matter, route that decision to `grill` before choosing a path. Skip process
analysis only when the problem is purely conceptual and no existing business
process or system behavior must be understood.

After a stage returns:

1. Record its result in the problem model. Separate confirmed facts,
   inferences, assumptions, decisions, risks, and new unknowns.
2. Check whether the result changes the problem boundary, goal, process,
   dependencies, risks, or acceptance criteria.
3. Send every newly exposed material question to `grill` before starting a
   dependent stage. Ask only questions whose answers can change the next
   stage or the solution.
4. Recompute which capability is needed next. Skip capabilities whose output
   cannot change the current decision.
5. Continue until the next safe stage and its exit condition are supported.

Example:

```text
unknown business behavior
→ grill asks only what is needed to locate the process
→ business-process-analysis reconstructs the process
→ update problem model with process facts and gaps
→ grill asks about decisions revealed by that process
→ run the next capability using the confirmed process context
```

The same loop applies to `task-decomposition`, `programming-principles`,
`documentation-guidelines`, and any future capability routed by this skill.
Do not ask downstream questions before the upstream stage has produced the
facts needed to make those questions meaningful.

## Reference routing

Load a problem-solving reference only when its trigger is true. After using a
reference, retain its conclusions in the compact problem model; do not treat
the reference name as evidence that its content was applied.

| Reference | Load when | Required result |
| --- | --- | --- |
| `problem-model.md` | constraints, decisions, dependencies, or unknowns interact | explicit current problem state and dependencies |
| `evidence-and-documentation.md` | documents, contracts, or sources may affect the requirement or conflict with implementation evidence | evidence status, conflicts, and their consequences |
| `solution-development.md` | at least two materially plausible solutions remain after the problem and decisions are confirmed | compared candidates and decision criteria |
| `solution-challenge.md` | the preferred solution has material risks, assumptions, or failure paths | challenged recommendation and mitigations |
| `completion.md` | the result is partial, conditional, deferred, blocked, or branched | correct completion state and remaining dependencies |

Do not load `solution-development.md` or `solution-challenge.md` during the
problem-framing phase. Do not load a reference merely because it is listed;
load it at the stage where its output can change the next decision.

If at least one material decision remains, asking the user is required even
when a reasonable recommendation exists. A recommendation may accompany the
question, but it does not replace the question.

Maintain only the material problem state needed for reasoning. Load [problem-model.md](references/problem-model.md) for multiple interacting constraints, decisions, dependencies, or unresolved states.

Retrieve only evidence needed for the current uncertainty; do not retrieve again when caller context is sufficient. Load [evidence-and-documentation.md](references/evidence-and-documentation.md) when documentation affects requirements, contracts, expected behavior, source-of-truth interpretation, or conflicts with implementation/runtime evidence.

Let `grill` classify facts, material decisions, and execution details. Do not
choose a material user decision without it. Continue only work that is
independent of the unresolved decision; keep dependent reasoning conditional.
Recommendations are not decisions. Delegation applies only to its stated
scope.

## Capability routing

| Capability | Trigger |
| --- | --- |
| `token-efficient-retrieval` | additional evidence retrieval is needed |
| `grill` | the current stage exposes a material decision, ambiguity, contradiction, unsupported assumption, or unclear acceptance boundary |
| `business-process-analysis` | after problem confirmation, an existing business or system process may affect the problem; a plausible connection is enough to run it before solution development. Skip only for a purely conceptual problem with no process to reconstruct |
| `task-decomposition` | reasoning has meaningful stages, dependencies, responsibilities, decisions, risks, or verification boundaries |
| `documentation-guidelines` | preparing the user-facing result |

Use the business-process analysis result as context. Load [solution-development.md](references/solution-development.md) for multiple materially plausible approaches or meaningful trade-offs. Load [solution-challenge.md](references/solution-challenge.md) when material risks or assumptions could make the preferred solution fail.

## Completion

Return the strongest justified solution. If material uncertainty remains, return the strongest valid partial or conditional solution and state what is unresolved and what changes with it. Do not call it solved while a material blocker could change the main solution. Load [completion.md](references/completion.md) for partial, conditional, blocked, deferred, or branched results.
