/* eslint-disable @next/next/no-img-element */
"use client";

import { FaGithub } from "react-icons/fa";
import Badge from "./Badge";

interface ProjectCardProps {
  image: string | { src: string };
  title: string;
  description: string;
  link: string;
  github?: string;
  badges: Array<{
    name: string;
    src: string;
    width?: string;
    height?: string;
  }>;
}

export default function ProjectCard({
  image,
  title,
  description,
  link,
  github,
  badges,
}: ProjectCardProps) {

  return (
    <div className="group relative bg-surface rounded-xl border border-line p-3.5 transition-colors duration-300 hover:border-accent/35 h-full flex flex-col">
      <div className="aspect-square w-full overflow-hidden rounded-lg mb-4 border border-line/80 bg-canvas">
        <a href={link} target="_blank" rel="noreferrer" className="block h-full">
          <img
            src={typeof image === "string" ? image : image.src}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            width={300}
            height={300}
          />
        </a>
      </div>

      <h3 className="text-lg font-semibold text-ink mb-2 tracking-tight">{title}</h3>
      <p className="text-sm text-muted mb-4 grow leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {badges.map((badge, index) => (
          <Badge key={index} name={badge.name} src={badge.src} />
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto flex-wrap">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-accent hover:text-ink transition-colors underline-offset-4 hover:underline"
          aria-label={`Open live demo or site for ${title}`}
        >
          Demo
        </a>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
            aria-label={`View source code for ${title} on GitHub`}
          >
            <FaGithub className="w-4 h-4 shrink-0" aria-hidden />
            Source
          </a>
        )}
      </div>
    </div>
  );
}
