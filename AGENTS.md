# Repository Preferences

## Documentation

| Area | Rule |
| --- | --- |
| `README.md` | Keep installation and usage information in English. |
| Other documentation | Write in Polish unless the user asks for another language. |
| Useful content | Include only information that helps complete the task. |
| Flows | Describe only flows that provide practical value. |
| Sections | Remove sections that do not change understanding or action. |
| Order | Put the information needed for the next action first. |

## Wersjonowanie

Stosuj format `MAJOR.MINOR.PATCH`.

- Po każdej zwykłej zmianie zwiększ środkową liczbę (`MINOR`) o 1 i wyzeruj `PATCH`.
- Po małym fixie zwiększ ostatnią liczbę (`PATCH`) o 1.
- Jeśli użytkownik poprosi o zwiększenie pierwszej liczby (`MAJOR`), oznacza to, że poprzednia stabilna wersja została wydana i zaczyna się nowa iteracja rozwoju. Zwiększ `MAJOR` o 1 oraz wyzeruj `MINOR` i `PATCH`.
- Przy każdej zmianie sprawdź aktualny licznik wersji i zaktualizuj go w odpowiednim pliku projektu.

# Repository workflows

This repository supports multiple named workflows. Use the
[workflow index](docs/flows/README.md) to select the smallest workflow whose
trigger matches the task. Follow only the selected workflow's contract; do not
apply another workflow's stages or implementation gates by default.

The first registered workflow is
[problem-solving](docs/flows/problem-solving.md). Use it for a complex problem,
requirement, symptom, or change proposal that needs dependent analysis and
decision stages. Do not use it when the task is simple and its solution, scope,
and acceptance criteria are already explicit.

# Creating and Editing Skills

These rules apply whenever you create, edit, review, or improve a `SKILL.md` file.

## Main goals

Optimize every skill for these goals, in this order:

1. **Correct and aggressive activation**
2. **Low token and context usage**
3. **Simple and explicit instructions**
4. **Clear responsibility between skills**
5. **Small and useful output**

A skill that is not activated when needed has failed.

A skill that loads unnecessary context is inefficient.

A skill that can be interpreted in several ways is too vague.

---

## 1. Make skill activation aggressive

Write every skill so the agent can clearly decide when to use it.

Do not expect the agent to guess that a skill may help.

The `description` is activation metadata. Treat it as a trigger, not as documentation.

A good `description` must answer:

- What does this skill do?
- When must the agent use it?
- What user requests should trigger it?
- What indirect situations should trigger it?
- When should it not be used?

Prefer direct trigger language:

```text
Use this skill whenever...
Always use this skill when...
Trigger this skill when...
Also use this skill when...
Do not wait for the user to explicitly ask for...
Do not use this skill when...
```

Avoid weak activation language when the rule should be strong:

```text
consider using
may use
can be useful
when appropriate
when helpful
if desired
optionally
```

Do not require the user to know the skill name.

For example, a refactoring skill must also recognize requests such as:

```text
clean this code
simplify this class
improve this design
remove duplication
make this easier to maintain
```

The user does not need to say `refactor`.

### Activation rule

If a skill clearly matches the task, prefer using the skill over solving the same task without it.

Do not skip a matching skill only because the agent already knows how to perform the task.

### Description example

Avoid:

```yaml
description: Helps analyze code and find possible improvements.
```

Prefer:

```yaml
description: >
  Use this skill whenever the user asks to refactor, simplify,
  clean up, restructure, or improve existing code without changing
  its behavior. Also use it when the user asks how existing code
  should be improved. Do not wait for the user to say "refactor".
```

### Discovery duplication is allowed

Avoid repeating detailed rules between skill bodies.

However, repeat important trigger information in `description` when this makes activation more reliable.

Activation clarity is more important than avoiding a small amount of duplication.

---

## 2. Activate skills aggressively, load context conservatively

Aggressive skill activation does **not** mean loading every skill or every reference.

Use this rule:

```text
Be aggressive in skill activation.
Be conservative in context loading.
```

Select the smallest set of skills needed for the task.

Do not load unrelated skills because they might become useful later.

Do not load every reference of an activated skill.

Load a reference only when its information is needed for the current decision.

A skill should route to another skill only when that responsibility is actually needed.

---

## 3. Optimize for low token usage

