import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteSchema from "@/components/SiteSchema";
import { CurrencyProvider } from "@/components/Currency";
import { hasLocale, langParams, languageAlternates, localeInfo, locales } from "@/i18n/config";
import { getDict } from "@/i18n";
import "../globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-poppins",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return langParams();
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const d = getDict(lang);
  return {
    metadataBase: new URL("https://denvaystream.com"),
    title: { default: d.meta.siteTitle, template: "%s | DenvayStream" },
    description: d.meta.siteDescription,
    keywords: d.meta.keywords,
    alternates: languageAlternates(lang, "/"),
    openGraph: {
      title: d.meta.ogTitle,
      description: d.meta.ogDescription,
      type: "website",
      locale: localeInfo[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeInfo[l].og),
      siteName: "DenvayStream",
    },
    twitter: { card: "summary_large_image" },
    // Explicit icon paths so they also work inside a GitHub Pages sub-folder (see next.config.ts)
    icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon`, apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/apple-icon` },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return (
    <html lang={localeInfo[lang].htmlLang} className={poppins.variable}>
      <body>
        <CurrencyProvider lang={lang}>
          <SiteSchema lang={lang} />
          <SiteHeader lang={lang} />
          {children}
          <SiteFooter lang={lang} />
        </CurrencyProvider>
      </body>
    </html>
  );
}
