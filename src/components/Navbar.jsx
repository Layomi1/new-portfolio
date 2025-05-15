import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 md:px-14",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Layomi's </span>
            Portfolio
          </span>
        </a>

        {/* desKtop */}
        <ul className="hidden md:flex space-x-8 ">
          {navItems.map((item, key) => (
            <Link
              key={key}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        {/* mobile */}
        <button
          onClick={() => setisMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Now" : "Open Now"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? " opacity-100 pointer-events-auto"
              : "opacity-0  pointer-events-none"
          )}
        >
          <ul className="flex flex-col text-xl space-x-8">
            {navItems.map((item, key) => (
              <Link
                to={item.href}
                onClick={() => setisMenuOpen(false)}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
