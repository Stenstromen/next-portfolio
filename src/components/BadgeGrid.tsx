'use client'

export const runtime = "edge";

import Badge from './Badge'
import BadgesList from './BadgesList'

interface BadgeGridProps {
  nonce?: string;
}

export default function BadgeGrid({ nonce }: BadgeGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 pl-2 pt-2">
      {Object.entries(BadgesList).map(([key, badge]) => (
        <div key={key} className="flex justify-start items-center">
          <Badge name={badge.name} src={badge.src} nonce={nonce} />
        </div>
      ))}
    </div>
  )
} 