import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { maxSaving } from "@/lib/plans";
import { getWa, site } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";
import { CurrencySwitcher } from "./Currency";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "./WhatsAppIcon";

export function Brand({ lang, light = false }: { lang: Locale; light?: boolean }) {
  return (
    <Link className={`brand${light ? " brand-light" : ""}`} href={localePath(lang, "/")}>
      <span className="logo" aria-hidden="true">▶</span>Denvay<b>Stream</b>
    </Link>
  );
}

export default function SiteHeader({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const wa = getWa(lang);
  const links: [string, string][] = [
    [d.nav.home, localePath(lang, "/")],
    [d.nav.freeTrial, localePath(lang, "/free-trial")],
    [d.nav.pricing, localePath(lang, "/pricing")],
    [d.nav.reseller, localePath(lang, "/reseller")],
    [d.nav.setup, localePath(lang, "/setup")],
    [d.nav.blog, localePath(lang, "/blog")],
  ];
  return (
    <>
      <a className="skip-link" href="#main">{d.common.skip}</a>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span><span aria-hidden="true">🔥 </span>{d.nav.promo(maxSaving)}</span>
          <a href={wa.contact} target="_blank" rel="noopener noreferrer">
            WhatsApp +{site.whatsapp}<span className="sr-only">{d.common.newTab}</span>
          </a>
        </div>
      </div>
      <header className="header">
        <nav className="shell nav" aria-label={d.common.menu}>
          <Brand lang={lang} />
          <div className="nav-links">
            {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </div>
          <div className="nav-tools">
            <LanguageSwitcher lang={lang} label={d.common.language} />
            <CurrencySwitcher label={d.common.currency} />
            <a className="btn btn-wa nav-cta" href={wa.contact} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> {d.nav.contact}<span className="sr-only">{d.nav.contactSr}</span>
            </a>
            <MobileMenu links={links} whatsapp={wa.contact} labels={{ menu: d.common.menu, contact: d.nav.contactWhatsApp, newTab: d.common.newTab }} />
          </div>
        </nav>
      </header>
    </>
  );
}
