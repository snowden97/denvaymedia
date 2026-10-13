/**
 * Original vector illustrations used inside blog articles.
 * Drawn in SVG: sharp on every screen, tiny file size, no copyright issues.
 * All visible words come from the language dictionary (dict.ill), so every picture is translated.
 */
import type { Locale } from "@/i18n/config";
import { getDict, type Dict } from "@/i18n";

type Ill = Dict["ill"];

const C = { navy: "#0a1633", blue: "#1557ff", light: "#f3f6ff", line: "#c9d6ff", white: "#fff", green: "#0f7a3e", orange: "#c2410c", muted: "#5d6784" };

/**
 * Makes text that would be wider than `max` fit (long words in some languages):
 * first shrinks the font (down to 78%), and only squeezes the letters if it is still too long.
 */
function fit(text: string, fontSize: number, max: number) {
  const estimate = text.length * fontSize * 0.56;
  if (estimate <= max) return {};
  const scale = max / estimate;
  if (scale >= 0.78) return { fontSize: +(fontSize * scale).toFixed(1) };
  return { fontSize: +(fontSize * 0.78).toFixed(1), textLength: max, lengthAdjust: "spacingAndGlyphs" as const };
}

function Frame({ id, title, desc, viewBox, children }: { id: string; title: string; desc: string; viewBox: string; children: React.ReactNode }) {
  return (
    <svg viewBox={viewBox} role="img" aria-labelledby={`${id}-t ${id}-d`} className="illustration" xmlns="http://www.w3.org/2000/svg">
      <title id={`${id}-t`}>{title}</title>
      <desc id={`${id}-d`}>{desc}</desc>
      {children}
    </svg>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.blue} strokeWidth="4" strokeLinecap="round" markerEnd="url(#arrowhead)" />;
}

function Badge({ cx, cy, n }: { cx: number; cy: number; n: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="18" fill={C.blue} />
      <text x={cx} y={cy + 7} textAnchor="middle" fontSize="20" fontWeight="800" fill={C.white}>{n}</text>
    </g>
  );
}

/* ---------- 1. How IPTV works ---------- */
function HowIptvWorks({ t }: { t: Ill }) {
  const s = t.howItWorks;
  const node = (x: number, y: number, n: number, [title, sub]: string[], icon: React.ReactNode) => (
    <g>
      <rect x={x} y={y} width="250" height="175" rx="18" fill={C.light} stroke={C.line} strokeWidth="2" />
      <Badge cx={x + 34} cy={y + 34} n={n} />
      <g transform={`translate(${x + 95} ${y + 30})`}>{icon}</g>
      <text x={x + 125} y={y + 128} textAnchor="middle" fontSize="23" fontWeight="800" fill={C.navy} {...fit(title, 23, 225)}>{title}</text>
      <text x={x + 125} y={y + 156} textAnchor="middle" fontSize="17" fill={C.muted} {...fit(sub, 17, 225)}>{sub}</text>
    </g>
  );
  return (
    <Frame id="ill-how" title={s.title} desc={s.desc} viewBox="0 0 600 450">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill={C.blue} /></marker>
      </defs>
      {node(25, 25, 1, s.nodes[0], (
        <g><rect x="0" y="6" width="60" height="44" rx="6" fill={C.blue} />{[0, 1, 2, 3].map((i) => <g key={i}><rect x={6 + i * 14} y="10" width="7" height="6" fill={C.white} /><rect x={6 + i * 14} y="40" width="7" height="6" fill={C.white} /></g>)}<path d="M24 21 L24 35 L36 28 z" fill={C.white} /></g>
      ))}
      {node(325, 25, 2, s.nodes[1], (
        <g>{[0, 1, 2].map((i) => <g key={i}><rect x="0" y={i * 19} width="60" height="15" rx="4" fill={C.blue} /><circle cx="50" cy={i * 19 + 7.5} r="3" fill="#7dffb0" /></g>)}</g>
      ))}
      {node(325, 250, 3, s.nodes[2], (
        <g fill="none" stroke={C.blue} strokeWidth="4"><circle cx="30" cy="28" r="26" /><ellipse cx="30" cy="28" rx="11" ry="26" /><line x1="4" y1="28" x2="56" y2="28" /></g>
      ))}
      {node(25, 250, 4, s.nodes[3], (
        <g><rect x="0" y="4" width="60" height="40" rx="5" fill={C.navy} /><path d="M25 14 L25 34 L40 24 z" fill={C.white} /><rect x="22" y="47" width="16" height="5" fill={C.navy} /></g>
      ))}
      <Arrow x1={279} y1={112} x2={316} y2={112} />
      <Arrow x1={450} y1={204} x2={450} y2={240} />
      <Arrow x1={321} y1={337} x2={284} y2={337} />
    </Frame>
  );
}

