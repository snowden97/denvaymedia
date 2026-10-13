import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Come guardare l'IPTV su iPhone, iPad e Apple TV",
    excerpt: "Guarda l'IPTV su iPhone, iPad o Apple TV: quale app installare dall'App Store, come accedere con i tuoi dati e semplici consigli per un'immagine stabile.",
    heroAlt: "IPTV su iPhone, iPad e Apple TV.",
    takeaways: [
      "Installa un'app IPTV dall'App Store, come IPTV Smarters Pro o GSE Smart IPTV.",
      "Accedi con nome utente, password e URL del server che ti inviamo.",
      "Gli stessi passi valgono per iPhone, iPad e Apple TV.",
      "Usa il Wi-Fi a 5 GHz o un cavo sull'Apple TV per la migliore immagine.",
    ],
    body: [
      { type: "p", text: "I dispositivi Apple funzionano molto bene con l'IPTV. Ti servono solo un'app dall'App Store e i dati di accesso del tuo abbonamento. Ci vogliono circa cinque minuti." },
      { type: "h2", text: "Passo 1 — Installa un'app" },
      { type: "ol", items: ["Apri l'App Store su iPhone, iPad o Apple TV.", "Cerca «IPTV Smarters Pro» o «GSE Smart IPTV».", "Installa l'app e aprila."] },
      { type: "h2", text: "Passo 2 — Accedi" },
      { type: "ol", items: ["Scegli «Login with Xtream Codes API» (il nome può variare un po' a seconda dell'app).", "Dai alla tua playlist il nome che vuoi, ad esempio DenvayStream.", "Inserisci nome utente, password e URL del server che ti abbiamo inviato.", "Tocca Add user o Login e aspetta che i canali si carichino."] },
      { type: "h2", text: "Consigli per un'immagine migliore" },
      { type: "ul", items: ["Sull'Apple TV, usa un cavo di rete se puoi.", "Su iPhone e iPad, resta vicino al router o usa il Wi-Fi a 5 GHz.", "Se un canale si ferma, chiudi completamente l'app e riaprila.", "Attiva la modalità risparmio energetico solo quando serve, perché può rallentare lo streaming."] },
      { type: "h2", text: "Guardare su uno schermo più grande" },
      { type: "p", text: "Puoi inviare l'immagine dal tuo iPhone o iPad a una TV con AirPlay. Per il miglior risultato sulla TV, è meglio installare l'app direttamente su un'Apple TV." },
      { type: "tip", text: "Non sai quale app scegliere per il tuo dispositivo Apple? Chiedici su WhatsApp e ti inviamo istruzioni semplici." },
    ],
    faqs: [
      ["Posso guardare l'IPTV su un iPhone?", "Sì. Installa un'app IPTV dall'App Store e accedi con i dati del tuo abbonamento."],
      ["Qual è la migliore app IPTV per Apple TV?", "IPTV Smarters Pro e GSE Smart IPTV sono scelte diffuse su Apple TV. Entrambe permettono di accedere con nome utente, password e URL del server."],
      ["Mi serve un abbonamento diverso per ogni dispositivo Apple?", "No. Puoi installare l'app su più dispositivi, ma ogni abbonamento permette di guardare su un dispositivo alla volta."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Come installare l'IPTV su Android TV, box Android e telefono Android",
    excerpt: "Configura l'IPTV su qualsiasi dispositivo Android — Android TV, box, telefono o tablet: un lettore da Google Play, l'accesso e un'immagine fluida e stabile.",
    heroAlt: "IPTV su Android TV, box TV e telefono.",
    takeaways: [
      "I dispositivi Android possono installare lettori IPTV direttamente da Google Play.",
      "TiviMate è ottimo per la TV; IPTV Smarters Pro va bene sui telefoni.",
      "Accedi con nome utente, password e URL del server che ti inviamo.",
      "Riavviare il dispositivo e svuotare la cache dell'app risolve la maggior parte dei problemi.",
    ],
    body: [
      { type: "p", text: "Android è uno dei sistemi più semplici per l'IPTV. Android TV, box Android TV, telefoni e tablet possono installare un'app da Google Play in pochi minuti." },
      { type: "h2", text: "Passo 1 — Installa un'app" },
      { type: "ol", items: ["Apri Google Play sul tuo dispositivo.", "Cerca «TiviMate» (ideale per la TV) o «IPTV Smarters Pro» (buono per telefono e TV).", "Installa l'app e aprila."] },
      { type: "h2", text: "Passo 2 — Aggiungi il tuo abbonamento" },
      { type: "ol", items: ["Scegli «Add playlist» o «Login with Xtream Codes».", "Inserisci l'URL del server, il nome utente e la password che ti abbiamo inviato.", "Aspetta mentre l'app carica canali, film e guida TV."] },
      { type: "h2", text: "Passo 3 — Mantieni tutto fluido" },
      { type: "ul", items: ["Collega il box TV con un cavo di rete, se puoi.", "Riavvia il box una volta a settimana.", "Svuota la cache dell'app se i canali iniziano a bloccarsi (Impostazioni → App → la tua app → Memoria → Svuota cache).", "Lascia almeno 1 GB di spazio libero sul dispositivo."] },
      { type: "h2", text: "Telefoni e tablet" },
      { type: "p", text: "Sul telefono puoi guardare a casa o in viaggio. Usa il Wi-Fi quando puoi, perché lo streaming consuma molti dati mobili. Un'ora di video in HD può consumare da 1 a 3 GB." },
      { type: "tip", text: "Dicci il modello del tuo dispositivo su WhatsApp e ti diremo quale app funziona meglio." },
    ],
    faqs: [
      ["Qual è la migliore app IPTV per Android TV?", "TiviMate è uno dei migliori lettori IPTV per Android TV e box Android. IPTV Smarters Pro è una buona opzione gratuita."],
      ["Posso guardare l'IPTV sul mio telefono Android con i dati mobili?", "Sì, ma lo streaming consuma molti dati — da 1 a 3 GB all'ora in HD. Usa il Wi-Fi quando puoi."],
      ["Perché il mio box Android si blocca?", "Le cause più comuni sono un Wi-Fi debole, poco spazio libero o la cache piena. Usa un cavo, libera spazio e svuota la cache."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Come guardare l'IPTV su PC Windows e Mac",
    excerpt: "Guarda l'IPTV su un PC Windows, un portatile o un Mac con lettori gratuiti come VLC o IPTV Smarters. Semplici passi per aggiungere il tuo abbonamento e iniziare a guardare.",
    heroAlt: "IPTV su Windows e Mac: un portatile che riproduce un video.",
    takeaways: [
      "Puoi guardare l'IPTV su un computer con app gratuite come VLC o IPTV Smarters.",
      "VLC usa il tuo link M3U; IPTV Smarters usa nome utente, password e URL del server.",
      "Una connessione via cavo dà l'immagine più stabile sul computer.",
      "Collega il portatile alla TV con un cavo HDMI per guardare in grande.",
    ],
    body: [
      { type: "p", text: "Un computer è un modo facile per guardare l'IPTV, a casa o in viaggio. Puoi usare un lettore gratuito e iniziare a guardare in pochi minuti." },
      { type: "h2", text: "Opzione 1 — VLC (gratuito, molto semplice)" },
      { type: "ol", items: ["Scarica VLC dal sito ufficiale e installalo.", "Apri VLC e clicca su Media → Apri flusso di rete (su Mac: File → Apri rete).", "Incolla il link M3U che ti abbiamo inviato e clicca su Riproduci.", "Apri la playlist per vedere l'elenco dei canali."] },
      { type: "h2", text: "Opzione 2 — IPTV Smarters (con guida TV)" },
      { type: "ol", items: ["Scarica IPTV Smarters per Windows o Mac dal sito ufficiale.", "Apri l'app e scegli «Login with Xtream Codes API».", "Inserisci nome utente, password e URL del server che ti abbiamo inviato.", "Aspetta che si carichino canali, film e guida TV."] },
      { type: "h2", text: "Guardare sulla TV" },
      { type: "p", text: "Collega il portatile alla TV con un cavo HDMI. Sulla TV, scegli l'ingresso HDMI giusto. Su Windows, premi il tasto Windows + P per scegliere come viene mostrato lo schermo." },
      { type: "h2", text: "Consigli" },
      { type: "ul", items: ["Chiudi gli altri programmi che usano internet, come i download.", "Usa un cavo di rete se il tuo Wi-Fi è debole.", "Mantieni aggiornata la tua app di riproduzione."] },
      { type: "tip", text: "Ti serve il link M3U o un aiuto con l'app? Scrivici su WhatsApp." },
    ],
    faqs: [
      ["Posso guardare l'IPTV su un portatile?", "Sì. Installa un lettore gratuito come VLC o IPTV Smarters, aggiungi i dati del tuo abbonamento e inizia a guardare."],
      ["Qual è il miglior lettore IPTV per Windows?", "VLC è l'opzione gratuita più semplice. IPTV Smarters per Windows è meglio se vuoi una guida TV e un menu come quello di una TV."],
      ["Posso guardare l'IPTV su un Mac?", "Sì. VLC e IPTV Smarters funzionano entrambi su Mac."],
    ],
  },
};

export default posts;
