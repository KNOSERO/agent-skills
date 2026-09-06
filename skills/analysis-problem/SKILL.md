---
name: analysis-problem
description: Analyze a problem, gather missing information, assess its impact on existing modules, and present a possible implementation as a Markdown document in chat.
---

# Problem analysis

## 1. Purpose and boundaries

Analyze a problem before implementation. Establish the desired outcome, current behavior, applicable constraints, and repository elements that may be affected.

This skill is read-only. Do not edit code, create or update documentation files, refactor, or create commits. Return the final Markdown document directly in chat.

Use two skills as needed:

- `documentation-guidelines` defines the organization, language, readability, and diagrams for the resulting document;
- `code-analysis` analyzes existing modules affected by the problem.

Do not copy those skills' rules. Apply them in the appropriate part of the analysis flow.

## 2. Problem discovery

First read the problem description, expected outcome, current behavior, constraints, and acceptance criteria. Then inspect available repository sources: documentation, README, configuration, tests, specified files, and usage sites for related elements.

Establish:

- what problem must be solved and for whom;
- what must remain unchanged;
- what data, inputs, outputs, and side effects are involved;
- whether a similar feature or module already exists;
- which modules can be reused, extended, or changed;
- whether the change affects existing contracts, flows, or module boundaries.

## 3. Missing information

After the initial discovery, check whether it is safe to describe a solution. If information required for a reliable decision is missing, ask one consolidated, numbered list of questions.

Mark each question as:

- **required** — the solution cannot be described reliably without an answer;
- **optional** — the answer improves detail but does not block further work.

Briefly explain why each question is needed. Do not repeat questions answered by the repository. After asking required questions, pause and wait for the user's response. Do not replace missing data with guesses.

## 4. Module impact analysis

Determine the impact of the change from its relationship with the existing structure:

| Situation | Action |
| --- | --- |
| The change does not affect existing code | Describe the new element's scope and contracts without analyzing an existing module. |
| The change uses an existing module | Analyze that module, its direct usages, dependencies, tests, and contract through `code-analysis`. |
| The change requires editing an existing module | Analyze the module through `code-analysis` before describing the change; include its callers and tests. |
| The change affects several modules or a shared flow | Analyze every directly affected module through `code-analysis` and describe the relationships between findings. |

By default, analyze directly affected modules, their direct callers, dependencies, and tests. Expand the scope only when the direct context is insufficient to confirm the impact. Separate repository-confirmed facts from assumptions and open questions.

## 5. Possible implementations

Based on discovery and module analysis, develop possible implementation approaches. For each meaningful variant, describe:

- behavior and solution boundaries;
- new, reused, or edited modules;
- impact on existing contracts and flows;
- dependencies and required test changes;
- risks, costs, and limitations.

Identify one recommended solution. If sensible alternatives exist, describe them briefly with their most important trade-offs. Do not implement any variant or present a proposal as a completed change.

## 6. Resulting document

After collecting required information and completing the analysis, prepare the document according to the currently loaded `documentation-guidelines`. That skill defines structure, order, style, language, and diagrams; this skill provides the content derived from problem discovery.

Present a natural path from the problem to the recommended change. Include module-analysis findings, reused elements, modules requiring edits, implementation variants, the recommendation, risks, and open questions. If the change flow is important, add a diagram according to `documentation-guidelines`.

Return the document directly in chat as Markdown. Do not save it in the repository or create a `.md` file.

## 7. Final check

Before presenting the document, check that:

- the goal, current behavior, constraints, and acceptance criteria are described;
- all required questions were asked before preparing the proposal;
- every affected existing module was analyzed through `code-analysis`;
- reused, edited, and new modules are distinguished;
- the recommendation follows from the analysis and alternatives include trade-offs;
- the document follows the current `documentation-guidelines`;
- unconfirmed assumptions are not presented as facts;
- no repository file was modified.

At the end, list unconfirmed information and the scope of the analysis. Return the document in chat without saving it as a `.md` file.
