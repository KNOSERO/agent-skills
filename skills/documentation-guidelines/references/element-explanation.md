# Element explanation

Use this reference when explaining one focused technical or business element.

Explain the smallest useful unit at the smallest sufficient depth. Prefer this progression, but do not force every part into every explanation:

```text
what it does
→ why it matters
→ important context/input
→ result/effect
→ important caveat
```

Discover context progressively:

```text
target element
→ immediate context
→ directly referenced dependency
→ surrounding component
→ broader system only if required
```

Do not expand to a whole module or repository when the element can be explained correctly without it. Do not describe every line of code or every part of a command mechanically.

For business questions, prefer:

```text
business meaning
→ condition/rule
→ observable effect
→ technical mechanism if useful
```

For technical questions, prefer:

```text
result
→ mechanism
→ important details
→ side effects/caveats
→ business meaning if relevant
```

Do not create a diagram for a simple element. If the explanation requires a process or relationship, use [process-explanation.md](process-explanation.md) or [diagrams.md](diagrams.md).
