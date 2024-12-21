/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";

interface BadgeProps {
  name: string;
  src: string;
  nonce?: string;
  width?: string;
  height?: string;
  priority?: boolean;
}

export default function Badge({ name, src, width, height, priority = false }: BadgeProps) {
  const [isLoading, setIsLoading] = useState(true);

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
          className={`absolute inset-0 bg-gray-200 animate-pulse w-${width} h-${height}`}
        />
      )}
      <div className={`w-${width} h-${height}`}>
        <img
          src={src}
          alt={`${name} badge`}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
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
