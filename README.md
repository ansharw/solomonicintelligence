# Solomonic Intelligence

Institutional website for Solomonic Intelligence, built with Next.js (App
Router) and exported as a fully static site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This runs `next build` with `output: "export"` (see `next.config.ts`) and
produces a fully static site in `out/`. There is no Node.js server and no
Next.js API routes — the only backend logic is the Cloudflare Worker at
`worker/index.ts`, which handles `POST /api/contact`.

## Deploying to Cloudflare

This project deploys through **Cloudflare Workers Builds** (the unified
Workers + static assets pipeline), driven by `wrangler.toml` — not the
classic Cloudflare Pages Functions convention, and not an SSR Next.js
adapter.

**Dashboard settings** (project → Settings → Build):

| Setting | Value |
|---|---|
| Build command | `npm run build` |

Do **not** select the plain "Next.js" framework preset for the build step —
it assumes an SSR deployment via `@opennextjs/cloudflare` and fails with
`ENOENT ... .next/standalone/...`, since static export never produces
that output. The build command above just needs to produce `out/`; the
rest of the deploy (serving `out/` as static assets, plus routing
`/api/*` to the Worker) is fully described by `wrangler.toml`:

- `main = "worker/index.ts"` — the Worker entry point
- `[assets] directory = "out"` — serves the static export
- `run_worker_first = ["/api/*"]` — only `/api/*` requests reach the
  Worker; everything else is served directly from `out/`

### Email binding (contact form)

The contact form sends through Cloudflare Email Workers, not a
third-party API. Before it will actually deliver mail:

1. Enable **Email Routing** for `solomonicintelligence.com` and add a rule
   forwarding `contact@solomonicintelligence.com` to the real inbox.
2. Make sure a **Send Email** binding named `EMAIL` exists, restricted to
   `contact@solomonicintelligence.com` — declared in `wrangler.toml`
   under `[[send_email]]` and matched in `worker/index.ts`.
3. Redeploy after Email Routing is enabled.

### Triggering a new deployment

**"Retry deployment" re-runs the same commit that deployment was built
from — it does not pick up new commits.** If you've pushed a fix, use
"Create deployment" (or push another commit) to build the current `main`
HEAD instead of retrying an old, already-failed deployment.

## Project structure

- `src/app/` — pages (App Router)
- `src/components/` — shared UI
- `src/data/` — nav, capabilities, and research content
- `worker/` — the Cloudflare Worker entry point (kept separate from the
  Next.js TypeScript project via `worker/tsconfig.json`)
