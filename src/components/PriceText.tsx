import { Price } from "./Currency";

const SPLIT = /\[\[([A-Za-z]+(?::[A-Za-z0-9-]+)?)\]\]/;

/** Text where every [[key]] price is shown in the visitor's currency. */
export default function PriceText({ text }: { text: string }) {
  if (!text.includes("[[")) return <>{text}</>;
  const parts = text.split(SPLIT);
  return <>{parts.map((p, i) => (i % 2 === 1 ? <Price key={i} k={p} /> : p))}</>;
}
