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
- react-router-dom: v7.17.0 for client-side routing.
- AppRoutes component: main routing configuration with protected routes for authenticated pages.
- AppLayout component: wrapper with Navbar and main content outlet.
- ProtectedRoute component: guards product detail page, redirects unauthenticated users to login.
- LoginPage: full-page login form with redirect to referring page after auth.
- ProductListPage: product list with loading/error states and grid display.
- ProductDetailPage: product detail view with emoji, name, description, and price.
- Navbar component: sticky navigation with Greenfield Store branding and auth state display.
- useProduct hook: fetch single product by ID with loading and error states.
- AuthProvider context: manages user authentication state with localStorage persistence.
- authContext: useAuth hook for accessing authentication state and methods.
- getProductById service function: fetch individual product by ID from mock data.
- Motion primitives: warm-rise and warm-float keyframes for smooth entrance and floating animations.
- Field component: reusable form input with icon, label, and staggered animation support.
- Inline icons: MailIcon, LockIcon, SparkIcon, Spinner components for UI elements (currentColor).

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
- App.tsx: simplified to render AppRoutes only; routing now handled by react-router-dom.
- main.tsx: wrapped with BrowserRouter and AuthProvider for routing and authentication context.
- ProductGrid.tsx: wrapped products in Links to route to product detail pages.
- productService.ts: removed hardcoded MOCK_PRODUCTS; getProducts() now returns empty array (ready for real API).
- LoginPage: redesigned with warm soft-UI aesthetic, decorative side panel, staggered entrance animations, and modern form layout.
- index.css: added reduced-motion media query for accessibility support.

### Deleted

- App.css, Header.css, ProductGrid.css, LoginMenu.css: consolidated into Tailwind utility classes.
- Header.tsx: replaced by Navbar component with routing integration.
- LoginMenu.tsx: replaced by LoginPage component with dedicated route.
- useLogin.ts: replaced by AuthProvider context with localStorage persistence.

### Fixed
