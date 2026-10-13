import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard from "@/components/PostCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FaqList from "@/components/FaqList";
import PlanGrid from "@/components/PlanGrid";
import Reviews from "@/components/Reviews";
import { hasLocale, languageAlternates, localePath } from "@/i18n/config";
import { getDict } from "@/i18n";
import PriceText from "@/components/PriceText";
import { tok } from "@/lib/prices";
import { getPosts } from "@/lib/posts";
import { getWa } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return { alternates: languageAlternates(lang, "/") };
}

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const d = getDict(lang);
  const h = d.home;
  const wa = getWa(lang);
  const L = (p: string) => localePath(lang, p);
  const newTab = <span className="sr-only">{d.common.newTab}</span>;
  const latest = [...getPosts(lang)].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: h.faq.items.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <main id="main" tabIndex={-1}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="hero" id="top">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <span className="pill"><span aria-hidden="true">🎁</span> {h.pill}</span>
            <h1>{h.h1a}<span>{h.h1b}</span></h1>
            <p>{h.intro}</p>
            <div className="hero-actions">
              <Link className="btn btn-accent btn-lg" href={L("/free-trial")}>{h.start}</Link>
              <a className="btn btn-ghost btn-lg" href="#pricing">{h.viewPricing}</a>
            </div>
            <ul className="hero-checks">{h.checks.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <div className="hero-visual" role="img" aria-label={h.heroAria}>
            <div className="tv">
              <div className="tv-screen">
                <div className="tv-bar"><span className="live">{h.tv.live}</span><span>4K UHD</span></div>
                <div className="tv-main">
                  <small>{h.tv.event}</small>
                  <strong>{h.tv.homeTeam} <b>2 – 1</b> {h.tv.awayTeam}</strong>
                  <span>{h.tv.time}</span>
                </div>
                <div className="tv-guide">
                  {h.tv.guide.map((c, i) => <span key={c} className={i === 0 ? "on" : ""}>{c}</span>)}
                </div>
              </div>
            </div>
            <div className="tv-stand" />
            <div className="float-card fc-1"><b>4K</b> {h.tv.float1}</div>
            <div className="float-card fc-2"><b>24h</b> {h.tv.float2}</div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="shell stats-grid">
          {h.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section" id="features">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{h.features.kicker}</span>
            <h2>{h.features.title}</h2>
            <p>{h.features.text}</p>
          </div>
          <div className="feature-grid">
            {h.features.items.map(([icon, title, text]) => (
              <article className="card feature" key={title}>
                <span className="icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="how">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{h.how.kicker}</span>
            <h2>{h.how.title}</h2>
          </div>
          <div className="steps">
            {h.how.steps.map(([n, title, text]) => (
              <article className="step" key={n}>
                <span className="step-num">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="devices">
        <div className="shell devices">
          <div>
            <span className="kicker">{h.devices.kicker}</span>
            <h2>{h.devices.title}</h2>
            <p className="muted">{h.devices.text}</p>
            <div className="chips">{h.devices.list.map((x) => <span className="chip" key={x}>{x}</span>)}</div>
            <p className="section-link"><Link href={L("/setup")}>{h.devices.link}</Link></p>
          </div>
          <div>
            <span className="kicker">{h.apps.kicker}</span>
            <h2>{h.apps.title}</h2>
            <p className="muted">{h.apps.text}</p>
            <div className="chips">{d.trialForm.apps.slice(1, -1).map((a) => <span className="chip chip-alt" key={a}>{a}</span>)}</div>
            <p className="section-link"><Link href={L("/blog/best-iptv-apps-2026")}>{h.apps.link}</Link></p>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="pricing">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{h.pricing.kicker}</span>
            <h2>{h.pricing.title}</h2>
            <p>{h.pricing.text}</p>
          </div>
          <PlanGrid lang={lang} />
          <p className="secure"><span aria-hidden="true">🔒 </span>{h.pricing.secure}<Link href={L("/pricing")}>{h.pricing.compareAll}</Link></p>
        </div>
      </section>

      <Reviews lang={lang} />

      <section className="section section-alt" id="compare">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{h.compare.kicker}</span>
            <h2>{h.compare.title}</h2>
          </div>
          <div className="table-wrap">
            <table className="compare">
              <thead><tr><th>{h.compare.head[0]}</th><th className="us">{h.compare.head[1]}</th><th>{h.compare.head[2]}</th></tr></thead>
              <tbody>
                {h.compare.rows(tok("lowestMonthly")).map(([f, us, them]) => <tr key={f}><td>{f}</td><td className="us"><PriceText text={us} /></td><td><PriceText text={them} /></td></tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="trial">
        <div className="shell cta-banner">
          <div>
            <h2>{h.trialCta.title}</h2>
            <p>{h.trialCta.text}</p>
          </div>
          <a className="btn btn-white btn-lg" href={wa.trial} {...ext}><WhatsAppIcon /> {d.common.getFreeTrial}{newTab}</a>
        </div>
      </section>

      <section className="section section-alt" id="faq">
        <div className="shell faq">
          <div className="section-head left">
            <span className="kicker">{h.faq.kicker}</span>
            <h2>{h.faq.title}</h2>
            <p>{h.faq.text}</p>
            <a className="btn btn-wa" href={wa.contact} {...ext}><WhatsAppIcon /> {d.common.askWhatsApp}{newTab}</a>
          </div>
          <FaqList items={h.faq.items} />
        </div>
      </section>

      <section className="section" id="reseller">
        <div className="shell reseller card">
          <div>
            <span className="kicker">{h.reseller.kicker}</span>
            <h2>{h.reseller.title}</h2>
            <p className="muted">{h.reseller.text}</p>
            <ul className="reseller-list">{h.reseller.list.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="reseller-actions">
            <Link className="btn btn-primary btn-lg" href={L("/reseller")}>{h.reseller.seePrices}</Link>
            <a className="btn btn-wa btn-lg" href={wa.reseller} {...ext}><WhatsAppIcon /> {h.reseller.become}{newTab}</a>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="blog">
        <div className="shell">
          <div className="section-head">
            <span className="kicker">{h.blog.kicker}</span>
            <h2>{h.blog.title}</h2>
            <p>{h.blog.text}</p>
          </div>
          <div className="post-grid">{latest.map((p) => <PostCard key={p.slug} post={p} lang={lang} />)}</div>
          <div className="center"><Link className="btn btn-primary" href={L("/blog")}>{h.blog.viewAll}</Link></div>
        </div>
      </section>
    </main>
  );
}
