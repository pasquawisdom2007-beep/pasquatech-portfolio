# PASQUA DEV — Personal Portfolio

The official site for PASQUA DEV — bots, websites, web applications and automation systems.
Dark UI, subtle blue accent, 13 routes (12 content pages + 404), built as a single-page app.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Me |
| `/projects` | All Projects (filterable) |
| `/whatsapp-bots` | WhatsApp Bots — SUKUNA MD |
| `/telegram-bots` | Telegram Bots — Hinatu, Lancyverse |
| `/websites` | Websites & Web Applications |
| `/apps` | Apps & Experiments (expandable, empty for now) |
| `/technologies` | Technologies & Skills |
| `/services` | Services |
| `/start-project` | Interactive project-request wizard → WhatsApp |
| `/contact` | Contact |
| `/community` | WhatsApp Channel |

## Stack — and an honest note on substitutions

The brief asked for **Vite, Tailwind CSS, Framer Motion, React Router and Lucide icons**.
This copy was built and tested inside a sandbox with **no network access** (no `npm install`
from the public registry), so it was built with what could actually be installed and verified
locally instead:

- **Bundler:** [esbuild](https://esbuild.github.io/) instead of Vite — same job (fast dev server,
  production bundle), zero extra config needed.
- **Routing:** a small hand-written router (`src/router/Router.tsx`, ~80 lines) instead of
  `react-router-dom`. Same API shape (`<Link>`, `useNavigate`, `useLocation`), so swapping the
  real package in later is a near drop-in replacement.
- **Animation:** hand-written CSS keyframes + an `IntersectionObserver`-based scroll-reveal hook
  (`src/hooks/useReveal.ts`) instead of Framer Motion. Covers every animation in the brief: the
  loader, logo reveal, page transitions, scroll reveals, staggered cards, hover states, the
  animated menu, the typewriter terminal, and `prefers-reduced-motion` support.
- **Icons:** `react-icons` (ships with Font Awesome, which includes WhatsApp/Telegram/GitHub
  marks) instead of `lucide-react`.
- **Styling:** hand-written CSS (`src/styles/global.css`) using the exact color tokens from the
  brief, instead of Tailwind utility classes.

**Everything was actually built and tested** — production build runs clean, all 13 routes were
headlessly rendered with zero console errors, the project wizard was tested end-to-end (service
selection → form → WhatsApp link generation), and the mobile hamburger menu was tested and fixed
(an initial bug where `backdrop-filter` on the nav bar trapped the fixed-position drawer inside
the 76px header was found and corrected).

If you'd rather have the "real" libraries (for example to extend animations with Framer Motion,
or add nested/dynamic routes with `react-router-dom`), they're straightforward to add once you
have network access:

```bash
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/postcss
```

The component structure (one file per page, shared `Nav`/`Footer`/`Reveal` components) makes that
swap localized rather than a rewrite.

## Deploy on Render

**Option A — Blueprint (easiest):** push this folder to GitHub, then in Render choose
**New → Blueprint** and select the repo. `render.yaml` sets everything up as a static site.

**Option B — Static Site by hand:**

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Redirects/Rewrites | `/*` → `/index.html` (Rewrite) |

**Option C — Web Service:** Build Command `npm install && npm run build`, Start Command `npm start`
(serves `dist/` on Render's `PORT` with SPA fallback).

Direct links such as `/services` work after refresh in all three options.

## Loading intro

`src/components/Loader.tsx` + the `loader / intro` block in `global.css`: a logo ring that fills with
real progress, letter-by-letter wordmark, status lines, then a split-curtain reveal that hands over to the
hero/nav entrance. The full intro plays once per session (short version on return visits) and respects
`prefers-reduced-motion`. Change `MIN_MS` in `Loader.tsx` to adjust the duration.

## Project structure

```
pasqua-dev-portfolio/
├── index.html
├── package.json
├── render.yaml
├── scripts/
│   ├── dev.mjs       # esbuild dev server with watch
│   ├── build.mjs     # production build → dist/
│   └── preview.mjs   # serves dist/ locally with SPA fallback
├── public/
│   ├── favicon.svg
│   └── _redirects    # SPA fallback for static hosts that read it
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── router/Router.tsx
    ├── hooks/useReveal.ts
    ├── data/          # projects, services, tech, nav, links — single source of truth
    ├── components/    # Nav, Footer, Loader, Cursor, Terminal, cards, Reveal
    ├── pages/         # one file per route
    └── styles/global.css
```

## Running it locally

Requires Node.js (v18+) and the dependencies listed in `package.json`:

```bash
npm install
npm run dev       # http://localhost:5173, with file-watch rebuild
npm run build     # production build → dist/
npm run preview   # serves dist/ at http://localhost:4300
```

## Deploying to Render (Static Site)

1. Push this repository to GitHub (see below).
2. In Render, create a **New Static Site** from the repo.
3. Build command: `npm ci && npm run build`
4. Publish directory: `dist`
5. Render will pick up `render.yaml` automatically for the SPA rewrite rule (every path falls
   back to `index.html`), so refreshing on `/projects` or any other route works correctly. The
   `public/_redirects` file is included as a fallback for hosts that read that convention instead.

No backend, no server-side dependency, no Manus runtime dependency — it's a fully static bundle.

## Pushing to GitHub

This was built in a sandboxed environment with no access to your GitHub account, so it couldn't
be pushed on your behalf. From the project folder:

```bash
git init
git add .
git commit -m "Initial PASQUA DEV portfolio"
git branch -M main
git remote add origin https://github.com/pasquawisdom2007-beep/pasqua-dev-portfolio.git
git push -u origin main
```

This creates a **separate** repository — nothing in `SUKUNA_MD` is touched.

## Content notes

- Project data (`src/data/projects.ts`), services (`src/data/services.ts`) and tech stack
  (`src/data/tech.ts`) are single source-of-truth files — edit there rather than in the page
  components.
- No screenshots of the live sites (pairing site, Couple Theatre) were captured, since this
  environment has no network access to reach them. The Websites page instead shows a clean
  placeholder frame with a working "Open live site" link to each real URL — swap in real
  screenshots by dropping images into `public/` and referencing them in `src/pages/Websites.tsx`.
- No prices, proficiency percentages, employment history or fabricated achievements are
  included, per the brief.
