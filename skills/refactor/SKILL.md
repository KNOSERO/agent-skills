---
name: refactor
description: Analyze selected code, propose only justified behavior-preserving refactorings with stable T1, T2, T3, and subsequent identifiers, then implement and verify only the scope selected by the user.
---

# Refactor

## Responsibility and dependencies

This skill orchestrates analysis, proposal selection, implementation, and verification of refactorings. It does not duplicate the knowledge or workflow of its dependencies.

Find each dependency by name and load it through the skill mechanism available in the environment. Do not assume an installation path. If a required dependency is unavailable, report the missing dependency instead of guessing its rules.

| Dependency | Responsibility in this workflow |
| --- | --- |
| `programming-principles` | Decide whether a code or design improvement is justified. |
| `token-efficient-retrieval` | Gather the minimum sufficient evidence for the current decision. |
| `documentation-guidelines` | Determine how to present analysis, proposals, decisions, and results. |

Retrieval decides how much evidence to gather. Programming principles decide what constitutes a justified improvement. Refactor decides whether and when to propose or apply a change. Documentation guidelines decide how to communicate it.

Let each dependency control its own conditional references. Do not eagerly load all references.

## Invariants

Apply this heuristic to every candidate:

> Refactor only when the expected improvement in clarity, responsibility, maintainability, duplication, boundary quality, or change safety justifies the complexity and regression risk of the change.

```text
expected benefit > added complexity + navigation cost + regression risk
```

Do not propose a change merely because the code differs from a preferred style. A valid analysis may conclude:

```text
No meaningful refactoring is justified.
```

Refactoring preserves observable behavior. Keep public contracts, business rules, output, side effects, APIs, and other observable behavior unchanged. If solving the issue requires a `bug fix`, `functional change`, or `behavior change`, identify and present it separately; do not hide it inside a refactoring proposal.

## Workflow

Follow this workflow once for the request:

1. **Scope** — Work only on the code or goal identified by the user. If the scope is already clear from the conversation, do not ask again. If it genuinely cannot be determined, ask the user to specify the goal.
2. **Retrieve minimum sufficient evidence** — Use `token-efficient-retrieval`. Search and expand context only to resolve a concrete uncertainty that affects safe evaluation. Do not automatically read complete modules, usages, dependency trees, test suites, or repositories. Stop retrieval when the evidence supports the decision and more context is unlikely to change it.
3. **Evaluate** — Use `programming-principles` to assess correctness, responsibilities, boundaries, duplication, maintainability, and change safety. First decide whether a meaningful improvement exists; do not assume that refactoring is required.
4. **Prepare proposals only when justified** — Present concrete proposals ordered by actual impact and use the stable structure in [Proposal format](#proposal-format). Do not manufacture proposals to populate categories.
5. **User selection** — Do not modify code before the user selects the proposals. A selection already stated in the conversation remains valid; do not request the same approval again.
6. **Implement selected scope** — Implement only selected proposals and their necessary dependencies. Apply the smallest coherent change required to complete them safely and correctly. Exclude unrelated refactors, renames, formatting cleanup, architecture cleanup, opportunistic abstractions, and unrelated test rewrites. A technical detail necessary to complete an approved change is not a new approval decision. If completing the selection requires an out-of-scope change, explain the dependency and request expanded approval.
7. **Verify proportionally to risk** — Use the narrowest relevant verification, then widen only when the change's risk or scope justifies it: affected tests, related module checks, and broader verification as needed. Verify the unchanged contract; do not alter test expectations merely to accommodate a new implementation when behavior should remain unchanged.
8. **Summary** — Use `documentation-guidelines` to report the completed IDs, changed files, verification result, uncompleted or blocked items, and important new findings. Communicate decisions, risks, required approvals, blockers, and outcomes directly; omit obvious execution narration.

## Proposal format

Every refactoring proposal must contain:

- stable ID;
- priority;
- location;
- problem;
- proposed change;
- expected benefit;
- relevant risk or dependencies;
- verification approach.

Present every proposal in this table, including a single proposal:

```markdown
| ID | Priority | Location | Problem | Proposed change | Benefit | Risk / dependencies | Verification |
| --- | --- | --- | --- | --- | --- | --- | --- |
```

Use `documentation-guidelines` for wording, information density, and presentation details, but preserve this proposal structure. `documentation-guidelines` determines how information is presented; `refactor` determines what information a proposal must contain.

## Priorities and new findings

Use `Blocker`, `Critical`, `Major`, and `Minor` only when they clarify actual impact. Base priority on correctness risk, change safety, maintainability, responsibility clarity, dependency complexity, or development friction. `Blocker` means the issue prevents safely completing or verifying the planned change. Do not raise priority for style disagreement, and do not require a proposal in every category.

If implementation reveals a new issue, assign the next stable ID, report it, and continue the approved work if the issue does not block it. Do not implement it automatically when it exceeds the approved scope. Do not restart the entire analysis after every newly discovered issue. If it prevents safe completion, report it as a blocker.

## Stop conditions

Analysis:

> Stop when the available evidence is sufficient to decide whether meaningful refactoring is justified and further retrieval is unlikely to change that decision.

Implementation:

> Stop when all selected proposals are completed or explicitly blocked and required verification is complete.
