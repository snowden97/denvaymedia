import { localeInfo, locales, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { orgId, site, websiteId } from "@/lib/site";

/** Organization + WebSite structured data, rendered once on every page. */
export default function SiteSchema({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        url: site.url,
        logo: { "@type": "ImageObject", url: `${site.url}/apple-icon`, width: 180, height: 180 },
        image: `${site.url}/opengraph-image`,
        description: d.meta.orgDescription,
        email: site.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: `+${site.whatsapp}`,
            email: site.email,
            // Languages the support team actually answers in — update if you add more
            availableLanguage: ["English", "French", "Arabic"],
            hoursAvailable: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
          },
        ],
        ...(site.social.length > 0 && { sameAs: site.social }),
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        description: d.meta.orgDescription,
        inLanguage: locales.map((l) => localeInfo[l].hreflang),
        publisher: { "@id": orgId },
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
