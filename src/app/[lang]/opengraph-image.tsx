import { hasLocale, langParams } from "@/i18n/config";
import { getDict } from "@/i18n";
import { ogSize, shareImage } from "@/lib/og";

export const alt = "DenvayStream — Premium IPTV with 4K live channels and a free 24-hour trial";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return langParams();
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const o = getDict(hasLocale(lang) ? lang : "en").og;
  return shareImage({ kicker: o.defaultKicker, title: o.defaultTitle, footer: o.defaultFooter });
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
