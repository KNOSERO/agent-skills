---
name: problem-solving
description: >
  Orchestrate a complex problem, requirement, symptom, or change proposal from
  problem framing to a confirmed solution and a self-contained execution
  handoff. Use this skill whenever the user asks what should be done and the
  task needs dependent analysis or material decisions. Route to specialized
  skills. Do not implement, edit artifacts, refactor, write documentation, or
  create a plan. Do not use it for a confirmed task that the user wants
  implemented now; use fix-me for that work.
---

# Problem-solving orchestrator

## Responsibility

Own THINK:

problem understanding → evidence → decisions → confirmed solution → execution handoff

Do not own implementation. Do not change code, tests, documentation,
configuration, or other project artifacts. Do not refactor, commit, or create
an implementation plan.

Use context-state before the first stage and after every meaningful stage. Pass
only active context, current facts, constraints, decisions, open questions,
blockers, and relevant evidence pointers to each specialist.

## Stages

Run only the stages that can change the next decision. Return only to the
nearest earlier stage that can resolve a new gap or contradiction.

1. **Problem framing** — Establish the problem, goal, impact, constraints,
   non-goals, known facts, and unknowns. Do not recommend a solution.
2. **Documentation analysis** — Use documentation-analysis when documentation
   may establish a fact, rule, conflict, or constraint.
3. **Decision check** — Use grilling only when a material, non-discoverable
   decision is open in the current scope.
4. **Process analysis** — Use business-process-analysis when existing business
   or system behavior may affect the solution. Skip it only for a purely
   conceptual problem with no process to reconstruct.
5. **Solution design** — Use solution-design to define the required behavior,
   boundaries, and material alternatives. Do not choose files or classes.
6. **Execution handoff** — Use context-state in handoff mode. Return the
   confirmed solution and the information fix-me needs to execute it.

## Routing rules

| Condition | Action |
| --- | --- |
| A stage needs repository, documentation, log, test, or data evidence | Use token-efficient-retrieval before retrieval. |
| A material user decision is unresolved | Use grilling in problem, process, or solution scope. |
| Existing business or system process may matter | Use business-process-analysis. |
| A stage has independent, meaningful work units | Use task-decomposition. |
| A fact or decision conflicts with current state | Use context-state to record the conflict, then return to the closest owning stage. |
| The user asks to execute a confirmed result | Hand the result to fix-me. Do not run implementation-discovery or implementation-plan here. |

The routed skill owns its method. This skill owns only stage order, compact
state, and the final handoff.

## Evidence and decisions

Find discoverable facts before asking the user. Use grilling only for a choice
that can materially change behavior, scope, contract, compatibility,
architecture, business rules, security, or future options. Do not ask about
execution details.

Keep confirmed facts, constraints, decisions, open questions, blockers, and
evidence pointers. Remove raw logs, rejected options, and full interview
history from active state.

## Required final handoff

First return the recommended solution and its brief justification. Then return
a separate Execution instruction with:

1. Goal
2. Confirmed solution
3. Important decisions
4. Constraints
5. Required changes
6. Acceptance criteria
7. Important verification
8. Known risks or blockers

The handoff must be sufficient for a new agent to use fix-me without the full
earlier conversation. Include only execution-relevant information. It is not a
step-by-step implementation plan and does not select implementation details.

## Completion

Stop when the solution is confirmed and the Execution instruction is complete.
Mark it ready for execution only when no blocker remains. Reopen a confirmed
decision only when new evidence directly contradicts it.
