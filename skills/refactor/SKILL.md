---
name: refactor
description: Analyze selected code using programming-principles, present refactoring proposals by priority, assign T1, T2, T3, and subsequent identifiers, and implement the items selected by the user.
---

# Refactoring

## 1. Foundation and scope

Required skill: `programming-principles`.

Before analysis, find this skill by name and load it through the skill mechanism available in the current environment. Apply its current rules when assessing code, proposing changes, implementing them, and verifying the result. Do not assume a particular path, directory structure, or installation method, and do not copy its rules here. If the skill is unavailable, report the missing dependency and request it before starting the analysis.

Work on the code specified by the user. Read its contracts, usages, dependencies, and tests to assess the impact of changes. If the scope cannot be determined from the conversation, ask the user to specify it.

Preserve the public contract and existing behavior. Present functional changes or bug fixes separately from refactoring when they are needed.

## 2. Workflow

| Stage | Action |
| --- | --- |
| Analysis | Identify where programming principles could improve the selected code. For each issue, assess its effect, solution, benefit, risk, and dependencies. Do not change code at this stage. |
| Proposals | Present concrete changes from highest to lowest priority. Assign stable `T1`, `T2`, `T3`, and subsequent identifiers. Link each proposal to code and a relevant programming principle. |
| User selection | After presenting the list, ask which items to implement and wait before changing code. A selection already given in the conversation remains valid. |
| Implementation | Apply selected changes in stages, starting with the highest priority and respecting dependencies. If a selected change requires an unselected item, explain the dependency and obtain approval to expand the scope. |
| Verification | Test the contract using checks appropriate to the change and the rules in `programming-principles`. Do not change test expectations to fit a new implementation when the contract is unchanged. If important coverage is missing, propose the required test before implementation. |
| Summary | Report completed identifiers, changed files, and verification results. Mark selected items that could not be completed and explain why. |

## 3. Priorities

| Priority | Use when |
| --- | --- |
| Blocker | The problem prevents safely making the planned change or reliably checking the contract. State what further work it blocks. |
| Critical | The structure creates a high risk of violating the contract or domain rules during further changes. |
| Major | The change significantly simplifies responsibilities, dependencies, or reuse but is not an urgent obstacle. |
| Minor | A local improvement to names, comments, or readability with limited broader impact. |

Justify priority by the actual impact. Do not raise it solely because code differs from a preferred style. You do not need a proposal in every category; omit categories without a concrete benefit.

## 4. Proposal format

| ID | Priority | Location and principle | Problem, proposed change, and benefit | Risk and dependencies | Verification |
| --- | --- | --- | --- | --- | --- |

Add new issues found during implementation with new identifiers and implement them only after user selection if they exceed the approved scope.
