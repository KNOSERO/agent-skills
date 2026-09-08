---
name: clarifying-interview
description: Resolve material uncertainty, contradictions, dependencies, assumptions, and user decisions before a domain task proceeds. Use for unclear or inconsistent input that prevents complete shared understanding within an agreed scope.
---

# Clarifying Interview

## Responsibility and invariant

This skill owns the interview, not the domain task. Transform unclear or inconsistent input into complete material shared understanding:

```text
unclear input → establish agreed scope → material uncertainties
              → facts vs decisions → retrieve facts
              → interview decisions → validate
              → resolve contradictions and assumptions
              → complete material shared understanding
```

The invariant is:

> Continue until every material ambiguity, contradiction, assumption, dependency, and decision within the agreed scope is resolved, explicitly accepted, or intentionally deferred.

Be complete within scope; do not investigate irrelevant or hypothetical issues outside it.

## Facts and decisions

Classify each uncertainty as an established fact, discoverable fact, user decision, ambiguity, contradiction, assumption, or missing information.

> Discoverable facts are the agent's responsibility. Decisions belong to the user or appropriate decision owner.

If a fact can be established from the repository, code, configuration, tests, documentation, environment, or a reliable source, retrieve the minimum evidence and use it. Never use a user question as a substitute for retrieval. If retrieval blocks only one branch, continue with independent frontier questions.

Material assumptions must become evidence, an explicit decision, or an explicitly accepted unresolved constraint. Do not hide them or silently turn them into requirements.

## Decision tree and frontier rounds

Model the conversation as a dependency-aware decision tree. Nodes are decisions, discoverable facts, contradictions, or assumptions; edges express prerequisites and consequences:

```text
decision
├── dependent decision
├── dependent decision
└── contradiction / assumption
```

At each round, compute the **frontier**: all material questions whose prerequisites are settled and that currently require user input. Ask the independent frontier together when readable. Put dependent questions in a later round; do not precompute a full questionnaire.

After every round:

```text
answers → validate → update tree and dependencies → recompute frontier
```

Answers can remove, alter, or create later questions. A fact lookup may pause one branch without pausing independent branches.

## Mandatory question contract

Every user-facing question MUST use exactly this structure:

```markdown
❓ **Q<ID> — <short title>**

<question body>

**Options:**
- **A.** <option>
- **B.** <option>
- **C.** <option>
- **D. Other:** <when useful>

➡️ **Recommended:** <recommended answer and short reason>

⚠️ **Why it matters:** <material consequence of this decision>
```

Use only natural options. Include `Other` when the listed choices are not exhaustive. For genuinely open decisions, provide structured ways to answer rather than inventing fake alternatives. The `Recommended` and `Why it matters` sections are always required. If evidence does not support a recommendation, write:

```yaml
➡️ Recommended: No recommendation yet — depends on <specific unresolved fact or decision>.
```

`Q<ID>` is stable for the entire interview. Start at Q1, never renumber, assign each new question the next unused ID, and retain the existing ID when revisiting a partially unresolved question. This contract has priority over presentation modifiers from other skills.

## Validate and challenge answers

Do not mistake an answer for a resolved decision. Classify each response as one of:

```text
resolved
partially resolved
contradictory
deferred
new ambiguity introduced
```

Treat vague, conditional, or hedged answers as unresolved when they leave material uncertainty. Ask for a concrete choice, rule, trigger, owner, or boundary. For `A, but sometimes B`, establish the condition selecting each outcome. For `decide for me`, decide only when no business owner is needed and sufficient evidence exists; record the decision explicitly.

If the user does not know, determine whether the answer can be discovered, recommended by the agent, safely deferred, or must remain an explicit unresolved constraint.

Never silently reconcile conflicting requirements or choose between incompatible interpretations. Convert each material conflict into a normal question using the mandatory contract and offer explicit resolutions. Return partially resolved, contradictory, and `new ambiguity introduced` items to the frontier.

## Deferral and completion

An explicit deferral must state:

```text
what is deferred
what depends on it
when or at which stage it must be resolved
```

If a dependent stage cannot safely proceed, mark it blocked. Independent work may continue.

End the interview only when, within the agreed scope:

```text
material frontier is empty
+ no unresolved material contradiction
+ no hidden material assumption
+ required decisions are resolved or explicitly deferred
```

Then briefly present confirmed decisions, constraints, deferred decisions, and accepted unknowns, and return control to the consuming skill. Do not start the domain task as part of this skill.

## Boundaries

```text
clarifying-interview      → resolves uncertainty and decisions
task-decomposition        → organizes coherent work into stages
token-efficient-retrieval → retrieves minimum evidence
domain skill              → owns the domain workflow
documentation-guidelines  → owns presentation outside this question contract
```

Do not duplicate those skills' workflows or rules.

## For consuming skills

Use `clarifying-interview` when material ambiguity, contradictions, missing decisions, or unsupported assumptions prevent coherent shared understanding.

Let this skill own the interview process and mandatory question contract. Do not duplicate its rules in consuming skills.
