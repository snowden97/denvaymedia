import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { whatsappLink } from "@/lib/site";
import { Price } from "./Currency";

/**
 * Renders text with simple inline formatting:
 *   [[key]]           → price in the visitor's currency (see src/lib/prices.ts)
 *   [label](/path)    → internal link in the current language
 *   [label](wa:key)   → WhatsApp link with the pre-filled message dict.wa[key]
 *   [label](mailto:x) → email link
 *   **bold**          → bold text
 */
export default function RichText({ text, lang }: { text: string; lang: Locale }) {
  const dict = getDict(lang);
  const parts: React.ReactNode[] = [];
  const re = /\[\[([A-Za-z]+(?::[A-Za-z0-9-]+)?)\]\]|\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<Price key={i++} k={m[1]} />);
    } else if (m[4] !== undefined) {
      parts.push(<b key={i++}>{m[4]}</b>);
    } else {
      const [label, href] = [m[2], m[3]];
      if (href.startsWith("wa:")) {
        const msg = dict.wa[href.slice(3) as keyof typeof dict.wa];
        parts.push(
          <a key={i++} href={whatsappLink(typeof msg === "string" ? msg : dict.wa.contact)} target="_blank" rel="noopener noreferrer">
            {label}<span className="sr-only">{dict.common.newTab}</span>
          </a>,
        );
      } else if (href.startsWith("mailto:") || href.startsWith("http")) {
        parts.push(<a key={i++} href={href}>{label}</a>);
      } else {
        parts.push(<Link key={i++} href={localePath(lang, href)}>{label}</Link>);
      }
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
