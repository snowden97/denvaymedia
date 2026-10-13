"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import { localeInfo, type Locale } from "@/i18n/config";
import { CURRENCY_COOKIE, currencies, currencyByLang, currencyForCountry, fillPrices, formatPrice, isCurrency, type Currency } from "@/lib/prices";
import { whatsappLink } from "@/lib/whatsapp";

/*
 * Visitor currency, in this order:
 *   1. the currency cookie (the visitor's own choice, or set by the server from the visitor's country)
 *   2. the country in the browser language, e.g. en-GB → GBP, fr-MA → MAD
 *   3. the main currency of the page language (what the pre-built page shows)
 */

const listeners = new Set<() => void>();

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

function readCookie() {
  const m = document.cookie.match(new RegExp(`(?:^|; )${CURRENCY_COOKIE}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

function browserRegionCurrency(): Currency | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const region = tag.split("-").slice(1).find((p) => /^[A-Za-z]{2}$/.test(p));
    const cur = currencyForCountry(region);
    if (cur) return cur;
  }
  return null;
}

function getSnapshot(): Currency | null {
  const c = readCookie();
  return isCurrency(c) ? c : browserRegionCurrency();
}

const getServerSnapshot = () => null;

/** Saves the visitor's currency for one year and updates every price on the page. */
export function chooseCurrency(c: Currency) {
  document.cookie = `${CURRENCY_COOKIE}=${c}; path=/; max-age=31536000; samesite=lax`;
  listeners.forEach((l) => l());
}

const LangContext = createContext<Locale>("en");

export function CurrencyProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useCurrency() {
  const lang = useContext(LangContext);
  const chosen = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return { lang, cur: chosen ?? currencyByLang[lang] };
}

/** One price in the visitor's currency, e.g. <Price k="plan:12" /> */
export function Price({ k }: { k: string }) {
  const { lang, cur } = useCurrency();
  return <>{formatPrice(k, cur, lang)}</>;
}

/** WhatsApp link whose pre-filled message contains prices ([[key]]) in the visitor's currency. */
export function WaLink({ message, className, children }: { message: string; className?: string; children: React.ReactNode }) {
  const { lang, cur } = useCurrency();
  return (
    <a className={className} href={whatsappLink(fillPrices(message, cur, lang))} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function symbolOf(c: Currency, lang: Locale) {
  const part = new Intl.NumberFormat(localeInfo[lang].intl, { style: "currency", currency: c, currencyDisplay: c === "USD" ? "narrowSymbol" : "symbol" })
    .formatToParts(0)
    .find((p) => p.type === "currency")?.value;
  return part && part !== c ? `${c} · ${part}` : c;
}

/** Currency menu shown next to the language menu. */
export function CurrencySwitcher({ label }: { label: string }) {
  const { lang, cur } = useCurrency();
  return (
    <label className="cur-switch">
      <span className="sr-only">{label}</span>
      <select value={cur} onChange={(e) => isCurrency(e.target.value) && chooseCurrency(e.target.value)} aria-label={label}>
        {currencies.map((c) => <option key={c} value={c}>{symbolOf(c, lang)}</option>)}
      </select>
    </label>
  );
}
