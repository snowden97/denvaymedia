import type { TermText } from "@/lib/glossary";

const fr: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Une image très nette, quatre fois plus détaillée que la Full HD. Il faut environ 25 Mbit/s de vitesse internet pour un flux 4K.", linkLabel: "Vitesse internet pour l'IPTV" },
  "anti-freeze": { term: "Anti-freeze", definition: "Une technologie serveur qui répartit les spectateurs sur plusieurs serveurs, pour que l'image ne se bloque pas quand beaucoup de gens regardent en même temps." },
  buffering: { term: "Mise en mémoire tampon (coupures)", definition: "Quand la vidéo s'arrête un moment pour charger plus de données. C'est souvent dû à un Wi-Fi faible, un appareil lent ou une connexion internet chargée.", linkLabel: "Comment corriger les coupures" },
  "catch-up": { term: "Replay (catch-up)", definition: "Une fonction qui permet de regarder à tout moment des programmes diffusés ces derniers jours." },
  connection: { term: "Connexion", definition: "Le nombre d'appareils qui peuvent regarder en même temps avec un abonnement. Une connexion = un appareil à la fois." },
  credit: { term: "Crédit (revendeur)", definition: "L'unité qu'un revendeur utilise pour créer des abonnements. Chez DenvayStream, 1 crédit = 1 mois de service pour un client.", linkLabel: "Packs de crédits revendeur" },
  epg: { term: "EPG (guide TV)", definition: "Electronic Programme Guide. Une liste à l'écran qui montre ce qui passe maintenant et ensuite sur chaque chaîne." },
  ethernet: { term: "Câble Ethernet", definition: "Un câble réseau qui relie directement votre TV ou votre box à votre routeur. Il donne une connexion plus stable que le Wi-Fi." },
  fhd: { term: "FHD (Full HD)", definition: "Une image claire et nette en 1080 lignes (1080p). Il faut environ 15 Mbit/s de vitesse internet pour un flux Full HD." },
  firestick: { term: "Firestick", definition: "Une petite clé de streaming d'Amazon qui se branche sur le port HDMI de votre TV. C'est l'un des appareils les plus utilisés pour l'IPTV.", linkLabel: "Guide d'installation Firestick" },
  hd: { term: "HD", definition: "Haute définition. Une bonne image en 720 lignes (720p). Il faut environ 10 Mbit/s de vitesse internet pour un flux HD." },
  iptv: { term: "IPTV", definition: "Télévision par protocole internet. Des chaînes TV, des films et des séries livrés par votre connexion internet au lieu d'une parabole ou du câble.", linkLabel: "Qu'est-ce que l'IPTV ?" },
  "live-tv": { term: "TV en direct", definition: "Des chaînes que vous regardez en même temps que leur diffusion, comme la TV classique." },
  m3u: { term: "Lien M3U (playlist)", definition: "Un lien web ou un fichier qui contient la liste des chaînes de votre abonnement. Vous pouvez le coller dans des lecteurs comme VLC." },
  "mac-address": { term: "Adresse MAC", definition: "Un code unique qui identifie votre appareil, par exemple 00:1A:79:XX:XX:XX. Les box MAG et certaines applications de Smart TV l'utilisent pour relier votre abonnement.", linkLabel: "Guide d'installation box MAG" },
  "mag-box": { term: "Box MAG", definition: "Un petit boîtier TV fait uniquement pour l'IPTV. Il utilise une URL de portail et se pilote facilement avec une télécommande.", linkLabel: "Guide d'installation box MAG" },
  mbps: { term: "Mbit/s (Mbps)", definition: "Mégabits par seconde. L'unité de mesure de la vitesse internet. Plus de Mbit/s = une connexion plus rapide." },
  "player-app": { term: "Application de lecture", definition: "L'application utilisée pour regarder l'IPTV, comme TiviMate, IPTV Smarters ou VLC. L'application ne contient pas de chaînes — elles viennent de votre abonnement.", linkLabel: "Meilleures applications IPTV" },
  "portal-url": { term: "URL de portail", definition: "Une adresse web que vous saisissez dans une box MAG (et certaines applications) pour charger votre service IPTV." },
  "reseller-panel": { term: "Panneau revendeur", definition: "Un site web où les revendeurs créent, renouvellent et gèrent les abonnements de leurs clients avec des crédits.", linkLabel: "Comment devenir revendeur" },
  "server-url": { term: "URL du serveur", definition: "L'adresse web du serveur IPTV. Vous la saisissez dans votre application avec votre nom d'utilisateur et votre mot de passe." },
  "smart-tv": { term: "Smart TV", definition: "Une TV connectée à internet qui peut installer des applications. La plupart des Smart TV Samsung et LG peuvent faire tourner des applications IPTV directement.", linkLabel: "Guide d'installation Smart TV" },
  trial: { term: "Essai gratuit", definition: "Un court test du service avant de payer. DenvayStream propose un essai gratuit de 24 heures avec accès complet.", linkLabel: "Obtenir un essai gratuit" },
  vod: { term: "VOD (vidéo à la demande)", definition: "Des films et des séries que vous pouvez lancer quand vous voulez, mettre en pause et revoir." },
  vpn: { term: "VPN", definition: "Un service qui masque et protège votre trafic internet. Il n'est pas nécessaire pour l'IPTV, mais certains l'utilisent si leur fournisseur internet ralentit la vidéo." },
  "xtream-codes": { term: "Connexion Xtream Codes", definition: "Une façon de se connecter aux applications IPTV avec trois informations : un nom d'utilisateur, un mot de passe et une URL de serveur. La plupart des applications la proposent." },
};

export default fr;
