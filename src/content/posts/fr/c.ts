import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Comment regarder l'IPTV sur iPhone, iPad et Apple TV",
    excerpt: "Regardez l'IPTV sur votre iPhone, iPad ou Apple TV : quelle application installer depuis l'App Store, comment vous connecter et des conseils simples pour une image stable.",
    heroAlt: "L'IPTV sur iPhone, iPad et Apple TV.",
    takeaways: [
      "Installez une application IPTV depuis l'App Store, comme IPTV Smarters Pro ou GSE Smart IPTV.",
      "Connectez-vous avec le nom d'utilisateur, le mot de passe et l'URL du serveur que nous vous envoyons.",
      "Les mêmes étapes fonctionnent sur iPhone, iPad et Apple TV.",
      "Utilisez le Wi-Fi 5 GHz ou un câble pour l'Apple TV pour la meilleure image.",
    ],
    body: [
      { type: "p", text: "Les appareils Apple fonctionnent très bien avec l'IPTV. Il vous faut seulement une application depuis l'App Store et les identifiants de votre abonnement. Cela prend environ cinq minutes." },
      { type: "h2", text: "Étape 1 — Installez une application" },
      { type: "ol", items: ["Ouvrez l'App Store sur votre iPhone, iPad ou Apple TV.", "Cherchez « IPTV Smarters Pro » ou « GSE Smart IPTV ».", "Installez l'application et ouvrez-la."] },
      { type: "h2", text: "Étape 2 — Connectez-vous" },
      { type: "ol", items: ["Choisissez « Login with Xtream Codes API » (le nom peut varier un peu selon l'application).", "Donnez le nom que vous voulez à votre liste, par exemple DenvayStream.", "Saisissez le nom d'utilisateur, le mot de passe et l'URL du serveur que nous vous avons envoyés.", "Appuyez sur Add user ou Login et attendez le chargement des chaînes."] },
      { type: "h2", text: "Conseils pour une meilleure image" },
      { type: "ul", items: ["Sur Apple TV, utilisez un câble réseau si possible.", "Sur iPhone et iPad, restez près de votre box ou utilisez le Wi-Fi 5 GHz.", "Si une chaîne s'arrête, fermez complètement l'application et rouvrez-la.", "N'activez le mode économie d'énergie qu'en cas de besoin, car il peut ralentir la vidéo."] },
      { type: "h2", text: "Regarder sur un plus grand écran" },
      { type: "p", text: "Vous pouvez envoyer l'image de votre iPhone ou iPad vers une TV avec AirPlay. Pour le meilleur résultat sur une TV, installez plutôt l'application directement sur une Apple TV." },
      { type: "tip", text: "Vous ne savez pas quelle application choisir pour votre appareil Apple ? Demandez-nous sur WhatsApp et nous vous enverrons des instructions simples." },
    ],
    faqs: [
      ["Puis-je regarder l'IPTV sur un iPhone ?", "Oui. Installez une application IPTV depuis l'App Store, puis connectez-vous avec les identifiants de votre abonnement."],
      ["Quelle est la meilleure application IPTV pour Apple TV ?", "IPTV Smarters Pro et GSE Smart IPTV sont des choix populaires sur Apple TV. Les deux acceptent la connexion avec nom d'utilisateur, mot de passe et URL du serveur."],
      ["Faut-il un abonnement différent pour chaque appareil Apple ?", "Non. Vous pouvez installer l'application sur plusieurs appareils, mais chaque abonnement ne permet de regarder que sur un appareil à la fois."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Comment installer l'IPTV sur Android TV, box Android et téléphone Android",
    excerpt: "Installez l'IPTV sur n'importe quel appareil Android — Android TV, box, téléphone ou tablette : un lecteur depuis Google Play, la connexion, et une image fluide et stable.",
    heroAlt: "L'IPTV sur Android TV, box TV et téléphone.",
    takeaways: [
      "Les appareils Android peuvent installer des lecteurs IPTV directement depuis Google Play.",
      "TiviMate est excellent sur TV ; IPTV Smarters Pro fonctionne bien sur téléphone.",
      "Connectez-vous avec le nom d'utilisateur, le mot de passe et l'URL du serveur que nous vous envoyons.",
      "Redémarrer l'appareil et vider le cache de l'application règle la plupart des problèmes.",
    ],
    body: [
      { type: "p", text: "Android est l'un des systèmes les plus simples pour l'IPTV. Les Android TV, box Android TV, téléphones et tablettes peuvent tous installer une application depuis Google Play en quelques minutes." },
      { type: "h2", text: "Étape 1 — Installez une application" },
      { type: "ol", items: ["Ouvrez Google Play sur votre appareil.", "Cherchez « TiviMate » (idéal sur TV) ou « IPTV Smarters Pro » (bien sur téléphone et TV).", "Installez l'application et ouvrez-la."] },
      { type: "h2", text: "Étape 2 — Ajoutez votre abonnement" },
      { type: "ol", items: ["Choisissez « Add playlist » ou « Login with Xtream Codes ».", "Saisissez l'URL du serveur, le nom d'utilisateur et le mot de passe que nous vous avons envoyés.", "Attendez que l'application charge vos chaînes, vos films et le guide TV."] },
      { type: "h2", text: "Étape 3 — Rendez-la fluide" },
      { type: "ul", items: ["Branchez votre box TV avec un câble réseau si possible.", "Redémarrez la box une fois par semaine.", "Videz le cache de l'application si les chaînes commencent à se figer (Paramètres → Applications → votre appli → Stockage → Vider le cache).", "Gardez au moins 1 Go d'espace libre sur l'appareil."] },
      { type: "h2", text: "Téléphones et tablettes" },
      { type: "p", text: "Sur un téléphone, vous pouvez regarder chez vous ou en voyage. Utilisez le Wi-Fi quand c'est possible, car la vidéo consomme beaucoup de données mobiles. Une heure de vidéo HD peut utiliser environ 1 à 3 Go." },
      { type: "tip", text: "Donnez-nous le modèle de votre appareil sur WhatsApp et nous vous dirons quelle application lui convient le mieux." },
    ],
    faqs: [
      ["Quelle est la meilleure application IPTV pour Android TV ?", "TiviMate est l'un des meilleurs lecteurs IPTV pour Android TV et box Android. IPTV Smarters Pro est un bon choix gratuit."],
      ["Puis-je regarder l'IPTV sur mon téléphone Android en 4G/5G ?", "Oui, mais la vidéo consomme beaucoup de données — environ 1 à 3 Go par heure en HD. Utilisez le Wi-Fi quand vous pouvez."],
      ["Pourquoi ma box Android se fige-t-elle ?", "Les raisons les plus fréquentes sont un Wi-Fi faible, un espace de stockage presque plein ou un cache plein. Utilisez un câble, libérez de l'espace et videz le cache."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Comment regarder l'IPTV sur PC Windows et Mac",
    excerpt: "Regardez l'IPTV sur un PC Windows, un portable ou un Mac avec des lecteurs gratuits comme VLC ou IPTV Smarters. Des étapes simples pour ajouter votre abonnement et regarder.",
    heroAlt: "L'IPTV sur Windows et Mac : un ordinateur portable qui lit une vidéo.",
    takeaways: [
      "Vous pouvez regarder l'IPTV sur un ordinateur avec des applications gratuites comme VLC ou IPTV Smarters.",
      "VLC utilise votre lien M3U ; IPTV Smarters utilise votre nom d'utilisateur, votre mot de passe et l'URL du serveur.",
      "Une connexion par câble donne l'image la plus stable sur ordinateur.",
      "Reliez votre portable à une TV avec un câble HDMI pour regarder sur grand écran.",
    ],
    body: [
      { type: "p", text: "Un ordinateur est une façon simple de regarder l'IPTV, chez vous ou en voyage. Vous pouvez utiliser un lecteur gratuit et regarder en quelques minutes." },
      { type: "h2", text: "Option 1 — VLC (gratuit, très simple)" },
      { type: "ol", items: ["Téléchargez VLC depuis son site officiel et installez-le.", "Ouvrez VLC et cliquez sur Média → Ouvrir un flux réseau (sur Mac : Fichier → Ouvrir le réseau).", "Collez le lien M3U que nous vous avons envoyé et cliquez sur Lire.", "Ouvrez la vue liste de lecture pour voir votre liste de chaînes."] },
      { type: "h2", text: "Option 2 — IPTV Smarters (avec guide TV)" },
      { type: "ol", items: ["Téléchargez IPTV Smarters pour Windows ou Mac depuis son site officiel.", "Ouvrez l'application et choisissez « Login with Xtream Codes API ».", "Saisissez le nom d'utilisateur, le mot de passe et l'URL du serveur que nous vous avons envoyés.", "Attendez le chargement des chaînes, des films et du guide TV."] },
      { type: "h2", text: "Regarder sur votre TV" },
      { type: "p", text: "Reliez votre ordinateur portable à votre TV avec un câble HDMI. Sur la TV, choisissez la bonne entrée HDMI. Sur Windows, appuyez sur la touche Windows + P pour choisir le mode d'affichage." },
      { type: "h2", text: "Conseils" },
      { type: "ul", items: ["Fermez les autres programmes qui utilisent internet, comme les téléchargements.", "Utilisez un câble réseau si votre Wi-Fi est faible.", "Gardez votre application à jour."] },
      { type: "tip", text: "Besoin de votre lien M3U ou d'aide avec l'application ? Écrivez-nous sur WhatsApp." },
    ],
    faqs: [
      ["Puis-je regarder l'IPTV sur un ordinateur portable ?", "Oui. Installez un lecteur gratuit comme VLC ou IPTV Smarters, ajoutez les informations de votre abonnement et regardez."],
      ["Quel est le meilleur lecteur IPTV pour Windows ?", "VLC est l'option gratuite la plus simple. IPTV Smarters pour Windows est mieux si vous voulez un guide TV et un menu comme sur une TV."],
      ["Puis-je regarder l'IPTV sur un Mac ?", "Oui. VLC et IPTV Smarters fonctionnent tous les deux sur Mac."],
    ],
  },
};

export default posts;
