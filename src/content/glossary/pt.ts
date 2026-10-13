import type { TermText } from "@/lib/glossary";

const pt: Record<string, TermText> = {
  "4k": { term: "4K (Ultra HD)", definition: "Uma imagem muito nítida, quatro vezes mais detalhada do que o Full HD. Precisa de cerca de 25 Mbps de velocidade de internet para um stream 4K.", linkLabel: "Velocidade de internet para IPTV" },
  "anti-freeze": { term: "Anti-congelamento", definition: "Uma tecnologia de servidor que distribui os espetadores por vários servidores, para que a imagem não congele quando muitas pessoas veem ao mesmo tempo." },
  buffering: { term: "Buffering (cortes)", definition: "Quando o vídeo para um momento para carregar mais dados. Normalmente deve-se a um Wi-Fi fraco, um dispositivo lento ou uma ligação sobrecarregada.", linkLabel: "Como resolver os cortes" },
  "catch-up": { term: "Catch-up (TV em diferido)", definition: "Uma função que permite ver a qualquer momento programas emitidos nos últimos dias." },
  connection: { term: "Ligação", definition: "O número de dispositivos que podem ver ao mesmo tempo com uma subscrição. Uma ligação = um dispositivo de cada vez." },
  credit: { term: "Crédito (revendedor)", definition: "A unidade que um revendedor usa para criar subscrições. Na DenvayStream, 1 crédito = 1 mês de serviço para um cliente.", linkLabel: "Pacotes de créditos para revendedores" },
  epg: { term: "EPG (guia de TV)", definition: "Electronic Programme Guide. Uma lista no ecrã que mostra o que está a dar agora e a seguir em cada canal." },
  ethernet: { term: "Cabo Ethernet", definition: "Um cabo de rede que liga a sua TV ou box de TV diretamente ao router. Dá uma ligação mais estável do que o Wi-Fi." },
  fhd: { term: "FHD (Full HD)", definition: "Uma imagem clara e nítida de 1080 linhas (1080p). Precisa de cerca de 15 Mbps para um stream Full HD." },
  firestick: { term: "Firestick", definition: "Uma pequena pen de streaming da Amazon que se liga à porta HDMI da TV. É um dos dispositivos mais usados para IPTV.", linkLabel: "Guia de instalação Firestick" },
  hd: { term: "HD", definition: "Alta definição. Uma boa imagem de 720 linhas (720p). Precisa de cerca de 10 Mbps para um stream HD." },
  iptv: { term: "IPTV", definition: "Televisão por protocolo de internet. Canais de TV, filmes e séries que chegam pela sua ligação à internet em vez de antena parabólica ou cabo.", linkLabel: "O que é IPTV?" },
  "live-tv": { term: "TV em direto", definition: "Canais que vê ao mesmo tempo que são emitidos, como na TV tradicional." },
  m3u: { term: "Link M3U (lista)", definition: "Um link web ou ficheiro com a lista de canais da sua subscrição. Pode colá-lo em leitores como o VLC." },
  "mac-address": { term: "Endereço MAC", definition: "Um código único que identifica o seu dispositivo, por exemplo 00:1A:79:XX:XX:XX. As boxes MAG e algumas aplicações de Smart TV usam-no para ligar a sua subscrição.", linkLabel: "Guia de instalação box MAG" },
  "mag-box": { term: "Box MAG", definition: "Uma pequena box de TV feita só para IPTV. Usa um URL de portal e é fácil de usar com o comando.", linkLabel: "Guia de instalação box MAG" },
  mbps: { term: "Mbps", definition: "Megabits por segundo. A unidade usada para medir a velocidade de internet. Mais Mbps = uma ligação mais rápida." },
  "player-app": { term: "Aplicação de leitura", definition: "A aplicação que usa para ver IPTV, como TiviMate, IPTV Smarters ou VLC. A aplicação não inclui canais — eles vêm da sua subscrição.", linkLabel: "As melhores aplicações IPTV" },
  "portal-url": { term: "URL do portal", definition: "Um endereço web que escreve numa box MAG (e em algumas aplicações) para carregar o seu serviço IPTV." },
  "reseller-panel": { term: "Painel de revendedor", definition: "Um site onde os revendedores criam, renovam e gerem as subscrições dos seus clientes com créditos.", linkLabel: "Como começar como revendedor" },
  "server-url": { term: "URL do servidor", definition: "O endereço web do servidor IPTV. Escreve-o na sua aplicação juntamente com o nome de utilizador e a palavra-passe." },
  "smart-tv": { term: "Smart TV", definition: "Uma TV que se liga à internet e pode instalar aplicações. A maioria das Smart TV Samsung e LG consegue usar aplicações IPTV diretamente.", linkLabel: "Guia de instalação Smart TV" },
  trial: { term: "Teste grátis", definition: "Um teste curto do serviço antes de pagar. A DenvayStream oferece um teste grátis de 24 horas com acesso completo.", linkLabel: "Obter um teste grátis" },
  vod: { term: "VOD (vídeo a pedido)", definition: "Filmes e séries que pode começar quando quiser, pausar e voltar a ver." },
  vpn: { term: "VPN", definition: "Um serviço que esconde e protege o seu tráfego de internet. Não é necessário para IPTV, mas alguns usam-no se o fornecedor de internet abrandar o vídeo." },
  "xtream-codes": { term: "Acesso Xtream Codes", definition: "Uma forma de iniciar sessão em aplicações IPTV com três dados: nome de utilizador, palavra-passe e URL do servidor. A maioria das aplicações aceita-o." },
};

export default pt;
