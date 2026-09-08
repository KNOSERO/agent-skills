---
name: programming-principles
description: Decision principles for writing and refactoring source code and tests, applicable regardless of language, framework, or libraries. Prefer clear responsibilities, the simplest correct structure, meaningful domain boundaries, observable contracts, real dependencies, and justified abstractions.
---

# Programming principles

This skill defines how to write and refactor code regardless of language, framework, or libraries. The goal is code whose responsibilities and intent are easy to understand.

`programming-principles` is the shared foundation for code and testing rules. Task-specific skills such as `refactor` identify it as a required dependency by name and load its current content through the mechanism available in the environment. Their own instructions define the workflow and expected result. Keep shared rules here instead of repeating them in task-specific skills.

## 0. Central decision principle

> Prefer the simplest structure that makes responsibilities, behavior, and domain intent obvious. Do not introduce abstractions, indirection, or decomposition unless they improve understanding or protect a real boundary.

Use this principle to resolve conflicts between the rules below. Optimize for correctness and cost of understanding, not for the number of classes, methods, interfaces, layers, or patterns.

Simple means easy to understand and maintain, not necessarily shortest. Do not shorten code at the cost of clarity, and do not use simplicity to excuse missing correctness, safety, error handling, or required system boundaries.

When designing an implementation, prefer this order of consideration:

```text
required behavior
→ simplest correct solution
→ existing project conventions
→ clear responsibilities
→ real boundaries
→ abstraction only when justified
→ optimization only when justified
```

These are decision heuristics, not metrics. Do not judge code by arbitrary limits such as method length, number of methods or parameters, number of interfaces or layers, or percentage of reuse. Ask instead: can the responsibility be understood quickly, is behavior correct, are boundaries meaningful, and does the structure reduce cognitive load?

## 1. Responsibility and code structure

| Principle | How to apply it |
| --- | --- |
| One code element — one coherent responsibility | Each function, class, and component should communicate one coherent responsibility or idea. Extract independent tasks when extraction improves readability, responsibility clarity, reuse of the same knowledge, isolation of complexity, boundary clarity, or testability with real value. Do not split code only to reduce line count, create more methods, meet an arbitrary size limit, or apply “one function does one thing” mechanically. |
| Class responsibility | A class should have one coherent task. Its methods and data should serve that task. When a class combines independent responsibilities, extract smaller elements; a class may still coordinate a cohesive process. |
| Component responsibility | A component, such as a React component, should represent one coherent part of the interface or compose smaller components. Extract independent interface parts or standalone logic when necessary and useful. |
| Choose the form for the task | Use functions for standalone operations and classes when combining related behavior and data or managing state is meaningful. Do not create a class only to wrap a function. |
| Consistent level of detail | Separate code that describes an operation or component composition from implementation details. For example, an order-processing function should describe process steps and leave parsing details to helper functions. |
| Flat conditional flow | End edge conditions early with `return`, `continue`, or `throw`. Keep the main path shallow and avoid `else` after an early exit. Extract complex conditions into clearly named predicates. Extract branches with different responsibilities into separate elements. Do not abstract a simple condition without a concrete readability benefit. |

A coordinator may perform several steps at the same level of abstraction when it makes the process obvious, for example:

```text
processOrder
  → validateOrder
  → reserveInventory
  → authorizePayment
  → confirmOrder
```

## 2. Composition and reuse

| Principle | How to apply it |
| --- | --- |
| Prefer composition over inheritance | Build behavior by combining smaller objects, functions, and components and delegating concrete tasks to them. Do not introduce a base class solely to share code. Use inheritance only when required by the technology or justified by a real type relationship in which the subclass preserves the base contract. |
| Extraction should improve understanding | Extract a function, class, or component when it represents a meaningful task, hides distracting details, or removes repeated logic. Choose its form to match its responsibility and the technology's conventions. Avoid splitting code into pieces that require constant navigation without improving readability. |
| Extract small reusable elements | When the same code performs the same responsibility in several places, extract a small element with a clear task. Pass required data and dependencies explicitly. Share logic with the same meaning; similar syntax alone is not enough. Avoid universal helper classes containing unrelated tasks. Local duplication is preferable to a wrong abstraction when code has different meaning or is likely to evolve independently. Do not duplicate the same business rule across multiple locations. |

Do not introduce interfaces, factories, wrappers, inheritance hierarchies, extension points, generic abstractions, configuration, or additional layers unless they solve a concrete current problem, protect a real boundary, or are required by established project architecture. Do not design for hypothetical future requirements without evidence that the extension is needed. An existing architecture or confirmed requirement may justify an interface or extension point, including one with a single implementation.

