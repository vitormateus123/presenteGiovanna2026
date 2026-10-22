// Todo o texto e os dados do site ficam aqui. Edite sem mexer no layout.

export const SINCE = new Date(2021, 10, 27);

// Crie a playlist no Spotify > Compartilhar > Copiar link. O ID é o trecho depois de /playlist/ e antes do "?".
export const SPOTIFY_PLAYLIST_ID = "2XWt8iUCquygGzLPqjuRKM";

// o: opções | c: índice da correta | ok/no: reação ao acertar/errar
export const quiz = [
  { q: "O que marcou o início do contador da nossa amizade no outro site?", o: ["Uma ida ao cinema", "O rolê da igreja", "Uma viagem da escola", "Um show"], c: 1,
    ok: "O rolê da igreja, 27/11/2021. Foi ali que começou a contagem.", no: "Foi o rolê da igreja, em 27/11/2021. É dali que o contador parte." },
  { q: "Qual jogo a gente mais jogou junto?", o: ["Stardew Valley", "Minecraft", "Red Dead Redemption", "Friday Night Funkin’"], c: 1,
    ok: "Minecraft. Foram muitas horas — e eu faria tudo de novo.", no: "Foi Minecraft. Ainda dá vontade de abrir aquele mundo de novo." },
  { q: "Qual filme eu te apresentei e te traumatizou? Rs", o: ["Jogos Vorazes", "Como Treinar o Seu Dragão", "Sociedade dos Poetas Mortos", "Percy Jackson"], c: 2,
    ok: "Sociedade dos Poetas Mortos. Um clássico… e um trauma também, pelo visto.", no: "Foi Sociedade dos Poetas Mortos. Esse trauma tem nome, rs." },
  { q: "Qual era o apelido da Natani?", o: ["Duvidosa", "Amorosa", "Bondosa", "Preciosa"], c: 0,
    ok: "Duvidosa. Esse apelido não dá para esquecer.", no: "Era Duvidosa. Os outros até parecem elogios, mas não são o apelido." },
  { q: "O que seus gatos fazem comigo?", o: ["Alisam", "Mordem", "Miam", "Coagem"], c: 3,
    ok: "Coagem. Eles sabem exatamente como conseguir o que querem.", no: "Eles me coagem. Os gatos já entenderam como funciona." },
  { q: "É um plano do governo para…", o: ["Enganar todo mundo", "Vender alho-poró", "Vender sabão em pó", "Vender sabonete"], c: 2,
    ok: "Vender sabão em pó. Finalmente alguém percebeu o plano.", no: "É para vender sabão em pó. Agora o plano foi revelado." },
];

export const results = [
  { min: 6, t: "Memória de elefante", d: "Seis de seis! Você lembra de tudo, até do que eu já tinha esquecido." },
  { min: 4, t: "Quase lá", d: "Mandou bem! O que escapou eu conto daqui para frente." },
  { min: 0, t: "Hora de relembrar", d: "Tudo bem. Esse site existe justamente para lembrar." },
];

// Ordem = fluxo do site (quiz → surpresa → partes na ordem abaixo → sumário).
// c = cor (paleta no styles.css) | i = ícone | th = tema da figurinha
export const chapters = [
  { id: "historia", th: "sdpm", i: "feather", c: "fusion", title: "Nossa história", hint: "Do rolê da igreja às nossas conversas", lead: "Toda história tem uma primeira data. A nossa tem dia, mês e ano, e muitas conversas no meio." },
  { id: "fotos", th: "gatos", i: "camera", c: "ruby", title: "Nós, em foto", hint: "Nossas lembranças reunidas", lead: "Algumas das fotos que guardo com carinho. Um mural de momentos para ver com calma." },
  { id: "recados", th: "toh", i: "mic", c: "sapphire", title: "Recados", hint: "Gente que gosta de você, em vídeo", lead: "Eu não sou o único querendo te desejar parabéns. Aperte o play." },
  { id: "universo", th: "su", i: "spark", c: "gold", title: "Seu universo", hint: "Tudo que me lembra você", lead: "As coisas que me fazem pensar em você na hora." },
  { id: "album", i: "gem", c: "teal", th: "arcane", title: "Álbum de figurinhas", hint: "Tudo o que é a sua cara, em figurinha", lead: "Uma coleção inteira por tema. Toque em uma figurinha para ver maior." },
  { id: "playlist", th: "taylor", i: "note", c: "bubble", title: "Playlist", hint: "Para ouvir no fone e tocar na guitarra", lead: "Algumas músicas com a sua cara." },
  { id: "carta", th: "kate", i: "mail", c: "ruby", title: "A carta", hint: "A última parte. Lê com calma", lead: "Por fim, o que eu queria te dizer com calma." },
];

