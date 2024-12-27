"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY.current;
      
      // Don't hide navbar if we're at the top of the page
      // or if the scroll difference is very small (for bounce effects)
      if (currentScrollY < 10 || Math.abs(scrollDifference) < 5) {
        setIsScrollingDown(false);
      } else if (scrollDifference > 0) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/${sectionId === "home" ? "" : "#" + sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 transition-transform duration-300 bg-[#2d3142] z-50 rounded-b-3xl px-8
      ${isScrollingDown ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex justify-center items-center h-10">
        <div className="flex space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-[#d8e2dc] hover:text-white transition-colors text-2xl"
          >
            Home
          </button>
          {pathname === "/" && (
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
    </nav>
  );
}
