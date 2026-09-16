"use client";

import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import achievements from "./achievementsData";
import { formatIsoDateForDisplay } from "@/lib/formatIsoDate";
import SectionHeader from "./SectionHeader";

interface Badge {
  id: string;
  name: string;
  imageUrl: StaticImageData;
  issuer: string;
  earnedDate: string;
  url: string;
}

interface AchievementsProps {
  badges?: Badge[];
  nonce?: string;
}

export default function Achievements({
  badges = [],
}: AchievementsProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [isOnscreen, setIsOnscreen] = useState(false);

  const defaultBadges: Badge[] = badges.length > 0 ? badges : achievements;
  const allBadges = [...defaultBadges, ...defaultBadges];

  useEffect(() => {
    const section = document.getElementById("achievements");
    if (!section || typeof IntersectionObserver === "undefined") {
      setIsOnscreen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnscreen(entry.isIntersecting);
      },
      { rootMargin: "80px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <div id="achievements" className="w-full py-20 sm:py-24 bg-canvas-2 border-y border-line">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionHeader
          index="01 / Credentials"
          title="Certifications"
          description="Linux Foundation and related credentials — Kubernetes operations, security, GitOps with Argo, and infrastructure as code."
        />
        <div
          className="achievements-marquee relative w-full max-w-full overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div
            className="achievements-marquee-fade achievements-marquee-fade-left"
            aria-hidden
          />
          <div
            className="achievements-marquee-fade achievements-marquee-fade-right"
            aria-hidden
          />
          <div className="overflow-hidden">
            <div
              className={`flex gap-5 flex-nowrap achievements-marquee-track${isPaused || !isOnscreen ? " is-paused" : ""}`}
              onTouchStart={pause}
              onTouchEnd={resume}
              onTouchCancel={resume}
            >
              {allBadges.map((badge, index) => (
                <a
                  key={`${badge.id}-${index}`}
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface rounded-xl overflow-hidden border border-line hover:border-accent/40 transition-colors shrink-0 w-60"
                >
                  <div className="p-5 flex flex-col items-center text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element -- next/image uses blocked inline styles under style-src-attr */}
                    <img
                      src={badge.imageUrl.src}
                      alt={badge.name}
                      width={192}
                      height={192}
                      loading="lazy"
                      decoding="async"
                      className="object-contain mb-4 w-40 h-40"
                    />
                    <p className="text-sm font-medium text-ink leading-snug line-clamp-2 mb-1">
                      {badge.name}
                    </p>
                    <p className="text-xs text-muted mb-0.5">
                      {badge.issuer}
                    </p>
                    <p className="text-xs text-subtle tabular-nums font-mono">
                      {formatIsoDateForDisplay(badge.earnedDate)}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
