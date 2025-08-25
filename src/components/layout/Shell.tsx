import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 py-4">
        <div className="flex gap-4">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-4">
            <Topbar />
            <main className="glass p-6">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
