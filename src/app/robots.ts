import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://denvaystream.com/sitemap.xml" };
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
