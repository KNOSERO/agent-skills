# Interview algorithm

Load this reference when the task contains multiple unresolved decisions, dependencies between decisions, or more than one interview round.

## 1. Build the decision graph

Start from the caller's context and record only material items:

- established or discoverable facts;
- confirmed decisions and constraints;
- unresolved decisions;
- prerequisites and downstream effects;
- assumptions, contradictions, and deferred items.

Represent dependencies explicitly. A decision is not on the frontier if answering it requires guessing an unresolved prerequisite.

## 2. Prepare a round

For each unresolved item, identify:

1. what is already known and what evidence is missing;
2. whether retrieval can establish the missing information;
3. what changes for each materially different answer;
4. which prerequisites are settled;
5. whether the item belongs on the current frontier.

Retrieve only the evidence needed to classify or narrow the item. After retrieval, discard questions answered by facts and remove questions whose consequences no longer matter.

Ask the independent frontier items in one round. Do not include downstream questions merely because they are foreseeable.

## 3. Process the answer

Classify each answer as resolved, partially resolved, delegated, deferred, contradictory, or a new ambiguity. Update the decision graph and compact state. One answer may resolve or invalidate several items, or create a new dependent item.

Recompute the frontier from the updated graph. Never advance by question number alone and never repeat a settled decision.

## 4. Stop or continue

Stop when the completion conditions in `SKILL.md` hold. Continue only while an unresolved item can materially change the current task or a deferred item blocks the caller's next action.

If a decision is intentionally deferred, record the condition or later milestone that makes it necessary and continue independent work only where that deferral cannot change the result.
