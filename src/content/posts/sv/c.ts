import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Så tittar du på IPTV på iPhone, iPad och Apple TV",
    excerpt: "Titta på IPTV på din iPhone, iPad eller Apple TV: vilken app du ska installera från App Store, hur du loggar in med dina uppgifter och enkla tips för stabil bild.",
    heroAlt: "IPTV på iPhone, iPad och Apple TV.",
    takeaways: [
      "Installera en IPTV-app från App Store, som IPTV Smarters Pro eller GSE Smart IPTV.",
      "Logga in med användarnamnet, lösenordet och server-URL:en som vi skickar dig.",
      "Samma steg fungerar på iPhone, iPad och Apple TV.",
      "Använd 5 GHz-wifi eller en kabel på Apple TV för bästa bild.",
    ],
    body: [
      { type: "p", text: "Apple-enheter fungerar mycket bra med IPTV. Du behöver bara en app från App Store och inloggningsuppgifterna för ditt abonnemang. Det tar ungefär fem minuter." },
      { type: "h2", text: "Steg 1 — Installera en app" },
      { type: "ol", items: ["Öppna App Store på din iPhone, iPad eller Apple TV.", "Sök efter «IPTV Smarters Pro» eller «GSE Smart IPTV».", "Installera appen och öppna den."] },
      { type: "h2", text: "Steg 2 — Logga in" },
      { type: "ol", items: ["Välj «Login with Xtream Codes API» (namnet kan skilja sig lite mellan appar).", "Ge din spellista valfritt namn, till exempel DenvayStream.", "Skriv in användarnamnet, lösenordet och server-URL:en som vi skickade dig.", "Tryck på Add user eller Login och vänta medan kanalerna laddas."] },
      { type: "h2", text: "Tips för bättre bild" },
      { type: "ul", items: ["På Apple TV, använd en nätverkskabel om du kan.", "På iPhone och iPad, håll dig nära routern eller använd 5 GHz-wifi.", "Om en kanal stannar, stäng appen helt och öppna den igen.", "Slå bara på strömsparläget när du behöver, eftersom det kan göra strömningen långsammare."] },
      { type: "h2", text: "Titta på en större skärm" },
      { type: "p", text: "Du kan skicka bilden från din iPhone eller iPad till en tv med AirPlay. För bästa resultat på tv:n är det bättre att installera appen direkt på en Apple TV." },
      { type: "tip", text: "Vet du inte vilken app du ska välja för din Apple-enhet? Fråga oss på WhatsApp så skickar vi enkla instruktioner." },
    ],
    faqs: [
      ["Kan jag titta på IPTV på en iPhone?", "Ja. Installera en IPTV-app från App Store och logga in med dina abonnemangsuppgifter."],
      ["Vilken är den bästa IPTV-appen för Apple TV?", "IPTV Smarters Pro och GSE Smart IPTV är populära val på Apple TV. Båda låter dig logga in med användarnamn, lösenord och server-URL."],
      ["Behöver jag ett separat abonnemang för varje Apple-enhet?", "Nej. Du kan installera appen på flera enheter, men varje abonnemang låter dig titta på en enhet åt gången."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Så installerar du IPTV på Android TV, Android-box och Android-telefon",
    excerpt: "Installera IPTV på vilken Android-enhet som helst — Android TV, box, telefon eller surfplatta: en spelare från Google Play, inloggning och jämn, stabil bild.",
    heroAlt: "IPTV på Android TV, tv-box och telefon.",
    takeaways: [
      "Android-enheter kan installera IPTV-spelare direkt från Google Play.",
      "TiviMate är perfekt för tv; IPTV Smarters Pro fungerar bra på telefoner.",
      "Logga in med användarnamnet, lösenordet och server-URL:en som vi skickar dig.",
      "Att starta om enheten och rensa appens cache löser de flesta problem.",
    ],
    body: [
      { type: "p", text: "Android är ett av de enklaste systemen för IPTV. Android TV, Android TV-boxar, telefoner och surfplattor kan installera en app från Google Play på några minuter." },
      { type: "h2", text: "Steg 1 — Installera en app" },
      { type: "ol", items: ["Öppna Google Play på din enhet.", "Sök efter «TiviMate» (perfekt för tv) eller «IPTV Smarters Pro» (bra för telefon och tv).", "Installera appen och öppna den."] },
      { type: "h2", text: "Steg 2 — Lägg till ditt abonnemang" },
      { type: "ol", items: ["Välj «Add playlist» eller «Login with Xtream Codes».", "Skriv in server-URL:en, användarnamnet och lösenordet som vi skickade dig.", "Vänta medan appen laddar dina kanaler, filmer och tv-guiden."] },
      { type: "h2", text: "Steg 3 — Håll det jämnt" },
      { type: "ul", items: ["Koppla din tv-box med en nätverkskabel om du kan.", "Starta om boxen en gång i veckan.", "Rensa appens cache om kanalerna börjar frysa (Inställningar → Appar → din app → Lagring → Rensa cache).", "Ha minst 1 GB ledigt utrymme på enheten."] },
      { type: "h2", text: "Telefoner och surfplattor" },
      { type: "p", text: "På telefonen kan du titta hemma eller på resande fot. Använd wifi när du kan, eftersom strömning drar mycket mobildata. En timme HD-video kan dra 1 till 3 GB." },
      { type: "tip", text: "Berätta vilken modell din enhet är på WhatsApp så säger vi vilken app som fungerar bäst." },
    ],
    faqs: [
      ["Vilken är den bästa IPTV-appen för Android TV?", "TiviMate är en av de bästa IPTV-spelarna för Android TV och Android-boxar. IPTV Smarters Pro är ett bra gratis alternativ."],
      ["Kan jag titta på IPTV på min Android-telefon med mobildata?", "Ja, men strömning drar mycket data — 1 till 3 GB per timme i HD. Använd wifi när du kan."],
      ["Varför fryser min Android-box?", "De vanligaste orsakerna är svagt wifi, lite ledigt utrymme eller full cache. Använd en kabel, frigör utrymme och rensa cachen."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Så tittar du på IPTV på Windows-dator och Mac",
    excerpt: "Titta på IPTV på en Windows-dator, bärbar dator eller Mac med gratisspelare som VLC eller IPTV Smarters. Enkla steg för att lägga till ditt abonnemang och börja titta.",
    heroAlt: "IPTV på Windows och Mac: en bärbar dator som spelar upp video.",
    takeaways: [
      "Du kan titta på IPTV på en dator med gratisappar som VLC eller IPTV Smarters.",
      "VLC använder din M3U-länk; IPTV Smarters använder användarnamn, lösenord och server-URL.",
      "En trådbunden anslutning ger stabilast bild på en dator.",
      "Koppla den bärbara datorn till tv:n med en HDMI-kabel för att titta på stor skärm.",
    ],
    body: [
      { type: "p", text: "En dator är ett enkelt sätt att titta på IPTV, hemma eller på resande fot. Du kan använda en gratis spelare och börja titta på några minuter." },
      { type: "h2", text: "Alternativ 1 — VLC (gratis, mycket enkelt)" },
      { type: "ol", items: ["Ladda ner VLC från den officiella webbplatsen och installera programmet.", "Öppna VLC och klicka på Media → Öppna nätverksström (på Mac: Arkiv → Öppna nätverk).", "Klistra in M3U-länken som vi skickade och klicka på Spela upp.", "Öppna spellistan för att se din kanallista."] },
      { type: "h2", text: "Alternativ 2 — IPTV Smarters (med tv-guide)" },
      { type: "ol", items: ["Ladda ner IPTV Smarters för Windows eller Mac från den officiella webbplatsen.", "Öppna appen och välj «Login with Xtream Codes API».", "Skriv in användarnamnet, lösenordet och server-URL:en som vi skickade dig.", "Vänta medan kanaler, filmer och tv-guide laddas."] },
      { type: "h2", text: "Titta på din tv" },
      { type: "p", text: "Koppla den bärbara datorn till tv:n med en HDMI-kabel. Välj rätt HDMI-ingång på tv:n. På Windows trycker du på Windows-tangenten + P för att välja hur skärmen visas." },
      { type: "h2", text: "Tips" },
      { type: "ul", items: ["Stäng andra program som använder internet, som nedladdningar.", "Använd en nätverkskabel om ditt wifi är svagt.", "Håll din spelarapp uppdaterad."] },
      { type: "tip", text: "Behöver du din M3U-länk eller hjälp med appen? Skriv till oss på WhatsApp." },
    ],
    faqs: [
      ["Kan jag titta på IPTV på en bärbar dator?", "Ja. Installera en gratis spelare som VLC eller IPTV Smarters, lägg till dina abonnemangsuppgifter och börja titta."],
      ["Vilken är den bästa IPTV-spelaren för Windows?", "VLC är det enklaste gratisalternativet. IPTV Smarters för Windows är bättre om du vill ha en tv-guide och en meny som på en tv."],
      ["Kan jag titta på IPTV på en Mac?", "Ja. VLC och IPTV Smarters fungerar båda på Mac."],
    ],
  },
};

export default posts;
