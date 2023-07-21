import Link from "next/link";
import { NavbarActions } from "@/components/navbar-actions";
import { MainNav } from "@/components/main-nav";
import { Container } from "@/components/ui/container";
import { getCategories } from "@/actions/get-categorise";

export const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className=" ml-4 flex lg:ml-0 gap-x-2F">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
