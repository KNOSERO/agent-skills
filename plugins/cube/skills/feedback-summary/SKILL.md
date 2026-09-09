---
name: feedback-summary
description: Summarize what has already been established in a task, including achieved outcomes, decisions, open points, and next steps, without restarting the analysis. Use only when explicitly invoked.
disable-model-invocation: true
---

# Feedback summary

## Dependency

Required skill: `documentation-guidelines`.

Find and apply it through the available skill mechanism. Let it control the presentation, language, structure, tables, and diagrams. Do not copy its detailed rules here.

## Responsibility

Provide a feedback-oriented snapshot of the work completed so far. Reconstruct the current state from conclusions, decisions, requirements, and progress already present in the available conversation or supplied artifacts.

This skill is a reporting step, not a second analysis. It must not reopen settled questions, discover new evidence, generate new solutions, or silently turn an inference into an agreement.

## Summary contract

Include only information that is supported by the available context. Preserve the distinction between:

- achieved outcomes;
- decisions and agreements;
- work in progress;
- open, deferred, blocked, or unresolved points;
- the next step, only when it was established or follows directly from an explicit agreement.

Label uncertainty when it matters. If the context does not establish an item, write that it is not established instead of filling the gap with a likely interpretation.

The summary should answer, in a compact form:

1. What have we achieved?
2. What have we agreed or decided?
3. What remains open or incomplete?
4. What happens next, if that is already known?

Use a short, scannable structure suited to the amount of available material. A table is useful when several items have comparable statuses; do not create one for a simple summary.

## Feedback boundary

Do not:

- perform a fresh repository, documentation, or web investigation;
- introduce recommendations that were not already established;
- judge the quality of the solution unless the user explicitly asks for an assessment;
- hide contradictions, missing context, or deferred decisions;
- present the summary as proof that the underlying task is complete when required work remains.

If the available context is too incomplete for a reliable summary, state what cannot be confirmed and summarize only the confirmed part. Ask for the missing material only when the user needs a fuller summary to proceed.

## Interaction with other skills

Domain skills remain responsible for analysis, decisions, planning, implementation, and verification. This skill only reports the resulting state.

With `short-result`, preserve this contract while compressing the presentation. With `export-result`, preserve this contract while delivering the summary as Markdown.
