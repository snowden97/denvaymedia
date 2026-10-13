import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "IPTV auf iPhone, iPad und Apple TV schauen",
    excerpt: "Schau IPTV auf iPhone, iPad oder Apple TV: welche App du aus dem App Store installierst, wie du dich anmeldest und einfache Tipps für ein stabiles Bild.",
    heroAlt: "IPTV auf iPhone, iPad und Apple TV.",
    takeaways: [
      "Installiere eine IPTV-App aus dem App Store, zum Beispiel IPTV Smarters Pro oder GSE Smart IPTV.",
      "Melde dich mit Benutzername, Passwort und Server-URL an, die wir dir schicken.",
      "Dieselben Schritte funktionieren auf iPhone, iPad und Apple TV.",
      "Nutze 5-GHz-WLAN oder beim Apple TV ein Kabel für das beste Bild.",
    ],
    body: [
      { type: "p", text: "Apple-Geräte funktionieren sehr gut mit IPTV. Du brauchst nur eine App aus dem App Store und die Zugangsdaten deines Abos. Das dauert etwa fünf Minuten." },
      { type: "h2", text: "Schritt 1 — App installieren" },
      { type: "ol", items: ["Öffne den App Store auf deinem iPhone, iPad oder Apple TV.", "Suche nach „IPTV Smarters Pro“ oder „GSE Smart IPTV“.", "Installiere die App und öffne sie."] },
      { type: "h2", text: "Schritt 2 — Anmelden" },
      { type: "ol", items: ["Wähle „Login with Xtream Codes API“ (der Name kann je nach App etwas anders sein).", "Gib deiner Liste einen beliebigen Namen, zum Beispiel DenvayStream.", "Gib Benutzername, Passwort und Server-URL ein, die wir dir geschickt haben.", "Tippe auf Add user oder Login und warte, bis die Sender geladen sind."] },
      { type: "h2", text: "Tipps für ein besseres Bild" },
      { type: "ul", items: ["Beim Apple TV wenn möglich ein Netzwerkkabel nutzen.", "Mit iPhone und iPad nah am Router bleiben oder 5-GHz-WLAN nutzen.", "Stoppt ein Sender, schließe die App ganz und öffne sie erneut.", "Den Stromsparmodus nur bei Bedarf einschalten, da er Videos verlangsamen kann."] },
      { type: "h2", text: "Auf einem größeren Bildschirm schauen" },
      { type: "p", text: "Du kannst das Bild von iPhone oder iPad per AirPlay an einen Fernseher senden. Für das beste Ergebnis am Fernseher installiere die App lieber direkt auf einem Apple TV." },
      { type: "tip", text: "Unsicher, welche App für dein Apple-Gerät? Frag uns auf WhatsApp und wir schicken dir eine einfache Anleitung." },
    ],
    faqs: [
      ["Kann ich IPTV auf dem iPhone schauen?", "Ja. Installiere eine IPTV-App aus dem App Store und melde dich mit den Daten deines Abos an."],
      ["Was ist die beste IPTV-App fürs Apple TV?", "IPTV Smarters Pro und GSE Smart IPTV sind beliebte Optionen auf dem Apple TV. Beide unterstützen die Anmeldung mit Benutzername, Passwort und Server-URL."],
      ["Brauche ich für jedes Apple-Gerät ein eigenes Abo?", "Nein. Du kannst die App auf mehreren Geräten installieren, aber jedes Abo streamt auf einem Gerät gleichzeitig."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "IPTV auf Android TV, Android-Box und Android-Handy einrichten",
    excerpt: "Richte IPTV auf jedem Android-Gerät ein — Android TV, TV-Box, Handy oder Tablet: Player aus Google Play installieren, anmelden und ein flüssiges, stabiles Bild bekommen.",
    heroAlt: "IPTV auf Android TV, TV-Box und Handy.",
    takeaways: [
      "Android-Geräte können IPTV-Player direkt aus Google Play installieren.",
      "TiviMate ist super für Fernseher; IPTV Smarters Pro läuft gut auf Handys.",
      "Melde dich mit Benutzername, Passwort und Server-URL an, die wir dir schicken.",
      "Gerät neu starten und App-Cache leeren löst die meisten Probleme.",
    ],
    body: [
      { type: "p", text: "Android ist eines der einfachsten Systeme für IPTV. Android-TVs, Android-TV-Boxen, Handys und Tablets können alle in wenigen Minuten eine App aus Google Play installieren." },
      { type: "h2", text: "Schritt 1 — App installieren" },
      { type: "ol", items: ["Öffne Google Play auf deinem Gerät.", "Suche nach „TiviMate“ (am besten für TV) oder „IPTV Smarters Pro“ (gut für Handy und TV).", "Installiere die App und öffne sie."] },
      { type: "h2", text: "Schritt 2 — Abo hinzufügen" },
      { type: "ol", items: ["Wähle „Add playlist“ oder „Login with Xtream Codes“.", "Gib die Server-URL, den Benutzernamen und das Passwort ein, die wir dir geschickt haben.", "Warte, bis die App deine Sender, Filme und den TV-Guide geladen hat."] },
      { type: "h2", text: "Schritt 3 — Für ein flüssiges Bild sorgen" },
      { type: "ul", items: ["Verbinde deine TV-Box wenn möglich per Netzwerkkabel.", "Starte die Box einmal pro Woche neu.", "Leere den App-Cache, wenn Sender einfrieren (Einstellungen → Apps → deine App → Speicher → Cache leeren).", "Halte mindestens 1 GB Speicher auf dem Gerät frei."] },
      { type: "h2", text: "Handys und Tablets" },
      { type: "p", text: "Auf dem Handy kannst du zu Hause oder unterwegs schauen. Nutze möglichst WLAN, denn Videos verbrauchen viel mobiles Datenvolumen. Eine Stunde HD-Video kann etwa 1 bis 3 GB verbrauchen." },
      { type: "tip", text: "Nenn uns auf WhatsApp dein Gerätemodell, und wir sagen dir, welche App am besten passt." },
    ],
    faqs: [
      ["Was ist die beste IPTV-App für Android TV?", "TiviMate ist einer der besten IPTV-Player für Android TV und Android-Boxen. IPTV Smarters Pro ist eine gute kostenlose Wahl."],
      ["Kann ich IPTV mit mobilen Daten auf dem Android-Handy schauen?", "Ja, aber Videos verbrauchen viele Daten — etwa 1 bis 3 GB pro Stunde in HD. Nutze möglichst WLAN."],
      ["Warum friert meine Android-Box ein?", "Die häufigsten Gründe sind schwaches WLAN, wenig freier Speicher oder ein voller App-Cache. Nutze ein Kabel, schaff Speicher frei und leere den Cache."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "IPTV auf Windows-PC und Mac schauen",
    excerpt: "Schau IPTV auf Windows-PC, Laptop oder Mac mit kostenlosen Playern wie VLC oder IPTV Smarters. Einfache Schritte, um dein Abo hinzuzufügen und loszuschauen.",
    heroAlt: "IPTV auf Windows und Mac: ein Laptop, der ein Video abspielt.",
    takeaways: [
      "Du kannst IPTV am Computer mit kostenlosen Apps wie VLC oder IPTV Smarters schauen.",
      "VLC nutzt deinen M3U-Link; IPTV Smarters nutzt Benutzername, Passwort und Server-URL.",
      "Eine Kabelverbindung bringt am Computer das stabilste Bild.",
      "Verbinde deinen Laptop per HDMI-Kabel mit dem Fernseher, um groß zu schauen.",
    ],
    body: [
      { type: "p", text: "Ein Computer ist ein einfacher Weg, IPTV zu schauen, zu Hause oder auf Reisen. Du kannst einen kostenlosen Player nutzen und in wenigen Minuten loslegen." },
      { type: "h2", text: "Option 1 — VLC (kostenlos, sehr einfach)" },
      { type: "ol", items: ["Lade VLC von der offiziellen Website herunter und installiere es.", "Öffne VLC und klicke auf Medien → Netzwerkstream öffnen (auf dem Mac: Ablage → Netzwerk öffnen).", "Füge den M3U-Link ein, den wir dir geschickt haben, und klicke auf Wiedergabe.", "Öffne die Wiedergabeliste, um deine Senderliste zu sehen."] },
      { type: "h2", text: "Option 2 — IPTV Smarters (mit TV-Guide)" },
      { type: "ol", items: ["Lade IPTV Smarters für Windows oder Mac von der offiziellen Website herunter.", "Öffne die App und wähle „Login with Xtream Codes API“.", "Gib Benutzername, Passwort und Server-URL ein, die wir dir geschickt haben.", "Warte, bis Sender, Filme und TV-Guide geladen sind."] },
      { type: "h2", text: "Auf dem Fernseher schauen" },
      { type: "p", text: "Verbinde deinen Laptop per HDMI-Kabel mit dem Fernseher. Wähle am Fernseher den richtigen HDMI-Eingang. Unter Windows drückst du Windows-Taste + P, um die Bildschirmanzeige zu wählen." },
      { type: "h2", text: "Tipps" },
      { type: "ul", items: ["Schließe andere Programme, die das Internet nutzen, zum Beispiel Downloads.", "Nutze ein Netzwerkkabel, wenn dein WLAN schwach ist.", "Halte deine Player-App aktuell."] },
      { type: "tip", text: "Brauchst du deinen M3U-Link oder Hilfe mit der App? Schreib uns auf WhatsApp." },
    ],
    faqs: [
      ["Kann ich IPTV auf einem Laptop schauen?", "Ja. Installiere einen kostenlosen Player wie VLC oder IPTV Smarters, füge deine Abo-Daten hinzu und schau los."],
      ["Was ist der beste IPTV-Player für Windows?", "VLC ist die einfachste kostenlose Option. IPTV Smarters für Windows ist besser, wenn du einen TV-Guide und ein Menü wie am Fernseher willst."],
      ["Kann ich IPTV auf dem Mac schauen?", "Ja. VLC und IPTV Smarters funktionieren beide auf dem Mac."],
    ],
  },
};

export default posts;