Before introducing a new pattern or abstraction, inspect only the minimum sufficient context, progressively:

```text
target code
→ immediate surrounding code
→ directly related implementation
→ similar implementation in the same area
→ project conventions
→ broader architecture only if required
```

Follow a local pattern when it correctly solves the problem. Do not copy it when it is clearly incorrect, unsafe, or unsuitable for the requirement.

## 3. Readability and intent

| Principle | How to apply it |
| --- | --- |
| Names express intent | Choose names for functions, classes, components, variables, and other types that clearly state their role. Prefer domain vocabulary. Avoid generic names such as `process`, `handle`, or `data` when context does not make their meaning clear. |
| Simple naming | Use simple, understandable, and as-short-as-possible names that remain unambiguous. Avoid unclear abbreviations, unnecessary words, and repeated context. A longer clear name is better than a short unclear abbreviation. |
| Comments explain reasons | Comments should explain decisions, constraints, unusual assumptions, and important trade-offs. Do not repeat what the code already makes clear. If a comment is needed to explain a basic responsibility, first consider improving the name or structure. Example: “Retry reads only because retrying a write could create a second order.” |

## 4. Domain modeling and business rules

| Principle | How to apply it |
| --- | --- |
| Clear bounded context | Define the boundaries of each domain model: the area in which terms and rules have one unambiguous meaning. |
| Small, coherent domains | Divide the system into small domain areas with one coherent responsibility. Keep closely related concepts and rules together. |
| Domain encapsulation | Hide internal models, state, and persistence. Expose only required data and operations through an explicit contract, without allowing direct changes to internals. |
| Shared domain language | Use the same concepts in code as in requirements and domain discussions. Within a context, one concept should have one name and consistent meaning. |
| Business rules in the domain | Keep business rules in the domain and enforce them when state changes. Preserve their correctness regardless of who invokes the operation. |
| Technology-independent domain | Business rules should work independently of the user interface, database, and external services. Technology-specific code should use the domain through its contract. |

Apply these principles when code represents a meaningful domain or business logic. They are not a requirement to introduce bounded contexts, domain models, or tactical DDD patterns into simple infrastructure, utility, or technical code when those structures provide no value. The key invariant is that business behavior should be visible in the code and kept separate from technology details where that separation is useful.

## 5. Scope and context efficiency

Change the smallest coherent scope required to implement the requested behavior safely and correctly:

```text
requested behavior
→ necessary implementation
→ necessary tests
→ necessary dependent changes
→ stop
```

Do not add unrelated refactorings, renames, formatting, cleanups, architecture changes, or abstractions. A local improvement belongs in scope when it is necessary for safe or clear implementation; “while I’m here” is not sufficient justification.

Gather minimal sufficient context using the same progressive approach: target, immediate context, direct dependencies, relevant tests, similar local implementation, then broader context only when confidence is insufficient. Context efficiency is an optimization, not a reason to guess.

## 6. Writing tests

| Principle | How to apply it |
| --- | --- |
| Simple test names | Name tests with a simple sentence describing the scenario and expected result, such as “rejects an order with an empty cart”. |
| Clear test structure | Clearly separate data setup, operation execution, and result verification (Arrange–Act–Assert), for example with blank lines. |
| Contract testing (black-box) | Check publicly observable behavior and effects. Avoid private methods, internal structure, and call order. A test should survive a refactor that preserves observable behavior. Changing a private method, decomposing the implementation, changing internal call order, or replacing one correct implementation should not require test changes when the public contract remains unchanged. Test interactions when the interaction itself is part of the contract. |
| Prefer higher-level tests | Test scenarios through the public entry point of a module, component, or domain. Match the scope to the contract and avoid testing every internal element separately. |
| Domain tests | Test domain rules through the public domain contract using real domain objects. These tests should run without infrastructure. |
| Infrastructure integration tests | Test code that works with a database, Kafka, or similar service using the real technology in an isolated test environment. Prefer running these dependencies in containers. |
| As few mocks as possible | Prefer real collaborators. Use mocks only when running the real dependency in a test is impractical. Mocks do not replace integration checks. |

Prefer this testing direction:

```text
observable behavior > implementation details
real collaborators > mocks
contract > internal structure
```

Correctness and required behavior take precedence over stylistic preferences. The usual tie-breaking direction is:

```text
correctness
→ required behavior
→ safety
→ clarity
→ project consistency
→ simplicity
→ reuse
→ elegance
```

This ordering is guidance for resolving conflicts, not an excuse to ignore a required constraint or a meaningful project convention.
