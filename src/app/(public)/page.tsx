import Link from 'next/link';

const modules = ['Products', 'Ops', 'Sales', 'Voyages', 'Tasks'];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-fog">
      <section className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16">
        <header className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            TravelOps
          </p>
          <h1 className="text-4xl font-semibold text-ink md:text-6xl">
            Travel operations, streamlined for modern teams.
          </h1>
          <p className="max-w-2xl text-lg text-black/70">
            TravelOps centralizes product management, operations workflows, and sales readiness so your
            team can launch itineraries faster and keep every trip on track.
          </p>
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Open Dashboard
            </Link>
          </div>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold">What it does</h2>
            <p className="mt-3 text-sm text-black/70">
              Plan, launch, and track travel products with a shared source of truth for inventory,
              pricing, and destination details.
            </p>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold">Modules</h2>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              {modules.map((module) => (
                <li key={module}>• {module}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold">How it helps</h2>
            <p className="mt-3 text-sm text-black/70">
              Reduce handoffs between ops and sales with live status updates, quick briefs, and instant
              access to product readiness signals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