/* ---------- 2. Devices ---------- */
function IptvDevices({ t }: { t: Ill }) {
  const s = t.devices;
  const cell = (x: number, y: number, label: string, icon: React.ReactNode) => (
    <g>
      <rect x={x} y={y} width="180" height="165" rx="16" fill={C.light} stroke={C.line} strokeWidth="2" />
      <g transform={`translate(${x + 50} ${y + 22})`}>{icon}</g>
      <text x={x + 90} y={y + 140} textAnchor="middle" fontSize="20" fontWeight="700" fill={C.navy} {...fit(label, 20, 160)}>{label}</text>
    </g>
  );
  return (
    <Frame id="ill-devices" title={s.title} desc={s.desc} viewBox="0 0 600 380">
      {cell(15, 15, s.labels[0], <g><rect x="0" y="0" width="80" height="52" rx="5" fill={C.navy} /><rect x="5" y="5" width="70" height="42" rx="2" fill={C.blue} /><rect x="32" y="54" width="16" height="10" fill={C.navy} /><rect x="20" y="64" width="40" height="5" rx="2" fill={C.navy} /></g>)}
      {cell(210, 15, s.labels[1], <g><rect x="8" y="22" width="56" height="20" rx="6" fill={C.navy} /><rect x="64" y="27" width="12" height="10" rx="2" fill="#7a86a8" /><rect x="22" y="48" width="18" height="34" rx="8" fill={C.blue} transform="rotate(-20 31 65)" /></g>)}
      {cell(405, 15, s.labels[2], <g><rect x="0" y="22" width="80" height="34" rx="8" fill={C.navy} /><circle cx="66" cy="39" r="4" fill="#7dffb0" /><rect x="10" y="34" width="30" height="4" rx="2" fill={C.blue} /></g>)}
      {cell(15, 200, s.labels[3], <g><rect x="22" y="0" width="38" height="72" rx="8" fill={C.navy} /><rect x="26" y="8" width="30" height="54" rx="2" fill={C.blue} /><path d="M37 28 L37 42 L48 35 z" fill={C.white} /></g>)}
      {cell(210, 200, s.labels[4], <g><rect x="8" y="0" width="64" height="76" rx="8" fill={C.navy} /><rect x="13" y="7" width="54" height="60" rx="2" fill={C.blue} /><path d="M35 28 L35 46 L49 37 z" fill={C.white} /></g>)}
      {cell(405, 200, s.labels[5], <g><rect x="6" y="4" width="68" height="46" rx="4" fill={C.navy} /><rect x="11" y="9" width="58" height="36" rx="2" fill={C.blue} /><path d="M0 54 L80 54 L74 62 L6 62 z" fill={C.navy} /></g>)}
    </Frame>
  );
}

/* ---------- 3. Internet speed chart ---------- */
function SpeedChart({ t }: { t: Ill }) {
  const s = t.speed;
  const rows: [string, number, string][] = [[s.labels[0], 5, C.line], [s.labels[1], 10, "#7fa6ff"], [s.labels[2], 15, C.blue], [s.labels[3], 25, C.navy]];
  const max = 25, barMax = 330;
  return (
    <Frame id="ill-speed" title={s.title} desc={s.desc} viewBox="0 0 600 300">
      {rows.map(([label, v, color], i) => {
        const y = 30 + i * 65;
        return (
          <g key={i}>
            <text x="20" y={y + 30} fontSize="22" fontWeight="700" fill={C.navy} {...fit(label, 22, 100)}>{label}</text>
            <rect x="130" y={y + 6} width={barMax} height="36" rx="10" fill={C.light} />
            <rect x="130" y={y + 6} width={(v / max) * barMax} height="36" rx="10" fill={color} />
            <text x={130 + barMax + 16} y={y + 31} fontSize="22" fontWeight="800" fill={C.navy}>{v} Mbps</text>
          </g>
        );
      })}
      <text x="20" y="292" fontSize="16" fill={C.muted} {...fit(s.note, 16, 560)}>{s.note}</text>
    </Frame>
  );
}

