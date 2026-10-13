import type { TermText } from "@/lib/glossary";

const da: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Et meget skarpt billede, fire gange mere detaljeret end Full HD. Du skal bruge omkring 25 Mbit/s internethastighed til en 4K-stream.", linkLabel: "Internethastighed til IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "En serverteknologi, der fordeler seerne på flere servere, så billedet ikke fryser, når mange ser på samme tid." },
  buffering: { term: "Buffering", definition: "Når videoen stopper et øjeblik for at indlæse flere data. Skyldes oftest svagt wifi, en langsom enhed eller en overbelastet forbindelse.", linkLabel: "Sådan løser du buffering" },
  "catch-up": { term: "Catch-up (se bagefter)", definition: "En funktion, der lader dig se programmer fra de seneste dage, når du vil." },
  connection: { term: "Forbindelse", definition: "Antallet af enheder, der kan se på samme tid med ét abonnement. Én forbindelse = én enhed ad gangen." },
  credit: { term: "Kredit (forhandler)", definition: "Den enhed, en forhandler bruger til at oprette abonnementer. Hos DenvayStream er 1 kredit = 1 måneds tjeneste til én kunde.", linkLabel: "Kreditpakker til forhandlere" },
  epg: { term: "EPG (tv-guide)", definition: "Electronic Programme Guide. En liste på skærmen, der viser, hvad der sendes nu og senere på hver kanal." },
  ethernet: { term: "Ethernet-kabel", definition: "Et netværkskabel, der forbinder dit tv eller din tv-boks direkte med routeren. Giver en mere stabil forbindelse end wifi." },
  fhd: { term: "FHD (Full HD)", definition: "Et klart og skarpt billede med 1080 linjer (1080p). Du skal bruge omkring 15 Mbit/s til en Full HD-stream." },
  firestick: { term: "Firestick", definition: "En lille streamingstick fra Amazon, der sættes i tv'ets HDMI-port. En af de mest brugte enheder til IPTV.", linkLabel: "Installationsguide til Firestick" },
  hd: { term: "HD", definition: "High definition. Et godt billede med 720 linjer (720p). Du skal bruge omkring 10 Mbit/s til en HD-stream." },
  iptv: { term: "IPTV", definition: "Internetprotokol-tv. Tv-kanaler, film og serier, der kommer via din internetforbindelse i stedet for via parabol eller kabel.", linkLabel: "Hvad er IPTV?" },
  "live-tv": { term: "Live-tv", definition: "Kanaler, du ser samtidig med, at de sendes, ligesom almindeligt tv." },
  m3u: { term: "M3U-link (afspilningsliste)", definition: "Et weblink eller en fil med listen over kanalerne i dit abonnement. Du kan indsætte det i afspillere som VLC." },
  "mac-address": { term: "MAC-adresse", definition: "En unik kode, der identificerer din enhed, for eksempel 00:1A:79:XX:XX:XX. MAG-bokse og nogle smart-tv-apps bruger den til at forbinde dit abonnement.", linkLabel: "Installationsguide til MAG-boks" },
  "mag-box": { term: "MAG-boks", definition: "En lille tv-boks, der kun er lavet til IPTV. Bruger en portal-URL og er let at styre med fjernbetjeningen.", linkLabel: "Installationsguide til MAG-boks" },
  mbps: { term: "Mbit/s", definition: "Megabit pr. sekund. Enheden til at måle internethastighed. Flere Mbit/s = en hurtigere forbindelse." },
  "player-app": { term: "Afspillerapp", definition: "Den app, du bruger til at se IPTV, som TiviMate, IPTV Smarters eller VLC. Appen indeholder ingen kanaler — de kommer fra dit abonnement.", linkLabel: "De bedste IPTV-apps" },
  "portal-url": { term: "Portal-URL", definition: "En webadresse, du skriver i en MAG-boks (og nogle apps) for at indlæse din IPTV-tjeneste." },
  "reseller-panel": { term: "Forhandlerpanel", definition: "En hjemmeside, hvor forhandlere opretter, fornyer og administrerer deres kunders abonnementer med kreditter.", linkLabel: "Sådan kommer du i gang som forhandler" },
  "server-url": { term: "Server-URL", definition: "IPTV-serverens webadresse. Du skriver den i din app sammen med dit brugernavn og din adgangskode." },
  "smart-tv": { term: "Smart-tv", definition: "Et tv, der forbinder til internettet og kan installere apps. De fleste Samsung og LG smart-tv kan bruge IPTV-apps direkte.", linkLabel: "Installationsguide til smart-tv" },
  trial: { term: "Gratis prøveperiode", definition: "En kort test af tjenesten, før du betaler. DenvayStream tilbyder en gratis prøveperiode på 24 timer med fuld adgang.", linkLabel: "Få en gratis prøveperiode" },
  vod: { term: "VOD (video on demand)", definition: "Film og serier, som du starter, når du vil, kan sætte på pause og se igen." },
  vpn: { term: "VPN", definition: "En tjeneste, der skjuler og beskytter din internettrafik. Ikke nødvendig til IPTV, men nogle bruger det, hvis internetudbyderen bremser streaming." },
  "xtream-codes": { term: "Xtream Codes-login", definition: "En måde at logge ind i IPTV-apps med tre oplysninger: brugernavn, adgangskode og server-URL. De fleste apps understøtter det." },
};

export default da;
