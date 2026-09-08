# Execution environment failures

Use this reference only when a Git write, index operation, lock, or retry is blocked by the environment.

## Diagnose before describing the cause

Distinguish among:

- a repository or Git error;
- an index lock left by an active Git process;
- system permission failure;
- read-only filesystem;
- sandbox or tool restriction;
- a permission-escalation or approval requirement.

Do not label every `.git/index.lock` error as a repository problem. Do not remove the lock until confirming that no active Git process uses it. Do not modify `.git` manually, weaken security settings, or copy the repository to bypass a restriction.

## Authorized continuation

When the user has already authorized a specific commit:

1. Keep exactly the approved files or hunks in scope.
2. Use the available escalation mechanism when the only blocker is execution permission.
3. Do not ask again for approval of the commit itself when the system can handle the permission prompt directly.
4. After access is available, retry only the failed operation and inspect the staged diff again before committing.

Do not expand the retry to other planned groups. If the repository may have changed, perform only the minimal check needed to confirm the earlier assumptions; do not repeat reconnaissance and planning from the beginning.

If no escalation mechanism is available, report the blocker briefly and concretely, for example: `Nie mogę wykonać stagingu, ponieważ środowisko blokuje zapis do .git. Zakres T1 pozostaje bez zmian.`
