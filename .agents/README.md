# Juno — Agent Folder

> For current implementation state, known issues, and next steps → read `docs/development/state.md`
> For past decisions and reasoning → read `docs/development/decisions.md`

# Juno — Claude Code Agent Folder

This folder contains repo-specific guidance for Claude Code.
It is **not** a Google IDE setup — it is structured around how Claude Code actually works.

## How Claude Code uses this folder

Claude Code is a single model, not a team of persistent named agents.
However, it can spawn focused **sub-agents** for parallel or specialized tasks using the Agent tool.
The files here define prompts, rules, and workflows that shape that behavior.

## Folder Overview

```
.agents/
├── rules/          ← Always-on guardrails. Referenced in CLAUDE.md so they are loaded every session.
├── agents/         ← Agent prompt definitions. Used when spawning a sub-agent via the Agent tool.
└── workflows/      ← Step-by-step task flows for common operations.
```

## How to use

### Rules
Rules in `rules/` are passive — they are loaded via CLAUDE.md and apply to everything.
No invocation needed. Update them when the project direction changes.

### Agents
Files in `agents/` are **not auto-loaded**. They are used when a task benefits from a focused
sub-agent — for example, running a frontend build check in parallel while something else runs.

To spawn a sub-agent with a specific focus, Claude passes the relevant `agents/` file content
as context in the sub-agent prompt. You can also reference them explicitly:
> "Use the frontend agent to review this component"

### Workflows
Files in `workflows/` are step-by-step instructions for common task types.
Claude follows them when the task matches — e.g. implementing a feature, refactoring, brainstorming.
You can also invoke them explicitly:
> "Follow the build workflow for this task"

## Keeping this folder current

These files are intentionally repo-specific.
When the stack, structure, or product direction changes — update them alongside the code.
Stale agent guidance is worse than no guidance.