// Prólogo: etapas antes das partes (aparecem no sumário final)
export const prologue = [
  { href: "#/", title: "O quiz", hint: "Seis perguntas sobre a gente", th: "volei" },
  { href: "#/surpresa", title: "A surpresa", hint: "O bolo e a mensagem", th: "coca" },
];

export const story = [
  { d: "27.11.2021", t: "O rolê da igreja", p: "Foi a data que escolhi para começar a contar. Eu não sabia ainda, mas aquele dia ia virar contador, site e presente." },
  { d: "Etec e 9 de Julho", t: "A fase dos cafés", p: "Conversa depois da aula, “vamos tomar um café” como desculpa para ficar mais um tempo. Dias comuns que só ficaram bons porque você estava." },
  { d: "Desde então", t: "Minecraft, fofoca e abraço apertado", p: "Conversa que começa pequena e vai longe, dentro ou fora do jogo." },
];

// Nossa história: texto principal + linha do tempo (big = cartão aberto; sem big = nota que abre ao tocar)
// st = [tema, k] da figurinha que "gruda" no cartão
export const hist = {
  lead: "Eu fui rever nossas conversas no WhatsApp, pedi para a IA analisar e ela trouxe algumas lembranças...",
  text: [
    "Ri de algumas coisas, fiquei com saudade de outras e percebi que, no meio de tantos assuntos aleatórios, sempre teve uma coisa importante: eu podia contar com você. E espero que você também saiba que pode contar comigo.",
    "Em 2022, eu te disse que você esteve do meu lado quando eu me sentia meio sozinho naquela escola. Também te falei que você não precisava esperar ter um assunto importante para me chamar. Podia mandar qualquer coisa, por mais aleatória que fosse. Continua valendo, viu?",
    "Com o tempo, vieram os planos para se encontrar, as saudades e a comemoração de quando finalmente saiu um rolê do nosso trio. Eu vi você falando que sentia falta da gente e que faria de tudo para manter o trio vivo. Guardo isso com muito carinho, assim como guardo cada momento que a gente conseguiu passar junto.",
    "E tem coisas que são só nossas: você me chamando de “minha criança”, as brincadeiras meio duvidosas, os conselhos, as conversas que começam com uma coisa e vão parar em outra completamente diferente. Gosto de pensar que nossa amizade também foi feita disso tudo, não só dos grandes momentos.",
    "Você já me disse que eu sou um dos seus portos seguros. Eu espero que saiba que você também é muito importante para mim. Sou grato por ter você na minha vida, por tudo o que já vivemos e por ainda poder dividir tanta coisa com você.",
    "Eu te amo muito, meu bem. E, se eu não falar isso em todas as conversas, você sabe. (Até porque às vezes a gente demonstra carinho mandando vídeos mais ou menos e fingindo que eles são ótimos.)",
  ],
};

