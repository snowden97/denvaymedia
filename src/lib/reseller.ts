import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { packPrices, type PackId } from "@/lib/prices";

export type ServerType = "Premium" | "Standard";

export type CreditPack = {
  credits: 120 | 240;
  server: ServerType;
  badge?: "mostCredits" | "starter";
};

/** Reseller packs. Prices for every currency are in src/lib/prices.ts. */
export const creditPacks: CreditPack[] = [
  { credits: 120, server: "Premium" },
  { credits: 240, server: "Premium", badge: "mostCredits" },
  { credits: 120, server: "Standard", badge: "starter" },
  { credits: 240, server: "Standard", badge: "mostCredits" },
];

export const serverTypes: ServerType[] = ["Premium", "Standard"];

/** 1 credit = 1 month of subscription for one customer. */
export const creditsPerMonth = 1;

export const packId = (pack: CreditPack) => `${pack.server}-${pack.credits}` as PackId;

/** Price in US dollars (used in the English AI summary). */
export const packUsd = (pack: CreditPack) => packPrices[packId(pack)].USD;

export function packName(lang: Locale, pack: CreditPack) {
  const d = getDict(lang).reseller;
  return d.packName(pack.credits, d.server[pack.server].name);
}
