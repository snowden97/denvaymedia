import type { TermText } from "@/lib/glossary";

const it: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Un'immagine molto nitida, quattro volte più dettagliata del Full HD. Ti servono circa 25 Mbps di velocità internet per uno stream 4K.", linkLabel: "Velocità internet per l'IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "Una tecnologia dei server che distribuisce gli spettatori su più server, così l'immagine non si blocca quando molte persone guardano insieme." },
  buffering: { term: "Buffering", definition: "Quando il video si ferma un momento per caricare altri dati. Di solito è causato da un Wi-Fi debole, un dispositivo lento o una connessione sovraccarica.", linkLabel: "Come risolvere il buffering" },
  "catch-up": { term: "Catch-up (TV in differita)", definition: "Una funzione che ti permette di guardare in qualsiasi momento i programmi trasmessi negli ultimi giorni." },
  connection: { term: "Connessione", definition: "Il numero di dispositivi che possono guardare contemporaneamente con un abbonamento. Una connessione = un dispositivo alla volta." },
  credit: { term: "Credito (rivenditore)", definition: "L'unità che un rivenditore usa per creare abbonamenti. Con DenvayStream, 1 credito = 1 mese di servizio per un cliente.", linkLabel: "Pacchetti di crediti per rivenditori" },
  epg: { term: "EPG (guida TV)", definition: "Electronic Programme Guide. Un elenco sullo schermo che mostra cosa va in onda ora e dopo su ogni canale." },
  ethernet: { term: "Cavo Ethernet", definition: "Un cavo di rete che collega la TV o il box TV direttamente al router. Dà una connessione più stabile del Wi-Fi." },
  fhd: { term: "FHD (Full HD)", definition: "Un'immagine chiara e nitida a 1080 linee (1080p). Ti servono circa 15 Mbps per uno stream Full HD." },
  firestick: { term: "Firestick", definition: "Una piccola chiavetta streaming di Amazon che si collega alla porta HDMI della TV. È uno dei dispositivi più usati per l'IPTV.", linkLabel: "Guida di installazione Firestick" },
  hd: { term: "HD", definition: "Alta definizione. Una buona immagine a 720 linee (720p). Ti servono circa 10 Mbps per uno stream HD." },
  iptv: { term: "IPTV", definition: "Televisione via protocollo internet. Canali TV, film e serie che arrivano tramite la tua connessione internet invece che via parabola o cavo.", linkLabel: "Cos'è l'IPTV?" },
  "live-tv": { term: "TV in diretta", definition: "Canali che guardi nello stesso momento in cui vengono trasmessi, come nella TV tradizionale." },
  m3u: { term: "Link M3U (playlist)", definition: "Un link web o un file con l'elenco dei canali del tuo abbonamento. Puoi incollarlo in lettori come VLC." },
  "mac-address": { term: "Indirizzo MAC", definition: "Un codice unico che identifica il tuo dispositivo, ad esempio 00:1A:79:XX:XX:XX. I box MAG e alcune app per Smart TV lo usano per collegare il tuo abbonamento.", linkLabel: "Guida di installazione box MAG" },
  "mag-box": { term: "Box MAG", definition: "Un piccolo box TV fatto solo per l'IPTV. Usa un URL del portale ed è facile da usare con il telecomando.", linkLabel: "Guida di installazione box MAG" },
  mbps: { term: "Mbps", definition: "Megabit al secondo. L'unità usata per misurare la velocità internet. Più Mbps = una connessione più veloce." },
  "player-app": { term: "App di riproduzione", definition: "L'app che usi per guardare l'IPTV, come TiviMate, IPTV Smarters o VLC. L'app non include canali — arrivano dal tuo abbonamento.", linkLabel: "Le migliori app IPTV" },
  "portal-url": { term: "URL del portale", definition: "Un indirizzo web che inserisci in un box MAG (e in alcune app) per caricare il tuo servizio IPTV." },
  "reseller-panel": { term: "Pannello rivenditore", definition: "Un sito dove i rivenditori creano, rinnovano e gestiscono gli abbonamenti dei loro clienti con i crediti.", linkLabel: "Come iniziare come rivenditore" },
  "server-url": { term: "URL del server", definition: "L'indirizzo web del server IPTV. Lo inserisci nella tua app insieme a nome utente e password." },
  "smart-tv": { term: "Smart TV", definition: "Una TV che si collega a internet e può installare app. La maggior parte delle Smart TV Samsung e LG può usare direttamente le app IPTV.", linkLabel: "Guida di installazione Smart TV" },
  trial: { term: "Prova gratuita", definition: "Un breve test del servizio prima di pagare. DenvayStream offre una prova gratuita di 24 ore con accesso completo.", linkLabel: "Ottieni una prova gratuita" },
  vod: { term: "VOD (video on demand)", definition: "Film e serie che puoi avviare quando vuoi, mettere in pausa e riguardare." },
  vpn: { term: "VPN", definition: "Un servizio che nasconde e protegge il tuo traffico internet. Non serve per l'IPTV, ma alcuni la usano se il provider internet rallenta lo streaming." },
  "xtream-codes": { term: "Accesso Xtream Codes", definition: "Un modo per accedere alle app IPTV con tre dati: nome utente, password e URL del server. La maggior parte delle app lo supporta." },
};

export default it;
