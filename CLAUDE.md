# Greenfield

React 19 + Vite 8 + TypeScript 6 (strict). ES modules. React Compiler enabled (don't add manual `useMemo`/`useCallback` for memoization). Import alias: `@/*` → `src/*`.

## Commands

Package manager is **pnpm** (npm fails with this lockfile).

- `pnpm dev` — dev server
- `pnpm build` — type-check (`tsc -b`) + build
- `pnpm lint` — ESLint

## Structure

- `src/modules/<feature>/{components,layout,pages}` — feature modules (auth, dashboard, support)
- `src/components` — shared components
- `src/hooks` — shared custom hooks (`useX.ts`)
- `src/services` — API / data services
- `src/interfaces` — shared TypeScript types
- `src/context`, `src/store`, `src/helpers`, `src/routes` — context providers, state, utils, routing

## Conventions

- Functional components with typed props; default export per component file.
- Styling: Tailwind CSS v4. Semantic color tokens (`bg-surface`, `bg-card`, `text-body`, `text-heading`, `border-line`, `primary`, `secondary` + `-soft`/`-deep` variants) defined in `src/index.css` (`@theme inline`) and mirrored in `src/theme/theme.ts` (light/dark, `applyTheme()`). Do not hardcode colors in components.
- Shared types live in `src/interfaces`; feature-only types stay in the feature module.
- Use `@/` imports, not relative `../../` chains.

## Workflow

- CHANGE.md is updated automatically by a git pre-commit hook (`.githooks/pre-commit`, runs haiku). On a fresh clone, enable it once with `git config core.hooksPath .githooks`. Bypass with `SKIP_CHANGELOG=1`. For manual/mid-session entries, use the `changelog` agent.
- Agent registry: see `AGENTS.md`. When agents in `.claude/agents/` change, sync it with the `agent-mapper` agent.
