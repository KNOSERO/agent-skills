---
name: implementation-discovery
description: >
  Discover the exact repository areas, contracts, dependencies, and tests that
  implement a confirmed solution concept. Use this skill when exact technical
  scope is needed before a non-trivial implementation. Do not use it to
  redesign product behavior, write code, or create a portable transfer prompt.
---

# Implementation discovery

## Responsibility

Translate a confirmed WHAT into evidence-backed technical scope for its caller.
This is read-only discovery. It does not choose unresolved architecture or
product direction and does not create a plan or portable prompt.

## Workflow

1. State the confirmed solution behavior and the technical question to answer.
2. Use token-efficient-retrieval before repository retrieval. Start from the known entry point, contract, event, schema, or test; search before reading.
3. Find only the affected modules, symbols, interfaces, schemas, events, configuration, callers, dependencies, failure paths, and focused tests.
4. Separate confirmed implementation facts from open technical decisions.
5. Send material implementation decisions to grilling in implementation scope. Do not silently decide architecture, public contracts, compatibility, persistence, rollout, or operational behavior.

## Output contract

Return exact targets and evidence pointers, the current technical flow,
affected contracts and dependencies, required test areas, implementation risks,
open decisions, and discovery gaps. Stop when the caller can execute a safe,
exact change scope without reopening solution design.
