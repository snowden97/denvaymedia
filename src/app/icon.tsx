import { logoImage } from "@/lib/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return logoImage(64);
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
