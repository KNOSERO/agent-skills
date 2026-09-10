---
name: solution-design
description: >
  Define a behavior-level solution for a confirmed problem using confirmed
  documentation, process facts, constraints, and decisions. Use this skill
  after problem and relevant process analysis, before implementation discovery.
  Do not use it to choose files, classes, or code changes.
---

# Solution design

## Responsibility

Own the `WHAT`, not the `HOW`. Define the proposed system behavior, boundaries,
rules, alternatives, and trade-offs without selecting implementation details.

## Inputs and gate

Require a confirmed problem model and all material documentation facts. Require
a confirmed process model when an existing process affects behavior. If either
input is incomplete, return the exact missing input and do not design around an
assumption.

## Workflow

1. Restate the desired behavior, constraints, non-goals, and process impact.
2. Develop the minimum viable concept. Create multiple candidates only when
   there are materially different valid choices.
3. Compare candidates against confirmed constraints, user value, behavior,
   compatibility, risks, and future options.
4. Recommend the strongest justified concept. Label any inference clearly.
5. Send every unresolved material behavior or product decision to `grilling`
   in `solution` scope. Do not select it by default.

## Output contract

Return the confirmed inputs used, candidate concepts if needed, the recommended
concept, behavior rules, state or process changes, interfaces or external
effects at a conceptual level, trade-offs, risks, and decisions for grilling.

Stop after the solution concept is confirmed. Do not inspect repository
structure or name technical implementation targets; that belongs to
`implementation-discovery`.
