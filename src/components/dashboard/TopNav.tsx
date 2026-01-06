import Link from 'next/link';

export function TopNav() {
  return (
    <div className="flex items-center justify-between border-b border-black/10 bg-white px-6 py-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-black/50">TravelOps</p>
        <h2 className="text-lg font-semibold text-ink">Operations Dashboard</h2>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span className="rounded-full bg-black/5 px-3 py-1 text-black/70">ops@travelops.dev</span>
        <Link href="/logout" className="text-black/70 hover:text-ink">
          Logout
        </Link>
      </div>
    </div>
  );
}
