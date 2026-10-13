import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { planPrices, tok } from "@/lib/prices";

export type Plan = {
  months: 3 | 6 | 12 | 24;
  badge?: "mostPopular" | "bestValue";
};

/** Plan lengths and badges. Prices for every currency are in src/lib/prices.ts. */
export const plans: Plan[] = [
  { months: 3 },
  { months: 6, badge: "mostPopular" },
  { months: 12, badge: "bestValue" },
  { months: 24 },
];

/** Price in US dollars (used for savings percentages and the English AI summary). */
export const usd = (plan: Plan) => planPrices[plan.months].USD;

const base = usd(plans[0]) / plans[0].months;

export function planName(lang: Locale, plan: Plan) {
  return getDict(lang).common.planName[plan.months];
}

/** "[[month:12]] / month" — show it with <PriceText> or resolvePrices(). */
export function perMonth(lang: Locale, plan: Plan) {
  return getDict(lang).common.perMonth(tok(`month:${plan.months}`));
}

/** Percentage saved per month compared to the shortest plan. */
export function savings(plan: Plan) {
  return Math.round((1 - usd(plan) / plan.months / base) * 100);
}

export const maxSaving = Math.max(...plans.map(savings));
