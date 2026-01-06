import Link from 'next/link';

const navItems = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/products', label: 'Products' },
  { href: '/dashboard/tasks', label: 'Tasks' }
];

export function Sidebar() {
  return (
    <aside className="flex h-full flex-col gap-6 border-r border-black/10 bg-white px-5 py-6">
      <div className="rounded-2xl border border-black/10 bg-ink px-4 py-5 text-white">
        <p className="text-xs uppercase tracking-[0.2em] text-white/70">Workspace</p>
        <p className="mt-2 text-lg font-semibold">TravelOps Core</p>
        <p className="mt-1 text-xs text-white/70">Internal ops environment</p>
      </div>
      <nav className="flex flex-col gap-2 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-2 text-black/70 hover:bg-black/5 hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-2xl border border-black/10 bg-fog px-4 py-4 text-xs text-black/60">
        Session: <span className="font-semibold text-black/70">dev</span>
      </div>
    </aside>
  );
}
