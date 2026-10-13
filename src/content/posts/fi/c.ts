import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Näin katsot IPTV:tä iPhonella, iPadilla ja Apple TV:llä",
    excerpt: "Katso IPTV:tä iPhonella, iPadilla tai Apple TV:llä: mikä sovellus asennetaan App Storesta, miten kirjaudut tiedoillasi ja helpot vinkit vakaaseen kuvaan.",
    heroAlt: "IPTV iPhonella, iPadilla ja Apple TV:llä.",
    takeaways: [
      "Asenna IPTV-sovellus App Storesta, esimerkiksi IPTV Smarters Pro tai GSE Smart IPTV.",
      "Kirjaudu sisään lähettämällämme käyttäjätunnuksella, salasanalla ja palvelimen URL-osoitteella.",
      "Samat vaiheet toimivat iPhonella, iPadilla ja Apple TV:llä.",
      "Käytä Apple TV:ssä 5 GHz:n wifiä tai kaapelia parhaan kuvan saamiseksi.",
    ],
    body: [
      { type: "p", text: "Applen laitteet toimivat erittäin hyvin IPTV:n kanssa. Tarvitset vain sovelluksen App Storesta ja tilauksesi kirjautumistiedot. Siihen menee noin viisi minuuttia." },
      { type: "h2", text: "Vaihe 1 — Asenna sovellus" },
      { type: "ol", items: ["Avaa App Store iPhonella, iPadilla tai Apple TV:llä.", "Etsi ”IPTV Smarters Pro” tai ”GSE Smart IPTV”.", "Asenna sovellus ja avaa se."] },
      { type: "h2", text: "Vaihe 2 — Kirjaudu sisään" },
      { type: "ol", items: ["Valitse ”Login with Xtream Codes API” (nimi voi vaihdella hieman sovelluksesta riippuen).", "Anna soittolistallesi haluamasi nimi, esimerkiksi DenvayStream.", "Kirjoita käyttäjätunnus, salasana ja palvelimen URL, jotka lähetimme sinulle.", "Napauta Add user tai Login ja odota, että kanavat latautuvat."] },
      { type: "h2", text: "Vinkit parempaan kuvaan" },
      { type: "ul", items: ["Käytä Apple TV:ssä verkkokaapelia, jos voit.", "Pysy iPhonella ja iPadilla lähellä reititintä tai käytä 5 GHz:n wifiä.", "Jos kanava pysähtyy, sulje sovellus kokonaan ja avaa se uudelleen.", "Ota virransäästötila käyttöön vain tarvittaessa, sillä se voi hidastaa suoratoistoa."] },
      { type: "h2", text: "Katselu isommalta näytöltä" },
      { type: "p", text: "Voit lähettää kuvan iPhonelta tai iPadilta televisioon AirPlayn avulla. Parhaan tuloksen saat televisiossa, kun asennat sovelluksen suoraan Apple TV:hen." },
      { type: "tip", text: "Etkö tiedä, minkä sovelluksen valitsisit Apple-laitteellesi? Kysy meiltä WhatsAppissa, niin lähetämme helpot ohjeet." },
    ],
    faqs: [
      ["Voinko katsoa IPTV:tä iPhonella?", "Kyllä. Asenna IPTV-sovellus App Storesta ja kirjaudu sisään tilaustiedoillasi."],
      ["Mikä on paras IPTV-sovellus Apple TV:lle?", "IPTV Smarters Pro ja GSE Smart IPTV ovat suosittuja valintoja Apple TV:llä. Molemmissa voit kirjautua käyttäjätunnuksella, salasanalla ja palvelimen URL-osoitteella."],
      ["Tarvitsenko erillisen tilauksen jokaiselle Apple-laitteelle?", "Et. Voit asentaa sovelluksen useille laitteille, mutta jokainen tilaus mahdollistaa katselun yhdellä laitteella kerrallaan."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "IPTV:n asentaminen Android TV:lle, Android-boksiin ja Android-puhelimeen",
    excerpt: "Ota IPTV käyttöön millä tahansa Android-laitteella — Android TV, boksi, puhelin tai tabletti: soitin Google Playsta, kirjautuminen ja sujuva, vakaa kuva.",
    heroAlt: "IPTV Android TV:llä, tv-boksilla ja puhelimella.",
    takeaways: [
      "Android-laitteille voi asentaa IPTV-soittimia suoraan Google Playsta.",
      "TiviMate on erinomainen televisioihin; IPTV Smarters Pro toimii hyvin puhelimissa.",
      "Kirjaudu sisään lähettämällämme käyttäjätunnuksella, salasanalla ja palvelimen URL-osoitteella.",
      "Laitteen uudelleenkäynnistys ja sovelluksen välimuistin tyhjentäminen ratkaisevat useimmat ongelmat.",
    ],
    body: [
      { type: "p", text: "Android on yksi helpoimmista järjestelmistä IPTV:lle. Android TV:t, Android TV -boksit, puhelimet ja tabletit voivat asentaa sovelluksen Google Playsta muutamassa minuutissa." },
      { type: "h2", text: "Vaihe 1 — Asenna sovellus" },
      { type: "ol", items: ["Avaa Google Play laitteellasi.", "Etsi ”TiviMate” (ihanteellinen televisioihin) tai ”IPTV Smarters Pro” (hyvä puhelimeen ja televisioon).", "Asenna sovellus ja avaa se."] },
      { type: "h2", text: "Vaihe 2 — Lisää tilauksesi" },
      { type: "ol", items: ["Valitse ”Add playlist” tai ”Login with Xtream Codes”.", "Kirjoita palvelimen URL, käyttäjätunnus ja salasana, jotka lähetimme sinulle.", "Odota, kun sovellus lataa kanavasi, elokuvasi ja tv-oppaan."] },
      { type: "h2", text: "Vaihe 3 — Pidä kuva sujuvana" },
      { type: "ul", items: ["Liitä tv-boksi verkkokaapelilla, jos voit.", "Käynnistä boksi uudelleen kerran viikossa.", "Tyhjennä sovelluksen välimuisti, jos kanavat alkavat jäätyä (Asetukset → Sovellukset → sovelluksesi → Tallennustila → Tyhjennä välimuisti).", "Jätä laitteeseen vähintään 1 Gt vapaata tilaa."] },
      { type: "h2", text: "Puhelimet ja tabletit" },
      { type: "p", text: "Puhelimella voit katsoa kotona tai matkoilla. Käytä wifiä aina kun voit, sillä suoratoisto kuluttaa paljon mobiilidataa. Tunti HD-videota voi kuluttaa 1–3 Gt." },
      { type: "tip", text: "Kerro laitteesi malli meille WhatsAppissa, niin kerromme, mikä sovellus toimii parhaiten." },
    ],
    faqs: [
      ["Mikä on paras IPTV-sovellus Android TV:lle?", "TiviMate on yksi parhaista IPTV-soittimista Android TV:lle ja Android-bokseille. IPTV Smarters Pro on hyvä ilmainen vaihtoehto."],
      ["Voinko katsoa IPTV:tä Android-puhelimellani mobiilidatalla?", "Kyllä, mutta suoratoisto kuluttaa paljon dataa — 1–3 Gt tunnissa HD-laadussa. Käytä wifiä aina kun voit."],
      ["Miksi Android-boksini jäätyy?", "Yleisimmät syyt ovat heikko wifi, vähäinen vapaa tila tai täysi välimuisti. Käytä kaapelia, vapauta tilaa ja tyhjennä välimuisti."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Näin katsot IPTV:tä Windows-tietokoneella ja Macilla",
    excerpt: "Katso IPTV:tä Windows-tietokoneella, kannettavalla tai Macilla ilmaisilla soittimilla, kuten VLC:llä tai IPTV Smartersilla. Helpot vaiheet tilauksen lisäämiseen ja katselun aloittamiseen.",
    heroAlt: "IPTV Windowsilla ja Macilla: kannettava tietokone, joka toistaa videota.",
    takeaways: [
      "Voit katsoa IPTV:tä tietokoneella ilmaisilla sovelluksilla, kuten VLC:llä tai IPTV Smartersilla.",
      "VLC käyttää M3U-linkkiäsi; IPTV Smarters käyttää käyttäjätunnusta, salasanaa ja palvelimen URL-osoitetta.",
      "Kaapeliyhteys antaa tietokoneella vakaimman kuvan.",
      "Liitä kannettava televisioon HDMI-kaapelilla, niin voit katsoa isolta näytöltä.",
    ],
    body: [
      { type: "p", text: "Tietokone on helppo tapa katsoa IPTV:tä kotona tai matkoilla. Voit käyttää ilmaista soitinta ja aloittaa katselun muutamassa minuutissa." },
      { type: "h2", text: "Vaihtoehto 1 — VLC (ilmainen, erittäin helppo)" },
      { type: "ol", items: ["Lataa VLC sen viralliselta sivustolta ja asenna se.", "Avaa VLC ja valitse Media → Avaa verkkovirta (Macilla: Arkisto → Avaa verkko).", "Liitä lähettämämme M3U-linkki ja valitse Toista.", "Avaa soittolista nähdäksesi kanavaluettelosi."] },
      { type: "h2", text: "Vaihtoehto 2 — IPTV Smarters (tv-oppaalla)" },
      { type: "ol", items: ["Lataa IPTV Smarters Windowsille tai Macille sen viralliselta sivustolta.", "Avaa sovellus ja valitse ”Login with Xtream Codes API”.", "Kirjoita käyttäjätunnus, salasana ja palvelimen URL, jotka lähetimme sinulle.", "Odota, että kanavat, elokuvat ja tv-opas latautuvat."] },
      { type: "h2", text: "Katselu televisiosta" },
      { type: "p", text: "Liitä kannettava televisioon HDMI-kaapelilla. Valitse televisiosta oikea HDMI-tulo. Windowsissa voit valita näytön näyttötavan painamalla Windows-näppäintä + P." },
      { type: "h2", text: "Vinkkejä" },
      { type: "ul", items: ["Sulje muut internetiä käyttävät ohjelmat, kuten lataukset.", "Käytä verkkokaapelia, jos wifisi on heikko.", "Pidä soitinsovelluksesi ajan tasalla."] },
      { type: "tip", text: "Tarvitsetko M3U-linkkisi tai apua sovelluksen kanssa? Kirjoita meille WhatsAppissa." },
    ],
    faqs: [
      ["Voinko katsoa IPTV:tä kannettavalla tietokoneella?", "Kyllä. Asenna ilmainen soitin, kuten VLC tai IPTV Smarters, lisää tilaustietosi ja aloita katselu."],
      ["Mikä on paras IPTV-soitin Windowsille?", "VLC on helpoin ilmainen vaihtoehto. IPTV Smarters Windowsille on parempi, jos haluat tv-oppaan ja television kaltaisen valikon."],
      ["Voinko katsoa IPTV:tä Macilla?", "Kyllä. VLC ja IPTV Smarters toimivat molemmat Macilla."],
    ],
  },
};

export default posts;
