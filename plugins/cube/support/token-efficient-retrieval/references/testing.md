# Testing retrieval

Use the smallest test scope that can validate the current hypothesis:

`single failing test → test class/file → affected module tests → affected integration tests → larger suite`

Locate the exact test by name, failure text, or stack frame. Read the test and relevant fixture/setup only, then inspect the implementation it exercises. Limit runner output with one test selector, quiet/short modes, filters, or captured summaries; retain the failure, first relevant stack frames, and pass/fail summary rather than the whole report.

Expand the test scope only after a focused result passes but does not cover a known boundary, or when failures indicate an integration contract. Do not run or paste a full suite output as the first diagnostic step when a concrete failing test exists. Record command, selected test, result, and unresolved coverage gaps.

