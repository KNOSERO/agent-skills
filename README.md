# Cube Skills

Reusable Agent Skills distributed as one plugin for Codex and Claude Code. The plugin includes the complete skill collection organized by category under `plugins/cube/`.

## Install in Codex

From the repository root, Codex can discover the repo marketplace at `.agents/plugins/marketplace.json`. Install the `cube` plugin from the marketplace UI, or use the local plugin path during development.

After installation, all skills are available from the `cube` plugin.

## Install in Claude Code

Add this repository as a marketplace:

```text
/plugin marketplace add https://github.com/KNOSERO/codex
```

Install the complete plugin and reload it:

```text
/plugin install cube@knosero
/reload-plugins
```
