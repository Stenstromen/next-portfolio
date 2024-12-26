"use client";

import ScrollToTop from "./ScrollToTop";

import dynamic from "next/dynamic";

const BadgeGrid = dynamic(() => import("./BadgeGrid"), {
  loading: () => <div className="w-full h-[600px] bg-[#445066] animate-pulse"></div>
});

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
      <div className="absolute bottom-10 right-2">
        <BadgeGrid nonce={nonce} />
      </div>
      <ScrollToTop />
    </div>
  );
}
