import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("da");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "IPTV i 2026: den komplette guide (sådan virker det, enheder, priser og sikkerhed)",
    excerpt: "Alt hvad du skal vide om IPTV i 2026: hvordan det virker, hvad du skal bruge, enheder, internethastighed, priser, hvordan du vælger en god tjeneste, og hvordan du kommer i gang.",
    heroAlt: "Komplet IPTV-guide 2026: en åben bog.",
    takeaways: [
      "IPTV er tv, der kommer via internettet i stedet for via parabol eller kabel.",
      "Du skal bruge tre ting: en understøttet enhed, en afspillerapp og en stabil internetforbindelse (10 Mbit/s til HD, 25 Mbit/s til 4K).",
      "IPTV koster som regel mindre end kabel-tv eller parabol og har ingen lange bindinger.",
      "Vælg en tjeneste med gratis prøveperiode, klare politikker og ægte support — og test den først på din enhed.",
      "De fleste problemer, som buffering, skyldes wifi eller enheden og er nemme at løse.",
    ],
    body: [
      { type: "p", text: "IPTV (internetprotokol-tv) er en måde at se tv på via din internetforbindelse. I stedet for at modtage kanaler via en parabol eller et kabel i væggen rejser billedet som data fra en server til en app på dit tv, din telefon eller din computer. Denne guide forklarer med enkle ord, hvordan IPTV virker, hvad du skal bruge, hvad det koster, og hvordan du vælger og opsætter en tjeneste." },

      { type: "h2", text: "Hvad er IPTV?" },
      { type: "p", text: "IPTV er tv, der sendes med den samme teknologi som resten af internettet. Din enhed downloader et lille stykke video, afspiller det og downloader det næste stykke, igen og igen. Derfor kan du se tv på næsten enhver skærm med internet — derhjemme eller på farten." },
      { type: "p", text: "Store operatører bruger IPTV-teknologi til deres egne tv-pakker, og mange uafhængige tjenester tilbyder IPTV-abonnementer, der virker med populære afspillerapps. Teknologien er den samme; det, der er forskelligt, er tjenesten, indholdet og kvaliteten." },

      { type: "h2", text: "Hvordan virker IPTV?" },
      { type: "p", text: "Alle IPTV-tjenester følger den samme grundlæggende vej, fra kilden til din skærm:" },
      { type: "ol", items: [
        "Kodning: udbyderen laver hver kanal eller video om til en digital stream i forskellige kvaliteter (for eksempel HD, Full HD og 4K).",
        "Servere: streamene gemmes på, eller passerer gennem, kraftige servere, der sender dem til seerne.",
        "Levering: når du vælger en kanal, sender serveren streamen til din enhed via internettet.",
        "Afspilning: en app på din enhed afkoder streamen og viser billede, lyd og tv-guide.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Sådan virker IPTV: fra kodning til din skærm i 4 trin." },
      { type: "p", text: "Den kvalitet, du ser, afhænger af hvert trin: gode servere, en stabil internetforbindelse og en kapabel enhed. Hvis et af dem er svagt, kan det buffere." },

      { type: "h2", text: "IPTV mod kabel-tv, parabol og streamingapps" },
      { type: "table", caption: "Sådan står IPTV sig mod andre måder at se tv på", head: ["", "IPTV", "Kabel-tv", "Parabol", "Streamingapps"], rows: [
        ["Live-tv-kanaler", "Ja", "Ja", "Ja", "Som regel ikke"],
        ["Film og serier on demand", "Ja", "Begrænset", "Begrænset", "Ja"],
        ["Kræver installation", "Nej", "Ofte", "Ja (antenne)", "Nej"],
        ["Binding", "Som regel ingen", "12–24 måneder", "12–24 måneder", "Månedlig"],
        ["Telefon, tv og pc", "Ja", "Begrænset", "Begrænset", "Ja"],
        ["Afhænger af internethastighed", "Ja", "Nej", "Nej", "Ja"],
        ["Påvirkes af dårligt vejr", "Nej", "Nej", "Ja", "Nej"],
      ] },
      { type: "p", text: "Kort sagt: IPTV giver dig live-tv som kabel-tv, fleksibiliteten fra streamingapps, og ingen antenne eller tekniker. Det vigtigste, det kræver, er en god internetforbindelse." },
      { type: "links", title: "Læs mere", items: [["IPTV, kabel-tv eller parabol: hele sammenligningen", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "Hvad kan du se med IPTV?" },
      { type: "h3", text: "Live-tv" },
      { type: "p", text: "Kanaler, du ser, mens de sendes — nyheder, sport, underholdning, børn og internationale kanaler — med en tv-guide, der viser, hvad der sendes nu og senere." },
      { type: "h3", text: "Video on demand (VOD)" },
      { type: "p", text: "Et bibliotek med film og serier, som du kan starte, sætte på pause og se igen, når du vil." },
      { type: "h3", text: "Catch-up (se bagefter)" },
      { type: "p", text: "Programmer fra de seneste dage, som du kan se senere. Funktionen afhænger af kanalen og din app." },

      { type: "h2", text: "Hvad skal du bruge for at se IPTV?" },
      { type: "ul", items: [
        "En understøttet enhed: smart-tv, Amazon Firestick, Android TV-boks, telefon, tablet, computer eller MAG-boks.",
        "En afspillerapp, som TiviMate, IPTV Smarters, IBO Player eller VLC. Appen indeholder ingen kanaler.",
        "Et IPTV-abonnement, der giver dig loginoplysninger (brugernavn, adgangskode og server-URL) eller et M3U-link.",
        "En stabil internetforbindelse — helst med netværkskabel til tv og tv-bokse.",
      ] },

      { type: "h2", text: "Hvilken internethastighed skal du bruge?" },
      { type: "table", caption: "Anbefalet internethastighed pr. stream", head: ["Billedkvalitet", "Minimumshastighed", "Anbefalet"], rows: [
        ["SD", "3 Mbit/s", "5 Mbit/s"],
        ["HD (720p)", "7 Mbit/s", "10 Mbit/s"],
        ["Full HD (1080p)", "10 Mbit/s", "15 Mbit/s"],
        ["4K Ultra HD", "20 Mbit/s", "25 Mbit/s eller mere"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Anbefalet internethastighed til én skærm efter billedkvalitet." },
      { type: "p", text: "Tallene gælder for én skærm. Hvis flere ser på samme tid, så læg hastighederne sammen. Test altid hastigheden på den enhed, du ser på, ikke på telefonen ved siden af routeren." },
      { type: "links", title: "Læs mere", items: [["Hvilken internethastighed skal du bruge til IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Hvilke enheder virker med IPTV?" },
      { type: "p", text: "Næsten alle moderne skærme kan afspille IPTV. Det bedste valg afhænger af, hvad du allerede har:" },
      { type: "figure", name: "devices", caption: "IPTV virker på smart-tv, streamingsticks, tv-bokse, telefoner, tablets og computere." },
      { type: "ul", items: [
        "Amazon Firestick: billig, lille og meget populær. Et fremragende valg for de fleste.",
        "Smart-tv (Samsung, LG): ingen ekstra enhed, men ældre modeller har færre apps.",
        "Android TV-bokse: kraftige og fleksible, med flere apps at vælge imellem.",
        "iPhone, iPad og Apple TV: glatte og enkle, med apps fra App Store.",
        "MAG-bokse: kun lavet til IPTV og meget nemme med fjernbetjeningen.",
        "Windows- og Mac-computere: nemme med gratis apps som VLC.",
      ] },
      { type: "links", title: "Installationsguider trin for trin", items: [
        ["Alle installationsguider pr. enhed", "/setup"],
        ["IPTV på Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV på Samsung og LG smart-tv", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV på Android TV, boks og telefon", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV på iPhone, iPad og Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV på MAG-boks", "/blog/iptv-on-mag-box"],
        ["IPTV på Windows og Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "Hvad koster IPTV?" },
      { type: "p", text: `Prisen på IPTV afhænger af tjenesten og planens længde. Længere planer koster næsten altid mindre pr. måned. DenvayStreams planer starter for eksempel ved ${p.cheapest} for 3 måneder, og 2-årsplanen bliver ${p.monthly} pr. måned — med alle funktioner i hver plan.` },
      { type: "p", text: "Sammenlignet med kabel-tv eller parabol har IPTV som regel ingen installationsomkostninger, intet lejet udstyr og ingen lange bindinger. Vær forsigtig med priser, der virker for gode til at være sande: meget billige tjenester har ofte ustabile servere og ingen ægte support." },
      { type: "links", title: "Se priser", items: [["DenvayStreams planer og priser", "/pricing"]] },
      { type: "cta", title: "Stadig i tvivl? Prøv IPTV gratis i 24 timer", text: "Tjek billedkvalitet, kanaler og stabilitet på din egen enhed og dit eget internet — før du betaler noget." },

      { type: "h2", text: "Sådan vælger du en god IPTV-tjeneste" },
      { type: "p", text: "Ikke alle IPTV-tjenester er ens. Brug denne tjekliste, før du betaler:" },
      { type: "ol", items: [
        "Gratis prøveperiode: en god tjeneste lader dig teste den på din egen enhed, før du køber.",
        "Stabile servere: se om aftenen i spidsbelastningen og under en livetransmission for at teste stabiliteten.",
        "Billedkvalitet: tjek HD, Full HD og 4K på din skærm.",
        "Ægte support: stil et spørgsmål og læg mærke til, hvor hurtigt og godt de svarer.",
        "Klare politikker: se efter servicevilkår, privatlivspolitik, refusionspolitik og DMCA-politik.",
        "Fair regler: ingen lang binding, ingen automatisk fornyelse, du ikke har bedt om, og en klar frist for refusion.",
        "Understøttede enheder: tjek, at det virker med dine enheder og apps.",
      ] },
      { type: "links", title: "Læs mere", items: [["Sådan tester du en IPTV-tjeneste med en gratis prøveperiode", "/blog/how-to-test-iptv-free-trial"], ["De bedste IPTV-apps", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "Er IPTV lovligt og sikkert?" },
      { type: "p", text: "IPTV-teknologien er lovlig — det er simpelthen en måde at sende video over internettet på. Om en bestemt tjeneste er lovlig, afhænger af, om den har de rette licenser til sit indhold, og af lovene i dit land. For at være på den sikre side skal du vælge en udbyder med klare offentlige politikker, betale med sikre metoder og aldrig dele dine fulde kortoplysninger i chatten." },
      { type: "links", title: "Læs mere", items: [["Er IPTV lovligt? Det bør du vide", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Almindelige IPTV-problemer og hurtige løsninger" },
      { type: "table", caption: "De mest almindelige IPTV-problemer, og hvordan du løser dem", head: ["Problem", "Sandsynlig årsag", "Hurtig løsning"], rows: [
        ["Buffering eller frysning", "Svagt wifi eller langsomt internet", "Brug et netværkskabel og genstart routeren"],
        ["Kanalerne indlæses ikke", "Forkerte loginoplysninger", "Tjek server-URL, brugernavn og adgangskode"],
        ["Tv-guiden er tom", "Guiden er ikke indlæst endnu", "Opdater tv-guiden i appens indstillinger"],
        ["Appen er langsom", "Fuld hukommelse eller cache", "Ryd cachen og genstart enheden"],
        ["Problemer kun om aftenen", "Overbelastet internetudbyder", "Skift til Full HD i spidsbelastningen"],
      ] },
      { type: "links", title: "Læs mere", items: [["IPTV buffer: 9 løsninger, der virker", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Kom i gang med IPTV i 5 trin" },
      { type: "ol", items: [
        "Tjek din internethastighed på den enhed, du skal se på.",
        "Vælg din enhed og installer en afspillerapp.",
        "Bestil en gratis prøveperiode for at teste tjenesten derhjemme.",
        "Hvis du kan lide den, så vælg en plan — længere planer koster mindre pr. måned.",
        "Log ind i appen med de oplysninger, du får, og begynd at se.",
      ] },
      { type: "figure", name: "start-steps", caption: "Fra nul til tv: de 5 trin til at komme i gang med IPTV." },

      { type: "h2", text: "Fremtiden for IPTV" },
      { type: "p", text: "Flere og flere ser tv på flere skærme, og internetforbindelserne bliver hurtigere og hurtigere. Derfor bliver IPTV ved med at vokse. De kommende år kommer der mere 4K-indhold, bedre tv-guider, smartere apps og hurtigere kanalskift. Bedre internet derhjemme, som fiber og hurtigt wifi, betyder også færre kvalitetsproblemer." },

      { type: "h2", text: "IPTV-ord, du bør kende" },
      { type: "p", text: "Du ser ofte ord som M3U, EPG, MAC-adresse, server-URL, VOD og catch-up. Vores ordliste forklarer hvert ord med en eller to enkle sætninger." },
      { type: "links", title: "Lær ordene", items: [["IPTV-ordliste: IPTV-ord forklaret på en enkel måde", "/glossary"], ["Hvad er IPTV? Guide til begyndere", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Vil du se, hvordan IPTV virker på dit eget tv? Bestil en gratis prøveperiode på 24 timer hos DenvayStream — ingen betalingsoplysninger nødvendige." },
    ],
    faqs: [
      ["Hvad er IPTV med enkle ord?", "IPTV er tv, der kommer via din internetforbindelse i stedet for via parabol eller kabel. Du ser det med en app på dit tv, din telefon, din tablet eller din computer."],
      ["Hvordan virker IPTV?", "En udbyder laver kanaler og videoer om til digitale streams og sender dem fra sine servere via internettet. En app på din enhed modtager streamen og viser billedet."],
      ["Hvad skal jeg bruge for at se IPTV?", "En understøttet enhed, en afspillerapp, et IPTV-abonnement og en stabil internetforbindelse — mindst 10 Mbit/s til HD og 25 Mbit/s til 4K."],
      ["Er IPTV bedre end kabel-tv?", "For de fleste husstande med godt internet er IPTV billigere, har ingen binding og virker på flere enheder. Kabel-tv kan være mere stabilt, hvis dit internet er langsomt."],
      ["Kan jeg se IPTV på mere end én enhed?", "Ja, du kan installere appen på flere enheder. Hvor mange der kan se på samme tid, afhænger af din plan — som regel er én forbindelse én enhed ad gangen."],
      ["Hvad koster IPTV pr. måned?", `Det afhænger af tjenesten og længden. Hos DenvayStream starter planerne ved ${p.cheapest} for 3 måneder, og 2-årsplanen koster ${p.monthly} pr. måned.`],
      ["Har jeg brug for VPN til IPTV?", "Nej, du behøver ikke VPN. Nogle bruger det, hvis deres internetudbyder bremser streaming i spidsbelastningen."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Gratis IPTV-prøveperiode 24 timer: sådan får du den, og hvad du skal teste (2026)",
    excerpt: "Få en gratis IPTV-prøveperiode på 24 timer uden kreditkort. Hvad der er inkluderet, hvordan du får den på få minutter, hvad du skal teste, og hvordan du genkender en sikker prøveperiode.",
    heroAlt: "Gratis IPTV-prøveperiode på 24 timer: et tv med live-tv i 4K, et mærke med gratis prøve 24 t og intet kreditkort nødvendigt.",
    takeaways: [
      "En gratis IPTV-prøveperiode på 24 timer lader dig teste hele tjenesten på din egen enhed, før du betaler.",
      "En god prøveperiode kræver intet kreditkort, giver fuld adgang og er klar på få minutter.",
      "Test om aftenen og under live sport — det er her, serverne er mest belastede.",
      "Når prøveperioden slutter, bliver der ikke trukket noget. Du vælger kun en plan, hvis du kan lide tjenesten.",
    ],
    body: [
      { type: "p", text: "En gratis IPTV-prøveperiode er en kort, gratis test af en IPTV-tjeneste. De fleste varer 24 timer. I den tid kan du se live-tv, film og serier på dit tv eller din telefon, så du kan tjekke kvaliteten, før du køber et abonnement. Denne guide forklarer, hvordan en prøveperiode på 24 timer virker, hvordan du får den, hvad du skal teste, og hvordan du skelner en sikker prøveperiode fra en risikabel." },

      { type: "h2", text: "Hvad er en gratis IPTV-prøveperiode på 24 timer?" },
      { type: "p", text: "En gratis IPTV-prøveperiode på 24 timer er midlertidig, gratis adgang til en IPTV-tjeneste. Udbyderen sender dig prøveoplysninger — som regel brugernavn, adgangskode og server-URL — der virker i 24 timer. Du tilføjer dem i en app på din enhed og bruger tjenesten præcis som en betalende kunde." },
      { type: "p", text: "Målet er enkelt: at se den reelle billedkvalitet, stabiliteten og indlæsningstiden for kanalerne på din egen enhed og forbindelse — ikke i en demovideo." },

      { type: "h2", text: "Derfor er 24 timer den perfekte længde" },
      { type: "ul", items: [
        "Den dækker et helt døgn, inklusive aftenens spidsbelastning, hvor serverne er mest belastede.",
        "Den er lang nok til at teste live-tv, film, tv-guiden og flere enheder.",
        "Den er kort nok til, at du beslutter dig hurtigt, uden at glemme at teste.",
      ] },

      { type: "h2", text: "Sådan virker den gratis prøveperiode, trin for trin" },
      { type: "figure", name: "trial-timeline", caption: "De 4 trin i en gratis IPTV-prøveperiode på 24 timer — fra anmodning til beslutning." },
      { type: "ol", items: [
        "Anmodning: udfyld en kort formular med dit navn, din enhed og app. Hos DenvayStream åbner WhatsApp med din anmodning klar til at sende.",
        "Loginoplysninger: teamet sender dig dine prøveoplysninger og en installationsguide til din enhed, som regel inden for få minutter.",
        "Test: installer appen, log ind og brug tjenesten i 24 timer.",
        "Beslutning: hvis du kan lide det, så vælg en plan. Hvis ikke, stopper du bare — der bliver ikke trukket noget.",
      ] },
      { type: "links", title: "Få din prøveperiode", items: [["Bestil en gratis prøveperiode på 24 timer hos DenvayStream", "/free-trial"]] },

      { type: "h2", text: "Hvad er inkluderet i prøveperioden?" },
      { type: "p", text: "En god IPTV-prøveperiode er ikke en begrænset demo. Den skal give dig den samme tjeneste, som betalende kunder får:" },
      { type: "table", caption: "Gratis prøveperiode mod betalt plan", head: ["Funktion", "Gratis prøveperiode på 24 timer", "Betalt plan"], rows: [
        ["Live-tv-kanaler", "Ja", "Ja"],
        ["Film og serier (VOD)", "Ja", "Ja"],
        ["Servere af høj kvalitet", "Ja", "Ja"],
        ["4K / Full HD / HD", "Ja", "Ja"],
        ["Tv-guide og catch-up", "Ja", "Ja"],
        ["Support", "Ja", "Ja, døgnet rundt"],
        ["Længde", "24 timer", "3 måneder til 2 år"],
        ["Pris", "Gratis", `Fra ${p.cheapest}`],
      ] },

      { type: "h2", text: "Hvad skal du have klar, før prøveperioden starter?" },
      { type: "ul", items: [
        "En understøttet enhed: smart-tv, Firestick, Android-boks, telefon, tablet, computer eller MAG-boks.",
        "En afspillerapp, der er installeret på forhånd, så du ikke mister prøvetid.",
        "En stabil internetforbindelse: mindst 10 Mbit/s til HD og 25 Mbit/s til 4K.",
        "En kort liste over de typer kanaler og programmer, du ser mest.",
      ] },
      { type: "links", title: "Gør din enhed klar", items: [["Installationsguider til alle enheder", "/setup"], ["Hvilken internethastighed skal du bruge?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Klar til at teste? Det tager 30 sekunder at bestille din gratis prøveperiode", text: "Fuld adgang i 24 timer på din egen enhed. Intet kreditkort, ingen binding." },

      { type: "h2", text: "Hvad du skal teste på 24 timer" },
      { type: "p", text: "Brug din prøveperiode godt. Dette er de tests, der fortæller mest om en IPTV-tjeneste:" },
      { type: "ol", items: [
        "Billedstabilitet: se én kanal i mindst 30 minutter.",
        "Kanalskift: skift kanal flere gange og se, hvor hurtigt hver kanal starter.",
        "Aftentest: se igen mellem kl. 19 og 23, når serverne er mest belastede.",
        "Live sport: se en livekamp, hvis du kan — det er den hårdeste test.",
        "Billedkvalitet: sammenlign HD, Full HD og 4K på din skærm.",
        "Tv-guide: tjek, at den viser, hvad der sendes nu og senere.",
        "Film og serier: start nogle titler, sæt på pause og spol frem.",
        "Anden enhed: test på din telefon eller et andet tv.",
        "Support: stil et spørgsmål og se, hvor hurtigt og godt de svarer.",
      ] },
      { type: "links", title: "Hele tjeklisten", items: [["Sådan tester du en IPTV-tjeneste med en gratis prøveperiode (tjekliste)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Sikker eller risikabel prøveperiode? Sådan ser du forskellen" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "Tegnene på en sikker IPTV-prøveperiode — og tegnene på en risikabel." },
      { type: "p", text: "En sikker prøveperiode beder aldrig om dine kortoplysninger, giver fuld adgang og kommer fra en udbyder med klare offentlige politikker og ægte support. Vær forsigtig, hvis en prøveperiode beder om betalingsoplysninger, viser få kanaler eller presser dig til at købe en lang plan med det samme." },

      { type: "h2", text: "Kan man få en gratis IPTV-prøveperiode uden kreditkort?" },
      { type: "p", text: "Ja. En pålidelig IPTV-prøveperiode bør aldrig bede om dit kreditkort. Hos DenvayStream oplyser du kun dit navn, din enhed og din app. Fordi der ikke bedes om betalingsoplysninger, er der ingen risiko for, at du bliver trukket, når prøveperioden slutter." },

      { type: "h2", text: "Hvad sker der, når prøveperioden slutter?" },
      { type: "p", text: `Dine prøveoplysninger holder simpelthen op med at virke efter 24 timer. Der bliver ikke trukket noget, og intet abonnement starter automatisk. Hvis du kunne lide det, kan du vælge en plan og ofte fortsætte med den samme app, som du allerede har installeret. DenvayStreams planer starter ved ${p.cheapest} for 3 måneder, og 2-årsplanen bliver ${p.monthly} pr. måned.` },
      { type: "links", title: "Efter din prøveperiode", items: [["Se alle planer og priser", "/pricing"], ["Vores 7 dages pengene-tilbage-garanti", "/legal/refund-policy"]] },

      { type: "h2", text: "Tips til at få mest muligt ud af din gratis prøveperiode" },
      { type: "ul", items: [
        "Start prøveperioden, når du har tid til at se tv — for eksempel i weekenden eller om aftenen.",
        "Brug et netværkskabel til tv og tv-bokse, hvis du kan.",
        "Tag først en hastighedstest på den enhed, du skal se på.",
        "Skriv alle problemer ned og spørg supporten — hvordan de hjælper, er en del af testen.",
        "Test på den enhed, du bruger hver dag, ikke kun på telefonen.",
      ] },

      { type: "h2", text: "Problemer i prøveperioden og hurtige løsninger" },
      { type: "table", caption: "Almindelige problemer i den gratis prøveperiode", head: ["Problem", "Hurtig løsning"], rows: [
        ["Login virker ikke", "Tjek server-URL, brugernavn og adgangskode — et enkelt forkert bogstav blokerer det"],
        ["Kanalerne indlæses ikke", "Vent 1–2 minutter første gang og genstart appen"],
        ["Billedet fryser", "Brug et kabel, genstart routeren og skift til Full HD"],
        ["Tv-guiden er tom", "Opdater tv-guiden i appens indstillinger"],
      ] },
      { type: "links", title: "Mere hjælp", items: [["IPTV buffer: 9 løsninger, der virker", "/blog/fix-iptv-buffering"], ["Hvad er en gratis prøveperiode? (ordliste)", "/glossary#trial"]] },

      { type: "tip", text: "Bestil din gratis prøveperiode på 24 timer hos DenvayStream nu — ingen betalingsoplysninger, fuld adgang og hjælp til installationen på WhatsApp." },
    ],
    faqs: [
      ["Findes der en gratis IPTV-prøveperiode på 24 timer?", "Ja. DenvayStream tilbyder en gratis IPTV-prøveperiode på 24 timer med fuld adgang til live-tv, film og serier. Intet kreditkort nødvendigt."],
      ["Hvordan får jeg en gratis IPTV-prøveperiode?", "Udfyld den korte formular på siden for gratis prøveperiode med dit navn, din enhed og app. WhatsApp åbner med din anmodning, og vi sender dig dine prøveoplysninger og en installationsguide, som regel inden for få minutter."],
      ["Skal jeg bruge et kreditkort til den gratis IPTV-prøveperiode?", "Nej. Prøveperioden er helt gratis, og vi beder aldrig om betalingsoplysninger, så du kan ikke blive trukket, når den slutter."],
      ["Hvad kan jeg se i den gratis prøveperiode?", "Den samme tjeneste som betalende kunder: live-tv-kanaler, film og serier, tv-guiden og catch-up, i 4K, Full HD og HD, hvor det findes."],
      ["Kan jeg bruge den gratis prøveperiode på mit smart-tv eller min Firestick?", "Ja. Prøveperioden virker på smart-tv, Firestick, Android-bokse, iPhone, iPad, Android-telefoner, Apple TV, MAG-bokse og computere."],
      ["Hvad sker der efter prøveperioden på 24 timer?", "Prøveoplysningerne holder op med at virke, og der bliver ikke trukket noget. Hvis du kan lide tjenesten, kan du vælge en plan og blive ved med at se."],
      ["Kan jeg få mere end én gratis prøveperiode?", "Gratis prøveperioder er begrænset til én pr. kunde, husstand og enhed, så vi kan blive ved med at tilbyde dem til nye kunder."],
    ],
  },
};

export default posts;
