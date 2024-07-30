"use client";

// Import things that need
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Conponents
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", scrollYPos);

    // Remove Events
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header
          ? `py-4 bg-tertiary shadow-lg dark:bg-accent`
          : `py-6 dark:bg-transparent`
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fff]"}`}
    >
      <div>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              linkStyles="relative hover:text-primary transition-all"
              containerStyles="hidden xl:flex gap-x-8 items-center"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
