import type { PostText } from "@/lib/posts";

const posts: Record<string, PostText> = {
  "iptv-on-iphone-ipad-apple-tv": {
    title: "Como ver IPTV em iPhone, iPad e Apple TV",
    excerpt: "Veja IPTV no seu iPhone, iPad ou Apple TV: que aplicação instalar a partir da App Store, como iniciar sessão com os seus dados e dicas simples para uma imagem estável.",
    heroAlt: "IPTV em iPhone, iPad e Apple TV.",
    takeaways: [
      "Instale uma aplicação IPTV a partir da App Store, como o IPTV Smarters Pro ou o GSE Smart IPTV.",
      "Inicie sessão com o nome de utilizador, a palavra-passe e o URL do servidor que lhe enviamos.",
      "Os mesmos passos servem para iPhone, iPad e Apple TV.",
      "Use Wi-Fi de 5 GHz ou um cabo na Apple TV para a melhor imagem.",
    ],
    body: [
      { type: "p", text: "Os dispositivos Apple funcionam muito bem com IPTV. Só precisa de uma aplicação da App Store e dos dados de acesso da sua subscrição. Demora cerca de cinco minutos." },
      { type: "h2", text: "Passo 1 — Instale uma aplicação" },
      { type: "ol", items: ["Abra a App Store no seu iPhone, iPad ou Apple TV.", "Procure «IPTV Smarters Pro» ou «GSE Smart IPTV».", "Instale a aplicação e abra-a."] },
      { type: "h2", text: "Passo 2 — Inicie sessão" },
      { type: "ol", items: ["Escolha «Login with Xtream Codes API» (o nome pode variar um pouco conforme a aplicação).", "Dê à sua lista o nome que quiser, por exemplo DenvayStream.", "Escreva o nome de utilizador, a palavra-passe e o URL do servidor que lhe enviámos.", "Toque em Add user ou Login e espere que os canais carreguem."] },
      { type: "h2", text: "Dicas para uma imagem melhor" },
      { type: "ul", items: ["Na Apple TV, use um cabo de rede se puder.", "No iPhone e iPad, fique perto do router ou use Wi-Fi de 5 GHz.", "Se um canal parar, feche a aplicação por completo e volte a abri-la.", "Ative o modo de baixo consumo só quando precisar, porque pode abrandar o vídeo."] },
      { type: "h2", text: "Ver num ecrã maior" },
      { type: "p", text: "Pode enviar a imagem do seu iPhone ou iPad para uma TV com o AirPlay. Para o melhor resultado na TV, é preferível instalar a aplicação diretamente numa Apple TV." },
      { type: "tip", text: "Não sabe que aplicação escolher para o seu dispositivo Apple? Pergunte-nos no WhatsApp e enviamos-lhe instruções simples." },
    ],
    faqs: [
      ["Posso ver IPTV num iPhone?", "Sim. Instale uma aplicação IPTV a partir da App Store e inicie sessão com os dados da sua subscrição."],
      ["Qual é a melhor aplicação IPTV para Apple TV?", "O IPTV Smarters Pro e o GSE Smart IPTV são escolhas populares na Apple TV. Ambos permitem iniciar sessão com nome de utilizador, palavra-passe e URL do servidor."],
      ["Preciso de uma subscrição diferente para cada dispositivo Apple?", "Não. Pode instalar a aplicação em vários dispositivos, mas cada subscrição permite ver num dispositivo de cada vez."],
    ],
  },

  "iptv-on-android-tv-box-phone": {
    title: "Como instalar IPTV em Android TV, box Android e telemóvel Android",
    excerpt: "Instale IPTV em qualquer dispositivo Android — Android TV, box, telemóvel ou tablet: um leitor do Google Play, início de sessão e uma imagem fluida e estável.",
    heroAlt: "IPTV em Android TV, box de TV e telemóvel.",
    takeaways: [
      "Os dispositivos Android podem instalar leitores IPTV diretamente a partir do Google Play.",
      "O TiviMate é ótimo para TV; o IPTV Smarters Pro funciona bem em telemóveis.",
      "Inicie sessão com o nome de utilizador, a palavra-passe e o URL do servidor que lhe enviamos.",
      "Reiniciar o dispositivo e limpar a cache da aplicação resolve a maioria dos problemas.",
    ],
    body: [
      { type: "p", text: "O Android é um dos sistemas mais fáceis para IPTV. As Android TV, boxes Android TV, telemóveis e tablets podem instalar uma aplicação do Google Play em poucos minutos." },
      { type: "h2", text: "Passo 1 — Instale uma aplicação" },
      { type: "ol", items: ["Abra o Google Play no seu dispositivo.", "Procure «TiviMate» (ideal para TV) ou «IPTV Smarters Pro» (bom para telemóvel e TV).", "Instale a aplicação e abra-a."] },
      { type: "h2", text: "Passo 2 — Adicione a sua subscrição" },
      { type: "ol", items: ["Escolha «Add playlist» ou «Login with Xtream Codes».", "Escreva o URL do servidor, o nome de utilizador e a palavra-passe que lhe enviámos.", "Espere enquanto a aplicação carrega os seus canais, filmes e o guia de TV."] },
      { type: "h2", text: "Passo 3 — Mantenha tudo fluido" },
      { type: "ul", items: ["Ligue a sua box de TV com um cabo de rede, se puder.", "Reinicie a box uma vez por semana.", "Limpe a cache da aplicação se os canais começarem a congelar (Definições → Aplicações → a sua aplicação → Armazenamento → Limpar cache).", "Deixe pelo menos 1 GB de espaço livre no dispositivo."] },
      { type: "h2", text: "Telemóveis e tablets" },
      { type: "p", text: "No telemóvel pode ver em casa ou em viagem. Use Wi-Fi sempre que puder, porque o vídeo gasta muitos dados móveis. Uma hora de vídeo em HD pode gastar entre 1 e 3 GB." },
      { type: "tip", text: "Diga-nos o modelo do seu dispositivo no WhatsApp e dizemos-lhe que aplicação funciona melhor." },
    ],
    faqs: [
      ["Qual é a melhor aplicação IPTV para Android TV?", "O TiviMate é um dos melhores leitores IPTV para Android TV e boxes Android. O IPTV Smarters Pro é uma boa opção grátis."],
      ["Posso ver IPTV no meu telemóvel Android com dados móveis?", "Sim, mas o vídeo gasta muitos dados — entre 1 e 3 GB por hora em HD. Use Wi-Fi sempre que puder."],
      ["Porque é que a minha box Android congela?", "As causas mais comuns são um Wi-Fi fraco, pouco espaço livre ou a cache cheia. Use um cabo, liberte espaço e limpe a cache."],
    ],
  },

  "iptv-on-windows-mac": {
    title: "Como ver IPTV em PC Windows e Mac",
    excerpt: "Veja IPTV num PC Windows, portátil ou Mac com leitores grátis como o VLC ou o IPTV Smarters. Passos simples para adicionar a sua subscrição e começar a ver.",
    heroAlt: "IPTV em Windows e Mac: um portátil a reproduzir vídeo.",
    takeaways: [
      "Pode ver IPTV num computador com aplicações grátis como o VLC ou o IPTV Smarters.",
      "O VLC usa o seu link M3U; o IPTV Smarters usa o nome de utilizador, a palavra-passe e o URL do servidor.",
      "Uma ligação por cabo dá a imagem mais estável no computador.",
      "Ligue o portátil à TV com um cabo HDMI para ver em grande.",
    ],
    body: [
      { type: "p", text: "Um computador é uma forma fácil de ver IPTV, em casa ou em viagem. Pode usar um leitor grátis e começar a ver em poucos minutos." },
      { type: "h2", text: "Opção 1 — VLC (grátis, muito simples)" },
      { type: "ol", items: ["Transfira o VLC do site oficial e instale-o.", "Abra o VLC e clique em Média → Abrir localização de rede (no Mac: Ficheiro → Abrir rede).", "Cole o link M3U que lhe enviámos e clique em Reproduzir.", "Abra a lista de reprodução para ver a sua lista de canais."] },
      { type: "h2", text: "Opção 2 — IPTV Smarters (com guia de TV)" },
      { type: "ol", items: ["Transfira o IPTV Smarters para Windows ou Mac a partir do site oficial.", "Abra a aplicação e escolha «Login with Xtream Codes API».", "Escreva o nome de utilizador, a palavra-passe e o URL do servidor que lhe enviámos.", "Espere que os canais, os filmes e o guia de TV carreguem."] },
      { type: "h2", text: "Ver na sua TV" },
      { type: "p", text: "Ligue o portátil à TV com um cabo HDMI. Na TV, escolha a entrada HDMI certa. No Windows, carregue na tecla Windows + P para escolher como o ecrã é mostrado." },
      { type: "h2", text: "Dicas" },
      { type: "ul", items: ["Feche outros programas que usem a internet, como as transferências.", "Use um cabo de rede se o seu Wi-Fi for fraco.", "Mantenha a sua aplicação de leitura atualizada."] },
      { type: "tip", text: "Precisa do seu link M3U ou de ajuda com a aplicação? Escreva-nos no WhatsApp." },
    ],
    faqs: [
      ["Posso ver IPTV num portátil?", "Sim. Instale um leitor grátis como o VLC ou o IPTV Smarters, adicione os dados da sua subscrição e comece a ver."],
      ["Qual é o melhor leitor IPTV para Windows?", "O VLC é a opção grátis mais simples. O IPTV Smarters para Windows é melhor se quiser um guia de TV e um menu como o de uma TV."],
      ["Posso ver IPTV num Mac?", "Sim. O VLC e o IPTV Smarters funcionam ambos no Mac."],
    ],
  },
};

export default posts;
