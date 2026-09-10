---
name: grilling
description: >
  Interview the user to resolve material decisions in a stated problem,
  process, solution, or implementation scope. Use this skill whenever a
  future-affecting choice is not established by available evidence. Ask in
  dependency-aware rounds. Do not use it for discoverable facts or pure
  execution details.
---

# Grilling

## Responsibility

Own collaborative decision discovery. Do not perform the caller's domain
analysis, solution design, implementation discovery, plan, or code change.
Return a compact decision update to the caller.

## Scope

The caller must state one scope: `problem`, `process`, `solution`, or
`implementation`. Ask only decisions exposed by that scope and the immediate
next stage. Do not ask downstream technical questions before upstream behavior
is confirmed.

## Hard-gate mode

When `problem-solving` invokes this skill at a `*_GRILL` state, this skill is
mandatory. Build the decision frontier before deciding that no interview is
needed. The default is to ask at least one focused question.

Return `NO_OPEN_DECISIONS` only when the checked scope has no material choice.
Do not use an obvious recommendation, a conventional default, or a short user
request as a reason to skip the interview. Skip it only when the user explicitly
asks not to be interviewed or explicitly delegates every decision in scope.

## Classify before asking

- A **discoverable fact** comes from documentation, repository evidence,
  configuration, tests, logs, APIs, history, or available tools. Use
  `token-efficient-retrieval` before retrieving it.
- A **material decision** changes behavior, scope, contract, priority,
  compatibility, architecture, persistence, rollout, source of truth, or
  future options. Ask the user.
- A **pure execution detail** has no such effect. Decide it locally.

## Interview loop

1. Build a decision graph with prerequisites and identify the answerable
   frontier.
2. Ask only the current frontier. Group independent questions; defer dependent
   questions.
3. State the consequence of each answer. Offer meaningful options and a
   recommendation when evidence supports one.
4. Process the user answer, update the graph, and recompute the frontier.
5. Continue until every material decision in scope is confirmed, delegated,
   intentionally deferred, or blocked.

Use [references/interview-algorithm.md](references/interview-algorithm.md)
for multi-round or dependent decisions. Use
[references/question-format.md](references/question-format.md) when presenting
options. Use [references/decision-state.md](references/decision-state.md) for
prior state, delegation, or deferral. Use
[references/contradictions.md](references/contradictions.md) when an answer
conflicts with established state.

## Handoff

Return confirmed facts, confirmed decisions, delegated and deferred decisions,
open decisions, blockers, contradictions, and relevant constraints. Pass the
result to `context-state`; never return a full interview transcript.
