import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: false,
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // Empty but correctly structured configuration
  },
  serverExternalPackages: [],
};

export default nextConfig;