Every skill that reads repositories, code, logs, documentation, tests, diffs, command output, or structured data must prefer narrow retrieval.

Default retrieval strategy:

```text
STRUCTURE
→ SEARCH
→ MATCH
→ SMALL CONTEXT
→ SYMBOL OR SECTION
→ FILE
→ MODULE
→ REPOSITORY
```

Move to the next level only when the current level is not enough.

### Required retrieval rules

Prefer:

```text
search before read
specific before broad
small context before full file
relevant files before directories
symbol before module
section before document
error match before full log
targeted tests before full test suite
```

Never read a large file first when search can locate the relevant part.

Never inspect a complete repository only to understand a local problem.

Never load all logs when an error, request ID, timestamp, or other identifier can narrow the search.

Never load all documentation when headings or search can locate the relevant section.

Never load all references of a skill at activation time.

### Progressive expansion

Before loading more context, identify what is still unknown.

Expand only when the missing information can change the next decision.

Use:

```text
known
→ unknown
→ smallest evidence needed
→ retrieve
→ update understanding
→ stop or expand
```

Do not expand context without a concrete reason.

### Stop rule

Stop retrieving when the available evidence is enough for the next safe decision.

Do not retrieve more information only to increase confidence when it is unlikely to change the result.

Correctness has priority over token savings. Expand when more evidence is required for a safe and supported result.

---

## 4. Use simple B1 English

Write `SKILL.md` files in simple English.

Target approximately B1 English.

The goal is not elegant prose. The goal is instructions that are hard to misunderstand.

Prefer:

- short sentences;
- common words;
- direct commands;
- one rule per sentence;
- explicit conditions;
- explicit actions;
- explicit stop conditions.

Avoid:

- academic language;
- long sentences;
- abstract wording;
- unnecessary adjectives;
- indirect instructions;
- hidden assumptions;
- vague qualifiers;
- complex prose when a simple rule works.

Avoid:

```text
Where circumstances suggest that additional contextual information
could materially contribute to a more comprehensive understanding,
consider retrieving relevant surrounding artifacts.
```

Prefer:

```text
If the current evidence is not enough, retrieve more context.
Retrieve only the smallest part that can answer the open question.
```

---

## 5. Use strong instruction words

Use clear instruction strength.

For required behavior, prefer:

```text
must
always
use
do
do not
stop
ask
load
return
```

For conditional behavior, state the condition first:

```text
If X happens, do Y.
```

Do not hide required behavior behind suggestions.

Avoid:

```text
You may want to...
It can be useful to...
Consider...
Usually...
Potentially...
```

Use these only when the action is truly optional.

---

## 6. Make decisions explicit

A skill must not leave important behavior to interpretation.

For every important branch, define:

```text
trigger → action
condition → action
blocker → action
completion → stop
```

If the agent must choose between two paths, state the rule that controls the choice.

Avoid:

```text
Analyze more if necessary.
```

Prefer:

```text
If an unresolved fact can change the solution, retrieve evidence for it.
Otherwise, continue with the current evidence.
```

---

## 7. Keep `SKILL.md` small

The main `SKILL.md` file is the control layer.

It should contain:

- activation behavior;
- responsibility;
- main workflow;
- important decisions;
- routing rules;
- invariants;
- stop conditions.

Move detailed knowledge to `references/`.

Examples:

```text
SKILL.md
references/
    repository-search.md
    source-code.md
    logs.md
    testing.md
    examples.md
```

Do not move a rule to a reference when the agent needs that rule to decide whether to load the reference.

Keep routing information in `SKILL.md`.

Keep detailed procedures and domain-specific knowledge in references.

---

## 8. Load references on demand

Every reference must have a clear trigger.

Prefer routing tables such as:

| Situation | Load |
| --- | --- |
| Need repository search rules | `references/repository-search.md` |
| Need log investigation rules | `references/logs.md` |
| Need test investigation rules | `references/testing.md` |

Do not say:

```text
Read the references for more information.
```

Say exactly when each reference is needed.

Do not load references that do not affect the current task.

---

## 9. Keep skill responsibilities clear

Each skill should own one clear responsibility.

Do not copy another skill's full workflow.

If another skill owns a capability, route to it.

For example:

