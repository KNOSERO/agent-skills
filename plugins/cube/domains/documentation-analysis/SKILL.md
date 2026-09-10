---
name: documentation-analysis
description: >
  Find and interpret the existing documentation that affects a problem,
  requirement, behavior, interface, or planned change. Use this skill before
  asking the user for information that project documentation may establish.
  Do not use it merely to format or write documentation.
---

# Documentation analysis

## Responsibility

Answer: which project documentation matters, what does it establish, and where
does it conflict with other evidence? This skill discovers facts. It does not
make product decisions, design a solution, or present documentation.

## Workflow

1. State the documentation question that can change the next task decision.
2. Identify the most likely sources: `README`, `docs`, requirements, ADRs,
   API contracts, schemas, runbooks, process diagrams, or supplied links.
3. Use `token-efficient-retrieval` before reading any source. Search before
   reading and retrieve only sections that can answer the question.
4. Extract confirmed facts, source-of-truth statements, constraints,
   terminology, and conflicts. Keep each evidence pointer precise.
5. Classify gaps as discoverable facts or material decisions. Route decisions
   to `grilling`; do not ask the user for discoverable facts.

## Output contract

Return only:

```text
documentation question
sources searched and relevant evidence pointers
confirmed facts and constraints
conflicts and their impact
unknown discoverable facts
material decisions for grilling
recommended next stage
```

Stop when evidence supports the next safe decision. Do not load a complete
documentation set or copy long source text into context.
