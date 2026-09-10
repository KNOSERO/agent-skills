---
name: problem-solving
description: >
  Own the THINK lifecycle for a complex problem, requirement, symptom, or
  change proposal: problem framing to a confirmed solution and a
  self-contained execution handoff. Normally entered through problem-solve,
  but usable by any caller that already has an open problem needing dependent
  analysis or material decisions. Route to specialized skills. Do not
  implement, edit artifacts, refactor, write documentation, or create a plan.
  Do not use it for a confirmed task that the user wants implemented now; use
  fix-me for that work.
---

# Problem-solving orchestrator

## Responsibility

```text
problem understanding → evidence → decisions → confirmed solution → execution handoff
```

Never touch code, tests, documentation, or configuration; never refactor,
commit, or write an implementation plan. That's THINK, not EXECUTE.

Run `context-state` before the first stage and after every meaningful one.
Pass specialists only the active context: current facts, constraints,
decisions, open questions, blockers, evidence pointers — never the full
history.

## Stages

Run only the stages that can change the next decision. Return only to the
nearest earlier stage that can resolve a new gap or contradiction.

1. **Problem framing** — goal, impact, constraints, non-goals, known facts,
   unknowns. No solution yet.
2. **Documentation analysis** — use `documentation-analysis` when
   documentation may establish a fact, rule, conflict, or constraint.
3. **Process analysis** — use `business-process-analysis` when existing
   business or system behavior may affect the solution. Skip it only for a
   purely conceptual problem with nothing to reconstruct.
4. **Solution design** — use `solution-design` for the required behavior,
   boundaries, and material alternatives. Not files or classes yet.
5. **Execution handoff** — use `context-state` in handoff mode; return the
   confirmed solution and what `fixing` needs to execute it.

Run a **decision check** after stages 2, 3, and 4: use `grilling` whenever a
material, non-discoverable decision is open in the current scope. Don't
batch several stages before checking, and don't skip a check just because an
earlier one came back `NO_OPEN_DECISIONS`.

## Routing rules

| Condition | Action |
| --- | --- |
| A stage needs repository, documentation, log, test, or data evidence | `token-efficient-retrieval` before retrieval |
| A material user decision is unresolved | `grilling`, scoped to problem, process, or solution |
| Existing business or system process may matter | `business-process-analysis` |
| A stage has independent, meaningful work units | `task-decomposition` |
| A fact or decision conflicts with current state | `context-state` to record it, then return to the closest owning stage |
| The user asks to execute a confirmed result | Hand it to `fix-me`; don't run `implementation-discovery` or `implemented-plan` here |

The routed skill owns its method. This skill owns only stage order, compact
state, and the final handoff.

## Evidence and decisions

Find discoverable facts before asking the user. Ask only for a choice that
can materially change behavior, scope, contract, compatibility,
architecture, business rules, security, or future options — never an
execution detail.

Keep confirmed facts, constraints, decisions, open questions, blockers, and
evidence pointers. Drop raw logs, rejected options, and the full interview
history from active state.

## Required final handoff

First return the recommended solution with its brief justification. Then a
separate Execution instruction with:

1. Goal
2. Confirmed solution
3. Important decisions
4. Constraints
5. Required changes
6. Acceptance criteria
7. Important verification
8. Known risks or blockers

This must let a new agent run `fix-me` without the earlier conversation.
Include only execution-relevant information — it's not a step-by-step plan
and doesn't select implementation details.

## Completion

Stop when the solution is confirmed and the Execution instruction is
complete. Mark it ready for execution only when no blocker remains. Reopen a
confirmed decision only when new evidence directly contradicts it.
