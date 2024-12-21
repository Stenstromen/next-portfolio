import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

export const runtime = "edge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { 
  title: "Stenstromen's Portfolio",
  description: "Stenstromen's Portfolio",
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
    </html>
  );
}
