"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectList";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import SectionHeader from "./SectionHeader";

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
}: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileItemsPerRow = 1;
  const itemsPerPage = isMobile ? mobileItemsPerRow * 2 : itemsPerRow * rows;
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage),
  );
  const safePage = Math.min(currentPage, totalPages - 1);
  const startIndex = safePage * itemsPerPage;
  const pageProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const nextPage = useCallback(() => {
    setAutoPlay(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setAutoPlay(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handlePageClick = (index: number) => {
    setAutoPlay(false);
    setCurrentPage(index);
  };

  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (!autoPlay || totalPages <= 1) return;

    const switchPage = () => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    autoPlayTimeoutRef.current = setTimeout(switchPage, 5000);

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [currentPage, totalPages, autoPlay]);
  const techFilters = ["All", "Go", "Rust", "React", "Kubernetes"];

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(0);

    switch (filter) {
      case "All":
        setFilteredProjects(projects);
        break;
      case "React":
        setFilteredProjects(
          projects.filter((project) =>
            project.badges.some((badge) => badge.name === "REACTJS"),
          ),
        );
        break;
      default:
        setFilteredProjects(
          projects.filter((project) =>
            project.badges.some((badge) => badge.name === filter.toUpperCase()),
          ),
        );
    }
  };

  return (
    <div className="relative w-full max-w-full">
      <SectionHeader
        index="02 / Work"
        title="Projects"
        description="Open source tools, apps, and experiments — with a lean toward Kubernetes, automation, and developer workflows."
      />
      <div className="flex flex-wrap gap-2 mb-8">
        {techFilters.map((filter, index) => (
          <button
            type="button"
            key={index}
            onClick={() => handleFilterChange(filter)}
            className={`inline-flex items-center px-4 min-h-11 text-sm rounded-full transition-colors font-medium ${
              activeFilter === filter
                ? "bg-accent text-canvas"
                : "bg-surface text-ink border border-line hover:border-accent/40"
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div
        key={`${activeFilter}-${safePage}`}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 fade-in-left"
      >
        {pageProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          type="button"
          onClick={prevPage}
          disabled={safePage === 0}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Previous page"
        >
          <IoChevronBackOutline className="w-5 h-5" aria-hidden />
        </button>
        {totalPages <= 8 ? (
          <div className="flex justify-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handlePageClick(index)}
                className="flex items-center justify-center min-w-11 min-h-11"
                aria-label={`Go to page ${index + 1}`}
                aria-current={safePage === index ? "page" : undefined}
              >
                <span
                  className={`h-2.5 rounded-full transition-all ${
                    safePage === index ? "w-6 bg-accent" : "w-2.5 bg-muted"
                  }`}
                  aria-hidden
                />
              </button>
            ))}
          </div>
        ) : (
          <p
            className="min-w-20 text-center text-sm text-muted tabular-nums"
            aria-live="polite"
          >
            {safePage + 1} / {totalPages}
          </p>
        )}
        <button
          type="button"
          onClick={nextPage}
          disabled={safePage === totalPages - 1}
          className="w-11 h-11 flex items-center justify-center rounded-full border border-line bg-surface text-ink hover:border-accent/50 hover:text-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Next page"
        >
          <IoChevronForwardOutline className="w-5 h-5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
