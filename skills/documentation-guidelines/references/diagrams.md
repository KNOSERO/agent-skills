# Diagrams

Use this reference when a visual representation can materially improve understanding.

## Choose the diagram

| Information | Mermaid type |
| --- | --- |
| Steps and decisions | `flowchart` |
| Communication and call order | `sequenceDiagram` |
| State transitions | `stateDiagram-v2` |
| Data relationships | `erDiagram` |
| Type or class relationships | `classDiagram` |

Keep the diagram focused on the main structure, direction, and decisions. Put secondary details in text below it. Do not use a diagram for a simple fact, one property, or a short list.

## Text and language

Use the document's language for node names, labels, actors, states, and descriptions. Mermaid keywords and syntax remain unchanged. Keep names consistent with the surrounding document and repository vocabulary.

## Legends

Add a legend as a table when notation is not obvious or uses symbols, line styles, grouping, colors, or shapes. Omit it when the diagram is self-explanatory. Keep meanings consistent within the document and with repository-wide conventions when they exist.

```markdown
### Legend

| Symbol | Meaning |
| --- | --- |
| Solid arrow | Synchronous communication |
| Dashed arrow | Asynchronous event |
```

Check Mermaid syntax and ensure every important relationship described in the text is represented accurately.
