"use client";

import { TouchEvent, useEffect, useLayoutEffect, useRef } from "react";
import type { StaticImageData } from "next/image";
import lfs458 from "../img/lfs458.png";
import lfs260 from "../img/lfs260.png";
import lfs157 from "../img/lfs157.png";
import lfel1009 from "../img/lfel1009.png";
import lfel1002 from "../img/lfel1002.png";
import lfs256 from "../img/lfs256.png";

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

  const defaultBadges: Badge[] =
    badges.length > 0
      ? badges
      : [
          {
            id: "1",
            name: "LFS458: Kubernetes Administration",
            imageUrl: lfs458,
            issuer: "Linux Foundation",
            earnedDate: "2020-12-02",
            url: "https://www.credly.com/earner/earned/badge/9fc02ed8-b135-4638-acb0-e1f8b7c9047b",
          },
          {
            id: "2",
            name: "LFS260: Kubernetes Security Essentials",
            imageUrl: lfs260,
            issuer: "Linux Foundation",
            earnedDate: "2025-01-27",
            url: "https://www.credly.com/earner/earned/badge/ad0ce997-995a-4353-a4a6-837f4bbe0804",
          },
          {
            id: "3",
            name: "LFS157: Introduction to Serverless on Kubernetes",
            imageUrl: lfs157,
            issuer: "Linux Foundation",
            earnedDate: "2025-02-06",
            url: "https://www.credly.com/earner/earned/badge/6e143eec-e7d2-4505-a60e-456d1dd1cbad",
          },
          {
            id: "4",
            name: "LFEL1009: Getting Started with OpenTofu",
            imageUrl: lfel1009,
            issuer: "Linux Foundation",
            earnedDate: "2025-03-20",
            url: "https://www.credly.com/earner/earned/badge/bdcb813c-3f97-47c0-af1a-9e587ab9b202",
          },
          {
            id: "5",
            name: "LFEL1002: Getting Started with Rust",
            imageUrl: lfel1002,
            issuer: "Linux Foundation",
            earnedDate: "2025-03-20",
            url: "https://www.credly.com/earner/earned/badge/d49310d4-1adf-4d36-9f96-6d3c3832ef20",
          },
          {
            id: "6",
            name: "LFS256: DevOps and Workflow Management with Argo",
            imageUrl: lfs256,
            issuer: "Linux Foundation",
            earnedDate: "2025-06-19",
            url: "https://www.credly.com/earner/earned/badge/68bf45de-9e84-4115-be76-259ad903a739",
          },
        ];

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
    const dragDistance =
      touchStartRef.current - e.targetTouches[0].clientX;
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
                    className="bg-[#2d3142] rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 flex-shrink-0 w-64"
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
