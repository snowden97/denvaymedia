import { localeInfo, localePath, locales } from "@/i18n/config";
import { getDict } from "@/i18n";
import { perMonth, planName, plans } from "@/lib/plans";
import { posts } from "@/lib/posts";
import { creditPacks, packId, packName } from "@/lib/reseller";
import { currencies, resolvePrices, tok } from "@/lib/prices";
import { site } from "@/lib/site";

const en = getDict("en");

export const dynamic = "force-static";

/** llms.txt — a plain-text summary of the site for AI assistants and answer engines (https://llmstxt.org). */
export function GET() {
  const u = (path: string) => `${site.url}${path}`;
  const r = (t: string) => resolvePrices(t, "en"); // US dollars
  const body = `# ${site.name}

> ${en.meta.orgDescription}

${site.name} sells IPTV subscriptions and reseller credit packs. All orders, free trials and support are handled on WhatsApp (+${site.whatsapp}) or by email (${site.email}). Prices below are in US dollars; the website shows fixed local prices in the visitor's currency (${currencies.join(", ")}).

## Key facts
- Free trial: 24 hours, no payment details required, one per customer/household/device
- Money-back guarantee: 7 days from first purchase (see refund policy for conditions)
- Contracts: none — plans do not renew automatically
- Connections: one device streaming at a time per subscription
- Quality: 4K, FHD and HD streams on high-quality anti-freeze servers, monitored 24/7
- Features: ${en.plans.features.join(", ")}
- Compatible devices: Amazon Firestick, Samsung and LG Smart TVs, Android TV boxes, iPhone/iPad, Android phones, Apple TV, MAG boxes, Windows and Mac
- Compatible apps: IPTV Smarters Pro, TiviMate, IBO Player, GSE Smart IPTV, Kodi, VLC (M3U and Xtream Codes)
- Support: 24/7 on WhatsApp

## Subscription plans
${plans.map((p) => r(`- ${planName("en", p)}: ${tok(`plan:${p.months}`)} (${perMonth("en", p)})${p.badge ? ` — ${en.common.badges[p.badge]}` : ""}`)).join("\n")}

## Reseller credit packs (1 credit = 1 month for one customer)
${creditPacks.map((p) => r(`- ${packName("en", p)}: ${tok(`pack:${packId(p)}`)} (${tok(`credit:${packId(p)}`)} per credit)`)).join("\n")}

## Languages
The whole website is available in ${locales.length} languages:
${locales.map((l) => `- ${localeInfo[l].name}: ${site.url}${localePath(l, "/")}`).join("\n")}

## Main pages
- [Home](${u("/")}): overview, features, plans and FAQ
- [Pricing](${u("/pricing")}): all subscription plans, server details and pricing FAQ
- [Free trial](${u("/free-trial")}): how to get a free 24-hour IPTV trial
- [Reseller program](${u("/reseller")}): credit packs, profit examples and reseller FAQ
- [Setup guides](${u("/setup")}): step-by-step IPTV setup for every device
- [IPTV glossary](${u("/glossary")}): simple explanations of IPTV words (M3U, EPG, MAC address…)
- [About](${u("/about")}): who we are and how we work
- [Blog](${u("/blog")}): IPTV guides and tutorials

## Guides
${posts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${p.excerpt}`).join("\n")}

## Policies
- [Terms of Service](${u("/legal/terms-of-service")})
- [Privacy Policy](${u("/legal/privacy-policy")})
- [Refund Policy](${u("/legal/refund-policy")})
- [DMCA Policy](${u("/legal/dmca")})

## Contact
- WhatsApp: +${site.whatsapp}
- Email: ${site.email}
- Website: ${site.url}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
