---
name: clarifying-interview
description: Resolve material ambiguity, contradictions, missing decisions, and unsupported assumptions before a domain task proceeds. Use when unclear requirements or scope can change the interpretation, design, behavior, safety, cost, or next safe action.
---

# Clarifying Interview

## Responsibility

Turn unclear or inconsistent input into a coherent, sufficiently explicit shared understanding:

```text
unclear input
  -> detect uncertainty
  -> classify it
  -> establish available facts
  -> ask only necessary questions
  -> resolve dependencies
  -> return control to the consuming skill
```

This skill does not execute the domain task, analyze code, refactor, audit, define tests, retrieve information as a separate workflow, present the final result, or export artifacts. The consuming domain skill remains responsible for its own semantics and execution.

## Core principles

- Resolve ambiguity before relying on it.
- Clarify only uncertainty that can materially change the result or next safe action.
- Aim for minimum sufficient clarification, explicit decisions, and no hidden material assumptions—not exhaustive questioning.
- Do not block independent work because of a local unresolved issue.

## Detect before asking

Classify each material uncertainty as one of:

```text
established fact | discoverable fact | user decision | ambiguity |
contradiction | assumption | missing information
```

Do not ask automatically. First check whether reliable evidence can resolve it. Treat confirmed, inferred, assumed, and unknown information distinctly; inference is not confirmation.

## Facts and decisions

Facts that can be established from the repository, documentation, configuration, code, tests, schemas, available environments, or another reliable source are the agent's responsibility. Retrieve the minimum evidence needed to resolve them instead of asking the user.

Decisions belong to the user or the appropriate decision owner. When multiple materially different interpretations remain, do not guess. Explain the relevant options and recommend one only when there is a clear evidence-based reason.

Material assumptions must become evidence, an explicit decision, or an explicitly accepted unresolved constraint.

## Dependency-aware questioning

Resolve upstream decisions before asking downstream questions whose answers depend on them. Do not ask a random questionnaire. By default ask one question, or a small batch of 1–3 genuinely independent questions. Each question should identify the concrete uncertainty, explain why it matters when necessary, present useful options, include a grounded recommendation when appropriate, and allow another answer.

After every user answer, reassess the problem. Resolve affected ambiguity, update dependent assumptions, and discard questions that are no longer needed. Do not re-ask settled decisions unless new evidence challenges them.

## Contradictions

Make conflicts explicit:

```text
requirement A × requirement B
  -> they cannot both hold under the current assumptions
  -> a decision or constraint must change
```

State briefly what conflicts, why it matters, and the available resolutions. Do not silently reconcile incompatible requirements or choose arbitrarily.

## When to stop

Stop when material ambiguity is resolved, contradictions are resolved or explicitly accepted, required decisions are made, critical assumptions are exposed, and the next stage can proceed without material guessing. Do not solve every hypothetical future decision. Clarify enough for the next correct stage; a later stage may invoke this skill again.

For a larger interview, summarize only the confirmed decisions, important constraints, accepted unknowns, and next actionable stage.

## Interaction with other skills

`clarifying-interview` determines what is unclear. `token-efficient-retrieval` obtains the minimum evidence needed to resolve it. `task-decomposition` organizes the now-known task into executable stages. The preferred order for a complex task is:

```text
unclear task -> clarifying-interview -> coherent task -> task-decomposition -> execution
```

Do not duplicate domain workflows or final-presentation rules. If an unresolved decision blocks only one stage, pause that stage while continuing independent stages.

## For consuming skills

Use `clarifying-interview` when material ambiguity, contradiction, missing decisions, or unsupported assumptions prevent confident execution.

Let this skill determine the minimum necessary clarification. Do not copy its interview rules into the consuming skill.

Resolve discoverable facts through available evidence. Ask the user only for decisions or information that remain materially unresolved.

Once sufficient clarity exists, return control to the consuming skill.
