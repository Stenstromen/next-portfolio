"use client";

import { useState, useCallback, TouchEvent, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectList";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface ProjectCarouselProps {
  projects: Project[];
  itemsPerRow: number;
  rows: number;
  nonce?: string;
}

export default function ProjectCarousel({
  projects,
  itemsPerRow = 4,
  rows = 2,
  nonce,
}: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [inlineStyle, setInlineStyle] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setInlineStyle({ transform: `translateX(-${currentPage * 100}%)` });
  }, [currentPage]);

  const mobileItemsPerRow = 1;
  const itemsPerPage = isMobile ? mobileItemsPerRow * 2 : itemsPerRow * rows;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    if (touchStart - touchEnd > swipeThreshold) {
      nextPage();
    }
    if (touchEnd - touchStart > swipeThreshold) {
      prevPage();
    }
  };

  const pages = Array.from({ length: totalPages }).map((_, pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
  });

  return (
    <div id="projects" className="relative w-full">
      <button
        onClick={prevPage}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#f686bd]/80 text-white rounded-lg hover:bg-[#f686bd] transition-colors w-8 h-40 flex items-center ${
          currentPage === 0 ? "hidden" : ""
        }`}
        aria-label="Previous page"
      >
        <IoChevronBackOutline />
      </button>
      <button
        onClick={nextPage}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#f686bd]/80 text-white rounded-lg hover:bg-[#f686bd] transition-colors w-8 h-40 flex items-center ${
          currentPage === totalPages - 1 ? "hidden" : ""
        }`}
        aria-label="Next page"
      >
        <IoChevronForwardOutline />
      </button>

      <div className="overflow-hidden clip">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={inlineStyle}
          nonce={nonce}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {pages.map((pageProjects, pageIndex) => (
            <div key={pageIndex} className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {pageProjects.map((project, index) => (
                  <ProjectCard key={`${pageIndex}-${index}`} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? "bg-[#d8e2dc]" : "bg-[#d8e2dc]/30"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