export const memories = [
  { d: "29.01.2022", t: "Minha criança", big: 1, st: ["b99", 0], p: "Você me chamou de “minha criança”, agradeceu pelos momentos do dia a dia e fechou com uma ameaça de martelo. O carinho entre a gente já vinha com brincadeira desde o começo." },
  { d: "09.07.2022", t: "Pode contar comigo", big: 1, st: ["kate", 1], p: "Eu te disse que você era única para mim e que sempre poderia contar comigo. Você respondeu que eu era o melhor amigo que você poderia ter e que eu também podia contar com você." },
  { d: "13.07.2022", t: "Qualquer assunto", p: "Eu disse que você podia me mandar qualquer coisa, até o assunto mais aleatório. Continua valendo." },
  { d: "15.10.2022", t: "Melhor amigo", p: "Você me chamou de melhor amigo numa conversa descontraída, dessas em que a confiança aparece sem esforço." },
  { d: "29.01.2023", t: "Escola, cidade ou país", big: 1, st: ["sdpm", 3], p: "No meu aniversário, você disse que eu era seu melhor amigo, que estaria ao meu lado e que me seguiria se eu mudasse de escola, cidade ou país. Tudo com o seu humor de sempre." },
  { d: "22.10.2024", t: "Confidentes", big: 1, st: ["gatos", 5], p: "No seu aniversário, escrevi que você era minha confidente e que eu gostava de dividir minhas alegrias e dores com você. Você respondeu que eu também era seu confidente, seu melhor amigo e uma das suas pessoas favoritas." },
  { d: "18.11.2024", t: "Você percebeu", big: 1, st: ["su", 2], p: "Você notou que eu não estava bem, disse que se preocupava comigo e que estaria ali até para as coisas pequenas." },
  { d: "29.01.2025", t: "Porto seguro", big: 1, st: ["toh", 1], p: "Você me chamou de um dos seus portos seguros e disse que eu te faço rir como ninguém. Essa eu guardo com muito carinho." },
  { d: "28.09.2025", t: "Sua validação", p: "Você disse que a minha validação era muito importante para você. Eu guardei." },
  { d: "23.01.2026", t: "Juntinhos", st: ["gatos", 2], p: "“A gente já tá a tanto tempo juntinhos” e “Amo você amigo”. Curto, natural e do jeito que a gente é." },
  { d: "29.01.2026", t: "Dia de ser fofinha", p: "No meu aniversário, você brincou que aquela era a ocasião anual para ser fofinha comigo e falar de sentimentos." },
];

export const trio = [
  { d: "11.11.2023", t: "Saiu o rolê", big: 1, st: ["volei", 1], p: "Você comemorou que, finalmente, tinha saído o rolê do nosso trio." },
  { d: "03.07.2024", t: "Fazer de tudo", big: 1, p: "Você disse que faria de tudo para o trio continuar existindo." },
  { d: "07.12.2025", t: "A foto favorita", big: 1, st: ["taylor", 2], p: "Você chamou uma foto dos três de a sua favorita." },
  { d: "05.04.2026", t: "Sempre seus favoritos", big: 1, p: "Você disse que eu e a Laura sempre seríamos seus favoritos." },
];

export const photos = [
  { src: "./media/juntos-1.jpg", alt: "Giovanna e Vitor juntos em um passeio", cap: "memória 01" },
  { src: "./media/juntos-2.jpg", alt: "Giovanna e Vitor em uma selfie", cap: "memória 02" },
  { src: "./media/juntos-3.jpg", alt: "Giovanna e Vitor em uma foto ao ar livre", cap: "memória 03" },
  { src: "./media/fotos-giovanna/outubro-2024-pintura.webp", alt: "Giovanna e Vitor sorrindo juntos, com pintura no rosto", cap: "um dia colorido" },
  { src: "./media/fotos-giovanna/outubro-2024-fantasia.webp", alt: "Giovanna e Vitor fantasiados, sorrindo em uma selfie", cap: "fantasiados" },
  { src: "./media/fotos-giovanna/outubro-2024-sala.webp", alt: "Giovanna e Vitor sentados juntos em uma sala", cap: "na sala" },
  { src: "./media/fotos-giovanna/dezembro-2024.webp", alt: "Giovanna e Vitor em uma selfie dentro de casa", cap: "mais uma selfie" },
  { src: "./media/fotos-giovanna/janeiro-2025.webp", alt: "Giovanna e Vitor sentados juntos em um evento", cap: "a gente junto" },
  { src: "./media/fotos-giovanna/maio-2025.webp", alt: "Giovanna e Vitor em uma selfie descontraída", cap: "de cabeça pra baixo" },
  { src: "./media/fotos-giovanna/junho-2025.webp", alt: "Giovanna e Vitor em uma selfie vista de cima", cap: "outro ângulo" },
  { src: "./media/fotos-giovanna/julho-2025.webp", alt: "Giovanna e Vitor juntos à noite", cap: "uma noite nossa" },
  { src: "./media/fotos-giovanna/outubro-2026-passeio.webp", alt: "Giovanna e Vitor em uma selfie durante um passeio", cap: "por aí" },
  { src: "./media/fotos-giovanna/outubro-2026-dinossauro.webp", alt: "Giovanna e Vitor com outras pessoas e um dinossauro ao fundo", cap: "até o dinossauro apareceu" },
  { src: "./media/fotos-giovanna/selfie-casa.webp", alt: "Giovanna e Vitor em uma selfie sentados juntos", cap: "bem pertinho" },
  { src: "./media/fotos-giovanna/selfie-noite.webp", alt: "Giovanna e Vitor sorrindo à noite", cap: "mais uma noite" },
  { src: "./media/fotos-giovanna/selfie-espelho-1.webp", alt: "Giovanna e Vitor em uma selfie no espelho", cap: "no espelho" },
  { src: "./media/fotos-giovanna/selfie-espelho-2.webp", alt: "Giovanna e Vitor sorrindo em outra selfie no espelho", cap: "mais um reflexo" },
  { src: "./media/fotos-giovanna/selfie-etec.webp", alt: "Giovanna e Vitor juntos na Etec", cap: "na Etec" },
];

