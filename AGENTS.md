# Repository Guidelines

## Project Structure & Module Organization
- `app/` uses the Next.js App Router; pages live in `**/page.tsx`, shared layouts in `layout.tsx`, and server routes inside `app/api`. Keep metadata files (`metadata.ts`, `head.tsx`) alongside the page they configure.
- `components/` holds reusable UI. Section-level components (hero, services, footer) sit at the top level, while `components/ui/` wraps shadcn-style primitives. Custom hooks reside in `hooks/`, and Tailwind helpers such as `cn` live in `lib/utils.ts`.
- Static assets stay in `public/`. Styling layers are defined in `styles/globals.css`, and Tailwind/PostCSS configuration lives at the root. Database or infra helpers belong in `scripts/` (see `scripts/create-verification-table.sql`).

## Build, Test, and Development Commands
- Install dependencies with `pnpm install` (or `npm install`).
- Launch local development using `pnpm dev` to serve the site at `http://localhost:3000`.
- Produce a production bundle through `pnpm build` and inspect it with `pnpm start`.
- Enforce lint rules via `pnpm lint`; resolve warnings before opening a pull request.

## Coding Style & Naming Conventions
- Write components in TypeScript (`.tsx`/`.ts`) with two-space indentation and functional React patterns. Prefer server components unless client hooks are required.
- Keep filenames lowercase with dashes for routes (`app/privacy/page.tsx`) and camelCase for utilities. Export a single component per file and keep prop names descriptive (`primaryColor`, `ctaHref`).
- Use Tailwind classes sparingly; refactor repeated combinations into utilities or component props to preserve readability.

## Testing Guidelines
- Automated tests are not yet configured. Introduce unit coverage with Vitest or Jest for new logic, and consider Playwright for smoke testing customer journeys.
- Until tooling lands, manually verify critical pages (`/`, `/services`, `/contact`) and contact forms or API handlers. Record what you exercised in the pull request notes.

## Commit & Pull Request Guidelines
- Follow Conventional Commit prefixes (`feat:`, `fix:`, `chore:`, etc.), mirroring the existing history. Keep subject lines imperative and under 70 characters.
- Squash commits before merging. Each PR should explain the change, link any Vercel preview, capture before/after screenshots for UI work, and list environment or schema updates.

## Environment & Configuration Tips
- Store required secrets (Supabase, Resend, database credentials) in `.env.local`. Only variables prefixed with `NEXT_PUBLIC_` will be available in the browser.
- When schema or infra changes are needed, add scripts under `scripts/` and call out execution steps in the pull request so the deployment owner can apply them.
