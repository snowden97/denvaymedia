"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { Dict } from "@/i18n";

type Props = { t: Dict["trialForm"]; msg: Dict["wa"]["form"]; languageName: string; whatsapp: string };

export default function TrialForm({ t, msg, languageName, whatsapp }: Props) {
  const [name, setName] = useState("");
  const [device, setDevice] = useState(t.devices[0]);
  const [app, setApp] = useState(t.apps[0]);
  const [country, setCountry] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      msg.intro,
      `${msg.name}: ${name.trim()}`,
      `${msg.device}: ${device}`,
      `${msg.app}: ${app}`,
      country.trim() && `${msg.country}: ${country.trim()}`,
      `${msg.language}: ${languageName}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="trial-form" id="top-form" onSubmit={submit}>
      <h2>{t.title}</h2>
      <p className="form-sub">{t.sub}</p>
      <label>
        {t.name}
        <input required value={name} onChange={(e) => setName(e.target.value)} placeholder={t.namePh} autoComplete="given-name" />
      </label>
      <label>
        {t.device}
        <select value={device} onChange={(e) => setDevice(e.target.value)}>
          {t.devices.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label>
        {t.app}
        <select value={app} onChange={(e) => setApp(e.target.value)}>
          {t.apps.map((x) => <option key={x}>{x}</option>)}
        </select>
      </label>
      <label>
        {t.country} <span className="optional">{t.optional}</span>
        <input value={country} onChange={(e) => setCountry(e.target.value)} placeholder={t.countryPh} autoComplete="country-name" />
      </label>
      <button className="btn btn-wa btn-lg btn-block" type="submit"><WhatsAppIcon /> {t.submit}</button>
      <p className="form-note"><span aria-hidden="true">🔒 </span>{t.note}</p>
    </form>
  );
}
