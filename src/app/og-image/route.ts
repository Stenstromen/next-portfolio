import { NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// Cloudflare Hotlink Protection 403s *.png when Referer is another site.
// OG preview tools load the image that way, so this extensionless URL bypasses it.

const OG_IMAGE_HEADERS = {
  "Content-Type": "image/png",
  "Cache-Control": "public, max-age=86400",
  "Access-Control-Allow-Origin": "*",
  "Cross-Origin-Resource-Policy": "cross-origin",
};

async function loadOgImage(request: Request): Promise<Uint8Array> {
  try {
    const { env } = await getCloudflareContext({ async: true });
    if (env.ASSETS) {
      const asset = await env.ASSETS.fetch(
        new Request(new URL("/og-image.png", request.url)),
      );
      if (asset.ok) {
        return new Uint8Array(await asset.arrayBuffer());
      }
    }
  } catch {
    // Local `next dev` has no ASSETS binding.
  }

  const { readFile } = await import("node:fs/promises");
  const { join } = await import("node:path");
  return readFile(join(process.cwd(), "public/og-image.png"));
}

export async function GET(request: Request) {
  const image = await loadOgImage(request);
  return new NextResponse(image, { headers: OG_IMAGE_HEADERS });
}
