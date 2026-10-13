import type { NextConfig } from "next";

/**
 * Static website for GitHub Pages: `npm run build` writes ready-made files to the /out folder.
 *
 * BASE_PATH = the sub-folder the site lives in:
 *   - "/denvaymedia" while it is served at https://snowden97.github.io/denvaymedia/
 *   - "" (empty) once your own domain (denvaystream.com) is connected
 * It is set in .github/workflows/deploy.yml — change it there, not here.
 *
 * (GitHub Pages cannot send custom security headers, so none are configured here.)
 */
const basePath = (process.env.BASE_PATH ?? "").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // /fr/pricing/ → /fr/pricing/index.html
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
