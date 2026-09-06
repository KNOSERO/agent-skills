---
name: code-analysis
description: Analyze a selected module and its direct context, describe its responsibility and flow, identify unnecessary elements and potential bugs, and return a Markdown report in chat without modifying the repository.
---

# Code analysis

## 1. Foundation and boundaries

Before preparing a report, find and load `documentation-guidelines` through the skill mechanism available in the current environment. Use it as the general basis for organizing and presenting documentation. This skill provides the content describing a specific module; `documentation-guidelines` provides the appropriate form for reading it in chat.

Work in read-only mode. Do not edit code, create or update repository documentation, refactor, or create commits. Return the result directly in chat as a Markdown document.

If the user has not clearly identified a module or scope, ask for a path, module name, or entry point. By default, analyze the module and its direct context:

- exports, imports, and direct dependencies;
- direct usage or call sites;
- module tests;
- configuration affecting its behavior;
- input, output, and side-effect contracts.

Do not search the entire system without a clear need. Expand the scope only when the direct context is insufficient to confirm behavior or a finding.

## 2. Analysis workflow

| Stage | Instruction |
| --- | --- |
| Scope and interface | Establish which module is analyzed, what it is responsible for, its inputs and outputs, its users, and its side effects. |
| Behavior and flow | Trace the main path, decisions, error handling, communication with dependencies, and important state changes. Describe both the flow and the purpose of each important stage. |
| Unnecessary elements | Look for dead code, unused exports, duplicated logic, unnecessary dependencies or layers, and unclear responsibilities. Provide evidence and impact instead of treating anything that is not perfectly simple as unnecessary. |
| Potential bugs | Check contract violations, unhandled data or states, incorrect edge conditions, inconsistent state, error-handling problems, and differences between code and tests. Support every finding with a location, scenario, and impact. |
| Report | Describe the module as documentation consistent with `documentation-guidelines`. Include responsibility, purpose, behavior, flow, dependencies, contracts, tests, unnecessary elements, and potential bugs. Return the result in chat without creating an output file. |

Do not present a hypothesis as a confirmed bug. Separate confirmed observations from suspicions requiring an additional test, measurement, or information. Do not invent missing facts.

## 3. Analysis findings

Assign each finding the next identifier: `T1`, `T2`, `T3`, and so on. Identifiers provide unambiguous references and do not mean that the finding should be implemented automatically.

| ID | Type | Location and evidence | Finding | Possible impact | Confidence |
| --- | --- | --- | --- | --- | --- |

For a potential bug, describe the possible scenario and impact. For an unnecessary element, explain why it adds no value and what cost or risk it creates. Include the path and line number or symbol name when available.

Do not propose or perform code changes within this skill. If the user wants fixes, pass the findings to the appropriate skill only after a separate request.

## 4. Final check

Before sending the report, check that:

- the scope covers the module and its direct context;
- the report follows the current structure required by `documentation-guidelines`;
- responsibility, behavior, unnecessary elements, and potential bugs are described;
- every finding has a `T` identifier, evidence, and confidence;
- diagrams, when needed, follow `documentation-guidelines` and match the description;
- no unjustified claims or unconfirmed information are presented as facts;
- no repository file was modified.

At the end, list the files read and information that could not be confirmed. Return the report in chat and do not save it as a Markdown file.
