import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#2d3142",
}

export const metadata: Metadata = { 
  metadataBase: new URL("https://stenstromen.se"),
  title: "Stenstromen",
  description: "Explore my personal portfolio showcasing my projects in HTML, CSS, JavaScript, ReactJS, ReactTS, React Native, and Golang. Get insights into my expertise in Linux, Docker, and Kubernetes.",
  keywords: "personal portfolio, HTML projects, CSS projects, JavaScript projects, ReactJS projects, ReactTS projects, React Native projects, Golang projects, Linux expertise, Docker knowledge, Kubernetes skills",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Stenstromen",
    description: "Explore my personal portfolio showcasing my projects in HTML, CSS, JavaScript, ReactJS, ReactTS, React Native, and Golang. Get insights into my expertise in Linux, Docker, and Kubernetes.",
    url: "https://stenstromen.se",
    siteName: "Stenstromen",
    images: [
      { url: "/og-image.png", width: 512, height: 512, alt: "Stenstromen's Portfolio" },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce");
  return (
    <html lang="en">
      <head>
        <script nonce={nonce || undefined} />
        <style nonce={nonce || undefined} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-nonce={nonce}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics nonce={nonce || ''} gaId="G-835MSCWR7N" />
    </html>
  );
}
