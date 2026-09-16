import ProjectList from "./ProjectList";
import { headers } from "next/headers";
import dynamic from "next/dynamic";

const ProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  loading: () => (
    <div className="w-full h-[600px] bg-canvas animate-pulse rounded-xl"></div>
  ),
});

export default async function ProjectsGrid() {
  const nonce = (await headers()).get("x-nonce");

  return (
    <div id="projects" className="w-full py-20 sm:py-24 bg-canvas">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
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
