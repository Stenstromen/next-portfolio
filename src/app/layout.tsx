import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'

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

const siteDescription =
  "Filip Stenström — platform and DevOps engineer in Stockholm. Deep Kubernetes experience, Linux Foundation certifications, GitOps with Argo, infrastructure as code (OpenTofu), and open source tools for clusters and delivery pipelines.";

export const metadata: Metadata = {
  metadataBase: new URL("https://stenstromen.se"),
  title: "Stenstromen — Platform & Kubernetes",
  description: siteDescription,
  keywords:
    "platform engineer, DevOps, Kubernetes, Linux Foundation, GitOps, Argo, OpenTofu, Terraform, kubectl plugins, Stockholm, open source, Go, Rust, React",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Stenstromen — Platform & Kubernetes",
    description: siteDescription,
    url: "https://stenstromen.se",
    siteName: "Stenstromen",
    images: [
      {
        url: "/og-image.png",
        width: 512,
        height: 512,
        alt: "Filip Stenström — platform engineer and Kubernetes practitioner",
      },
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
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics nonce={nonce || ''} gaId="G-835MSCWR7N" />
    </html>
  );
}
