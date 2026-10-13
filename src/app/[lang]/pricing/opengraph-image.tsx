import { hasLocale, langParams } from "@/i18n/config";
import { getDict } from "@/i18n";
import { ogSize, shareImage } from "@/lib/og";
import { planName, plans } from "@/lib/plans";
import { resolvePrices, tok } from "@/lib/prices";

export const alt = "DenvayStream IPTV subscription plans and prices";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return langParams();
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  const lang = hasLocale(raw) ? raw : "en";
  const o = getDict(lang).og;
  const r = (t: string) => resolvePrices(t, lang);
  return shareImage({ kicker: o.pricingKicker, title: r(o.pricingTitle(tok("cheapestPlan"))), footer: r(plans.map((p) => `${planName(lang, p)} ${tok(`plan:${p.months}`)}`).join(" · ")) });
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
