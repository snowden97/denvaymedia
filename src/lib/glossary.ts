import type { Locale } from "@/i18n/config";
import { glossaryTranslations } from "@/content/glossary";

export type Term = {
  id: string; // used as the #anchor
  term: string;
  definition: string;
  link?: { href: string; label: string };
};

/** Translated text for one term (the id and link address come from the English master). */
export type TermText = { term: string; definition: string; linkLabel?: string };

/** Glossary in the given language (English for any term not translated). */
export function getGlossary(lang: Locale): Term[] {
  const t = glossaryTranslations[lang];
  if (!t) return glossary;
  return glossary.map((g) => {
    const tr = t[g.id];
    if (!tr) return g;
    return { ...g, term: tr.term, definition: tr.definition, link: g.link && { ...g.link, label: tr.linkLabel ?? g.link.label } };
  });
}

/** IPTV words explained in plain, simple English. Sorted A–Z on the page. */
export const glossary: Term[] = [
  { id: "4k", term: "4K (Ultra HD)", definition: "A very sharp picture, four times more detailed than Full HD. You need about 25 Mbps of internet speed for one 4K stream.", link: { href: "/blog/internet-speed-for-iptv", label: "Internet speed for IPTV" } },
  { id: "anti-freeze", term: "Anti-freeze", definition: "Server technology that spreads viewers across several servers, so the picture does not stop when many people watch at the same time." },
  { id: "buffering", term: "Buffering", definition: "When the video stops for a moment to load more data. It is usually caused by weak Wi-Fi, a slow device or a busy internet connection.", link: { href: "/blog/fix-iptv-buffering", label: "How to fix buffering" } },
  { id: "catch-up", term: "Catch-up TV", definition: "A feature that lets you watch programmes that were shown in the last few days, at any time." },
  { id: "connection", term: "Connection", definition: "The number of devices that can watch at the same time with one subscription. One connection means one device at a time." },
  { id: "credit", term: "Credit (reseller)", definition: "The unit a reseller uses to create subscriptions. At DenvayStream, 1 credit = 1 month of service for one customer.", link: { href: "/reseller", label: "Reseller credit packs" } },
  { id: "epg", term: "EPG (TV guide)", definition: "Electronic Programme Guide. A list on your screen that shows what is on now and what is coming next on each channel." },
  { id: "ethernet", term: "Ethernet cable", definition: "A network cable that connects your TV or TV box directly to your router. It gives a more stable connection than Wi-Fi." },
  { id: "fhd", term: "FHD (Full HD)", definition: "A clear, sharp picture with 1080 lines (1080p). You need about 15 Mbps of internet speed for one Full HD stream." },
  { id: "firestick", term: "Firestick", definition: "A small streaming stick from Amazon that plugs into your TV's HDMI port. It is one of the most popular devices for IPTV.", link: { href: "/blog/how-to-install-iptv-on-firestick", label: "Firestick setup guide" } },
  { id: "hd", term: "HD", definition: "High Definition. A good picture with 720 lines (720p). You need about 10 Mbps of internet speed for one HD stream." },
  { id: "iptv", term: "IPTV", definition: "Internet Protocol Television. TV channels, movies and series delivered over your internet connection instead of a satellite dish or cable.", link: { href: "/blog/what-is-iptv-beginners-guide", label: "What is IPTV?" } },
  { id: "live-tv", term: "Live TV", definition: "Channels you watch at the same time as they are broadcast, like normal TV." },
  { id: "m3u", term: "M3U link (playlist)", definition: "A web link or file that contains the channel list of your subscription. You can paste it into players like VLC." },
  { id: "mac-address", term: "MAC address", definition: "A unique code that identifies your device, like 00:1A:79:XX:XX:XX. MAG boxes and some Smart TV apps use it to connect your subscription.", link: { href: "/blog/iptv-on-mag-box", label: "MAG box setup guide" } },
  { id: "mag-box", term: "MAG box", definition: "A small TV box made only for IPTV. It uses a portal URL and is easy to use with a remote control.", link: { href: "/blog/iptv-on-mag-box", label: "MAG box setup guide" } },
  { id: "mbps", term: "Mbps", definition: "Megabits per second. The unit used to measure internet speed. More Mbps means a faster connection." },
  { id: "player-app", term: "Player app", definition: "The app you use to watch IPTV, such as TiviMate, IPTV Smarters or VLC. The app does not include channels — they come from your subscription.", link: { href: "/blog/best-iptv-apps-2026", label: "Best IPTV apps" } },
  { id: "portal-url", term: "Portal URL", definition: "A web address you type into a MAG box (and some apps) to load your IPTV service." },
  { id: "reseller-panel", term: "Reseller panel", definition: "A website where resellers create, renew and manage their customers' subscriptions using credits.", link: { href: "/blog/how-to-start-iptv-reseller-business", label: "How to start as a reseller" } },
  { id: "server-url", term: "Server URL", definition: "The web address of the IPTV server. You type it in your player app together with your username and password." },
  { id: "smart-tv", term: "Smart TV", definition: "A TV that connects to the internet and can install apps. Most Samsung and LG Smart TVs can run IPTV apps directly.", link: { href: "/blog/iptv-smart-tv-samsung-lg", label: "Smart TV setup guide" } },
  { id: "trial", term: "Free trial", definition: "A short test of the service before you pay. DenvayStream offers a free 24-hour trial with full access.", link: { href: "/free-trial", label: "Get a free trial" } },
  { id: "vod", term: "VOD (video on demand)", definition: "Movies and series you can start whenever you want, pause and watch again." },
  { id: "vpn", term: "VPN", definition: "A service that hides and protects your internet traffic. It is not needed for IPTV, but some people use one if their internet provider slows down video." },
  { id: "xtream-codes", term: "Xtream Codes login", definition: "A way to log in to IPTV apps with three details: a username, a password and a server URL. Most player apps support it." },
];
