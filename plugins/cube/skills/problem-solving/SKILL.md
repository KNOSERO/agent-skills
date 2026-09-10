---
name: problem-solving
description: >
  Orchestrate a complex problem, requirement, symptom, or change proposal from
  problem framing to a confirmed implementation-ready context. Use this skill
  whenever the task needs several dependent analysis and decision stages. Route
  to specialized skills; do not solve, design, or plan in this skill. Do not
  use it for a simple task with an already confirmed solution and scope.
---

# Problem-solving orchestrator

## Responsibility

Own the state machine. Decide which stage is needed next, give that stage only
the current task state, and merge its returned facts and decisions. Do not
duplicate documentation analysis, process analysis, design, interviewing,
repository discovery, or implementation planning.

Do not implement code. Implementation starts only after the final context says
`ready_for_implementation: true` and the user has requested implementation.

## State and stage contract

Use `context-state` before the first stage and after every stage. It owns the
canonical task state. Pass only its active context, evidence index, decision
ledger entries that still matter, and the current stage question.

Every stage must receive:

```text
stage question
confirmed facts and constraints
confirmed decisions
open questions and blockers relevant to that stage
evidence pointers relevant to that stage
```

Every stage must return a compact update with facts, inferences, decisions,
open questions, blockers, evidence pointers, and its exit status.

Never keep rejected options, superseded assumptions, raw logs, or a full
interview transcript in active context. Record a rejected material choice only
as a short decision-ledger entry.

## Pipeline

Run the following states in order. Re-enter only the nearest earlier state that
can resolve a new gap or contradiction.

```text
PROBLEM_FRAMING
→ DOCUMENTATION_ANALYSIS
→ PROBLEM_GRILL
→ PROCESS_ANALYSIS
→ PROCESS_GRILL
→ SOLUTION_DESIGN
→ SOLUTION_GRILL
→ IMPLEMENTATION_DISCOVERY
→ IMPLEMENTATION_GRILL
→ IMPLEMENTATION_PLAN
→ FINAL_CONTEXT
→ READY_FOR_IMPLEMENTATION
```

### 1. Problem framing

Establish the problem, desired outcome, impact, constraints, non-goals, known
facts, and unknowns. Do not recommend a solution. If framing contains a
material decision, use `grilling` in `problem` scope.

### 2. Documentation analysis

Use `documentation-analysis` to find applicable documentation and conflicts.
It must use `token-efficient-retrieval` when it needs source evidence.

### 3. Problem grill

Use `grilling` in `problem` scope for material choices that documentation and
other available evidence cannot answer. If missing facts remain, return to
documentation analysis. Continue only when the problem model is confirmed.

### 4. Process analysis and grill

Use `business-process-analysis` when existing business or system behavior may
matter. A plausible connection is enough. Skip it only for a purely conceptual
task with no existing process. Then use `grilling` in `process` scope only for
decisions exposed by the process result. Return to process analysis for missing
facts or an incorrect boundary.

### 5. Solution design and grill

Use `solution-design` to define the required behavior and compare alternatives
only when more than one material option remains. Then use `grilling` in
`solution` scope. Do not start implementation discovery until the solution
concept is confirmed.

### 6. Implementation discovery and grill

Use `implementation-discovery` to locate exact affected areas and technical
dependencies for the confirmed concept. Then use `grilling` in `implementation`
scope for decisions that discovery exposed. Do not turn a recommendation into a
decision without user authority.

### 7. Plan and final context

Use `implementation-plan` after all material implementation decisions are
settled. Use `context-state` in `final` mode to produce the authoritative
Final Implementation Context. Set `ready_for_implementation: true` only when
it has no remaining blockers.

## Routing rules

| Condition | Action |
| --- | --- |
| A stage needs repository, documentation, log, test, or structured-data evidence | Use `token-efficient-retrieval` before retrieval. |
| A material choice remains | Use `grilling` with the current stage scope. |
| A stage has independent, meaningful units | Use `task-decomposition`. |
| A stage result contradicts a confirmed fact or decision | Use `context-state` to mark the conflict, then return to the closest owning stage. |
| A user invokes an interview directly | `grill-me` routes to `grilling`; this orchestrator is not required. |

## Completion

Stop at `READY_FOR_IMPLEMENTATION` when the Final Implementation Context has:
the confirmed problem, desired outcome, facts, constraints, non-goals, process,
solution, implementation decisions, exact affected areas, acceptance criteria,
verification, and no blockers. Treat it as authoritative in later
implementation work. Reopen a settled decision only when new implementation
evidence directly contradicts it.
