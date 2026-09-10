---
name: grilling
description: >
  Interview the user to resolve material decisions in a stated problem,
  process, solution, or implementation scope. Use this skill whenever a
  future-affecting choice is not established by available evidence. Ask in
  dependency-aware rounds. Do not use it for discoverable facts or pure
  execution details.
---

# Grilling

## Responsibility

Own collaborative decision discovery. Do not perform the caller's domain
analysis, solution design, implementation discovery, plan, or code change.
Return a compact decision update to the caller, never a transcript.

## Scope

The caller states one scope: `problem`, `process`, `solution`, or
`implementation`. Ask only what that scope exposes, plus its immediate next
stage. Confirm behavior before technical detail.

## Classify before asking

- **Discoverable fact** — comes from docs, code, config, tests, logs, or a
  tool. Retrieve it with `token-efficient-retrieval`; never ask the user.
- **Material decision** — changes behavior, scope, contract, priority,
  compatibility, architecture, persistence, rollout, source of truth, or
  future options. Ask the user.
- **Pure execution detail** — changes none of that. Decide it yourself.

Read [references/examples.md](references/examples.md) when a case sits on
the line between two of these.

## Orchestrator decision checks

When a caller reaches a decision check, build the frontier (below) first and
run this skill only if it is non-empty. Return `NO_OPEN_DECISIONS` otherwise.
Reaching a workflow stage, having an obvious default, or a short-sounding
request are not reasons to invent a question.

## The interview

Map open decisions as a tree: every decision branches into the decisions
hanging off it. The **frontier** is every decision whose prerequisites are
already settled — the ones answerable now without guessing at something you
haven't heard yet.

Work it in rounds:

1. **Build the tree.** Start from the caller's context: confirmed facts,
   confirmed decisions, open decisions, dependencies between them,
   assumptions worth surfacing.
2. **Ask the frontier, once.** One round covers every independent frontier
   item; dependent items wait for a later round. Give each question a stable
   ID (`Q1`, `Q2`, ...) that is never reused or renumbered.

   ```markdown
   ❓ **Q<ID> — <short title>**

   <question, with only the context needed to decide it>

   | Option | Choice |
   |---|---|
   | A | <choice> |
   | B | <choice> |
   | C | Other: <when useful> |

   ➡️ **Recommended:** <option, or say evidence does not justify one>
   ⚠️ **Why it matters:** <what changes depending on the answer>
   ```

   Every question must survive "what changes depending on the answer?" — if
   nothing does, drop it. Offer only materially different options; when the
   decision actually needs a rule, boundary, owner, trigger, or name, ask for
   that directly instead of manufacturing choices.
3. **Process the answers.** Mark each resolved, delegated, deferred,
   contradictory, or newly raised. One answer can settle several branches at
   once, so recompute the frontier from the updated tree — never by counting
   questions asked. If an answer conflicts with something already
   established, read [references/contradictions.md](references/contradictions.md)
   before resolving it.
4. **Repeat until the frontier is empty.** Every branch is confirmed,
   delegated with a stated scope, or deferred with a stated trigger. Nothing
   is left silently assumed.

A delegated decision binds only the scope the user named; adjacent choices
stay open unless separately delegated.

## Carrying state across rounds

Keep a compact record instead of replaying the conversation: confirmed
facts, confirmed decisions, delegated decisions (with scope), deferred
decisions (with trigger), open decisions, contradictions, constraints.
Preserve the user's exact wording when it defines a contract or boundary;
drop everything else that doesn't change a future answer.

## Handoff

Return confirmed facts, confirmed decisions, delegated and deferred
decisions, open decisions, blockers, contradictions, and relevant
constraints to `context-state`.
