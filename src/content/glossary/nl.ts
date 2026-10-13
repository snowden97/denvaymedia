import type { TermText } from "@/lib/glossary";

const nl: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Een heel scherp beeld, vier keer gedetailleerder dan Full HD. Je hebt ongeveer 25 Mbps internetsnelheid nodig voor een 4K-stream.", linkLabel: "Internetsnelheid voor IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "Een servertechniek die kijkers over meerdere servers verdeelt, zodat het beeld niet bevriest als veel mensen tegelijk kijken." },
  buffering: { term: "Buffering (haperen)", definition: "Als de video even stopt om meer gegevens te laden. Meestal door zwakke wifi, een traag apparaat of een overbelaste verbinding.", linkLabel: "Haperingen oplossen" },
  "catch-up": { term: "Catch-up (terugkijken)", definition: "Een functie waarmee je programma's van de afgelopen dagen op elk moment kunt terugkijken." },
  connection: { term: "Verbinding", definition: "Het aantal apparaten dat tegelijk met één abonnement kan kijken. Eén verbinding = één apparaat tegelijk." },
  credit: { term: "Credit (reseller)", definition: "De eenheid waarmee een reseller abonnementen aanmaakt. Bij DenvayStream is 1 credit = 1 maand dienst voor één klant.", linkLabel: "Creditpakketten voor resellers" },
  epg: { term: "EPG (tv-gids)", definition: "Electronic Programme Guide. Een lijst op het scherm die laat zien wat er nu en straks op elke zender is." },
  ethernet: { term: "Ethernetkabel", definition: "Een netwerkkabel die je tv of tv-box rechtstreeks met de router verbindt. Geeft een stabielere verbinding dan wifi." },
  fhd: { term: "FHD (Full HD)", definition: "Een helder, scherp beeld van 1080 lijnen (1080p). Je hebt ongeveer 15 Mbps nodig voor een Full HD-stream." },
  firestick: { term: "Firestick", definition: "Een kleine streamingstick van Amazon die je in de HDMI-poort van je tv steekt. Een van de populairste apparaten voor IPTV.", linkLabel: "Installatiegids Firestick" },
  hd: { term: "HD", definition: "Hoge definitie. Een goed beeld van 720 lijnen (720p). Je hebt ongeveer 10 Mbps nodig voor een HD-stream." },
  iptv: { term: "IPTV", definition: "Internetprotocoltelevisie. Tv-zenders, films en series die via je internetverbinding binnenkomen in plaats van via een schotel of kabel.", linkLabel: "Wat is IPTV?" },
  "live-tv": { term: "Live tv", definition: "Zenders die je bekijkt op hetzelfde moment dat ze worden uitgezonden, net als gewone tv." },
  m3u: { term: "M3U-link (afspeellijst)", definition: "Een weblink of bestand met de lijst van zenders in je abonnement. Je kunt hem plakken in spelers zoals VLC." },
  "mac-address": { term: "MAC-adres", definition: "Een unieke code die je apparaat identificeert, bijvoorbeeld 00:1A:79:XX:XX:XX. MAG-boxen en sommige Smart TV-apps gebruiken het om je abonnement te koppelen.", linkLabel: "Installatiegids MAG-box" },
  "mag-box": { term: "MAG-box", definition: "Een kleine tv-box die alleen voor IPTV is gemaakt. Gebruikt een portal-URL en is makkelijk te bedienen met de afstandsbediening.", linkLabel: "Installatiegids MAG-box" },
  mbps: { term: "Mbps", definition: "Megabit per seconde. De eenheid waarmee internetsnelheid wordt gemeten. Meer Mbps = een snellere verbinding." },
  "player-app": { term: "Speler-app", definition: "De app waarmee je IPTV kijkt, zoals TiviMate, IPTV Smarters of VLC. De app bevat geen zenders — die komen uit je abonnement.", linkLabel: "De beste IPTV-apps" },
  "portal-url": { term: "Portal-URL", definition: "Een webadres dat je in een MAG-box (en sommige apps) invoert om je IPTV-dienst te laden." },
  "reseller-panel": { term: "Resellerpaneel", definition: "Een website waar resellers met credits de abonnementen van hun klanten aanmaken, verlengen en beheren.", linkLabel: "Beginnen als reseller" },
  "server-url": { term: "Server-URL", definition: "Het webadres van de IPTV-server. Je typt het in je app, samen met je gebruikersnaam en wachtwoord." },
  "smart-tv": { term: "Smart TV", definition: "Een tv die met internet verbindt en apps kan installeren. De meeste Samsung en LG Smart TV's kunnen IPTV-apps direct gebruiken.", linkLabel: "Installatiegids Smart TV" },
  trial: { term: "Gratis proef", definition: "Een korte test van de dienst voordat je betaalt. DenvayStream biedt een gratis proef van 24 uur met volledige toegang.", linkLabel: "Gratis proef aanvragen" },
  vod: { term: "VOD (video on demand)", definition: "Films en series die je start wanneer je wilt, kunt pauzeren en opnieuw kunt bekijken." },
  vpn: { term: "VPN", definition: "Een dienst die je internetverkeer verbergt en beschermt. Niet nodig voor IPTV, maar sommigen gebruiken er een als hun internetprovider het streamen vertraagt." },
  "xtream-codes": { term: "Xtream Codes-login", definition: "Een manier om in IPTV-apps in te loggen met drie gegevens: gebruikersnaam, wachtwoord en server-URL. De meeste apps ondersteunen het." },
};

export default nl;
