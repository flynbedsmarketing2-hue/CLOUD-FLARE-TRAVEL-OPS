# TravelOps

Internal travel operations workspace built with Next.js App Router, Tailwind CSS, and Cloudflare Pages.

## Features

- Minimal black/white UI tailored for ops workflows.
- Protected `/dashboard` routes using a placeholder session cookie.
- Product CRUD backed by in-memory state with optional local persistence in dev.
- Cloudflare Pages-ready build pipeline using `@cloudflare/next-on-pages`.

## Local development

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

### Login flow

- Visit `/login` and click **Continue to Dashboard** to set a fake session cookie.
- `/logout` clears the cookie.

## Scripts

- `npm run dev` - run the Next.js dev server.
- `npm run build` - build for production.
- `npm run lint` - lint with Next.js defaults.
- `npm run typecheck` - TypeScript checks.
- `npm run pages:build` - build + `next-on-pages` output for Cloudflare Pages.
- `npm run pages:dev` - preview the Cloudflare Pages output via Wrangler.

## Cloudflare Pages deployment

1. Push this repository to GitHub.
2. In Cloudflare Pages, **Create a project** and connect the repo.
3. Set the build command to `npm run pages:build`.
4. Set the build output directory to `.vercel/output/static`.
5. Set the Node version to 18 or newer in the Pages build settings (or via `NODE_VERSION`).
6. Deploy. No environment variables are required.

> Cloudflare Pages handles deploys directly from your GitHub build. You do not need to run `wrangler deploy`.
For more details, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Repository layout

```
src/
  app/            # App Router pages, API routes, and middleware
  components/     # Reusable UI components
  lib/            # Helpers, store, and seed data
public/           # Static assets
```

## Notes

- Product data is stored in memory only (Edge runtime has no filesystem persistence).