```text
problem-solving → decides how to solve the problem
token-efficient-retrieval → decides how to retrieve evidence
business-process-analysis → reconstructs business behavior
programming-principles → evaluates code and design quality
refactor → manages behavior-preserving structural changes
documentation-guidelines → controls presentation
```

A caller decides **when** another capability is needed.

The called skill decides **how** to perform that capability.

---

## 10. Make routing active

When one skill depends on another skill, use explicit routing.

Avoid:

```text
The token-efficient-retrieval skill may help with repository analysis.
```

Prefer:

```text
If more repository evidence is needed, use `token-efficient-retrieval`.
```

When the dependency should apply automatically, say so:

```text
Before retrieving repository evidence, use `token-efficient-retrieval`.
```

Do not duplicate the dependency's internal workflow.

---

## 11. Avoid skill explosion

Aggressive activation must remain targeted.

Do not activate every related skill.

Use the smallest skill set that covers the task.

A skill should activate another skill only when:

1. the other skill owns a required capability; and
2. the current task actually needs that capability.

Do not activate skills for hypothetical future needs.

Prefer:

```text
request
→ primary skill
→ required supporting skills
→ required references
```

Avoid:

```text
request
→ all possibly related skills
→ all references
```

---

## 12. Design orchestrator skills as routers

An orchestrator skill should actively detect which capabilities the task needs.

It should not perform every capability itself.

Use clear routing rules such as:

| Condition | Action |
| --- | --- |
| More evidence is required | Use retrieval skill |
| Business behavior affects the answer | Use business-process skill |
| A material user decision is unresolved | Use decision/clarification skill |
| The task has independent stages | Use decomposition skill |
| Code quality must be evaluated | Use programming-principles skill |
| Structural improvement is requested | Use refactor skill |

Do not route to a capability without a trigger.

---

## 13. Separate activation from execution

The `description` decides whether the skill should enter the task.

The body decides how the skill works after activation.

Therefore:

```text
description = WHEN + WHAT + important exclusions
SKILL.md body = HOW
references = DETAILS
```

Do not put critical activation rules only deep inside the skill body.

If a condition should cause the skill to be selected, make that condition visible in `description`.

---

## 14. Prefer executable instructions over explanations

A skill is an instruction set, not an article.

Prefer:

```text
1. Identify the target.
2. Search for the exact symbol.
3. Read the smallest relevant context.
4. Expand only if an open question remains.
5. Stop when the next safe action is supported.
```

Avoid long explanations of why these steps are good unless the explanation changes agent behavior.

Every paragraph should change at least one of:

- activation;
- decision;
- action;
- routing;
- scope;
- output;
- stop condition.

Otherwise remove it.

---

## 15. Preserve correctness

Token optimization must never produce unsupported conclusions.

Use the smallest **sufficient** context, not the smallest possible context.

Expand retrieval when required to verify:

- behavior;
- contracts;
- callers or dependencies;
- side effects;
- business rules;
- security impact;
- compatibility;
- tests;
- assumptions that can change the solution.

The goal is:

```text
minimum sufficient evidence
```

not:

```text
minimum evidence
```

---

## 16. Review every created or edited skill

Before finishing a skill, check:

### Activation

- Is it clear when this skill must be used?
- Does `description` contain real user intents and indirect triggers?
- Can the skill activate without the user naming it?
- Are important exclusions clear?
- Is the wording strong enough?

### Tokens

- Does the skill avoid broad retrieval by default?
- Does it search before reading?
- Does it expand context only for a concrete reason?
- Are references loaded only when needed?
- Is there a clear stop condition?

### Language

- Is the English simple?
- Are sentences short?
- Are instructions direct?
- Are vague words removed?
- Can each important rule be interpreted only one way?

### Architecture

- Does the skill have one clear responsibility?
- Does it route to existing skills instead of copying them?
- Are dependencies activated only when needed?
- Are detailed rules moved to references where useful?

### Content

- Does every section change agent behavior?
- Can anything be removed without changing a decision?
- Is the main workflow visible without reading references?

If any answer is `no`, improve the skill before finishing.

# Core Rule

When creating or editing a skill, remember:

```text
ACTIVATE AGGRESSIVELY.
RETRIEVE CONSERVATIVELY.
WRITE SIMPLY.
ROUTE EXPLICITLY.
STOP WHEN SUFFICIENT.
```

A good skill should make the correct action obvious.
