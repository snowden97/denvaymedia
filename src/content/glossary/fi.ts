import type { TermText } from "@/lib/glossary";

const fi: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Erittäin terävä kuva, neljä kertaa tarkempi kuin Full HD. Tarvitset noin 25 Mbit/s internetnopeuden 4K-lähetykseen.", linkLabel: "Internetnopeus IPTV:lle" },
  "anti-freeze": { term: "Anti-freeze", definition: "Palvelintekniikka, joka jakaa katsojat usealle palvelimelle, jotta kuva ei jäädy, kun moni katsoo samaan aikaan." },
  buffering: { term: "Pätkiminen (puskurointi)", definition: "Kun video pysähtyy hetkeksi ladatakseen lisää dataa. Yleensä syynä on heikko wifi, hidas laite tai ylikuormitettu yhteys.", linkLabel: "Näin korjaat pätkimisen" },
  "catch-up": { term: "Catch-up (jälkikatselu)", definition: "Ominaisuus, jonka avulla voit katsoa viime päivinä lähetettyjä ohjelmia milloin haluat." },
  connection: { term: "Yhteys", definition: "Laitteiden määrä, jotka voivat katsoa samanaikaisesti yhdellä tilauksella. Yksi yhteys = yksi laite kerrallaan." },
  credit: { term: "Krediitti (jälleenmyyjä)", definition: "Yksikkö, jolla jälleenmyyjä luo tilauksia. DenvayStream:llä 1 krediitti = 1 kuukauden palvelu yhdelle asiakkaalle.", linkLabel: "Krediittipaketit jälleenmyyjille" },
  epg: { term: "EPG (tv-opas)", definition: "Electronic Programme Guide. Näytöllä näkyvä luettelo, joka kertoo, mitä kullakin kanavalla on nyt ja seuraavaksi." },
  ethernet: { term: "Ethernet-kaapeli", definition: "Verkkokaapeli, joka yhdistää television tai tv-boksin suoraan reitittimeen. Antaa vakaamman yhteyden kuin wifi." },
  fhd: { term: "FHD (Full HD)", definition: "Selkeä ja terävä 1080 juovan kuva (1080p). Tarvitset noin 15 Mbit/s Full HD -lähetykseen." },
  firestick: { term: "Firestick", definition: "Amazonin pieni suoratoistotikku, joka liitetään television HDMI-porttiin. Yksi suosituimmista IPTV-laitteista.", linkLabel: "Firestickin asennusopas" },
  hd: { term: "HD", definition: "Teräväpiirto. Hyvä 720 juovan kuva (720p). Tarvitset noin 10 Mbit/s HD-lähetykseen." },
  iptv: { term: "IPTV", definition: "Internet-protokolla-tv. Tv-kanavat, elokuvat ja sarjat, jotka tulevat internetyhteytesi kautta lautasantennin tai kaapelin sijaan.", linkLabel: "Mitä IPTV on?" },
  "live-tv": { term: "Suora tv", definition: "Kanavat, joita katsot samaan aikaan kuin niitä lähetetään, kuten tavallista televisiota." },
  m3u: { term: "M3U-linkki (soittolista)", definition: "Verkkolinkki tai tiedosto, jossa on tilauksesi kanavaluettelo. Voit liittää sen soittimiin, kuten VLC:hen." },
  "mac-address": { term: "MAC-osoite", definition: "Yksilöllinen koodi, joka tunnistaa laitteesi, esimerkiksi 00:1A:79:XX:XX:XX. MAG-boksit ja jotkin älytelevisiosovellukset käyttävät sitä tilauksesi yhdistämiseen.", linkLabel: "MAG-boksin asennusopas" },
  "mag-box": { term: "MAG-boksi", definition: "Pieni tv-boksi, joka on tehty vain IPTV:tä varten. Käyttää portaalin URL-osoitetta ja on helppo käyttää kaukosäätimellä.", linkLabel: "MAG-boksin asennusopas" },
  mbps: { term: "Mbit/s", definition: "Megabittiä sekunnissa. Yksikkö, jolla internetnopeutta mitataan. Enemmän Mbit/s = nopeampi yhteys." },
  "player-app": { term: "Soitinsovellus", definition: "Sovellus, jolla katsot IPTV:tä, kuten TiviMate, IPTV Smarters tai VLC. Sovellus ei sisällä kanavia — ne tulevat tilauksestasi.", linkLabel: "Parhaat IPTV-sovellukset" },
  "portal-url": { term: "Portaalin URL", definition: "Verkko-osoite, jonka kirjoitat MAG-boksiin (ja joihinkin sovelluksiin) IPTV-palvelusi lataamiseksi." },
  "reseller-panel": { term: "Jälleenmyyjäpaneeli", definition: "Verkkosivusto, jossa jälleenmyyjät luovat, uusivat ja hallitsevat asiakkaidensa tilauksia krediiteillä.", linkLabel: "Näin aloitat jälleenmyyjänä" },
  "server-url": { term: "Palvelimen URL", definition: "IPTV-palvelimen verkko-osoite. Kirjoitat sen sovellukseesi käyttäjätunnuksen ja salasanan kanssa." },
  "smart-tv": { term: "Älytelevisio", definition: "Televisio, joka yhdistyy internetiin ja johon voi asentaa sovelluksia. Useimmat Samsung- ja LG-älytelevisiot voivat käyttää IPTV-sovelluksia suoraan.", linkLabel: "Älytelevision asennusopas" },
  trial: { term: "Ilmainen kokeilu", definition: "Lyhyt palvelun testi ennen maksamista. DenvayStream tarjoaa ilmaisen 24 tunnin kokeilun täydellä pääsyllä.", linkLabel: "Hae ilmainen kokeilu" },
  vod: { term: "VOD (tilausvideo)", definition: "Elokuvat ja sarjat, jotka voit aloittaa milloin haluat, keskeyttää ja katsoa uudelleen." },
  vpn: { term: "VPN", definition: "Palvelu, joka piilottaa ja suojaa internetliikenteesi. Sitä ei tarvita IPTV:hen, mutta jotkut käyttävät sitä, jos internetoperaattori hidastaa suoratoistoa." },
  "xtream-codes": { term: "Xtream Codes -kirjautuminen", definition: "Tapa kirjautua IPTV-sovelluksiin kolmella tiedolla: käyttäjätunnus, salasana ja palvelimen URL. Useimmat sovellukset tukevat sitä." },
};

export default fi;
