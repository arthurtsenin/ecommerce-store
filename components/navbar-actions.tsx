"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { useCart } from "@/hooks/use-cart";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <ThemeToggler />
      <Button
        variant="default"
        onClick={() => router.push("/cart")}
        // className="flex items-center rounded-md bg-black px-4 py-2"
      >
        <ShoppingBag size={20} />
        <span className="ml-2 text-sm font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
