import type { MetadataRoute } from "next";
import { localeInfo, localePath, locales } from "@/i18n/config";
import { isTranslated, posts } from "@/lib/posts";
import { site } from "@/lib/site";
import { updated } from "@/lib/updated";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

/** Every page in every language, each entry listing all its language versions (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const d = (iso: string) => new Date(iso + "T00:00:00Z");
  const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

  const pages: { path: string; date: string; freq: Freq; priority: number; langs?: (typeof locales)[number][] }[] = [
    { path: "/", date: updated.home, freq: "weekly", priority: 1 },
    { path: "/pricing", date: updated.pricing, freq: "monthly", priority: 0.9 },
    { path: "/free-trial", date: updated.freeTrial, freq: "monthly", priority: 0.9 },
    { path: "/reseller", date: updated.reseller, freq: "monthly", priority: 0.8 },
    { path: "/setup", date: updated.setup, freq: "monthly", priority: 0.8 },
    { path: "/glossary", date: updated.glossary, freq: "monthly", priority: 0.6 },
    { path: "/about", date: updated.about, freq: "yearly", priority: 0.5 },
    { path: "/blog", date: updated.blog, freq: "weekly", priority: 0.8 },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, date: p.updated ?? p.date, freq: "monthly" as Freq, priority: 0.6, langs: locales.filter((l) => isTranslated(l, p.slug)) })),
    ...["terms-of-service", "privacy-policy", "refund-policy", "dmca"].map((s) => ({ path: `/legal/${s}`, date: updated.legal, freq: "yearly" as Freq, priority: 0.3 })),
  ];

  return pages.flatMap((page) => {
    const langs = page.langs ?? [...locales];
    const languages = Object.fromEntries(langs.map((l) => [localeInfo[l].hreflang, abs(localePath(l, page.path))]));
    return langs.map((l) => ({
      url: abs(localePath(l, page.path)),
      lastModified: d(page.date),
      changeFrequency: page.freq,
      priority: l === "en" ? page.priority : Math.round(page.priority * 90) / 100,
      alternates: { languages: { ...languages, "x-default": abs(localePath("en", page.path)) } },
    }));
  });
}

// Built once as a file (static website for GitHub Pages)
export const dynamic = "force-static";
