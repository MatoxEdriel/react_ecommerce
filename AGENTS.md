# Agent Registry

Map of the project's agents in `.claude/agents/`. Kept in sync by the `agent-mapper` agent — run it after adding, removing, or editing any agent.

## Registry

| Agent | Model | Tools | When to use |
|---|---|---|---|
| agent-mapper | haiku | Read, Glob, Edit | Sync this table after agents change |
| architecture | inherit | Read, Glob, Grep | Decide where code belongs; review structure (read-only) |
| changelog | haiku | Read, Edit, Bash | Record completed changes in CHANGE.md |
| component-builder | sonnet | Read, Glob, Grep, Write, Edit | Create/modify React components and styles |
| context | haiku | Read, Glob, Grep | Quick read-only summaries of project state/structure |
| service-hook-builder | sonnet | Read, Glob, Grep, Write, Edit | Create/modify services and custom hooks |
| software-design | inherit | Read, Glob, Grep | Design TS types, contracts, patterns (read-only) |

## Creating a new agent

Add a `.md` file in `.claude/agents/` with this frontmatter, then run `agent-mapper`:

```markdown
---
name: kebab-case-name
description: Use when... (clear trigger — this is how the agent gets picked)
tools: Read, Glob, Grep        # only what it needs; omit Write/Edit for advisors
model: haiku                   # cheap model for simple tasks; omit to inherit
---

Short prompt (<200 words). Don't repeat CLAUDE.md — agents inherit it.
```

Lean principles: short prompts, minimal tools, cheap models where quality allows, clear "Use when" triggers.
