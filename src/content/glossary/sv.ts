import type { TermText } from "@/lib/glossary";

const sv: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "En mycket skarp bild, fyra gånger mer detaljerad än Full HD. Du behöver ungefär 25 Mbit/s internethastighet för en 4K-ström.", linkLabel: "Internethastighet för IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "En serverteknik som fördelar tittarna över flera servrar, så att bilden inte fryser när många tittar samtidigt." },
  buffering: { term: "Buffring", definition: "När videon stannar en stund för att ladda mer data. Beror oftast på svagt wifi, en långsam enhet eller en överbelastad anslutning.", linkLabel: "Så åtgärdar du buffring" },
  "catch-up": { term: "Catch-up (se i efterhand)", definition: "En funktion som låter dig se program från de senaste dagarna när du vill." },
  connection: { term: "Anslutning", definition: "Antalet enheter som kan titta samtidigt med ett abonnemang. En anslutning = en enhet åt gången." },
  credit: { term: "Kredit (återförsäljare)", definition: "Enheten en återförsäljare använder för att skapa abonnemang. Hos DenvayStream är 1 kredit = 1 månads tjänst för en kund.", linkLabel: "Kreditpaket för återförsäljare" },
  epg: { term: "EPG (tv-guide)", definition: "Electronic Programme Guide. En lista på skärmen som visar vad som sänds nu och härnäst på varje kanal." },
  ethernet: { term: "Ethernet-kabel", definition: "En nätverkskabel som kopplar din tv eller tv-box direkt till routern. Ger en stabilare anslutning än wifi." },
  fhd: { term: "FHD (Full HD)", definition: "En klar och skarp bild med 1080 linjer (1080p). Du behöver ungefär 15 Mbit/s för en Full HD-ström." },
  firestick: { term: "Firestick", definition: "En liten streamingsticka från Amazon som kopplas in i tv:ns HDMI-port. En av de populäraste enheterna för IPTV.", linkLabel: "Installationsguide för Firestick" },
  hd: { term: "HD", definition: "Högupplöst. En bra bild med 720 linjer (720p). Du behöver ungefär 10 Mbit/s för en HD-ström." },
  iptv: { term: "IPTV", definition: "Internetprotokoll-tv. Tv-kanaler, filmer och serier som kommer via din internetanslutning i stället för via parabol eller kabel.", linkLabel: "Vad är IPTV?" },
  "live-tv": { term: "Live-tv", definition: "Kanaler som du tittar på samtidigt som de sänds, precis som vanlig tv." },
  m3u: { term: "M3U-länk (spellista)", definition: "En webblänk eller fil med listan över kanalerna i ditt abonnemang. Du kan klistra in den i spelare som VLC." },
  "mac-address": { term: "MAC-adress", definition: "En unik kod som identifierar din enhet, till exempel 00:1A:79:XX:XX:XX. MAG-boxar och vissa smart-tv-appar använder den för att koppla ditt abonnemang.", linkLabel: "Installationsguide för MAG-box" },
  "mag-box": { term: "MAG-box", definition: "En liten tv-box som bara är gjord för IPTV. Använder en portal-URL och är lätt att styra med fjärrkontrollen.", linkLabel: "Installationsguide för MAG-box" },
  mbps: { term: "Mbit/s", definition: "Megabit per sekund. Enheten för att mäta internethastighet. Fler Mbit/s = en snabbare anslutning." },
  "player-app": { term: "Spelarapp", definition: "Appen du använder för att titta på IPTV, som TiviMate, IPTV Smarters eller VLC. Appen innehåller inga kanaler — de kommer från ditt abonnemang.", linkLabel: "De bästa IPTV-apparna" },
  "portal-url": { term: "Portal-URL", definition: "En webbadress som du skriver in i en MAG-box (och vissa appar) för att ladda din IPTV-tjänst." },
  "reseller-panel": { term: "Återförsäljarpanel", definition: "En webbplats där återförsäljare skapar, förnyar och hanterar sina kunders abonnemang med krediter.", linkLabel: "Så kommer du igång som återförsäljare" },
  "server-url": { term: "Server-URL", definition: "IPTV-serverns webbadress. Du skriver in den i appen tillsammans med ditt användarnamn och lösenord." },
  "smart-tv": { term: "Smart-tv", definition: "En tv som ansluter till internet och kan installera appar. De flesta Samsung och LG smart-tv kan använda IPTV-appar direkt.", linkLabel: "Installationsguide för smart-tv" },
  trial: { term: "Gratis provperiod", definition: "Ett kort test av tjänsten innan du betalar. DenvayStream erbjuder en gratis provperiod på 24 timmar med full tillgång.", linkLabel: "Få en gratis provperiod" },
  vod: { term: "VOD (video on demand)", definition: "Filmer och serier som du startar när du vill, kan pausa och se igen." },
  vpn: { term: "VPN", definition: "En tjänst som döljer och skyddar din internettrafik. Behövs inte för IPTV, men vissa använder det om internetleverantören bromsar strömning." },
  "xtream-codes": { term: "Xtream Codes-inloggning", definition: "Ett sätt att logga in i IPTV-appar med tre uppgifter: användarnamn, lösenord och server-URL. De flesta appar stöder det." },
};

export default sv;
