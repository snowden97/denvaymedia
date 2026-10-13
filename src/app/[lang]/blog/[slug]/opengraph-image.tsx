import { hasLocale, locales } from "@/i18n/config";
import { getDict } from "@/i18n";
import { ogSize, shareImage } from "@/lib/og";
import { getPost, posts } from "@/lib/posts";

export const alt = "DenvayStream blog article";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: raw, slug } = await params;
  const lang = hasLocale(raw) ? raw : "en";
  const d = getDict(lang);
  const post = getPost(lang, slug);
  return shareImage({
    kicker: post ? d.og.postKicker(d.common.categories[post.category], post.readTime) : d.blogPage.blogName,
    title: post?.title ?? d.blogPage.title,
    footer: d.blogPage.blogName,
  });
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
