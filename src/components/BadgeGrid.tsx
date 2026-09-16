"use client";

import { useState } from "react";
import Badge from "./Badge";
import BadgesList from "./BadgesList";

interface BadgeGridProps {
  nonce?: string;
}

export default function BadgeGrid({ nonce }: BadgeGridProps) {
  const [showAllBadges, setShowAllBadges] = useState(false);

  const initialBadges = [
    "HTML",
    "CSS",
    "TS",
    "REACTJS",
    "GO",
    "RUST",
    "NODEJS",
    "PYTHON",
    "KUBERNETES",
    "DOCKER",
    "LINUX",
    "GITHUBACTIONS",
  ];

  const badgesToShow = showAllBadges
    ? Object.entries(BadgesList)
    : Object.entries(BadgesList).filter(([key]) => initialBadges.includes(key));

  return (
    <div
      data-testid="badge-grid"
      data-nonce={nonce}
      className="bg-surface p-6 rounded-2xl border border-line shadow-lg transition-colors hover:border-accent/35"
    >
      {!showAllBadges && (
        <h2 data-testid="ninja-icon" className="text-sm font-mono uppercase tracking-widest text-accent mb-4">
          Stack
        </h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {badgesToShow.map(([key, badge]) => (
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

      {!showAllBadges && (
        <button
          data-testid="show-more-badges"
          onClick={() => setShowAllBadges(true)}
          className="mt-4 px-4 py-2 bg-canvas text-ink border border-line rounded-lg hover:border-accent/50 transition-colors text-sm"
        >
          Show all
        </button>
      )}
    </div>
  );
}
