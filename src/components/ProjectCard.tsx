'use client'

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

  console.log(image);

  return (
    <div className="group relative bg-[#2d3142] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
        <a href={link} target="_blank" rel="noreferrer" className="block">
          <img
            src={typeof image === 'string' ? image : image.src}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={400}
          />
        </a>
      </div>
      
      <h3 className="text-xl font-bold text-[#d8e2dc] mb-2">{title}</h3>
      <p className="text-[#d8e2dc]/80 text-sm mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {badges.map((badge, index) => (
          <Badge key={index} name={badge.name} src={badge.src} />
        ))}
      </div>
      
      <div className="space-y-2">
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer"
          className="block text-[#d8e2dc] hover:text-white transition-colors"
        >
          <span className="text-sm">→ {humanLink}</span>
        </a>
        
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noreferrer"
            className="block text-sm text-[#d8e2dc]/60 hover:text-white transition-colors"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
} 