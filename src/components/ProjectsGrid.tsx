//import ProjectCarousel from './ProjectCarousel';
import ProjectList from "./ProjectList";
import { headers } from "next/headers";
import dynamic from "next/dynamic";

const ProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  loading: () => (
    <div className="w-full h-[600px] bg-[#445066] animate-pulse"></div>
  ),
});

export default async function ProjectsGrid() {
  const nonce = (await headers()).get("x-nonce");

  return (
    <div className="w-full py-8 bg-[#445066]">
      <div className="w-full px-4 md:max-w-[95%] mx-auto">
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
