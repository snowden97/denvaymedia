"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hasLocale, localeInfo, localePath, locales, type Locale } from "@/i18n/config";

const COOKIE = "NEXT_LOCALE";

/** Remembers the chosen language for one year (read by the proxy for automatic switching). */
function rememberLanguage(l: Locale) {
  document.cookie = `${COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
}

/** Path of the current page without its language folder: "/fr/pricing/" → "/pricing". */
function basePath(pathname: string) {
  const first = pathname.split("/")[1] ?? "";
  const rest = hasLocale(first) ? pathname.slice(first.length + 1) : pathname;
  return rest.replace(/\/+$/, "") || "/";
}

/** Language menu: links to the same page in every language and remembers the visitor's choice. */
export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const path = basePath(usePathname() ?? "/");

  function choose(l: Locale) {
    rememberLanguage(l);
    ref.current?.removeAttribute("open");
  }

  return (
    <details className="lang-switch" ref={ref}>
      <summary aria-label={`${label}: ${localeInfo[lang].name}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        <span className="lang-code">{lang.toUpperCase()}</span>
        <span className="lang-name">{localeInfo[lang].name}</span>
      </summary>
      <ul role="list">
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localePath(l, path)}
              hrefLang={localeInfo[l].hreflang}
              lang={localeInfo[l].htmlLang}
              aria-current={l === lang ? "true" : undefined}
              className={l === lang ? "on" : ""}
              onClick={() => choose(l)}
              prefetch={false}
            >
              {localeInfo[l].name}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
