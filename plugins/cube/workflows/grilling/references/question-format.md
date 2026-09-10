# Question format

Load this reference when a material decision should be presented to the user as options, a recommendation, or a structured free-form question.

## Structured decision

Use stable IDs for the whole interview. Start at `Q1` when no ID exists and never renumber an existing question.

```markdown
❓ **Q<ID> — <short title>**

<Question and only the context needed to decide it.>

| Option | Choice |
|---|---|
| A | <choice> |
| B | <choice> |
| C | <choice> |
| D | Other: <when useful> |

➡️ **Recommended:** <option, or say that evidence does not justify one>

⚠️ **Why it matters:** <what changes depending on the answer>
```

Include only options that represent materially different outcomes. Put trade-offs in the choice text or immediately around the table, not in a long questionnaire. Do not manufacture options when the decision naturally requires a free-form rule, boundary, owner, trigger, or name.

Every question must answer: “What changes depending on the answer?” If no material consequence can be stated, do not ask the question.

## Recommendations and delegation

Base recommendations on discovered evidence, confirmed constraints, and relevant trade-offs. Label them as recommendations. If the user says to decide, record the exact delegated scope and decide only within it; adjacent choices remain unresolved unless separately delegated.

## Multiple questions in one round

Use one block and one table per independent frontier decision. Keep dependent decisions for a later round. Do not repeat context already present in the caller's decision state.
