"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaChartLine } from "react-icons/fa6";
import { Button } from "./ui/button";
import { MdLogout } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { RiTimelineView } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

// Menu items.
const menuItems = [
  {
    title: "Today's Tasks",
    icon: IoMdCalendar,
    url: "/",
    type: "link" as const,
    role: "admin",
  },
  {
    title: "All Tasks",
    icon: FaRegListAlt,
    url: "/all-tasks",
    type: "link" as const,
    role: "admin",
  },
  {
    title: "Timeline Tasks",
    icon: RiTimelineView,
    url: "/timeline-tasks",
    type: "link" as const,
    role: "admin",
  },
  {
    title: "Analytics",
    icon: FaChartLine,
    url: "/analytics",
    type: "link" as const,
    role: "admin",
  },
  {
    title: "Notes",
    icon: CgNotes,
    url: "/notes",
    type: "link" as const,
    role: "admin",
  },
];

const AppSidebar = () => {
  const { open } = useSidebar();

  const pathname = usePathname();

  return (
    // variant === floating => rounded boarder and a little space
    // inset everything normal didn't show the side bar lines
    // sidebar => default show lines

    // collapsible ==> offcanvas (hide completely) , icon(show icon) , none(not collspe)
    <Sidebar
      // variant="floating"
      variant="sidebar"
      collapsible="icon"
      className="[&>div]:bg-[#102219]"
    >
      <SidebarHeader className="spy-[13px]">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              size="lg"
              asChild
              className="pl-5 hover:bg-transparent"
            >
              {open ? (
                <div className="relative z-10 mb-10 flex items-center gap-3 text-white lg:mb-0">
                  <div className="size-8 shrink-0 text-white">
                    <Image
                      src={"/logo.svg"}
                      height={48}
                      width={48}
                      alt="logo"
                    />
                  </div>
                  <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    TaskMaster
                  </h2>
                </div>
              ) : (
                <div className="text-primarys size-8 text-white">
                  <Image src={"/logo.svg"} height={48} width={48} alt="logo" />
                </div>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    {item.type === "link" && (
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={` ${
                          pathname === item?.url
                            ? "text-green-light bg-green-light/10 border-green-light/10 hover:bg-green-light/10 hover:text-green-light border"
                            : "text-gray-900 hover:bg-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                        } group flex items-center gap-3 rounded-lg px-3 py-5 transition-colors`}
                      >
                        <Link href={item.url}>
                          <item.icon />
                          <span className="text-sm font-medium">
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button className="flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
          <MdLogout />

          {open && "Logout"}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
