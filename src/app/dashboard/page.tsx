import { ModuleCard } from '@/components/dashboard/ModuleCard';
import { StatCard } from '@/components/dashboard/StatCard';

const modules = [
  {
    title: 'Products',
    description: 'Manage live itineraries, pricing, and release status.',
    status: 'Active'
  },
  {
    title: 'Ops',
    description: 'Coordinate suppliers, seat inventory, and operational checklists.',
    status: 'Syncing'
  },
  {
    title: 'Sales',
    description: 'Track demand signals and coordinate with GTM partners.',
    status: 'Ready'
  },
  {
    title: 'Voyages',
    description: 'Monitor departure readiness and day-of-trip coverage.',
    status: 'Planned'
  },
  {
    title: 'Tasks',
    description: 'Assign follow-ups across travel operations teams.',
    status: 'Beta'
  }
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active Products" value="12" caption="3 launching this week" />
        <StatCard label="Open Ops Tasks" value="27" caption="14 due in 48 hours" />
        <StatCard label="Sales Pipeline" value="$1.2M" caption="Projected next quarter" />
      </section>
      <section>
        <h2 className="text-lg font-semibold text-ink">Modules</h2>
        <p className="mt-2 text-sm text-black/70">
          Quick access to operational systems across travel, sales, and fulfillment.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>
    </div>
  );
}
