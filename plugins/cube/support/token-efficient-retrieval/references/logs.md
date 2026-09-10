# Log retrieval

Never begin with a full log. Identify a discriminating signal first: timestamp, severity, exception, request/correlation ID, endpoint, service, thread/process, stack frame, or unique message.

Use this sequence:

`identify signal → count/find occurrences → select file/time window → retrieve ±10–30 lines → expand chronologically`

Start with file pointers (`rg -l`), then line pointers (`rg -n`), then a bounded context window (`rg -n -C 20`). Filter by service, request ID, and time before adding neighboring events. When reconstructing a failure, retrieve only the preceding and following events needed to test the current hypothesis; widen the window or related IDs only when causality remains unresolved.

Normalize repeated stack traces or identical messages into a count plus representative occurrence. Keep timestamps, IDs, severity, and the minimum causal sequence in notes; discard duplicate and unrelated lines.

