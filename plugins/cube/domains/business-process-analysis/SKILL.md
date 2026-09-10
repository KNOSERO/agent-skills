---
name: business-process-analysis
description: >
  Reconstruct and explain the business process implemented or affected by a
  feature, use case, module, endpoint, event, command, behavior, or problem,
  using system artifacts as evidence rather than analyzing code in isolation.
  Use this skill as a process-understanding stage when problem-solving finds
  that an existing business or system process may matter. A plausible process
  connection is enough to activate it. Skip it only for a purely conceptual
  problem with no existing process to reconstruct.
---

# Business process analysis

## Responsibility

Answer: **what business process does this subject participate in, and how
does it actually work?** Read code through the process it implements, not as
an isolated technical structure — code, configuration, tests, schemas,
APIs, and logs are evidence, never a stand-in for behavior you'd otherwise
invent.

This is read-only. Don't turn it into bug hunting, an audit, dead-code
detection, or refactoring — pass a finding to `code-audit` or `refactor`
only when another request explicitly needs that work.

## Scope and boundary

The entry point can be a process, feature, use case, module, service,
endpoint, event, command, or problem — but it isn't automatically the
scope. Find the relevant business process first, then choose the smallest
boundary that gives the subject business meaning: if it already is a
complete process, analyze that; otherwise find the smallest enclosing one.
Describe the subject as a step, participant, subprocess, decision, rule, or
state transition as fits. Don't widen the boundary when a smaller one
already explains the requested behavior.

## Evidence and retrieval

Gather evidence with `token-efficient-retrieval`, expanding only to resolve
a concrete uncertainty:

```text
target → entry point/usages → direct calls/dependencies → business rules →
state transitions → immediate caller/enclosing flow → broader process only
if necessary
```

After each retrieval, update the process model and ask what material fact
is still missing. Stop once you understand the process, not the repository;
mark non-blocking gaps `unknown` or `unconfirmed`. Once retrieval is
exhausted, send every unresolved scope, interpretation, assumption, or
decision to `grilling` in `process` scope — never a fact retrieval could
have established, but do ask whether an unconfirmed fact should decide the
process direction.

Keep `confirmed`, `inferred`, and `unknown/unconfirmed` separate. Every
material claim needs an evidence status; label inference as inference.

## Process model

Establish only what's material to the scope: purpose and trigger; boundary,
actors, participants, relevant systems; flow, decisions, rules,
subprocesses, alternatives; state transitions, inputs, outputs, side
effects, failure paths; external interactions and their implementation
mapping; unknowns. Explain the business behavior before mapping it to
classes, functions, or config — a technically convenient fragment isn't a
process just because it's easy to point at.

## Invocation modes

Direct invocation: reconstruct and explain the process as a user-facing
result. Use `documentation-guidelines` for structure and language; add a
diagram only when it makes sequence, interaction, decisions, or state
changes materially clearer. Skip the procedural history and the list of
inspected artifacts.

Called by another skill: return only what that caller needs — scope,
trigger, flow, rules, state transitions, participants, implementation
mapping, material dependencies, unknowns. Don't produce full documentation
unprompted.

## Final check

Before returning: the subject is the process, not isolated code; the
boundary is the smallest meaningful one; every material claim has an
evidence status; retrieval stopped once sufficient; the output matches
direct or consuming invocation.
