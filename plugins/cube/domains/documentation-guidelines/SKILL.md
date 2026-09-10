---
name: documentation-guidelines
description: >
  Use this skill whenever creating, updating, reviewing, or restructuring
  documentation or technical explanations. Also use it for README files,
  process descriptions, diagrams, tables, and concise developer-facing
  answers. It controls presentation, language, and information structure;
  it does not define domain-specific content requirements.
---

# Documentation guidelines

## Responsibility

This skill defines how information is presented in documentation and technical explanations. It governs information hierarchy, detail, information density, structure, tables, process explanations, diagrams, legends, language, and repository conventions.

Other skills determine what domain information must be documented. This skill determines how that information should be communicated. Do not add domain-specific rules for APIs, databases, messaging, orchestration, programming languages, architecture, or other technologies.

Use it when creating or updating documentation, explaining technical behavior, describing processes, creating diagrams, or preparing concise developer-facing text.

## Application workflow

Apply the rules in this order:

1. Identify the reader's question, required outcome, and artifact language.
2. Choose the minimum detail level: Short, Focused, or Full.
3. Put the answer and critical information first.
4. Choose the clearest structure: sentence, list, table, diagram, or a combination.
5. Check the result against evidence and local repository conventions.

Stop when the reader can take the next correct action without missing required behavior, risks, dependencies, or exceptions. Do not add structure or detail that does not improve understanding or decision quality.

## Seven presentation principles

### 1. Answer first

Start with the information most likely to answer the reader's immediate question. Prefer:

```text
answer → key information → explanation → details → edge cases
```

Do not begin with history, broad context, theory, or filler when the reader needs a concrete answer.

### 2. Minimum sufficient detail

Use the lowest detail level that fully answers the user's need. Escalate only when requested, required by the topic's complexity, necessary dependencies are otherwise unclear, project rules require it, or available context is insufficient for a safe explanation:

```text
Short → Focused → Full
```

Do not add detail merely because it is available. Do not omit detail that is required for correctness or proper use.

### 3. High information density

Optimize for useful information per reading effort, not document length. Prefer one precise sentence, a compact table, an appropriate diagram, or a direct example over longer equivalent prose.

Use the smallest representation that preserves required meaning, clarity, conditions, and risks. Do not compress away important behavior, decisions, exceptions, dependencies, or risks.

### 4. Structure over prose

Choose the representation that makes the information easiest to scan:

```text
repeated properties → table
ordered actions → numbered list
parallel alternatives → list or table
relationships → diagram
process → diagram + explanation
single fact → sentence
```

Apply these as heuristics, not mechanical rules.

### 5. Visualize relationships

For processes, ordering, communication, dependencies, decisions, state changes, or data relationships, create a diagram when it makes a relationship, sequence, branch, or state change faster to understand than prose. Do not create one for a simple fact, one property, or a short list.

### 6. Complement, do not duplicate

Diagram and prose must complement each other, not duplicate each other. Use diagrams for structure, order, relationships, communication, branches, and states. Use prose for intent, conditions, inputs, outputs, meaning, non-obvious behavior, consequences, and exceptions.

Do not describe every arrow or node when its meaning is already clear. Do not repeat a table fully in the paragraph directly below it.

### 7. Progressive disclosure

Let the reader stop once they have a sufficient answer:

```text
answer → quick orientation → main behavior → details → exceptions → deep technical information
```

Do not hide information critical to safety, correctness, or proper use in deep sections.

## Detail levels

- **Short:** the few facts needed for a focused question or single element.
- **Focused:** the essential explanation of one feature, component, or behavior, with a flow or example when useful.
- **Full:** a complete explanation of a larger process or system area, including relevant participants, decisions, alternatives, failures, and outcomes.

## Tables and diagrams

When three or more comparable items share properties, consider a table before prose. This is a heuristic, not a threshold: use a table for two items when comparison is clearer, and keep a list when many items are easier to scan that way.

Tables are particularly useful for legends, components and responsibilities, inputs and outputs, parameters, configuration, statuses, errors, dependencies, permissions, mappings, alternatives, and decision results. Do not use a table for one fact or when it reduces clarity.

When Mermaid is used, select `flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `erDiagram`, or `classDiagram` according to the relationship. Other clear diagram formats are allowed when they fit the repository. A diagram does not replace a necessary textual explanation. Add a table legend only when notation is not self-evident.

## Conditional references

Read only the references needed for the current work:

- [information-structure.md](references/information-structure.md) when selecting sections or rewriting a larger document.
- [process-explanation.md](references/process-explanation.md) when documenting order, communication, decisions, state changes, retries, timeouts, rollback, compensation, or final states.
- [element-explanation.md](references/element-explanation.md) when explaining a focused code fragment, command, query, configuration, parameter, business rule, condition, or other single technical or business element.
- [diagrams.md](references/diagrams.md) when choosing a diagram or defining a legend.
- [writing-style.md](references/writing-style.md) for a substantial explanation, wording review, language choice, or density review.

For a simple explanation, use only this file. Do not load all references by default.

## Language and repository conventions

Choose the artifact language in this order:

1. explicit user requirement;
2. project, repository, or documentation rules;
3. language of the existing document;
4. conversation language.

Conversation language and artifact language may differ. Repository documentation follows the project's language; user-facing communication follows the conversation language unless requested otherwise. Do not change an existing document's language without a reason.

Before introducing a structure or style, inspect only enough representative context:

```text
target document → nearby documentation → similar documentation → README/docs index → repository instructions → broader context only if required
```

Preserve local conventions for language, headings, terminology, naming, tables, diagrams, file locations, links, and formatting.

## Evidence first

Document behavior supported by code, configuration, tests, schemas, contracts, requirements, architectural decisions, or confirmed existing documentation. Gather only enough evidence to document the subject safely and confidently. Expand context when confidence is insufficient rather than guessing.

Omit unconfirmed details or label them when they matter to the reader's decision. Do not modify unrelated files.
