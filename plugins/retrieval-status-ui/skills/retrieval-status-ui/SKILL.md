---
name: retrieval-status-ui
description: Use with the Retrieval Status UI plugin to expose when minimum-context retrieval is active. Trigger before repository or dataset retrieval when the plugin is available.
---

# Retrieval status UI

When this plugin is available, call `retrieval_started` once before the first repository or data-source retrieval in a task.

Call `retrieval_finished` when the retrieval phase is complete and no more repository or data-source reads are expected.

If the plugin is unavailable, continue the retrieval workflow without blocking the task.
