import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import RichText from "@/components/RichText";
import { hasLocale, languageAlternates, localeInfo, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import { getWa, orgId, site } from "@/lib/site";
import { updated } from "@/lib/updated";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const a = getDict(lang).about;
  return {
    title: a.title,
    description: a.description,
    alternates: languageAlternates(lang, "/about"),
    openGraph: { title: a.title, description: a.description, url: localePath(lang, "/about"), type: "website", siteName: site.name, locale: localeInfo[lang].og },
  };
}

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const a = d.about;
  const L = (p: string) => localePath(lang, p);
  const pageUrl = `${site.url}${L("/about")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: a.title, description: a.description, inLanguage: lang, about: { "@id": orgId }, mainEntity: { "@id": orgId } },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: a.crumb, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero">
        <div className="shell article-head">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{a.crumb}</span></nav>
          <span className="kicker">{a.kicker}</span>
          <h1>{a.h1}</h1>
          <p>{a.intro}</p>
          <p className="updated">{d.common.lastUpdated} <time dateTime={updated.about}>{formatDate(lang, updated.about)}</time></p>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <article className="prose">
            <h2>{a.whoTitle}</h2>
            <p>{a.who}</p>
            <h2>{a.offerTitle}</h2>
            <ul>{a.offer.map((o) => <li key={o}><RichText text={o} lang={lang} /></li>)}</ul>
            <h2>{a.howTitle}</h2>
            <ul>{a.how.map(([t, text]) => <li key={t}><b>{t}.</b> {text}</li>)}</ul>
            <h2>{a.policiesTitle}</h2>
            <p><RichText text={a.policies} lang={lang} /></p>
          </article>
          <aside className="article-side">
            <div className="card side-card">
              <h2 className="side-title">{a.contactTitle}</h2>
              <p>WhatsApp: +{site.whatsapp}<br />{d.legal.contact.email}: {site.email}<br />{a.support}</p>
              <a className="btn btn-wa btn-block" href={getWa(lang).contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {d.common.chatWhatsApp}<span className="sr-only">{d.common.newTab}</span></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{a.values.kicker}</span>
            <h2>{a.values.title}</h2>
          </div>
          <div className="review-grid promise-grid">
            {a.values.items.map(([icon, t, text]) => (
              <article className="card feature" key={t}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{t}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
