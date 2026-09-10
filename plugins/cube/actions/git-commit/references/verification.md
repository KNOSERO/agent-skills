# Verification

Before each commit:

- inspect `git diff --cached` and confirm every staged path and hunk belongs to the selected group;
- run `git diff --cached --check`;
- check for secrets, credentials, temporary files, generated noise, and unrelated changes;
- run the narrowest relevant test or lint command that gives sufficient confidence.

Escalate verification from the changed test or component to dependent modules, the broader project, or the full suite when the change is shared, crosses module boundaries, affects many consumers, or repository rules require it. Do not skip necessary verification solely to save time or context.

After committing, inspect the new commit and `git status --short` before proceeding. Confirm that remaining changes are intentional and were not staged or altered accidentally. Report failed, unavailable, or skipped verification explicitly.
