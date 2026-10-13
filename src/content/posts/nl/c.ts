import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "IPTV kijken op iPhone, iPad en Apple TV",
    excerpt: "Kijk IPTV op je iPhone, iPad of Apple TV: welke app je uit de App Store installeert, hoe je inlogt met je gegevens en eenvoudige tips voor een stabiel beeld.",
    heroAlt: "IPTV op iPhone, iPad en Apple TV.",
    takeaways: [
      "Installeer een IPTV-app uit de App Store, zoals IPTV Smarters Pro of GSE Smart IPTV.",
      "Log in met de gebruikersnaam, het wachtwoord en de server-URL die we je sturen.",
      "Dezelfde stappen werken op iPhone, iPad en Apple TV.",
      "Gebruik 5 GHz-wifi of een kabel op de Apple TV voor het beste beeld.",
    ],
    body: [
      { type: "p", text: "Apple-apparaten werken heel goed met IPTV. Je hebt alleen een app uit de App Store en de inloggegevens van je abonnement nodig. Het duurt ongeveer vijf minuten." },
      { type: "h2", text: "Stap 1 — Installeer een app" },
      { type: "ol", items: ["Open de App Store op je iPhone, iPad of Apple TV.", "Zoek «IPTV Smarters Pro» of «GSE Smart IPTV».", "Installeer de app en open hem."] },
      { type: "h2", text: "Stap 2 — Log in" },
      { type: "ol", items: ["Kies «Login with Xtream Codes API» (de naam kan per app iets verschillen).", "Geef je afspeellijst een naam naar keuze, bijvoorbeeld DenvayStream.", "Typ de gebruikersnaam, het wachtwoord en de server-URL die we je hebben gestuurd.", "Tik op Add user of Login en wacht tot de zenders geladen zijn."] },
      { type: "h2", text: "Tips voor een beter beeld" },
      { type: "ul", items: ["Gebruik op de Apple TV een netwerkkabel als dat kan.", "Blijf op iPhone en iPad dicht bij de router of gebruik 5 GHz-wifi.", "Stopt een zender, sluit de app dan helemaal af en open hem opnieuw.", "Zet de energiebesparingsmodus alleen aan als het nodig is, want die kan het streamen vertragen."] },
      { type: "h2", text: "Kijken op een groter scherm" },
      { type: "p", text: "Je kunt het beeld van je iPhone of iPad met AirPlay naar een tv sturen. Voor het beste resultaat op de tv installeer je de app liever direct op een Apple TV." },
      { type: "tip", text: "Weet je niet welke app je voor je Apple-apparaat moet kiezen? Vraag het ons via WhatsApp en we sturen je eenvoudige instructies." },
    ],
    faqs: [
      ["Kan ik IPTV kijken op een iPhone?", "Ja. Installeer een IPTV-app uit de App Store en log in met je abonnementsgegevens."],
      ["Wat is de beste IPTV-app voor Apple TV?", "IPTV Smarters Pro en GSE Smart IPTV zijn populaire keuzes op Apple TV. Met beide kun je inloggen met gebruikersnaam, wachtwoord en server-URL."],
      ["Heb ik voor elk Apple-apparaat een apart abonnement nodig?", "Nee. Je kunt de app op meerdere apparaten installeren, maar elk abonnement laat je op één apparaat tegelijk kijken."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "IPTV instellen op Android TV, Android-box en Android-telefoon",
    excerpt: "Stel IPTV in op elk Android-apparaat — Android TV, box, telefoon of tablet: een speler uit Google Play, inloggen en een vloeiend, stabiel beeld.",
    heroAlt: "IPTV op Android TV, tv-box en telefoon.",
    takeaways: [
      "Android-apparaten kunnen IPTV-spelers direct uit Google Play installeren.",
      "TiviMate is geweldig voor tv's; IPTV Smarters Pro werkt goed op telefoons.",
      "Log in met de gebruikersnaam, het wachtwoord en de server-URL die we je sturen.",
      "Het apparaat herstarten en de app-cache wissen lost de meeste problemen op.",
    ],
    body: [
      { type: "p", text: "Android is een van de makkelijkste systemen voor IPTV. Android TV's, Android TV-boxen, telefoons en tablets kunnen in een paar minuten een app uit Google Play installeren." },
      { type: "h2", text: "Stap 1 — Installeer een app" },
      { type: "ol", items: ["Open Google Play op je apparaat.", "Zoek «TiviMate» (ideaal voor tv's) of «IPTV Smarters Pro» (goed voor telefoon en tv).", "Installeer de app en open hem."] },
      { type: "h2", text: "Stap 2 — Voeg je abonnement toe" },
      { type: "ol", items: ["Kies «Add playlist» of «Login with Xtream Codes».", "Typ de server-URL, de gebruikersnaam en het wachtwoord die we je hebben gestuurd.", "Wacht terwijl de app je zenders, films en tv-gids laadt."] },
      { type: "h2", text: "Stap 3 — Houd het vloeiend" },
      { type: "ul", items: ["Sluit je tv-box aan met een netwerkkabel als dat kan.", "Herstart de box één keer per week.", "Wis de cache van de app als zenders beginnen te bevriezen (Instellingen → Apps → je app → Opslag → Cache wissen).", "Houd minstens 1 GB vrije ruimte op het apparaat."] },
      { type: "h2", text: "Telefoons en tablets" },
      { type: "p", text: "Op je telefoon kun je thuis en onderweg kijken. Gebruik wifi wanneer het kan, want streamen gebruikt veel mobiele data. Een uur HD-video kan 1 tot 3 GB kosten." },
      { type: "tip", text: "Vertel ons het model van je apparaat via WhatsApp en we zeggen welke app het best werkt." },
    ],
    faqs: [
      ["Wat is de beste IPTV-app voor Android TV?", "TiviMate is een van de beste IPTV-spelers voor Android TV en Android-boxen. IPTV Smarters Pro is een goede gratis optie."],
      ["Kan ik IPTV kijken op mijn Android-telefoon met mobiele data?", "Ja, maar streamen gebruikt veel data — 1 tot 3 GB per uur in HD. Gebruik wifi wanneer het kan."],
      ["Waarom bevriest mijn Android-box?", "De meest voorkomende oorzaken zijn zwakke wifi, weinig vrije ruimte of een volle cache. Gebruik een kabel, maak ruimte vrij en wis de cache."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "IPTV kijken op een Windows-pc en Mac",
    excerpt: "Kijk IPTV op een Windows-pc, laptop of Mac met gratis spelers zoals VLC of IPTV Smarters. Eenvoudige stappen om je abonnement toe te voegen en te beginnen.",
    heroAlt: "IPTV op Windows en Mac: een laptop die video afspeelt.",
    takeaways: [
      "Je kunt IPTV op een computer kijken met gratis apps zoals VLC of IPTV Smarters.",
      "VLC gebruikt je M3U-link; IPTV Smarters gebruikt je gebruikersnaam, wachtwoord en server-URL.",
      "Een bekabelde verbinding geeft het stabielste beeld op een computer.",
      "Sluit je laptop met een HDMI-kabel aan op je tv om op groot scherm te kijken.",
    ],
    body: [
      { type: "p", text: "Een computer is een makkelijke manier om IPTV te kijken, thuis of onderweg. Je kunt een gratis speler gebruiken en binnen een paar minuten kijken." },
      { type: "h2", text: "Optie 1 — VLC (gratis, heel eenvoudig)" },
      { type: "ol", items: ["Download VLC van de officiële website en installeer het.", "Open VLC en klik op Media → Netwerkstream openen (op Mac: Archief → Open netwerk).", "Plak de M3U-link die we je hebben gestuurd en klik op Afspelen.", "Open de afspeellijst om je zenderlijst te zien."] },
      { type: "h2", text: "Optie 2 — IPTV Smarters (met tv-gids)" },
      { type: "ol", items: ["Download IPTV Smarters voor Windows of Mac van de officiële website.", "Open de app en kies «Login with Xtream Codes API».", "Typ de gebruikersnaam, het wachtwoord en de server-URL die we je hebben gestuurd.", "Wacht tot de zenders, films en tv-gids geladen zijn."] },
      { type: "h2", text: "Kijken op je tv" },
      { type: "p", text: "Sluit je laptop met een HDMI-kabel aan op je tv. Kies op de tv de juiste HDMI-ingang. Druk op Windows op de Windows-toets + P om te kiezen hoe het scherm wordt getoond." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: ["Sluit andere programma's die internet gebruiken, zoals downloads.", "Gebruik een netwerkkabel als je wifi zwak is.", "Houd je speler-app up-to-date."] },
      { type: "tip", text: "Heb je je M3U-link of hulp met de app nodig? Stuur ons een bericht via WhatsApp." },
    ],
    faqs: [
      ["Kan ik IPTV kijken op een laptop?", "Ja. Installeer een gratis speler zoals VLC of IPTV Smarters, voeg je abonnementsgegevens toe en begin met kijken."],
      ["Wat is de beste IPTV-speler voor Windows?", "VLC is de eenvoudigste gratis optie. IPTV Smarters voor Windows is beter als je een tv-gids en een menu zoals op een tv wilt."],
      ["Kan ik IPTV kijken op een Mac?", "Ja. VLC en IPTV Smarters werken allebei op Mac."],
    ],
  },
};

export default posts;
