"use client";

import { TouchEvent, useEffect, useLayoutEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import achievements from "./achievementsData";

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
    <div id="achievements" className="w-full py-12 bg-[#364055]">
      <div className="w-full px-4 sm:px-6 max-w-screen-2xl mx-auto">
        <div className="relative w-full max-w-full overflow-hidden">
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
              <div className="flex gap-6 flex-nowrap">
                {allBadges.map((badge, index) => (
                  <a
                    key={`${badge.id}-${index}`}
                    href={badge.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2d3142] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 shrink-0 w-64"
                  >
                    <div className="p-4 flex flex-col items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element -- next/image uses blocked inline styles under style-src-attr */}
                      <img
                        src={badge.imageUrl.src}
                        alt={badge.name}
                        width={192}
                        height={192}
                        loading="lazy"
                        decoding="async"
                        className="object-contain mb-3 w-48 h-48"
                      />
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
