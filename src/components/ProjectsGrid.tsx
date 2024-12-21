import ProjectCarousel from './ProjectCarousel';
import ProjectList from './ProjectList';
import { headers } from 'next/headers';

export default async function ProjectsGrid() {
  const nonce = (await headers()).get('x-nonce');
  
  return (
    <div className="w-full py-4">
      <ProjectCarousel 
        projects={ProjectList}
        itemsPerRow={4}
        rows={2}
        nonce={nonce || undefined}
      />
    </div>
  );
} 