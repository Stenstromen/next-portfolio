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
    <div className="group relative bg-[#2d3142] rounded-lg p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
        <a href={link} target="_blank" rel="noreferrer" className="block">
          <img
            src={typeof image === "string" ? image : image.src}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={300}
            height={300}
          />
        </a>
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-[#eceff1] mb-4 grow leading-relaxed">
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
          className="text-base font-medium text-[#f686bd] hover:text-[#ffb3d9] transition-colors underline-offset-4 hover:underline"
          aria-label={`Open live demo or site for ${title}`}
        >
          Demo
        </a>

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-[#e3e7ea] hover:text-white transition-colors inline-flex items-center gap-1.5"
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
