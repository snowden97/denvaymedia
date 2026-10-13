import type { TermText } from "@/lib/glossary";

const es: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Una imagen muy nítida, cuatro veces más detallada que el Full HD. Necesitas unos 25 Mbps de velocidad de internet para un stream 4K.", linkLabel: "Velocidad de internet para IPTV" },
  "anti-freeze": { term: "Anticongelamiento", definition: "Una tecnología de servidor que reparte a los espectadores entre varios servidores para que la imagen no se congele cuando mucha gente ve a la vez." },
  buffering: { term: "Buffering (cortes)", definition: "Cuando el vídeo se para un momento para cargar más datos. Suele deberse a un Wi-Fi débil, un dispositivo lento o una conexión saturada.", linkLabel: "Cómo solucionar los cortes" },
  "catch-up": { term: "Catch-up (TV a la carta)", definition: "Una función que te deja ver en cualquier momento programas emitidos en los últimos días." },
  connection: { term: "Conexión", definition: "El número de dispositivos que pueden ver a la vez con una suscripción. Una conexión = un dispositivo a la vez." },
  credit: { term: "Crédito (revendedor)", definition: "La unidad que usa un revendedor para crear suscripciones. En DenvayStream, 1 crédito = 1 mes de servicio para un cliente.", linkLabel: "Paquetes de créditos para revendedores" },
  epg: { term: "EPG (guía de TV)", definition: "Electronic Programme Guide. Una lista en pantalla que muestra qué se emite ahora y después en cada canal." },
  ethernet: { term: "Cable Ethernet", definition: "Un cable de red que conecta tu tele o tu caja de TV directamente al router. Da una conexión más estable que el Wi-Fi." },
  fhd: { term: "FHD (Full HD)", definition: "Una imagen clara y nítida de 1080 líneas (1080p). Necesitas unos 15 Mbps para un stream Full HD." },
  firestick: { term: "Firestick", definition: "Un pequeño stick de streaming de Amazon que se conecta al puerto HDMI de la tele. Es uno de los dispositivos más usados para IPTV.", linkLabel: "Guía de instalación de Firestick" },
  hd: { term: "HD", definition: "Alta definición. Una buena imagen de 720 líneas (720p). Necesitas unos 10 Mbps para un stream HD." },
  iptv: { term: "IPTV", definition: "Televisión por protocolo de internet. Canales de TV, películas y series que llegan por tu conexión a internet en lugar de por antena parabólica o cable.", linkLabel: "¿Qué es el IPTV?" },
  "live-tv": { term: "TV en directo", definition: "Canales que ves al mismo tiempo que se emiten, como en la tele de siempre." },
  m3u: { term: "Enlace M3U (lista)", definition: "Un enlace web o un archivo con la lista de canales de tu suscripción. Puedes pegarlo en reproductores como VLC." },
  "mac-address": { term: "Dirección MAC", definition: "Un código único que identifica tu dispositivo, por ejemplo 00:1A:79:XX:XX:XX. Las cajas MAG y algunas apps de Smart TV lo usan para conectar tu suscripción.", linkLabel: "Guía de instalación de caja MAG" },
  "mag-box": { term: "Caja MAG", definition: "Una pequeña caja de TV hecha solo para IPTV. Usa una URL de portal y se maneja fácilmente con el mando.", linkLabel: "Guía de instalación de caja MAG" },
  mbps: { term: "Mbps", definition: "Megabits por segundo. La unidad para medir la velocidad de internet. Más Mbps = una conexión más rápida." },
  "player-app": { term: "App de reproducción", definition: "La app que usas para ver IPTV, como TiviMate, IPTV Smarters o VLC. La app no incluye canales — vienen de tu suscripción.", linkLabel: "Las mejores apps IPTV" },
  "portal-url": { term: "URL de portal", definition: "Una dirección web que escribes en una caja MAG (y en algunas apps) para cargar tu servicio IPTV." },
  "reseller-panel": { term: "Panel de revendedor", definition: "Una web donde los revendedores crean, renuevan y gestionan las suscripciones de sus clientes con créditos.", linkLabel: "Cómo empezar como revendedor" },
  "server-url": { term: "URL del servidor", definition: "La dirección web del servidor IPTV. La escribes en tu app junto con tu usuario y tu contraseña." },
  "smart-tv": { term: "Smart TV", definition: "Una tele que se conecta a internet y puede instalar apps. La mayoría de Smart TV Samsung y LG pueden usar apps IPTV directamente.", linkLabel: "Guía de instalación de Smart TV" },
  trial: { term: "Prueba gratis", definition: "Una prueba corta del servicio antes de pagar. DenvayStream ofrece una prueba gratis de 24 horas con acceso completo.", linkLabel: "Conseguir una prueba gratis" },
  vod: { term: "VOD (vídeo a la carta)", definition: "Películas y series que puedes empezar cuando quieras, pausar y volver a ver." },
  vpn: { term: "VPN", definition: "Un servicio que oculta y protege tu tráfico de internet. No hace falta para IPTV, pero algunos lo usan si su proveedor de internet ralentiza el vídeo." },
  "xtream-codes": { term: "Acceso Xtream Codes", definition: "Una forma de iniciar sesión en apps IPTV con tres datos: usuario, contraseña y URL del servidor. La mayoría de apps lo admiten." },
};

export default es;
