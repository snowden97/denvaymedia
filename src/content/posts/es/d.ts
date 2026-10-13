import type { PostText } from "@/lib/posts";
import { priceFacts } from "../shared";

const p = priceFacts("es");

const posts: Record<string, PostText> = {
  "iptv-complete-guide": {
    title: "El IPTV en 2026: la guía completa (cómo funciona, dispositivos, precios y seguridad)",
    excerpt: "Todo lo que debes saber del IPTV en 2026: cómo funciona, qué necesitas, dispositivos, velocidad de internet, precios, cómo elegir un buen servicio y cómo empezar.",
    heroAlt: "Guía completa de IPTV 2026: un libro abierto.",
    takeaways: [
      "El IPTV es TV que llega por internet en lugar de por antena parabólica o cable.",
      "Necesitas tres cosas: un dispositivo compatible, una app de reproducción y una conexión a internet estable (10 Mbps para HD, 25 Mbps para 4K).",
      "El IPTV suele costar menos que el cable o el satélite y no tiene permanencia larga.",
      "Elige un servicio con prueba gratis, políticas claras y soporte real — y pruébalo antes en tu dispositivo.",
      "La mayoría de problemas, como los cortes, vienen del Wi-Fi o del dispositivo y se solucionan fácil.",
    ],
    body: [
      { type: "p", text: "El IPTV (televisión por protocolo de internet) es una forma de ver la tele a través de tu conexión a internet. En lugar de recibir los canales por una antena parabólica o un cable en la pared, la imagen viaja como datos desde un servidor hasta una app en tu tele, tu móvil o tu ordenador. Esta guía explica con palabras sencillas cómo funciona el IPTV, qué necesitas, cuánto cuesta y cómo elegir e instalar un servicio." },

      { type: "h2", text: "¿Qué es el IPTV?" },
      { type: "p", text: "El IPTV es televisión que se envía con la misma tecnología que el resto de internet. Tu dispositivo descarga un trocito de vídeo, lo reproduce y descarga el siguiente, una y otra vez. Por eso puedes ver la tele en casi cualquier pantalla con internet — en casa o de viaje." },
      { type: "p", text: "Las grandes operadoras usan la tecnología IPTV para sus propios paquetes de TV, y muchos servicios independientes ofrecen suscripciones IPTV que funcionan con las apps de reproducción más populares. La tecnología es la misma; lo que cambia es el servicio, su contenido y su calidad." },

      { type: "h2", text: "¿Cómo funciona el IPTV?" },
      { type: "p", text: "Todos los servicios IPTV siguen el mismo camino básico, desde el origen hasta tu pantalla:" },
      { type: "ol", items: [
        "Codificación: el proveedor convierte cada canal o vídeo en un stream digital en distintas calidades (por ejemplo HD, Full HD y 4K).",
        "Servidores: los streams se guardan en servidores potentes, o pasan por ellos, que los envían a los usuarios.",
        "Envío: cuando eliges un canal, el servidor envía el stream a tu dispositivo por internet.",
        "Reproducción: una app en tu dispositivo decodifica el stream y muestra la imagen, el sonido y la guía de TV.",
      ] },
      { type: "figure", name: "how-iptv-works", caption: "Cómo funciona el IPTV: de la codificación a tu pantalla en 4 pasos." },
      { type: "p", text: "La calidad que ves depende de cada paso: buenos servidores, una conexión a internet estable y un dispositivo capaz. Si uno de ellos falla, puede haber cortes." },

      { type: "h2", text: "IPTV frente a cable, satélite y apps de streaming" },
      { type: "table", caption: "Cómo se compara el IPTV con otras formas de ver la tele", head: ["", "IPTV", "Cable", "Satélite", "Apps de streaming"], rows: [
        ["Canales de TV en directo", "Sí", "Sí", "Sí", "Normalmente no"],
        ["Películas y series a la carta", "Sí", "Limitado", "Limitado", "Sí"],
        ["Necesita instalación", "No", "A menudo", "Sí (antena)", "No"],
        ["Permanencia", "Normalmente ninguna", "12–24 meses", "12–24 meses", "Mensual"],
        ["Móvil, tele y PC", "Sí", "Limitado", "Limitado", "Sí"],
        ["Depende de la velocidad de internet", "Sí", "No", "No", "Sí"],
        ["Le afecta el mal tiempo", "No", "No", "Sí", "No"],
      ] },
      { type: "p", text: "En resumen: el IPTV te da TV en directo como el cable, la flexibilidad de las apps de streaming, y sin antena ni técnico. Lo principal que necesita es una buena conexión a internet." },
      { type: "links", title: "Leer más", items: [["IPTV, cable o satélite: comparativa completa", "/blog/iptv-vs-cable-satellite"]] },

      { type: "h2", text: "¿Qué puedes ver con IPTV?" },
      { type: "h3", text: "TV en directo" },
      { type: "p", text: "Canales que ves a la vez que se emiten — noticias, deportes, entretenimiento, infantil y canales internacionales — con una guía de TV que muestra qué se emite ahora y después." },
      { type: "h3", text: "Vídeo a la carta (VOD)" },
      { type: "p", text: "Una biblioteca de películas y series que puedes empezar, pausar y volver a ver cuando quieras." },
      { type: "h3", text: "Catch-up (TV a la carta)" },
      { type: "p", text: "Programas emitidos en los últimos días, disponibles para verlos después. Esta función depende del canal y de tu app." },

      { type: "h2", text: "¿Qué necesitas para ver IPTV?" },
      { type: "ul", items: [
        "Un dispositivo compatible: Smart TV, Amazon Firestick, caja Android TV, móvil, tablet, ordenador o caja MAG.",
        "Una app de reproducción, como TiviMate, IPTV Smarters, IBO Player o VLC. La app no incluye canales.",
        "Una suscripción IPTV, que te da unos datos de acceso (usuario, contraseña y URL del servidor) o un enlace M3U.",
        "Una conexión a internet estable — mejor con cable de red para teles y cajas de TV.",
      ] },

      { type: "h2", text: "¿Qué velocidad de internet necesitas?" },
      { type: "table", caption: "Velocidad de internet recomendada por stream", head: ["Calidad de imagen", "Velocidad mínima", "Recomendada"], rows: [
        ["SD", "3 Mbps", "5 Mbps"],
        ["HD (720p)", "7 Mbps", "10 Mbps"],
        ["Full HD (1080p)", "10 Mbps", "15 Mbps"],
        ["4K Ultra HD", "20 Mbps", "25 Mbps o más"],
      ] },
      { type: "figure", name: "speed-chart", caption: "Velocidad de internet recomendada para una pantalla, según la calidad de imagen." },
      { type: "p", text: "Estas cifras son para una pantalla. Si varias personas ven a la vez, suma las velocidades. Prueba siempre la velocidad en el dispositivo donde ves, no en el móvil junto al router." },
      { type: "links", title: "Leer más", items: [["¿Qué velocidad de internet necesitas para IPTV?", "/blog/internet-speed-for-iptv"]] },

      { type: "h2", text: "¿Qué dispositivos funcionan con IPTV?" },
      { type: "p", text: "Casi cualquier pantalla moderna puede reproducir IPTV. La mejor opción depende de lo que ya tengas:" },
      { type: "figure", name: "devices", caption: "El IPTV funciona en Smart TV, sticks de streaming, cajas de TV, móviles, tablets y ordenadores." },
      { type: "ul", items: [
        "Amazon Firestick: barato, pequeño y muy popular. Una gran opción para la mayoría.",
        "Smart TV (Samsung, LG): sin aparato extra, aunque en modelos antiguos hay menos apps.",
        "Cajas Android TV: potentes y flexibles, con más apps para elegir.",
        "iPhone, iPad y Apple TV: fluidos y sencillos, con apps del App Store.",
        "Cajas MAG: hechas solo para IPTV y muy fáciles con el mando.",
        "Ordenadores Windows y Mac: fáciles con apps gratis como VLC.",
      ] },
      { type: "links", title: "Guías de instalación paso a paso", items: [
        ["Todas las guías de instalación por dispositivo", "/setup"],
        ["IPTV en Amazon Firestick", "/blog/how-to-install-iptv-on-firestick"],
        ["IPTV en Smart TV Samsung y LG", "/blog/iptv-smart-tv-samsung-lg"],
        ["IPTV en Android TV, caja y móvil", "/blog/iptv-on-android-tv-box-phone"],
        ["IPTV en iPhone, iPad y Apple TV", "/blog/iptv-on-iphone-ipad-apple-tv"],
        ["IPTV en caja MAG", "/blog/iptv-on-mag-box"],
        ["IPTV en Windows y Mac", "/blog/iptv-on-windows-mac"],
      ] },

      { type: "h2", text: "¿Cuánto cuesta el IPTV?" },
      { type: "p", text: `El precio del IPTV depende del servicio y de la duración del plan. Los planes largos casi siempre cuestan menos al mes. Por ejemplo, los planes de DenvayStream empiezan en ${p.cheapest} por 3 meses, y el plan de 2 años sale a ${p.monthly} al mes — con todas las funciones incluidas en cada plan.` },
      { type: "p", text: "Frente al cable o el satélite, el IPTV no suele tener costes de instalación, alquiler de equipo ni permanencia larga. Cuidado con los precios demasiado bajos: los servicios muy baratos suelen tener servidores inestables y ningún soporte real." },
      { type: "links", title: "Ver precios", items: [["Planes y precios de DenvayStream", "/pricing"]] },
      { type: "cta", title: "¿Aún dudas? Prueba el IPTV gratis durante 24 horas", text: "Comprueba la calidad de imagen, los canales y la estabilidad en tu dispositivo y con tu internet — antes de pagar nada." },

      { type: "h2", text: "Cómo elegir un buen servicio IPTV" },
      { type: "p", text: "No todos los servicios IPTV son iguales. Usa esta checklist antes de pagar:" },
      { type: "ol", items: [
        "Prueba gratis: un buen servicio te deja probarlo en tu dispositivo antes de comprar.",
        "Servidores estables: mira por la noche en horas punta y durante un directo para probar la estabilidad.",
        "Calidad de imagen: revisa el HD, el Full HD y el 4K en tu pantalla.",
        "Soporte real: haz una pregunta y fíjate en lo rápido y bien que responden.",
        "Políticas claras: busca términos del servicio, política de privacidad, de reembolso y DMCA.",
        "Normas justas: sin permanencia larga, sin renovación automática que no hayas pedido y con un plazo de reembolso claro.",
        "Dispositivos compatibles: comprueba que funciona con tus dispositivos y apps.",
      ] },
      { type: "links", title: "Leer más", items: [["Cómo probar un servicio IPTV con una prueba gratis", "/blog/how-to-test-iptv-free-trial"], ["Las mejores apps IPTV", "/blog/best-iptv-apps-2026"]] },

      { type: "h2", text: "¿Es el IPTV legal y seguro?" },
      { type: "p", text: "La tecnología IPTV es legal — es simplemente una forma de enviar vídeo por internet. Que un servicio concreto sea legal depende de si tiene las licencias adecuadas para su contenido, y de las leyes de tu país. Para ir seguro, elige un proveedor con políticas públicas claras, paga con métodos seguros y nunca compartas los datos completos de tu tarjeta por chat." },
      { type: "links", title: "Leer más", items: [["¿Es legal el IPTV? Lo que debes saber", "/blog/is-iptv-legal"]] },

      { type: "h2", text: "Problemas comunes de IPTV y soluciones rápidas" },
      { type: "table", caption: "Los problemas de IPTV más comunes y cómo solucionarlos", head: ["Problema", "Causa más probable", "Solución rápida"], rows: [
        ["Cortes o congelamientos", "Wi-Fi débil o internet lento", "Usa un cable de red y reinicia el router"],
        ["Los canales no cargan", "Datos de acceso incorrectos", "Revisa la URL del servidor, el usuario y la contraseña"],
        ["La guía de TV está vacía", "La guía aún no ha cargado", "Actualiza la guía de TV en los ajustes de la app"],
        ["La app va lenta", "Memoria o caché llenas", "Borra la caché y reinicia el dispositivo"],
        ["Problemas solo por la noche", "Proveedor de internet saturado", "Baja a Full HD en horas punta"],
      ] },
      { type: "links", title: "Leer más", items: [["IPTV con cortes: 9 soluciones que funcionan", "/blog/fix-iptv-buffering"]] },

      { type: "h2", text: "Cómo empezar con IPTV en 5 pasos" },
      { type: "ol", items: [
        "Comprueba tu velocidad de internet en el dispositivo donde vas a ver.",
        "Elige tu dispositivo e instala una app de reproducción.",
        "Pide una prueba gratis para probar el servicio en casa.",
        "Si te convence, elige un plan — los largos cuestan menos al mes.",
        "Inicia sesión en tu app con los datos que recibas y empieza a ver.",
      ] },
      { type: "figure", name: "start-steps", caption: "De cero a ver la tele: los 5 pasos para empezar con IPTV." },

      { type: "h2", text: "El futuro del IPTV" },
      { type: "p", text: "Cada vez más gente ve la tele en varias pantallas y las conexiones a internet son cada vez más rápidas. Por eso el IPTV sigue creciendo. En los próximos años habrá más contenido en 4K, mejores guías de TV, apps más inteligentes y cambios de canal más rápidos. Un mejor internet en casa, como la fibra y el Wi-Fi rápido, también significa menos problemas de calidad." },

      { type: "h2", text: "Palabras del IPTV que debes conocer" },
      { type: "p", text: "Verás a menudo palabras como M3U, EPG, dirección MAC, URL del servidor, VOD y catch-up. Nuestro glosario explica cada una en una o dos frases sencillas." },
      { type: "links", title: "Aprende las palabras", items: [["Glosario IPTV: las palabras del IPTV explicadas fácil", "/glossary"], ["¿Qué es el IPTV? Guía para principiantes", "/blog/what-is-iptv-beginners-guide"]] },

      { type: "tip", text: "¿Quieres ver cómo funciona el IPTV en tu propia tele? Pide una prueba gratis de 24 horas de DenvayStream — sin datos de pago." },
    ],
    faqs: [
      ["¿Qué es el IPTV en palabras sencillas?", "El IPTV es TV que llega por tu conexión a internet en lugar de por antena parabólica o cable. La ves con una app en tu tele, móvil, tablet u ordenador."],
      ["¿Cómo funciona el IPTV?", "Un proveedor convierte los canales y los vídeos en streams digitales y los envía desde sus servidores por internet. Una app en tu dispositivo recibe el stream y muestra la imagen."],
      ["¿Qué necesito para ver IPTV?", "Un dispositivo compatible, una app de reproducción, una suscripción IPTV y una conexión a internet estable — al menos 10 Mbps para HD y 25 Mbps para 4K."],
      ["¿Es mejor el IPTV que el cable?", "Para la mayoría de hogares con buen internet, el IPTV es más barato, no tiene permanencia y funciona en más dispositivos. El cable puede ser más estable si tu internet es lento."],
      ["¿Puedo ver IPTV en más de un dispositivo?", "Sí, puedes instalar la app en varios dispositivos. Cuántos pueden ver a la vez depende de tu plan — normalmente una conexión es un dispositivo a la vez."],
      ["¿Cuánto cuesta el IPTV al mes?", `Depende del servicio y de la duración. En DenvayStream, los planes empiezan en ${p.cheapest} por 3 meses, y el plan de 2 años cuesta ${p.monthly} al mes.`],
      ["¿Necesito una VPN para el IPTV?", "No, no hace falta una VPN. Algunos la usan si su proveedor de internet ralentiza el vídeo en horas punta."],
    ],
  },

  "iptv-free-trial-24-hours": {
    title: "Prueba IPTV gratis 24 horas: cómo conseguirla y qué probar (2026)",
    excerpt: "Consigue una prueba IPTV gratis de 24 horas sin tarjeta de crédito. Qué incluye, cómo tenerla en minutos, qué probar y cómo reconocer una prueba segura.",
    heroAlt: "Prueba IPTV gratis de 24 horas: una tele con TV en directo en 4K, una insignia de prueba gratis 24h y sin tarjeta de crédito.",
    takeaways: [
      "Una prueba IPTV gratis de 24 horas te deja probar todo el servicio en tu dispositivo antes de pagar.",
      "Una buena prueba no pide tarjeta de crédito, da acceso completo y está lista en minutos.",
      "Prueba por la noche y durante el deporte en directo — es cuando los servidores están más ocupados.",
      "Cuando termina la prueba, no se cobra nada. Solo eliges un plan si te convence.",
    ],
    body: [
      { type: "p", text: "Una prueba IPTV gratis es un test corto y gratuito de un servicio IPTV. La mayoría duran 24 horas. Durante ese tiempo puedes ver TV en directo, películas y series en tu tele o tu móvil, para comprobar la calidad antes de comprar una suscripción. Esta guía explica cómo funciona una prueba de 24 horas, cómo conseguirla, qué probar y cómo distinguir una prueba segura de una arriesgada." },

      { type: "h2", text: "¿Qué es una prueba IPTV gratis de 24 horas?" },
      { type: "p", text: "Una prueba IPTV gratis de 24 horas es un acceso temporal y gratuito a un servicio IPTV. El proveedor te envía unos datos de prueba — normalmente usuario, contraseña y URL del servidor — que funcionan durante 24 horas. Los añades a una app en tu dispositivo y usas el servicio como un cliente de pago." },
      { type: "p", text: "El objetivo es sencillo: ver la calidad de imagen real, la estabilidad y la velocidad de carga de los canales en tu dispositivo y con tu conexión — no en un vídeo de demostración." },

      { type: "h2", text: "Por qué 24 horas es la duración ideal" },
      { type: "ul", items: [
        "Cubre un día entero, incluidas las horas punta de la noche, cuando los servidores están más exigidos.",
        "Es tiempo suficiente para probar la TV en directo, las películas, la guía de TV y varios dispositivos.",
        "Es lo bastante corto para decidir rápido, sin olvidarte de probar.",
      ] },

      { type: "h2", text: "Cómo funciona la prueba gratis, paso a paso" },
      { type: "figure", name: "trial-timeline", caption: "Las 4 fases de una prueba IPTV gratis de 24 horas — de la solicitud a la decisión." },
      { type: "ol", items: [
        "Solicitud: rellena un formulario corto con tu nombre, dispositivo y app. En DenvayStream abre WhatsApp con tu solicitud lista para enviar.",
        "Datos de acceso: el equipo te envía tus datos de prueba y una guía de instalación para tu dispositivo, normalmente en minutos.",
        "Prueba: instala la app, inicia sesión y usa el servicio durante 24 horas.",
        "Decisión: si te gusta, elige un plan. Si no, simplemente lo dejas — no se cobra nada.",
      ] },
      { type: "links", title: "Consigue tu prueba", items: [["Solicitar una prueba gratis de 24 horas de DenvayStream", "/free-trial"]] },

      { type: "h2", text: "¿Qué incluye la prueba?" },
      { type: "p", text: "Una buena prueba IPTV no es una demo limitada. Debe darte el mismo servicio que reciben los clientes de pago:" },
      { type: "table", caption: "Prueba gratis frente a plan de pago", head: ["Característica", "Prueba gratis de 24 horas", "Plan de pago"], rows: [
        ["Canales de TV en directo", "Sí", "Sí"],
        ["Películas y series (VOD)", "Sí", "Sí"],
        ["Servidores de alta calidad", "Sí", "Sí"],
        ["4K / Full HD / HD", "Sí", "Sí"],
        ["Guía de TV y catch-up", "Sí", "Sí"],
        ["Soporte", "Sí", "Sí, 24/7"],
        ["Duración", "24 horas", "De 3 meses a 2 años"],
        ["Precio", "Gratis", `Desde ${p.cheapest}`],
      ] },

      { type: "h2", text: "¿Qué necesitas antes de empezar la prueba?" },
      { type: "ul", items: [
        "Un dispositivo compatible: Smart TV, Firestick, caja Android, móvil, tablet, ordenador o caja MAG.",
        "Una app de reproducción instalada de antemano, para no perder tiempo de prueba.",
        "Una conexión a internet estable: al menos 10 Mbps para HD y 25 Mbps para 4K.",
        "Una lista corta de los tipos de canales y programas que más ves.",
      ] },
      { type: "links", title: "Prepara tu dispositivo", items: [["Guías de instalación para cada dispositivo", "/setup"], ["¿Qué velocidad de internet necesitas?", "/blog/internet-speed-for-iptv"]] },

      { type: "cta", title: "¿Listo para probar? Pedir tu prueba gratis lleva 30 segundos", text: "Acceso completo durante 24 horas, en tu propio dispositivo. Sin tarjeta de crédito, sin permanencia." },

      { type: "h2", text: "Qué probar en 24 horas" },
      { type: "p", text: "Aprovecha bien tu prueba. Estas son las pruebas que más te dicen de un servicio IPTV:" },
      { type: "ol", items: [
        "Estabilidad de imagen: mira un canal al menos 30 minutos.",
        "Cambio de canal: cambia varias veces y mira lo rápido que empieza cada uno.",
        "Prueba nocturna: vuelve a mirar entre las 19 y las 23 h, cuando los servidores están más ocupados.",
        "Deporte en directo: mira un partido en directo si puedes — es la prueba más exigente.",
        "Calidad de imagen: compara HD, Full HD y 4K en tu pantalla.",
        "Guía de TV: comprueba que muestra qué se emite ahora y después.",
        "Películas y series: pon algunos títulos, pausa y avanza.",
        "Segundo dispositivo: prueba en tu móvil o en otra tele.",
        "Soporte: haz una pregunta y mira lo rápido y bien que responden.",
      ] },
      { type: "links", title: "Checklist completa", items: [["Cómo probar un servicio IPTV con una prueba gratis (checklist)", "/blog/how-to-test-iptv-free-trial"]] },

      { type: "h2", text: "¿Prueba segura o arriesgada? Cómo distinguirlas" },
      { type: "figure", name: "safe-vs-risky-trial", caption: "Las señales de una prueba IPTV segura — y las de una prueba arriesgada." },
      { type: "p", text: "Una prueba segura nunca pide los datos de tu tarjeta, da acceso completo y viene de un proveedor con políticas públicas claras y soporte real. Ten cuidado si una prueba pide datos de pago, muestra pocos canales o te presiona para comprar ya un plan largo." },

      { type: "h2", text: "¿Se puede tener una prueba IPTV gratis sin tarjeta de crédito?" },
      { type: "p", text: "Sí. Una prueba IPTV de confianza nunca debería pedirte la tarjeta. En DenvayStream solo das tu nombre, tu dispositivo y tu app. Como no se piden datos de pago, no hay riesgo de que te cobren al terminar la prueba." },

      { type: "h2", text: "¿Qué pasa cuando termina la prueba?" },
      { type: "p", text: `Tus datos de prueba simplemente dejan de funcionar a las 24 horas. No se cobra nada y no empieza ninguna suscripción automática. Si te ha gustado, puedes elegir un plan y muchas veces seguir usando la misma app que ya instalaste. Los planes de DenvayStream empiezan en ${p.cheapest} por 3 meses, y el plan de 2 años sale a ${p.monthly} al mes.` },
      { type: "links", title: "Después de tu prueba", items: [["Ver todos los planes y precios", "/pricing"], ["Nuestra garantía de devolución de 7 días", "/legal/refund-policy"]] },

      { type: "h2", text: "Consejos para aprovechar al máximo tu prueba gratis" },
      { type: "ul", items: [
        "Empieza la prueba cuando puedas ver la tele — por ejemplo el fin de semana o por la noche.",
        "Usa un cable de red para teles y cajas de TV si puedes.",
        "Haz primero un test de velocidad en el dispositivo donde vas a ver.",
        "Apunta cualquier problema y pregunta al soporte — cómo te ayudan forma parte de la prueba.",
        "Prueba en el dispositivo que usarás cada día, no solo en el móvil.",
      ] },

      { type: "h2", text: "Problemas en la prueba y soluciones rápidas" },
      { type: "table", caption: "Problemas comunes durante la prueba gratis", head: ["Problema", "Solución rápida"], rows: [
        ["El acceso no funciona", "Revisa la URL del servidor, el usuario y la contraseña — una sola letra mal lo bloquea"],
        ["Los canales no cargan", "Espera 1–2 minutos la primera vez y reinicia la app"],
        ["La imagen se congela", "Usa un cable, reinicia el router y baja a Full HD"],
        ["La guía de TV está vacía", "Actualiza la guía de TV en los ajustes de la app"],
      ] },
      { type: "links", title: "Más ayuda", items: [["IPTV con cortes: 9 soluciones que funcionan", "/blog/fix-iptv-buffering"], ["¿Qué es una prueba gratis? (glosario)", "/glossary#trial"]] },

      { type: "tip", text: "Pide ya tu prueba gratis de 24 horas de DenvayStream — sin datos de pago, con acceso completo y ayuda con la instalación por WhatsApp." },
    ],
    faqs: [
      ["¿Hay una prueba IPTV gratis de 24 horas?", "Sí. DenvayStream ofrece una prueba IPTV gratis de 24 horas con acceso completo a TV en directo, películas y series. No hace falta tarjeta de crédito."],
      ["¿Cómo consigo una prueba IPTV gratis?", "Rellena el formulario corto de la página de prueba gratis con tu nombre, dispositivo y app. Se abre WhatsApp con tu solicitud y te enviamos tus datos de prueba y una guía de instalación, normalmente en minutos."],
      ["¿Necesito tarjeta de crédito para la prueba IPTV gratis?", "No. La prueba es totalmente gratis y nunca pedimos datos de pago, así que no te pueden cobrar al terminar."],
      ["¿Qué puedo ver durante la prueba gratis?", "El mismo servicio que los clientes de pago: canales de TV en directo, películas y series, la guía de TV y catch-up, en 4K, Full HD y HD según disponibilidad."],
      ["¿Puedo usar la prueba gratis en mi Smart TV o Firestick?", "Sí. La prueba funciona en Smart TV, Firestick, cajas Android, iPhone, iPad, móviles Android, Apple TV, cajas MAG y ordenadores."],
      ["¿Qué pasa después de la prueba de 24 horas?", "Los datos de prueba dejan de funcionar y no se cobra nada. Si te convence, puedes elegir un plan y seguir viendo."],
      ["¿Puedo conseguir más de una prueba gratis?", "Las pruebas gratis están limitadas a una por cliente, hogar y dispositivo, para poder seguir ofreciéndolas a nuevos clientes."],
    ],
  },
};

export default posts;
