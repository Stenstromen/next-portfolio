"use client";

import { TouchEvent, useEffect, useLayoutEffect, useRef } from "react";
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
  nonce,
}: AchievementsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const isPausedRef = useRef(false);
  const touchStartRef = useRef(0);

  const defaultBadges: Badge[] = badges.length > 0 ? badges : achievements;

  const allBadges = [...defaultBadges, ...defaultBadges];

  const applyScrollVar = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.style.setProperty(
      "--achievements-scroll",
      `${scrollPositionRef.current}px`,
    );
  };

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (el && nonce) {
      el.setAttribute("nonce", nonce);
    }
  }, [nonce]);

  useEffect(() => {
    let animationId: number;
    let lastTimestamp = 0;

    const scroll = (timestamp: number) => {
      if (!isPausedRef.current) {
        if (lastTimestamp !== 0) {
          const delta = timestamp - lastTimestamp;
          const pixelsPerSecond = 60;
          const pixelsToMove = (pixelsPerSecond * delta) / 1000;

          const scrollContainer = scrollRef.current;
          if (scrollContainer) {
            const containerWidth = scrollContainer.scrollWidth / 2;
            const newPosition = scrollPositionRef.current + pixelsToMove;
            scrollPositionRef.current =
              newPosition >= containerWidth ? 0 : newPosition;
            applyScrollVar();
          }
        }
        lastTimestamp = timestamp;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleTouchStart = (e: TouchEvent) => {
    isPausedRef.current = true;
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const dragDistance = touchStartRef.current - e.targetTouches[0].clientX;
    scrollPositionRef.current += dragDistance * 0.5;
    touchStartRef.current = e.targetTouches[0].clientX;
    applyScrollVar();
  };

  const handleTouchEnd = () => {
    isPausedRef.current = false;
  };

  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <div id="achievements" className="w-full py-20 sm:py-24 bg-canvas-2 border-y border-line">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <SectionHeader
          index="01 / Credentials"
          title="Certifications"
          description="Linux Foundation and related credentials — Kubernetes operations, security, GitOps with Argo, and infrastructure as code."
        />
        <div className="relative w-full max-w-full overflow-hidden edge-fade">
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={scrollRef}
              className="flex achievements-marquee-track"
              nonce={nonce}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="flex gap-5 flex-nowrap">
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
    </div>
  );
}
