import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { getWa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Eye-catching "Try it free" call to action used inside articles. */
export default function TryFreeBanner({ lang, title, text }: { lang: Locale; title?: string; text?: string }) {
  const d = getDict(lang);
  const t = d.tryFree;
  return (
    <aside className="try-free" aria-label={t.aria}>
      <div className="try-free-copy">
        <span className="try-free-badge">{t.badge}</span>
        <p className="try-free-title">{title ?? t.title}</p>
        <p className="try-free-text">{text ?? t.text}</p>
        <ul className="try-free-points">{t.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
      <div className="try-free-actions">
        <Link className="btn btn-accent btn-lg" href={localePath(lang, "/free-trial")}>{d.common.tryFree}</Link>
        <a className="btn btn-ghost" href={getWa(lang).trial} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> {d.common.askWhatsApp}<span className="sr-only">{d.common.newTab}</span>
        </a>
      </div>
    </aside>
  );
}
