import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { getWa, site } from "@/lib/site";
import { Brand } from "./SiteHeader";
import WhatsAppIcon from "./WhatsAppIcon";

export default function SiteFooter({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const f = d.footer;
  const wa = getWa(lang);
  const L = (path: string) => localePath(lang, path);
  const newTab = <span className="sr-only">{d.common.newTab}</span>;
  return (
    <>
      <footer className="footer" id="contact">
        <div className="shell footer-grid">
          <div>
            <Brand lang={lang} light />
            <p>{f.tagline}</p>
            <a className="footer-wa" href={wa.contact} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> {f.chat}{newTab}</a>
            <p><span aria-hidden="true">✉ </span><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <nav aria-label={f.services}>
            <h2 className="footer-title">{f.services}</h2>
            <Link href={L("/free-trial")}>{f.freeTrial}</Link>
            <Link href={L("/pricing")}>{f.pricing}</Link>
            <Link href={L("/reseller")}>{f.reseller}</Link>
            <Link href={L("/setup")}>{f.setup}</Link>
            <Link href={L("/glossary")}>{f.glossary}</Link>
          </nav>
          <nav aria-label={f.company}>
            <h2 className="footer-title">{f.company}</h2>
            <Link href={L("/about")}>{f.about}</Link>
            <Link href={L("/blog")}>{f.blog}</Link>
            <Link href={L("/#faq")}>{f.faq}</Link>
            <a href={wa.contact} target="_blank" rel="noopener noreferrer">{f.contact}{newTab}</a>
          </nav>
          <nav aria-label={f.legal}>
            <h2 className="footer-title">{f.legal}</h2>
            <Link href={L("/legal/privacy-policy")}>{f.privacy}</Link>
            <Link href={L("/legal/terms-of-service")}>{f.terms}</Link>
            <Link href={L("/legal/refund-policy")}>{f.refund}</Link>
            <Link href={L("/legal/dmca")}>{f.dmca}</Link>
          </nav>
        </div>
        <div className="shell footer-bottom">{f.rights(2026, site.name)}</div>
      </footer>
      <a className="whatsapp" href={wa.contact} target="_blank" rel="noopener noreferrer" aria-label={f.floating}>
        <WhatsAppIcon size={30} />
      </a>
    </>
  );
}
