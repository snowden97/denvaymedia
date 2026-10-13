import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PlanGrid from "@/components/PlanGrid";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FaqList from "@/components/FaqList";
import { Price } from "@/components/Currency";
import PriceText from "@/components/PriceText";
import { hasLocale, languageAlternates, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import { perMonth, planName, plans, savings } from "@/lib/plans";
import { currencyByLang, planPrices, resolvePrices, tok } from "@/lib/prices";
import { getWa, orgId, site } from "@/lib/site";
import { updated } from "@/lib/updated";

export async function generateMetadata({ params }: PageProps<"/[lang]/pricing">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const p = getDict(lang).pricing;
  const list = plans.map((pl) => `${planName(lang, pl)} ${tok(`plan:${pl.months}`)}`).join(", ");
  return { title: resolvePrices(p.title(tok("cheapestPlan")), lang), description: resolvePrices(p.description(list), lang), alternates: languageAlternates(lang, "/pricing") };
}

export default async function PricingPage({ params }: PageProps<"/[lang]/pricing">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const p = d.pricing;
  const wa = getWa(lang);
  const L = (path: string) => localePath(lang, path);
  const pageUrl = `${site.url}${L("/pricing")}`;
  // Google data uses the page language's main currency (e.g. EUR on French pages)
  const cur = currencyByLang[lang];
  const priceOf = (months: (typeof plans)[number]["months"]) => planPrices[months][cur];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: p.crumb, item: pageUrl },
        ],
      },
      {
        "@type": "Product",
        "@id": `${pageUrl}#product`,
        name: p.productName,
        description: p.productDescription,
        image: `${site.url}${L("/pricing/opengraph-image")}`,
        brand: { "@type": "Brand", name: site.name },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: cur,
          lowPrice: Math.min(...plans.map((x) => priceOf(x.months))),
          highPrice: Math.max(...plans.map((x) => priceOf(x.months))),
          offerCount: plans.length,
          offers: plans.map((x) => ({
            "@type": "Offer",
            name: p.offerName(planName(lang, x)),
            description: resolvePrices(p.offerDescription(x.months, perMonth(lang, x)), lang),
            price: priceOf(x.months).toFixed(2),
            priceCurrency: cur,
            availability: "https://schema.org/InStock",
            url: pageUrl,
            seller: { "@id": orgId },
          })),
        },
      },
      { "@type": "FAQPage", inLanguage: lang, mainEntity: p.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };

  const sideLinks = ["/free-trial", "/blog/internet-speed-for-iptv", "/setup", "/blog/iptv-vs-cable-satellite"];

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero center-text">
        <div className="shell">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{p.crumb}</span></nav>
          <span className="kicker">{p.kicker}</span>
          <h1>{p.h1}</h1>
          <p>{p.intro}</p>
          <p className="updated">{d.common.pricesUpdated} <time dateTime={updated.pricing}>{formatDate(lang, updated.pricing)}</time></p>
        </div>
      </section>

      <section className="section section-dark pricing-plans">
        <div className="shell">
          <h2 className="sr-only">{p.plansSr}</h2>
          <PlanGrid lang={lang} />
          <p className="secure"><span aria-hidden="true">🔒 </span>{p.secure}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{p.servers.kicker}</span>
            <h2>{p.servers.title}</h2>
            <p>{p.servers.text}</p>
          </div>
          <div className="feature-grid">
            {p.servers.items.map(([icon, title, text]) => (
              <article className="card feature" key={title}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{p.compare.kicker}</span>
            <h2>{p.compare.title}</h2>
          </div>
          <div className="table-wrap">
            <table className="compare">
              <thead><tr><th>{p.compare.head[0]}</th><th>{p.compare.head[1]}</th><th>{p.compare.head[2]}</th><th className="us">{p.compare.head[3]}</th></tr></thead>
              <tbody>
                {plans.map((plan) => {
                  const save = savings(plan);
                  return (
                    <tr key={plan.months}>
                      <td><b>{planName(lang, plan)}</b>{plan.badge && <span className="mini-badge">{d.common.badges[plan.badge]}</span>}</td>
                      <td><Price k={`plan:${plan.months}`} /></td>
                      <td><PriceText text={perMonth(lang, plan)} /></td>
                      <td className="us">{save > 0 ? `${save}%` : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq">
          <div className="section-head left">
            <span className="kicker">{p.faq.kicker}</span>
            <h2>{p.faq.title}</h2>
            <p>{p.faq.text}</p>
            <a className="btn btn-wa" href={wa.contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {d.common.askWhatsApp}<span className="sr-only">{d.common.newTab}</span></a>
            <ul className="side-links">
              {sideLinks.map((href, i) => <li key={href}><Link href={L(href)}>{p.faq.links[i]}</Link></li>)}
            </ul>
          </div>
          <FaqList items={p.faq.items} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell cta-banner">
          <div>
            <h2>{p.cta.title}</h2>
            <p>{p.cta.text}</p>
          </div>
          <a className="btn btn-white btn-lg" href={wa.trial} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {d.common.getFreeTrial}<span className="sr-only">{d.common.newTab}</span></a>
        </div>
      </section>
    </main>
  );
}
