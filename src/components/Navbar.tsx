'use client'

import { useState, useEffect } from "react";
//import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const pathname = usePathname();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full transition-transform duration-300 bg-[#2d3142] z-50
      ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center items-center h-10">
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-[#d8e2dc] hover:text-white transition-colors text-2xl" 
            >
              Home
            </button>
            {pathname === '/' && (
              <>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-[#d8e2dc] hover:text-white transition-colors text-2xl"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-[#d8e2dc] hover:text-white transition-colors text-2xl"
                >
                  Contact
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 