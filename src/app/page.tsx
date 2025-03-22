import ProjectsGrid from "@/components/ProjectsGrid";
import FirstPage from "../components/FirstPage";
import { headers } from "next/headers";
import Achievements from "@/components/Achievements";
export const runtime = "edge";

export default async function Home() {
  const nonce = (await headers()).get("x-nonce");

  return (
    <div>
      <FirstPage nonce={nonce || undefined} />
      <Achievements nonce={nonce || undefined} />
      <ProjectsGrid />
    </div>
  );
}
