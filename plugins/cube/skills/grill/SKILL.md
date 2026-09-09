---
name: grill
description: >
  Interview the user to discover and resolve material problem framing,
  product, project, design, architectural, scope, behavior, priority, and
  acceptance decisions. Use it whenever the user's intent or a future-affecting
  choice is not explicit, including inside problem solving. Ask focused
  questions in dependency-aware rounds instead of silently assuming or merely
  recommending a direction. Do not use it for discoverable facts or immaterial
  execution details.
---

# Grill

## Responsibility and invariant

Own collaborative decision discovery, not the consuming domain task. Turn the caller's context into a compact, shared decision state: discover facts that can be established independently, expose unresolved choices, resolve them with the user, and return the state to the caller.

Use `grill` when an unresolved choice or problem interpretation can affect
requirements, meaning, scope,
behavior, priorities, acceptance criteria, compatibility, public interfaces,
naming, structure, maintenance, distribution, rollout, retention, source of
truth, or future options. This includes choices that are small, conventional,
reversible, or technical. Do not reduce the skill to asking only when work is
blocked.

When a material choice or problem interpretation exists, interviewing is
mandatory. Start with the
current decision frontier and ask at least one focused question before giving
the consuming skill a final direction. State what changes with each answer.
Do not stop after presenting a recommendation. Wait for the user's answer,
process it, recompute the frontier, and ask the next round when another
material decision remains.

When called between capability stages, use the latest stage result as the
question context. Ask only about decisions exposed by that result or required
by the next stage. Do not ask downstream questions while an upstream skill has
not yet established the facts they depend on. After the user answers, return a
compact decision update so the consuming skill can recompute the next stage.

When `problem-solving` is still in the problem-framing phase, ask about the
problem model first: symptoms, impact, desired outcome, scope, constraints,
non-goals, and success criteria. Do not jump to questions about implementation
or solution selection until the problem model is confirmed.

Do not perform the consuming analysis, plan, recommendation, or implementation. Do not silently turn an agent recommendation or inference into a user decision.

## Classify before asking

Classify every uncertainty as one of the following:

- **DISCOVERABLE FACT** — retrieve it from the repository, documentation, configuration, tests, logs, APIs, history, or available tools before asking.
- **DESIGN / PRODUCT / PROJECT DECISION** — interview the user when the answer selects direction, meaning, contract, boundary, preference, or a future-affecting choice.
- **PURE EXECUTION DETAIL** — decide locally when the choice has no material effect on requirements, architecture, behavior, compatibility, maintainability, naming, project structure, or future decisions.

Before asking, use `token-efficient-retrieval` as a REQUIRED dependency for the retrieval operation and determine what evidence narrows the remaining decision. Do not ask for a fact the agent can establish. Ask only when the answer changes the solution, the next decision, or the acceptance boundary.

## Dependency-aware interview

Maintain the dependency graph of unresolved decisions and recompute the **decision frontier** after every user response. The frontier contains the currently answerable unresolved decisions whose prerequisites are settled. Ask independent frontier questions together; defer dependent questions until their prerequisites are resolved. Let answers resolve, invalidate, create, or contradict decisions rather than following a fixed questionnaire.

For the detailed multi-round procedure, load [references/interview-algorithm.md](references/interview-algorithm.md) when there are multiple dependent decisions or the interview spans rounds. A single-round interview still requires a question when a material decision exists.

## Interview contract

For each material decision, make the consequence of the answer explicit and present meaningful options with trade-offs and a recommendation when evidence supports one. Allow the user to choose, propose an alternative, delegate the decision, or defer it. A recommendation is not a decision; delegated authority applies only to the stated scope.

Load [references/question-format.md](references/question-format.md) when presenting options, recommendations, or a free-form decision. Load [references/decision-state.md](references/decision-state.md) when the caller supplies prior context, the interview spans rounds, or decisions may be delegated or deferred.

If a new answer materially conflicts with an established fact or decision, do not reconcile it silently. Load [references/contradictions.md](references/contradictions.md), expose the incompatible interpretations, and ask only for the resolution that changes the work.

Use [references/examples.md](references/examples.md) only when an ambiguous case needs an example to distinguish fact discovery, a material decision, and execution detail.

## Completion and handoff

Finish when every material decision in scope is resolved, explicitly accepted,
or intentionally deferred, and no hidden assumption or contradiction could
change the current solution. If the user has not answered a required material
question, do not declare the decision solved. Perform a concise completeness
check when the interview has multiple rounds; it is a check, not a ceremonial
extra question.

Return confirmed facts, confirmed decisions, delegated decisions, deferred decisions with dependencies, unresolved decisions, contradictions, and relevant constraints. The consuming skill owns what happens next.
