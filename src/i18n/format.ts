import { localeInfo, type Locale } from "./config";

// Prices: see src/lib/prices.ts (local currency per visitor).

export function formatDate(lang: Locale, iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString(localeInfo[lang].intl, { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
