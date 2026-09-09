# Staged workflow

Load this reference when `problem-solving` must coordinate two or more
dependent capabilities or when a capability result can expose new decisions.

## Stage contract

For each stage, keep four items:

| Item | Meaning |
| --- | --- |
| Input question | The one question this stage must answer |
| Context | Confirmed facts, decisions, constraints, and relevant unknowns |
| Result | Facts, inferences, decisions, risks, and new unknowns returned by the stage |
| Exit condition | What must be known before the next dependent stage can start |

Pass the smallest context that supports the input question. Do not pass the
whole conversation or unrelated stage results.

## Stage cycle

1. Identify the next input question from the current problem model.
2. Use `grill` for material user decisions needed by that question.
3. Run one capability that owns the question.
4. Classify and merge the result into the problem model.
5. Check whether the result changed scope, dependencies, risks, or acceptance.
6. Use `grill` for new material decisions before selecting the next stage.
7. Stop when the next stage has a supported input and exit condition.

Do not run a dependent stage on an unconfirmed assumption. If a result
invalidates the problem model, return to problem framing and confirm the
changed model before continuing.
