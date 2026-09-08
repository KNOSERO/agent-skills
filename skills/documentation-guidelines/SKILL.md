---
name: documentation-guidelines
description: Set the shared presentation standard for repository documentation and technical explanations: information hierarchy, conciseness, detail, tables, processes, diagrams, language, and local conventions. It does not define domain-specific content requirements.
---

# Documentation guidelines

## Responsibility

This skill defines shared documentation and technical explanation style. It controls information hierarchy, conciseness, detail level, tables, process explanation, diagrams, legends, language selection, and consistency with repository conventions.

It does not define domain-specific documentation requirements. Other skills determine what domain information must be documented; this skill determines how that information should be communicated.

Use it when creating or updating documentation, writing technical explanations, describing processes, creating diagrams, or preparing concise developer-facing descriptions.

## Core standard

Start with the information most likely to answer the reader's immediate question. Order content from most useful to most detailed:

```text
answer → key information → explanation → details → edge cases
```

Do not begin with history, broad context, theory, or filler when the reader needs a concrete answer. Prefer the smallest amount of text that preserves meaning and clarity.

Choose structure and detail for the reader's intent; do not force one section template on every document. Add only sections that provide useful information. Never add a section containing only `Not applicable` or equivalent text.

Use short sentences, focused paragraphs, lists for steps, tables for comparable structured information, and examples only when they clarify behavior. Preserve confirmed facts and do not turn assumptions into facts.

## Detail level

- **Short:** the few facts needed for a focused question or single element.
- **Focused:** the essential explanation of one feature, component, or behavior, with a flow or example when useful.
- **Full:** a complete explanation of a larger process or system area, including actors, decisions, alternatives, failures, and outcomes when evidenced and relevant.

Do not expand a short request into a full document.

## Conditional references

Read only the references relevant to the current work:

- [information-structure.md](references/information-structure.md) for a larger documentation rewrite or when deciding what sections belong in a document.
- [process-explanation.md](references/process-explanation.md) when documenting order, communication, decisions, state changes, retries, timeouts, rollback, or compensation.
- [diagrams.md](references/diagrams.md) when a diagram may materially improve understanding or a legend is needed.
- [writing-style.md](references/writing-style.md) for a substantial explanation, wording review, language choice, or concise developer-facing text.

Simple explanations need only this file. Do not load all references by default.

## Tables and diagrams

Prefer a compact table when multiple items share properties: components, fields, parameters, configuration, roles, statuses, errors, mappings, or diagram legends. Do not use a table for one fact or when it makes the information harder to read.

Use Mermaid only when it improves understanding of relationships, sequence, decisions, or state. Select `flowchart`, `sequenceDiagram`, `stateDiagram-v2`, `erDiagram`, or `classDiagram` according to the relationship. A diagram does not replace a necessary textual explanation. Add a table legend when symbols, line styles, grouping, colors, or other notation is not self-evident.

## Language and repository conventions

Select the documentation language in this order:

1. the user's explicit language requirement;
2. project, repository, or documentation rules;
3. the language of the document being updated;
4. the language of the conversation.

Keep user-facing communication in the conversation language unless asked otherwise. Do not change the language of existing documentation without a reason.

Before introducing a style, inspect only a representative local sample:

```text
target document → nearby documentation → similar documentation → README/docs index → repository instructions
```

Preserve established conventions for headings, tables, diagrams, naming, locations, and links. The local style supplements this skill; it does not need to be replaced.

## Evidence and scope

Base important claims on available evidence such as code, configuration, tests, schemas, contracts, requirements, decisions, or existing documentation. If a fact cannot be confirmed, omit it or label it as unconfirmed when it matters. Do not modify unrelated files.
