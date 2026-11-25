# PASQUA DEV

A standalone personal technology portfolio for Paschal Jayden. The site connects visitors to independent bots, websites and experiments without merging their repositories.

## Stack

- React 19 + TypeScript
- Vite
- Wouter client-side routing
- Framer Motion
- Lucide icons
- Tailwind CSS tooling with a custom CSS visual system

## Local development

```bash
npm ci
npm run dev
```

The production build is checked with:

```bash
npm run check
npm run build
```

## Render Static Site

Create a new **Static Site** in Render and use:

- **Build command:** `npm ci && npm run build`
- **Publish directory:** `dist`

The included `render.yaml` adds an SPA fallback that rewrites direct route requests to `/index.html`, so routes such as `/projects` and `/start-project` work on refresh.

This is a static frontend. It has no server-side runtime or database. The project starter creates a URL-encoded WhatsApp handoff for review; it does not auto-send a message.

## Independent project links

The portfolio links to the separate SUKUNA_MD repository, PAIR_SITE live endpoints, Telegram bots, Couple Theatre, the official domain, and public GitHub experiments. Those projects are not copied into this repository.

## Routes

`/`, `/about`, `/projects`, `/whatsapp-bots`, `/telegram-bots`, `/websites`, `/apps`, `/technologies`, `/services`, `/start-project`, `/contact`, and `/community`.
