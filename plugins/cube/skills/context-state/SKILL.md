---
name: context-state
description: >
  Maintain a compact canonical task state across analysis, decision, design,
  execution, and transfer stages. Use this skill after every meaningful stage
  of a multi-stage workflow and before handing work to a fresh context. It may
  provide compact established state to implementation-plan, but it does not
  create the final copyable prompt, perform domain analysis, or reopen settled
  decisions.
---

# Context state

## Responsibility

Own the compact, authoritative state passed between stages. Keep what can
change the next decision. Remove raw evidence and obsolete reasoning from
active context without losing short, traceable records of material decisions.

implementation-plan owns conversion of established state into a portable prompt.
This skill can provide the compact canonical state; it must not take over the
copyable-prompt output.

## State model

Maintain these three layers:

~~~text
Active context: current problem model, confirmed facts, constraints,
non-goals, confirmed process and solution, open questions, blockers.

Decision ledger: decision ID, status, short reason, and dependency. Record
confirmed, delegated, deferred, rejected, and superseded decisions.

Evidence index: concise source pointer and the fact it supports. Do not copy
source payloads.
~~~

Use this schema when the state is substantial:

~~~yaml
stage: PROBLEM_FRAMING
problem: { statement: '', goal: '', impact: '' }
confirmed_facts: []
constraints: []
non_goals: []
process: { status: unknown }
solution: { status: unknown }
implementation: { status: not_started, affected_areas: [] }
open_questions: []
blockers: []
decision_ledger: []
evidence_index: []
ready_for_implementation: false
~~~

## Update rules

1. Merge a stage result by separating facts, inferences, user decisions, delegated decisions, unknowns, and blockers.
2. Keep only confirmed facts, active constraints, current decisions, and open questions in active context.
3. Move rejected or superseded information out of active context. Keep only a short ledger entry when its history can prevent a repeated decision.
4. Replace raw source text, command output, and interview transcript with precise evidence pointers and concise conclusions.
5. If new evidence contradicts state, mark the conflict and return control to the stage that owns the contradiction. Do not silently overwrite it.

## Modes

Use checkpoint after each meaningful stage. Use handoff before a new agent or
fresh context. Use final to persist the canonical state at the end of a
completed workflow or before explicit archival; it is not a stage that runs
specifically after implementation-plan.

When problem-solving passes a confirmed solution to fix-me, handoff mode must
return an **Execution Handoff** with only:

~~~text
Goal
Confirmed solution
Important decisions
Constraints
Required changes
Acceptance criteria
Important verification
Known risks or blockers
~~~

Do not include raw evidence, rejected options, interview history, or a
step-by-step implementation plan. This handoff states what must be achieved;
fix-me decides how to execute it.

For a manual implementation-plan request, provide only the compact established
state needed to build the portable prompt: current goal, confirmed facts and
decisions, constraints and non-goals, known project areas, acceptance and
verification, evidence pointers, open questions, and blockers. Do not create
the final copyable prompt.

In final mode produce **Final Canonical Context** with only:

1. problem and desired outcome;
2. confirmed facts, constraints, and non-goals;
3. confirmed business process and solution;
4. implementation decisions and exact affected areas, when known;
5. acceptance criteria and verification;
6. remaining blockers.

Set ready_for_implementation to true only when blockers are empty. Treat the
state as authoritative until implementation evidence directly contradicts it.
