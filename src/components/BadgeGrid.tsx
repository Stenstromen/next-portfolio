"use client";

import Badge from "./Badge";
import BadgesList from "./BadgesList";

interface BadgeGridProps {
  nonce?: string;
}

export default function BadgeGrid({ nonce }: BadgeGridProps) {
  return (
    <div data-testid="badge-grid" className="bg-[#f686bd] p-6 rounded-3xl shadow-lg transition-all hover:scale-[1.01]">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Object.entries(BadgesList).map(([key, badge]) => (
          <div key={key} className="flex justify-start items-center">
            <Badge
              name={badge.name}
              src={badge.src}
              width={badge.width}
              height={badge.height}
              nonce={nonce}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
