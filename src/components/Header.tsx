"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'; // Only need FaBars for the trigger icon

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="header_shadow nav_type_3 sticky_header header_to_shrink clearfix bg-white w-full border-b border-gray-200">
      <div className="wrapper container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div id="logo_img">
          <Link href="/">
            <Image
              src="/logowaxpetit4.fw_.png" // Assuming the logo is in the public directory
              alt="Wax nettoyage et entretien de terrasses en bois"
              title="Wax nettoyage et entretien de terrasses en bois"
              width={150} // Adjust width as needed
              height={50} // Adjust height as needed
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-bewax-dark hover:text-bewax-green">
                Accueil
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/terrassesbois" className="text-bewax-dark hover:text-bewax-green">
                Remise à neuf et entretien
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/professionnels" className="text-bewax-dark hover:text-bewax-green">
                Professionnels
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/tarifs-et-formules" className="text-bewax-dark hover:text-bewax-green">
                Tarifs et formules
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="text-bewax-dark hover:text-bewax-green">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <FaBars className="h-6 w-6" />
                <span className="sr-only">Toggle mobile menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-6">
                <Link href="/" className="text-bewax-dark hover:text-bewax-green">
                  Accueil
                </Link>
                <Link href="/terrassesbois" className="text-bewax-dark hover:text-bewax-green">
                  Remise à neuf et entretien
                </Link>
                <Link href="/professionnels" className="text-bewax-dark hover:text-bewax-green">
                  Professionnels
                </Link>
                <Link href="/tarifs-et-formules" className="text-bewax-dark hover:text-bewax-green">
                  Tarifs et formules
                </Link>
                <Link href="/contact" className="text-bewax-dark hover:text-bewax-green">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
