"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileNavbarProps {
  data: Category[];
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="lg:ml-0 gap-x-2F ">
            <p className="font-bold text-xl">
              <SheetClose>STORE</SheetClose>
            </p>
          </Link>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-all hover:text-neutral-600 hover:text-lg",
                route.active ? "text-neutral-600" : "text-neutral-400"
              )}
            >
              <SheetClose>{route.label}</SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
