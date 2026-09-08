---
name: short-response
description: Control response presentation by producing the minimum sufficient answer while preserving required information, evidence, caveats, and output contracts.
---

# Short response

## Dependency

Required skill: `documentation-guidelines`.

Find and apply it through the available skill mechanism. Let that skill control its own conditional references. Do not copy its detailed rules here.

## Responsibility

`documentation-guidelines` controls how information is presented. `short-response` controls how much information is presented.

Change only the presentation depth. Do not change reasoning, correctness requirements, verification, retrieval, safety, scope, or the workflow of other active skills. Do not remove or weaken the tables, diagrams, legends, hierarchy, or domain-specific structure required by `documentation-guidelines` or another active skill.

Give the shortest well-structured response that preserves the information required to understand the result and make the next correct decision.

Compress information, not presentation quality. Optimize for:

```text
minimum sufficient information
+ high information density
+ clear structure
```

Prefer this order when it fits the result:

```text
answer
→ key result
→ required evidence or reason
→ important caveat or next action only when needed
```

## Rules

- Start directly with the answer or result.
- Omit introductions and background unless they are required for understanding.
- Do not repeat the user's request or narrate execution steps.
- Apply `documentation-guidelines` to short responses as well as long ones. Use a compact table when several comparable items are clearer in a table; use a small diagram when a process, dependency, flow, communication path, decision, or structure is materially easier to understand visually. Keep legends, short sections, hierarchy, and other presentation structures when they improve understanding.
- Include only the strongest evidence needed to support the conclusion.
- Omit secondary details, alternatives, and edge cases unless they materially affect the answer.
- Never remove warnings, blockers, uncertainty, required approval, or information needed for safe execution.
- Do not reduce correctness or confidence merely to make the response shorter.
- Preserve mandatory fields and structured output contracts defined by other active skills, expressing them as compactly as possible.
- For each additional detail, include it only if it materially helps the user understand the result or make the next correct decision; otherwise omit it in the most compact clear form.

Do not create a table or diagram for a simple fact merely because it is available. Let `documentation-guidelines` determine the appropriate presentation rules and references.

## Interaction with other skills

Other active skills remain owners of their domain-specific output contracts. For example, `code-audit` defines what a finding must contain, while `short-response` may present those findings compactly, including in a table when that is clearer. Never remove mandatory fields, critical evidence, warnings, blockers, uncertainty, required approvals, or information needed for a safe decision.

`short-response` does not activate `long-response`.

## Explicit invocation conflict

If `short-response` and `long-response` are both explicitly invoked, use the one invoked last when invocation order is available. If the order cannot be determined, report the conflict briefly and ask the user to choose one.
