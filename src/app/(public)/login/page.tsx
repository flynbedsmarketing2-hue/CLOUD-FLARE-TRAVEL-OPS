export default function LoginPage() {
  return (
    <main className="min-h-screen bg-fog">
      <section className="mx-auto flex max-w-md flex-col gap-6 px-6 py-20">
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-soft">
          <h1 className="text-2xl font-semibold text-ink">Welcome to TravelOps</h1>
          <p className="mt-3 text-sm text-black/70">
            This environment uses a placeholder session. Click below to enter the dashboard.
          </p>
          <form action="/api/login" method="post" className="mt-6">
            <button
              type="submit"
              className="w-full rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Continue to Dashboard
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
