---
name: clarifying-interview
description: Resolve every material ambiguity, contradiction, assumption, dependency, and user decision within an agreed scope before execution proceeds. Use when unclear requirements or scope can change interpretation, design, behavior, safety, cost, or the next safe action.
---

# Clarifying Interview

## Responsibility and boundary

Turn unclear or inconsistent input into a materially coherent shared understanding. This skill determines **what** must be clarified or decided; it does not execute the domain task, decompose work, implement code, define a testing strategy, retrieve evidence as a separate workflow, present final results, or export artifacts.

The target is **complete material clarification**, not minimum sufficient clarification:

> Continue until every material ambiguity, contradiction, assumption, dependency, and decision relevant to the agreed scope is resolved, explicitly accepted, or intentionally deferred.

Be exhaustive about material issues inside the agreed scope, but do not investigate hypothetical issues outside it. Do not stop merely because implementation could technically begin.

## Establish facts before asking

Classify each uncertainty as one of:

```text
established fact | discoverable fact | user decision | ambiguity |
contradiction | assumption | missing information
```

Finding discoverable facts is the agent's responsibility. Check the repository, code, configuration, tests, schemas, available environment, documentation, or authoritative external documentation and retrieve only the minimum evidence needed. Do not ask the user to perform research the agent can reliably perform.

```text
uncertainty → fact or decision?
             ↙          ↘
        retrieve       ask user
         evidence
```

Facts can block only questions that depend on them. Continue asking independent frontier questions while a local prerequisite is unresolved.

## Decision tree and frontier rounds

Model the interview as a dependency-aware decision tree, not a fixed questionnaire:

```text
root issue
├── decision A
│   ├── decision A1
│   └── decision A2
├── decision B
│   └── decision B1
└── contradiction C
```

The **frontier** is the set of all material questions that are currently answerable, independent of unresolved earlier decisions, and genuinely require user input.

Run repeated rounds:

```text
current state
→ compute frontier
→ ask the whole useful frontier
→ wait for answers
→ validate every answer
→ update the decision tree and dependencies
→ compute the next frontier
```

Ask all currently independent material questions in one round when the result remains reasonably readable. Do not ask downstream questions whose meaning depends on an answer from the same round or another unresolved upstream decision. Answers may remove, change, or add later questions.

## Fixed question contract

Every user-facing question MUST use this format, in every round:

```markdown
❓ **Q<ID> — <short title>**

<question body>

**Options:**
- **A.** <option>
- **B.** <option>
- **C.** <option>
- **D. Other:** <when appropriate>

➡️ **Recommended:** <recommended option and concise reason>

⚠️ **Why it matters:** <specific material impact>
```

`Q<ID>` is stable for the entire interview: start at Q1, never renumber, and give each new question the next unused number. When revisiting an unresolved question, keep its existing ID. The contract cannot be removed or altered by `documentation-guidelines`, `short-result`, or `long-result`.

Use 2–4 concrete options when a meaningful closed set exists. Do not invent artificial options. For a genuinely open question, use options such as:

```markdown
**Options:**
- **A.** Provide a concrete value, rule, or requirement.
- **B.** Explicitly defer this decision and define when it will be resolved.
```

Offer `Other` when it prevents a misleadingly closed set. Every question includes a recommendation when evidence supports one. Otherwise write:

```text
➡️ Recommended: No recommendation yet — this depends on <specific missing decision or fact>.
```

`Why it matters` must name a concrete effect on architecture, scope, data model, API contract, security, ownership, behavior, cost, operational complexity, compatibility, implementation choice, or later decisions. Never use a generic reason.

## Challenge and validate answers

Do not mistake an answer for a resolved decision. After each round, classify every answer as:

```text
resolved | partially resolved | contradictory |
new ambiguity introduced | explicitly deferred
```

Return `partially resolved`, `contradictory`, and newly ambiguous items to the frontier. Challenge vague answers professionally. For example:

- `probably`, `maybe`, `something like that`, `should be flexible`, or `whatever is best` do not settle a material question;
- `rather A` requires a definite choice when implementation depends on it;
- `A, but sometimes B` requires the exact condition for switching A → B;
- `make it flexible` requires what is flexible and who decides;
- `decide for me` permits an agent decision only when it does not require business ownership, sufficient information exists, and the rationale can be stated. Record that decision explicitly.

When answers conflict, do not silently reconcile them or choose arbitrarily. Ask a normal question using the fixed contract that states the conflict and offers explicit resolutions. A contradiction must be resolved or explicitly accepted as an unresolved constraint.

## Explicit deferral

`Later` is not a sufficient deferral for a material issue. Establish at least:

```text
what is deferred
why it can be deferred safely
what depends on it
when or at which stage it must be resolved
```

Mark any dependent stage as blocked when it cannot safely proceed without the decision. Independent work may continue.

## Completion and confirmation

The interview ends only when the material decision frontier is empty within the agreed scope:

```text
no unresolved material ambiguity
+ no unresolved material contradiction
+ no hidden material assumption
+ required user decisions resolved or intentionally deferred
+ all material branches of the decision tree visited
```

Then provide a short summary containing:

```text
Confirmed decisions
Constraints
Explicitly deferred decisions
Remaining accepted unknowns
```

Ask the user to confirm that this shared understanding is correct before returning control to the consuming skill. If this skill is a separate full-clarification phase, do not start dependent implementation before that confirmation.

## Example round

```markdown
❓ **Q1 — Tenant isolation**

What level of tenant isolation should the system guarantee?

**Options:**
- **A.** Logical isolation using `tenant_id` in shared tables.
- **B.** Separate schema per tenant.
- **C.** Separate database per tenant.
- **D. Other:** Define another isolation model.

➡️ **Recommended:** A for the current scope unless regulatory or hard-isolation requirements justify the operational cost of B or C.

⚠️ **Why it matters:** This affects the persistence model, migrations, operational complexity, backup strategy, and security boundary.

---

❓ **Q2 — Organization membership**

Can one user belong to more than one organization?

**Options:**
- **A.** No, exactly one organization.
- **B.** Yes, multiple organizations with separate roles.
- **C.** Yes, but only for administrative users.
- **D. Other:** Define another membership rule.

➡️ **Recommended:** B if cross-organization work is a real business requirement; otherwise A keeps authorization substantially simpler.

⚠️ **Why it matters:** This changes identity, authorization, membership modeling, and session context.
```

Q2 belongs in the same round only if its answer does not depend on Q1.

## Anti-patterns

Do not:

- accept vague answers as settled decisions;
- ask the user for discoverable facts;
- create a random or precomputed questionnaire;
- ask downstream questions before their prerequisites;
- ask dependent questions in the same round as their prerequisite;
- silently reconcile contradictions;
- silently make business decisions;
- change the question format between rounds;
- renumber question IDs;
- stop merely because implementation could begin;
- ask irrelevant hypothetical questions outside the agreed scope;
- repeat settled questions without new evidence.

## Interaction with other shared skills

```text
clarifying-interview → what needs to be clarified and decided
task-decomposition   → how the coherent work is divided into stages
token-efficient-retrieval → minimum evidence needed for factual uncertainty
```

The preferred flow is:

```text
unclear task → clarifying-interview → materially coherent task
             → task-decomposition → execution
```

Keep these responsibilities separate. Do not duplicate domain workflows, Git rules, architecture rules, programming principles, retrieval implementation, testing strategy, or result-export rules.
