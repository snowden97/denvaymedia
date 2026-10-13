import PriceText from "./PriceText";

/** Visible question-and-answer list (each question is a heading), easy for people, search engines and AI to read. */
export default function FaqList({ items }: { items: (readonly [string, string])[] | string[][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <div className="faq-item" key={q}>
          <h3>{q}</h3>
          <p><PriceText text={a} /></p>
        </div>
      ))}
    </div>
  );
}
