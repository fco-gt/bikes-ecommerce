import SidebarDashboard from "@/components/SidebarDashboard";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="flex md:hidden">
        Vista no permitida para dispositivos móviles
      </h2>
      <div className="hidden md:flex h-screen">
        <SidebarDashboard />
        {children}
      </div>
    </div>
  );
}
