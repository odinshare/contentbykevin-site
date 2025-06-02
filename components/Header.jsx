// app/components/Header.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// We’ll change the header to use a “fixed” position and highlight the active
// section as you scroll. This example shows a simple “active” underline effect.

export default function Header() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "services", "portfolio", "faq", "contact"];
    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // offset for header height
      let newSection = "home";

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          newSection = id;
        }
      }
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (section) =>
    currentSection === section
      ? "text-gray-900 border-b-2 border-teal-500"
      : "text-gray-800 hover:text-teal-500 transition";

  return (
    <header className="fixed top-0 left-0 z-30 w-full bg-white/20 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between px-2 py-1 sm:px-6 sm:py-3 lg:px-8 lg:py-4">
        {/* Mobile grid navigation */}
        <div className="grid grid-rows-3 grid-cols-3 w-full text-center p-1 block sm:hidden">
          <Link href="/#home">
            <span className={`${linkClass("home")} row-start-1 col-start-2 cursor-pointer`}>
              Home
            </span>
          </Link>
          <Link href="/#services">
            <span className={`${linkClass("services")} row-start-2 col-start-3 cursor-pointer`}>
              Services
            </span>
          </Link>
          <Link href="/#contact">
            <span className={`${linkClass("contact")} row-start-2 col-start-1 cursor-pointer`}>
              Contact
            </span>
          </Link>
          <Link href="/#portfolio">
            <span className={`${linkClass("portfolio")} row-start-3 col-start-2 cursor-pointer`}>
              Portfolio
            </span>
          </Link>
          <Link href="/#home">
            <span className="text-2xl font-bold text-gray-900 cursor-pointer text-outline row-start-2 col-start-2">
              CBK
            </span>
          </Link>
          <Link href="/faq">
            <span className={`${linkClass("faq")} row-start-3 col-start-3 cursor-pointer`}>
              FAQ
            </span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <Link href="/#home" className="hidden sm:block">
          <span className="text-2xl font-bold text-gray-900 cursor-pointer text-outline">
            CBK
          </span>
        </Link>

        <div className="text-lg hidden sm:flex sm:space-x-8 sm:gap-0">
          <Link href="/#home">
            <span className={linkClass("home")}>Home</span>
          </Link>
          <Link href="/#services">
            <span className={linkClass("services")}>Services</span>
          </Link>
          <Link href="/#portfolio">
            <span className={linkClass("portfolio")}>Portfolio</span>
          </Link>
          <Link href="/faq">
            <span className={linkClass("faq")}>FAQ</span>
          </Link>
          <Link href="/#contact">
            <span className={linkClass("contact")}>Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}