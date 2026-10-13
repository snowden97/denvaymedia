/**
 * Legal page content. Text supports simple inline formatting (see components/RichText):
 *   [label](/path)   internal link (language prefix added automatically)
 *   [label](wa:key)  WhatsApp link with a pre-filled message (key from dict.wa)
 *   [label](mailto:x) email link
 *   **bold**
 */
export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "contact"; message: "terms" | "privacy" | "refund"; subject?: string }
  | { type: "dmcaContact"; title: string; subject: string };

export type LegalDoc = { title: string; description: string; intro: string; blocks: LegalBlock[] };

export type LegalSlug = "terms-of-service" | "privacy-policy" | "refund-policy" | "dmca";

export type LegalContent = Record<LegalSlug, LegalDoc>;
