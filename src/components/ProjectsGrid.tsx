import ProjectCarousel from './ProjectCarousel';
import ProjectList from './ProjectList';

export default function ProjectsGrid() {
  return (
    <div className="w-full py-4">
      <ProjectCarousel 
        projects={ProjectList}
        itemsPerRow={4}
        rows={2}
      />
    </div>
  );
} 