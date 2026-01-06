# TravelOps Architecture Notes

## Frontend

- **Framework:** Next.js App Router with React Server Components.
- **Styling:** Tailwind CSS with a monochrome palette defined in `tailwind.config.ts`.

## Routing

- Public pages live in `src/app/(public)`.
- Protected routes live under `src/app/dashboard` and are gated by `middleware.ts`.

## Authentication placeholder

- `/login` posts to `/api/login`, which sets `travelops_session=dev`.
- `/logout` clears the cookie.
- Middleware redirects unauthenticated users to `/login`.

## Data layer

- In-memory store defined in `src/lib/store.ts`.
- Seed data stored in `src/lib/seed/products.json`.
- In dev, data persists to `/tmp/travelops-products.json` when available.

## API

- App Router route handlers under `src/app/api/products` implement CRUD for products.
