import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqList from "@/components/FaqList";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { hasLocale, languageAlternates, localeInfo, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { getPost } from "@/lib/posts";
import { getWa, orgId, site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/setup">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const s = getDict(lang).setup;
  return {
    title: s.title,
    description: s.description,
    alternates: languageAlternates(lang, "/setup"),
    openGraph: { title: s.title, description: s.description, url: localePath(lang, "/setup"), type: "website", siteName: site.name, locale: localeInfo[lang].og },
  };
}

const deviceIcons: Record<string, string> = {
  "how-to-install-iptv-on-firestick": "🔥",
  "iptv-smart-tv-samsung-lg": "📺",
  "iptv-on-android-tv-box-phone": "🤖",
  "iptv-on-iphone-ipad-apple-tv": "🍏",
  "iptv-on-mag-box": "📦",
  "iptv-on-windows-mac": "💻",
};

const helpGuides = ["best-iptv-apps-2026", "fix-iptv-buffering", "internet-speed-for-iptv"];

export default async function SetupPage({ params }: PageProps<"/[lang]/setup">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const s = d.setup;
  const L = (p: string) => localePath(lang, p);
  const pageUrl = `${site.url}${L("/setup")}`;
  const guides = Object.keys(deviceIcons).map((slug) => ({ slug, icon: deviceIcons[slug], name: s.devices[slug][0], text: s.devices[slug][1], post: getPost(lang, slug)! }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: s.title,
        description: s.description,
        inLanguage: lang,
        publisher: { "@id": orgId },
        mainEntity: { "@type": "ItemList", itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, name: g.post.title, url: `${site.url}${L(`/blog/${g.slug}`)}` })) },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: s.crumb, item: pageUrl },
        ],
      },
      { "@type": "FAQPage", inLanguage: lang, mainEntity: s.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero center-text">
        <div className="shell">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{s.crumb}</span></nav>
          <span className="kicker">{s.kicker}</span>
          <h1>{s.h1}</h1>
          <p>{s.intro}</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head">
            <h2>{s.howTitle}</h2>
            <p>{s.howText}</p>
          </div>
          <div className="steps steps-3">
            {s.steps.map(([n, t, text]) => (
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
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{s.chooseKicker}</span>
            <h2>{s.chooseTitle}</h2>
          </div>
          <div className="feature-grid">
            {guides.map((g) => (
              <article className="card feature device-card" key={g.slug}>
                <span className="icon" aria-hidden="true">{g.icon}</span>
                <h3><Link href={L(`/blog/${g.slug}`)}>{g.name}</Link></h3>
                <p>{g.text}</p>
                <p className="device-meta">{d.common.minRead(g.post.readTime)}</p>
                <Link className="read-more" href={L(`/blog/${g.slug}`)}>{s.open}<span className="sr-only">{s.openSr(g.name)}</span> <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{s.moreKicker}</span>
            <h2>{s.moreTitle}</h2>
          </div>
          <ul className="help-links">
            {helpGuides.map((slug) => {
              const p = getPost(lang, slug)!;
              return <li key={slug}><Link href={L(`/blog/${slug}`)}>{p.title}</Link><span>{p.excerpt}</span></li>;
            })}
            <li><Link href={L("/glossary")}>{s.glossaryLink}</Link><span>{s.glossaryText}</span></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell faq">
          <div className="section-head left">
            <span className="kicker">{s.faq.kicker}</span>
            <h2>{s.faq.title}</h2>
            <p>{s.faq.text}</p>
            <a className="btn btn-wa" href={getWa(lang).contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {s.faq.button}<span className="sr-only">{d.common.newTab}</span></a>
          </div>
          <FaqList items={s.faq.items} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell cta-banner">
          <div>
            <h2>{s.cta.title}</h2>
            <p>{s.cta.text}</p>
          </div>
          <Link className="btn btn-white btn-lg" href={L("/free-trial")}>{d.common.getFreeTrial}</Link>
        </div>
      </section>
    </main>
  );
}
