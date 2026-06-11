# Changelog

Notable changes to this project. Newest entries first under `[Unreleased]`.

## [Unreleased]

### Added

- Claude Code setup: CLAUDE.md, AGENTS.md, CHANGE.md and 7 lean agents in `.claude/agents/`.
- TASK_GUIDE.md: Spanish guide on requesting tasks with proper structure.
- Auto-update pre-commit hook (`.githooks/pre-commit`) that runs haiku to update CHANGE.md on each commit.
- Header component: sticky header with title and right slot for secondary content.
- ProductGrid component: responsive grid layout for displaying products with emoji, name, description, and price.
- LoginMenu component: authentication UI with modal form, session state, and logout.
- useProducts hook: fetch products with loading and error states.
- useLogin hook: handle user authentication, session state, and logout.
- auth.ts interface: LoginCredentials and AuthUser types.
- product.ts interface: Product type with id, name, description, price, and emoji.
- productService: mock product data and getProducts() function (replace with real API).
- authService: mock login implementation (replace with real API).
- theme.ts: light/dark theme palette system with applyTheme() and resetTheme() functions.

### Changed

- CLAUDE.md workflow: CHANGE.md now auto-updates via pre-commit hook; note setup and bypass instructions.
- component-builder agent: switched to sonnet model for improved code generation quality.
- service-hook-builder agent: switched to sonnet model for improved code generation quality.
- dataContext.tsx: exported DataContexProvider for external use.
- App.tsx: refactored to use Header, ProductGrid, LoginMenu components and useProducts hook.
- App.css: added catalog and catalog-error styles.
- Migrated styling from plain CSS files to Tailwind CSS v4 utilities across all components.
- Color palette redesigned with semantic tokens (surface, card, body, heading, line) and warm primary/secondary (orange, terracotta).
- index.css: replaced custom CSS variables with Tailwind @import and theme definitions using new semantic tokens.
- component-builder agent: updated to require Tailwind v4 semantic tokens instead of plain CSS files.
- CLAUDE.md: documented pnpm as package manager and Tailwind v4 as styling framework.
- vite.config.ts: added @tailwindcss/vite plugin.
- theme.ts: palette refactored from generic colors to semantic surface/body/heading/line with primary/secondary variants.

### Deleted

- App.css, Header.css, ProductGrid.css, LoginMenu.css: consolidated into Tailwind utility classes.

### Fixed
