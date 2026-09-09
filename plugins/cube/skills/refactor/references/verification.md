# Refactoring verification

Load when selected proposals are being implemented or verification is being planned.

Verify proportionally to risk and confirm the unchanged observable contract:

```text
narrowest relevant check
→ affected tests or checks
→ related module checks
→ broader verification only when risk or scope requires it
```

Do not change test expectations merely to accept a new implementation when behavior should remain unchanged. Stop only after required verification is complete or an explicit blocker is reported.
