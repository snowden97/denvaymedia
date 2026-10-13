import { hasLocale, langParams } from "@/i18n/config";
import { getDict } from "@/i18n";
import { ogSize, shareImage } from "@/lib/og";
import { resolvePrices, tok } from "@/lib/prices";

export const alt = "DenvayStream IPTV reseller program — Premium and Standard credit packs";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return langParams();
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : "en";
  const o = getDict(lang).og;
  return shareImage({ kicker: o.resellerKicker, title: resolvePrices(o.resellerTitle(tok("cheapestPack")), lang), footer: o.resellerFooter });
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
