import { Sidebar } from '@/components/dashboard/Sidebar';
import { TopNav } from '@/components/dashboard/TopNav';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-fog">
      <TopNav />
      <div className="grid min-h-[calc(100vh-72px)] grid-cols-1 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <main className="px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
