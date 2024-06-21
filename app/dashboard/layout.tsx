import SidebarDashboard from "@/components/SidebarDashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <SidebarDashboard />
      {children}
    </div>
  );
}
