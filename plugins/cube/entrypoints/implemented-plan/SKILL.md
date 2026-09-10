---
name: implemented-plan
description: >
  Manual-only transfer flow. Activate this skill only when the user explicitly
  requests a portable implementation instruction, for example
  /cube:implemented-plan. Reuse established conversation and task context
  to create one self-contained, copyable implementation prompt for a fresh
  ChatGPT chat, Claude Code, Codex, or another agent. Do not implement, do not
  rerun solved problem analysis, and do not activate automatically from fix-me,
  problem-solving, AGENTS.md, or any other flow.
---

# Implemented plan

## Responsibility and boundary

Own **TRANSFER**:

```text
current conversation / task history → established state → minimum complete
implementation context → portable implementation instruction → READY_FOR_TRANSFER
```

This is a manual entry, not an internal planner. It doesn't edit project
artifacts, execute a change, replace `fix-me`, or restart problem-solving.
Only run it after an explicit request for a portable prompt — never
auto-activate it from routing, problem-solving, `fix-me`, or another skill.
If confirmed work needs executing in the current context, that's `fix-me`.

## Inputs and context reduction

Reuse established context first. Pull only the implementation-relevant state
already in the session: problem, goal, requirements, confirmed solution,
scope, non-goals; user and technical decisions, constraints, business rules,
rejected directions worth not re-deciding; Execution Handoff, checkpoints,
compact state, evidence pointers, known project facts; relevant files,
modules, symbols, endpoints, schemas, components, tests, configuration;
required changes, acceptance criteria, verification, risks, blockers.

This isn't a conversation summary — cut small talk, repetition, raw logs,
long source excerpts, full documentation text, exploratory questions,
obsolete hypotheses, and any reasoning that can't change implementation.
Treat confirmed decisions as established; don't reopen one unless current
project evidence directly contradicts it.

## Minimal evidence policy

Don't research what the session already established. If a fact is essential
to a safe portable instruction, missing from established state, and easily
discoverable in the project, retrieve the minimum with
`token-efficient-retrieval`.

Classify every gap before acting:

| Gap | Action |
| --- | --- |
| Discoverable implementation fact | Retrieve the minimum evidence, only if essential |
| Small execution detail | Leave it to the destination executor |
| Confirmed decision | Preserve it |
| Material unresolved decision | Mark it explicitly as a blocker or open decision |

Don't invent a material decision, and don't start full problem-solving just
because a gap exists.

## Prompt construction

Return exactly **one** Markdown code block: one portable prompt, no
transcript, no second product-specific version, no empty boilerplate. Omit
any section with nothing useful in it.

Use this section order when a section is needed:

```text
Implement the following confirmed change.

Goal
Context
Confirmed decisions
Scope
Non-goals
Required changes
Relevant project areas
Constraints and business rules
Acceptance criteria
Verification
Known risks or blockers
Execution rules
```

Always include these execution rules:

- Treat the confirmed decisions below as established context.
- Don't restart problem analysis or reopen them unless current project evidence directly contradicts them.
- Inspect only the minimum project context required for implementation.
- Discover facts from the project instead of asking the user when they're available there.
- Make small implementation decisions locally.
- Ask only about material unresolved decisions.
- Implement the complete required scope.
- Update tests, documentation, and configuration when the confirmed change requires them.
- Verify the result and fix regressions caused by the implementation.
- Don't perform unrelated cleanup.
- Finish with a concise implementation and verification report.

If the destination project has a skill framework, the prompt may tell the
agent to respect its local `AGENTS.md` and use the appropriate execution
flow. Don't copy whole `SKILL.md` files into the prompt.

## Completion

Finish as `READY_FOR_TRANSFER` when the code block gives a new agent enough
compact, self-contained context to know what to change, where to look, which
decisions are fixed, how to verify the result, and when it's done.

Never claim `IMPLEMENTED`. If a material blocker remains, state it plainly
in the generated prompt instead of guessing or hiding it.
