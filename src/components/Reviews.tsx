import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { publicRating, reviews } from "@/lib/reviews";
import { getWa } from "@/lib/site";

function Stars({ count, label }: { count: number; label: string }) {
  return <span className="stars" role="img" aria-label={label}>{"★".repeat(count)}</span>;
}

/** Shows real reviews when available, otherwise our verifiable customer promises. */
export default function Reviews({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const r = d.reviews;
  if (reviews.length === 0) {
    return (
      <section className="section" id="reviews">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{r.kicker}</span>
            <h2>{r.title}</h2>
            <p>{r.text}</p>
          </div>
          <div className="review-grid promise-grid">
            {r.promises.map(([icon, title, text]) => (
              <article className="card feature" key={title}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="earn-note">
            {r.already}{" "}
            <a href={getWa(lang).review} target="_blank" rel="noopener noreferrer">
              {r.share}<span className="sr-only">{d.common.newTab}</span>
            </a>
            {" · "}<Link href={localePath(lang, "/legal/refund-policy")}>{r.refundLink}</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="reviews">
      <div className="shell">
        <div className="section-head">
          <span className="kicker">{r.reviewsKicker}</span>
          <h2>{r.reviewsTitle}</h2>
          {publicRating && (
            <p className="rating">
              <Stars count={Math.round(publicRating.value)} label={r.stars(Math.round(publicRating.value))} /> <b>{publicRating.value}/5</b> {r.from(publicRating.count)}{" "}
              <a href={publicRating.url} target="_blank" rel="noopener noreferrer">{publicRating.source}<span className="sr-only">{d.common.newTab}</span></a>
            </p>
          )}
        </div>
        <div className="review-grid">
          {reviews.map((rv) => (
            <figure className="card review" key={rv.name + rv.date}>
              <Stars count={rv.stars} label={r.stars(rv.stars)} />
              <blockquote>“{rv.text}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{rv.name[0]}</span>
                <span><b>{rv.name}</b>{rv.place && <small>{rv.place}</small>}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
