"use client";

import ScrollToTop from "./ScrollToTop";

const focusAreas = [
  "Kubernetes",
  "Linux",
  "CI/CD",
  "OpenTofu",
  "GitOps",
] as const;

interface FirstPageProps {
  nonce?: string;
}

export default function FirstPage({ nonce }: FirstPageProps) {
  return (
    <div
      id="home"
      data-nonce={nonce}
      className="overflow-x-hidden bg-[#4f5d75] min-h-screen relative py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14">
        <div className="bg-[#2d3142] p-6 sm:p-8 rounded-3xl shadow-lg transition-transform hover:scale-[1.01] max-w-3xl mb-6 lg:mb-0">
          <div className="fade-in-left z-10 space-y-4 sm:space-y-5 pl-[4%] sm:pl-[5%] pr-2 pt-[2%] sm:pt-[3%]">
            <h1 className="text-[#d8e2dc] text-[clamp(2rem,6vw,4.25rem)] leading-tight font-semibold tracking-tight">
              Hello, I&apos;m Filip.
            </h1>
            <h2 className="text-[#d8e2dc] text-[clamp(1.125rem,2.8vw,1.875rem)] leading-snug font-medium text-balance">
              Platform engineer with deep Kubernetes experience — automation,
              reliability, and shipping change safely.
            </h2>
            <p className="text-[#d8e2dc]/90 text-[clamp(0.95rem,1.6vw,1.125rem)] leading-relaxed max-w-2xl">
              I build and operate internal platforms, clusters, and delivery
              pipelines, and I still love turning ideas into code on the side.
            </p>
            <p className="text-[#d8e2dc]/85 text-[clamp(0.9rem,1.4vw,1rem)]">
              Based in Stockholm, Sweden.
            </p>
            <ul
              className="flex flex-wrap gap-2 pt-1 list-none"
              aria-label="Focus areas"
            >
              {focusAreas.map((label) => (
                <li key={label}>
                  <span className="inline-block rounded-full border border-[#5c677a] bg-[#363b4f] px-3 py-1 text-xs sm:text-sm text-[#eceff1]">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
}
