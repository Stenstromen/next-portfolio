"use client";

import { useState, TouchEvent, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number>(0);

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

  useEffect(() => {
    let animationId: number;
    let lastTimestamp = 0;

    const scroll = (timestamp: number) => {
      if (!isPaused) {
        if (lastTimestamp !== 0) {
          const delta = timestamp - lastTimestamp;
          const pixelsPerSecond = 60;
          const pixelsToMove = (pixelsPerSecond * delta) / 1000;

          setScrollPosition((prev) => {
            const scrollContainer = scrollRef.current;
            if (!scrollContainer) return prev;

            const containerWidth = scrollContainer.scrollWidth / 2;
            const newPosition = prev + pixelsToMove;

            if (newPosition >= containerWidth) {
              return 0;
            }

            return newPosition;
          });
        }
        lastTimestamp = timestamp;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const handleTouchStart = (e: TouchEvent) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const dragDistance = touchStart - e.targetTouches[0].clientX;
    setScrollPosition((prev) => prev + dragDistance * 0.5);

    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
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
              className="flex"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
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
                      <div className="relative w-48 h-48 mb-3">
                        <Image
                          src={badge.imageUrl}
                          alt={badge.name}
                          fill
                          sizes="256px"
                          className="object-contain"
                        />
                      </div>
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