/* ---------- 4. Start in 5 steps ---------- */
function StartSteps({ t }: { t: Ill }) {
  const s = t.steps;
  return (
    <Frame id="ill-steps" title={s.title} desc={s.desc} viewBox="0 0 600 420">
      <line x1="58" y1="50" x2="58" y2="370" stroke={C.line} strokeWidth="6" strokeLinecap="round" />
      {s.items.map((step, i) => {
        const y = 50 + i * 80;
        const last = i === s.items.length - 1;
        return (
          <g key={i}>
            <circle cx="58" cy={y} r="28" fill={last ? C.green : C.blue} />
            <text x="58" y={y + 9} textAnchor="middle" fontSize="26" fontWeight="800" fill={C.white}>{last ? "✓" : i + 1}</text>
            <rect x="110" y={y - 28} width="470" height="56" rx="14" fill={C.light} />
            <text x="132" y={y + 8} fontSize="23" fontWeight="700" fill={C.navy} {...fit(step, 23, 430)}>{step}</text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ---------- 5. Free trial featured image ---------- */
function TrialHero({ t }: { t: Ill }) {
  const s = t.trialHero;
  return (
    <Frame id="ill-trial-hero" title={s.title} desc={s.desc} viewBox="0 0 600 315">
      <defs>
        <linearGradient id="trialBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0a1633" /><stop offset=".6" stopColor="#122250" /><stop offset="1" stopColor="#0d2f8f" /></linearGradient>
        <linearGradient id="trialScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1f8f4e" /><stop offset="1" stopColor="#07301a" /></linearGradient>
        <clipPath id="trialClip"><rect width="600" height="315" rx="24" /></clipPath>
      </defs>
      <rect width="600" height="315" rx="24" fill="url(#trialBg)" />
      <circle cx="520" cy="40" r="120" fill="#2f6bff" opacity=".25" clipPath="url(#trialClip)" />
      <rect x="40" y="60" width="300" height="180" rx="14" fill="#050b1c" />
      <rect x="50" y="70" width="280" height="160" rx="8" fill="url(#trialScreen)" />
      <line x1="190" y1="70" x2="190" y2="230" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <circle cx="190" cy="150" r="30" fill="none" stroke="#fff" strokeOpacity=".25" strokeWidth="2" />
      <rect x="62" y="82" width="70" height="22" rx="6" fill="#e8323c" />
      <text x="97" y="98" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff" {...fit(s.live, 13, 62)}>{s.live}</text>
      <rect x="62" y="186" width="170" height="32" rx="8" fill="#050b1c" opacity=".75" />
      <text x="74" y="207" fontSize="15" fontWeight="700" fill="#fff" {...fit(s.access, 15, 148)}>{s.access}</text>
      <rect x="160" y="240" width="60" height="14" fill="#1a2748" />
      <rect x="130" y="254" width="120" height="8" rx="4" fill="#1a2748" />
      <circle cx="455" cy="140" r="88" fill="#c2410c" />
      <circle cx="455" cy="140" r="76" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="3" strokeDasharray="6 8" />
      <text x="455" y="138" textAnchor="middle" fontSize="58" fontWeight="800" fill="#fff">24h</text>
      <text x="455" y="172" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff" {...fit(s.badge, 22, 140)}>{s.badge}</text>
      <rect x="360" y="248" width="220" height="40" rx="20" fill="#0f7a3e" />
      <text x="470" y="274" textAnchor="middle" fontSize="17" fontWeight="700" fill="#fff" {...fit(s.noCard, 17, 196)}>{s.noCard}</text>
    </Frame>
  );
}

/* ---------- 6. Free trial timeline ---------- */
function TrialTimeline({ t }: { t: Ill }) {
  const s = t.timeline;
  return (
    <Frame id="ill-timeline" title={s.title} desc={s.desc} viewBox="0 0 600 400">
      <line x1="300" y1="40" x2="300" y2="360" stroke={C.line} strokeWidth="6" strokeLinecap="round" />
      {s.steps.map(([title, sub, time], i) => {
        const y = 60 + i * 95;
        const left = i % 2 === 0;
        const last = i === s.steps.length - 1;
        return (
          <g key={i}>
            <circle cx="300" cy={y} r="24" fill={last ? C.green : C.blue} />
            <text x="300" y={y + 8} textAnchor="middle" fontSize="22" fontWeight="800" fill={C.white}>{i + 1}</text>
            <rect x={left ? 30 : 345} y={y - 38} width="225" height="76" rx="14" fill={C.light} stroke={C.line} strokeWidth="2" />
            <text x={left ? 48 : 363} y={y - 8} fontSize="21" fontWeight="800" fill={C.navy} {...fit(title, 21, 190)}>{title}</text>
            <text x={left ? 48 : 363} y={y + 20} fontSize="16" fill={C.muted} {...fit(sub, 16, 190)}>{sub}</text>
            <text x={left ? 336 : 264} y={y + 6} textAnchor={left ? "start" : "end"} fontSize="16" fontWeight="700" fill={C.orange} {...fit(time, 16, 230)}>{time}</text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ---------- 7. Safe vs risky trial ---------- */
function SafeVsRiskyTrial({ t }: { t: Ill }) {
  const s = t.safeRisky;
  const col = (x: number, title: string, items: string[], color: string, mark: string) => (
    <g>
      <rect x={x} y="20" width="270" height="360" rx="18" fill={C.light} stroke={color} strokeWidth="3" />
      <rect x={x} y="20" width="270" height="62" rx="18" fill={color} />
      <rect x={x} y="60" width="270" height="22" fill={color} />
      <text x={x + 135} y="60" textAnchor="middle" fontSize="23" fontWeight="800" fill={C.white} {...fit(title, 23, 240)}>{title}</text>
      {items.map((it, i) => (
        <g key={i}>
          <circle cx={x + 32} cy={118 + i * 55} r="15" fill={color} />
          <text x={x + 32} y={124 + i * 55} textAnchor="middle" fontSize="17" fontWeight="800" fill={C.white}>{mark}</text>
          <text x={x + 58} y={124 + i * 55} fontSize="18" fontWeight="600" fill={C.navy} {...fit(it, 18, 200)}>{it}</text>
        </g>
      ))}
    </g>
  );
  return (
    <Frame id="ill-safe-risky" title={s.title} desc={s.desc} viewBox="0 0 600 400">
      {col(20, s.safeTitle, s.safe, C.green, "✓")}
      {col(310, s.riskyTitle, s.risky, "#b42318", "✕")}
    </Frame>
  );
}

/* ---------- Featured pictures for articles (one template, many topics) ---------- */

/** Simple original icons (no brand logos), drawn in a ~220×170 box. */
const heroIcons = {
  stick: (
    <g>
      <rect x="0" y="0" width="200" height="124" rx="10" fill="#050b1c" />
      <rect x="8" y="8" width="184" height="108" rx="5" fill={C.blue} />
      <path d="M88 42 L88 82 L120 62 z" fill={C.white} />
      <rect x="86" y="128" width="28" height="12" fill="#1a2748" />
      <rect x="150" y="140" width="64" height="22" rx="7" fill="#1a2748" />
      <rect x="210" y="145" width="14" height="12" rx="2" fill="#7a86a8" />
    </g>
  ),
  tv: (
    <g>
      <rect x="0" y="0" width="220" height="136" rx="10" fill="#050b1c" />
      <rect x="8" y="8" width="204" height="120" rx="5" fill="#1f8f4e" />
      <line x1="110" y1="8" x2="110" y2="128" stroke="#fff" strokeOpacity=".3" strokeWidth="2" />
      <circle cx="110" cy="68" r="24" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="2" />
      <rect x="18" y="16" width="44" height="18" rx="5" fill="#e8323c" />
      <circle cx="40" cy="25" r="4" fill="#fff" />
      <rect x="92" y="140" width="36" height="12" fill="#1a2748" />
      <rect x="70" y="152" width="80" height="8" rx="4" fill="#1a2748" />
    </g>
  ),
  buffering: (
    <g>
      <rect x="0" y="0" width="220" height="136" rx="10" fill="#050b1c" />
      <rect x="8" y="8" width="204" height="120" rx="5" fill="#16245a" />
      <circle cx="110" cy="68" r="34" fill="none" stroke="#2c3e7a" strokeWidth="10" />
      <path d="M110 34 A34 34 0 0 1 144 68" fill="none" stroke="#7fa6ff" strokeWidth="10" strokeLinecap="round" />
      <path d="M182 92 L166 122 L180 122 L170 150 L200 112 L184 112 L196 92 z" fill="#ffb400" />
      <rect x="92" y="140" width="36" height="12" fill="#1a2748" />
    </g>
  ),
  legal: (
    <g>
      <path d="M90 0 L170 30 L170 90 C170 130 135 155 90 170 C45 155 10 130 10 90 L10 30 z" fill={C.blue} />
      <path d="M90 14 L156 39 L156 90 C156 122 128 143 90 156 C52 143 24 122 24 90 L24 39 z" fill="#2f6bff" />
      <path d="M58 86 L82 110 L124 64" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  apps: (
    <g>
      <rect x="40" y="0" width="100" height="170" rx="16" fill="#050b1c" />
      <rect x="48" y="12" width="84" height="146" rx="6" fill="#16245a" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <rect key={`${r}-${c}`} x={56 + c * 26} y={24 + r * 30} width="20" height="20" rx="5" fill={[C.blue, "#7fa6ff", "#ffb400", "#0f7a3e", "#e8323c", C.blue, "#7fa6ff", "#0f7a3e", "#ffb400"][r * 3 + c]} />))}
      <rect x="56" y="118" width="68" height="26" rx="8" fill={C.orange} />
      <path d="M85 124 L85 138 L97 131 z" fill="#fff" />
    </g>
  ),
  versus: (
    <g>
      <rect x="0" y="40" width="90" height="60" rx="8" fill="#050b1c" />
      <rect x="6" y="46" width="78" height="48" rx="4" fill={C.blue} />
      <path d="M36 58 L36 82 L54 70 z" fill="#fff" />
      <circle cx="115" cy="70" r="26" fill={C.orange} />
      <text x="115" y="79" textAnchor="middle" fontSize="24" fontWeight="800" fill="#fff">VS</text>
      <path d="M150 100 A50 50 0 0 1 210 40" fill="none" stroke="#c9d6ff" strokeWidth="10" />
      <path d="M160 100 L200 50" stroke="#c9d6ff" strokeWidth="5" />
      <rect x="168" y="100" width="34" height="10" rx="3" fill="#c9d6ff" />
      <rect x="140" y="125" width="80" height="14" rx="7" fill="#1a2748" />
    </g>
  ),
  speed: (
    <g>
      <path d="M20 140 A90 90 0 0 1 200 140" fill="none" stroke="#2c3e7a" strokeWidth="22" strokeLinecap="round" />
      <path d="M20 140 A90 90 0 0 1 160 66" fill="none" stroke="#7dffb0" strokeWidth="22" strokeLinecap="round" />
      <line x1="110" y1="140" x2="160" y2="80" stroke="#fff" strokeWidth="8" strokeLinecap="round" />
      <circle cx="110" cy="140" r="14" fill="#fff" />
      <text x="110" y="178" textAnchor="middle" fontSize="22" fontWeight="800" fill="#fff">Mbps</text>
    </g>
  ),
  reseller: (
    <g>
      {[0, 1, 2, 3].map((i) => <rect key={i} x={10 + i * 40} y={120 - i * 30} width="28" height={40 + i * 30} rx="6" fill={i === 3 ? "#7dffb0" : "#7fa6ff"} />)}
      <path d="M14 110 L60 80 L100 92 L170 30" fill="none" stroke="#ffb400" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M150 26 L174 26 L174 50" fill="none" stroke="#ffb400" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="200" cy="140" r="26" fill="#ffb400" />
      <text x="200" y="149" textAnchor="middle" fontSize="26" fontWeight="800" fill="#7a4b00">$</text>
    </g>
  ),
  checklist: (
    <g>
      <rect x="30" y="10" width="150" height="165" rx="14" fill="#fff" />
      <rect x="75" y="0" width="60" height="22" rx="8" fill="#7fa6ff" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="62" cy={48 + i * 34} r="11" fill={i < 3 ? C.green : "#c9d6ff"} />
          {i < 3 && <path d={`M56 ${48 + i * 34} L61 ${53 + i * 34} L69 ${43 + i * 34}`} fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />}
          <rect x="84" y={42 + i * 34} width={i % 2 ? 70 : 82} height="12" rx="6" fill="#c9d6ff" />
        </g>
      ))}
    </g>
  ),
  mag: (
    <g>
      <rect x="0" y="60" width="160" height="56" rx="12" fill="#050b1c" />
      <rect x="12" y="80" width="60" height="6" rx="3" fill={C.blue} />
      <circle cx="140" cy="88" r="6" fill="#7dffb0" />
      <rect x="10" y="116" width="16" height="8" rx="2" fill="#1a2748" />
      <rect x="134" y="116" width="16" height="8" rx="2" fill="#1a2748" />
      <rect x="180" y="20" width="44" height="140" rx="20" fill="#1a2748" />
      <circle cx="202" cy="50" r="10" fill={C.orange} />
      {[0, 1, 2].map((r) => [0, 1].map((c) => <circle key={`${r}${c}`} cx={194 + c * 16} cy={84 + r * 20} r="5" fill="#7a86a8" />))}
    </g>
  ),
  mobile: (
    <g>
      <rect x="0" y="10" width="130" height="160" rx="14" fill="#050b1c" />
      <rect x="8" y="20" width="114" height="140" rx="5" fill={C.blue} />
      <path d="M56 70 L56 110 L88 90 z" fill="#fff" />
      <rect x="140" y="40" width="76" height="134" rx="14" fill="#050b1c" />
      <rect x="146" y="52" width="64" height="110" rx="5" fill="#7fa6ff" />
      <path d="M170 92 L170 122 L194 107 z" fill="#fff" />
    </g>
  ),
  tvbox: (
    <g>
      <rect x="0" y="0" width="190" height="116" rx="10" fill="#050b1c" />
      <rect x="8" y="8" width="174" height="100" rx="5" fill={C.blue} />
      <path d="M80 36 L80 80 L114 58 z" fill="#fff" />
      <rect x="20" y="130" width="120" height="36" rx="10" fill="#050b1c" />
      <circle cx="124" cy="148" r="5" fill="#7dffb0" />
      <rect x="160" y="90" width="56" height="90" rx="10" fill="#1a2748" />
      <rect x="166" y="100" width="44" height="66" rx="4" fill="#7fa6ff" />
    </g>
  ),
  laptop: (
    <g>
      <rect x="20" y="10" width="180" height="120" rx="10" fill="#050b1c" />
      <rect x="28" y="18" width="164" height="104" rx="4" fill={C.blue} />
      <path d="M96 46 L96 94 L134 70 z" fill="#fff" />
      <path d="M0 138 L220 138 L206 158 L14 158 z" fill="#1a2748" />
      <rect x="90" y="140" width="40" height="6" rx="3" fill="#7a86a8" />
    </g>
  ),
  book: (
    <g>
      <path d="M110 30 C80 10 40 10 10 20 L10 160 C40 150 80 150 110 170 z" fill="#7fa6ff" />
      <path d="M110 30 C140 10 180 10 210 20 L210 160 C180 150 140 150 110 170 z" fill={C.blue} />
      {[0, 1, 2, 3].map((i) => <g key={i}><rect x="30" y={46 + i * 24} width="60" height="8" rx="4" fill="#dbe6ff" /><rect x="130" y={46 + i * 24} width="60" height="8" rx="4" fill="#9fbcff" /></g>)}
    </g>
  ),
  question: (
    <g>
      <rect x="0" y="30" width="190" height="120" rx="10" fill="#050b1c" />
      <rect x="8" y="38" width="174" height="104" rx="5" fill={C.blue} />
      <path d="M150 10 A40 40 0 0 1 150 50" fill="none" stroke="#7dffb0" strokeWidth="6" strokeLinecap="round" opacity=".6" />
      <path d="M162 0 A55 55 0 0 1 162 60" fill="none" stroke="#7dffb0" strokeWidth="6" strokeLinecap="round" opacity=".35" />
      <circle cx="170" cy="130" r="38" fill={C.orange} />
      <text x="170" y="146" textAnchor="middle" fontSize="44" fontWeight="800" fill="#fff">?</text>
      <rect x="70" y="150" width="50" height="10" fill="#1a2748" />
    </g>
  ),
};

type HeroIcon = keyof typeof heroIcons;

/** Which icon each article's featured picture uses (the words come from dict.ill.heroes). */
const heroIconOf = {
  "hero-firestick": "stick",
  "hero-what-is-iptv": "question",
  "hero-buffering": "buffering",
  "hero-legal": "legal",
  "hero-apps": "apps",
  "hero-smart-tv": "tv",
  "hero-vs-cable": "versus",
  "hero-speed": "speed",
  "hero-reseller": "reseller",
  "hero-test-trial": "checklist",
  "hero-mag": "mag",
  "hero-apple": "mobile",
  "hero-android": "tvbox",
  "hero-computer": "laptop",
  "hero-complete-guide": "book",
} satisfies Record<keyof Ill["heroes"], HeroIcon>;

type HeroName = keyof typeof heroIconOf;

function HeroCard({ id, t }: { id: HeroName; t: Ill }) {
  const { title, desc, label, lines, chips } = t.heroes[id];
  const chipW = (c: string) => Math.min(c.length * 9.5 + 28, 150);
  return (
    <Frame id={id} title={title} desc={desc} viewBox="0 0 600 315">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0a1633" /><stop offset=".6" stopColor="#122250" /><stop offset="1" stopColor="#0d2f8f" /></linearGradient>
        <clipPath id={`${id}-clip`}><rect width="600" height="315" rx="24" /></clipPath>
      </defs>
      <rect width="600" height="315" rx="24" fill={`url(#${id}-bg)`} />
      <g clipPath={`url(#${id}-clip)`}>
        <circle cx="150" cy="160" r="140" fill="#2f6bff" opacity=".18" />
        <circle cx="560" cy="20" r="110" fill="#2f6bff" opacity=".18" />
      </g>
      <g transform="translate(40 70)">{heroIcons[heroIconOf[id]]}</g>
      <rect x="310" y="62" width={Math.min(label.length * 11 + 34, 270)} height="32" rx="16" fill={C.orange} />
      <text x="327" y="84" fontSize="16" fontWeight="800" fill="#fff" letterSpacing="1" {...fit(label, 17.5, 236)}>{label}</text>
      {lines.map((l, i) => <text key={i} x="310" y={140 + i * 42} fontSize="36" fontWeight="800" fill="#fff" {...fit(l, 36, 270)}>{l}</text>)}
      {chips.map((c, i) => {
        const x = 310 + chips.slice(0, i).reduce((w, s) => w + chipW(s) + 12, 0);
        return (
          <g key={i}>
            <rect x={x} y={140 + lines.length * 42 - 6} width={chipW(c)} height="32" rx="16" fill="#ffffff" fillOpacity=".14" />
            <text x={x + 14} y={140 + lines.length * 42 + 15} fontSize="16" fontWeight="700" fill="#fff" {...fit(c, 16, chipW(c) - 28)}>{c}</text>
          </g>
        );
      })}
    </Frame>
  );
}

const heroIllustrations = Object.fromEntries(
  (Object.keys(heroIconOf) as HeroName[]).map((name) => [name, ({ t }: { t: Ill }) => <HeroCard id={name} t={t} />]),
) as Record<HeroName, (p: { t: Ill }) => React.JSX.Element>;

export const illustrations = {
  ...heroIllustrations,
  "trial-hero": TrialHero,
  "trial-timeline": TrialTimeline,
  "safe-vs-risky-trial": SafeVsRiskyTrial,
  "how-iptv-works": HowIptvWorks,
  devices: IptvDevices,
  "speed-chart": SpeedChart,
  "start-steps": StartSteps,
};

export type IllustrationName = keyof typeof illustrations;

/** Renders an illustration by name, with its words in the given language. */
export function Picture({ name, lang }: { name: IllustrationName; lang: Locale }) {
  const Illustration = illustrations[name];
  return <Illustration t={getDict(lang).ill} />;
}
