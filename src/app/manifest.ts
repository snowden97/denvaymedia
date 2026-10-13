import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""; // sub-folder on GitHub Pages, see next.config.ts

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Premium IPTV`,
    short_name: site.name,
    description: "Premium IPTV with 4K live channels, high-quality servers and a free 24-hour trial.",
    start_url: `${base}/`,
    display: "standalone",
    background_color: "#0a1633",
    theme_color: "#1557ff",
    icons: [
      { src: `${base}/icon`, sizes: "64x64", type: "image/png" },
      { src: `${base}/apple-icon`, sizes: "180x180", type: "image/png" },
    ],
  };
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
