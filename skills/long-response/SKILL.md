---
name: long-response
description: Control response presentation by providing a comprehensive, structured, answer-first explanation with relevant evidence, implications, limitations, and details.
---

# Long response

## Dependency

Required skill: `documentation-guidelines`. Find and apply it through the available skill mechanism. Let that skill control its own conditional references; do not copy its detailed rules here.

## Responsibility

Change only the presentation depth and organization of the result. Do not change correctness, retrieval strategy, scope, verification, safety, or the workflow of other active skills.

Provide a comprehensive, well-organized, answer-first response that captures important conclusions, evidence, reasoning, implications, and relevant details without unnecessary filler. The response should feel closer to concise technical documentation than conversational commentary.

## Information hierarchy

Use this order when useful:

```text
answer / executive summary
→ key conclusions
→ structured explanation
→ supporting evidence
→ important details
→ risks / limitations / edge cases
→ recommended next actions when relevant
```

Do not begin with long background before giving the conclusion.

## Organization

When they improve understanding, use clear headings, summary or comparison tables, process diagrams, legends, step-by-step explanations, grouped findings, explicit assumptions, and risks or limitations. Do not create sections merely to make the response longer.

## Detail policy

Include all important findings, relevant evidence, meaningful alternatives, important tradeoffs, dependencies, uncertainty, materially relevant edge cases, and verification information when relevant.

Exclude repeated statements, filler, procedural narration, generic background unrelated to the decision, and duplicated conclusions.

The goal is comprehensive, structured, and information-dense—not verbose.

## Interaction with other skills

Other active skills continue to own their domain-specific output contracts. Preserve all mandatory fields and structures they define, and expand them with useful explanation where appropriate. In particular, `documentation-guidelines` controls documentation presentation and organization.

Do not activate, combine with, or replace `short-response`.

## Explicit invocation conflict

If `short-response` and `long-response` are both explicitly invoked, use the one invoked last when invocation order is available. If the order cannot be determined, report the conflict briefly and ask the user to choose one.
