interface StatCardProps {
  label: string;
  value: string;
  caption: string;
}

export function StatCard({ label, value, caption }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
      <p className="text-xs uppercase tracking-[0.2em] text-black/50">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-ink">{value}</p>
      <p className="mt-2 text-sm text-black/70">{caption}</p>
    </div>
  );
}
