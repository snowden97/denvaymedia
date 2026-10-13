import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("nl");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "IPTV in 2026: de complete gids (hoe het werkt, apparaten, prijzen en veiligheid)",
    excerpt: "Alles wat je moet weten over IPTV in 2026: hoe het werkt, wat je nodig hebt, apparaten, internetsnelheid, prijzen, hoe je een goede dienst kiest en hoe je begint.",
    heroAlt: "Complete IPTV-gids 2026: een open boek.",
    takeaways: [
      "IPTV is tv die via internet binnenkomt in plaats van via een schotel of kabel.",
      "Je hebt drie dingen nodig: een ondersteund apparaat, een speler-app en een stabiele internetverbinding (10 Mbps voor HD, 25 Mbps voor 4K).",
      "IPTV kost meestal minder dan kabel of satelliet en heeft geen lange contracten.",
      "Kies een dienst met een gratis proef, duidelijk beleid en echte support — en test hem eerst op je apparaat.",
      "De meeste problemen, zoals haperingen, komen door de wifi of het apparaat en zijn makkelijk op te lossen.",
    ],
    body: [
      { type: "p", text: "IPTV (internetprotocoltelevisie) is een manier om tv te kijken via je internetverbinding. In plaats van zenders te ontvangen via een schotel of een kabel in de muur, reist het beeld als gegevens van een server naar een app op je tv, telefoon of computer. Deze gids legt in eenvoudige woorden uit hoe IPTV werkt, wat je nodig hebt, wat het kost en hoe je een dienst kiest en instelt." },

      { type: "h2", text: "Wat is IPTV?" },
      { type: "p", text: "IPTV is televisie die wordt verstuurd met dezelfde technologie als de rest van internet. Je apparaat downloadt een klein stukje video, speelt het af en downloadt het volgende stukje, steeds opnieuw. Daarom kun je tv kijken op bijna elk scherm met internet — thuis of onderweg." },
      { type: "p", text: "Grote providers gebruiken IPTV-technologie voor hun eigen tv-pakketten, en veel onafhankelijke diensten bieden IPTV-abonnementen die werken met populaire speler-apps. De technologie is hetzelfde; wat verschilt, zijn de dienst, de inhoud en de kwaliteit." },

      { type: "h2", text: "Hoe werkt IPTV?" },
      { type: "p", text: "Elke IPTV-dienst volgt hetzelfde basispad, van de bron tot je scherm:" },
      { type: "ol", items: [
        "Codering: de aanbieder zet elke zender of video om in een digitale stream in verschillende kwaliteiten (bijvoorbeeld HD, Full HD en 4K).",
        "Servers: de streams worden opgeslagen op, of gaan door, krachtige servers die ze naar kijkers sturen.",
        "Levering: als je een zender kiest, stuurt de server de stream via internet naar je apparaat.",
        "Afspelen: een app op je apparaat decodeert de stream en toont het beeld, het geluid en de tv-gids.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Hoe IPTV werkt: van codering tot je scherm in 4 stappen." },
      { type: "p", text: "De kwaliteit die je ziet, hangt af van elke stap: goede servers, een stabiele internetverbinding en een capabel apparaat. Is er één zwak, dan kan het haperen." },

      { type: "h2", text: "IPTV versus kabel, satelliet en streamingapps" },
      { type: "table", caption: "Hoe IPTV zich verhoudt tot andere manieren van tv-kijken", head: ["", "IPTV", "Kabel", "Satelliet", "Streamingapps"], rows: [
        ["Live tv-zenders", "Ja", "Ja", "Ja", "Meestal niet"],
        ["Films en series on demand", "Ja", "Beperkt", "Beperkt", "Ja"],
        ["Installatie nodig", "Nee", "Vaak", "Ja (schotel)", "Nee"],
        ["Contract", "Meestal geen", "12–24 maanden", "12–24 maanden", "Maandelijks"],
        ["Telefoon, tv en pc", "Ja", "Beperkt", "Beperkt", "Ja"],
        ["Hangt af van internetsnelheid", "Ja", "Nee", "Nee", "Ja"],
        ["Last van slecht weer", "Nee", "Nee", "Ja", "Nee"],
      ] },
      { type: "p", text: "Kort gezegd: IPTV geeft je live tv zoals kabel, de flexibiliteit van streamingapps, en geen schotel of monteur. Het belangrijkste wat het nodig heeft, is een goede internetverbinding." },
      { type: "links", title: "Lees ook", items: [["IPTV, kabel of satelliet: de volledige vergelijking", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "Wat kun je kijken met IPTV?" },
      { type: "h3", text: "Live tv" },
      { type: "p", text: "Zenders die je kijkt terwijl ze worden uitgezonden — nieuws, sport, entertainment, kids en internationale zenders — met een tv-gids die laat zien wat er nu en straks op is." },
      { type: "h3", text: "Video on demand (VOD)" },
      { type: "p", text: "Een bibliotheek met films en series die je kunt starten, pauzeren en opnieuw bekijken wanneer je wilt." },
      { type: "h3", text: "Catch-up (terugkijken)" },
      { type: "p", text: "Programma's van de afgelopen dagen, beschikbaar om later te bekijken. Deze functie hangt af van de zender en je app." },

      { type: "h2", text: "Wat heb je nodig om IPTV te kijken?" },
      { type: "ul", items: [
        "Een ondersteund apparaat: Smart TV, Amazon Firestick, Android TV-box, telefoon, tablet, computer of MAG-box.",
        "Een speler-app, zoals TiviMate, IPTV Smarters, IBO Player of VLC. De app bevat geen zenders.",
        "Een IPTV-abonnement, dat je inloggegevens geeft (gebruikersnaam, wachtwoord en server-URL) of een M3U-link.",
        "Een stabiele internetverbinding — het liefst met een netwerkkabel voor tv's en tv-boxen.",
      ] },

      { type: "h2", text: "Welke internetsnelheid heb je nodig?" },
      { type: "table", caption: "Aanbevolen internetsnelheid per stream", head: ["Beeldkwaliteit", "Minimale snelheid", "Aanbevolen"], rows: [
        ["SD", "3 Mbps", "5 Mbps"],
        ["HD (720p)", "7 Mbps", "10 Mbps"],
        ["Full HD (1080p)", "10 Mbps", "15 Mbps"],
        ["4K Ultra HD", "20 Mbps", "25 Mbps of meer"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Aanbevolen internetsnelheid voor één scherm, per beeldkwaliteit." },
      { type: "p", text: "Deze cijfers gelden voor één scherm. Kijken meerdere mensen tegelijk, tel de snelheden dan op. Test de snelheid altijd op het apparaat waarop je kijkt, niet op je telefoon naast de router." },
      { type: "links", title: "Lees ook", items: [["Welke internetsnelheid heb je nodig voor IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Welke apparaten werken met IPTV?" },
      { type: "p", text: "Bijna elk modern scherm kan IPTV afspelen. De beste keuze hangt af van wat je al hebt:" },
      { type: "figure", name: "devices", caption: "IPTV werkt op Smart TV's, streamingsticks, tv-boxen, telefoons, tablets en computers." },
      { type: "ul", items: [
        "Amazon Firestick: goedkoop, klein en heel populair. Een prima keuze voor de meeste mensen.",
        "Smart TV (Samsung, LG): geen extra apparaat, al hebben oudere modellen minder apps.",
        "Android TV-boxen: krachtig en flexibel, met meer apps om uit te kiezen.",
        "iPhone, iPad en Apple TV: soepel en eenvoudig, met apps uit de App Store.",
        "MAG-boxen: alleen voor IPTV gemaakt en heel makkelijk met de afstandsbediening.",
        "Windows- en Mac-computers: makkelijk met gratis apps zoals VLC.",
      ] },
      { type: "links", title: "Stap-voor-stap-installatiegidsen", items: [
        ["Alle installatiegidsen per apparaat", "/setup"],
        ["IPTV op Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV op Samsung en LG Smart TV", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV op Android TV, box en telefoon", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV op iPhone, iPad en Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV op een MAG-box", "/blog/iptv-on-mag-box"],
        ["IPTV op Windows en Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "Wat kost IPTV?" },
      { type: "p", text: `De prijs van IPTV hangt af van de dienst en de looptijd van het plan. Langere plannen kosten bijna altijd minder per maand. De plannen van DenvayStream beginnen bijvoorbeeld bij ${p.cheapest} voor 3 maanden, en het 2-jarenplan komt neer op ${p.monthly} per maand — met alle functies in elk plan.` },
      { type: "p", text: "Vergeleken met kabel of satelliet heeft IPTV meestal geen installatiekosten, gehuurde apparatuur of lange contracten. Pas op voor prijzen die te mooi zijn om waar te zijn: heel goedkope diensten hebben vaak onstabiele servers en geen echte support." },
      { type: "links", title: "Bekijk prijzen", items: [["DenvayStream-plannen en -prijzen", "/pricing"]] },
      { type: "cta", title: "Twijfel je nog? Probeer IPTV 24 uur gratis", text: "Controleer de beeldkwaliteit, de zenders en de stabiliteit op je eigen apparaat en internet — voordat je iets betaalt." },

      { type: "h2", text: "Zo kies je een goede IPTV-dienst" },
      { type: "p", text: "Niet elke IPTV-dienst is hetzelfde. Gebruik deze checklist voordat je betaalt:" },
      { type: "ol", items: [
        "Gratis proef: een goede dienst laat je hem op je eigen apparaat testen voordat je koopt.",
        "Stabiele servers: kijk 's avonds in de piekuren en tijdens een live-evenement om de stabiliteit te testen.",
        "Beeldkwaliteit: controleer HD, Full HD en 4K op je scherm.",
        "Echte support: stel een vraag en let op hoe snel en goed ze antwoorden.",
        "Duidelijk beleid: zoek naar servicevoorwaarden, privacy-, terugbetalings- en DMCA-beleid.",
        "Eerlijke regels: geen lang contract, geen automatische verlenging waar je niet om vroeg en een duidelijke terugbetalingstermijn.",
        "Ondersteunde apparaten: controleer of het werkt met je apparaten en apps.",
      ] },
      { type: "links", title: "Lees ook", items: [["Een IPTV-dienst testen met een gratis proef", "/blog/how-to-test-iptv-free-trial"], ["De beste IPTV-apps", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "Is IPTV legaal en veilig?" },
      { type: "p", text: "IPTV-technologie is legaal — het is gewoon een manier om video via internet te versturen. Of een bepaalde dienst legaal is, hangt af van of hij de juiste licenties voor zijn inhoud heeft en van de wetten in je land. Kies voor de zekerheid een aanbieder met duidelijk openbaar beleid, betaal met veilige methoden en deel nooit je volledige kaartgegevens via chat." },
      { type: "links", title: "Lees ook", items: [["Is IPTV legaal? Wat je moet weten", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Veelvoorkomende IPTV-problemen en snelle oplossingen" },
      { type: "table", caption: "De meest voorkomende IPTV-problemen en hoe je ze oplost", head: ["Probleem", "Meest waarschijnlijke oorzaak", "Snelle oplossing"], rows: [
        ["Haperen of bevriezen", "Zwakke wifi of traag internet", "Gebruik een netwerkkabel en herstart de router"],
        ["Zenders laden niet", "Verkeerde inloggegevens", "Controleer server-URL, gebruikersnaam en wachtwoord"],
        ["Tv-gids is leeg", "De gids is nog niet geladen", "Ververs de tv-gids in de instellingen van de app"],
        ["App is traag", "Geheugen of cache vol", "Wis de cache en herstart het apparaat"],
        ["Problemen alleen 's avonds", "Internetprovider overbelast", "Schakel in de piekuren naar Full HD"],
      ] },
      { type: "links", title: "Lees ook", items: [["IPTV hapert: 9 oplossingen die werken", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Beginnen met IPTV in 5 stappen" },
      { type: "ol", items: [
        "Controleer je internetsnelheid op het apparaat waarop je gaat kijken.",
        "Kies je apparaat en installeer een speler-app.",
        "Vraag een gratis proef aan om de dienst thuis te testen.",
        "Bevalt het? Kies een plan — langere plannen kosten minder per maand.",
        "Log in op je app met de gegevens die je ontvangt en begin met kijken.",
      ] },
      { type: "figure", name: "start-steps", caption: "Van nul tot tv-kijken: de 5 stappen om met IPTV te beginnen." },

      { type: "h2", text: "De toekomst van IPTV" },
      { type: "p", text: "Steeds meer mensen kijken tv op meerdere schermen en internetverbindingen worden steeds sneller. Daarom blijft IPTV groeien. De komende jaren komen er meer 4K-inhoud, betere tv-gidsen, slimmere apps en sneller zappen. Beter internet thuis, zoals glasvezel en snelle wifi, betekent ook minder kwaliteitsproblemen." },

      { type: "h2", text: "IPTV-woorden die je moet kennen" },
      { type: "p", text: "Je ziet vaak woorden als M3U, EPG, MAC-adres, server-URL, VOD en catch-up. Onze woordenlijst legt elk woord uit in een of twee eenvoudige zinnen." },
      { type: "links", title: "Leer de woorden", items: [["IPTV-woordenlijst: IPTV-woorden eenvoudig uitgelegd", "/glossary"], ["Wat is IPTV? Gids voor beginners", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Wil je zien hoe IPTV op je eigen tv werkt? Vraag een gratis DenvayStream-proef van 24 uur aan — geen betaalgegevens nodig." },
    ],
    faqs: [
      ["Wat is IPTV in eenvoudige woorden?", "IPTV is tv die via je internetverbinding binnenkomt in plaats van via een schotel of kabel. Je kijkt het met een app op je tv, telefoon, tablet of computer."],
      ["Hoe werkt IPTV?", "Een aanbieder zet zenders en video's om in digitale streams en stuurt ze vanaf zijn servers via internet. Een app op je apparaat ontvangt de stream en toont het beeld."],
      ["Wat heb ik nodig om IPTV te kijken?", "Een ondersteund apparaat, een speler-app, een IPTV-abonnement en een stabiele internetverbinding — minstens 10 Mbps voor HD en 25 Mbps voor 4K."],
      ["Is IPTV beter dan kabel?", "Voor de meeste huishoudens met goed internet is IPTV goedkoper, heeft het geen contract en werkt het op meer apparaten. Kabel kan stabieler zijn als je internet traag is."],
      ["Kan ik IPTV op meer dan één apparaat kijken?", "Ja, je kunt de app op meerdere apparaten installeren. Hoeveel er tegelijk kunnen kijken, hangt af van je plan — meestal is één verbinding één apparaat tegelijk."],
      ["Wat kost IPTV per maand?", `Dat hangt af van de dienst en de looptijd. Bij DenvayStream beginnen de plannen bij ${p.cheapest} voor 3 maanden, en het 2-jarenplan kost ${p.monthly} per maand.`],
      ["Heb ik een VPN nodig voor IPTV?", "Nee, je hebt geen VPN nodig. Sommige gebruikers gebruiken er een als hun internetprovider het streamen in de piekuren vertraagt."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Gratis IPTV-proef 24 uur: zo krijg je hem en wat je test (2026)",
    excerpt: "Vraag een gratis IPTV-proef van 24 uur aan zonder creditcard. Wat erin zit, hoe je hem binnen minuten krijgt, wat je test en hoe je een veilige proef herkent.",
    heroAlt: "Gratis IPTV-proef van 24 uur: een tv met live tv in 4K, een badge gratis proef 24u en geen creditcard nodig.",
    takeaways: [
      "Met een gratis IPTV-proef van 24 uur test je de hele dienst op je eigen apparaat voordat je betaalt.",
      "Een goede proef vraagt geen creditcard, geeft volledige toegang en is binnen minuten klaar.",
      "Test 's avonds en tijdens live sport — dan zijn de servers het drukst.",
      "Als de proef afloopt, wordt er niets in rekening gebracht. Je kiest alleen een plan als het bevalt.",
    ],
    body: [
      { type: "p", text: "Een gratis IPTV-proef is een korte, gratis test van een IPTV-dienst. De meeste duren 24 uur. In die tijd kun je live tv, films en series kijken op je tv of telefoon, zodat je de kwaliteit kunt controleren voordat je een abonnement koopt. Deze gids legt uit hoe een proef van 24 uur werkt, hoe je hem krijgt, wat je test en hoe je een veilige proef van een riskante onderscheidt." },

      { type: "h2", text: "Wat is een gratis IPTV-proef van 24 uur?" },
      { type: "p", text: "Een gratis IPTV-proef van 24 uur is tijdelijke, gratis toegang tot een IPTV-dienst. De aanbieder stuurt je proefgegevens — meestal een gebruikersnaam, wachtwoord en server-URL — die 24 uur werken. Je voegt ze toe aan een app op je apparaat en gebruikt de dienst net als een betalende klant." },
      { type: "p", text: "Het doel is eenvoudig: de echte beeldkwaliteit, stabiliteit en laadsnelheid van de zenders zien op je eigen apparaat en verbinding — niet in een demovideo." },

      { type: "h2", text: "Waarom 24 uur de ideale duur is" },
      { type: "ul", items: [
        "Het omvat een hele dag, inclusief de drukke avonduren waarin servers het zwaarst belast zijn.",
        "Het is lang genoeg om live tv, films, de tv-gids en meerdere apparaten te testen.",
        "Het is kort genoeg om snel te beslissen, zonder te vergeten te testen.",
      ] },

      { type: "h2", text: "Hoe de gratis proef werkt, stap voor stap" },
      { type: "figure", name: "trial-timeline", caption: "De 4 fasen van een gratis IPTV-proef van 24 uur — van aanvraag tot beslissing." },
      { type: "ol", items: [
        "Aanvraag: vul een kort formulier in met je naam, apparaat en app. Bij DenvayStream opent het WhatsApp met je aanvraag klaar om te verzenden.",
        "Inloggegevens: het team stuurt je proefgegevens en een installatiegids voor je apparaat, meestal binnen enkele minuten.",
        "Test: installeer de app, log in en gebruik de dienst 24 uur lang.",
        "Beslissing: bevalt het, kies dan een plan. Zo niet, dan stop je gewoon — er wordt niets in rekening gebracht.",
      ] },
      { type: "links", title: "Vraag je proef aan", items: [["Vraag een gratis DenvayStream-proef van 24 uur aan", "/free-trial"]] },

      { type: "h2", text: "Wat zit er in de proef?" },
      { type: "p", text: "Een goede IPTV-proef is geen beperkte demo. Je hoort dezelfde dienst te krijgen als betalende klanten:" },
      { type: "table", caption: "Gratis proef versus betaald plan", head: ["Functie", "Gratis proef van 24 uur", "Betaald plan"], rows: [
        ["Live tv-zenders", "Ja", "Ja"],
        ["Films en series (VOD)", "Ja", "Ja"],
        ["Servers van hoge kwaliteit", "Ja", "Ja"],
        ["4K / Full HD / HD", "Ja", "Ja"],
        ["Tv-gids en catch-up", "Ja", "Ja"],
        ["Support", "Ja", "Ja, 24/7"],
        ["Looptijd", "24 uur", "3 maanden tot 2 jaar"],
        ["Prijs", "Gratis", `Vanaf ${p.cheapest}`],
      ] },

      { type: "h2", text: "Wat heb je nodig voordat de proef begint?" },
      { type: "ul", items: [
        "Een ondersteund apparaat: Smart TV, Firestick, Android-box, telefoon, tablet, computer of MAG-box.",
        "Een speler-app die je vooraf hebt geïnstalleerd, zodat je geen proeftijd verliest.",
        "Een stabiele internetverbinding: minstens 10 Mbps voor HD en 25 Mbps voor 4K.",
        "Een korte lijst van de soorten zenders en programma's die je het meest kijkt.",
      ] },
      { type: "links", title: "Bereid je apparaat voor", items: [["Installatiegidsen voor elk apparaat", "/setup"], ["Welke internetsnelheid heb je nodig?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Klaar om te testen? Je gratis proef aanvragen duurt 30 seconden", text: "24 uur volledige toegang op je eigen apparaat. Geen creditcard, geen contract." },

      { type: "h2", text: "Wat je test in 24 uur" },
      { type: "p", text: "Haal alles uit je proef. Deze tests vertellen je het meest over een IPTV-dienst:" },
      { type: "ol", items: [
        "Beeldstabiliteit: kijk minstens 30 minuten naar één zender.",
        "Zappen: wissel een paar keer van zender en kijk hoe snel elke zender start.",
        "Avondtest: kijk opnieuw tussen 19.00 en 23.00 uur, als de servers het drukst zijn.",
        "Live sport: kijk als het kan een livewedstrijd — dat is de zwaarste test.",
        "Beeldkwaliteit: vergelijk HD, Full HD en 4K op je scherm.",
        "Tv-gids: controleer of hij laat zien wat er nu en straks op is.",
        "Films en series: start een paar titels, pauzeer en spoel vooruit.",
        "Tweede apparaat: test op je telefoon of een andere tv.",
        "Support: stel een vraag en kijk hoe snel en goed ze antwoorden.",
      ] },
      { type: "links", title: "Volledige checklist", items: [["Een IPTV-dienst testen met een gratis proef (checklist)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Veilige of riskante proef? Zo zie je het verschil" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "De kenmerken van een veilige IPTV-proef — en die van een riskante proef." },
      { type: "p", text: "Een veilige proef vraagt nooit je kaartgegevens, geeft volledige toegang en komt van een aanbieder met duidelijk openbaar beleid en echte support. Wees voorzichtig als een proef om betaalgegevens vraagt, maar weinig zenders toont of je onder druk zet om meteen een lang plan te kopen." },

      { type: "h2", text: "Kun je een gratis IPTV-proef krijgen zonder creditcard?" },
      { type: "p", text: "Ja. Een betrouwbare IPTV-proef hoort nooit om je creditcard te vragen. Bij DenvayStream geef je alleen je naam, apparaat en app op. Omdat er geen betaalgegevens worden gevraagd, is er geen risico dat je na de proef iets moet betalen." },

      { type: "h2", text: "Wat gebeurt er als de proef afloopt?" },
      { type: "p", text: `Je proefgegevens stoppen gewoon met werken na 24 uur. Er wordt niets in rekening gebracht en er start geen abonnement automatisch. Beviel het, dan kun je een plan kiezen en vaak dezelfde app blijven gebruiken die je al hebt geïnstalleerd. De plannen van DenvayStream beginnen bij ${p.cheapest} voor 3 maanden, en het 2-jarenplan komt neer op ${p.monthly} per maand.` },
      { type: "links", title: "Na je proef", items: [["Bekijk alle plannen en prijzen", "/pricing"], ["Onze 7 dagen geld-terug-garantie", "/legal/refund-policy"]] },

      { type: "h2", text: "Tips om het meeste uit je gratis proef te halen" },
      { type: "ul", items: [
        "Start de proef als je tijd hebt om tv te kijken — bijvoorbeeld in het weekend of 's avonds.",
        "Gebruik een netwerkkabel voor tv's en tv-boxen als dat kan.",
        "Doe eerst een snelheidstest op het apparaat waarop je gaat kijken.",
        "Noteer eventuele problemen en vraag support om hulp — hoe ze helpen, hoort bij de test.",
        "Test op het apparaat dat je elke dag gebruikt, niet alleen op je telefoon.",
      ] },

      { type: "h2", text: "Problemen tijdens de proef en snelle oplossingen" },
      { type: "table", caption: "Veelvoorkomende problemen tijdens de gratis proef", head: ["Probleem", "Snelle oplossing"], rows: [
        ["Inloggen lukt niet", "Controleer server-URL, gebruikersnaam en wachtwoord — één verkeerde letter blokkeert het"],
        ["Zenders laden niet", "Wacht de eerste keer 1–2 minuten en herstart de app"],
        ["Het beeld bevriest", "Gebruik een kabel, herstart de router en schakel naar Full HD"],
        ["Tv-gids is leeg", "Ververs de tv-gids in de instellingen van de app"],
      ] },
      { type: "links", title: "Meer hulp", items: [["IPTV hapert: 9 oplossingen die werken", "/blog/fix-iptv-buffering"], ["Wat is een gratis proef? (woordenlijst)", "/glossary#trial"]] },

      { type: "tip", text: "Vraag nu je gratis DenvayStream-proef van 24 uur aan — geen betaalgegevens, volledige toegang en hulp bij installatie via WhatsApp." },
    ],
    faqs: [
      ["Is er een gratis IPTV-proef van 24 uur?", "Ja. DenvayStream biedt een gratis IPTV-proef van 24 uur met volledige toegang tot live tv, films en series. Er is geen creditcard nodig."],
      ["Hoe krijg ik een gratis IPTV-proef?", "Vul het korte formulier op de pagina van de gratis proef in met je naam, apparaat en app. WhatsApp opent met je aanvraag en we sturen je proefgegevens en een installatiegids, meestal binnen enkele minuten."],
      ["Heb ik een creditcard nodig voor de gratis IPTV-proef?", "Nee. De proef is volledig gratis en we vragen nooit om betaalgegevens, dus je kunt aan het einde niets in rekening gebracht krijgen."],
      ["Wat kan ik kijken tijdens de gratis proef?", "Dezelfde dienst als betalende klanten: live tv-zenders, films en series, de tv-gids en catch-up, in 4K, Full HD en HD waar beschikbaar."],
      ["Kan ik de gratis proef gebruiken op mijn Smart TV of Firestick?", "Ja. De proef werkt op Smart TV's, Firestick, Android-boxen, iPhone, iPad, Android-telefoons, Apple TV, MAG-boxen en computers."],
      ["Wat gebeurt er na de proef van 24 uur?", "De proefgegevens stoppen met werken en er wordt niets in rekening gebracht. Bevalt het, dan kun je een plan kiezen en blijven kijken."],
      ["Kan ik meer dan één gratis proef krijgen?", "Gratis proeven zijn beperkt tot één per klant, huishouden en apparaat, zodat we ze aan nieuwe klanten kunnen blijven aanbieden."],
    ],
  },
};

export default posts;
