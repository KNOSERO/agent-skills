# Graph Report - codex  (2026-09-10)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 13 nodes · 12 edges · 4 communities (3 shown, 1 thin omitted)
- Extraction: 92% EXTRACTED · 8% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Repository Guidance
- Plugin Marketplaces
- Skill Distribution
- Agent Entry Point

## God Nodes (most connected - your core abstractions)
1. `Cube Skills README` - 5 edges
2. `Cube Plugin` - 3 edges
3. `GitHub Issue Tracker` - 3 edges
4. `Claude Marketplace` - 2 edges
5. `Codex Marketplace` - 2 edges
6. `Domain Documentation Rules` - 2 edges
7. `Agent Skills Instructions` - 2 edges
8. `Plugin Installation` - 1 edges
9. `Reusable Agent Skills` - 1 edges
10. `Domain Glossary` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Cube Skills README` --references--> `Claude Marketplace`  [EXTRACTED]
  README.md → .claude-plugin/marketplace.json
- `Cube Skills README` --references--> `Codex Marketplace`  [EXTRACTED]
  README.md → .agents/plugins/marketplace.json
- `Cube Skills README` --references--> `Cube Plugin`  [EXTRACTED]
  README.md → plugins/cube/.codex-plugin/plugin.json
- `Agent Skills Instructions` --references--> `GitHub Issue Tracker`  [EXTRACTED]
  CLAUDE.md → docs/agents/issue-tracker.md
- `Claude Marketplace` --references--> `Cube Plugin`  [EXTRACTED]
  .claude-plugin/marketplace.json → plugins/cube/.codex-plugin/plugin.json

## Import Cycles
- None detected.

## Communities (4 total, 1 thin omitted)

### Community 0 - "Repository Guidance"
Cohesion: 0.47
Nodes (6): Claude Marketplace, Codex Marketplace, Cube Plugin, Plugin Installation, Cube Skills README, Reusable Agent Skills

### Community 1 - "Plugin Marketplaces"
Cohesion: 0.67
Nodes (3): Agent Skills Instructions, Domain Documentation Rules, Domain Glossary

### Community 2 - "Skill Distribution"
Cohesion: 0.67
Nodes (3): GitHub Issue Tracker, Canonical Triage Roles, GitHub Issue Operations

## Knowledge Gaps
- **6 isolated node(s):** `Plugin Installation`, `Reusable Agent Skills`, `Domain Glossary`, `Canonical Triage Roles`, `GitHub Issue Operations` (+1 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 6 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `GitHub Issue Tracker` connect `Skill Distribution` to `Plugin Marketplaces`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Why does `Agent Skills Instructions` connect `Plugin Marketplaces` to `Skill Distribution`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `Plugin Installation`, `Reusable Agent Skills`, `Domain Glossary` to the rest of the system?**
  _6 weakly-connected nodes found - possible documentation gaps or missing edges._