import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import { hasLocale, languageAlternates, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import { categories, getPosts } from "@/lib/posts";
import { orgId, site, websiteId } from "@/lib/site";
import BlogList from "./BlogList";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const b = getDict(lang).blogPage;
  return { title: b.title, description: b.description, alternates: languageAlternates(lang, "/blog") };
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const b = d.blogPage;
  const L = (p: string) => localePath(lang, p);
  const sorted = [...getPosts(lang)].sort((a, b2) => b2.date.localeCompare(a.date));
  const pageUrl = `${site.url}${L("/blog")}`;

  const showing: Record<string, string> = { All: d.blogList.showing(sorted.length, null) };
  for (const c of categories) showing[c] = d.blogList.showing(sorted.filter((p) => p.category === c).length, d.common.categories[c]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${pageUrl}#blog`,
        name: b.blogName,
        description: b.description,
        url: pageUrl,
        inLanguage: lang,
        isPartOf: { "@id": websiteId },
        publisher: { "@id": orgId },
        blogPost: sorted.map((p) => ({ "@type": "BlogPosting", headline: p.title, description: p.excerpt, url: `${site.url}${L(`/blog/${p.slug}`)}`, datePublished: p.date, dateModified: p.updated ?? p.date })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: d.common.home, item: `${site.url}${L("/")}` },
          { "@type": "ListItem", position: 2, name: b.crumb, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label={d.common.breadcrumb}><Link href={L("/")}>{d.common.home}</Link> / <span>{b.crumb}</span></nav>
          <span className="kicker">{b.kicker}</span>
          <h1>{b.h1}</h1>
          <p>{b.intro}</p>
          <p className="hero-links"><Link href={L("/setup")}>{b.setupLink}</Link> · <Link href={L("/glossary")}>{b.glossaryLink}</Link></p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <BlogList
            items={sorted.map((p) => ({ category: p.category, card: <PostCard post={p} lang={lang} /> }))}
            labels={{ filter: d.blogList.filter, all: d.blogList.all, articles: d.blogList.articles, categories: d.common.categories }}
            showing={showing}
          />
        </div>
      </section>
    </main>
  );
}
