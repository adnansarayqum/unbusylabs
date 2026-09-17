# UnbusyLabs

Marketing website for **UnbusyLabs** — a founder-led UK technology studio that turns messy
business processes into useful websites, software, automation, AI agents and data systems.

Built with Next.js (App Router), TypeScript (strict), Tailwind CSS, React Hook Form + Zod, and
Framer/CSS motion with full `prefers-reduced-motion` support.

## Local setup

```bash
npm install
cp .env.example .env.local   # edit values as needed
npm run dev
```

The site runs at `http://localhost:3000`.

## Scripts

| Script              | Purpose                                   |
| ------------------- | ------------------------------------------ |
| `npm run dev`        | Local development server                   |
| `npm run build`      | Production build                           |
| `npm run start`      | Serve the production build                 |
| `npm run lint`       | ESLint                                     |
| `npm run typecheck`  | TypeScript, no emit                        |
| `npm test`           | Vitest unit + component tests              |
| `npm run test:watch` | Vitest in watch mode                       |
| `npm run e2e`        | Playwright end-to-end tests (builds first) |

## Environment variables

See `.env.example`. None are required for local development — the contact form falls back to a
console-logging dev-mode handler when `RESEND_API_KEY` is not set.

| Variable                     | Purpose                                                        |
| ----------------------------- | --------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`        | Canonical origin used for metadata, sitemap and structured data |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Displayed contact email (footer, structured data)                |
| `NEXT_PUBLIC_LINKEDIN_URL`    | LinkedIn profile link (omitted from footer if empty)             |
| `NEXT_PUBLIC_GITHUB_URL`      | GitHub profile link (omitted from footer if empty)               |
| `RESEND_API_KEY`              | Enables real enquiry emails via Resend (optional)                |
| `CONTACT_NOTIFY_EMAIL`        | Where enquiry emails are sent once Resend is enabled             |

## Content editing

All copy that a non-developer might reasonably update lives in typed config, not JSX:

- `src/content/site.ts` — brand strings, nav, footer links
- `src/content/services.ts` — the six services (problem, deliverables, example workflow, etc.)
- `src/content/work.ts` — the four case studies (SiteSnap, AccountingOps, Archiflow, Mr Appeal)
- `src/content/industries.ts` — industry segments
- `src/content/process.ts` — process steps and engagement options

Editing these files updates every page that reads from them (homepage, `/services`, `/work/*`)
without touching component code.

## Architecture notes

- **App Router, server components by default.** Client components are used only where
  interaction/animation requires it: the header (mobile menu), the workflow machine (intersection
  observer for reduced motion), and the contact form.
- **Workflow machine** (`src/components/machine/WorkflowMachine.tsx`) is built from HTML/CSS/SVG,
  not a large image or video. It pauses/reduces motion outside the viewport and respects
  `prefers-reduced-motion` (enforced globally in `globals.css`). Below `lg`, it renders a vertical
  "messy inputs → UnbusyLabs → useful outputs" sequence instead of a cramped horizontal conveyor.
- **Contact form** (`src/components/contact/ContactForm.tsx`) validates with the same Zod schema
  client- and server-side (`src/lib/validation.ts`), posts to `src/app/api/contact/route.ts`,
  which rate-limits by IP, checks a honeypot field, and calls an email-provider adapter
  (`src/lib/email-provider.ts`) — swap in Resend (or another provider) by setting
  `RESEND_API_KEY`; without it, submissions are logged, not lost.
- **Analytics** is abstracted in `src/lib/analytics.ts` behind a single `track()` call so a real
  provider can be wired in later without touching call sites. No form content is ever tracked.
- **SEO**: per-route metadata, `sitemap.ts`, `robots.ts`, Open Graph/Twitter cards, and a
  `ProfessionalService` JSON-LD block in the root layout.

## Testing

- **Unit/component** (Vitest + Testing Library): content-config invariants, Zod schema validation,
  header navigation + mobile menu, contact form validation and submission.
- **End-to-end** (Playwright, Chromium desktop + mobile viewport): homepage → services navigation,
  no broken internal links, mobile menu behaviour, contact form validation and a mocked successful
  submission.

Run `npm test` for unit/component tests and `npm run e2e` for the full browser suite (the e2e
config builds and serves the production app on port 3100 automatically).

## Deployment (Railway)

A `railway.json` at the repo root configures the build (Nixpacks, `npm run build`) and start
(`npm run start`) commands, so Railway needs no manual build settings.

1. In the [Railway dashboard](https://railway.app), create a new project → **Deploy from GitHub
   repo** → select `adnansarayqum/unbusylabs` and the branch to deploy.
2. Railway detects Node via Nixpacks automatically and reads `railway.json` for the build/start
   commands and healthcheck.
3. Add the environment variables from `.env.example` under the service's **Variables** tab (all
   optional for a first deploy — the contact form falls back to its dev-mode handler without
   `RESEND_API_KEY`).
4. Deploy. Railway injects `PORT` automatically; `next start` reads it and binds to `0.0.0.0`, so
   no extra configuration is needed.
5. Once `unbusylabs.com` is registered, add it as a custom domain under the service's
   **Settings → Domains** and point its DNS (CNAME, per Railway's instructions) at the generated
   Railway target. Update `NEXT_PUBLIC_SITE_URL` to `https://unbusylabs.com` in the Variables tab
   and redeploy so canonical URLs, the sitemap and structured data pick up the new origin.

The app is a standard Next.js server (no platform-specific APIs), so it also deploys unchanged to
Vercel or any other Node host if preferred — just point it at the same `npm run build` /
`npm run start` scripts.

No production credentials, domain purchase or third-party accounts have been created as part of
this build.

## Remaining placeholders / follow-ups

- **Legal copy**: the privacy policy and terms pages are clearly labelled as an owner-reviewed
  starting point — have them checked against current UK GDPR/PECR guidance before publishing.
- **Case study galleries**: `/work/*` pages use honestly labelled placeholders
  (`Product interface preview`) instead of real screenshots. Replace with real product imagery when
  available.
- **Social links**: `NEXT_PUBLIC_LINKEDIN_URL` / `NEXT_PUBLIC_GITHUB_URL` are empty by default and
  the footer icons are omitted until they're set — add the real profile URLs when available.
- **Email delivery**: contact form submissions are logged server-side (dev-mode handler) until
  `RESEND_API_KEY` (or an alternative provider swapped into `src/lib/email-provider.ts`) is
  configured.
- **Analytics provider**: `src/lib/analytics.ts` currently no-ops in production; wire in a real
  provider (e.g. Plausible) at the marked integration point when one is chosen.
- **Domain**: `unbusylabs.com` is not yet registered or connected; see Deployment above.
