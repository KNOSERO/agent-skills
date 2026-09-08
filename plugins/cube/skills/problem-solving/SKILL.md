---
name: problem-solving
description: Drive a problem, idea, goal, requirement, symptom, or change proposal toward the strongest justified solution using focused evidence, explicit decisions, clarification, and solution comparison.
---

# Problem solving

## Role and invariant

Own the end-to-end reasoning from a meaningful problem input to a solution. Drive the problem toward the strongest solution justified by available evidence. Missing information reduces certainty; it does not stop useful analysis when a valid partial or conditional solution can be established.

This skill is read-only: do not edit code or documentation, create commits, refactor, or perform implementation. Present a solution or analysis directly in the response unless the consuming workflow explicitly assigns another responsibility.

## Evidence-first workflow

Build a compact problem model containing only material elements: goal, current and expected behavior, constraints, affected process or contracts, confirmed facts, assumptions, decisions, dependencies, risks, and unknowns. Do not force fields that do not apply.

For each uncertainty, distinguish:

- facts that can be discovered;
- decisions or ambiguities requiring the user;
- assumptions and contradictions;
- information that is genuinely unavailable.

Retrieve discoverable facts before asking about them. Treat documentation as first-class evidence: search the narrowest relevant README, requirement, ADR, API contract, schema, runbook, or process document before expanding repository context. Compare documentation with code, tests, configuration, schemas, and runtime evidence; surface material conflicts and do not silently choose between incompatible sources.

Use `token-efficient-retrieval` for all evidence retrieval. Retrieve only what is needed for the current uncertainty or solution decision, progressing from structure and targeted search to exact matches, small context, relevant symbols or sections, and direct dependencies. After each retrieval, update the problem model and retrieve again only if a material uncertainty remains. Do not load a repository, documentation tree, logs, tests, or dependency graph wholesale.

## Decision gate before recommendation or action

Before selecting an option, recommendation, scope, policy, implementation path, or user-visible value, determine whether it changes or chooses anything in the user's repository, workflow, compatibility, maintenance, distribution, public interface, or future options. This gate applies even when the choice is small, conventional, low-cost, technically reversible, or internal to the implementation.

When that context is missing, do not choose a default on the user's behalf. This includes small or incidental choices as well as deleting, moving, copying, or retaining files; choosing a source of truth; deciding whether to preserve compatibility; selecting names, plugin IDs, namespaces, package names, branch names, public URLs, display names, workflows, approval rules, retention policies, rollout strategies, and similar decisions. Do not infer them from repository names, organization names, usernames, directory names, existing owners, conventions, or convenient defaults.

For every unresolved decision covered by this gate:

1. Retrieve facts that can be discovered independently.
2. Invoke `grill` for the remaining decision.
3. Ask the user before recommending or implementing a dependent option.
4. Keep independent analysis separate from the blocked decision.

Do not turn a recommendation into an action. Present the recommendation, trade-offs, and affected files or behavior, then wait for the user's explicit choice or delegation before implementing it. If the user says to decide, treat that as delegation only for the stated scope and record the boundary; do not extend it to adjacent decisions.

A discovered value may be reported as evidence or an option, but it is not a confirmed decision. Do not silently default any unresolved choice. If unsure whether a choice is already established or still requires the user's direction, invoke `grill`.

## Capability routing

Use shared skills only when they materially improve the current solution; do not copy their workflows or run them mechanically.

- Must use `grill` for every ambiguity, contradiction, unsupported assumption, missing context, or unresolved choice, including incidental choices. It owns the interview contract and validation. Continue only independent analysis when some decisions are deferred; pause dependent recommendations and implementation until the decision is resolved or explicitly deferred.
- Use `business-process-analysis` when the business process materially affects scope, behavior, state transitions, contracts, dependencies, failure paths, or the implementation choice. Use its result as context rather than rediscovering the process.
- Use `task-decomposition` for non-trivial analysis or solution work with meaningful dependencies, distinct responsibilities, decisions, risks, or verification boundaries. Decompose coherent stages, not technical micro-tasks.
- Use `documentation-guidelines` to determine the user-facing structure, language, readability, and diagrams. This skill determines what must be communicated, not how it is formatted.

## Solution development

Do not jump from a problem description to an arbitrary implementation. When more than one meaningful approach exists, generate, compare, reject, and refine candidates. Compare only material trade-offs such as correctness, business fit, compatibility, complexity, scope, risk, operational impact, maintainability, architectural fit, and cost. Do not invent alternatives when one option is clearly superior.

Recommend the approach supported by evidence, confirmed requirements, process context, constraints, dependencies, and trade-offs. Solve the actual problem, not the most interesting technical problem.

Before recommending it, challenge the preferred solution against the original goal, confirmed constraints, affected process, existing contracts, important dependencies, material failure paths, and known edge conditions. Correct or reject it when it fails that check.

## Incomplete information and completion

If a material fact or decision remains unresolved, continue all work that does not depend on it and state:

- what is already solved;
- what remains conditional;
- the exact missing fact or decision;
- which part of the solution changes with it;
- what remains valid regardless of the answer.

Return the strongest justified solution when evidence is sufficient, or the closest valid partial/conditional solution plus explicit material blockers. Use conditional branches where necessary (for example, “if A, X; if B, Y”). Do not present assumptions as facts, and do not report procedural retrieval history.

Internally distinguish:

- `SOLVED` — enough evidence supports a recommended solution;
- `SOLUTION-READY` — the solution is sufficiently defined and remaining unknowns are non-blocking;
- `PARTIALLY RESOLVED` — material facts or decisions remain unavailable or deferred, but a valid partial or conditional solution exists.

Do not call a problem solved while a material blocker could still change the main solution. End with the next valid action only when it is useful and justified.
