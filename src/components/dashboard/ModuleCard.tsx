interface ModuleCardProps {
  title: string;
  description: string;
  status: string;
}

export function ModuleCard({ title, description, status }: ModuleCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <span className="rounded-full bg-black/5 px-2 py-1 text-xs text-black/70">{status}</span>
      </div>
      <p className="mt-3 text-sm text-black/70">{description}</p>
    </div>
  );
}
