import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * NEXT_PUBLIC_BASE_PATH is set by the deploy workflow (from
 * actions/configure-pages): "" when the site is served from a custom domain
 * such as carboncoach.co.uk, or "/<repo>" when served from
 * <user>.github.io/<repo>. Locally it is unset, so `npm run dev` works at /.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    // GitHub Pages has no image optimisation server.
    unoptimized: true,
  },
};

export default nextConfig;
