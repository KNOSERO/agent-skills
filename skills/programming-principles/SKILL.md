---
name: programming-principles
description: Core principles for writing and refactoring source code and tests, applicable regardless of language, framework, or libraries. Preserve single responsibility, composition, clear extraction, simple names, and comments that explain decisions. Model the domain with clear boundaries, encapsulation, and a shared vocabulary. Test contracts, prefer real dependencies, and limit mocks.
---

# Programming principles

This skill defines how to write and refactor code regardless of language, framework, or libraries. The goal is code whose responsibilities and intent are easy to understand.

`programming-principles` is the shared foundation for code and testing rules. Task-specific skills such as `refactor` identify it as a required dependency by name and load its current content through the mechanism available in the environment. Their own instructions define the workflow and expected result. Keep shared rules here instead of repeating them in task-specific skills.

## 1. Responsibility and code structure

| Principle | How to apply it |
| --- | --- |
| One code element — one concrete task | Each function, class, and component should have one clearly defined responsibility. Extract independent tasks into smaller elements. An element may coordinate operations or compose an interface, but it should leave task details to delegated elements. |
| Class responsibility | A class should have one concrete task. Its methods and data should serve that task. When a class combines independent tasks, extract smaller elements. |
| Component responsibility | A component, such as a React component, should represent one coherent part of the interface or compose smaller components. Extract independent interface parts or standalone logic when necessary. |
| Choose the form for the task | Use functions for standalone operations and classes when combining related behavior and data or managing state is meaningful. Do not create a class only to wrap a function. |
| Consistent level of detail | Separate code that describes an operation or component composition from implementation details. For example, an order-processing function should describe process steps and leave parsing details to helper functions. |
| Flat conditional flow | End edge conditions early with `return`, `continue`, or `throw`. Keep the main path shallow and avoid `else` after an early exit. Extract complex conditions into clearly named predicates. Extract branches with different responsibilities into separate elements. Do not abstract a simple condition without a concrete readability benefit. |

## 2. Composition and reuse

| Principle | How to apply it |
| --- | --- |
| Prefer composition over inheritance | Build behavior by combining smaller objects, functions, and components and delegating concrete tasks to them. Do not introduce a base class solely to share code. Use inheritance only when required by the technology or justified by a real type relationship in which the subclass preserves the base contract. |
| Extraction should improve understanding | Extract a function, class, or component when it represents a meaningful task, hides distracting details, or removes repeated logic. Choose its form to match its responsibility and the technology's conventions. Avoid splitting code into pieces that require constant navigation without improving readability. |
| Extract small reusable elements | When the same code performs the same responsibility in several places, extract a small element with a clear task. Pass required data and dependencies explicitly. Share logic with the same meaning; similar syntax alone is not enough. Avoid universal helper classes containing unrelated tasks. |

## 3. Readability and intent

| Principle | How to apply it |
| --- | --- |
| Names express intent | Choose names for functions, classes, components, variables, and other types that clearly state their role. Prefer domain vocabulary. Avoid generic names such as `process`, `handle`, or `data` when context does not make their meaning clear. |
| Simple naming | Use simple, understandable, and as-short-as-possible names that remain unambiguous. Avoid unclear abbreviations, unnecessary words, and repeated context. A longer clear name is better than a short unclear abbreviation. |
| Comments explain reasons | Comments should explain decisions, constraints, unusual assumptions, and important trade-offs. Do not repeat what the code already makes clear. If a comment is needed to explain a basic responsibility, first consider improving the name or structure. Example: “Retry reads only because retrying a write could create a second order.” |

## 4. Domain-driven design (DDD)

| Principle | How to apply it |
| --- | --- |
| Clear bounded context | Define the boundaries of each domain model: the area in which terms and rules have one unambiguous meaning. |
| Small, coherent domains | Divide the system into small domain areas with one coherent responsibility. Keep closely related concepts and rules together. |
| Domain encapsulation | Hide internal models, state, and persistence. Expose only required data and operations through an explicit contract, without allowing direct changes to internals. |
| Shared domain language | Use the same concepts in code as in requirements and domain discussions. Within a context, one concept should have one name and consistent meaning. |
| Business rules in the domain | Keep business rules in the domain and enforce them when state changes. Preserve their correctness regardless of who invokes the operation. |
| Technology-independent domain | Business rules should work independently of the user interface, database, and external services. Technology-specific code should use the domain through its contract. |

## 5. Writing tests

| Principle | How to apply it |
| --- | --- |
| Simple test names | Name tests with a simple sentence describing the scenario and expected result, such as “rejects an order with an empty cart”. |
| Clear test structure | Clearly separate data setup, operation execution, and result verification (Arrange–Act–Assert), for example with blank lines. |
| Contract testing (black-box) | Check publicly observable behavior and effects. Avoid private methods, internal structure, and call order. An implementation change that preserves the contract should not require test changes. |
| Prefer higher-level tests | Test scenarios through the public entry point of a module, component, or domain. Match the scope to the contract and avoid testing every internal element separately. |
| Domain tests | Test domain rules through the public domain contract using real domain objects. These tests should run without infrastructure. |
| Infrastructure integration tests | Test code that works with a database, Kafka, or similar service using the real technology in an isolated test environment. Prefer running these dependencies in containers. |
| As few mocks as possible | Prefer real collaborators. Use mocks only when running the real dependency in a test is impractical. Mocks do not replace integration checks. |
