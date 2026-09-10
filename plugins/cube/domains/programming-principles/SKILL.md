---
name: programming-principles
description: Decision principles for writing and refactoring source code and tests, applicable regardless of language, framework, or libraries. Prefer clear responsibilities, the simplest correct structure, meaningful domain boundaries, observable contracts, real dependencies, and justified abstractions.
---

# Programming principles

This skill is the shared foundation for how code should be designed and how implementation decisions should be evaluated. Task-specific skills define their own workflow and expected result; keep workflow-specific rules there.

## Central decision principle

> Prefer the simplest structure that makes responsibilities, behavior, and domain intent obvious. Do not introduce abstractions, indirection, or decomposition unless they improve understanding or protect a real boundary.

Simple means easy to understand and maintain, not necessarily shortest. Optimize for correctness and cost of understanding, not for the number of classes, methods, interfaces, layers, or patterns. Do not use simplicity to excuse missing correctness, safety, error handling, or required system boundaries.

## Decision priorities

Use this order to resolve conflicts between preferences:

```text
correctness and required behavior
→ safety
→ clarity
→ project consistency
→ simplest coherent structure
→ justified reuse / abstraction
→ optimization / elegance
```

These are heuristics, not metrics. Do not apply arbitrary limits to method size, class size, parameter count, interfaces, layers, or reuse. Ask whether the responsibility is quickly understandable, behavior is correct, boundaries are meaningful, and the structure reduces cognitive load.

## Global invariants

- One element should communicate one coherent responsibility or idea; a coordinator may delegate several steps at the same level of abstraction.
- Extract code only when it improves understanding, responsibility clarity, reuse of the same knowledge, isolation of complexity, boundary clarity, or testability with real value.
- Similar syntax alone does not justify a shared abstraction. Share the same knowledge or responsibility, not merely similar-looking code.
- Do not introduce abstractions, extension points, indirection, or infrastructure for hypothetical future requirements.
- Follow established project conventions when they correctly solve the problem. Do not copy a local pattern that is clearly incorrect, unsafe, or unsuitable.
- Business behavior should be visible in the code when the code represents meaningful domain logic.
- Prefer observable behavior and public contracts over implementation details; prefer real collaborators and limit mocks.

## Minimum coherent change

> Change the smallest coherent scope required to implement the requested behavior safely and correctly.

```text
requested behavior → necessary implementation → necessary tests → necessary dependent changes → stop
```

"While I'm here" doesn't justify a renaming, reformatting, cleanup, or
architecture change outside that scope. A local improvement belongs in
scope only when the safe or clear implementation of the requested behavior
actually needs it.

## Context efficiency and existing design

Gather the minimum sufficient context progressively:

```text
target
→ immediate context
→ direct dependencies
→ relevant tests
→ similar local implementation
→ broader context only when confidence is insufficient
```

> Context efficiency is an optimization, not a reason to guess.

Before introducing a new pattern or abstraction, inspect the relevant local design and prefer consistency when it correctly solves the problem. Expand the context when needed for a correct decision.

## Conditional references

Load only the references needed for the current task; do not load all references automatically. References may be combined when a task spans multiple areas.

- [code-structure.md](references/code-structure.md) for structural decisions, extraction, composition, reuse, naming, comments, and readability.
- [domain-modeling.md](references/domain-modeling.md) when working with meaningful business logic, domain rules, domain boundaries, or domain language.
- [testing.md](references/testing.md) when creating or changing tests or deciding how behavior should be verified.
