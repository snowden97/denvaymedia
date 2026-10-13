import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Cómo ver IPTV en iPhone, iPad y Apple TV",
    excerpt: "Mira IPTV en tu iPhone, iPad o Apple TV: qué app instalar desde el App Store, cómo iniciar sesión con tus datos y consejos sencillos para una imagen estable.",
    heroAlt: "IPTV en iPhone, iPad y Apple TV.",
    takeaways: [
      "Instala una app IPTV desde el App Store, como IPTV Smarters Pro o GSE Smart IPTV.",
      "Inicia sesión con el usuario, la contraseña y la URL del servidor que te enviamos.",
      "Los mismos pasos sirven para iPhone, iPad y Apple TV.",
      "Usa Wi-Fi de 5 GHz o un cable en el Apple TV para la mejor imagen.",
    ],
    body: [
      { type: "p", text: "Los dispositivos Apple funcionan muy bien con IPTV. Solo necesitas una app del App Store y los datos de acceso de tu suscripción. Tarda unos cinco minutos." },
      { type: "h2", text: "Paso 1 — Instala una app" },
      { type: "ol", items: ["Abre el App Store en tu iPhone, iPad o Apple TV.", "Busca «IPTV Smarters Pro» o «GSE Smart IPTV».", "Instala la app y ábrela."] },
      { type: "h2", text: "Paso 2 — Inicia sesión" },
      { type: "ol", items: ["Elige «Login with Xtream Codes API» (el nombre puede cambiar un poco según la app).", "Ponle a tu lista el nombre que quieras, por ejemplo DenvayStream.", "Escribe el usuario, la contraseña y la URL del servidor que te enviamos.", "Pulsa Add user o Login y espera a que carguen los canales."] },
      { type: "h2", text: "Consejos para una mejor imagen" },
      { type: "ul", items: ["En el Apple TV, usa un cable de red si puedes.", "En iPhone e iPad, quédate cerca del router o usa Wi-Fi de 5 GHz.", "Si un canal se para, cierra la app del todo y vuelve a abrirla.", "Activa el modo de bajo consumo solo cuando lo necesites, porque puede ralentizar el vídeo."] },
      { type: "h2", text: "Ver en una pantalla más grande" },
      { type: "p", text: "Puedes enviar la imagen de tu iPhone o iPad a una tele con AirPlay. Para el mejor resultado en la tele, mejor instala la app directamente en un Apple TV." },
      { type: "tip", text: "¿No sabes qué app elegir para tu dispositivo Apple? Pregúntanos por WhatsApp y te enviaremos instrucciones sencillas." },
    ],
    faqs: [
      ["¿Puedo ver IPTV en un iPhone?", "Sí. Instala una app IPTV desde el App Store e inicia sesión con los datos de tu suscripción."],
      ["¿Cuál es la mejor app IPTV para Apple TV?", "IPTV Smarters Pro y GSE Smart IPTV son opciones populares en Apple TV. Las dos permiten iniciar sesión con usuario, contraseña y URL del servidor."],
      ["¿Necesito una suscripción distinta para cada dispositivo Apple?", "No. Puedes instalar la app en varios dispositivos, pero cada suscripción permite ver en un dispositivo a la vez."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Cómo instalar IPTV en Android TV, caja Android y móvil Android",
    excerpt: "Instala IPTV en cualquier dispositivo Android — Android TV, caja, móvil o tablet: un reproductor de Google Play, inicio de sesión y una imagen fluida y estable.",
    heroAlt: "IPTV en Android TV, caja de TV y móvil.",
    takeaways: [
      "Los dispositivos Android pueden instalar reproductores IPTV directamente desde Google Play.",
      "TiviMate es genial para teles; IPTV Smarters Pro va bien en móviles.",
      "Inicia sesión con el usuario, la contraseña y la URL del servidor que te enviamos.",
      "Reiniciar el dispositivo y borrar la caché de la app soluciona la mayoría de problemas.",
    ],
    body: [
      { type: "p", text: "Android es uno de los sistemas más fáciles para IPTV. Las Android TV, cajas Android TV, móviles y tablets pueden instalar una app desde Google Play en pocos minutos." },
      { type: "h2", text: "Paso 1 — Instala una app" },
      { type: "ol", items: ["Abre Google Play en tu dispositivo.", "Busca «TiviMate» (ideal para tele) o «IPTV Smarters Pro» (bien para móvil y tele).", "Instala la app y ábrela."] },
      { type: "h2", text: "Paso 2 — Añade tu suscripción" },
      { type: "ol", items: ["Elige «Add playlist» o «Login with Xtream Codes».", "Escribe la URL del servidor, el usuario y la contraseña que te enviamos.", "Espera mientras la app carga tus canales, películas y la guía de TV."] },
      { type: "h2", text: "Paso 3 — Que vaya fluido" },
      { type: "ul", items: ["Conecta tu caja de TV con un cable de red si puedes.", "Reinicia la caja una vez por semana.", "Borra la caché de la app si los canales empiezan a congelarse (Ajustes → Aplicaciones → tu app → Almacenamiento → Borrar caché).", "Deja al menos 1 GB de espacio libre en el dispositivo."] },
      { type: "h2", text: "Móviles y tablets" },
      { type: "p", text: "En el móvil puedes ver en casa o de viaje. Usa Wi-Fi cuando puedas, porque el vídeo gasta muchos datos móviles. Una hora de vídeo en HD puede gastar entre 1 y 3 GB." },
      { type: "tip", text: "Dinos el modelo de tu dispositivo por WhatsApp y te diremos qué app le va mejor." },
    ],
    faqs: [
      ["¿Cuál es la mejor app IPTV para Android TV?", "TiviMate es uno de los mejores reproductores IPTV para Android TV y cajas Android. IPTV Smarters Pro es una buena opción gratis."],
      ["¿Puedo ver IPTV en mi móvil Android con datos móviles?", "Sí, pero el vídeo gasta muchos datos — entre 1 y 3 GB por hora en HD. Usa Wi-Fi cuando puedas."],
      ["¿Por qué se congela mi caja Android?", "Las causas más comunes son un Wi-Fi débil, poco espacio libre o la caché llena. Usa un cable, libera espacio y borra la caché."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Cómo ver IPTV en PC con Windows y Mac",
    excerpt: "Mira IPTV en un PC con Windows, un portátil o un Mac con reproductores gratis como VLC o IPTV Smarters. Pasos sencillos para añadir tu suscripción y empezar a ver.",
    heroAlt: "IPTV en Windows y Mac: un portátil reproduciendo vídeo.",
    takeaways: [
      "Puedes ver IPTV en un ordenador con apps gratis como VLC o IPTV Smarters.",
      "VLC usa tu enlace M3U; IPTV Smarters usa tu usuario, contraseña y URL del servidor.",
      "Una conexión por cable da la imagen más estable en el ordenador.",
      "Conecta tu portátil a la tele con un cable HDMI para verlo en grande.",
    ],
    body: [
      { type: "p", text: "Un ordenador es una forma fácil de ver IPTV, en casa o de viaje. Puedes usar un reproductor gratis y empezar a ver en pocos minutos." },
      { type: "h2", text: "Opción 1 — VLC (gratis, muy sencillo)" },
      { type: "ol", items: ["Descarga VLC de su web oficial e instálalo.", "Abre VLC y haz clic en Medio → Abrir ubicación de red (en Mac: Archivo → Abrir red).", "Pega el enlace M3U que te enviamos y haz clic en Reproducir.", "Abre la lista de reproducción para ver tu lista de canales."] },
      { type: "h2", text: "Opción 2 — IPTV Smarters (con guía de TV)" },
      { type: "ol", items: ["Descarga IPTV Smarters para Windows o Mac desde su web oficial.", "Abre la app y elige «Login with Xtream Codes API».", "Escribe el usuario, la contraseña y la URL del servidor que te enviamos.", "Espera a que carguen los canales, las películas y la guía de TV."] },
      { type: "h2", text: "Ver en tu tele" },
      { type: "p", text: "Conecta tu portátil a la tele con un cable HDMI. En la tele, elige la entrada HDMI correcta. En Windows, pulsa la tecla Windows + P para elegir cómo se muestra la pantalla." },
      { type: "h2", text: "Consejos" },
      { type: "ul", items: ["Cierra otros programas que usen internet, como las descargas.", "Usa un cable de red si tu Wi-Fi es débil.", "Mantén actualizada tu app de reproducción."] },
      { type: "tip", text: "¿Necesitas tu enlace M3U o ayuda con la app? Escríbenos por WhatsApp." },
    ],
    faqs: [
      ["¿Puedo ver IPTV en un portátil?", "Sí. Instala un reproductor gratis como VLC o IPTV Smarters, añade los datos de tu suscripción y empieza a ver."],
      ["¿Cuál es el mejor reproductor IPTV para Windows?", "VLC es la opción gratis más sencilla. IPTV Smarters para Windows es mejor si quieres una guía de TV y un menú como el de una tele."],
      ["¿Puedo ver IPTV en un Mac?", "Sí. VLC e IPTV Smarters funcionan los dos en Mac."],
    ],
  },
};

export default posts;
