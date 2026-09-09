---
name: token-efficient-retrieval
description: >
  Always use this skill before retrieving information from a repository,
  dataset, database export, API response, log, document set, test output,
  diff, or other structured or unstructured data source. It defines the
  minimum evidence and retrieval scope needed to make a correct decision
  while controlling context size. Use it for reading, searching,
  investigating, editing, reviewing, debugging, planning, and validating
  work that depends on external or workspace data. Do not use it when no
  data retrieval is needed, such as pure drafting from user-provided facts.
---

# Token-efficient retrieval

Use minimum sufficient context: retrieve the smallest evidence set that supports the next correct step. Optimize total input tokens per successfully completed task, not the size of one tool response.

## Mandatory entry gate

Treat this skill as a required dependency for every task that reads, searches, filters, samples, compares, or validates repository or data-source content.

Before the first retrieval:

1. State the next decision or operation that the data must support.
2. Define the smallest evidence that can support it.
3. Choose the narrowest retrieval method and scope.
4. Load only the reference for the active retrieval mode.

Do not open a whole repository, directory, dataset, dump, log, document set, or response before applying this gate. If another skill requests repository or data evidence, apply this gate before following that request. If the task crosses several data modes, keep one active evidence need at a time and route to the relevant reference.

## Cube status UI integration

When the `retrieval_started` tool is available from the Cube plugin, call it once before the first repository or data-source retrieval. Call `retrieval_finished` after the retrieval phase ends and no further repository or data-source reads are expected. These calls expose the active state to the plugin UI. If the tools are unavailable, continue the retrieval workflow without blocking the task.

## Core policy

- Search before read. Pointers are an index, not context; obtain content only after locating likely files, symbols, records, or time windows.
- Start specific and widen only for a stated information need: exact identifier/error → symbol → unique phrase → related identifier → component → concept.
- Prefer this ladder, stopping at the first sufficient level:

  `STRUCTURE → SEARCH → MATCH → CONTEXT → SYMBOL → FILE SECTION → FULL FILE → MODULE → REPOSITORY`

- Before each expansion, form a working hypothesis: what is known, what is unknown, what would confirm or reject it, and the smallest retrieval that can do so.
- Bound result counts, line windows, file depth, and command output before they enter context. Summarize processed material into working notes and deduplicate unchanged ranges.
- Expand when correctness requires it; token savings never justify an unsupported change, answer, or test conclusion.
- Apply the policy to every retrieval, including quick inspections, exploratory searches, validation reads, and follow-up checks. A retrieval is not exempt because it is small or familiar.

## Progressive retrieval algorithm

1. Define the next decision and its evidence requirement before using a repository or data tool.
2. Inspect cheap structure or metadata.
3. Count and locate candidates; list files or pointers before reading payloads.
4. Narrow to likely matches, then retrieve small context windows.
5. Resolve the relevant symbol, record, section, caller, dependency, or test.
6. Expand one level only when the current evidence leaves a concrete uncertainty.
7. Compress resolved evidence into notes containing facts, decisions, hypotheses, paths/ranges, dependencies, and unresolved questions.
8. Stop when evidence is sufficient and further retrieval is unlikely to change the decision.

The common narrowing pattern is `COUNT → FILES → MATCHES → CONTEXT → SYMBOL → FILE`. Search result lines do not automatically belong in reasoning context.

## Reference routing

Read only the reference needed for the current retrieval mode; load additional references later if the task crosses domains.

| Situation | Read |
| --- | --- |
| Repository layout, files, symbols, ignored/generated content | [references/repository-search.md](references/repository-search.md) |
| Source reading, callers/callees, dependencies, pre-edit scope | [references/source-code.md](references/source-code.md) |
| Logs, traces in text, request/correlation investigation | [references/logs.md](references/logs.md) |
| Failure localization and hypothesis-driven diagnosis | [references/debugging.md](references/debugging.md) |
| Failing tests and test-output scope | [references/testing.md](references/testing.md) |
| Long manuals, API docs, headings and sections | [references/documentation.md](references/documentation.md) |
| Potentially verbose shell/tool commands or diffs | [references/command-output.md](references/command-output.md) |
| JSON, CSV, XML, database dumps, API responses, structured traces | [references/structured-data.md](references/structured-data.md) |
| Long task, repeated retrieval, context pressure, stopping/escalation | [references/context-management.md](references/context-management.md) |

## Global stop and escalation rules

Stop retrieval once the next safe action or answer is supported. Do not build a repository-wide model for a local task. Escalate scope only when a concrete dependency, contradiction, failed validation, or unresolved risk requires it; record why the wider scope is necessary.
