import type { TermText } from "@/lib/glossary";

const de: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Ein sehr scharfes Bild, viermal detailreicher als Full HD. Für einen 4K-Stream brauchst du etwa 25 Mbit/s Internetgeschwindigkeit.", linkLabel: "Internetgeschwindigkeit für IPTV" },
  "anti-freeze": { term: "Anti-Freeze", definition: "Eine Servertechnik, die Zuschauer auf mehrere Server verteilt, damit das Bild nicht hängen bleibt, wenn viele gleichzeitig schauen." },
  buffering: { term: "Puffern (Ruckeln)", definition: "Wenn das Video kurz stoppt, um mehr Daten zu laden. Meist liegt das an schwachem WLAN, einem langsamen Gerät oder einer ausgelasteten Internetverbindung.", linkLabel: "So behebst du Ruckeln" },
  "catch-up": { term: "Catch-up (Mediathek)", definition: "Eine Funktion, mit der du Sendungen der letzten Tage jederzeit ansehen kannst." },
  connection: { term: "Verbindung", definition: "Die Anzahl der Geräte, die mit einem Abo gleichzeitig schauen können. Eine Verbindung = ein Gerät gleichzeitig." },
  credit: { term: "Credit (Reseller)", definition: "Die Einheit, mit der ein Reseller Abos erstellt. Bei DenvayStream gilt: 1 Credit = 1 Monat Service für einen Kunden.", linkLabel: "Reseller-Credit-Pakete" },
  epg: { term: "EPG (TV-Guide)", definition: "Electronic Programme Guide. Eine Liste auf dem Bildschirm, die zeigt, was gerade und als Nächstes auf jedem Sender läuft." },
  ethernet: { term: "LAN-Kabel (Ethernet)", definition: "Ein Netzwerkkabel, das deinen Fernseher oder deine TV-Box direkt mit dem Router verbindet. Es ist stabiler als WLAN." },
  fhd: { term: "FHD (Full HD)", definition: "Ein klares, scharfes Bild mit 1080 Zeilen (1080p). Für einen Full-HD-Stream brauchst du etwa 15 Mbit/s." },
  firestick: { term: "Firestick", definition: "Ein kleiner Streaming-Stick von Amazon, der in den HDMI-Anschluss deines Fernsehers kommt. Eines der beliebtesten Geräte für IPTV.", linkLabel: "Firestick-Anleitung" },
  hd: { term: "HD", definition: "High Definition. Ein gutes Bild mit 720 Zeilen (720p). Für einen HD-Stream brauchst du etwa 10 Mbit/s." },
  iptv: { term: "IPTV", definition: "Internet Protocol Television. TV-Sender, Filme und Serien über deine Internetverbindung statt über Satellitenschüssel oder Kabel.", linkLabel: "Was ist IPTV?" },
  "live-tv": { term: "Live-TV", definition: "Sender, die du gleichzeitig mit der Ausstrahlung schaust, wie beim normalen Fernsehen." },
  m3u: { term: "M3U-Link (Playlist)", definition: "Ein Weblink oder eine Datei mit der Senderliste deines Abos. Du kannst ihn in Player wie VLC einfügen." },
  "mac-address": { term: "MAC-Adresse", definition: "Ein eindeutiger Code für dein Gerät, zum Beispiel 00:1A:79:XX:XX:XX. MAG-Boxen und manche Smart-TV-Apps nutzen ihn, um dein Abo zu verbinden.", linkLabel: "MAG-Box-Anleitung" },
  "mag-box": { term: "MAG-Box", definition: "Eine kleine TV-Box nur für IPTV. Sie nutzt eine Portal-URL und lässt sich einfach mit der Fernbedienung bedienen.", linkLabel: "MAG-Box-Anleitung" },
  mbps: { term: "Mbit/s (Mbps)", definition: "Megabit pro Sekunde. Die Einheit für Internetgeschwindigkeit. Mehr Mbit/s = schnellere Verbindung." },
  "player-app": { term: "Player-App", definition: "Die App, mit der du IPTV schaust, zum Beispiel TiviMate, IPTV Smarters oder VLC. Die App enthält keine Sender — die kommen aus deinem Abo.", linkLabel: "Die besten IPTV-Apps" },
  "portal-url": { term: "Portal-URL", definition: "Eine Webadresse, die du in eine MAG-Box (und manche Apps) eingibst, um deinen IPTV-Dienst zu laden." },
  "reseller-panel": { term: "Reseller-Panel", definition: "Eine Website, auf der Reseller die Abos ihrer Kunden mit Credits erstellen, verlängern und verwalten.", linkLabel: "Als Reseller starten" },
  "server-url": { term: "Server-URL", definition: "Die Webadresse des IPTV-Servers. Du gibst sie zusammen mit Benutzername und Passwort in deiner App ein." },
  "smart-tv": { term: "Smart TV", definition: "Ein Fernseher mit Internet, auf dem du Apps installieren kannst. Die meisten Samsung- und LG-Smart-TVs können IPTV-Apps direkt nutzen.", linkLabel: "Smart-TV-Anleitung" },
  trial: { term: "Gratis-Test", definition: "Ein kurzer Test des Dienstes vor dem Bezahlen. DenvayStream bietet einen kostenlosen 24-Stunden-Test mit vollem Zugang.", linkLabel: "Gratis-Test holen" },
  vod: { term: "VOD (Video on Demand)", definition: "Filme und Serien, die du starten kannst, wann du willst, pausieren und nochmal ansehen." },
  vpn: { term: "VPN", definition: "Ein Dienst, der deinen Internetverkehr verbirgt und schützt. Für IPTV nicht nötig, aber manche nutzen es, wenn ihr Internetanbieter Videos ausbremst." },
  "xtream-codes": { term: "Xtream-Codes-Login", definition: "Eine Anmeldung in IPTV-Apps mit drei Angaben: Benutzername, Passwort und Server-URL. Die meisten Apps unterstützen sie." },
};

export default de;
