# Correctness audit guidance

**Trigger:** Load when a correctness concern involves business rules, contracts, validation, invariants, transactions, consistency, state, or edge conditions.

Investigate:

- violated or ambiguous contract;
- incorrect business rule;
- missing or inconsistent validation;
- invariant violation;
- invalid state transition;
- transaction or consistency gap;
- edge condition that produces incorrect behavior;
- mismatch between implementation, caller, schema, test, or documented behavior.

For each hypothesis identify:

- expected behavior;
- actual behavior;
- evidence for both;
- input or state that triggers the difference;
- affected invariant or contract;
- impact.

Do not report a correctness finding for code that is merely unusual. If expected behavior is unknown, report a hypothesis and name the missing contract evidence.
