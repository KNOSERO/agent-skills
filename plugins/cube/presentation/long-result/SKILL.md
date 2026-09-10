---
name: long-result
description: Control response depth by producing the most complete useful answer with relevant explanation, evidence, implications, and limitations without unnecessary verbosity.
disable-model-invocation: true
---

# Long response

## Dependency

Required skill: `documentation-guidelines`.

Find and apply it through the available skill mechanism. Let that skill control its own conditional references. Do not copy its detailed rules here.

## Responsibility

`documentation-guidelines` controls how information is presented. `long-result` controls how much relevant information and explanation is presented.

This skill controls completeness and depth, not detailed rules for tables, diagrams, legends, documentation structure, or writing style. Do not change correctness, retrieval strategy, scope, verification, safety, or the workflow of other active skills.

Provide the most complete useful answer, not the longest answer. Optimize for understanding and future reference, not response length.

Target behavior:

```text
comprehensive + structured + information-dense + easy to revisit
```

not:

```text
verbose + repetitive + unnecessarily long
```

Treat the result as a well-organized technical note rather than a long conversational response. It should help the user understand the result, key conclusions, reasons, meaningful dependencies, alternatives and tradeoffs, risks and limitations, and relevant next actions.

## Answer-first and layered reading

Give the conclusion before background. For substantial responses, prefer this hierarchy:

```text
answer / executive summary
→ key conclusions
→ detailed explanation and evidence
→ implications, dependencies, alternatives, or tradeoffs when relevant
→ risks, limitations, edge cases, or failure paths when relevant
→ recommended next actions when relevant
```

Organize the first 10–20% around the main result and most important conclusions. Use deeper sections for details needed for complete understanding. This is a default hierarchy, not a mandatory template; omit empty sections and use a better structure when the information requires it.

## Completeness and information density

Include a detail only when it materially improves understanding, decision quality, or future usefulness. Depending on the task, this may include relevant evidence, reasoning, assumptions, verification results, implications, dependencies, meaningful alternatives, tradeoffs, risks, limitations, important edge cases, failure paths, and next actions.

Apply `documentation-guidelines` fully. Preserve its presentation quality, including tables, diagrams, legends, comparisons, step-by-step explanations, and structured summaries when they make the information clearer. Do not add them decoratively or restrict them merely because the response is long.

Prefer compact explanations, focused sections, tables, and small useful diagrams over large prose blocks when structure improves comprehension. Every additional part must provide new value. Omit filler, repetition, procedural narration, obvious background, artificial introductions, and sections without useful content.

## Interaction with other skills

Other active skills remain owners of their domain-specific output contracts. Do not change mandatory structures. Expand them only with relevant explanation, evidence, context, implications, tradeoffs, dependencies, risks, or verification details.

For example, with `code-audit`, preserve the finding contract while optionally adding an executive summary, compact findings table, relationships, risks, and recommended order when relevant. With `refactor`, preserve the proposal contract while optionally adding rationale, architectural implications, dependencies, risks, tradeoffs, and verification strategy.

`short-result` and `long-result` differ in information depth, not presentation quality: `short-result` is decision-oriented and minimum-sufficient; `long-result` is understanding-oriented and comprehensively relevant. `long-result` does not activate `short-result`.

## Explicit invocation conflict

If `short-result` and `long-result` are both explicitly invoked, use the one invoked last when invocation order is available. If the order cannot be determined, report the conflict briefly and ask the user to choose one.
