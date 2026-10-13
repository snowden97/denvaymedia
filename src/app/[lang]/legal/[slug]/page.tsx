import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBox from "@/components/ContactBox";
import RichText from "@/components/RichText";
import { hasLocale, languageAlternates, localePath, type Locale } from "@/i18n/config";
import { getDict, getLegal } from "@/i18n";
import { formatDate } from "@/i18n/format";
import type { LegalBlock, LegalSlug } from "@/content/legal/types";
import { site, whatsappLink } from "@/lib/site";
import { updated } from "@/lib/updated";

const slugs: LegalSlug[] = ["terms-of-service", "privacy-policy", "refund-policy", "dmca"];
const isLegalSlug = (s: string): s is LegalSlug => (slugs as string[]).includes(s);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/legal/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isLegalSlug(slug)) return {};
  const doc = getLegal(lang)[slug];
  return { title: doc.title, description: doc.description, alternates: languageAlternates(lang, `/legal/${slug}`) };
}

function renderBlock(block: LegalBlock, i: number, lang: Locale) {
  const d = getDict(lang);
  switch (block.type) {
    case "h2": return <h2 key={i}>{block.text}</h2>;
    case "p": return <p key={i}><RichText text={block.text} lang={lang} /></p>;
    case "ul": return <ul key={i}>{block.items.map((t, j) => <li key={j}><RichText text={t} lang={lang} /></li>)}</ul>;
    case "ol": return <ol key={i}>{block.items.map((t, j) => <li key={j}><RichText text={t} lang={lang} /></li>)}</ol>;
    case "contact": return <ContactBox key={i} lang={lang} message={block.message} subject={block.subject} />;
    case "dmcaContact": {
      const email = `dmca@${site.domain}`;
      return (
        <div key={i} className="contact-box">
          <p><strong>{block.title}</strong></p>
          <p>{d.legal.contact.email}: <a href={`mailto:${email}`}>{email}</a></p>
          <p>{d.legal.contact.whatsapp}: <a href={whatsappLink(d.wa.dmca)} target="_blank" rel="noopener noreferrer">+{site.whatsapp}<span className="sr-only">{d.common.newTab}</span></a></p>
          <p>{d.legal.contact.subject(block.subject)}</p>
        </div>
      );
    }
  }
}

export default async function LegalDocPage({ params }: PageProps<"/[lang]/legal/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang) || !isLegalSlug(slug)) notFound();
  const d = getDict(lang);
  const doc = getLegal(lang)[slug];
  const L = (p: string) => localePath(lang, p);
  const related = slugs.filter((s) => s !== slug);

  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero">
        <div className="shell article-head">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{d.legal.label}</span> / <span>{doc.title}</span></nav>
          <h1>{doc.title}</h1>
          <p>{doc.intro}</p>
          <p className="updated">{d.common.lastUpdated} <time dateTime={updated.legal}>{formatDate(lang, updated.legal)}</time></p>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <article className="prose legal">
            {d.legal.translationNote && <p className="translation-note">{d.legal.translationNote}</p>}
            {doc.blocks.map((b, i) => renderBlock(b, i, lang))}
            <h2>{d.legal.related}</h2>
            <ul className="related-docs">
              {related.map((s) => <li key={s}><Link href={L(`/legal/${s}`)}>{d.legal.docs[s]} →</Link></li>)}
            </ul>
          </article>
          <aside className="article-side">
            <nav className="card side-card legal-nav" aria-label={d.legal.label}>
              <h2 className="side-title">{d.legal.label}</h2>
              {slugs.map((s) => (
                <Link key={s} href={L(`/legal/${s}`)} className={s === slug ? "on" : ""} aria-current={s === slug ? "page" : undefined}>
                  {d.legal.docs[s]}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </section>
    </main>
  );
}
