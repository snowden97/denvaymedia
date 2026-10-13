import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FaqList from "@/components/FaqList";
import RichText from "@/components/RichText";
import { hasLocale, languageAlternates, localeInfo, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import { Price } from "@/components/Currency";
import PriceText from "@/components/PriceText";
import { currencyByLang, tok } from "@/lib/prices";
import { getPosts } from "@/lib/posts";
import { getWa, orgId, site, websiteId } from "@/lib/site";
import { updated } from "@/lib/updated";
import TrialForm from "./TrialForm";

export async function generateMetadata({ params }: PageProps<"/[lang]/free-trial">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const f = getDict(lang).freeTrial;
  return {
    title: f.title,
    description: f.description,
    keywords: f.keywords,
    alternates: languageAlternates(lang, "/free-trial"),
    openGraph: { title: f.title, description: f.description, url: localePath(lang, "/free-trial"), type: "website", siteName: site.name, locale: localeInfo[lang].og },
    twitter: { card: "summary_large_image", title: f.title, description: f.description },
  };
}

export default async function FreeTrialPage({ params }: PageProps<"/[lang]/free-trial">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const f = d.freeTrial;
  const wa = getWa(lang);
  const L = (p: string) => localePath(lang, p);
  const pageUrl = `${site.url}${L("/free-trial")}`;
  const guides = getPosts(lang).filter((p) => p.category === "Tutorials").slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: f.title, description: f.description, inLanguage: lang, isPartOf: { "@id": websiteId } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: f.crumb, item: pageUrl },
        ],
      },
      { "@type": "Service", name: f.serviceName, serviceType: "IPTV streaming", provider: { "@id": orgId }, offers: { "@type": "Offer", price: "0", priceCurrency: currencyByLang[lang], description: f.offerDescription, url: pageUrl } },
      { "@type": "FAQPage", inLanguage: lang, mainEntity: f.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero trial-hero">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{f.crumb}</span></nav>
            <span className="pill"><span aria-hidden="true">🎁 </span>{f.pill}</span>
            <h1>{f.h1a}<span>{f.h1b}</span>{f.h1c}</h1>
            <p>{f.intro}</p>
            <p className="updated">{d.common.offerUpdated} <time dateTime={updated.freeTrial}>{formatDate(lang, updated.freeTrial)}</time></p>
            <ul className="trial-points">{f.points.map((x) => <li key={x}>{x}</li>)}</ul>
            <p className="trial-rating">{f.guarantee} <b>{f.guaranteeBold}</b></p>
          </div>
          <TrialForm t={d.trialForm} msg={d.wa.form} languageName={localeInfo[lang].name} whatsapp={site.whatsapp} />
        </div>
      </section>

      <section className="stats">
        <div className="shell stats-grid">
          {f.stats.map(([v, l]) => <div key={l}><strong>{v === "$0" ? <Price k="zero" /> : v}</strong><span>{l}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{f.included.kicker}</span>
            <h2>{f.included.title}</h2>
            <p>{f.included.text}</p>
          </div>
          <div className="feature-grid">
            {f.included.items.map(([icon, t, text]) => (
              <article className="card feature" key={t}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{t}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{f.how.kicker}</span>
            <h2>{f.how.title}</h2>
          </div>
          <div className="steps steps-3">
            {f.how.steps.map(([n, t, text]) => (
              <article className="step" key={n}>
                <span className="step-num">{n}</span>
                <h3>{t}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell devices">
          <div>
            <span className="kicker">{f.vs.kicker}</span>
            <h2>{f.vs.title}</h2>
            <p className="muted">{f.vs.text}</p>
            <div className="table-wrap trial-table">
              <table className="compare">
                <thead><tr><th>{f.vs.head[0]}</th><th className="us">{f.vs.head[1]}</th><th>{f.vs.head[2]}</th></tr></thead>
                <tbody>{f.vs.rows(tok("cheapestPlan")).map(([x, a, b]) => <tr key={x}><td>{x}</td><td className="us">{a}</td><td><PriceText text={b} /></td></tr>)}</tbody>
              </table>
            </div>
            <Link className="btn btn-primary" href={L("/pricing")}>{f.vs.seePlans}</Link>
          </div>
          <div>
            <span className="kicker">{f.tips.kicker}</span>
            <h2>{f.tips.title}</h2>
            <ol className="tips-list">{f.tips.items.map((t) => <li key={t}>{t}</li>)}</ol>
            <aside className="tip"><span aria-hidden="true">💡 </span><RichText text={f.tips.help} lang={lang} /></aside>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell faq">
          <div className="section-head left">
            <span className="kicker">{f.faq.kicker}</span>
            <h2>{f.faq.title}</h2>
            <p>{f.faq.text}</p>
            <a className="btn btn-wa" href={wa.contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {f.faq.ask}<span className="sr-only">{d.common.newTab}</span></a>
          </div>
          <FaqList items={f.faq.items} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{f.guides.kicker}</span>
            <h2>{f.guides.title}</h2>
          </div>
          <div className="post-grid">{guides.map((p) => <PostCard key={p.slug} post={p} lang={lang} />)}</div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell cta-banner">
          <div>
            <h2>{f.cta.title}</h2>
            <p>{f.cta.text}</p>
          </div>
          <a className="btn btn-white btn-lg" href="#top-form"><WhatsAppIcon /> {f.cta.button}</a>
        </div>
      </section>
    </main>
  );
}
