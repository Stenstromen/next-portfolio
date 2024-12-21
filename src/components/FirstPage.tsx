"use client";

import BadgeGrid from "./BadgeGrid";
import ScrollToTop from "./ScrollToTop";

export const runtime = "edge";
interface FirstPageProps {
  nonce?: string;
}

export default function FirstPage({ nonce }: FirstPageProps) {
  return (
    <div id="home" className="overflow-x-hidden bg-[#4f5d75] min-h-[150vh] sm:min-h-screen relative">
      <div className="fade-in-left z-10 relative">
        <h1 className="HomeH1">Hello!</h1>
        <h2 className="HomeH2">
          I&apos;m Filip - DevOps Engineer and Hobbyist Programmer.
        </h2>
        <h3 className="HomeH3"> - Based in Stockholm, Sweden.</h3>
      </div>
      <div className="absolute bottom-10 right-0">
        <BadgeGrid nonce={nonce} />
      </div>
      <ScrollToTop />
    </div>
  );
}
