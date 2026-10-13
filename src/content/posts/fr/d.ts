import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("fr");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "L'IPTV en 2026 : le guide complet (fonctionnement, appareils, prix et sécurité)",
    excerpt: "Tout savoir sur l'IPTV en 2026 : comment ça marche, ce qu'il faut, les appareils, la vitesse internet, les prix, comment choisir un bon service et comment commencer.",
    heroAlt: "Guide complet de l'IPTV 2026 : un livre ouvert.",
    takeaways: [
      "L'IPTV, c'est la TV diffusée par internet au lieu d'une parabole ou du câble.",
      "Il faut trois choses : un appareil compatible, une application de lecture et une connexion internet stable (10 Mbit/s pour la HD, 25 Mbit/s pour la 4K).",
      "L'IPTV coûte en général moins cher que le câble ou le satellite, sans long engagement.",
      "Choisissez un service avec essai gratuit, politiques claires et vrai support — et testez-le d'abord sur votre appareil.",
      "La plupart des problèmes, comme les coupures, viennent du Wi-Fi ou de l'appareil et se règlent facilement.",
    ],
    body: [
      { type: "p", text: "L'IPTV (télévision par protocole internet) est une façon de regarder la TV par votre connexion internet. Au lieu de recevoir les chaînes par une parabole ou une prise câble, l'image voyage sous forme de données depuis un serveur jusqu'à une application sur votre TV, votre téléphone ou votre ordinateur. Ce guide explique comment fonctionne l'IPTV, ce qu'il faut, combien cela coûte, et comment choisir et installer un service — avec des mots simples." },

      { type: "h2", text: "Qu'est-ce que l'IPTV ?" },
      { type: "p", text: "L'IPTV, c'est la télévision diffusée avec la même technologie que le reste d'internet. Votre appareil télécharge un petit morceau de vidéo, le lit, puis télécharge le suivant, encore et encore. C'est pourquoi vous pouvez regarder sur presque tous les écrans connectés à internet — chez vous ou en voyage." },
      { type: "p", text: "Les grands opérateurs télécom utilisent la technologie IPTV pour leurs propres offres TV, et de nombreux services indépendants proposent des abonnements IPTV compatibles avec les applications de lecture populaires. La technologie est la même ; ce qui change, c'est le service, ses contenus et sa qualité." },

      { type: "h2", text: "Comment fonctionne l'IPTV ?" },
      { type: "p", text: "Chaque service IPTV suit le même chemin, de la source à votre écran :" },
      { type: "ol", items: [
        "Encodage : le fournisseur transforme chaque chaîne ou vidéo en flux numérique dans différentes qualités (par exemple HD, Full HD et 4K).",
        "Serveurs : les flux sont stockés ou passent par des serveurs puissants qui les envoient aux spectateurs.",
        "Diffusion : quand vous choisissez une chaîne, le serveur envoie le flux à votre appareil par internet.",
        "Lecture : une application sur votre appareil décode le flux et affiche l'image, le son et le guide TV.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Comment fonctionne l'IPTV : de l'encodage à votre écran en 4 étapes." },
      { type: "p", text: "La qualité que vous voyez dépend de chaque étape : de bons serveurs, une connexion internet stable et un appareil performant. Si l'un d'eux est faible, vous pouvez avoir des coupures." },

      { type: "h2", text: "IPTV, câble, satellite et applications de streaming" },
      { type: "table", caption: "L'IPTV comparée aux autres façons de regarder la TV", head: ["", "IPTV", "Câble", "Satellite", "Applis de streaming"], rows: [
        ["Chaînes TV en direct", "Oui", "Oui", "Oui", "En général non"],
        ["Films et séries à la demande", "Oui", "Limité", "Limité", "Oui"],
        ["Installation nécessaire", "Non", "Souvent", "Oui (parabole)", "Non"],
        ["Engagement", "En général aucun", "12–24 mois", "12–24 mois", "Mensuel"],
        ["Téléphone, TV et PC", "Oui", "Limité", "Limité", "Oui"],
        ["Dépend de la vitesse internet", "Oui", "Non", "Non", "Oui"],
        ["Sensible à la météo", "Non", "Non", "Oui", "Non"],
      ] },
      { type: "p", text: "En bref : l'IPTV vous donne la TV en direct comme le câble, la souplesse des applications de streaming, et ni parabole ni technicien. Sa principale exigence est une bonne connexion internet." },
      { type: "links", title: "À lire aussi", items: [["IPTV, câble ou satellite : le comparatif complet", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "Que peut-on regarder avec l'IPTV ?" },
      { type: "h3", text: "La TV en direct" },
      { type: "p", text: "Des chaînes que vous regardez en même temps que leur diffusion — infos, sport, divertissement, enfants et chaînes internationales — avec un guide TV qui montre ce qui passe maintenant et ensuite." },
      { type: "h3", text: "La vidéo à la demande (VOD)" },
      { type: "p", text: "Une bibliothèque de films et de séries que vous pouvez lancer, mettre en pause et revoir quand vous voulez." },
      { type: "h3", text: "Le replay" },
      { type: "p", text: "Les programmes diffusés ces derniers jours, à regarder plus tard. Cette fonction dépend de la chaîne et de votre application." },

      { type: "h2", text: "Que faut-il pour regarder l'IPTV ?" },
      { type: "ul", items: [
        "Un appareil compatible : Smart TV, Amazon Firestick, box Android TV, téléphone, tablette, ordinateur ou box MAG.",
        "Une application de lecture, comme TiviMate, IPTV Smarters, IBO Player ou VLC. L'application ne contient pas de chaînes.",
        "Un abonnement IPTV, qui vous donne des identifiants (nom d'utilisateur, mot de passe et URL du serveur) ou un lien M3U.",
        "Une connexion internet stable — idéalement avec un câble réseau pour les TV et box TV.",
      ] },

      { type: "h2", text: "Quelle vitesse internet faut-il ?" },
      { type: "table", caption: "Vitesse internet recommandée par flux", head: ["Qualité d'image", "Vitesse minimale", "Recommandé"], rows: [
        ["SD", "3 Mbit/s", "5 Mbit/s"],
        ["HD (720p)", "7 Mbit/s", "10 Mbit/s"],
        ["Full HD (1080p)", "10 Mbit/s", "15 Mbit/s"],
        ["4K Ultra HD", "20 Mbit/s", "25 Mbit/s ou plus"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Vitesse internet recommandée pour un écran, selon la qualité d'image." },
      { type: "p", text: "Ces chiffres valent pour un écran. Si plusieurs personnes regardent en même temps, additionnez les vitesses. Testez toujours la vitesse sur l'appareil utilisé, pas sur votre téléphone à côté de la box." },
      { type: "links", title: "À lire aussi", items: [["Quelle vitesse internet pour l'IPTV ?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "Quels appareils fonctionnent avec l'IPTV ?" },
      { type: "p", text: "Presque tous les écrans modernes peuvent lire l'IPTV. Le meilleur choix dépend de ce que vous avez déjà :" },
      { type: "figure", name: "devices", caption: "L'IPTV fonctionne sur Smart TV, clés de streaming, box TV, téléphones, tablettes et ordinateurs." },
      { type: "ul", items: [
        "Amazon Firestick : pas cher, petit et très populaire. Un excellent choix pour la plupart des gens.",
        "Smart TV (Samsung, LG) : aucun appareil en plus, mais le choix d'applications peut être limité sur les anciens modèles.",
        "Box Android TV : puissantes et souples, avec le plus grand choix d'applications.",
        "iPhone, iPad et Apple TV : fluides et simples, avec des applications de l'App Store.",
        "Box MAG : faites uniquement pour l'IPTV et très simples avec une télécommande.",
        "Ordinateurs Windows et Mac : simples avec des applications gratuites comme VLC.",
      ] },
      { type: "links", title: "Guides d'installation pas à pas", items: [
        ["Tous les guides d'installation par appareil", "/setup"],
        ["L'IPTV sur Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["L'IPTV sur Smart TV Samsung et LG", "/blog/iptv-smart-tv-samsung-lg"],
        ["L'IPTV sur Android TV, box et téléphone", "/blog/iptv-on-android-tv-box-phone"],
        ["L'IPTV sur iPhone, iPad et Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["L'IPTV sur box MAG", "/blog/iptv-on-mag-box"],
        ["L'IPTV sur Windows et Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "Combien coûte l'IPTV ?" },
      { type: "p", text: `Le prix de l'IPTV dépend du service et de la durée de l'abonnement. Les abonnements longs coûtent presque toujours moins cher par mois. Par exemple, les abonnements DenvayStream commencent à ${p.cheapest} pour 3 mois, et l'abonnement 2 ans revient à ${p.monthly} par mois — avec toutes les fonctionnalités incluses dans chaque abonnement.` },
      { type: "p", text: "Comparée au câble ou au satellite, l'IPTV n'a en général ni frais d'installation, ni location de matériel, ni long engagement. Méfiez-vous des prix trop bas : les services très bon marché ont souvent des serveurs instables et pas de vrai support." },
      { type: "links", title: "Voir les prix", items: [["Abonnements et tarifs DenvayStream", "/pricing"]] },
      { type: "cta", title: "Pas encore sûr ? Testez l'IPTV gratuitement pendant 24 heures", text: "Vérifiez la qualité d'image, les chaînes et la stabilité sur votre appareil et votre connexion — avant de payer quoi que ce soit." },

      { type: "h2", text: "Comment choisir un bon service IPTV" },
      { type: "p", text: "Tous les services IPTV ne se valent pas. Utilisez cette checklist avant de payer :" },
      { type: "ol", items: [
        "Essai gratuit : un bon service vous laisse tester sur votre appareil avant d'acheter.",
        "Serveurs stables : regardez aux heures chargées du soir et pendant un direct pour tester la stabilité.",
        "Qualité d'image : vérifiez la HD, la Full HD et la 4K sur votre écran.",
        "Vrai support : posez une question et voyez s'il répond vite et bien.",
        "Politiques claires : cherchez des conditions d'utilisation, une politique de confidentialité, de remboursement et DMCA.",
        "Règles justes : pas de long engagement, pas de renouvellement automatique non demandé, et un délai de remboursement clair.",
        "Compatibilité : vérifiez qu'il fonctionne avec vos appareils et applications.",
      ] },
      { type: "links", title: "À lire aussi", items: [["Comment tester un service IPTV avec un essai gratuit", "/blog/how-to-test-iptv-free-trial"], ["Les meilleures applications IPTV", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "L'IPTV est-elle légale et sûre ?" },
      { type: "p", text: "La technologie IPTV est légale — c'est simplement une façon de diffuser de la vidéo par internet. La légalité d'un service précis dépend de ses licences pour ses contenus et des lois de votre pays. Pour rester en sécurité, choisissez un fournisseur avec des politiques publiques claires, payez par des moyens sécurisés et ne donnez jamais vos données de carte complètes par chat." },
      { type: "links", title: "À lire aussi", items: [["L'IPTV est-elle légale ? Ce qu'il faut savoir", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Problèmes IPTV courants et solutions rapides" },
      { type: "table", caption: "Les problèmes IPTV les plus courants et comment les régler", head: ["Problème", "Cause la plus probable", "Solution rapide"], rows: [
        ["Coupures ou image figée", "Wi-Fi faible ou internet lent", "Utilisez un câble réseau et redémarrez votre box"],
        ["Les chaînes ne se chargent pas", "Mauvais identifiants", "Vérifiez l'URL du serveur, le nom d'utilisateur et le mot de passe"],
        ["Le guide TV est vide", "Guide pas encore chargé", "Actualisez le guide TV dans les réglages de l'application"],
        ["L'application est lente", "Mémoire ou cache plein", "Videz le cache et redémarrez l'appareil"],
        ["Problèmes seulement le soir", "Fournisseur internet saturé", "Passez en Full HD aux heures chargées"],
      ] },
      { type: "links", title: "À lire aussi", items: [["Coupures IPTV : 9 solutions qui marchent", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Commencer l'IPTV en 5 étapes" },
      { type: "ol", items: [
        "Vérifiez votre vitesse internet sur l'appareil que vous utiliserez.",
        "Choisissez votre appareil et installez une application de lecture.",
        "Demandez un essai gratuit pour tester le service chez vous.",
        "Si vous êtes satisfait, choisissez un abonnement — les longs coûtent moins cher par mois.",
        "Connectez-vous à votre application avec les identifiants reçus et regardez.",
      ] },
      { type: "figure", name: "start-steps", caption: "De zéro à la TV : les 5 étapes pour commencer l'IPTV." },

      { type: "h2", text: "L'avenir de l'IPTV" },
      { type: "p", text: "De plus en plus de gens regardent la TV sur plusieurs écrans, et les connexions internet sont toujours plus rapides. C'est pourquoi l'IPTV continue de grandir. Attendez-vous à plus de contenus 4K, de meilleurs guides TV, des applications plus intelligentes et des changements de chaîne plus rapides dans les prochaines années. Un meilleur internet à la maison, comme la fibre et le Wi-Fi rapide, signifie aussi moins de problèmes de qualité." },

      { type: "h2", text: "Les mots de l'IPTV à connaître" },
      { type: "p", text: "Vous verrez souvent des mots comme M3U, EPG, adresse MAC, URL du serveur, VOD et replay. Notre lexique explique chacun en une ou deux phrases simples." },
      { type: "links", title: "Apprendre les mots", items: [["Lexique IPTV : les mots de l'IPTV expliqués simplement", "/glossary"], ["Qu'est-ce que l'IPTV ? Le guide du débutant", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "Envie de voir l'IPTV sur votre propre TV ? Demandez un essai gratuit DenvayStream de 24 heures — sans données de paiement." },
    ],
    faqs: [
      ["Qu'est-ce que l'IPTV en mots simples ?", "L'IPTV, c'est la TV qui arrive par votre connexion internet au lieu d'une parabole ou du câble. Vous la regardez avec une application sur votre TV, téléphone, tablette ou ordinateur."],
      ["Comment fonctionne l'IPTV ?", "Un fournisseur transforme les chaînes et les vidéos en flux numériques et les envoie depuis ses serveurs par internet. Une application sur votre appareil reçoit le flux et affiche l'image."],
      ["Que faut-il pour regarder l'IPTV ?", "Un appareil compatible, une application de lecture, un abonnement IPTV et une connexion internet stable — au moins 10 Mbit/s pour la HD et 25 Mbit/s pour la 4K."],
      ["L'IPTV est-elle meilleure que le câble ?", "Pour la plupart des foyers avec un bon internet, l'IPTV est moins chère, sans engagement et fonctionne sur plus d'appareils. Le câble peut être plus stable si votre internet est lent."],
      ["Puis-je regarder l'IPTV sur plusieurs appareils ?", "Oui, vous pouvez installer l'application sur plusieurs appareils. Le nombre d'appareils qui peuvent regarder en même temps dépend de votre abonnement — en général, une connexion = un appareil à la fois."],
      ["Combien coûte l'IPTV par mois ?", `Cela dépend du service et de la durée. Chez DenvayStream, les abonnements commencent à ${p.cheapest} pour 3 mois, et l'abonnement 2 ans coûte ${p.monthly} par mois.`],
      ["Faut-il un VPN pour l'IPTV ?", "Non, un VPN n'est pas nécessaire. Certains en utilisent un si leur fournisseur internet ralentit la vidéo aux heures chargées."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Essai IPTV gratuit 24 heures : comment l'obtenir et quoi tester (2026)",
    excerpt: "Obtenez un essai IPTV gratuit de 24 heures sans carte bancaire. Ce qui est inclus, comment l'avoir en quelques minutes, quoi tester et comment repérer un essai sûr.",
    heroAlt: "Essai IPTV gratuit de 24 heures : une TV en 4K en direct avec un badge essai gratuit 24h, sans carte bancaire.",
    takeaways: [
      "Un essai IPTV gratuit de 24 heures vous permet de tester tout le service sur votre appareil avant de payer.",
      "Un bon essai ne demande pas de carte bancaire, donne un accès complet et est prêt en quelques minutes.",
      "Testez le soir et pendant le sport en direct — c'est là que les serveurs sont le plus sollicités.",
      "À la fin de l'essai, rien n'est facturé. Vous choisissez un abonnement seulement si vous êtes satisfait.",
    ],
    body: [
      { type: "p", text: "Un essai IPTV gratuit est un test court et gratuit d'un service IPTV. La plupart des essais durent 24 heures. Pendant ce temps, vous pouvez regarder la TV en direct, des films et des séries sur votre TV ou votre téléphone, pour vérifier la qualité avant d'acheter un abonnement. Ce guide explique comment fonctionne un essai de 24 heures, comment l'obtenir, quoi tester et comment distinguer un essai sûr d'un essai risqué." },

      { type: "h2", text: "Qu'est-ce qu'un essai IPTV gratuit de 24 heures ?" },
      { type: "p", text: "Un essai IPTV gratuit de 24 heures est un accès temporaire et gratuit à un service IPTV. Le fournisseur vous envoie des identifiants de test — en général un nom d'utilisateur, un mot de passe et une URL de serveur — valables 24 heures. Vous les ajoutez dans une application sur votre appareil, et vous utilisez le service comme un client." },
      { type: "p", text: "Le but est simple : voir la vraie qualité d'image, la stabilité et la vitesse de chargement des chaînes sur votre appareil et votre connexion — pas sur une vidéo de démonstration." },

      { type: "h2", text: "Pourquoi 24 heures, c'est la bonne durée" },
      { type: "ul", items: [
        "Cela couvre une journée entière, y compris les heures chargées du soir où les serveurs sont le plus sollicités.",
        "C'est assez long pour tester la TV en direct, les films, le guide TV et plusieurs appareils.",
        "C'est assez court pour décider vite, sans oublier de tester.",
      ] },

      { type: "h2", text: "Comment se passe l'essai gratuit, étape par étape" },
      { type: "figure", name: "trial-timeline", caption: "Les 4 étapes d'un essai IPTV gratuit de 24 heures — de la demande à la décision." },
      { type: "ol", items: [
        "Demande : remplissez un court formulaire avec votre prénom, votre appareil et votre application. Chez DenvayStream, il ouvre WhatsApp avec votre demande prête à envoyer.",
        "Identifiants : l'équipe vous envoie vos accès de test et un guide d'installation pour votre appareil, en général en quelques minutes.",
        "Test : installez l'application, connectez-vous et utilisez le service pendant 24 heures.",
        "Décision : s'il vous plaît, choisissez un abonnement. Sinon, arrêtez simplement — rien n'est facturé.",
      ] },
      { type: "links", title: "Obtenir votre essai", items: [["Demander un essai gratuit DenvayStream de 24 heures", "/free-trial"]] },

      { type: "h2", text: "Qu'est-ce qui est inclus dans l'essai ?" },
      { type: "p", text: "Un bon essai IPTV n'est pas une démo limitée. Il doit vous donner le même service que les clients payants :" },
      { type: "table", caption: "Essai gratuit comparé à un abonnement payant", head: ["Critère", "Essai gratuit de 24 heures", "Abonnement payant"], rows: [
        ["Chaînes TV en direct", "Oui", "Oui"],
        ["Films et séries (VOD)", "Oui", "Oui"],
        ["Serveurs de haute qualité", "Oui", "Oui"],
        ["4K / Full HD / HD", "Oui", "Oui"],
        ["Guide TV et replay", "Oui", "Oui"],
        ["Support", "Oui", "Oui, 24h/24"],
        ["Durée", "24 heures", "3 mois à 2 ans"],
        ["Prix", "Gratuit", `Dès ${p.cheapest}`],
      ] },

      { type: "h2", text: "Que faut-il avant de commencer l'essai ?" },
      { type: "ul", items: [
        "Un appareil compatible : Smart TV, Firestick, box Android, téléphone, tablette, ordinateur ou box MAG.",
        "Une application installée à l'avance, pour ne pas perdre de temps d'essai.",
        "Une connexion internet stable : au moins 10 Mbit/s pour la HD et 25 Mbit/s pour la 4K.",
        "Une courte liste des types de chaînes et d'émissions que vous regardez le plus.",
      ] },
      { type: "links", title: "Préparer votre appareil", items: [["Guides d'installation pour chaque appareil", "/setup"], ["Quelle vitesse internet faut-il ?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "Prêt à tester ? Votre essai gratuit se demande en 30 secondes", text: "Accès complet pendant 24 heures, sur votre propre appareil. Sans carte bancaire, sans engagement." },

      { type: "h2", text: "Quoi tester en 24 heures" },
      { type: "p", text: "Utilisez bien votre essai. Voici les tests qui en disent le plus sur un service IPTV :" },
      { type: "ol", items: [
        "Stabilité de l'image : regardez une chaîne au moins 30 minutes.",
        "Changement de chaîne : zappez plusieurs fois et voyez la vitesse de démarrage.",
        "Test du soir : regardez à nouveau entre 19 h et 23 h, quand les serveurs sont le plus chargés.",
        "Sport en direct : regardez un match en direct si possible — c'est le test le plus exigeant.",
        "Qualité d'image : comparez la HD, la Full HD et la 4K sur votre écran.",
        "Guide TV : vérifiez qu'il affiche ce qui passe maintenant et ensuite.",
        "Films et séries : lancez quelques titres, mettez en pause et avancez.",
        "Second appareil : essayez l'essai sur votre téléphone ou une autre TV.",
        "Support : posez une question et voyez s'il répond vite et bien.",
      ] },
      { type: "links", title: "Checklist complète", items: [["Comment tester un service IPTV avec un essai gratuit (checklist)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "Essai sûr ou essai risqué ? Comment faire la différence" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "Les signes d'un essai IPTV sûr — et les signaux d'alerte d'un essai risqué." },
      { type: "p", text: "Un essai sûr ne demande jamais vos données de carte, donne un accès complet et vient d'un fournisseur avec des politiques publiques claires et un vrai support. Méfiez-vous si un essai demande des données de paiement, ne montre que quelques chaînes ou vous pousse à acheter tout de suite un long abonnement." },

      { type: "h2", text: "Peut-on avoir un essai IPTV gratuit sans carte bancaire ?" },
      { type: "p", text: "Oui. Un essai IPTV de confiance ne devrait jamais demander votre carte bancaire. Chez DenvayStream, vous donnez seulement votre prénom, votre appareil et votre application. Comme aucune donnée de paiement n'est prise, vous ne risquez pas d'être facturé à la fin de l'essai." },

      { type: "h2", text: "Que se passe-t-il à la fin de l'essai ?" },
      { type: "p", text: `Vos identifiants de test cessent simplement de fonctionner après 24 heures. Rien n'est facturé et aucun abonnement ne démarre automatiquement. S'il vous a plu, vous pouvez choisir un abonnement et souvent garder la même application déjà installée. Les abonnements DenvayStream commencent à ${p.cheapest} pour 3 mois, et l'abonnement 2 ans revient à ${p.monthly} par mois.` },
      { type: "links", title: "Après votre essai", items: [["Voir tous les abonnements et tarifs", "/pricing"], ["Notre garantie satisfait ou remboursé de 7 jours", "/legal/refund-policy"]] },

      { type: "h2", text: "Conseils pour profiter au maximum de votre essai" },
      { type: "ul", items: [
        "Lancez l'essai à un moment où vous pouvez regarder — par exemple le week-end ou le soir.",
        "Utilisez un câble réseau pour les TV et box TV si possible.",
        "Faites d'abord un test de vitesse sur l'appareil que vous utiliserez.",
        "Notez chaque problème et demandez au support — sa façon d'aider fait partie du test.",
        "Testez sur l'appareil que vous utiliserez tous les jours, pas seulement sur votre téléphone.",
      ] },

      { type: "h2", text: "Problèmes pendant l'essai et solutions rapides" },
      { type: "table", caption: "Problèmes courants pendant l'essai gratuit", head: ["Problème", "Solution rapide"], rows: [
        ["La connexion ne marche pas", "Vérifiez l'URL du serveur, le nom d'utilisateur et le mot de passe — une seule lettre fausse bloque tout"],
        ["Les chaînes ne se chargent pas", "Attendez 1 à 2 minutes la première fois, puis redémarrez l'application"],
        ["L'image se fige", "Utilisez un câble, redémarrez votre box et passez en Full HD"],
        ["Le guide TV est vide", "Actualisez le guide TV dans les réglages de l'application"],
      ] },
      { type: "links", title: "Plus d'aide", items: [["Coupures IPTV : 9 solutions qui marchent", "/blog/fix-iptv-buffering"], ["Qu'est-ce qu'un essai gratuit ? (lexique)", "/glossary#trial"]] },

      { type: "tip", text: "Demandez maintenant votre essai gratuit DenvayStream de 24 heures — sans données de paiement, avec accès complet et aide à l'installation sur WhatsApp." },
    ],
    faqs: [
      ["Existe-t-il un essai IPTV gratuit de 24 heures ?", "Oui. DenvayStream propose un essai IPTV gratuit de 24 heures avec accès complet à la TV en direct, aux films et aux séries. Aucune carte bancaire n'est nécessaire."],
      ["Comment obtenir un essai IPTV gratuit ?", "Remplissez le court formulaire de la page essai gratuit avec votre prénom, votre appareil et votre application. Il ouvre WhatsApp avec votre demande, et nous vous envoyons vos identifiants de test et un guide d'installation, en général en quelques minutes."],
      ["Faut-il une carte bancaire pour l'essai IPTV gratuit ?", "Non. L'essai est entièrement gratuit et nous ne demandons jamais de données de paiement : vous ne pouvez pas être facturé à la fin."],
      ["Que puis-je regarder pendant l'essai gratuit ?", "Le même service que les clients payants : chaînes TV en direct, films et séries, guide TV et replay, en 4K, Full HD et HD selon disponibilité."],
      ["Puis-je utiliser l'essai gratuit sur ma Smart TV ou mon Firestick ?", "Oui. L'essai fonctionne sur Smart TV, Firestick, box Android, iPhone, iPad, téléphones Android, Apple TV, box MAG et ordinateurs."],
      ["Que se passe-t-il après l'essai de 24 heures ?", "Les identifiants de test cessent de fonctionner et rien n'est facturé. Si vous êtes satisfait, vous pouvez choisir un abonnement et continuer à regarder."],
      ["Puis-je obtenir plusieurs essais gratuits ?", "Les essais gratuits sont limités à un par client, foyer et appareil, afin de pouvoir continuer à en offrir aux nouveaux clients."],
    ],
  },
};

export default posts;
