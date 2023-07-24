"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flrx items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-all hover:text-neutral-600 hover:text-lg",
            route.active ? "text-neutral-600" : "text-neutral-400"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
