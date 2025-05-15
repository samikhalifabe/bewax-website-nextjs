"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul id="menu-menuok" className="menu sf-js-enabled sf-shadow flex space-x-6">
            <li className="menu-item current-menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/">Accueil</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/terrassesbois">Remise à neuf et entretien</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/professionnels">Professionnels</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/tarifs-et-formules">Tarifs et formules</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-bewax-dark text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full border-b border-gray-200">
          <ul id="tf_mb_menu" className="menu flex flex-col items-center py-4 space-y-2">
            <li className="menu-item current-menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/" onClick={toggleMobileMenu}>Accueil</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/terrassesbois" onClick={toggleMobileMenu}>Remise à neuf et entretien</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/professionnels" onClick={toggleMobileMenu}>Professionnels</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/tarifs-et-formules" onClick={toggleMobileMenu}>Tarifs et formules</Link>
            </li>
            <li className="menu-item text-bewax-dark hover:text-bewax-green">
              <Link href="/contact" onClick={toggleMobileMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
