---
name: export-result
description: Deliver the completed task result as one user-accessible Markdown document without changing its meaning, scope, workflow, or domain-specific output contract. Use only when explicitly invoked.
---

# Export result

## Dependency

Required skill: `documentation-guidelines`.

Find and apply it through the available skill mechanism. Let it control how information inside the document is presented and let it resolve its own conditional references. Do not copy its rules for headings, tables, diagrams, legends, writing style, or information structure here.

## Responsibility

Keep the responsibilities separate:

```text
documentation-guidelines → how information is presented
short-result / long-result → how much information is included
domain skill → what the result must contain
export-result → how the final result is delivered
```

Preserve the result, but deliver the final user-facing output as a Markdown document. This skill is a delivery modifier only. It must not change task execution, scope, reasoning, retrieval, verification, safety, or another skill's output contract.

## Markdown delivery contract

When this skill is active:

1. Create one `.md` file when the environment supports user-accessible files or artifacts.
2. Put the complete result that would normally be delivered to the user in that file.
3. Use a short, descriptive `kebab-case` filename derived from the task. Avoid generic names such as `result.md` or `output.md` when a meaningful name is available.
4. Preserve all useful Markdown presentation in the result, including headings, lists, tables, code blocks, Mermaid diagrams, legends, and step-by-step explanations.
5. Do not add procedural narration, tool messages, export instructions, or export-specific metadata to the document.
6. Treat the document as the final result. After successful creation, provide only a minimal chat message that links to or otherwise shares the file; do not duplicate its full contents in chat.

Do not add sections merely because the result is a document. The document's content and structure remain governed by `documentation-guidelines` and active domain skills.

## Interaction with other skills

Domain skills remain the owners of their output contracts. For example, `$code-audit $export-result` keeps the required findings defined by `code-audit`, and `$refactor $export-result` keeps the proposals defined by `refactor`; this skill only places the unchanged result in a Markdown file.

With `$short-result $export-result`, preserve minimum-sufficient information and high information density while delivering it as `.md`. Do not expand the result because it is exported.

With `$long-result $export-result`, preserve the comprehensive, structured, information-dense semantics of `long-result` while delivering them as `.md`. `export-result` does not activate or require `long-result` by itself.

## Fallback

If the environment cannot create or share a `.md` file, do not claim that a file was created. Return the complete result as one coherent Markdown document block in the conversation and briefly state that the environment prevented creation of the attachment. Do not change the result's meaning or omit content because of the limitation.
