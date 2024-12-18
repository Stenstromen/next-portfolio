/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import BadgesList from './BadgesList'

export const runtime = "edge";

interface BadgeProps {
  name: string;
  src: string;
  nonce?: string;
}

export default function Badge({ name, src }: BadgeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const badge = BadgesList[name as keyof typeof BadgesList]

  // Determine size class based on badge dimensions
  const sizeClass = badge.width === "118.25px" ? "badge-md" : "badge-sm";
  const width = sizeClass === "badge-md" ? 118 : 83;
  const height = sizeClass === "badge-md" ? 43 : 30;

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className="relative">
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse w-${sizeClass} h-${sizeClass}`}
        />
      )}
      <div className={`w-${sizeClass} h-${sizeClass}`}>
        <img
          src={src}
          alt={`${name} badge`}
          width={width}
          height={height}
          className={`transition-opacity duration-200 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
    </div>
  );
}
