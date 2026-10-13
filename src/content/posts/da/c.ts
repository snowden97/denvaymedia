import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Sådan ser du IPTV på iPhone, iPad og Apple TV",
    excerpt: "Se IPTV på din iPhone, iPad eller Apple TV: hvilken app du skal installere fra App Store, hvordan du logger ind med dine oplysninger, og enkle tips til et stabilt billede.",
    heroAlt: "IPTV på iPhone, iPad og Apple TV.",
    takeaways: [
      "Installer en IPTV-app fra App Store, som IPTV Smarters Pro eller GSE Smart IPTV.",
      "Log ind med brugernavnet, adgangskoden og server-URL'en, som vi sender dig.",
      "De samme trin virker på iPhone, iPad og Apple TV.",
      "Brug 5 GHz-wifi eller et kabel på Apple TV for det bedste billede.",
    ],
    body: [
      { type: "p", text: "Apple-enheder virker rigtig godt med IPTV. Du skal kun bruge en app fra App Store og loginoplysningerne til dit abonnement. Det tager omkring fem minutter." },
      { type: "h2", text: "Trin 1 — Installer en app" },
      { type: "ol", items: ["Åbn App Store på din iPhone, iPad eller Apple TV.", "Søg efter »IPTV Smarters Pro« eller »GSE Smart IPTV«.", "Installer appen og åbn den."] },
      { type: "h2", text: "Trin 2 — Log ind" },
      { type: "ol", items: ["Vælg »Login with Xtream Codes API« (navnet kan variere lidt fra app til app).", "Giv din afspilningsliste et valgfrit navn, for eksempel DenvayStream.", "Skriv brugernavnet, adgangskoden og server-URL'en, som vi sendte dig.", "Tryk på Add user eller Login og vent, mens kanalerne indlæses."] },
      { type: "h2", text: "Tips til et bedre billede" },
      { type: "ul", items: ["På Apple TV skal du bruge et netværkskabel, hvis du kan.", "På iPhone og iPad skal du holde dig tæt på routeren eller bruge 5 GHz-wifi.", "Hvis en kanal stopper, så luk appen helt og åbn den igen.", "Slå kun strømsparetilstand til, når du har brug for det, da den kan gøre streaming langsommere."] },
      { type: "h2", text: "Se på en større skærm" },
      { type: "p", text: "Du kan sende billedet fra din iPhone eller iPad til et tv med AirPlay. For det bedste resultat på tv'et er det bedre at installere appen direkte på et Apple TV." },
      { type: "tip", text: "Ved du ikke, hvilken app du skal vælge til din Apple-enhed? Spørg os på WhatsApp, så sender vi en enkel vejledning." },
    ],
    faqs: [
      ["Kan jeg se IPTV på en iPhone?", "Ja. Installer en IPTV-app fra App Store og log ind med dine abonnementsoplysninger."],
      ["Hvad er den bedste IPTV-app til Apple TV?", "IPTV Smarters Pro og GSE Smart IPTV er populære valg på Apple TV. Begge lader dig logge ind med brugernavn, adgangskode og server-URL."],
      ["Skal jeg have et separat abonnement til hver Apple-enhed?", "Nej. Du kan installere appen på flere enheder, men hvert abonnement lader dig se på én enhed ad gangen."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Sådan opsætter du IPTV på Android TV, Android-boks og Android-telefon",
    excerpt: "Opsæt IPTV på enhver Android-enhed — Android TV, boks, telefon eller tablet: en afspiller fra Google Play, login og et jævnt, stabilt billede.",
    heroAlt: "IPTV på Android TV, tv-boks og telefon.",
    takeaways: [
      "Android-enheder kan installere IPTV-afspillere direkte fra Google Play.",
      "TiviMate er perfekt til tv; IPTV Smarters Pro virker godt på telefoner.",
      "Log ind med brugernavnet, adgangskoden og server-URL'en, som vi sender dig.",
      "At genstarte enheden og rydde appens cache løser de fleste problemer.",
    ],
    body: [
      { type: "p", text: "Android er et af de nemmeste systemer til IPTV. Android TV, Android TV-bokse, telefoner og tablets kan installere en app fra Google Play på få minutter." },
      { type: "h2", text: "Trin 1 — Installer en app" },
      { type: "ol", items: ["Åbn Google Play på din enhed.", "Søg efter »TiviMate« (perfekt til tv) eller »IPTV Smarters Pro« (god til telefon og tv).", "Installer appen og åbn den."] },
      { type: "h2", text: "Trin 2 — Tilføj dit abonnement" },
      { type: "ol", items: ["Vælg »Add playlist« eller »Login with Xtream Codes«.", "Skriv server-URL'en, brugernavnet og adgangskoden, som vi sendte dig.", "Vent, mens appen indlæser dine kanaler, film og tv-guiden."] },
      { type: "h2", text: "Trin 3 — Hold det jævnt" },
      { type: "ul", items: ["Forbind din tv-boks med et netværkskabel, hvis du kan.", "Genstart boksen én gang om ugen.", "Ryd appens cache, hvis kanalerne begynder at fryse (Indstillinger → Apps → din app → Lagerplads → Ryd cache).", "Hav mindst 1 GB fri plads på enheden."] },
      { type: "h2", text: "Telefoner og tablets" },
      { type: "p", text: "På telefonen kan du se derhjemme eller på farten. Brug wifi, når du kan, da streaming bruger mange mobildata. En time HD-video kan bruge 1 til 3 GB." },
      { type: "tip", text: "Fortæl os, hvilken model din enhed er, på WhatsApp, så siger vi, hvilken app der virker bedst." },
    ],
    faqs: [
      ["Hvad er den bedste IPTV-app til Android TV?", "TiviMate er en af de bedste IPTV-afspillere til Android TV og Android-bokse. IPTV Smarters Pro er et godt gratis alternativ."],
      ["Kan jeg se IPTV på min Android-telefon med mobildata?", "Ja, men streaming bruger mange data — 1 til 3 GB i timen i HD. Brug wifi, når du kan."],
      ["Hvorfor fryser min Android-boks?", "De mest almindelige årsager er svagt wifi, lidt fri plads eller fuld cache. Brug et kabel, frigør plads og ryd cachen."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Sådan ser du IPTV på Windows-pc og Mac",
    excerpt: "Se IPTV på en Windows-pc, bærbar eller Mac med gratis afspillere som VLC eller IPTV Smarters. Enkle trin til at tilføje dit abonnement og begynde at se.",
    heroAlt: "IPTV på Windows og Mac: en bærbar computer, der afspiller video.",
    takeaways: [
      "Du kan se IPTV på en computer med gratis apps som VLC eller IPTV Smarters.",
      "VLC bruger dit M3U-link; IPTV Smarters bruger dit brugernavn, din adgangskode og server-URL.",
      "En kablet forbindelse giver det mest stabile billede på en computer.",
      "Forbind din bærbare med tv'et med et HDMI-kabel for at se på stor skærm.",
    ],
    body: [
      { type: "p", text: "En computer er en nem måde at se IPTV på, derhjemme eller på farten. Du kan bruge en gratis afspiller og begynde at se på få minutter." },
      { type: "h2", text: "Mulighed 1 — VLC (gratis, meget enkel)" },
      { type: "ol", items: ["Download VLC fra den officielle hjemmeside og installer det.", "Åbn VLC og klik på Medie → Åbn netværksstream (på Mac: Arkiv → Åbn netværk).", "Indsæt det M3U-link, vi sendte dig, og klik på Afspil.", "Åbn afspilningslisten for at se din kanalliste."] },
      { type: "h2", text: "Mulighed 2 — IPTV Smarters (med tv-guide)" },
      { type: "ol", items: ["Download IPTV Smarters til Windows eller Mac fra den officielle hjemmeside.", "Åbn appen og vælg »Login with Xtream Codes API«.", "Skriv brugernavnet, adgangskoden og server-URL'en, som vi sendte dig.", "Vent, mens kanaler, film og tv-guide indlæses."] },
      { type: "h2", text: "Se på dit tv" },
      { type: "p", text: "Forbind din bærbare med tv'et med et HDMI-kabel. Vælg den rigtige HDMI-indgang på tv'et. På Windows trykker du på Windows-tasten + P for at vælge, hvordan skærmen vises." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: ["Luk andre programmer, der bruger internettet, som downloads.", "Brug et netværkskabel, hvis dit wifi er svagt.", "Hold din afspillerapp opdateret."] },
      { type: "tip", text: "Har du brug for dit M3U-link eller hjælp til appen? Skriv til os på WhatsApp." },
    ],
    faqs: [
      ["Kan jeg se IPTV på en bærbar computer?", "Ja. Installer en gratis afspiller som VLC eller IPTV Smarters, tilføj dine abonnementsoplysninger og begynd at se."],
      ["Hvad er den bedste IPTV-afspiller til Windows?", "VLC er den enkleste gratis løsning. IPTV Smarters til Windows er bedre, hvis du vil have en tv-guide og en menu som på et tv."],
      ["Kan jeg se IPTV på en Mac?", "Ja. VLC og IPTV Smarters virker begge på Mac."],
    ],
  },
};

export default posts;
