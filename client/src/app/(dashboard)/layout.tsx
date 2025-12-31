// siderbar
"use client";
import AppSidebar from "@/components/AppSiderbar";
import { useState } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { FiSidebar } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <SidebarProvider open={showSidebar} onOpenChange={setShowSidebar}>
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-50 border-b bg-[#102219]">
          <div className="max-w-7xls mx-auto flex items-center justify-between gap-6 px-4 py-2 sm:px-6">
            <div>
              <FiSidebar
                onClick={() => setShowSidebar(!showSidebar)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-6">
              <div onClick={handleThemeChange}>
                {theme === "dark" ? "Dark" : "Light"}
              </div>

              <div className="relative flex items-center gap-1.5">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-200 text-xs font-bold text-slate-600`}
                >
                  AN
                  {/* {user?.firstName.substring(0, 1)} */}
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto size-full flex-1 px-4 pt-4 pb-2 sm:px-6">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
