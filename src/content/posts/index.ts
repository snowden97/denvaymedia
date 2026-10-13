import type { Locale } from "@/i18n/config";
import type { PostText } from "@/lib/posts";
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

/**
 * Translated articles, per language: { [slug]: PostText }.
 * Add each language here once its files are written.
 */
export const postTranslations: Partial<Record<Locale, Record<string, PostText>>> = { fr, de, es, pt, it, nl, sv, no, da, fi };
