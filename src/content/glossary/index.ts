import type { Locale } from "@/i18n/config";
import type { TermText } from "@/lib/glossary";
import de from "./de";
import es from "./es";
import fr from "./fr";
import pt from "./pt";
import it from "./it";
import nl from "./nl";
import sv from "./sv";
import no from "./no";
import da from "./da";
import fi from "./fi";

/** Translated glossary terms, per language: { [termId]: TermText }. */
export const glossaryTranslations: Partial<Record<Locale, Record<string, TermText>>> = { fr, de, es, pt, it, nl, sv, no, da, fi };
