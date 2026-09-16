"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

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

  const linkClass =
    "text-muted hover:text-ink transition-colors text-sm sm:text-base font-medium inline-flex items-center min-h-9 sm:min-h-11 px-2 sm:px-3";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-line/80 bg-canvas">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm sm:text-base tracking-tight text-ink hover:text-accent transition-colors shrink-0 inline-flex items-center min-h-9 sm:min-h-11"
        >
          stenstromen
        </Link>
        <div className="flex flex-nowrap justify-end items-center gap-x-0.5 sm:gap-x-2">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className={linkClass}
          >
            Home
          </button>
          {pathname === "/" && (
            <>
              <button
                type="button"
                onClick={() => scrollToSection("achievements")}
                className={linkClass}
                aria-label="Certs, Certifications"
              >
                <span className="sm:hidden">Certs</span>
                <span className="hidden sm:inline">Certifications</span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className={linkClass}
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className={linkClass}
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
