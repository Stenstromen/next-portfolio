"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-full sm:max-w-none sm:w-auto bg-[#2d3142] shadow-sm rounded-b-2xl sm:rounded-b-3xl px-2 py-1.5 sm:px-6 sm:py-0 min-[480px]:px-8 box-border">
        <div className="flex flex-wrap justify-center items-center gap-x-1.5 gap-y-1 sm:gap-x-6 md:gap-8 min-h-9 sm:h-10 sm:min-h-0">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-[#d8e2dc] hover:text-white transition-colors text-sm min-[360px]:text-base sm:text-xl md:text-2xl shrink-0 px-0.5 sm:px-0"
          >
            Home
          </button>
          {pathname === "/" && (
            <>
              <button
                type="button"
                onClick={() => scrollToSection("achievements")}
                className="text-[#d8e2dc] hover:text-white transition-colors text-sm min-[360px]:text-base sm:text-xl md:text-2xl shrink-0 px-0.5 sm:px-0"
                aria-label="Certifications"
              >
                <span className="sm:hidden">Certs</span>
                <span className="hidden sm:inline">Certifications</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="text-[#d8e2dc] hover:text-white transition-colors text-sm min-[360px]:text-base sm:text-xl md:text-2xl shrink-0 px-0.5 sm:px-0"
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="text-[#d8e2dc] hover:text-white transition-colors text-sm min-[360px]:text-base sm:text-xl md:text-2xl shrink-0 px-0.5 sm:px-0"
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
