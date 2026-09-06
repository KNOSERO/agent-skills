---
name: documentation-guidelines
description: Create and update Markdown documentation in the repository with a consistent core structure, the most important information first, simple language, and Mermaid diagrams for important flows.
---

# Documentation guidelines

## 1. Purpose and scope

Create and update documentation so readers can quickly find the most important information and then proceed to the purpose, behavior, and details.

Before writing a document, read the existing documentation, README, configuration, referenced sources, and usage sites for the described element. Establish the document type, audience, scope, and dominant repository language. If the repository has no language convention, use English.

Do not invent missing facts. Mark unknown, unconfirmed, or decision-dependent information. Preserve existing conventions for names, locations, links, and formatting.

## 2. Consistent document structure

Every document should use the following minimal core and preserve the section order:

| Order | Section | Content |
| --- | --- | --- |
| 1 | **Key information** | A short entry point suited to the document type. For installation, provide requirements and installation steps first. For business documentation, provide the basic information needed to understand the topic. For usage instructions, provide the quickest way to complete the task. For a decision or process, provide the most important context and outcome. |
| 2 | **Purpose** | Explain why the document or described element exists, what problem it solves, and what result it describes. |
| 3 | **Flow** | Explain how something works or should work. Add an appropriate Mermaid diagram for every important process, communication path, or lifecycle. |
| 4 | **Details** | Include configuration, rules, examples, variants, and information needed after the basics are understood. |
| 5 | **Limitations** | Describe edge conditions, known problems, missing elements, and situations requiring additional attention. |

If a section does not apply, keep it in the structure and briefly state that it is not applicable. Do not move details before **Key information**.

## 3. Readability

- Use simple sentences and short paragraphs.
- Keep each paragraph focused on one topic.
- Use lists for steps and tables for parallel information.
- Define a term on first use if the reader may not know it.
- Describe both the flow and the purpose when both are needed for understanding.
- Limit digressions, repetition, and information that does not help the reader complete the task or understand the topic.
- Use examples only when they explain usage or behavior in a specific situation.
- Do not replace the most important information with a long introduction.

## 4. Mermaid diagrams

Add a diagram for every important flow. Do not add one to a document containing only facts, definitions, or a simple list of properties.

Choose the diagram type for the relationship being described:

| Situation | Mermaid diagram |
| --- | --- |
| Process steps and decisions | `flowchart` |
| Communication between actors or services | `sequenceDiagram` |
| Status changes or lifecycle | `stateDiagram-v2` |
| Entity relationships or data structure | `erDiagram` |
| Class relationships and type dependencies | `classDiagram` |

The diagram should show the main elements, flow direction, and decisions affecting the outcome. Keep it small enough to understand without zooming. Describe details that do not affect the flow below the diagram.

Diagram text must use the same language as the document. Translate node names, labels, actors, states, and descriptions; technical Mermaid syntax such as `flowchart` and `sequenceDiagram` remains unchanged.

After adding a diagram, check the Mermaid block syntax and the consistency of diagram names with the document.

## 5. Creating and updating files

Prepare the document plan first, then fill in the details. Create the requested file or update the existing one while preserving confirmed information and local conventions.

Do not modify unrelated files. If an existing document uses a different structure, organize it according to the core structure only within the requested scope. Do not remove information without checking whether it is used as a source of knowledge or a reference.

After the change, check:

- the presence and order of the five core sections;
- that **Key information** matches the document type;
- the correctness of headings, links, lists, tables, and Mermaid blocks;
- that Mermaid diagram text uses the document language;
- that no unjustified claims or unnecessary repetition remain;
- that changes are limited to the requested scope.

## 6. Work summary

At the end, list the changed files, document type, structure used, diagrams added, and information that could not be confirmed. If the document requires a user decision, state it clearly instead of making an undocumented assumption.
