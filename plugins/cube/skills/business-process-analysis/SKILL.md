---
name: business-process-analysis
description: >
  Reconstruct and explain the business process implemented or affected by a
  feature, use case, module, endpoint, event, command, behavior, or problem,
  using system artifacts as evidence rather than analyzing code in isolation.
  Use this skill as a process-understanding stage when problem-solving finds
  that an existing business or system process may matter. A plausible process
  connection is enough to activate it. Skip it only for a purely conceptual
  problem with no existing process to reconstruct.
---

# Business process analysis

## Responsibility

Answer: **what business process does this subject participate in, and how does that process actually work?**

Analyze code through the business process it implements, not as an isolated technical structure. Code, configuration, tests, schemas, APIs, logs, and related artifacts are evidence; do not invent missing behavior.

This is a read-only analysis. Do not turn it into bug hunting, a security/performance/maintainability audit, dead-code detection, or refactoring. Pass a relevant process to `code-audit` or `refactor` only when another request explicitly needs that work.

## Scope and boundary

The entry point may be a process, feature, use case, module, class/service, endpoint, event, command, specific behavior, or problem context. First identify the relevant business process; a technical entry point is not automatically the analysis scope.

Choose the **smallest meaningful business process boundary**:

- If the subject represents a complete process, analyze that process.
- Otherwise find the smallest enclosing process that gives it business meaning.
- Describe the subject as a step, participant, subprocess, decision, rule implementation, state transition, integration, or entry point as appropriate.

Do not broaden the boundary when a smaller one explains the requested behavior.

## Evidence and retrieval

Use `token-efficient-retrieval` to gather evidence. Expand context only to resolve a concrete uncertainty about the business process. Never load a repository, module, dependency tree, test suite, documentation set, or logs wholesale when narrower evidence can establish the next process fact.

Prefer:

`target → entry point/usages → direct calls/dependencies → business rules → state transitions → immediate caller/enclosing flow → broader process only if necessary`

After each retrieval, update the process model and ask what material fact remains unknown. Stop when the evidence is sufficient to understand the material process in scope; retrieve enough to understand the process, not enough to understand the repository. Mark non-blocking gaps `unknown` or `unconfirmed`.

After retrieval, use `grilling` in `process` scope for every unresolved process
scope, interpretation, assumption, or decision. Do not ask for facts that
retrieval can establish, but ask the user whether an established fact should
determine the process direction when that is not confirmed.

Separate `confirmed`, `inferred`, and `unknown/unconfirmed`. Every material process claim must be supported by evidence, and inference must remain labelled as such.

## Process model

Establish only the elements material to the scope:

- purpose and trigger/entry point;
- boundary, actors, participants, and relevant systems;
- business flow, decisions, rules, subprocesses, and alternatives;
- state transitions, inputs, outputs, side effects, and failure paths;
- external interactions and technical implementation mapping;
- unknown or unconfirmed parts.

Explain business behavior before mapping it to classes, functions, configuration, APIs, tests, or other implementation details. Do not present a fragment as a standalone process merely because it has a convenient technical boundary.

## Invocation modes

For direct user invocation, reconstruct and explain the process as a user-facing Markdown result. Use `documentation-guidelines` for structure, language, and diagrams. Add a diagram only when sequence, interaction, decisions, or state changes are materially clearer visually. Do not report the procedural history or list every inspected artifact.

When invoked by another skill, return the minimum sufficient process model for that caller: relevant scope, trigger, flow, rules, state transitions, participants, implementation mapping, material dependencies, and unknowns. Do not automatically produce full user-facing documentation.

Direct invocation explains the process. Consuming invocation supplies only the process context required by the caller.

## Relationship to other skills

- `grilling` resolves facts-versus-decisions, ambiguity, assumptions,
  contradictions, and user decisions.
- `token-efficient-retrieval` retrieves minimum sufficient evidence.
- `documentation-guidelines` controls user-facing presentation.
- `programming-principles` evaluates implementation and design quality.
- `code-audit` investigates correctness, security, reliability, performance, or other risks.
- `refactor` evaluates and applies justified structural improvements.

Do not duplicate their workflows or rules.

## Final check

Before returning the result, verify that the process—not isolated code—is the subject; the boundary is the smallest meaningful one; material claims have evidence status; retrieval stopped at sufficient context; and the output mode matches direct or consuming invocation.
