# Examples

Load this reference only when an ambiguous case needs a concrete comparison between fact discovery, a material decision, and a pure execution detail.

| Situation | Classification | Action |
|---|---|---|
| “Which framework does this project use?” | Discoverable fact | Inspect the repository and configuration. |
| “Should the new integration preserve the existing public API?” | Design / project decision | Gather compatibility evidence, then interview the user. |
| “What should the integration be called?” | Design / project decision | Ask for a naming decision or scoped delegation. |
| “Should a local loop use `for` or `stream()` when behavior and project conventions are unaffected?” | Pure execution detail | Choose locally and continue. |
| “Should old records be deleted after migration?” | Product / operational decision | Ask after discovering retention constraints; the answer changes data behavior and recovery options. |

The examples are illustrative, not a checklist. Judge materiality from the current task and its contracts, not from the labels alone.
