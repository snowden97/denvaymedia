import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n";
import { perMonth, planName, plans, savings } from "@/lib/plans";
import { getWa } from "@/lib/site";
import { Price, WaLink } from "./Currency";
import PriceText from "./PriceText";

export default function PlanGrid({ lang }: { lang: Locale }) {
  const d = getDict(lang);
  const wa = getWa(lang);
  return (
    <div className="plan-grid">
      {plans.map((plan) => {
        const save = savings(plan);
        const name = planName(lang, plan);
        return (
          <article className={`plan${plan.badge === "mostPopular" ? " plan-featured" : ""}`} key={plan.months}>
            {plan.badge && <span className="badge">{d.common.badges[plan.badge]}</span>}
            <h3>{name}</h3>
            <p className="price"><Price k={`plan:${plan.months}`} /></p>
            <p className="per"><PriceText text={perMonth(lang, plan)} /></p>
            <p className="save">{save > 0 ? d.common.save(save) : " "}</p>
            <ul>{d.plans.features.map((f) => <li key={f}>✓ {f}</li>)}</ul>
            <WaLink className="btn btn-accent btn-block" message={wa.planMessage(name, plan.months)}>
              {d.plans.buy}<span className="sr-only">{d.plans.buySr(name)}</span>
            </WaLink>
          </article>
        );
      })}
    </div>
  );
}
