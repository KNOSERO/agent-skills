---
name: implementation-discovery
description: >
  Discover the exact repository areas, contracts, dependencies, and tests that
  implement a confirmed solution concept. Use this skill after solution design
  is confirmed and before an implementation plan is written. Do not use it to
  redesign product behavior or write code.
---

# Implementation discovery

## Responsibility

Translate a confirmed `WHAT` into evidence-backed technical scope for planning.
This is read-only discovery. It does not choose unresolved architecture or
product direction and does not create the plan itself.

## Workflow

1. State the confirmed solution behavior and the technical question to answer.
2. Use `token-efficient-retrieval` before repository retrieval. Start from the
   known entry point, contract, event, schema, or test; search before reading.
3. Find only the affected modules, symbols, interfaces, schemas, events,
   configuration, callers, dependencies, failure paths, and focused tests.
4. Separate confirmed implementation facts from open technical decisions.
5. Send material implementation decisions to `grilling` in `implementation`
   scope. Do not silently decide architecture, public contracts, compatibility,
   persistence, rollout, or operational behavior.

## Output contract

Return exact targets and evidence pointers, the current technical flow,
affected contracts and dependencies, required test areas, implementation risks,
open decisions, and discovery gaps. Stop when `implementation-plan` can name
an exact, safe change scope without reopening solution design.
