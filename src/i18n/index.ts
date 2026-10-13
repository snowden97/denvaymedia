import type { Locale } from "./config";
import en, { type Dict } from "./dict/en";
import fr from "./dict/fr";
import de from "./dict/de";
import es from "./dict/es";
import pt from "./dict/pt";
import it from "./dict/it";
import nl from "./dict/nl";
import sv from "./dict/sv";
import no from "./dict/no";
import da from "./dict/da";
import fi from "./dict/fi";
import legalFi from "@/content/legal/fi";
import legalDa from "@/content/legal/da";
import legalNo from "@/content/legal/no";
import legalSv from "@/content/legal/sv";
import legalEs from "@/content/legal/es";
import legalPt from "@/content/legal/pt";
import legalIt from "@/content/legal/it";
import legalNl from "@/content/legal/nl";
import legalEn from "@/content/legal/en";
import legalFr from "@/content/legal/fr";
import legalDe from "@/content/legal/de";
import type { LegalContent } from "@/content/legal/types";

/**
 * Language registry. Add each finished translation here.
 * Any language not listed yet falls back to English.
 */
const dicts: Partial<Record<Locale, Dict>> = { en, fr, de, es, pt, it, nl, sv, no, da, fi };
const legal: Partial<Record<Locale, LegalContent>> = { en: legalEn, fr: legalFr, de: legalDe, es: legalEs, pt: legalPt, it: legalIt, nl: legalNl, sv: legalSv, no: legalNo, da: legalDa, fi: legalFi };

export function getDict(lang: Locale): Dict {
  return dicts[lang] ?? en;
}

export function getLegal(lang: Locale): LegalContent {
  return legal[lang] ?? legalEn;
}

export type { Dict };
