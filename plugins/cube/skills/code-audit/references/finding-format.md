# Finding format

**Trigger:** Load only when at least one actual finding must be presented.

Present findings in a table with one row per stable ID and these columns:

| ID | Category | Priority | Evidence / location | Mechanism / scenario | Impact | Recommended action | Confidence | Verification |
|---|---|---|---|---|---|---|---|---|

Keep each field concrete and scoped:

- `ID`: stable `T1`, `T2`, `T3`, …;
- `Category`: Security, Correctness, Reliability, Performance, or Maintainability;
- `Priority`: Blocker, Critical, Major, or Minor;
- `Evidence / location`: precise file, symbol, line, contract, or runtime evidence; never reproduce secrets;
- `Mechanism / scenario`: how the risk occurs and the reachable conditions;
- `Impact`: material consequence;
- `Recommended action`: change that addresses the mechanism;
- `Confidence`: Confirmed, Strongly supported, or Hypothesis;
- `Verification`: narrowest sufficient check for the fix.

Separate hypotheses from confirmed findings. If no material risk or sufficient evidence exists, omit the observation from the findings table or report it separately as an unconfirmed concern.
