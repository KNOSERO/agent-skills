# Debugging retrieval

Follow:

`FAILURE → LOCATION → LOCAL CONTEXT → HYPOTHESIS → TARGETED RETRIEVAL → TEST → EXPAND ONLY IF NEEDED`

Begin with the exact failure text, test name, stack frame, request ID, or reproduction step. Locate the responsible file and line, retrieve the smallest surrounding function or configuration section, and state the current hypothesis before requesting more data. Fetch only evidence that can confirm or reject it: a caller, input contract, state transition, dependency result, or focused test.

Do not inspect unrelated modules “just in case.” If evidence conflicts, preserve both observations, identify the missing link, and widen one boundary at a time. Stop when the cause is supported and a focused validation confirms it, or when the remaining uncertainty is explicitly reported.

