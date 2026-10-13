/**
 * Supported languages. Every language has its own folder: /en/pricing/, /fr/pricing/ …
 * (static hosting on GitHub Pages). The site root "/" sends visitors to their language.
 */
export const locales = ["en", "fr", "de", "es", "pt", "it", "nl", "sv", "no", "da", "fi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeInfo: Record<Locale, { name: string; htmlLang: string; hreflang: string; og: string; intl: string }> = {
  en: { name: "English", htmlLang: "en", hreflang: "en", og: "en_US", intl: "en-US" },
  fr: { name: "Français", htmlLang: "fr", hreflang: "fr", og: "fr_FR", intl: "fr-FR" },
  de: { name: "Deutsch", htmlLang: "de", hreflang: "de", og: "de_DE", intl: "de-DE" },
  es: { name: "Español", htmlLang: "es", hreflang: "es", og: "es_ES", intl: "es-ES" },
  pt: { name: "Português", htmlLang: "pt", hreflang: "pt", og: "pt_PT", intl: "pt-PT" },
  it: { name: "Italiano", htmlLang: "it", hreflang: "it", og: "it_IT", intl: "it-IT" },
  nl: { name: "Nederlands", htmlLang: "nl", hreflang: "nl", og: "nl_NL", intl: "nl-NL" },
  sv: { name: "Svenska", htmlLang: "sv", hreflang: "sv", og: "sv_SE", intl: "sv-SE" },
  no: { name: "Norsk", htmlLang: "nb", hreflang: "no", og: "nb_NO", intl: "nb-NO" },
  da: { name: "Dansk", htmlLang: "da", hreflang: "da", og: "da_DK", intl: "da-DK" },
  fi: { name: "Suomi", htmlLang: "fi", hreflang: "fi", og: "fi_FI", intl: "fi-FI" },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Adds the language folder to an internal path, with the trailing slash static hosts use:
 *   ("fr", "/pricing") → "/fr/pricing/"   ("en", "/") → "/en/"   ("de", "/glossary#credit") → "/de/glossary/#credit"
 * Files (share images, .txt …) keep their name without a slash.
 */
export function localePath(lang: Locale, path: string) {
  const [p, hash] = path.split("#");
  let out = `/${lang}${p === "/" ? "/" : p}`;
  if (!out.endsWith("/") && !/(opengraph-image|\.[a-z0-9]+)$/i.test(out)) out += "/";
  return hash !== undefined ? `${out}#${hash}` : out;
}

/** Canonical URL + hreflang alternates for a page path, for use in generateMetadata. */
export function languageAlternates(lang: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeInfo[l].hreflang] = localePath(l, path);
  languages["x-default"] = localePath(defaultLocale, path);
  return { canonical: localePath(lang, path), languages };
}

/** Next.js static params for every language. */
export function langParams() {
  return locales.map((lang) => ({ lang }));
}
