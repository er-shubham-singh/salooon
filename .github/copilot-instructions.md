# Copilot / AI Agent Instructions for this repo

Short, actionable guidance to help an AI coding agent be productive immediately.

1) Big picture
- This is a Vite + React single-page app (React 19) with client-side routing via `react-router-dom` in [src/App.jsx](src/App.jsx#L1). The UI uses Tailwind CSS and icons from `lucide-react`.
- The app is a frontend-only site that uses Supabase as a backend/service layer: the Supabase client is initialized in [src/lib/supabase.js](src/lib/supabase.js#L1) using `import.meta.env` environment variables.

2) Project layout & important files
- `package.json` — scripts: `dev` (vite), `build`, `preview`, `lint` ([package.json](package.json#L1)).
- `vite.config.js` — Vite plugins (Tailwind integration) ([vite.config.js](vite.config.js#L1)).
- `src/main.jsx` — app entry, wraps `<App />` in `StrictMode` ([src/main.jsx](src/main.jsx#L1)).
- `src/App.jsx` — central router and layout; add new routes here when adding pages ([src/App.jsx](src/App.jsx#L1)).
- `src/pages/*` — each page component (Home, About, Services, etc.) lives here and is imported by `App.jsx`.
- `src/components/layout/Header.jsx` — header nav; update `navItems` here when adding nav links ([src/components/layout/Header.jsx](src/components/layout/Header.jsx#L1)).
- `src/lib/supabase.js` — Supabase client: uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` via `import.meta.env`.

3) Environment & secrets
- Env vars must be prefixed with `VITE_` to be available in the browser. Expect at minimum:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
- Do not commit `.env` files or print keys to logs. Use your deployment platform's env var settings.

4) Conventions & patterns to preserve
- File extensions: `.jsx` for components/pages.
- Components are functional and default-exported. Follow the established pattern: small presentational components in `src/components/*`, page-level components in `src/pages/*`.
- Tailwind-first styling: classes are applied inline in JSX; prefer adding utilities in markup rather than creating separate CSS files for component styles.
- Routing: add both a `<Route path="/new" element={<NewPage/>} />` in `App.jsx` and a matching nav entry in `Header.jsx`'s `navItems` array.
- Icon pattern: components from `lucide-react` are passed as component references (see `Home.jsx` services array where `icon: Scissors` is used and rendered as `<service.icon />`).

5) Common tasks and exact commands
- Run dev server: `npm run dev` (Vite HMR).
- Build for production: `npm run build`.
- Preview production build locally: `npm run preview`.
- Lint: `npm run lint`.

6) Integration touchpoints and where to implement features
- Backend calls: import `supabase` from `src/lib/supabase.js` and use `supabase.from(...).select()` etc. Keep calls inside effects or handlers in page components.
- Authentication: there is no central auth wrapper—if adding auth, centralize session handling (and route guards) near `src/main.jsx` / `App.jsx`.

7) Tests & CI
- There are no tests or CI configs in the repository. If you add tests, follow Vite/React patterns and add scripts to `package.json`.

8) Safety & privacy notes for agents
- Do not introduce code that prints or commits secrets. Avoid adding `.env` to the repo.
- Keep changes minimal and consistent with the existing style (no global state libraries unless requested).

9) Quick examples
- Add a page and route:

  1. Create `src/pages/NewPage.jsx` with a default-export functional component.
  2. Add `import NewPage from "./pages/NewPage"` to `src/App.jsx` and a corresponding `<Route path="/new" element={<NewPage/>} />`.
  3. Add `{ name: "New", path: "/new" }` to `navItems` in `src/components/layout/Header.jsx`.

10) Where to look first when debugging
- Routing/layout issues: `src/App.jsx` and `src/components/layout/Header.jsx`.
- Supabase or env issues: `src/lib/supabase.js` and the build env vars.
- Styling quirks: Tailwind classes in the affected component file under `src/pages/*` or `src/components/*`.

If any section is unclear or you'd like more detail (examples of supabase queries, auth scaffolding, or a suggested test harness), tell me which part to expand. 
