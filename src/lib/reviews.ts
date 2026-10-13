/**
 * REAL customer reviews only.
 * Add reviews you actually received (with the customer's permission), for example from
 * WhatsApp, Trustpilot or Google. Fake reviews break consumer-protection laws and
 * Google's guidelines. While this list is empty, the website shows "Our promises" instead.
 */
export type Review = {
  name: string; // e.g. "Daniel R." (first name + initial)
  place?: string; // e.g. "Manchester, UK"
  text: string;
  date: string; // ISO yyyy-mm-dd, when the review was written
  stars: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [];

/**
 * Your overall rating from a public review platform (e.g. Trustpilot). Leave null until you have one.
 * Example: { value: 4.8, count: 132, source: "Trustpilot", url: "https://www.trustpilot.com/review/denvaystream.com" }
 */
export const publicRating: { value: number; count: number; source: string; url: string } | null = null;
