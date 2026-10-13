import Link from "next/link";
import { getDict } from "@/i18n";

/** Shown for unknown addresses. (Rendered inside the language layout; the visitor's language is not known here, so English is used.) */
export default function NotFound() {
  const d = getDict("en");
  return (
    <main id="main" tabIndex={-1}>
      <section className="page-hero center-text">
        <div className="shell">
          <span className="kicker">404</span>
          <h1>{d.common.notFoundTitle}</h1>
          <p>{d.common.notFoundText}</p>
        </div>
      </section>
      <section className="section">
        <div className="shell center">
          <Link className="btn btn-primary btn-lg" href="/">{d.common.notFoundHome}</Link>
        </div>
      </section>
    </main>
  );
}
