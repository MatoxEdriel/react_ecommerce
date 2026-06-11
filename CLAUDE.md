# Greenfield

React 19 + Vite 8 + TypeScript 6 (strict). ES modules. React Compiler enabled (don't add manual `useMemo`/`useCallback` for memoization). Import alias: `@/*` → `src/*`.

## Commands

- `npm run dev` — dev server
- `npm run build` — type-check (`tsc -b`) + build
- `npm run lint` — ESLint

## Structure

- `src/modules/<feature>/{components,layout,pages}` — feature modules (auth, dashboard, support)
- `src/components` — shared components
- `src/hooks` — shared custom hooks (`useX.ts`)
- `src/services` — API / data services
- `src/interfaces` — shared TypeScript types
- `src/context`, `src/store`, `src/helpers`, `src/routes` — context providers, state, utils, routing

## Conventions

- Functional components with typed props; default export per component file.
- Styling: plain CSS with theme variables (`--text`, `--bg`, `--accent`) supporting light/dark mode.
- Shared types live in `src/interfaces`; feature-only types stay in the feature module.
- Use `@/` imports, not relative `../../` chains.

## Workflow

- CHANGE.md is updated automatically by a git pre-commit hook (`.githooks/pre-commit`, runs haiku). On a fresh clone, enable it once with `git config core.hooksPath .githooks`. Bypass with `SKIP_CHANGELOG=1`. For manual/mid-session entries, use the `changelog` agent.
- Agent registry: see `AGENTS.md`. When agents in `.claude/agents/` change, sync it with the `agent-mapper` agent.