export const videos = [
  { who: "Laura", src: "https://raw.githubusercontent.com/VitorMateus016/PresenteGiovanna/main/videoLaura.mp4" },
  { who: "Bia", src: "./media/recado-bia.mp4" },
];

// [música, artista, referência] — a playlist é só mais um elemento do site
export const tracks = [
  ["Cruel Summer", "Taylor Swift", "Taylor"],
  ["Mirrorball", "Taylor Swift", "Taylor"],
  ["Espresso", "Sabrina Carpenter", "Sabrina"],
  ["Please Please Please", "Sabrina Carpenter", "Sabrina"],
  ["Pink Pony Club", "Chappell Roan", "Chappell"],
  ["Good Luck, Babe!", "Chappell Roan", "Chappell"],
  ["Gnarly", "KATSEYE", "KATSEYE"],
  ["Touch", "KATSEYE", "KATSEYE"],
  ["Starving", "Hailee Steinfeld", "Hailee"],
  ["Future Days", "Pearl Jam", "Ellie"],
  ["Running Up That Hill", "Kate Bush", "Stranger Things"],
  ["Enemy", "Imagine Dragons & JID", "Arcane"],
  ["Stronger Than You", "Estelle", "Steven Universo"],
  ["Rebelde", "RBD", "Rebelde"],
];

export const universe = [
  { c: "ruby", th: "su", t: "Rubi & Safira", d: "Duas cores, uma fusão, zero medo. Steven Universo inteiro cabe nelas." },
  { c: "teal", th: "toh", t: "Luz & Amity", d: "Começou em rivalidade, terminou em Lumity. Final feliz merecido." },
  { c: "fusion", th: "kate", t: "Kate Bishop", d: "A mira mais certeira da Marvel e a que você mais defende." },
  { c: "gold", th: "tlou", t: "Ellie", d: "Violão no colo, humor afiado e coragem de sobra. Combina." },
  { c: "bubble", th: "taylor", t: "Trilha oficial", d: "Taylor, Sabrina, Chappell, KATSEYE. E a guitarra para tocar junto." },
  { c: "sapphire", i: "wave", t: "Praia", d: "Lugar bom é perto da água. Percy Jackson concorda." },
  { c: "gold", th: "gatos", t: "Gatos", d: "Se tem gato por perto, o resto do assunto espera." },
  { c: "ruby", th: "coca", t: "Coquinha gelada", d: "A resposta certa para quase toda pergunta." },
  { c: "fusion", th: "volei", t: "Vôlei", d: "A seleção feminina em quadra e o gato de bola de vôlei em casa." },
  { c: "sapphire", th: "jiu", k: 2, t: "Jiu-jitsu", d: "Kimono, faixa e a calma de quem sabe cair." },
  { c: "teal", th: "f1", t: "Fórmula 1", d: "Eu aprendi a gostar por sua causa. Box, box." },
  { c: "bubble", th: "stardew", t: "Stardew, FNF e Red Dead", d: "Três jeitos diferentes de perder a tarde jogando." },
  { c: "gold", th: "minecraft", t: "Minecraft", d: "O servidor mais longo da nossa história." },
  { c: "bubble", th: "sdpm", t: "Dickinson e os Poetas", d: "“Hope is the thing with feathers.” Carpe diem, Giovanna." },
  { c: "ruby", th: "rebelde", t: "Rebelde", d: "Elite Way School, gravata vermelha e todas as músicas decoradas." },
  { c: "fusion", th: "arcane", t: "Arcane", d: "Piltover, Zaun e uma temporada que ninguém esquece." },
  { c: "teal", th: "hg", t: "Jogos Vorazes", d: "Katniss, tordo e a mira que não erra." },
  { c: "gold", th: "httyd", t: "Como Treinar o Seu Dragão", d: "Para quem sabe que todo bicho merece um amigo." },
  { c: "ruby", th: "st", t: "Stranger Things", d: "Hawkins, Onze e noite de maratona." },
  { c: "sapphire", th: "b99", t: "Brooklyn Nine-Nine", d: "Humor de delegacia e um corgi que roubou a cena." },
];

