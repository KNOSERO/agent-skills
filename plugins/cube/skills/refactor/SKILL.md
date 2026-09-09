---
name: refactor
description: Analyze selected code, propose only justified behavior-preserving refactorings with stable T1, T2, T3, and subsequent identifiers, then implement and verify only the scope selected by the user.
---

# Refactor

## Responsibility

Orchestrate this workflow:

```text
scope → evaluate → propose → user selects → implement → verify → report
```

Refactoring preserves observable behavior: public contracts, business rules, outputs, side effects, APIs, and other externally visible behavior. A bug fix, functional change, or behavior change is separate, never hidden in a refactoring proposal.

Refactor only when:

> expected benefit > added complexity + navigation cost + regression risk

Do not propose a change merely because code differs from a preferred style. A valid conclusion is: `No meaningful refactoring is justified.`

## Capability routing

Resolve capabilities by name and load them only when triggered; if unavailable, report it rather than guessing. Do not eagerly load references.

| Capability | Trigger |
| --- | --- |
| `token-efficient-retrieval` | Additional evidence is needed to evaluate or safely implement a proposal. |
| `programming-principles` | Structural or design quality must be evaluated. |
| `grill` | A material unresolved user, project, design, or architectural decision affects proposal or implementation scope. |
| `task-decomposition` | Implementation or verification has meaningful stages or dependencies. |
| `documentation-guidelines` | Proposals or the final result must be presented. |

`refactor` decides when a capability matters; the dependency owns its method.

## Workflow and approval boundary

1. **Scope and evidence** — Work only on the requested target. Retrieve only evidence needed to decide whether a concrete hypothesis is justified and safe; stop when more evidence is unlikely to change the decision.
2. **Evaluate** — Load [proposal-evaluation.md](references/proposal-evaluation.md) when opportunities must be evaluated or compared. Produce no proposal unless materially justified.
3. **Present** — If at least one proposal is justified, load [proposal-format.md](references/proposal-format.md). Use stable IDs `T1`, `T2`, `T3`, …; never change an ID's meaning. Load [priorities.md](references/priorities.md) only when priority is ambiguous, affects ordering, or needs explanation.
4. **Approve** — Do not modify code before explicit user selection of IDs. Existing selection in the conversation remains valid. For a material out-of-scope dependency, explain it and request expanded approval; use `grill` for unresolved decisions.
5. **Implement and verify** — After selection, load [execution.md](references/execution.md) and [verification.md](references/verification.md). Implement only selected proposals, necessary dependencies, and required verification; exclude unrelated cleanup, formatting, renames, abstractions, architecture work, or test rewrites.
6. **Report** — State completed, blocked, or unselected IDs, changed scope, contract verification, new findings, and required decisions or approvals.

If implementation reveals a new opportunity, assign the next ID, report it, and do not implement it automatically. Continue approved work when safe; block only when safe completion or verification is impossible.

## Stop conditions

Analysis stops when evidence is sufficient to decide whether meaningful refactoring is justified and additional evidence is unlikely to change the decision.

Implementation stops when all selected proposals are completed or explicitly blocked and required verification is complete.
