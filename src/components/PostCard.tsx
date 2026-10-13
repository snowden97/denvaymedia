import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { formatDate } from "@/i18n/format";
import type { Post } from "@/lib/posts";
import { Picture } from "./Illustrations";

const coverClass: Record<Post["category"], string> = {
  Tutorials: "cover-tutorials",
  Guides: "cover-guides",
  "Legal & Safety": "cover-legal",
};

export default function PostCard({ post, lang }: { post: Post; lang: Locale }) {
  const d = getDict(lang);
  const href = localePath(lang, `/blog/${post.slug}`);
  const date = post.updated ?? post.date;
  return (
    <article className="card post-card">
      {post.hero ? (
        <Link href={href} className="post-cover post-cover-picture" aria-hidden="true" tabIndex={-1}>
          <Picture name={post.hero.name} lang={lang} />
        </Link>
      ) : (
        <Link href={href} className={`post-cover ${coverClass[post.category]}`} aria-hidden="true" tabIndex={-1}>
          <span>{post.cover}</span>
        </Link>
      )}
      <div className="post-body">
        <span className="tag">{d.common.categories[post.category]}</span>
        <p className="post-meta"><time dateTime={date}>{formatDate(lang, date)}</time> · {d.common.minRead(post.readTime)}</p>
        <h3><Link href={href}>{post.title}</Link></h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link className="read-more" href={href}>{d.common.readMore}<span className="sr-only">: {post.title}</span> <span aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}
