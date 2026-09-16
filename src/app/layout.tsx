import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0c0f14",
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
        url: "/tux-bimi.png",
        width: 1200,
        height: 1200,
        alt: "Tux — Stenstromen BIMI mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/tux-bimi.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas text-ink min-h-svh flex flex-col`}
        data-nonce={nonce}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:items-center focus:min-h-11 focus:rounded-md focus:bg-surface focus:px-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-835MSCWR7N"
          strategy="lazyOnload"
          nonce={nonce ?? undefined}
        />
        <Script
          id="ga-inline"
          strategy="lazyOnload"
          nonce={nonce ?? undefined}
        >{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-835MSCWR7N');
`}</Script>
      </body>
    </html>
  );
}
