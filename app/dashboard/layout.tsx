import SidebarDashboard from "@/components/SidebarDashboard";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <h2 className="flex md:hidden">
        Vista no permitida para dispositivos móviles
      </h2>
      <div className="hidden md:flex">
        <SidebarDashboard />
        {children}
      </div>
    </div>
  );
}
