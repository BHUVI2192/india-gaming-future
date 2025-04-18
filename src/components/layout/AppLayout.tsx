
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-4 pb-20 md:pt-20 md:pb-4 px-4">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
