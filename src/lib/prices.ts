import { localeInfo, type Locale } from "@/i18n/config";

/**
 * LOCAL PRICES — edit the numbers here.
 * Every page, WhatsApp order message, article and example updates automatically.
 * This file has no server-only imports, so the browser can use it to switch currency.
 */

export const currencies = ["USD", "EUR", "GBP", "CHF", "SEK", "NOK", "DKK", "CAD", "AUD", "MAD", "BRL"] as const;
export type Currency = (typeof currencies)[number];

export const CURRENCY_COOKIE = "NEXT_CURRENCY";

export function isCurrency(v: unknown): v is Currency {
  return typeof v === "string" && (currencies as readonly string[]).includes(v);
}

/** Currency used when the visitor's country is unknown (also for pre-built pages and Google data). */
export const currencyByLang: Record<Locale, Currency> = {
  en: "USD", fr: "EUR", de: "EUR", es: "EUR", pt: "EUR", it: "EUR", nl: "EUR", sv: "SEK", no: "NOK", da: "DKK", fi: "EUR",
};

const euro = ["AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK", "MC", "AD", "SM", "VA", "ME", "XK", "GP", "MQ", "GF", "RE", "YT", "PM", "BL", "MF"];

/** Country (ISO code) → currency. Countries not listed use US dollars. */
const currencyByCountry: Record<string, Currency> = {
  ...Object.fromEntries(euro.map((c) => [c, "EUR" as Currency])),
  US: "USD", GB: "GBP", IM: "GBP", JE: "GBP", GG: "GBP", GI: "GBP",
  CH: "CHF", LI: "CHF", SE: "SEK", NO: "NOK", SJ: "NOK", DK: "DKK", GL: "DKK", FO: "DKK",
  CA: "CAD", AU: "AUD", MA: "MAD", BR: "BRL",
};

export function currencyForCountry(country: string | null | undefined): Currency | null {
  if (!country) return null;
  const cc = country.toUpperCase();
  if (!/^[A-Z]{2}$/.test(cc) || cc === "XX" || cc === "T1") return null; // unknown / Tor
  return currencyByCountry[cc] ?? "USD";
}

type Months = 3 | 6 | 12 | 24;
export type PackId = "Premium-120" | "Premium-240" | "Standard-120" | "Standard-240";
type Table = Record<Currency, number>;

/** Customer plan prices (fixed, rounded — not live exchange rates). */
export const planPrices: Record<Months, Table> = {
  3: { USD: 27, EUR: 25, GBP: 21, CHF: 24, SEK: 279, NOK: 289, DKK: 189, CAD: 37, AUD: 41, MAD: 270, BRL: 149 },
  6: { USD: 42, EUR: 39, GBP: 33, CHF: 37, SEK: 439, NOK: 449, DKK: 289, CAD: 57, AUD: 64, MAD: 420, BRL: 229 },
  12: { USD: 65, EUR: 59, GBP: 51, CHF: 57, SEK: 679, NOK: 699, DKK: 449, CAD: 89, AUD: 99, MAD: 650, BRL: 359 },
  24: { USD: 120, EUR: 109, GBP: 94, CHF: 105, SEK: 1249, NOK: 1290, DKK: 829, CAD: 165, AUD: 179, MAD: 1200, BRL: 659 },
};

/** Reseller credit pack prices. 1 credit = 1 month for one customer. */
export const packPrices: Record<PackId, Table> = {
  "Premium-120": { USD: 300, EUR: 279, GBP: 235, CHF: 265, SEK: 3150, NOK: 3250, DKK: 2070, CAD: 410, AUD: 455, MAD: 3000, BRL: 1649 },
  "Premium-240": { USD: 680, EUR: 629, GBP: 529, CHF: 599, SEK: 7090, NOK: 7350, DKK: 4690, CAD: 929, AUD: 1029, MAD: 6800, BRL: 3739 },
  "Standard-120": { USD: 220, EUR: 199, GBP: 169, CHF: 195, SEK: 2290, NOK: 2390, DKK: 1520, CAD: 299, AUD: 335, MAD: 2200, BRL: 1199 },
  "Standard-240": { USD: 420, EUR: 389, GBP: 329, CHF: 369, SEK: 4390, NOK: 4490, DKK: 2890, CAD: 575, AUD: 639, MAD: 4200, BRL: 2299 },
};

/** Typical monthly cost of cable / satellite TV, used in the comparison table. */
const cableRange: Record<Currency, [number, number]> = {
  USD: [60, 120], EUR: [55, 110], GBP: [45, 95], CHF: [55, 105], SEK: [600, 1200], NOK: [650, 1300], DKK: [400, 800], CAD: [80, 165], AUD: [90, 180], MAD: [600, 1200], BRL: [330, 660],
};

