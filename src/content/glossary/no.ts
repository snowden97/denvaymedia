import type { TermText } from "@/lib/glossary";

const no: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Et veldig skarpt bilde, fire ganger mer detaljert enn Full HD. Du trenger omtrent 25 Mbit/s internetthastighet for en 4K-strøm.", linkLabel: "Internetthastighet for IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "En serverteknologi som fordeler seerne på flere servere, slik at bildet ikke fryser når mange ser samtidig." },
  buffering: { term: "Bufring", definition: "Når videoen stopper litt for å laste inn mer data. Skyldes oftest svakt wifi, en treg enhet eller en overbelastet forbindelse.", linkLabel: "Slik fikser du bufring" },
  "catch-up": { term: "Catch-up (se i etterkant)", definition: "En funksjon som lar deg se programmer fra de siste dagene når du vil." },
  connection: { term: "Tilkobling", definition: "Antall enheter som kan se samtidig med ett abonnement. Én tilkobling = én enhet om gangen." },
  credit: { term: "Kreditt (forhandler)", definition: "Enheten en forhandler bruker til å lage abonnementer. Hos DenvayStream er 1 kreditt = 1 måneds tjeneste for én kunde.", linkLabel: "Kredittpakker for forhandlere" },
  epg: { term: "EPG (TV-guide)", definition: "Electronic Programme Guide. En liste på skjermen som viser hva som går nå og senere på hver kanal." },
  ethernet: { term: "Ethernet-kabel", definition: "En nettverkskabel som kobler TV-en eller TV-boksen direkte til ruteren. Gir en mer stabil forbindelse enn wifi." },
  fhd: { term: "FHD (Full HD)", definition: "Et klart og skarpt bilde med 1080 linjer (1080p). Du trenger omtrent 15 Mbit/s for en Full HD-strøm." },
  firestick: { term: "Firestick", definition: "En liten strømmepinne fra Amazon som kobles til TV-ens HDMI-port. En av de mest brukte enhetene for IPTV.", linkLabel: "Installasjonsguide for Firestick" },
  hd: { term: "HD", definition: "Høyoppløst. Et godt bilde med 720 linjer (720p). Du trenger omtrent 10 Mbit/s for en HD-strøm." },
  iptv: { term: "IPTV", definition: "Internettprotokoll-TV. TV-kanaler, filmer og serier som kommer via internettforbindelsen din i stedet for via parabol eller kabel.", linkLabel: "Hva er IPTV?" },
  "live-tv": { term: "Direkte-TV", definition: "Kanaler du ser samtidig som de sendes, akkurat som vanlig TV." },
  m3u: { term: "M3U-lenke (spilleliste)", definition: "En nettlenke eller fil med listen over kanalene i abonnementet ditt. Du kan lime den inn i spillere som VLC." },
  "mac-address": { term: "MAC-adresse", definition: "En unik kode som identifiserer enheten din, for eksempel 00:1A:79:XX:XX:XX. MAG-bokser og noen smart-TV-apper bruker den til å koble til abonnementet ditt.", linkLabel: "Installasjonsguide for MAG-boks" },
  "mag-box": { term: "MAG-boks", definition: "En liten TV-boks som bare er laget for IPTV. Bruker en portal-URL og er lett å styre med fjernkontrollen.", linkLabel: "Installasjonsguide for MAG-boks" },
  mbps: { term: "Mbit/s", definition: "Megabit per sekund. Enheten for å måle internetthastighet. Flere Mbit/s = en raskere forbindelse." },
  "player-app": { term: "Spillerapp", definition: "Appen du bruker til å se IPTV, som TiviMate, IPTV Smarters eller VLC. Appen inneholder ingen kanaler — de kommer fra abonnementet ditt.", linkLabel: "De beste IPTV-appene" },
  "portal-url": { term: "Portal-URL", definition: "En nettadresse du skriver inn i en MAG-boks (og noen apper) for å laste inn IPTV-tjenesten din." },
  "reseller-panel": { term: "Forhandlerpanel", definition: "Et nettsted der forhandlere lager, fornyer og administrerer kundenes abonnementer med kreditter.", linkLabel: "Slik kommer du i gang som forhandler" },
  "server-url": { term: "Server-URL", definition: "Nettadressen til IPTV-serveren. Du skriver den inn i appen sammen med brukernavn og passord." },
  "smart-tv": { term: "Smart-TV", definition: "En TV som kobler seg til internett og kan installere apper. De fleste Samsung og LG smart-TV kan bruke IPTV-apper direkte.", linkLabel: "Installasjonsguide for smart-TV" },
  trial: { term: "Gratis prøveperiode", definition: "En kort test av tjenesten før du betaler. DenvayStream tilbyr en gratis prøveperiode på 24 timer med full tilgang.", linkLabel: "Få en gratis prøveperiode" },
  vod: { term: "VOD (video på forespørsel)", definition: "Filmer og serier du starter når du vil, kan sette på pause og se på nytt." },
  vpn: { term: "VPN", definition: "En tjeneste som skjuler og beskytter internettrafikken din. Trengs ikke for IPTV, men noen bruker det hvis internettleverandøren bremser strømming." },
  "xtream-codes": { term: "Xtream Codes-pålogging", definition: "En måte å logge inn i IPTV-apper med tre opplysninger: brukernavn, passord og server-URL. De fleste apper støtter det." },
};

export default no;
