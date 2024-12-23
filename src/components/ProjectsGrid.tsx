import ProjectCarousel from './ProjectCarousel';
import ProjectList from './ProjectList';
import { headers } from 'next/headers';

export default async function ProjectsGrid() {
  const nonce = (await headers()).get('x-nonce');
  
  return (
    <div className="w-full py-8 bg-[#445066]">
      <div className="max-w-[95%] mx-auto">
        <ProjectCarousel 
          projects={ProjectList}
          itemsPerRow={4}
          rows={2}
          nonce={nonce || undefined}
        />
      </div>
    </div>
  );
} 