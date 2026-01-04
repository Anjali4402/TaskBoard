// siderbar
"use client";
import AppSidebar from "@/components/AppSiderbar";
import { useState } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { FiSidebar } from "react-icons/fi";
import { useTheme } from "next-themes";
import ProfileDropdown from "@/components/shared/ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

              <ProfileDropdown
                trigger={
                  <Button variant="ghost" size="icon" className="size-9.5">
                    <Avatar className="size-9.5 rounded-md">
                      <AvatarImage
                        src="https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png"
                        // src={user?.image}
                        alt="John Doe"
                      />
                      <AvatarFallback className="uppercase">JD</AvatarFallback>
                    </Avatar>
                  </Button>
                }
              />
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
