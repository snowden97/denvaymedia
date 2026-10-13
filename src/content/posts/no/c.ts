import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Slik ser du IPTV på iPhone, iPad og Apple TV",
    excerpt: "Se IPTV på iPhone, iPad eller Apple TV: hvilken app du skal installere fra App Store, hvordan du logger inn med opplysningene dine og enkle tips for stabilt bilde.",
    heroAlt: "IPTV på iPhone, iPad og Apple TV.",
    takeaways: [
      "Installer en IPTV-app fra App Store, som IPTV Smarters Pro eller GSE Smart IPTV.",
      "Logg inn med brukernavnet, passordet og server-URL-en vi sender deg.",
      "De samme trinnene fungerer på iPhone, iPad og Apple TV.",
      "Bruk 5 GHz-wifi eller kabel på Apple TV for best bilde.",
    ],
    body: [
      { type: "p", text: "Apple-enheter fungerer veldig godt med IPTV. Du trenger bare en app fra App Store og påloggingsopplysningene til abonnementet ditt. Det tar omtrent fem minutter." },
      { type: "h2", text: "Trinn 1 — Installer en app" },
      { type: "ol", items: ["Åpne App Store på iPhone, iPad eller Apple TV.", "Søk etter «IPTV Smarters Pro» eller «GSE Smart IPTV».", "Installer appen og åpne den."] },
      { type: "h2", text: "Trinn 2 — Logg inn" },
      { type: "ol", items: ["Velg «Login with Xtream Codes API» (navnet kan variere litt mellom apper).", "Gi spillelisten et navn du vil, for eksempel DenvayStream.", "Skriv inn brukernavnet, passordet og server-URL-en vi sendte deg.", "Trykk på Add user eller Login og vent mens kanalene lastes inn."] },
      { type: "h2", text: "Tips for bedre bilde" },
      { type: "ul", items: ["På Apple TV, bruk en nettverkskabel hvis du kan.", "På iPhone og iPad, hold deg nær ruteren eller bruk 5 GHz-wifi.", "Hvis en kanal stopper, lukk appen helt og åpne den igjen.", "Slå bare på strømsparingsmodus når du trenger det, siden det kan gjøre strømmingen tregere."] },
      { type: "h2", text: "Se på en større skjerm" },
      { type: "p", text: "Du kan sende bildet fra iPhone eller iPad til en TV med AirPlay. For best resultat på TV-en er det bedre å installere appen rett på en Apple TV." },
      { type: "tip", text: "Vet du ikke hvilken app du skal velge til Apple-enheten din? Spør oss på WhatsApp, så sender vi enkle instruksjoner." },
    ],
    faqs: [
      ["Kan jeg se IPTV på en iPhone?", "Ja. Installer en IPTV-app fra App Store og logg inn med abonnementsopplysningene dine."],
      ["Hva er den beste IPTV-appen for Apple TV?", "IPTV Smarters Pro og GSE Smart IPTV er populære valg på Apple TV. Begge lar deg logge inn med brukernavn, passord og server-URL."],
      ["Trenger jeg et eget abonnement for hver Apple-enhet?", "Nei. Du kan installere appen på flere enheter, men hvert abonnement lar deg se på én enhet om gangen."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Slik setter du opp IPTV på Android TV, Android-boks og Android-telefon",
    excerpt: "Sett opp IPTV på hvilken som helst Android-enhet — Android TV, boks, telefon eller nettbrett: en spiller fra Google Play, pålogging og jevnt, stabilt bilde.",
    heroAlt: "IPTV på Android TV, TV-boks og telefon.",
    takeaways: [
      "Android-enheter kan installere IPTV-spillere rett fra Google Play.",
      "TiviMate er perfekt for TV; IPTV Smarters Pro fungerer godt på telefoner.",
      "Logg inn med brukernavnet, passordet og server-URL-en vi sender deg.",
      "Å starte enheten på nytt og tømme appens buffer løser de fleste problemer.",
    ],
    body: [
      { type: "p", text: "Android er et av de enkleste systemene for IPTV. Android TV, Android TV-bokser, telefoner og nettbrett kan installere en app fra Google Play på noen minutter." },
      { type: "h2", text: "Trinn 1 — Installer en app" },
      { type: "ol", items: ["Åpne Google Play på enheten din.", "Søk etter «TiviMate» (perfekt for TV) eller «IPTV Smarters Pro» (bra for telefon og TV).", "Installer appen og åpne den."] },
      { type: "h2", text: "Trinn 2 — Legg inn abonnementet ditt" },
      { type: "ol", items: ["Velg «Add playlist» eller «Login with Xtream Codes».", "Skriv inn server-URL-en, brukernavnet og passordet vi sendte deg.", "Vent mens appen laster inn kanalene, filmene og TV-guiden."] },
      { type: "h2", text: "Trinn 3 — Hold det jevnt" },
      { type: "ul", items: ["Koble TV-boksen til med en nettverkskabel hvis du kan.", "Start boksen på nytt én gang i uken.", "Tøm appens buffer hvis kanalene begynner å fryse (Innstillinger → Apper → appen din → Lagring → Tøm buffer).", "Ha minst 1 GB ledig plass på enheten."] },
      { type: "h2", text: "Telefoner og nettbrett" },
      { type: "p", text: "På telefonen kan du se hjemme eller på farten. Bruk wifi når du kan, siden strømming bruker mye mobildata. En time med HD-video kan bruke 1 til 3 GB." },
      { type: "tip", text: "Fortell oss hvilken modell enheten din er på WhatsApp, så sier vi hvilken app som fungerer best." },
    ],
    faqs: [
      ["Hva er den beste IPTV-appen for Android TV?", "TiviMate er en av de beste IPTV-spillerne for Android TV og Android-bokser. IPTV Smarters Pro er et godt gratis alternativ."],
      ["Kan jeg se IPTV på Android-telefonen med mobildata?", "Ja, men strømming bruker mye data — 1 til 3 GB per time i HD. Bruk wifi når du kan."],
      ["Hvorfor fryser Android-boksen min?", "De vanligste årsakene er svakt wifi, lite ledig plass eller full buffer. Bruk kabel, frigjør plass og tøm bufferen."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Slik ser du IPTV på Windows-PC og Mac",
    excerpt: "Se IPTV på en Windows-PC, bærbar PC eller Mac med gratisspillere som VLC eller IPTV Smarters. Enkle trinn for å legge inn abonnementet og begynne å se.",
    heroAlt: "IPTV på Windows og Mac: en bærbar PC som spiller av video.",
    takeaways: [
      "Du kan se IPTV på en datamaskin med gratisapper som VLC eller IPTV Smarters.",
      "VLC bruker M3U-lenken din; IPTV Smarters bruker brukernavn, passord og server-URL.",
      "En kablet forbindelse gir det mest stabile bildet på en datamaskin.",
      "Koble den bærbare PC-en til TV-en med en HDMI-kabel for å se på stor skjerm.",
    ],
    body: [
      { type: "p", text: "En datamaskin er en enkel måte å se IPTV på, hjemme eller på farten. Du kan bruke en gratis spiller og begynne å se på noen minutter." },
      { type: "h2", text: "Alternativ 1 — VLC (gratis, veldig enkelt)" },
      { type: "ol", items: ["Last ned VLC fra det offisielle nettstedet og installer det.", "Åpne VLC og klikk på Media → Åpne nettverksstrøm (på Mac: Fil → Åpne nettverk).", "Lim inn M3U-lenken vi sendte deg, og klikk på Spill av.", "Åpne spillelisten for å se kanallisten din."] },
      { type: "h2", text: "Alternativ 2 — IPTV Smarters (med TV-guide)" },
      { type: "ol", items: ["Last ned IPTV Smarters for Windows eller Mac fra det offisielle nettstedet.", "Åpne appen og velg «Login with Xtream Codes API».", "Skriv inn brukernavnet, passordet og server-URL-en vi sendte deg.", "Vent mens kanaler, filmer og TV-guide lastes inn."] },
      { type: "h2", text: "Se på TV-en" },
      { type: "p", text: "Koble den bærbare PC-en til TV-en med en HDMI-kabel. Velg riktig HDMI-inngang på TV-en. På Windows trykker du på Windows-tasten + P for å velge hvordan skjermen vises." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: ["Lukk andre programmer som bruker internett, som nedlastinger.", "Bruk en nettverkskabel hvis wifi-en din er svak.", "Hold spillerappen oppdatert."] },
      { type: "tip", text: "Trenger du M3U-lenken din eller hjelp med appen? Skriv til oss på WhatsApp." },
    ],
    faqs: [
      ["Kan jeg se IPTV på en bærbar PC?", "Ja. Installer en gratis spiller som VLC eller IPTV Smarters, legg inn abonnementsopplysningene dine og begynn å se."],
      ["Hva er den beste IPTV-spilleren for Windows?", "VLC er det enkleste gratisalternativet. IPTV Smarters for Windows er bedre hvis du vil ha en TV-guide og en meny som på en TV."],
      ["Kan jeg se IPTV på en Mac?", "Ja. VLC og IPTV Smarters fungerer begge på Mac."],
    ],
  },
};

export default posts;
