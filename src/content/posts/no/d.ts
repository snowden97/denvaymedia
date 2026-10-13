import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("no");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "IPTV i 2026: den komplette guiden (slik fungerer det, enheter, priser og sikkerhet)",
    excerpt: "Alt du trenger å vite om IPTV i 2026: hvordan det fungerer, hva du trenger, enheter, internetthastighet, priser, hvordan du velger en god tjeneste og hvordan du kommer i gang.",
    heroAlt: "Komplett IPTV-guide 2026: en åpen bok.",
    takeaways: [
      "IPTV er TV som kommer via internett i stedet for via parabol eller kabel.",
      "Du trenger tre ting: en støttet enhet, en spillerapp og en stabil internettforbindelse (10 Mbit/s for HD, 25 Mbit/s for 4K).",
      "IPTV koster vanligvis mindre enn kabel-TV eller parabol og har ingen lange bindingstider.",
      "Velg en tjeneste med gratis prøveperiode, tydelige retningslinjer og ekte støtte — og test den først på enheten din.",
      "De fleste problemer, som bufring, skyldes wifi eller enheten og er lette å fikse.",
    ],
    body: [
      { type: "p", text: "IPTV (internettprotokoll-TV) er en måte å se TV på via internettforbindelsen din. I stedet for å ta imot kanaler via en parabol eller en kabel i veggen, reiser bildet som data fra en server til en app på TV-en, telefonen eller datamaskinen din. Denne guiden forklarer med enkle ord hvordan IPTV fungerer, hva du trenger, hva det koster og hvordan du velger og setter opp en tjeneste." },

      { type: "h2", text: "Hva er IPTV?" },
      { type: "p", text: "IPTV er TV som sendes med den samme teknologien som resten av internett. Enheten din laster ned en liten bit video, spiller den av og laster ned den neste biten, om og om igjen. Derfor kan du se TV på nesten alle skjermer med internett — hjemme eller på farten." },
      { type: "p", text: "Store operatører bruker IPTV-teknologi til sine egne TV-pakker, og mange uavhengige tjenester tilbyr IPTV-abonnementer som fungerer med populære spillerapper. Teknologien er den samme; det som er forskjellig, er tjenesten, innholdet og kvaliteten." },

      { type: "h2", text: "Hvordan fungerer IPTV?" },
      { type: "p", text: "Alle IPTV-tjenester følger den samme grunnleggende veien, fra kilden til skjermen din:" },
      { type: "ol", items: [
        "Koding: leverandøren gjør hver kanal eller video om til en digital strøm i ulike kvaliteter (for eksempel HD, Full HD og 4K).",
        "Servere: strømmene lagres på, eller går gjennom, kraftige servere som sender dem til seerne.",
        "Levering: når du velger en kanal, sender serveren strømmen til enheten din via internett.",
        "Avspilling: en app på enheten din dekoder strømmen og viser bilde, lyd og TV-guide.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Slik fungerer IPTV: fra koding til skjermen din i 4 trinn." },
      { type: "p", text: "Kvaliteten du ser, avhenger av hvert trinn: gode servere, en stabil internettforbindelse og en kapabel enhet. Hvis ett av dem er svakt, kan det bufre." },

      { type: "h2", text: "IPTV mot kabel-TV, parabol og strømmeapper" },
      { type: "table", caption: "Slik står IPTV seg mot andre måter å se TV på", head: ["", "IPTV", "Kabel-TV", "Parabol", "Strømmeapper"], rows: [
        ["Direkte-TV-kanaler", "Ja", "Ja", "Ja", "Vanligvis ikke"],
        ["Filmer og serier på forespørsel", "Ja", "Begrenset", "Begrenset", "Ja"],
        ["Krever installasjon", "Nei", "Ofte", "Ja (antenne)", "Nei"],
        ["Bindingstid", "Vanligvis ingen", "12–24 måneder", "12–24 måneder", "Månedlig"],
        ["Telefon, TV og PC", "Ja", "Begrenset", "Begrenset", "Ja"],
        ["Avhenger av internetthastighet", "Ja", "Nei", "Nei", "Ja"],
        ["Påvirkes av dårlig vær", "Nei", "Nei", "Ja", "Nei"],
      ] },
      { type: "p", text: "Kort sagt: IPTV gir deg direkte-TV som kabel-TV, fleksibiliteten til strømmeapper, og ingen antenne eller tekniker. Det viktigste det trenger, er en god internettforbindelse." },
      { type: "links", title: "Les mer", items: [["IPTV, kabel-TV eller parabol: hele sammenligningen", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "Hva kan du se med IPTV?" },
      { type: "h3", text: "Direkte-TV" },
      { type: "p", text: "Kanaler du ser mens de sendes — nyheter, sport, underholdning, barn og internasjonale kanaler — med en TV-guide som viser hva som går nå og senere." },
      { type: "h3", text: "Video på forespørsel (VOD)" },
      { type: "p", text: "Et bibliotek med filmer og serier som du kan starte, sette på pause og se på nytt når du vil." },
      { type: "h3", text: "Catch-up (se i etterkant)" },
      { type: "p", text: "Programmer fra de siste dagene, tilgjengelige for å se senere. Funksjonen avhenger av kanalen og appen din." },

      { type: "h2", text: "Hva trenger du for å se IPTV?" },
      { type: "ul", items: [
        "En støttet enhet: smart-TV, Amazon Firestick, Android TV-boks, telefon, nettbrett, datamaskin eller MAG-boks.",
        "En spillerapp, som TiviMate, IPTV Smarters, IBO Player eller VLC. Appen inneholder ingen kanaler.",
        "Et IPTV-abonnement, som gir deg påloggingsopplysninger (brukernavn, passord og server-URL) eller en M3U-lenke.",
        "En stabil internettforbindelse — helst med nettverkskabel for TV-er og TV-bokser.",
      ] },

      { type: "h2", text: "Hvilken internetthastighet trenger du?" },
      { type: "table", caption: "Anbefalt internetthastighet per strøm", head: ["Bildekvalitet", "Minste hastighet", "Anbefalt"], rows: [
        ["SD", "3 Mbit/s", "5 Mbit/s"],
        ["HD (720p)", "7 Mbit/s", "10 Mbit/s"],
        ["Full HD (1080p)", "10 Mbit/s", "15 Mbit/s"],
        ["4K Ultra HD", "20 Mbit/s", "25 Mbit/s eller mer"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Anbefalt internetthastighet for én skjerm, etter bildekvalitet." },
      { type: "p", text: "Tallene gjelder én skjerm. Hvis flere ser samtidig, legg sammen hastighetene. Test alltid hastigheten på enheten der du ser, ikke på telefonen ved siden av ruteren." },
      { type: "links", title: "Les mer", items: [["Hvilken internetthastighet trenger du for IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Hvilke enheter fungerer med IPTV?" },
      { type: "p", text: "Nesten alle moderne skjermer kan spille av IPTV. Det beste valget avhenger av hva du allerede har:" },
      { type: "figure", name: "devices", caption: "IPTV fungerer på smart-TV, strømmepinner, TV-bokser, telefoner, nettbrett og datamaskiner." },
      { type: "ul", items: [
        "Amazon Firestick: billig, liten og veldig populær. Et utmerket valg for de fleste.",
        "Smart-TV (Samsung, LG): ingen ekstra enhet, men eldre modeller har færre apper.",
        "Android TV-bokser: kraftige og fleksible, med flere apper å velge mellom.",
        "iPhone, iPad og Apple TV: smidige og enkle, med apper fra App Store.",
        "MAG-bokser: laget bare for IPTV og veldig enkle med fjernkontrollen.",
        "Windows- og Mac-datamaskiner: enkle med gratisapper som VLC.",
      ] },
      { type: "links", title: "Installasjonsguider trinn for trinn", items: [
        ["Alle installasjonsguider per enhet", "/setup"],
        ["IPTV på Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV på Samsung og LG smart-TV", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV på Android TV, boks og telefon", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV på iPhone, iPad og Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV på MAG-boks", "/blog/iptv-on-mag-box"],
        ["IPTV på Windows og Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "Hva koster IPTV?" },
      { type: "p", text: `Prisen på IPTV avhenger av tjenesten og lengden på planen. Lengre planer koster nesten alltid mindre per måned. DenvayStreams planer starter for eksempel på ${p.cheapest} for 3 måneder, og 2-årsplanen blir ${p.monthly} per måned — med alle funksjoner i hver plan.` },
      { type: "p", text: "Sammenlignet med kabel-TV eller parabol har IPTV vanligvis ingen installasjonskostnader, intet leid utstyr og ingen lange bindingstider. Vær forsiktig med priser som virker for gode til å være sanne: svært billige tjenester har ofte ustabile servere og ingen ekte støtte." },
      { type: "links", title: "Se priser", items: [["DenvayStreams planer og priser", "/pricing"]] },
      { type: "cta", title: "Fortsatt usikker? Prøv IPTV gratis i 24 timer", text: "Sjekk bildekvalitet, kanaler og stabilitet på din egen enhet og ditt eget internett — før du betaler noe." },

      { type: "h2", text: "Slik velger du en god IPTV-tjeneste" },
      { type: "p", text: "Ikke alle IPTV-tjenester er like. Bruk denne sjekklisten før du betaler:" },
      { type: "ol", items: [
        "Gratis prøveperiode: en god tjeneste lar deg teste den på din egen enhet før du kjøper.",
        "Stabile servere: se om kvelden i rushtiden og under en direktesending for å teste stabiliteten.",
        "Bildekvalitet: sjekk HD, Full HD og 4K på skjermen din.",
        "Ekte støtte: still et spørsmål og se hvor raskt og godt de svarer.",
        "Tydelige retningslinjer: se etter vilkår for bruk, personvernerklæring, refusjonspolicy og DMCA-policy.",
        "Rettferdige regler: ingen lang bindingstid, ingen automatisk fornyelse du ikke har bedt om og en tydelig frist for refusjon.",
        "Støttede enheter: sjekk at det fungerer med enhetene og appene dine.",
      ] },
      { type: "links", title: "Les mer", items: [["Slik tester du en IPTV-tjeneste med en gratis prøveperiode", "/blog/how-to-test-iptv-free-trial"], ["De beste IPTV-appene", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "Er IPTV lovlig og trygt?" },
      { type: "p", text: "IPTV-teknologien er lovlig — det er rett og slett en måte å sende video over internett på. Om en bestemt tjeneste er lovlig, avhenger av om den har riktige lisenser for innholdet sitt, og av lovene i landet ditt. For å være på den sikre siden, velg en leverandør med tydelige offentlige retningslinjer, betal med trygge metoder og del aldri de fullstendige kortopplysningene dine i chatten." },
      { type: "links", title: "Les mer", items: [["Er IPTV lovlig? Dette bør du vite", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Vanlige IPTV-problemer og raske løsninger" },
      { type: "table", caption: "De vanligste IPTV-problemene og hvordan du fikser dem", head: ["Problem", "Sannsynlig årsak", "Rask løsning"], rows: [
        ["Bufring eller frysing", "Svakt wifi eller tregt internett", "Bruk en nettverkskabel og start ruteren på nytt"],
        ["Kanalene lastes ikke", "Feil påloggingsopplysninger", "Sjekk server-URL, brukernavn og passord"],
        ["TV-guiden er tom", "Guiden er ikke lastet inn ennå", "Oppdater TV-guiden i appens innstillinger"],
        ["Appen er treg", "Fullt minne eller full buffer", "Tøm bufferen og start enheten på nytt"],
        ["Problemer bare om kvelden", "Overbelastet internettleverandør", "Bytt til Full HD i rushtiden"],
      ] },
      { type: "links", title: "Les mer", items: [["IPTV bufrer: 9 løsninger som virker", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Kom i gang med IPTV i 5 trinn" },
      { type: "ol", items: [
        "Sjekk internetthastigheten på enheten der du skal se.",
        "Velg enheten din og installer en spillerapp.",
        "Bestill en gratis prøveperiode for å teste tjenesten hjemme.",
        "Hvis du liker den, velg en plan — lengre planer koster mindre per måned.",
        "Logg inn i appen med opplysningene du får, og begynn å se.",
      ] },
      { type: "figure", name: "start-steps", caption: "Fra null til TV-titting: de 5 trinnene for å komme i gang med IPTV." },

      { type: "h2", text: "Fremtiden til IPTV" },
      { type: "p", text: "Stadig flere ser TV på flere skjermer, og internettforbindelsene blir stadig raskere. Derfor fortsetter IPTV å vokse. De neste årene kommer det mer 4K-innhold, bedre TV-guider, smartere apper og raskere kanalbytte. Bedre internett hjemme, som fiber og raskt wifi, betyr også færre kvalitetsproblemer." },

      { type: "h2", text: "IPTV-ord det er lurt å kunne" },
      { type: "p", text: "Du ser ofte ord som M3U, EPG, MAC-adresse, server-URL, VOD og catch-up. Ordlisten vår forklarer hvert ord med én eller to enkle setninger." },
      { type: "links", title: "Lær ordene", items: [["IPTV-ordliste: IPTV-ord forklart på en enkel måte", "/glossary"], ["Hva er IPTV? Guide for nybegynnere", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Vil du se hvordan IPTV fungerer på din egen TV? Bestill en gratis prøveperiode på 24 timer hos DenvayStream — ingen betalingsopplysninger trengs." },
    ],
    faqs: [
      ["Hva er IPTV med enkle ord?", "IPTV er TV som kommer via internettforbindelsen din i stedet for via parabol eller kabel. Du ser det med en app på TV-en, telefonen, nettbrettet eller datamaskinen."],
      ["Hvordan fungerer IPTV?", "En leverandør gjør kanaler og videoer om til digitale strømmer og sender dem fra serverne sine via internett. En app på enheten din tar imot strømmen og viser bildet."],
      ["Hva trenger jeg for å se IPTV?", "En støttet enhet, en spillerapp, et IPTV-abonnement og en stabil internettforbindelse — minst 10 Mbit/s for HD og 25 Mbit/s for 4K."],
      ["Er IPTV bedre enn kabel-TV?", "For de fleste husstander med godt internett er IPTV billigere, har ingen bindingstid og fungerer på flere enheter. Kabel-TV kan være mer stabilt hvis internettet ditt er tregt."],
      ["Kan jeg se IPTV på mer enn én enhet?", "Ja, du kan installere appen på flere enheter. Hvor mange som kan se samtidig, avhenger av planen din — vanligvis er én tilkobling én enhet om gangen."],
      ["Hva koster IPTV per måned?", `Det avhenger av tjenesten og lengden. Hos DenvayStream starter planene på ${p.cheapest} for 3 måneder, og 2-årsplanen koster ${p.monthly} per måned.`],
      ["Trenger jeg VPN for IPTV?", "Nei, du trenger ikke VPN. Noen bruker det hvis internettleverandøren bremser strømming i rushtiden."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Gratis IPTV-prøveperiode 24 timer: slik får du den og hva du skal teste (2026)",
    excerpt: "Få en gratis IPTV-prøveperiode på 24 timer uten kredittkort. Hva som er inkludert, hvordan du får den på noen minutter, hva du skal teste og hvordan du kjenner igjen en trygg prøveperiode.",
    heroAlt: "Gratis IPTV-prøveperiode på 24 timer: en TV med direkte-TV i 4K, et merke gratis prøve 24 t og ikke noe kredittkort trengs.",
    takeaways: [
      "En gratis IPTV-prøveperiode på 24 timer lar deg teste hele tjenesten på din egen enhet før du betaler.",
      "En god prøveperiode krever ikke kredittkort, gir full tilgang og er klar på noen minutter.",
      "Test om kvelden og under direktesendt sport — da er serverne mest belastet.",
      "Når prøveperioden er over, blir ingenting belastet. Du velger bare en plan hvis du liker tjenesten.",
    ],
    body: [
      { type: "p", text: "En gratis IPTV-prøveperiode er en kort, kostnadsfri test av en IPTV-tjeneste. De fleste varer i 24 timer. I den tiden kan du se direkte-TV, filmer og serier på TV-en eller telefonen, slik at du kan sjekke kvaliteten før du kjøper et abonnement. Denne guiden forklarer hvordan en prøveperiode på 24 timer fungerer, hvordan du får den, hva du skal teste og hvordan du skiller en trygg prøveperiode fra en risikabel." },

      { type: "h2", text: "Hva er en gratis IPTV-prøveperiode på 24 timer?" },
      { type: "p", text: "En gratis IPTV-prøveperiode på 24 timer er midlertidig, kostnadsfri tilgang til en IPTV-tjeneste. Leverandøren sender deg prøveopplysninger — vanligvis brukernavn, passord og server-URL — som fungerer i 24 timer. Du legger dem inn i en app på enheten din og bruker tjenesten akkurat som en betalende kunde." },
      { type: "p", text: "Målet er enkelt: å se den virkelige bildekvaliteten, stabiliteten og lastetiden for kanalene på din egen enhet og forbindelse — ikke i en demovideo." },

      { type: "h2", text: "Derfor er 24 timer den perfekte lengden" },
      { type: "ul", items: [
        "Den dekker et helt døgn, inkludert kveldens rushtid når serverne er mest belastet.",
        "Den er lang nok til å teste direkte-TV, filmer, TV-guiden og flere enheter.",
        "Den er kort nok til at du bestemmer deg raskt, uten å glemme å teste.",
      ] },

      { type: "h2", text: "Slik fungerer den gratis prøveperioden, trinn for trinn" },
      { type: "figure", name: "trial-timeline", caption: "De 4 trinnene i en gratis IPTV-prøveperiode på 24 timer — fra forespørsel til beslutning." },
      { type: "ol", items: [
        "Forespørsel: fyll ut et kort skjema med navn, enhet og app. Hos DenvayStream åpnes WhatsApp med forespørselen klar til å sendes.",
        "Påloggingsopplysninger: teamet sender deg prøveopplysningene og en installasjonsguide for enheten din, vanligvis innen noen minutter.",
        "Test: installer appen, logg inn og bruk tjenesten i 24 timer.",
        "Beslutning: hvis du liker det, velg en plan. Hvis ikke, slutter du bare — ingenting blir belastet.",
      ] },
      { type: "links", title: "Få prøveperioden din", items: [["Bestill en gratis prøveperiode på 24 timer hos DenvayStream", "/free-trial"]] },

      { type: "h2", text: "Hva er inkludert i prøveperioden?" },
      { type: "p", text: "En god IPTV-prøveperiode er ingen begrenset demo. Den skal gi deg den samme tjenesten som betalende kunder får:" },
      { type: "table", caption: "Gratis prøveperiode mot betalt plan", head: ["Funksjon", "Gratis prøveperiode på 24 timer", "Betalt plan"], rows: [
        ["Direkte-TV-kanaler", "Ja", "Ja"],
        ["Filmer og serier (VOD)", "Ja", "Ja"],
        ["Servere av høy kvalitet", "Ja", "Ja"],
        ["4K / Full HD / HD", "Ja", "Ja"],
        ["TV-guide og catch-up", "Ja", "Ja"],
        ["Støtte", "Ja", "Ja, døgnet rundt"],
        ["Lengde", "24 timer", "3 måneder til 2 år"],
        ["Pris", "Gratis", `Fra ${p.cheapest}`],
      ] },

      { type: "h2", text: "Hva trenger du før prøveperioden starter?" },
      { type: "ul", items: [
        "En støttet enhet: smart-TV, Firestick, Android-boks, telefon, nettbrett, datamaskin eller MAG-boks.",
        "En spillerapp som er installert på forhånd, så du ikke mister prøvetid.",
        "En stabil internettforbindelse: minst 10 Mbit/s for HD og 25 Mbit/s for 4K.",
        "En kort liste over typene kanaler og programmer du ser mest på.",
      ] },
      { type: "links", title: "Gjør klar enheten din", items: [["Installasjonsguider for alle enheter", "/setup"], ["Hvilken internetthastighet trenger du?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Klar til å teste? Det tar 30 sekunder å bestille den gratis prøveperioden", text: "Full tilgang i 24 timer på din egen enhet. Ikke noe kredittkort, ingen bindingstid." },

      { type: "h2", text: "Hva du skal teste på 24 timer" },
      { type: "p", text: "Bruk prøveperioden godt. Dette er testene som sier mest om en IPTV-tjeneste:" },
      { type: "ol", items: [
        "Bildestabilitet: se én kanal i minst 30 minutter.",
        "Kanalbytte: bytt kanal flere ganger og se hvor raskt hver kanal starter.",
        "Kveldstest: se igjen mellom kl. 19 og 23, når serverne er mest belastet.",
        "Direktesendt sport: se en direktesendt kamp hvis du kan — det er den tøffeste testen.",
        "Bildekvalitet: sammenlign HD, Full HD og 4K på skjermen din.",
        "TV-guide: sjekk at den viser hva som går nå og senere.",
        "Filmer og serier: start noen titler, sett på pause og spol fremover.",
        "Annen enhet: test på telefonen eller en annen TV.",
        "Støtte: still et spørsmål og se hvor raskt og godt de svarer.",
      ] },
      { type: "links", title: "Hele sjekklisten", items: [["Slik tester du en IPTV-tjeneste med en gratis prøveperiode (sjekkliste)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Trygg eller risikabel prøveperiode? Slik ser du forskjellen" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "Tegnene på en trygg IPTV-prøveperiode — og tegnene på en risikabel." },
      { type: "p", text: "En trygg prøveperiode ber aldri om kortopplysningene dine, gir full tilgang og kommer fra en leverandør med tydelige offentlige retningslinjer og ekte støtte. Vær forsiktig hvis en prøveperiode ber om betalingsopplysninger, viser få kanaler eller presser deg til å kjøpe en lang plan med en gang." },

      { type: "h2", text: "Kan man få en gratis IPTV-prøveperiode uten kredittkort?" },
      { type: "p", text: "Ja. En pålitelig IPTV-prøveperiode skal aldri be om kredittkortet ditt. Hos DenvayStream oppgir du bare navn, enhet og app. Siden det ikke bes om betalingsopplysninger, er det ingen risiko for å bli belastet når prøveperioden er over." },

      { type: "h2", text: "Hva skjer når prøveperioden er over?" },
      { type: "p", text: `Prøveopplysningene dine slutter rett og slett å virke etter 24 timer. Ingenting blir belastet, og ingen abonnement starter automatisk. Hvis du likte det, kan du velge en plan og ofte fortsette å bruke den samme appen du allerede har installert. DenvayStreams planer starter på ${p.cheapest} for 3 måneder, og 2-årsplanen blir ${p.monthly} per måned.` },
      { type: "links", title: "Etter prøveperioden", items: [["Se alle planer og priser", "/pricing"], ["Vår 7 dagers pengene-tilbake-garanti", "/legal/refund-policy"]] },

      { type: "h2", text: "Tips for å få mest mulig ut av den gratis prøveperioden" },
      { type: "ul", items: [
        "Start prøveperioden når du har tid til å se TV — for eksempel i helgen eller om kvelden.",
        "Bruk en nettverkskabel for TV-er og TV-bokser hvis du kan.",
        "Ta en hastighetstest først på enheten der du skal se.",
        "Noter alle problemer og spør støtten — hvordan de hjelper, er en del av testen.",
        "Test på enheten du bruker hver dag, ikke bare på telefonen.",
      ] },

      { type: "h2", text: "Problemer i prøveperioden og raske løsninger" },
      { type: "table", caption: "Vanlige problemer i den gratis prøveperioden", head: ["Problem", "Rask løsning"], rows: [
        ["Påloggingen fungerer ikke", "Sjekk server-URL, brukernavn og passord — én feil bokstav blokkerer den"],
        ["Kanalene lastes ikke", "Vent 1–2 minutter første gang og start appen på nytt"],
        ["Bildet fryser", "Bruk kabel, start ruteren på nytt og bytt til Full HD"],
        ["TV-guiden er tom", "Oppdater TV-guiden i appens innstillinger"],
      ] },
      { type: "links", title: "Mer hjelp", items: [["IPTV bufrer: 9 løsninger som virker", "/blog/fix-iptv-buffering"], ["Hva er en gratis prøveperiode? (ordliste)", "/glossary#trial"]] },

      { type: "tip", text: "Bestill din gratis prøveperiode på 24 timer hos DenvayStream nå — ingen betalingsopplysninger, full tilgang og hjelp med installasjonen på WhatsApp." },
    ],
    faqs: [
      ["Finnes det en gratis IPTV-prøveperiode på 24 timer?", "Ja. DenvayStream tilbyr en gratis IPTV-prøveperiode på 24 timer med full tilgang til direkte-TV, filmer og serier. Ikke noe kredittkort trengs."],
      ["Hvordan får jeg en gratis IPTV-prøveperiode?", "Fyll ut det korte skjemaet på siden for gratis prøveperiode med navn, enhet og app. WhatsApp åpnes med forespørselen din, og vi sender deg prøveopplysningene og en installasjonsguide, vanligvis innen noen minutter."],
      ["Trenger jeg kredittkort for den gratis IPTV-prøveperioden?", "Nei. Prøveperioden er helt gratis, og vi ber aldri om betalingsopplysninger, så du kan ikke bli belastet når den er over."],
      ["Hva kan jeg se i den gratis prøveperioden?", "Den samme tjenesten som betalende kunder: direkte-TV-kanaler, filmer og serier, TV-guiden og catch-up, i 4K, Full HD og HD der det finnes."],
      ["Kan jeg bruke den gratis prøveperioden på smart-TV-en eller Firesticken min?", "Ja. Prøveperioden fungerer på smart-TV, Firestick, Android-bokser, iPhone, iPad, Android-telefoner, Apple TV, MAG-bokser og datamaskiner."],
      ["Hva skjer etter prøveperioden på 24 timer?", "Prøveopplysningene slutter å virke, og ingenting blir belastet. Hvis du liker tjenesten, kan du velge en plan og fortsette å se."],
      ["Kan jeg få mer enn én gratis prøveperiode?", "Gratis prøveperioder er begrenset til én per kunde, husstand og enhet, slik at vi kan fortsette å tilby dem til nye kunder."],
    ],
  },
};

export default posts;
