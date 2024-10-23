"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChart3, Home, Layout, List, Package, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Projects",
    href: "/dashboard/projects",
    icon: Layout,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: List,
  },
  {
    title: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden border-r bg-background lg:block lg:w-64">
      <ScrollArea className="h-[calc(100vh-4rem)] px-4 py-6">
        <div className="space-y-1">
          {sidebarNavItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </nav>
  );
}