"use client";

import { useState } from "react";
import type { Category } from "@/lib/posts";

type Labels = { filter: string; all: string; articles: string; categories: Record<Category, string>; showing: (n: number, cat: string | null) => string };

/** Category filter. Cards are rendered on the server and passed in, already translated. */
export default function BlogList({ items, labels, showing }: { items: { category: Category; card: React.ReactNode }[]; labels: Omit<Labels, "showing">; showing: Record<string, string> }) {
  const [active, setActive] = useState<Category | "All">("All");
  const cats = Object.keys(labels.categories) as Category[];
  const shown = active === "All" ? items : items.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label={labels.filter}>
        {(["All", ...cats] as const).map((c) => (
          <button key={c} type="button" aria-pressed={active === c} className={`filter${active === c ? " on" : ""}`} onClick={() => setActive(c)}>
            {c === "All" ? labels.all : labels.categories[c]}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{showing[active]}</p>
      <h2 className="sr-only">{labels.articles}</h2>
      <div className="post-grid">{shown.map((p, i) => <div key={i} className="post-grid-item">{p.card}</div>)}</div>
    </>
  );
}
