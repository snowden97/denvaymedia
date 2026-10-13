import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import TryFreeBanner from "@/components/TryFreeBanner";
import { Picture } from "@/components/Illustrations";
import PriceText from "@/components/PriceText";
import { resolvePrices } from "@/lib/prices";
import { hasLocale, localeInfo, localePath, locales, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import { getPost, getPosts, isTranslated, posts, type Block } from "@/lib/posts";
import { getWa, orgId, site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

/** hreflang only for languages where this article is really translated; untranslated copies point to English. */
function postAlternates(lang: Locale, slug: string) {
  const path = `/blog/${slug}`;
  const languages: Record<string, string> = {};
  for (const l of locales) if (isTranslated(l, slug)) languages[localeInfo[l].hreflang] = localePath(l, path);
  languages["x-default"] = localePath("en", path);
  return { canonical: localePath(isTranslated(lang, slug) ? lang : "en", path), languages };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const post = getPost(lang, slug);
  if (!post) return {};
  const author = getDict(lang).article.author;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: postAlternates(lang, slug),
    authors: [{ name: author.name, url: `${site.url}${localePath(lang, "/about")}` }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: localePath(lang, `/blog/${slug}`),
      locale: localeInfo[lang].og,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      section: post.category,
      authors: [author.name],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

function renderBlock(block: Block, i: number, lang: Locale) {
  switch (block.type) {
    case "h2": return <h2 key={i}>{block.text}</h2>;
    case "h3": return <h3 key={i}>{block.text}</h3>;
    case "p": return <p key={i}><PriceText text={block.text} /></p>;
    case "table":
      return (
        <div key={i} className="table-wrap prose-table">
          <table className="compare">
            <caption>{block.caption}</caption>
            <thead><tr>{block.head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>{row.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}><PriceText text={cell} /></td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "figure":
      return (
        <figure key={i} className="article-figure">
          <Picture name={block.name} lang={lang} />
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    case "cta": return <TryFreeBanner key={i} lang={lang} title={block.title} text={block.text} />;
    case "links":
      return (
        <nav key={i} className="read-more-box" aria-label={block.title}>
          <p className="read-more-title">{block.title}</p>
          <ul>{block.items.map(([label, href]) => <li key={href}><Link href={localePath(lang, href)}>{label} →</Link></li>)}</ul>
        </nav>
      );
    case "ul": return <ul key={i}>{block.items.map((t, j) => <li key={j}><PriceText text={t} /></li>)}</ul>;
    case "ol": return <ol key={i}>{block.items.map((t, j) => <li key={j}><PriceText text={t} /></li>)}</ol>;
    case "tip": return <aside key={i} className="tip"><span aria-hidden="true">💡 </span><PriceText text={block.text} /></aside>;
  }
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const post = getPost(lang, slug);
  if (!post) notFound();
  const d = getDict(lang);
  const a = d.article;
  const L = (p: string) => localePath(lang, p);
  const all = getPosts(lang);

  const url = `${site.url}${L(`/blog/${post.slug}`)}`;
  const modified = post.updated ?? post.date;
  // Prefer related articles from the same category
  const related = [...all.filter((p) => p.slug !== post.slug && p.category === post.category), ...all.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, 3);

  const author = site.author.isPerson
    ? { "@type": "Person", name: a.author.name, jobTitle: a.author.role, description: a.author.bio, worksFor: { "@id": orgId } }
    : { "@type": "Organization", name: a.author.name, description: a.author.bio, parentOrganization: { "@id": orgId } };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        abstract: resolvePrices(post.takeaways.join(" "), lang),
        image: `${url}/opengraph-image`,
        datePublished: post.date,
        dateModified: modified,
        articleSection: d.common.categories[post.category],
        inLanguage: isTranslated(lang, slug) ? localeInfo[lang].hreflang : "en",
        url,
        mainEntityOfPage: url,
        author,
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: d.blogPage.crumb, item: `${site.url}${L("/blog")}` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
      ...(post.faqs.length > 0
        ? [{ "@type": "FAQPage", mainEntity: post.faqs.map(([q, ans]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: resolvePrices(ans, lang) } })) }]
        : []),
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="shell article-head">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <Link href={L("/blog")}>{d.blogPage.crumb}</Link> / <span>{d.common.categories[post.category]}</span></nav>
          <span className="tag">{d.common.categories[post.category]}</span>
          <h1>{post.title}</h1>
          <p>
            {a.by} {a.author.name} · {a.published} <time dateTime={post.date}>{formatDate(lang, post.date)}</time>
            {modified !== post.date && <> · {a.updated} <time dateTime={modified}>{formatDate(lang, modified)}</time></>}
            {" · "}{d.common.minRead(post.readTime)}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell article-layout">
          <article className="prose" lang={isTranslated(lang, slug) ? undefined : "en"}>
            {post.hero && (
              <figure className="article-hero">
                <Picture name={post.hero.name} lang={lang} />
                <figcaption className="sr-only">{post.hero.alt}</figcaption>
              </figure>
            )}
            <div className="takeaways">
              <h2>{a.takeaways}</h2>
              <ul>{post.takeaways.map((t, i) => <li key={i}><PriceText text={t} /></li>)}</ul>
            </div>

            {post.body.map((b, i) => renderBlock(b, i, lang))}

            {post.faqs.length > 0 && (
              <section className="post-faq" aria-labelledby="post-faq-title">
                <h2 id="post-faq-title">{a.faq}</h2>
                {post.faqs.map(([q, ans]) => (
                  <div className="qa" key={q}>
                    <h3>{q}</h3>
                    <p><PriceText text={ans} /></p>
                  </div>
                ))}
              </section>
            )}

            <TryFreeBanner lang={lang} />

            <div className="author-box">
              <span className="avatar" aria-hidden="true">{a.author.name[0]}</span>
              <div>
                <p className="author-name">{a.writtenBy} {a.author.name}</p>
                <p className="author-role">{a.author.role}</p>
                <p>{a.author.bio} <Link href={L("/about")}>{a.about(site.name)}</Link></p>
              </div>
            </div>
          </article>
          <aside className="article-side">
            <div className="card side-card">
              <h2 className="side-title">{a.needHelp}</h2>
              <p>{a.needHelpText}</p>
              <a className="btn btn-wa btn-block" href={getWa(lang).contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> {d.common.chatWhatsApp}<span className="sr-only">{d.common.newTab}</span></a>
            </div>
            <nav className="card side-card" aria-label={a.usefulPages}>
              <h2 className="side-title">{a.usefulPages}</h2>
              <ul className="side-links">
                <li><Link href={L("/setup")}>{a.useful[0]}</Link></li>
                <li><Link href={L("/glossary")}>{a.useful[1]}</Link></li>
                <li><Link href={L("/pricing")}>{a.useful[2]}</Link></li>
              </ul>
            </nav>
            <div className="card side-card side-card-blue">
              <h2 className="side-title">{a.tryTitle}</h2>
              <p>{a.tryText}</p>
              <Link className="btn btn-accent btn-block" href={L("/free-trial")}>{a.getTrial}</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <div className="section-head"><h2>{a.related}</h2></div>
          <div className="post-grid">{related.map((p) => <PostCard key={p.slug} post={p} lang={lang} />)}</div>
        </div>
      </section>
    </main>
  );
}