const months: Months[] = [3, 6, 12, 24];
const packIds = Object.keys(packPrices) as PackId[];
const customersPerPack = (id: PackId) => Math.floor(Number(id.split("-")[1]) / 12); // sold as 1-year subscriptions

/**
 * A price key names one amount; its value depends on the currency.
 * In text, write a key as [[key]] — e.g. "From [[cheapestPlan]]" — and it is shown in the visitor's currency.
 */
export type PriceKey =
  | `plan:${Months}` | `month:${Months}` | `pack:${PackId}` | `credit:${PackId}`
  | `earnRevenue:${PackId}` | `earnProfit:${PackId}` | `earnPerCustomer:${PackId}`
  | "cheapestPlan" | "lowestMonthly" | "cheapestPack" | "yearCost" | "yearProfit" | "cableLow" | "cableHigh" | "zero";

/** Amount for a key in a currency. `cents` = always show 2 decimals (prices per month / per credit). */
export function priceValue(key: string, cur: Currency): { amount: number; cents: boolean } | null {
  const [kind, arg] = key.split(":");
  const plan = (m: number) => planPrices[m as Months]?.[cur];
  const pack = (id: string) => packPrices[id as PackId]?.[cur];
  const credit = (id: string) => pack(id) / Number(id.split("-")[1]);
  const yearCost = credit("Standard-120") * 12;
  switch (kind) {
    case "plan": return plan(Number(arg)) === undefined ? null : { amount: plan(Number(arg)), cents: false };
    case "month": return plan(Number(arg)) === undefined ? null : { amount: plan(Number(arg)) / Number(arg), cents: true };
    case "pack": return pack(arg) === undefined ? null : { amount: pack(arg), cents: false };
    case "credit": return pack(arg) === undefined ? null : { amount: credit(arg), cents: true };
    case "earnRevenue": return pack(arg) === undefined ? null : { amount: customersPerPack(arg as PackId) * plan(12), cents: false };
    case "earnProfit": return pack(arg) === undefined ? null : { amount: customersPerPack(arg as PackId) * plan(12) - pack(arg), cents: false };
    case "earnPerCustomer": return pack(arg) === undefined ? null : { amount: (customersPerPack(arg as PackId) * plan(12) - pack(arg)) / customersPerPack(arg as PackId), cents: false };
    case "cheapestPlan": return { amount: Math.min(...months.map(plan)), cents: false };
    case "lowestMonthly": return { amount: Math.min(...months.map((m) => plan(m) / m)), cents: true };
    case "cheapestPack": return { amount: Math.min(...packIds.map(pack)), cents: false };
    case "yearCost": return { amount: Math.round(yearCost), cents: false };
    case "yearProfit": return { amount: Math.round(plan(12) - yearCost), cents: false };
    case "cableLow": return { amount: cableRange[cur][0], cents: false };
    case "cableHigh": return { amount: cableRange[cur][1], cents: false };
    case "zero": return { amount: 0, cents: false };
    default: return null;
  }
}

/** Writes an amount the local way: $27 · 25 € · £21 · 279 kr · CHF 24 · CA$37 */
export function formatAmount(amount: number, cur: Currency, lang: Locale, cents = false) {
  const whole = !cents && Number.isInteger(amount);
  return new Intl.NumberFormat(localeInfo[lang].intl, {
    style: "currency",
    currency: cur,
    currencyDisplay: cur === "USD" ? "narrowSymbol" : "symbol",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(amount);
}

export function formatPrice(key: string, cur: Currency, lang: Locale) {
  const v = priceValue(key, cur);
  return v ? formatAmount(v.amount, cur, lang, v.cents) : "";
}

/** Price token in text: [[cheapestPlan]], [[plan:12]], [[pack:Standard-120]] … */
export const TOKEN = /\[\[([A-Za-z]+(?::[A-Za-z0-9-]+)?)\]\]/g;

/** Replaces every [[key]] in a text with the formatted price. */
export function fillPrices(text: string, cur: Currency, lang: Locale) {
  return text.replace(TOKEN, (_, key: string) => formatPrice(key, cur, lang));
}

/** Plain-text prices in the language's main currency — for page titles, Google data and share images. */
export function resolvePrices(text: string, lang: Locale) {
  return fillPrices(text, currencyByLang[lang], lang);
}

/** Token helper: tok("plan:12") → "[[plan:12]]" */
export const tok = (key: PriceKey) => `[[${key}]]`;
