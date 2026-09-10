---
name: task-decomposition
description: Break non-trivial tasks into the minimum set of coherent, dependent, and verifiable execution stages while preserving the consuming skill's domain workflow.
---

# Task decomposition

Use this as a shared execution capability for non-trivial tasks. Treat the task as a process:

```text
task → process → coherent stages → dependencies → execution order → verification points
```

This skill organizes work only. It does not provide domain knowledge or own analysis, auditing, refactoring, Git, research, retrieval, testing strategy, presentation, or export workflows. A consuming domain skill remains authoritative for its workflow and output contract.

## When to decompose

Decompose when the task has meaningful complexity, such as dependent actions, distinct phases, analysis followed by implementation, implementation followed by verification, multiple components or systems, migration, hypothesis-driven debugging, multi-round research, deployment checkpoints, or material execution risks.

For one simple, coherent action, proceed directly. Do not create artificial stages.

## Stage model

Choose the minimum number of stages that improves clarity, execution safety, dependency management, or verification. Split only at a meaningful responsibility, dependency, decision, risk, or verification boundary. Do not split routine technical actions into procedural micro-steps.

Each stage has one coherent objective, its required inputs, work to perform, an expected result, and an exit condition. The five fields are an internal work model; expose them to the user only when a plan is itself useful or requested.

A typical shape is:

```text
understand → decide / prepare → execute → verify
```

Use it as a heuristic, not a mandatory template. If the consuming skill defines domain-specific phases, preserve those phases and use decomposition only to divide them into manageable units.

## Dependencies and execution

Keep dependencies explicit. Do not execute a downstream stage on an unconfirmed assumption when an upstream result could change its scope or method. Independent stages may run in parallel; do not manufacture parallel branches.

Execute progressively:

```text
stage result → verify exit condition → retain compact conclusion → next stage
```

Pass forward decisions, results, important dependencies, and unresolved risks—not unnecessary commands, logs, inspected files, or procedural history. When `token-efficient-retrieval` is available, identify the current stage's information need first and retrieve only the minimum sufficient evidence for that stage.

## Replanning and failure locality

Treat the plan as adaptive. When new evidence appears, update the affected stage and its downstream dependencies. Revisit the smallest necessary earlier dependency; restart the whole process only when its assumptions or task model are invalid.

If a stage fails, identify the local cause and retry or revise from the nearest safe checkpoint. Preserve earlier conclusions that remain valid. Use statuses such as `pending`, `in progress`, `completed`, `blocked`, or `not needed` when they clarify coordination. Do not pretend downstream work is valid while a blocking result is unresolved.

Verify at meaningful boundaries where an incorrect intermediate result could invalidate later work. Detailed verification and test strategy belong to the consuming domain skill. The process is complete only when required stages and dependencies are resolved, meaningful verification is complete, and no blocker invalidates the result.

## Boundaries with other skills

- Domain skills define what workflow semantics are required; this skill only organizes their execution.
- `token-efficient-retrieval` determines the minimum evidence needed for the current stage.
- `programming-principles`, `documentation-guidelines`, result-length skills, and export skills retain their respective responsibilities.
- This skill does not control the final presentation and does not require narrating internal process steps to the user.

## For consuming skills

For non-trivial tasks, use `task-decomposition` through the available skill mechanism. Let it decide the minimum useful stage breakdown; do not copy its decomposition rules into the consuming skill. Preserve the consuming skill's own domain workflow and output contract. For simple coherent tasks, proceed directly without forcing decomposition.

Stop decomposing when the next unit of work has one coherent goal, understood dependencies, safe execution conditions, and a meaningful verification point, and further splitting would not materially improve clarity, safety, or verification.
