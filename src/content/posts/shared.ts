import type { Locale } from "@/i18n/config";
import { tok } from "@/lib/prices";

/**
 * Prices used inside article text. Each value is a price token ([[key]]) that is shown
 * in the visitor's currency, so articles always match the current price list.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function priceFacts(_lang: Locale) {
  return {
    cheapest: tok("cheapestPlan"), // e.g. $27
    monthly: tok("lowestMonthly"), // e.g. $5.00 (2-year plan per month)
    credit: tok("credit:Standard-120"), // e.g. $1.83
    yearCost: tok("yearCost"), // e.g. $22
    yearPrice: tok("plan:12"), // e.g. $65
    yearProfit: tok("yearProfit"), // e.g. $43
    starterPrice: tok("pack:Standard-120"), // e.g. $220
    starterCredits: 120,
  };
}
