"use client";

import ScrollToTop from "./ScrollToTop";
import dynamic from "next/dynamic";

const BadgeGrid = dynamic(() => import("./BadgeGrid"), {
  loading: () => <div className="w-full h-[600px] bg-[#445066] animate-pulse"></div>
});

interface FirstPageProps {
  nonce?: string;
}

export default function FirstPage({ nonce }: FirstPageProps) {
  return (
    <div id="home" className="overflow-x-hidden bg-[#4f5d75] min-h-screen relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14">
        {/* Main Content Card */}
        <div className="bg-[#2d3142] p-8 rounded-3xl shadow-lg transition-all hover:scale-[1.01] max-w-3xl mb-6 lg:mb-0">
          <div className="fade-in-left z-10">
            <h1 className="text-[#d8e2dc] pl-[5%] pt-[3%] text-[70px]">Hello!</h1>
            <h2 className="text-[#d8e2dc] pl-[5%] text-[35px]">
              I&apos;m Filip.<br />DevOps by day, programmer by passion.
            </h2>
            <h3 className="text-[#d8e2dc] pl-[5%]">
              - Based in Stockholm, Sweden.
            </h3>
          </div>
        </div>
      </div>

      {/* Badge Grid - Absolute positioning only on desktop */}
      <div className="lg:absolute lg:bottom-10 lg:right-2 px-4 sm:px-6 lg:px-0">
        <BadgeGrid nonce={nonce} />
      </div>
      <ScrollToTop />
    </div>
  );
}
