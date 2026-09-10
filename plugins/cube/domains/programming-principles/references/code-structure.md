# Code structure, readability, and intent

Load this reference for structural, extraction, composition, reuse, naming, or readability decisions.

## Responsibility and code structure

| Principle | How to apply it |
| --- | --- |
| One code element — one coherent responsibility | Each function, class, and component should communicate one coherent responsibility or idea. Extract independent tasks when extraction improves readability, responsibility clarity, reuse of the same knowledge, isolation of complexity, boundary clarity, or testability with real value. Do not split code only to reduce line count, create more methods, meet an arbitrary size limit, or apply “one function does one thing” mechanically. |
| Class responsibility | A class should have one coherent task. Its methods and data should serve that task. When a class combines independent responsibilities, extract smaller elements; a class may still coordinate a cohesive process. |
| Component responsibility | A component, such as a React component, should represent one coherent part of the interface or compose smaller components. Extract independent interface parts or standalone logic when necessary and useful. |
| Choose the form for the task | Use functions for standalone operations and classes when combining related behavior and data or managing state is meaningful. Do not create a class only to wrap a function. |
| Consistent level of detail | Separate code that describes an operation or component composition from implementation details. An order-processing function should describe process steps and leave parsing details to helper functions. |
| Flat conditional flow | End edge conditions early with `return`, `continue`, or `throw`. Keep the main path shallow and avoid `else` after an early exit. Extract complex conditions into clearly named predicates. Extract branches with different responsibilities into separate elements. Do not abstract a simple condition without a concrete readability benefit. |

A coordinator may perform several steps at the same level of abstraction when it makes the process obvious:

```text
processOrder
  → validateOrder
  → reserveInventory
  → authorizePayment
  → confirmOrder
```

## Composition, extraction, and reuse

| Principle | How to apply it |
| --- | --- |
| Prefer composition over inheritance | Build behavior by combining smaller objects, functions, and components and delegating concrete tasks to them. Do not introduce a base class solely to share code. Use inheritance only when required by the technology or justified by a real type relationship in which the subclass preserves the base contract. |
| Extraction should improve understanding | Extract a function, class, or component when it represents a meaningful task, hides distracting details, or removes repeated logic. Choose its form to match its responsibility and the technology's conventions. Avoid splitting code into pieces that require constant navigation without improving readability. |
| Extract small reusable elements | When the same code performs the same responsibility in several places, extract a small element with a clear task. Pass required data and dependencies explicitly. Avoid universal helper classes containing unrelated tasks. |

Local duplication is preferable to a wrong abstraction when code has different meaning or is likely to evolve independently. Do not duplicate the same business rule across multiple locations.

Do not introduce interfaces, factories, wrappers, inheritance hierarchies, extension points, generic abstractions, configuration, or additional layers unless they solve a concrete current problem, protect a real boundary, or are required by established project architecture. An existing architecture or confirmed requirement may justify an interface or extension point, including one with a single implementation.

## Readability and intent

| Principle | How to apply it |
| --- | --- |
| Names express intent | Choose names for functions, classes, components, variables, and other types that clearly state their role. Prefer domain vocabulary. Avoid generic names such as `process`, `handle`, or `data` when context does not make their meaning clear. |
| Simple naming | Use simple, understandable, and as-short-as-possible names that remain unambiguous. Avoid unclear abbreviations, unnecessary words, and repeated context. A longer clear name is better than a short unclear abbreviation. |
| Comments explain reasons | Comments should explain decisions, constraints, unusual assumptions, and important trade-offs. Do not repeat what the code already makes clear. If a comment is needed to explain a basic responsibility, first consider improving the name or structure. |
