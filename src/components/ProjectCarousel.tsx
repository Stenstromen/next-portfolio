'use client';

import { useState, useCallback } from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectList';

interface ProjectCarouselProps {
  projects: Project[];
  itemsPerRow: number;
  rows: number;
}

export default function ProjectCarousel({ projects, itemsPerRow = 4, rows = 2 }: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  const itemsPerPage = itemsPerRow * rows;
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);
  
  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Calculate all pages content
  const pages = Array.from({ length: totalPages }).map((_, pageIndex) => {
    const startIndex = pageIndex * itemsPerPage;
    return projects.slice(startIndex, startIndex + itemsPerPage);
  });

  return (
    <div className="relative w-full px-4">
      {/* Navigation Buttons */}
      <button
        onClick={prevPage}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#2d3142]/80 text-white rounded-r-lg hover:bg-[#2d3142] transition-colors"
        aria-label="Previous page"
      >
        ←
      </button>
      <button
        onClick={nextPage}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-[#2d3142]/80 text-white rounded-l-lg hover:bg-[#2d3142] transition-colors"
        aria-label="Next page"
      >
        →
      </button>

      {/* Projects Grid */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((pageProjects, pageIndex) => (
            <div 
              key={pageIndex}
              className="w-full flex-shrink-0"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {pageProjects.map((project, index) => (
                  <ProjectCard key={`${pageIndex}-${index}`} {...project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentPage === index ? 'bg-[#d8e2dc]' : 'bg-[#d8e2dc]/30'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 