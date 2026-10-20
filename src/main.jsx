import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const questions = [
  { title: "Qual rolê entrou para o nosso contador de amizade?", options: ["O rolê da igreja", "Uma viagem da escola", "Um show", "Uma ida ao cinema"], correct: 0 },
  { title: "Qual jogo rendeu várias horas nossas?", options: ["Stardew Valley", "Minecraft", "Red Dead Redemption", "Friday Night Funkin’"], correct: 1 },
  { title: "Qual filme eu te apresentei?", options: ["Jogos Vorazes", "Sociedade dos Poetas Mortos", "Como Treinar o Seu Dragão", "Percy Jackson"], correct: 1 },
  { title: "Qual bebida combina demais com você?", options: ["Água de coco", "Chá", "Coquinha gelada", "Suco de laranja"], correct: 2 },
  { title: "Qual era uma desculpa clássica para a gente sair?", options: ["Tomar um café", "Comprar pão", "Ir ao parque", "Passear com um gato"], correct: 0 }
];

const chapters = [
  { id: "historia", number: "01", title: "Nossa história", hint: "Desde aquele rolê da igreja", lead: "Tem coisa que só parece importante depois que a gente olha para trás.", blocks: [
    ["27 de novembro de 2021", "Um começo que ficou", "Foi a data que escolhi para contar a nossa amizade. Você lembra do rolê da igreja?"],
    ["Entre um dia e outro", "Etec, 9 de Julho, café", "As conversas depois da aula, as saídas para “tomar um café” e os dias comuns que ficaram bons porque você estava lá."],
    ["Por todo esse tempo", "Sempre mais uma história", "Teve Minecraft, fofoca, risada, abraço apertado e conversa que começou pequena e foi longe."]
  ] },
  { id: "memorias", number: "02", title: "Memórias", hint: "As fotos que gosto de guardar", lead: "Queria que você pudesse passar por esses momentos sem pressa.", blocks: [
    ["Um pouco de nós", "Fotos que eu gosto de guardar", "Essas são algumas das fotos que estavam no nosso primeiro presente. Lembranças de dias diferentes, todas nossas."]
  ] },
  { id: "recados", number: "03", title: "Recados", hint: "Tem mais gente aqui", lead: "Eu não sou o único querendo te desejar feliz aniversário.", blocks: [
    ["Laura e Bia", "Aperte o play", "Eu não quis que você passasse seu aniversário sem ouvir quem também gosta muito de você."]
  ] },
  { id: "universo", number: "04", title: "Seu universo", hint: "Pequenas coisas com a sua cara", lead: "Algumas coisas me fazem lembrar de você na mesma hora.", blocks: [
    ["01", "Uma música", "Taylor Swift tocando e você com a guitarra na mão."],
    ["02", "Um lugar", "A praia, de preferência com tempo para ficar mais um pouco."],
    ["03", "Uma cena", "Um gato por perto, uma coquinha gelada e alguma conversa que ainda vai render."]
  ] },
  { id: "carta", number: "05", title: "A carta", hint: "Essa é para ler com calma", lead: "Giovanna, feliz aniversário.", blocks: [
    ["Para você", "Algumas coisas eu já te disse", "Obrigado pelos dias na 9 de Julho, pelos encontros na Etec e por todos os cafés. Obrigado pelas risadas, por me ouvir quando precisei e por confiar em mim também. Gosto muito de ter você por perto. Espero que seu novo ano venha cheio de coisas boas, de histórias para contar e de motivos para rir. Te amo."]
  ] }
];

function CatLine() {
  return <svg className="cat-line" viewBox="0 0 115 120" fill="none" aria-hidden="true">
    <path d="M23 46 28 14l23 21h13l24-21 4 32c10 13 13 25 9 39-6 22-23 31-45 31-27 0-43-12-47-32-2-14 1-27 14-38Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M39 71h.2m36 0h.2M54 83l4 3 4-3m-4 3v6m0 0-7 4m7-4 7 4M32 85l-21-2m21 9-20 3m72-10 20-2m-20 9 19 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>;
}

