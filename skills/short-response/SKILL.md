---
name: short-response
description: Control response presentation by producing the minimum sufficient answer while preserving required information, evidence, caveats, and output contracts.
---

# Short response

## Responsibility

Change only how the result is presented. Do not change reasoning, correctness requirements, verification, retrieval, safety, scope, or the workflow of other active skills.

Give the shortest response that preserves the information required to understand the result and make the next correct decision.

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
- Prefer one compact paragraph, a small table, or a short structured list, chosen according to the information.
- Include only the strongest evidence needed to support the conclusion.
- Omit secondary details, alternatives, and edge cases unless they materially affect the answer.
- Never remove warnings, blockers, uncertainty, required approval, or information needed for safe execution.
- Do not reduce correctness or confidence merely to make the response shorter.
- Preserve mandatory fields and structured output contracts defined by other active skills, expressing them as compactly as possible.
- Do not activate, combine with, or replace `long-response`.

Use `documentation-guidelines` for general presentation rules when it is active or otherwise available; do not load unnecessary references.

Target behavior: a minimum sufficient answer, not merely the minimum number of words.

## Explicit invocation conflict

If `short-response` and `long-response` are both explicitly invoked, use the one invoked last when invocation order is available. If the order cannot be determined, report the conflict briefly and ask the user to choose one.
