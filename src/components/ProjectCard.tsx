/* eslint-disable @next/next/no-img-element */
'use client'

import { FaGithub } from 'react-icons/fa';
import Badge from './Badge';

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

export default function ProjectCard({ image, title, description, link, github, badges }: ProjectCardProps) {
  const humanLink = link
    .replace(/https?:\/\//, '')
    .replace('github.com/Stenstromen/', '')
    .replace(/apps\.apple\.com\/[^ ]+/g, 'View on Apple AppStore');

  return (
    <div className="group relative bg-[#2d3142] rounded-lg p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
        <a href={link} target="_blank" rel="noreferrer" className="block">
          <img
            src={typeof image === 'string' ? image : image.src}
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
      <p className="text-sm text-white/90 mb-4 flex-grow leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {badges.map((badge, index) => (
          <Badge key={index} name={badge.name} src={badge.src} />
        ))}
      </div>
      
      <div className="space-y-2 mt-auto">
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="block text-white hover:text-white/90 transition-colors"
        >
          <span className="text-sm">→ {humanLink}</span>
        </a>
        
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" /> View on GitHub
          </a>
        )}
      </div>
    </div>
  );
} 