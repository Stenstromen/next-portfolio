import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
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
};

(async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
  }
})();

export default nextConfig;
