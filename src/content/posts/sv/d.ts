import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("sv");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "IPTV år 2026: den kompletta guiden (så fungerar det, enheter, priser och säkerhet)",
    excerpt: "Allt du behöver veta om IPTV 2026: hur det fungerar, vad du behöver, enheter, internethastighet, priser, hur du väljer en bra tjänst och hur du kommer igång.",
    heroAlt: "Komplett IPTV-guide 2026: en öppen bok.",
    takeaways: [
      "IPTV är tv som kommer via internet i stället för via parabol eller kabel.",
      "Du behöver tre saker: en enhet som stöds, en spelarapp och en stabil internetanslutning (10 Mbit/s för HD, 25 Mbit/s för 4K).",
      "IPTV kostar oftast mindre än kabel-tv eller parabol och har inga långa bindningstider.",
      "Välj en tjänst med gratis provperiod, tydliga policyer och riktig support — och testa den först på din enhet.",
      "De flesta problem, som buffring, beror på wifi eller enheten och är lätta att åtgärda.",
    ],
    body: [
      { type: "p", text: "IPTV (internetprotokoll-tv) är ett sätt att titta på tv via din internetanslutning. I stället för att ta emot kanaler via en parabol eller en kabel i väggen färdas bilden som data från en server till en app på din tv, telefon eller dator. Den här guiden förklarar med enkla ord hur IPTV fungerar, vad du behöver, vad det kostar och hur du väljer och installerar en tjänst." },

      { type: "h2", text: "Vad är IPTV?" },
      { type: "p", text: "IPTV är tv som skickas med samma teknik som resten av internet. Din enhet laddar ner en liten bit video, spelar upp den och laddar ner nästa bit, om och om igen. Därför kan du titta på tv på nästan alla skärmar med internet — hemma eller på resande fot." },
      { type: "p", text: "Stora operatörer använder IPTV-teknik för sina egna tv-paket, och många oberoende tjänster erbjuder IPTV-abonnemang som fungerar med populära spelarappar. Tekniken är densamma; det som skiljer är tjänsten, innehållet och kvaliteten." },

      { type: "h2", text: "Hur fungerar IPTV?" },
      { type: "p", text: "Alla IPTV-tjänster följer samma grundväg, från källan till din skärm:" },
      { type: "ol", items: [
        "Kodning: leverantören omvandlar varje kanal eller video till en digital ström i olika kvaliteter (till exempel HD, Full HD och 4K).",
        "Servrar: strömmarna lagras på, eller passerar genom, kraftfulla servrar som skickar dem till tittarna.",
        "Leverans: när du väljer en kanal skickar servern strömmen till din enhet via internet.",
        "Uppspelning: en app på din enhet avkodar strömmen och visar bild, ljud och tv-guide.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Så fungerar IPTV: från kodning till din skärm i 4 steg." },
      { type: "p", text: "Kvaliteten du ser beror på varje steg: bra servrar, en stabil internetanslutning och en kapabel enhet. Om något av dem är svagt kan det buffra." },

      { type: "h2", text: "IPTV mot kabel-tv, parabol och streamingappar" },
      { type: "table", caption: "Så står sig IPTV mot andra sätt att titta på tv", head: ["", "IPTV", "Kabel-tv", "Parabol", "Streamingappar"], rows: [
        ["Live-tv-kanaler", "Ja", "Ja", "Ja", "Oftast inte"],
        ["Filmer och serier on demand", "Ja", "Begränsat", "Begränsat", "Ja"],
        ["Kräver installation", "Nej", "Ofta", "Ja (antenn)", "Nej"],
        ["Bindningstid", "Oftast ingen", "12–24 månader", "12–24 månader", "Månadsvis"],
        ["Telefon, tv och dator", "Ja", "Begränsat", "Begränsat", "Ja"],
        ["Beror på internethastighet", "Ja", "Nej", "Nej", "Ja"],
        ["Påverkas av dåligt väder", "Nej", "Nej", "Ja", "Nej"],
      ] },
      { type: "p", text: "Kort sagt: IPTV ger dig live-tv som kabel-tv, flexibiliteten hos streamingappar, och ingen antenn eller tekniker. Det viktigaste det behöver är en bra internetanslutning." },
      { type: "links", title: "Läs mer", items: [["IPTV, kabel-tv eller parabol: hela jämförelsen", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "Vad kan du titta på med IPTV?" },
      { type: "h3", text: "Live-tv" },
      { type: "p", text: "Kanaler som du tittar på medan de sänds — nyheter, sport, underhållning, barn och internationella kanaler — med en tv-guide som visar vad som sänds nu och härnäst." },
      { type: "h3", text: "Video on demand (VOD)" },
      { type: "p", text: "Ett bibliotek med filmer och serier som du kan starta, pausa och se igen när du vill." },
      { type: "h3", text: "Catch-up (se i efterhand)" },
      { type: "p", text: "Program från de senaste dagarna, tillgängliga att se senare. Funktionen beror på kanalen och din app." },

      { type: "h2", text: "Vad behöver du för att titta på IPTV?" },
      { type: "ul", items: [
        "En enhet som stöds: smart-tv, Amazon Firestick, Android TV-box, telefon, surfplatta, dator eller MAG-box.",
        "En spelarapp, som TiviMate, IPTV Smarters, IBO Player eller VLC. Appen innehåller inga kanaler.",
        "Ett IPTV-abonnemang, som ger dig inloggningsuppgifter (användarnamn, lösenord och server-URL) eller en M3U-länk.",
        "En stabil internetanslutning — helst med nätverkskabel för tv-apparater och tv-boxar.",
      ] },

      { type: "h2", text: "Vilken internethastighet behöver du?" },
      { type: "table", caption: "Rekommenderad internethastighet per ström", head: ["Bildkvalitet", "Minsta hastighet", "Rekommenderat"], rows: [
        ["SD", "3 Mbit/s", "5 Mbit/s"],
        ["HD (720p)", "7 Mbit/s", "10 Mbit/s"],
        ["Full HD (1080p)", "10 Mbit/s", "15 Mbit/s"],
        ["4K Ultra HD", "20 Mbit/s", "25 Mbit/s eller mer"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Rekommenderad internethastighet för en skärm, efter bildkvalitet." },
      { type: "p", text: "Siffrorna gäller en skärm. Om flera personer tittar samtidigt, lägg ihop hastigheterna. Testa alltid hastigheten på enheten där du tittar, inte på telefonen bredvid routern." },
      { type: "links", title: "Läs mer", items: [["Vilken internethastighet behöver du för IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Vilka enheter fungerar med IPTV?" },
      { type: "p", text: "Nästan alla moderna skärmar kan spela upp IPTV. Det bästa valet beror på vad du redan har:" },
      { type: "figure", name: "devices", caption: "IPTV fungerar på smart-tv, streamingstickor, tv-boxar, telefoner, surfplattor och datorer." },
      { type: "ul", items: [
        "Amazon Firestick: billig, liten och mycket populär. Ett utmärkt val för de flesta.",
        "Smart-tv (Samsung, LG): ingen extra enhet, men äldre modeller har färre appar.",
        "Android TV-boxar: kraftfulla och flexibla, med fler appar att välja bland.",
        "iPhone, iPad och Apple TV: smidiga och enkla, med appar från App Store.",
        "MAG-boxar: gjorda bara för IPTV och mycket enkla med fjärrkontrollen.",
        "Windows- och Mac-datorer: enkla med gratisappar som VLC.",
      ] },
      { type: "links", title: "Installationsguider steg för steg", items: [
        ["Alla installationsguider per enhet", "/setup"],
        ["IPTV på Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV på Samsung och LG smart-tv", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV på Android TV, box och telefon", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV på iPhone, iPad och Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV på MAG-box", "/blog/iptv-on-mag-box"],
        ["IPTV på Windows och Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "Vad kostar IPTV?" },
      { type: "p", text: `Priset för IPTV beror på tjänsten och planens längd. Längre planer kostar nästan alltid mindre per månad. DenvayStream:s planer börjar till exempel på ${p.cheapest} för 3 månader, och 2-årsplanen blir ${p.monthly} per månad — med alla funktioner i varje plan.` },
      { type: "p", text: "Jämfört med kabel-tv eller parabol har IPTV oftast inga installationskostnader, ingen hyrd utrustning och inga långa bindningstider. Var försiktig med priser som verkar för bra för att vara sanna: mycket billiga tjänster har ofta instabila servrar och ingen riktig support." },
      { type: "links", title: "Se priser", items: [["DenvayStream:s planer och priser", "/pricing"]] },
      { type: "cta", title: "Fortfarande osäker? Prova IPTV gratis i 24 timmar", text: "Kontrollera bildkvalitet, kanaler och stabilitet på din egen enhet och ditt eget internet — innan du betalar något." },

      { type: "h2", text: "Så väljer du en bra IPTV-tjänst" },
      { type: "p", text: "Alla IPTV-tjänster är inte likadana. Använd den här checklistan innan du betalar:" },
      { type: "ol", items: [
        "Gratis provperiod: en bra tjänst låter dig testa den på din egen enhet innan du köper.",
        "Stabila servrar: titta på kvällen under rusningstid och under ett liveevenemang för att testa stabiliteten.",
        "Bildkvalitet: kontrollera HD, Full HD och 4K på din skärm.",
        "Riktig support: ställ en fråga och se hur snabbt och bra de svarar.",
        "Tydliga policyer: leta efter användarvillkor, integritetspolicy, återbetalningspolicy och DMCA-policy.",
        "Rättvisa regler: ingen lång bindningstid, ingen automatisk förnyelse som du inte bett om och en tydlig tidsgräns för återbetalning.",
        "Enheter som stöds: kontrollera att det fungerar med dina enheter och appar.",
      ] },
      { type: "links", title: "Läs mer", items: [["Så testar du en IPTV-tjänst med en gratis provperiod", "/blog/how-to-test-iptv-free-trial"], ["De bästa IPTV-apparna", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "Är IPTV lagligt och säkert?" },
      { type: "p", text: "IPTV-tekniken är laglig — det är helt enkelt ett sätt att skicka video via internet. Om en viss tjänst är laglig beror på om den har rätt licenser för sitt innehåll och på lagarna i ditt land. För att vara på den säkra sidan, välj en leverantör med tydliga offentliga policyer, betala med säkra metoder och dela aldrig dina fullständiga kortuppgifter i chatten." },
      { type: "links", title: "Läs mer", items: [["Är IPTV lagligt? Det här bör du veta", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Vanliga IPTV-problem och snabba lösningar" },
      { type: "table", caption: "De vanligaste IPTV-problemen och hur du åtgärdar dem", head: ["Problem", "Trolig orsak", "Snabb lösning"], rows: [
        ["Buffring eller frysning", "Svagt wifi eller långsamt internet", "Använd en nätverkskabel och starta om routern"],
        ["Kanalerna laddas inte", "Fel inloggningsuppgifter", "Kontrollera server-URL, användarnamn och lösenord"],
        ["Tv-guiden är tom", "Guiden har inte laddats än", "Uppdatera tv-guiden i appens inställningar"],
        ["Appen är långsam", "Fullt minne eller full cache", "Rensa cachen och starta om enheten"],
        ["Problem bara på kvällen", "Överbelastad internetleverantör", "Byt till Full HD under rusningstid"],
      ] },
      { type: "links", title: "Läs mer", items: [["IPTV buffrar: 9 lösningar som fungerar", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Kom igång med IPTV i 5 steg" },
      { type: "ol", items: [
        "Kontrollera din internethastighet på enheten där du ska titta.",
        "Välj din enhet och installera en spelarapp.",
        "Beställ en gratis provperiod för att testa tjänsten hemma.",
        "Om du gillar den, välj en plan — längre planer kostar mindre per månad.",
        "Logga in i appen med uppgifterna du får och börja titta.",
      ] },
      { type: "figure", name: "start-steps", caption: "Från noll till tv-tittande: de 5 stegen för att komma igång med IPTV." },

      { type: "h2", text: "IPTV:s framtid" },
      { type: "p", text: "Allt fler tittar på tv på flera skärmar och internetanslutningarna blir allt snabbare. Därför fortsätter IPTV att växa. De kommande åren kommer det mer 4K-innehåll, bättre tv-guider, smartare appar och snabbare kanalbyten. Bättre internet hemma, som fiber och snabbt wifi, betyder också färre kvalitetsproblem." },

      { type: "h2", text: "IPTV-ord som är bra att kunna" },
      { type: "p", text: "Du ser ofta ord som M3U, EPG, MAC-adress, server-URL, VOD och catch-up. Vår ordlista förklarar varje ord med en eller två enkla meningar." },
      { type: "links", title: "Lär dig orden", items: [["IPTV-ordlista: IPTV-ord förklarade på ett enkelt sätt", "/glossary"], ["Vad är IPTV? Guide för nybörjare", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Vill du se hur IPTV fungerar på din egen tv? Beställ en gratis provperiod på 24 timmar hos DenvayStream — inga betaluppgifter behövs." },
    ],
    faqs: [
      ["Vad är IPTV med enkla ord?", "IPTV är tv som kommer via din internetanslutning i stället för via parabol eller kabel. Du tittar med en app på din tv, telefon, surfplatta eller dator."],
      ["Hur fungerar IPTV?", "En leverantör omvandlar kanaler och videor till digitala strömmar och skickar dem från sina servrar via internet. En app på din enhet tar emot strömmen och visar bilden."],
      ["Vad behöver jag för att titta på IPTV?", "En enhet som stöds, en spelarapp, ett IPTV-abonnemang och en stabil internetanslutning — minst 10 Mbit/s för HD och 25 Mbit/s för 4K."],
      ["Är IPTV bättre än kabel-tv?", "För de flesta hushåll med bra internet är IPTV billigare, har ingen bindningstid och fungerar på fler enheter. Kabel-tv kan vara stabilare om ditt internet är långsamt."],
      ["Kan jag titta på IPTV på mer än en enhet?", "Ja, du kan installera appen på flera enheter. Hur många som kan titta samtidigt beror på din plan — oftast är en anslutning en enhet åt gången."],
      ["Vad kostar IPTV per månad?", `Det beror på tjänsten och längden. Hos DenvayStream börjar planerna på ${p.cheapest} för 3 månader, och 2-årsplanen kostar ${p.monthly} per månad.`],
      ["Behöver jag VPN för IPTV?", "Nej, du behöver inte VPN. Vissa använder det om deras internetleverantör bromsar strömning under rusningstid."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Gratis IPTV-provperiod 24 timmar: så får du den och vad du ska testa (2026)",
    excerpt: "Få en gratis IPTV-provperiod på 24 timmar utan kreditkort. Vad som ingår, hur du får den på några minuter, vad du ska testa och hur du känner igen en säker provperiod.",
    heroAlt: "Gratis IPTV-provperiod på 24 timmar: en tv med live-tv i 4K, en etikett gratis prov 24 h och inget kreditkort behövs.",
    takeaways: [
      "En gratis IPTV-provperiod på 24 timmar låter dig testa hela tjänsten på din egen enhet innan du betalar.",
      "En bra provperiod kräver inget kreditkort, ger full tillgång och är klar på några minuter.",
      "Testa på kvällen och under livesport — då är servrarna som mest belastade.",
      "När provperioden tar slut debiteras inget. Du väljer bara en plan om du gillar tjänsten.",
    ],
    body: [
      { type: "p", text: "En gratis IPTV-provperiod är ett kort, kostnadsfritt test av en IPTV-tjänst. De flesta varar i 24 timmar. Under den tiden kan du titta på live-tv, filmer och serier på din tv eller telefon, så att du kan kontrollera kvaliteten innan du köper ett abonnemang. Den här guiden förklarar hur en provperiod på 24 timmar fungerar, hur du får den, vad du ska testa och hur du skiljer en säker provperiod från en riskabel." },

      { type: "h2", text: "Vad är en gratis IPTV-provperiod på 24 timmar?" },
      { type: "p", text: "En gratis IPTV-provperiod på 24 timmar är tillfällig, kostnadsfri tillgång till en IPTV-tjänst. Leverantören skickar dig provuppgifter — oftast användarnamn, lösenord och server-URL — som fungerar i 24 timmar. Du lägger till dem i en app på din enhet och använder tjänsten precis som en betalande kund." },
      { type: "p", text: "Målet är enkelt: att se den verkliga bildkvaliteten, stabiliteten och laddningstiden för kanalerna på din egen enhet och anslutning — inte i en demovideo." },

      { type: "h2", text: "Därför är 24 timmar den perfekta längden" },
      { type: "ul", items: [
        "Den täcker ett helt dygn, inklusive kvällens rusningstid när servrarna är som mest belastade.",
        "Den räcker för att testa live-tv, filmer, tv-guiden och flera enheter.",
        "Den är kort nog för att du ska bestämma dig snabbt, utan att glömma bort att testa.",
      ] },

      { type: "h2", text: "Så fungerar den gratis provperioden, steg för steg" },
      { type: "figure", name: "trial-timeline", caption: "De 4 stegen i en gratis IPTV-provperiod på 24 timmar — från förfrågan till beslut." },
      { type: "ol", items: [
        "Förfrågan: fyll i ett kort formulär med ditt namn, din enhet och app. Hos DenvayStream öppnas WhatsApp med din förfrågan klar att skicka.",
        "Inloggningsuppgifter: teamet skickar dina provuppgifter och en installationsguide för din enhet, oftast inom några minuter.",
        "Test: installera appen, logga in och använd tjänsten i 24 timmar.",
        "Beslut: om du gillar det, välj en plan. Om inte slutar du bara — inget debiteras.",
      ] },
      { type: "links", title: "Få din provperiod", items: [["Beställ en gratis provperiod på 24 timmar hos DenvayStream", "/free-trial"]] },

      { type: "h2", text: "Vad ingår i provperioden?" },
      { type: "p", text: "En bra IPTV-provperiod är ingen begränsad demo. Den ska ge dig samma tjänst som betalande kunder får:" },
      { type: "table", caption: "Gratis provperiod mot betald plan", head: ["Funktion", "Gratis provperiod på 24 timmar", "Betald plan"], rows: [
        ["Live-tv-kanaler", "Ja", "Ja"],
        ["Filmer och serier (VOD)", "Ja", "Ja"],
        ["Servrar av hög kvalitet", "Ja", "Ja"],
        ["4K / Full HD / HD", "Ja", "Ja"],
        ["Tv-guide och catch-up", "Ja", "Ja"],
        ["Support", "Ja", "Ja, dygnet runt"],
        ["Längd", "24 timmar", "3 månader till 2 år"],
        ["Pris", "Gratis", `Från ${p.cheapest}`],
      ] },

      { type: "h2", text: "Vad behöver du innan provperioden börjar?" },
      { type: "ul", items: [
        "En enhet som stöds: smart-tv, Firestick, Android-box, telefon, surfplatta, dator eller MAG-box.",
        "En spelarapp som är installerad i förväg, så att du inte förlorar provtid.",
        "En stabil internetanslutning: minst 10 Mbit/s för HD och 25 Mbit/s för 4K.",
        "En kort lista över de typer av kanaler och program du tittar mest på.",
      ] },
      { type: "links", title: "Förbered din enhet", items: [["Installationsguider för alla enheter", "/setup"], ["Vilken internethastighet behöver du?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Redo att testa? Det tar 30 sekunder att beställa din gratis provperiod", text: "Full tillgång i 24 timmar på din egen enhet. Inget kreditkort, ingen bindningstid." },

      { type: "h2", text: "Vad du ska testa på 24 timmar" },
      { type: "p", text: "Utnyttja din provperiod väl. Det här är testerna som säger mest om en IPTV-tjänst:" },
      { type: "ol", items: [
        "Bildstabilitet: titta på en kanal i minst 30 minuter.",
        "Kanalbyte: byt kanal flera gånger och se hur snabbt varje kanal startar.",
        "Kvällstest: titta igen mellan 19 och 23, när servrarna är som mest belastade.",
        "Livesport: titta på en livematch om du kan — det är det tuffaste testet.",
        "Bildkvalitet: jämför HD, Full HD och 4K på din skärm.",
        "Tv-guide: kontrollera att den visar vad som sänds nu och härnäst.",
        "Filmer och serier: starta några titlar, pausa och spola framåt.",
        "Andra enhet: testa på din telefon eller en annan tv.",
        "Support: ställ en fråga och se hur snabbt och bra de svarar.",
      ] },
      { type: "links", title: "Hela checklistan", items: [["Så testar du en IPTV-tjänst med en gratis provperiod (checklista)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Säker eller riskabel provperiod? Så ser du skillnaden" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "Tecknen på en säker IPTV-provperiod — och tecknen på en riskabel." },
      { type: "p", text: "En säker provperiod ber aldrig om dina kortuppgifter, ger full tillgång och kommer från en leverantör med tydliga offentliga policyer och riktig support. Var försiktig om en provperiod ber om betaluppgifter, visar få kanaler eller pressar dig att köpa en lång plan direkt." },

      { type: "h2", text: "Kan man få en gratis IPTV-provperiod utan kreditkort?" },
      { type: "p", text: "Ja. En pålitlig IPTV-provperiod ska aldrig be om ditt kreditkort. Hos DenvayStream anger du bara ditt namn, din enhet och din app. Eftersom inga betaluppgifter efterfrågas finns det ingen risk att du debiteras när provperioden är slut." },

      { type: "h2", text: "Vad händer när provperioden är slut?" },
      { type: "p", text: `Dina provuppgifter slutar helt enkelt att fungera efter 24 timmar. Inget debiteras och inget abonnemang startar automatiskt. Om du gillade det kan du välja en plan och ofta fortsätta använda samma app som du redan installerat. DenvayStream:s planer börjar på ${p.cheapest} för 3 månader, och 2-årsplanen blir ${p.monthly} per månad.` },
      { type: "links", title: "Efter din provperiod", items: [["Se alla planer och priser", "/pricing"], ["Vår 7 dagars pengarna-tillbaka-garanti", "/legal/refund-policy"]] },

      { type: "h2", text: "Tips för att få ut mest av din gratis provperiod" },
      { type: "ul", items: [
        "Starta provperioden när du har tid att titta på tv — till exempel på helgen eller på kvällen.",
        "Använd en nätverkskabel för tv-apparater och tv-boxar om du kan.",
        "Gör ett hastighetstest först på enheten där du ska titta.",
        "Anteckna alla problem och fråga supporten — hur de hjälper till är en del av testet.",
        "Testa på den enhet du använder varje dag, inte bara på telefonen.",
      ] },

      { type: "h2", text: "Problem under provperioden och snabba lösningar" },
      { type: "table", caption: "Vanliga problem under den gratis provperioden", head: ["Problem", "Snabb lösning"], rows: [
        ["Inloggningen fungerar inte", "Kontrollera server-URL, användarnamn och lösenord — en enda fel bokstav blockerar den"],
        ["Kanalerna laddas inte", "Vänta 1–2 minuter första gången och starta om appen"],
        ["Bilden fryser", "Använd en kabel, starta om routern och byt till Full HD"],
        ["Tv-guiden är tom", "Uppdatera tv-guiden i appens inställningar"],
      ] },
      { type: "links", title: "Mer hjälp", items: [["IPTV buffrar: 9 lösningar som fungerar", "/blog/fix-iptv-buffering"], ["Vad är en gratis provperiod? (ordlista)", "/glossary#trial"]] },

      { type: "tip", text: "Beställ din gratis provperiod på 24 timmar hos DenvayStream nu — inga betaluppgifter, full tillgång och hjälp med installationen på WhatsApp." },
    ],
    faqs: [
      ["Finns det en gratis IPTV-provperiod på 24 timmar?", "Ja. DenvayStream erbjuder en gratis IPTV-provperiod på 24 timmar med full tillgång till live-tv, filmer och serier. Inget kreditkort behövs."],
      ["Hur får jag en gratis IPTV-provperiod?", "Fyll i det korta formuläret på sidan för gratis provperiod med ditt namn, din enhet och app. WhatsApp öppnas med din förfrågan och vi skickar dina provuppgifter och en installationsguide, oftast inom några minuter."],
      ["Behöver jag kreditkort för den gratis IPTV-provperioden?", "Nej. Provperioden är helt gratis och vi ber aldrig om betaluppgifter, så du kan inte debiteras när den är slut."],
      ["Vad kan jag titta på under den gratis provperioden?", "Samma tjänst som betalande kunder: live-tv-kanaler, filmer och serier, tv-guiden och catch-up, i 4K, Full HD och HD där det finns."],
      ["Kan jag använda den gratis provperioden på min smart-tv eller Firestick?", "Ja. Provperioden fungerar på smart-tv, Firestick, Android-boxar, iPhone, iPad, Android-telefoner, Apple TV, MAG-boxar och datorer."],
      ["Vad händer efter provperioden på 24 timmar?", "Provuppgifterna slutar fungera och inget debiteras. Om du gillar tjänsten kan du välja en plan och fortsätta titta."],
      ["Kan jag få mer än en gratis provperiod?", "Gratis provperioder är begränsade till en per kund, hushåll och enhet, så att vi kan fortsätta erbjuda dem till nya kunder."],
    ],
  },
};

export default posts;
