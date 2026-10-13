import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { site, whatsappLink } from "@/lib/site";

export default function ContactBox({ lang, message, subject }: { lang: Locale; message: "terms" | "privacy" | "refund"; subject?: string }) {
  const d = getDict(lang);
  const c = d.legal.contact;
  return (
    <div className="contact-box">
      <p><strong>{c.title}</strong></p>
      <p>{c.email}: <a href={`mailto:${site.email}`}>{site.email}</a></p>
      <p>{c.whatsapp}: <a href={whatsappLink(d.wa[message])} target="_blank" rel="noopener noreferrer">+{site.whatsapp}<span className="sr-only">{d.common.newTab}</span></a></p>
      <p>{c.website}: <a href={site.url}>{site.domain}</a></p>
      {subject && <p>{c.subject(subject)}</p>}
    </div>
  );
}
