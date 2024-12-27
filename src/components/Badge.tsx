/* eslint-disable @next/next/no-img-element */
"use client";

interface BadgeProps {
  name: string;
  src: string;
  nonce?: string;
  width?: string;
  height?: string;
}

export default function Badge({ name, src, width, height }: BadgeProps) {
  return (
    <img
      src={src}
      alt={`${name} badge`}
      decoding="async"
      loading="eager"
      width={width}
      height={height}
      className="w-auto h-auto"
    />
  );
}
