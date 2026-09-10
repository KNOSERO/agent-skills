---
name: implementation-plan
description: >
  Manual-only transfer flow. Activate this skill only when the user explicitly
  requests a portable implementation instruction, for example
  /cube:implementation-plan. Reuse established conversation and task context
  to create one self-contained, copyable implementation prompt for a fresh
  ChatGPT chat, Claude Code, Codex, or another agent. Do not implement, do not
  rerun solved problem analysis, and do not activate automatically from fix-me,
  problem-solving, AGENTS.md, or any other flow.
---

# Implementation plan

## Responsibility and boundary

Own **TRANSFER**:

~~~text
current conversation / task history
→ established state
→ minimum complete implementation context
→ portable implementation instruction
→ READY_FOR_TRANSFER
~~~

This is a manual flow entry, not an internal implementation planner. It does
not edit project artifacts, execute a change, replace fix-me, or restart
problem-solving.

Use it only after an explicit request to create a portable prompt. Never
auto-activate it from routing, problem-solving, fix-me, or another skill.
When confirmed work must be executed in the current context, use fix-me instead.

## Inputs and context reduction

Reuse established context first. Gather only the implementation-relevant state
already available in the current session, including when present:

- problem, goal, requirements, confirmed solution, scope, and non-goals;
- user and technical decisions, constraints, business rules, and rejected
  directions that prevent an important repeated decision;
- Execution Handoff, checkpoints, compact state, evidence pointers, and known
  project facts;
- relevant files, modules, symbols, endpoints, schemas, components, tests, and
  configuration;
- required changes, acceptance criteria, verification, risks, and blockers.

Do not produce a conversation summary. Remove small talk, repetitions, raw
logs, long source excerpts, full documentation text, exploratory questions,
obsolete hypotheses, and reasoning history that cannot change implementation.

Treat confirmed decisions as established context. Do not reopen them unless
current project evidence directly contradicts them.

## Minimal evidence policy

Do not research what the session already established. If a fact is essential to
a safe portable instruction, missing from established state, and easily
discoverable in the project, use token-efficient-retrieval and retrieve the
minimum sufficient evidence.

Classify every gap before acting:

| Gap | Action |
| --- | --- |
| Discoverable implementation fact | Retrieve the minimum evidence when it is essential. |
| Small execution detail | Leave it to the destination executor. |
| Confirmed decision | Preserve it. |
| Material unresolved decision | Mark it explicitly as a blocker or open decision. |

Do not invent a material decision and do not start full problem-solving merely
because a gap exists.

## Prompt construction

Return exactly **one** Markdown code block. It must contain one portable prompt
and no transcript, second product-specific version, or empty boilerplate.
Omit any section that has no useful content.

Use this fixed section order when the sections are needed:

~~~text
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
~~~

The generated prompt must always include these execution rules:

- Treat the confirmed decisions below as established context.
- Do not restart problem analysis or reopen them unless current project evidence directly contradicts them.
- Inspect only the minimum project context required for implementation.
- Discover facts from the project instead of asking the user when they are available there.
- Make small implementation decisions locally.
- Ask only about material unresolved decisions.
- Implement the complete required scope.
- Update tests, documentation, and configuration when the confirmed change requires them.
- Verify the result and fix regressions caused by the implementation.
- Do not perform unrelated cleanup.
- Finish with a concise implementation and verification report.

When the destination project has a skill framework, the prompt may instruct the
agent to respect its local AGENTS.md and use the appropriate execution flow.
Do not copy whole SKILL.md files into the prompt.

## Completion

Finish as READY_FOR_TRANSFER when the code block contains enough compact,
self-contained context for a new agent to know what to change, where to look,
which decisions are fixed, how to verify the result, and when it is done.

Do not claim IMPLEMENTED. If a material blocker remains, preserve it clearly in
the generated prompt rather than guessing or hiding it.