function App() {
  const [page, setPage] = useState("welcome");
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [chapter, setChapter] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const update = () => {
      const since = new Date(2021, 10, 27);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      setDays(Math.max(0, Math.floor((today - since) / 86400000)));
    };
    update();
    const interval = window.setInterval(update, 60000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = page === "chapter" ? chapters[chapter].title + " · Para Giovanna" : "Para Giovanna";
  }, [page, question, chapter]);

  const goBack = () => {
    if (page === "reveal") setPage("welcome");
    if (page === "quiz") question ? setQuestion(question - 1) : setPage("reveal");
    if (page === "result") { setQuestion(questions.length - 1); setPage("quiz"); }
    if (page === "chapter") setPage("home");
  };
  const choose = value => setAnswers(current => current.map((answer, i) => i === question ? value : answer));
  const next = () => question + 1 === questions.length ? setPage("result") : setQuestion(question + 1);
  const score = answers.reduce((sum, answer, i) => sum + Number(answer === questions[i].correct), 0);
  const currentChapter = chapters[chapter];
  const dark = ["welcome", "reveal", "quiz", "result"].includes(page);

  return <div className={dark ? "app dark" : "app light"}>
    <header className="site-header frame">
      <span className="wordmark">para giovanna<span className="wordmark-dot">.</span></span>
      {["reveal", "quiz", "result", "chapter"].includes(page)
        ? <button className="quiet-back" onClick={goBack}>← voltar</button>
        : <span className="header-note">de vitor, para você</span>}
    </header>

    {page === "welcome" && <main className="welcome frame">
      <div className="welcome-copy">
        <span className="kicker">UM PEDACINHO DO QUE A GENTE VIVEU</span>
        <h1>Giovanna,<br/>feliz aniversário<span className="period">.</span></h1>
        <p>Fiz uma coisa pra você. Vai com calma: tem bastante história aqui dentro.</p>
        <button className="button-lime" onClick={() => setPage("reveal")}>Quero ver <span aria-hidden="true">↗</span></button>
      </div>
      <div className="welcome-aside" aria-hidden="true">
        <span className="scribble">desde 27.11.21</span>
        <img className="hero-photo" src="/media/juntos-2.jpg" alt="" fetchPriority="high" /><span className="cat-stamp"><CatLine /></span>
        <span className="aside-bottom">um presente só seu <span>↗</span></span>
      </div>
    </main>}

    {page === "reveal" && <main className="stage frame">
      <span className="kicker">ESPERA UM POUQUINHO</span>
      <h1>Calma.<br/>Antes tem uma coisa.</h1>
      <p>Separei cinco perguntas sobre nós. Quero ver do que você ainda lembra.</p>
      <button className="button-lime" onClick={() => setPage("quiz")}>Bora <span aria-hidden="true">↗</span></button>
      <span className="stage-footnote">errar não impede ninguém de abrir o presente</span>
    </main>}

    {page === "quiz" && <main className="quiz frame">
      <div className="quiz-top"><span>Pergunta {question + 1} de {questions.length}</span><span>Sem pressão</span></div>
      <div className="quiz-progress" aria-hidden="true">{questions.map((_, i) => <span key={i} className={i <= question ? "filled" : ""}/>)}</div>
      <h1>{questions[question].title}</h1>
      <div className="answers" role="group" aria-label="Escolha uma resposta">
        {questions[question].options.map((option, i) =>
          <button key={option} className={"answer " + (answers[question] === i ? "selected" : "")}
            aria-pressed={answers[question] === i} onClick={() => choose(i)}>
            <span className="answer-letter">{["a", "b", "c", "d"][i]}.</span>{option}
          </button>)}
      </div>
      <button className="button-lime quiz-next" disabled={answers[question] === null} onClick={next}>
        {question + 1 === questions.length ? "Ver resultado" : "É essa"} <span aria-hidden="true">↗</span>
      </button>
    </main>}

    {page === "result" && <main className="stage frame">
      <span className="kicker">FIM DA BRINCADEIRA</span>
      <h1>{score} de 5<span className="period">.</span></h1>
      <p>{score === 5 ? "Você lembra mesmo de tudo. Tô até impressionado." :
        score >= 3 ? "Nada mal. Algumas histórias ficaram bem guardadas, pelo visto." :
        "Precisamos conversar mais sobre as nossas histórias. Mas o presente continua liberado, claro."}</p>
      <button className="button-lime" onClick={() => setPage("home")}>Abrir o presente <span aria-hidden="true">↗</span></button>
    </main>}

    {page === "home" && <main>
      <section className="home-intro frame">
        <span className="kicker">AGORA SIM, PODE ENTRAR</span>
        <h1>Tem muita coisa sua aqui.<br/><span>Algumas também são nossas.</span></h1>
        <p>Escolhe por onde começar. Deixei a carta para o fim, mas você manda.</p>
        <div className="friendship"><span>{days.toLocaleString("pt-BR")}</span><span>dias desde o rolê da igreja<br/>e contando...</span></div>
      </section>
      <section className="chapter-section frame" aria-labelledby="chapters-title">
        <div className="chapter-head"><h2 id="chapters-title">Os capítulos</h2><span>01 — 05</span></div>
        <div className="chapter-list">
          {chapters.map((item, i) =>
            <button className="chapter-row" key={item.id} onClick={() => { setChapter(i); setPage("chapter"); }}>
              <span className="chapter-number">{item.number}</span>
              <span className="chapter-text"><strong>{item.title}</strong><small>{item.hint}</small></span>
              <span className="chapter-arrow" aria-hidden="true">↗</span>
            </button>)}
        </div>
      </section>
    </main>}

    {page === "chapter" && <main className="chapter-page frame">
      <span className="kicker">CAPÍTULO {currentChapter.number} / 05</span>
      <h1>{currentChapter.title}<span className="period">.</span></h1>
      <p className="chapter-lead">{currentChapter.lead}</p>
      <div className="story-flow">
        {currentChapter.blocks.map(([label, title, body], i) =>
          <section className="story-block" key={label + i}>
            <span className="story-index">{label}</span>
            <div><h2>{title}</h2><p>{body}</p></div>
          </section>)}
      </div>
      {chapter === 1 && <div className="photo-gallery" aria-label="Fotos nossas">
        <figure><img src="/media/juntos-1.jpg" alt="Giovanna e Vitor juntos em um passeio" loading="lazy" /><figcaption>Um dia para lembrar.</figcaption></figure>
        <figure><img src="/media/juntos-2.jpg" alt="Giovanna e Vitor em uma selfie" loading="lazy" /><figcaption>Mais uma para guardar.</figcaption></figure>
        <figure><img src="/media/juntos-3.jpg" alt="Giovanna e Vitor em uma foto ao ar livre" loading="lazy" /><figcaption>E essa também.</figcaption></figure>
      </div>}
      {chapter === 2 && <div className="video-gallery">
        <section><h2>Laura</h2><video controls playsInline preload="none" aria-label="Recado em vídeo da Laura"><source src="https://raw.githubusercontent.com/VitorMateus016/PresenteGiovanna/main/videoLaura.mp4" type="video/mp4" />Seu navegador não conseguiu abrir o vídeo.</video></section>
        <section><h2>Bia</h2><video controls playsInline preload="none" aria-label="Recado em vídeo da Bia"><source src="/media/recado-bia.mp4" type="video/mp4" />Seu navegador não conseguiu abrir o vídeo.</video></section>
      </div>}
      <nav className="chapter-nav" aria-label="Navegação dos capítulos">
        <button className="text-link" onClick={() => setPage("home")}>← todos os capítulos</button>
        {chapter < chapters.length - 1 && <button className="text-link" onClick={() => setChapter(chapter + 1)}>próximo capítulo ↗</button>}
      </nav>
    </main>}

    {!dark && <footer className="footer frame"><span>feito para a Giovanna</span><span>com carinho, Vitor</span></footer>}
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
