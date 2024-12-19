import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {ProjectList.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
        />
      ))}
    </div>
  );
} 