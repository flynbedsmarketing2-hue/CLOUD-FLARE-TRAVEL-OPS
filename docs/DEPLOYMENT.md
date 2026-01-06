# Cloudflare Pages Deployment

## Build settings

- **Build command:** `npm run pages:build`
- **Output directory:** `.vercel/output/static`
- **Node version:** 18+ (set in Pages or via `NODE_VERSION`)

## Steps

1. Push the repository to GitHub.
2. In Cloudflare Pages, select **Create a project** and connect the repo.
3. Use the build settings above.
4. Deploy. No environment variables are required.

## Local preview

```bash
npm run pages:build
npm run pages:dev
```

Then open the URL printed by Wrangler.
