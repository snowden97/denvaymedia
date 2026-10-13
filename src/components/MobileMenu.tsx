"use client";

import { useRef } from "react";
import Link from "next/link";

/** Phone menu that closes itself after a link is chosen. */
export default function MobileMenu({ links, whatsapp, labels }: { links: [string, string][]; whatsapp: string; labels: { menu: string; contact: string; newTab: string } }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute("open");

  return (
    <details className="mobile-menu" ref={ref}>
      <summary aria-label={labels.menu}><span aria-hidden="true">☰</span></summary>
      <div>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={close}>{label}</Link>)}
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={close}>
          {labels.contact}<span className="sr-only">{labels.newTab}</span>
        </a>
      </div>
    </details>
  );
}
