# Git write failures

Use this reference only when staging, committing, or another Git write fails.

1. Identify whether the cause is a Git error, active index lock, read-only file
   system, permission, or sandbox restriction.
2. Do not delete an index lock until confirming that no Git process uses it.
3. Do not modify `.git` manually or weaken Git safety settings.
4. If the only cause is execution permission, keep the exact approved scope, use
   the available escalation mechanism, and retry only the failed operation.
5. Reinspect the staged diff after access is restored.
6. If retry is unavailable or fails again, report the concrete blocker and leave
   the selected scope unchanged.
