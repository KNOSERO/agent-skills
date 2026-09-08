---
name: grill
description: Grill the user through dependency-aware rounds of questions until facts, assumptions, decisions, and intended direction are jointly understood before a domain task proceeds.
---

# Grill

## Responsibility

Own the clarification interview, not the consuming domain task. Turn uncertain, incomplete, contradictory, or assumption-based input into shared understanding before the consuming skill recommends, plans, or acts.

Grill whenever the agent is about to choose, infer, retain, reject, rename, organize, or interpret something—even when the choice is small, conventional, reversible, or technical. A fact can be discovered by the agent; the meaning, acceptance, direction, and use of that fact belong to the user.

Do not start the consuming task as part of this skill. Return confirmed decisions, accepted assumptions, deferred items, and relevant constraints to the caller.

## Fact and decision boundary

Classify each uncertainty as an established fact, discoverable fact, user decision, ambiguity, contradiction, assumption, or missing information.

- Discover facts independently using the minimum relevant repository, documentation, configuration, test, environment, or reliable external evidence.
- If the fact is established but its acceptance, interpretation, permanence, or effect on the direction is uncertain, ask the user.
- Never ask the user to retrieve a fact the agent can establish.
- Never convert an agent inference into a confirmed requirement or decision.
- Material assumptions must become evidence, an explicit decision, or an explicitly accepted unresolved constraint.

## Decision tree and frontier rounds

Model the work as a dependency-aware decision tree:

```text
decision
├── dependent decision
├── dependent decision
└── contradiction / assumption
```

The frontier is every decision whose prerequisites are settled and that can be asked without guessing an answer to an earlier unresolved question. At each round:

1. Recompute the decision tree and frontier.
2. Ask all readable, independent frontier questions in one message.
3. Include a recommendation and rationale for every question.
4. Wait for the user's answers before asking dependent questions.
5. Classify each answer, update the tree, expose newly created ambiguity, and continue with the next frontier.

Do not ask a full speculative questionnaire up front. Questions whose prerequisites are unresolved belong to a later round.

## Question contract

Every question must use this structure:

```markdown
❓ **Q<ID> — <short title>**

<question body>

**Options:**
- **A.** <option>
- **B.** <option>
- **C.** <option>
- **D. Other:** <when useful>

➡️ **Recommended:** <one recommendation and its rationale>

⚠️ **Why it matters:** <concrete consequence of the decision>
```

Use stable question IDs for the entire interview. Start at Q1, never renumber, and retain an existing ID when revisiting a partially unresolved question. Ask for a concrete choice, rule, trigger, owner, or boundary when a response is vague or conditional.

Recommendations are expected, but must be supported by the available evidence. If no option is justified, say so explicitly and identify the missing fact or decision.

## Answer validation

Classify each response as resolved, partially resolved, contradictory, deferred, or a new ambiguity. Do not treat a recommendation as permission to apply the choice.

- For a partial or conditional answer, identify the condition selecting each outcome and ask the remaining decision.
- For a contradiction, present the incompatible interpretations as a new question; never reconcile them silently.
- For an explicit deferral, record what is deferred, what depends on it, and when it must be resolved.
- If the user rejects the final understanding, ask for a free-form explanation and use it to locate the disagreement in the tree.

## Completion

The interview is ready to finish only when the agent has enough verified information and every decision in scope is resolved, explicitly accepted, or intentionally deferred. Then always perform a final confirmation round:

```markdown
❓ **Q<ID> — Final confirmation**

<concise statement of the complete shared understanding>

**Options:**
- **A.** Confirmed; continue to the consuming skill
- **B.** Not confirmed; I will explain the disagreement

➡️ **Recommended:** **A.** if the summary accurately reflects the user's decisions.

⚠️ **Why it matters:** The consuming skill must act on shared understanding, not only on the agent's internal interpretation.
```

If the user chooses B, ask for a free-form explanation, update the decision tree, and continue grilling. Do not hand off an unconfirmed understanding.

## Boundaries

```text
grill                     → resolves facts-versus-decisions, assumptions, contradictions, and user choices
token-efficient-retrieval → retrieves minimum evidence for discoverable facts
domain skill              → owns analysis, planning, recommendation, or implementation
documentation-guidelines  → owns presentation outside this question contract
```

Consuming skills must invoke `grill` before proceeding whenever any unresolved choice, inference, assumption, contradiction, or direction-setting interpretation remains—even if it is not material by the consuming skill's former criteria.
