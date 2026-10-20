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
  { min: 5, t: "Cinco de cinco.", d: "Você guarda tudo, até o que eu já tinha esquecido." },
  { min: 3, t: "Quase tudo.", d: "Nada mal. O que escapou eu conto lá dentro." },
  { min: 0, t: "Tudo bem.", d: "Esse site existe justamente para lembrar." },
];

// Abertura da página de rolagem contínua
export const intro = {
  kicker: "Nossa história", title: "Um pouco", em: "da gente.",
  lead: "Lembranças, fotos, recados e as coisas que me fazem pensar em você. É só descer, no seu tempo.",
};

// Envelope que abre ao toque, entre as perguntas e a página principal
export const gift = {
  kicker: "Antes de continuar", title: "Chegou uma", em: "carta pra você.", hint: "toque no envelope para abrir",
  photo: "./media/juntos-1.jpg", alt: "Giovanna e Vitor juntos em um passeio", to: "Gi,",
  text: [
    "Feliz aniversário. Esse cantinho foi feito para celebrar você e tudo de bom que cabe na nossa história.",
    "Vai com calma: tem fotos, recados em vídeo, músicas e uma carta esperando no final.",
  ],
};

// c = cor (paleta no styles.css) | i = ícone
export const chapters = [
  { id: "historia", i: "feather", c: "fusion", title: "Como começou", lead: "Toda história tem uma primeira data. A nossa tem dia, mês e ano." },
  { id: "fotos", i: "camera", c: "ruby", title: "Nós, em foto", lead: "Algumas das fotos que guardei do nosso primeiro presente." },
  { id: "recados", i: "heart", c: "sapphire", title: "Recados", lead: "Eu não sou o único que gosta de você. Aperte o play." },
  { id: "mixtape", i: "note", c: "bubble", title: "Músicas", lead: "Algumas músicas que me lembram você." },
  { id: "universo", i: "spark", c: "gold", title: "Seu universo", lead: "Doze coisas que me fazem pensar em você na hora." },
  { id: "carta", i: "mail", c: "teal", title: "A carta", lead: "Lê com calma." },
];

export const story = [
  { d: "27.11.2021", t: "O rolê da igreja", p: "Foi a data que escolhi para começar a contar. Eu não sabia ainda, mas aquele dia ia virar contador, site e presente." },
  { d: "Etec e 9 de Julho", t: "A fase dos cafés", p: "Conversa depois da aula, “vamos tomar um café” como desculpa para ficar mais um tempo. Dias comuns que só ficaram bons porque você estava." },
  { d: "Desde então", t: "Minecraft, fofoca e abraço apertado", p: "Conversa que começa pequena e vai longe, dentro ou fora do jogo.",
    img: "./media/juntos-3.jpg", alt: "Giovanna e Vitor em uma foto ao ar livre", cap: "e a história continua" },
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
  { c: "ruby", i: "gem", t: "Rubi & Safira", d: "Duas cores, uma fusão, zero medo. Steven Universo inteiro cabe nelas." },
  { c: "teal", i: "heart", t: "Luz & Amity", d: "Começou em rivalidade, terminou em Lumity. Final feliz merecido." },
  { c: "fusion", i: "bow", t: "Kate Bishop", d: "A mira mais certeira da Marvel e a que você mais defende." },
  { c: "gold", i: "note", t: "Ellie", d: "Violão no colo, humor afiado e coragem de sobra. Combina." },
  { c: "bubble", i: "note", t: "Trilha oficial", d: "Taylor, Sabrina, Chappell, KATSEYE. E a guitarra para tocar junto." },
  { c: "sapphire", i: "wave", t: "Praia", d: "Lugar bom é perto da água. Percy Jackson concorda." },
  { c: "gold", i: "cat", t: "Gatos", d: "Se tem gato por perto, o resto do assunto espera." },
  { c: "ruby", i: "can", t: "Coquinha gelada", d: "A resposta certa para quase toda pergunta." },
  { c: "fusion", i: "ball", t: "Vôlei, jiu-jitsu e F1", d: "Seleção em quadra, kimono no tatame e eu aprendendo Fórmula 1 por sua causa." },
  { c: "teal", i: "gamepad", t: "Stardew, FNF, Red Dead", d: "E o Minecraft, claro: o servidor mais longo da nossa história." },
  { c: "bubble", i: "feather", t: "Dickinson e os Poetas", d: "“Hope is the thing with feathers.” Carpe diem, Giovanna." },
  { c: "ruby", i: "spark", t: "Maratonas", d: "Rebelde, Stranger Things, Arcane, Jogos Vorazes, Como Treinar o Seu Dragão." },
];

export const letter = [
  "Giovanna, feliz aniversário.",
  "Obrigado pelos dias na 9 de Julho, pelos encontros na Etec e por cada café que era só desculpa. Obrigado por rir comigo, por me ouvir quando precisei e por confiar em mim também.",
  "Gosto muito de ter você por perto. Que o seu próximo ano venha cheio de história para contar, música para tocar e motivo para rir.",
  "Te amo.",
];

export const letterPhoto = { src: "./media/juntos-2.jpg", alt: "Vitor e Giovanna em uma selfie", cap: "nós dois" };