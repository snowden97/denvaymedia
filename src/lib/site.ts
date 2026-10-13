import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import type { PackId } from "@/lib/prices";
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/whatsapp";

export { whatsappLink };

export const site = {
  name: "DenvayStream",
  domain: "denvaystream.com",
  url: "https://denvaystream.com",
  email: "denvaymedia@protonmail.com",
  // WhatsApp number: change it in src/lib/whatsapp.ts
  whatsapp: WHATSAPP_NUMBER,
  description: "Premium IPTV service with live TV channels, movies and series in 4K, high-quality anti-freeze servers, a free 24-hour trial and 24/7 WhatsApp support.",
  // Add the full URLs of your official social profiles (Facebook, Instagram, TikTok, X, YouTube…).
  // They are used in structured data so Google and AI assistants can connect your brand.
  social: [] as string[],
  // Blog author shown on every article. For stronger SEO (E-E-A-T), replace with a real person,
  // e.g. { name: "Your Name", role: "IPTV setup specialist", bio: "…", isPerson: true }.
  author: {
    name: "DenvayStream Support Team",
    role: "IPTV setup & support specialists",
    bio: "Our support team helps customers install IPTV and get the best picture on Firestick, Smart TVs, Android, Apple and MAG devices every day. These guides are based on the questions we answer most.",
    isPerson: false,
  },
};

export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

/** WhatsApp links with pre-filled messages in the visitor's language. */
export function getWa(lang: Locale) {
  const m = getDict(lang).wa;
  return {
    contact: whatsappLink(m.contact),
    trial: whatsappLink(m.trial),
    reseller: whatsappLink(m.reseller),
    review: whatsappLink(m.review),
    // Order messages keep a [[price]] token: <WaLink> fills it in the visitor's currency.
    packMessage: (pack: string, id: PackId) => m.resellerPack(pack, `[[pack:${id}]]`),
    planMessage: (plan: string, months: number) => m.plan(plan, `[[plan:${months}]]`),
  };
}
