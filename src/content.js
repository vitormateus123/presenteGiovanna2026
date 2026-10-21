// Todo o texto e os dados do site ficam aqui. Edite sem mexer no layout.

export const SINCE = new Date(2021, 10, 27);

// Crie a playlist no Spotify > Compartilhar > Copiar link. O ID é o trecho depois de /playlist/ e antes do "?".
export const SPOTIFY_PLAYLIST_ID = "";

// o: opções | c: índice da correta | ok/no: reação ao acertar/errar
export const quiz = [
  { q: "Qual rolê abriu o nosso contador?", o: ["O rolê da igreja", "Uma viagem da escola", "Um show", "Uma ida ao cinema"], c: 0,
    ok: "O rolê da igreja, 27/11/2021. É dali que o contador começa a contar.", no: "Foi o rolê da igreja, 27/11/2021. É dali que o contador começa a contar." },
  { q: "Qual jogo roubou várias horas nossas?", o: ["Stardew Valley", "Minecraft", "Red Dead Redemption", "Friday Night Funkin’"], c: 1,
    ok: "Minecraft. Horas que ninguém devolve, e eu faria tudo de novo.", no: "Foi o Minecraft. Stardew e Red Dead ficam para o próximo save." },
  { q: "Qual filme eu te apresentei?", o: ["Jogos Vorazes", "Sociedade dos Poetas Mortos", "Como Treinar o Seu Dragão", "Percy Jackson"], c: 1,
    ok: "Sociedade dos Poetas Mortos. Carpe diem, capitã.", no: "Foi Sociedade dos Poetas Mortos. Hora de rever, capitã." },
  { q: "Que bebida tem a sua cara?", o: ["Água de coco", "Chá", "Coquinha gelada", "Suco de laranja"], c: 2,
    ok: "Coquinha gelada. Nem precisava de pergunta.", no: "Era coquinha gelada. Pergunta de graça." },
  { q: "Qual era a desculpa clássica para a gente sair?", o: ["Tomar um café", "Comprar pão", "Ir ao parque", "Passear com um gato"], c: 0,
    ok: "Um café. Nunca foi só o café, né?", no: "Era o café. Nunca foi só o café." },
];

export const results = [
  { min: 5, t: "Camarote", d: "Cinco de cinco. Você guarda tudo, até o que eu já tinha esquecido." },
  { min: 3, t: "Pista premium", d: "Nada mal. O que escapou eu conto lá dentro." },
  { min: 0, t: "Pista", d: "Tudo bem. Esse site existe justamente para lembrar." },
];

// c = cor (paleta no styles.css) | i = ícone
export const chapters = [
  { id: "historia", th: "sdpm", i: "feather", c: "fusion", title: "Como começou", hint: "27.11.2021, o rolê da igreja", lead: "Toda turnê tem uma primeira data. A nossa tem dia, mês e ano." },
  { id: "fotos", th: "gatos", i: "camera", c: "ruby", title: "Nós, em foto", hint: "Passa o dedo, tem mais", lead: "Algumas das fotos que guardei do nosso primeiro presente." },
  { id: "recados", th: "toh", i: "mic", c: "sapphire", title: "Recados", hint: "Gente que gosta de você, em vídeo", lead: "Eu não sou o único querendo cantar parabéns. Aperte o play." },
  { id: "mixtape", th: "taylor", i: "note", c: "bubble", title: "Mixtape", hint: "Para ouvir no fone e tocar na guitarra", lead: "Trilha sonora do seu aniversário, com a sua cara." },
  { id: "universo", th: "su", i: "spark", c: "gold", title: "Seu universo", hint: "Tudo que me lembra você", lead: "As coisas que me fazem pensar em você na hora." },
  { id: "album", i: "gem", c: "teal", th: "arcane", title: "Álbum de figurinhas", hint: "Tudo o que é a sua cara, em figurinha", lead: "Uma coleção inteira por tema. Toque em uma figurinha para ver maior." },
  { id: "carta", th: "kate", i: "mail", c: "ruby", title: "A carta", hint: "A última faixa. Lê com calma", lead: "O bis do show." },
];

export const story = [
  { d: "27.11.2021", t: "O rolê da igreja", p: "Foi a data que escolhi para começar a contar. Eu não sabia ainda, mas aquele dia ia virar contador, site e presente." },
  { d: "Etec e 9 de Julho", t: "A fase dos cafés", p: "Conversa depois da aula, “vamos tomar um café” como desculpa para ficar mais um tempo. Dias comuns que só ficaram bons porque você estava." },
  { d: "Desde então", t: "Minecraft, fofoca e abraço apertado", p: "Conversa que começa pequena e vai longe, dentro ou fora do jogo." },
];

export const photos = [
  { src: "./media/juntos-1.jpg", alt: "Giovanna e Vitor juntos em um passeio", cap: "memória 01" },
  { src: "./media/juntos-2.jpg", alt: "Giovanna e Vitor em uma selfie", cap: "memória 02" },
  { src: "./media/juntos-3.jpg", alt: "Giovanna e Vitor em uma foto ao ar livre", cap: "memória 03" },
];

export const videos = [
  { who: "Laura", src: "https://raw.githubusercontent.com/VitorMateus016/PresenteGiovanna/main/videoLaura.mp4" },
  { who: "Bia", src: "./media/recado-bia.mp4" },
];

// [música, artista, referência]
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
  "Giovanna, feliz aniversário.",
  "Obrigado pelos dias na 9 de Julho, pelos encontros na Etec e por cada café que era só desculpa. Obrigado por rir comigo, por me ouvir quando precisei e por confiar em mim também.",
  "Gosto muito de ter você por perto. Que o seu próximo ano venha cheio de história para contar, música para tocar e motivo para rir.",
  "Te amo.",
];

// Mensagem digitada na surpresa do bolo
export const wish = "Feliz aniversário, Giovanna. Hoje o palco é seu: tem foto, música, recado de gente que te ama e uma carta no final. Entra.";
export const nos = ["Agora não", "Tem certeza?", "Pensa de novo…", "Tá bom, mostra"];

// Opcional: música da gente em destaque na Mixtape. Exemplo: { t: "Título", a: "Artista", note: "Por que é nossa", youtubeId: "ID_DO_VIDEO" }
export const FEATURED_SONG = null;
