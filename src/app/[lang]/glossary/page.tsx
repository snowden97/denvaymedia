import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { hasLocale, languageAlternates, localeInfo, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { getGlossary } from "@/lib/glossary";
import { orgId, site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/glossary">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const g = getDict(lang).glossaryPage;
  return {
    title: g.title,
    description: g.description,
    alternates: languageAlternates(lang, "/glossary"),
    openGraph: { title: g.title, description: g.description, url: localePath(lang, "/glossary"), type: "website", siteName: site.name, locale: localeInfo[lang].og },
  };
}

export default async function GlossaryPage({ params }: PageProps<"/[lang]/glossary">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const g = d.glossaryPage;
  const L = (p: string) => localePath(lang, p);
  const pageUrl = `${site.url}${L("/glossary")}`;
  const terms = [...getGlossary(lang)].sort((a, b) => a.term.localeCompare(b.term, localeInfo[lang].intl));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${pageUrl}#terms`,
        name: g.setName,
        description: g.description,
        url: pageUrl,
        inLanguage: lang,
        publisher: { "@id": orgId },
        hasDefinedTerm: terms.map((t) => ({ "@type": "DefinedTerm", "@id": `${pageUrl}#${t.id}`, name: t.term, description: t.definition, url: `${pageUrl}#${t.id}`, inDefinedTermSet: `${pageUrl}#terms` })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: g.crumb, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="shell article-head">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{g.crumb}</span></nav>
          <span className="kicker">{g.kicker}</span>
          <h1>{g.h1}</h1>
          <p>{g.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <article className="prose">
            <h2 className="sr-only">{g.jump}</h2>
            <ul className="glossary-index">{terms.map((t) => <li key={t.id}><a href={`#${t.id}`}>{t.term}</a></li>)}</ul>
            <h2>{g.all}</h2>
            <dl className="glossary-list">
              {terms.map((t) => (
                <div key={t.id}>
                  <dt id={t.id}>{t.term}</dt>
                  <dd>
                    {t.definition}
                    {t.link && <> <Link href={L(t.link.href)}>{t.link.label} →</Link></>}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
          <aside className="article-side">
            <div className="card side-card">
              <h2 className="side-title">{g.readyTitle}</h2>
              <p>{g.readyText}</p>
              <Link className="btn btn-primary btn-block" href={L("/setup")}>{g.seeGuides}</Link>
            </div>
            <div className="card side-card side-card-blue">
              <h2 className="side-title">{d.article.tryTitle}</h2>
              <p>{g.tryText}</p>
              <Link className="btn btn-accent btn-block" href={L("/free-trial")}>{d.article.getTrial}</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
