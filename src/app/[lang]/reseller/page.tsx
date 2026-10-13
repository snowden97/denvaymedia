import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FaqList from "@/components/FaqList";
import { Price, WaLink } from "@/components/Currency";
import PriceText from "@/components/PriceText";
import { hasLocale, languageAlternates, localeInfo, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import { planName, plans } from "@/lib/plans";
import { creditPacks, creditsPerMonth, packId, packName, serverTypes } from "@/lib/reseller";
import { currencyByLang, packPrices, resolvePrices, tok } from "@/lib/prices";
import { getWa, orgId, site } from "@/lib/site";
import { updated } from "@/lib/updated";

export async function generateMetadata({ params }: PageProps<"/[lang]/reseller">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const r = getDict(lang).reseller;
  const from = tok("cheapestPack");
  const title = resolvePrices(r.title(from), lang);
  const description = resolvePrices(r.description(from), lang);
  return {
    title,
    description,
    keywords: r.keywords,
    alternates: languageAlternates(lang, "/reseller"),
    openGraph: { title, description, url: localePath(lang, "/reseller"), type: "website", siteName: site.name, locale: localeInfo[lang].og },
    twitter: { card: "summary_large_image", title, description },
  };
}

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default async function ResellerPage({ params }: PageProps<"/[lang]/reseller">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const r = d.reseller;
  const wa = getWa(lang);
  const L = (p: string) => localePath(lang, p);
  const pageUrl = `${site.url}${L("/reseller")}`;
  const newTab = <span className="sr-only">{d.common.newTab}</span>;
  const cur = currencyByLang[lang]; // Google data currency
  const yearPrice = tok("plan:12");

  // Earnings example per server: buy the smallest pack, sell every credit as 1-year subscriptions at our public price
  const earnings = serverTypes.map((type) => {
    const pack = creditPacks.filter((p) => p.server === type).sort((a, b) => a.credits - b.credits)[0];
    const customers = Math.floor(pack.credits / (12 * creditsPerMonth));
    return { type, pack, id: packId(pack), customers };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: r.crumb, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        name: r.serviceName,
        serviceType: "IPTV reseller credits",
        provider: { "@id": orgId },
        url: pageUrl,
        offers: creditPacks.map((p) => ({ "@type": "Offer", name: packName(lang, p), price: packPrices[packId(p)][cur].toFixed(2), priceCurrency: cur, url: pageUrl })),
      },
      { "@type": "FAQPage", inLanguage: lang, mainEntity: r.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };

  const label = (type: "Premium" | "Standard") => <><span aria-hidden="true">{type === "Premium" ? "⭐ " : "✅ "}</span>{r.server[type].name}</>;
  const faqLinks = ["/blog/how-to-start-iptv-reseller-business", "/setup", "/glossary#credit"];

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero center-text">
        <div className="shell">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{r.crumb}</span></nav>
          <span className="kicker">{r.kicker}</span>
          <h1>{r.h1}</h1>
          <p>{r.intro}</p>
          <p className="updated">{d.common.pricesUpdated} <time dateTime={updated.reseller}>{formatDate(lang, updated.reseller)}</time></p>
          <div className="hero-actions centered">
            <a className="btn btn-accent btn-lg" href="#packs">{r.seePacks}</a>
            <a className="btn btn-wa btn-lg" href={wa.reseller} {...ext}><WhatsAppIcon /> {r.talk}{newTab}</a>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="packs">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{r.packs.kicker}</span>
            <h2>{r.packs.title}</h2>
            <p>{r.packs.text}</p>
            <div className="hero-actions centered">
              <a className="btn btn-ghost" href="#premium">{label("Premium")}</a>
              <a className="btn btn-ghost" href="#standard">{label("Standard")}</a>
            </div>
          </div>
          {serverTypes.map((type) => {
            const s = r.server[type];
            return (
              <div className={`server-block server-${type.toLowerCase()}`} key={type} id={type.toLowerCase()}>
                <div className="server-info">
                  <span className="server-label">{label(type)}</span>
                  <h3>{s.title}</h3>
                  <p>{s.tagline}</p>
                  <ul>{s.points.map((pt) => <li key={pt}>✓ {pt}</li>)}</ul>
                </div>
                <div className="pack-grid">
                  {creditPacks.filter((p) => p.server === type).map((pack) => {
                    const name = packName(lang, pack);
                    return (
                      <article className="plan" key={name}>
                        {pack.badge && <span className="badge">{d.common.badges[pack.badge]}</span>}
                        <h3>{r.credits(pack.credits)}</h3>
                        <p className="server-tag">{s.tag}</p>
                        <p className="price"><Price k={`pack:${packId(pack)}`} /></p>
                        <p className="per"><PriceText text={r.perCredit(tok(`credit:${packId(pack)}`))} /></p>
                        <ul>
                          <li>{r.packItems.months(pack.credits)}</li>
                          <li>{r.packItems.yearCustomers(Math.floor(pack.credits / 12))}</li>
                          <li>{r.packItems.panel}</li>
                          <li>{r.packItems.trials}</li>
                          <li>{r.packItems.never}</li>
                        </ul>
                        <WaLink className="btn btn-wa btn-block" message={wa.packMessage(name, packId(pack))}><WhatsAppIcon /> {r.buy}<span className="sr-only">: {name}{d.common.newTab}</span></WaLink>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section" id="earnings">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{r.earnings.kicker}</span>
            <h2>{r.earnings.title}</h2>
            <p><PriceText text={r.earnings.text(earnings[0].customers, yearPrice)} /></p>
          </div>
          <div className="earn-grid">
            {earnings.map((e) => (
              <article className={`card earn-card earn-${e.type.toLowerCase()}`} key={e.type}>
                <span className="server-label">{label(e.type)}</span>
                <div className="earn-row"><span>{r.earnings.pay}</span><b><Price k={`pack:${e.id}`} /></b></div>
                <p className="earn-hint">{r.earnings.forCredits(e.pack.credits)}</p>
                <div className="earn-row"><span>{r.earnings.sell}</span><b><Price k={`earnRevenue:${e.id}`} /></b></div>
                <p className="earn-hint"><PriceText text={r.earnings.times(e.customers, yearPrice)} /></p>
                <div className="earn-total">
                  <span>{r.earnings.earn}</span>
                  <strong><Price k={`earnProfit:${e.id}`} /></strong>
                  <small><PriceText text={r.earnings.perCustomer(tok(`earnPerCustomer:${e.id}`))} /></small>
                </div>
              </article>
            ))}
          </div>
          <p className="earn-note"><PriceText text={r.earnings.note(yearPrice)} /></p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell narrow">
          <div className="section-head">
            <span className="kicker">{r.creditsTable.kicker}</span>
            <h2>{r.creditsTable.title}</h2>
            <p>{r.creditsTable.text}</p>
          </div>
          <div className="table-wrap">
            <table className="compare">
              <thead><tr><th>{r.creditsTable.head[0]}</th><th className="us">{r.creditsTable.head[1]}</th></tr></thead>
              <tbody>{plans.map((p) => <tr key={p.months}><td>{planName(lang, p)}</td><td className="us">{r.creditsTable.used(p.months * creditsPerMonth)}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{r.benefits.kicker}</span>
            <h2>{r.benefits.title}</h2>
          </div>
          <div className="feature-grid">
            {r.benefits.items.map(([icon, t, text]) => (
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
            <span className="kicker">{r.steps.kicker}</span>
            <h2>{r.steps.title}</h2>
          </div>
          <div className="steps steps-3">
            {r.steps.items.map(([n, t, text]) => (
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
        <div className="shell faq">
          <div className="section-head left">
            <span className="kicker">{r.faq.kicker}</span>
            <h2>{r.faq.title}</h2>
            <p>{r.faq.text}</p>
            <a className="btn btn-wa" href={wa.reseller} {...ext}><WhatsAppIcon /> {d.common.askWhatsApp}{newTab}</a>
            <ul className="side-links">
              {faqLinks.map((href, i) => <li key={href}><Link href={L(href)}>{r.faq.links[i]}</Link></li>)}
            </ul>
          </div>
          <FaqList items={r.faq.items} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell cta-banner">
          <div>
            <h2>{r.cta.title}</h2>
            <p>{r.cta.text}</p>
          </div>
          <a className="btn btn-white btn-lg" href={wa.reseller} {...ext}><WhatsAppIcon /> {d.home.reseller.become}{newTab}</a>
        </div>
      </section>
    </main>
  );
}