export const letter = [
  "Giovanna, minha querida,",
  "Inicio esta carta manifestando todo o carinho, amor e admiração que sinto por ti. Sou e serei eternamente grato a Deus por ter me dado você como amiga, correspondente e, acima de tudo, como alguém que considero uma verdadeira irmã.",
  "Saiba que guardo com imenso carinho todos os nossos momentos e lembranças, desde as conversas mais simples até as ocasiões mais especiais, desejando, profundamente, que possamos continuar construindo essas memórias por toda as nossas vidas. São recordações que levarei sempre comigo e que representam o quanto tua amizade é especial para mim.",
  "Te agradeço por todos esses anos em que esteve ao meu lado, nos momentos bons e ruins, sempre me apoiando, aconselhando e auxiliando quando precisei. Sou imensamente feliz por poder compartilhar contigo tantas experiências e, sobretudo, por saber que tenho em você alguém com quem posso contar. Tua amizade é, sem dúvidas, uma dádiva, e tê-la ao meu lado me torna mais feliz.",
  "Não sei ao certo o que será do meu futuro, tampouco quais caminhos a vida nos reserva, mas, entre tantas incertezas, uma das poucas certezas que carrego é a de que desejo, profundamente, tê-la sempre comigo. Espero que, independentemente do tempo, da distância ou das circunstâncias, nossa amizade permaneça tão bonita e verdadeira quanto é hoje.",
  "Que esse novo ciclo que se inicia em tua vida seja repleto de sucessos, alegrias, conquistas e realizações, pois sei que tu é capaz de alcançar tudo aquilo que almejas. Rogo a Deus que continue iluminando teus caminhos, abençoando tuas escolhas e te concedendo sabedoria para enfrentar os desafios que surgirem. Que nunca te faltem motivos para sorrir, sonhos para realizar e pessoas que reconheçam o ser humano extraordinário que você é.",
  "Eu te amo demais, Giovanna, e desejo, do fundo do meu coração, que alcance tudo aquilo que anseia. Que as melhores coisas desta vida recaiam sobre ti e que a felicidade esteja sempre presente em teus dias. Saiba que, independentemente dos rumos que nossas vidas tomarem, sempre estarei torcendo por você, por tua felicidade e por cada uma de tuas conquistas.",
  "Um feliz aniversário, meu bem! Que Deus te abençoe imensamente e que ainda tenhamos muitos anos, histórias e momentos para compartilhar. 🤍",
];

// Mensagem digitada na surpresa do bolo (leva ao início das partes)
export const wish = "Feliz aniversário, Giovanna. Juntei aqui a nossa história, fotos, recados de quem te ama, o seu universo e uma carta no final. Vem comigo.";
export const nos = ["Agora não", "Tem certeza?", "Pensa de novo…", "Tá bom, mostra"];

// Opcional: música da gente em destaque na Playlist. Exemplo: { t: "Título", a: "Artista", note: "Por que é nossa", youtubeId: "ID_DO_VIDEO" }
export const FEATURED_SONG = null;
