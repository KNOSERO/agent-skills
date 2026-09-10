# Verification loop

Read this reference when choosing verification or when verification fails.

## Choose verification

Start with the smallest check that can prove the changed requirement:

targeted test or inspection → affected module check → broader check only when risk or a result requires it

Use a relevant test, compilation, type check, lint, static analysis, schema or
configuration validation, documentation check, generated-output inspection,
contract check, or integration test. Do not run a large suite when a targeted
check is enough. Do not omit a broader check when the changed contract, risk,
or failure requires it.

## Handle a failed check

1. Classify the failure: caused by the change, pre-existing or unrelated, or a sign that the confirmed solution is wrong.
2. If the change caused it, diagnose the smallest cause, correct it, and run the relevant check again.
3. If it is pre-existing or unrelated, establish that with available evidence and report the exact limitation.
4. If it challenges a confirmed solution, return to the affected decision. Use grilling for a material user choice and problem-solving when the solution must be reconsidered.

Do not report a finished result while a change-caused failure remains.

## Final check

Before finishing, confirm that each required change has an observable result,
the stated acceptance criteria are met, and no important verification has been
skipped.
