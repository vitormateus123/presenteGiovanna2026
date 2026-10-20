import React, { useEffect, useMemo, useRef, useState } from "react";
import { SINCE, SPOTIFY_PLAYLIST_ID, quiz, results, gift, chapters, story, photos, videos, tracks, universe, letter, letterPhoto } from "./content.js";

const PATHS = {
  pick: "M12 3c5 0 8 3 8 7 0 6-5 11-8 11s-8-5-8-11c0-4 3-7 8-7z",
  feather: "M20 4c-8 0-13 5-13 11l-3 5M7 15h7M9 11h8M12 8h7",
  gem: "M6 4h12l4 5-10 11L2 9zM2 9h20M9 4 7 9l5 11 5-11-2-5",
  cat: "M5 9V4l4 3h6l4-3v5c2 2 2 5 1 7-2 4-6 4-8 4s-6 0-8-4c-1-2-1-5 1-7zM9 12h.01M15 12h.01M11 15l1 1 1-1",
  wave: "M2 12c3-4 5-4 8 0s5 4 8 0 3-3 4-2M2 18c3-4 5-4 8 0s5 4 8 0 3-3 4-2M2 6c3-4 5-4 8 0s5 4 8 0 3-3 4-2",
  can: "M8 3h8l1 3v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6zM7 8h10M7 16h10",
  ball: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12c5 0 9-3 10-9M21 12c-5 0-8 3-9 9M6 19c1-6 5-9 13-10",
  heart: "M12 20S4 15 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15 12 20 12 20z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  spark: "M12 2v6M12 16v6M2 12h6M16 12h6M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3",
  bow: "M6 3c8 3 8 15 0 18M6 3v18M6 12h16M18 9l4 3-4 3",
  camera: "M4 7h4l2-3h4l2 3h4v13H4zM12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7",
  mic: "M9 3h6v10a3 3 0 0 1-6 0zM5 11a7 7 0 0 0 14 0M12 18v3",
  note: "M9 18V5l11-2v13M9 18a3 3 0 1 1-3-3M20 16a3 3 0 1 1-3-3",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  gamepad: "M6 8h12a4 4 0 0 1 4 4v2a3 3 0 0 1-5 2l-1-2H8l-1 2a3 3 0 0 1-5-2v-2a4 4 0 0 1 4-4zM8 10.5v3M6.5 12h3M16 11.5h.01M18 13h.01",
};
const Icon = ({ n, size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>
);

const hash = () => location.hash.replace(/^#\/?/, "");
const go = (p) => { location.hash = "/" + p; };
function useRoute() {
  const [h, setH] = useState(hash);
  useEffect(() => {
    const f = () => { setH(hash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return h.split("/");
}

function Carousel({ items, render, label, wide }) {
  const ref = useRef(null);
  const [i, setI] = useState(0);
  const to = (k) => {
    const el = ref.current, ch = el.children[Math.max(0, Math.min(items.length - 1, k))];
    el.scrollTo({ left: ch.offsetLeft - (el.clientWidth - ch.offsetWidth) / 2, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = ref.current, mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0, dist = Infinity;
    [...el.children].forEach((c, k) => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < dist) { dist = d; best = k; } });
    setI(best);
  };
  return (
    <div className="car" role="region" aria-roledescription="carrossel" aria-label={label}>
      <div className={"car-track" + (wide ? " wide" : "")} ref={ref} onScroll={onScroll} tabIndex={0}>
        {items.map((it, k) => <div className="slide" key={k} aria-label={`${k + 1} de ${items.length}`}>{render(it)}</div>)}
      </div>
      <div className="car-ui">
        <button className="prev" onClick={() => to(i - 1)} disabled={i === 0} aria-label="Anterior"><Icon n="arrow" /></button>
        <span className="dots">{items.map((_, k) => <i key={k} className={k === i ? "on" : ""} />)}</span>
        <button onClick={() => to(i + 1)} disabled={i === items.length - 1} aria-label="Próximo"><Icon n="arrow" /></button>
      </div>
    </div>
  );
}

const Top = ({ back }) => (
  <header className="wrap top">
    <a className="mark" href="#/">Giovanna <i>2026</i></a>
    {back !== null && <a className="back" href={"#/" + back}>← voltar</a>}
  </header>
);

const Welcome = () => (
  <main className="wrap hero">
    <div className="rise">
      <p className="kicker">Abre as cortinas</p>
      <h1 style={{ marginTop: 18 }}>Giovanna, hoje o show é <em>seu.</em></h1>
      <p className="lead">Antes de abrir o palco, um soundcheck rápido: cinco perguntas sobre a gente. Errar não barra ninguém. Só quero ver quem lembra mais do rolê da igreja.</p>
      <button className="btn" onClick={() => go("soundcheck")}>Começar o soundcheck <Icon n="arrow" /></button>
    </div>
    <div className="polaroid rise">
      <img src="./media/juntos-3.jpg" alt="Giovanna e Vitor em uma foto ao ar livre" fetchPriority="high" />
      <span>desde 27.11.21</span>
      <i className="sticker s1"><Icon n="pick" /></i>
      <i className="sticker s2"><Icon n="cat" /></i>
      <i className="sticker s3"><Icon n="spark" /></i>
    </div>
  </main>
);

function Quiz() {
  const [i, setI] = useState(0), [pick, setPick] = useState(null), [score, setScore] = useState(0);
  if (i >= quiz.length) {
    const r = results.find((x) => score >= x.min);
    return (
      <main className="wrap stage rise">
        <p className="kicker">Soundcheck concluído</p>
        <div className="score">{score}<small>/{quiz.length}</small></div>
        <h1 style={{ fontSize: "clamp(36px,7vw,60px)" }}>Ingresso: <em>{r.t}</em></h1>
        <p className="lead" style={{ margin: "16px 0 30px" }}>{r.d}</p>
        <div><button className="btn" onClick={() => go("presente")}>Abrir o envelope <Icon n="arrow" /></button></div>
      </main>
    );
  }
  const q = quiz[i], locked = pick !== null;
  const choose = (k) => { if (locked) return; setPick(k); if (k === q.c) setScore((s) => s + 1); };
  return (
    <main className="wrap stage" key={i}>
      <div className="meta"><span>Pergunta {i + 1} de {quiz.length}</span><span>sem pressão</span></div>
      <div className="bars" aria-hidden="true">{quiz.map((_, k) => <i key={k} className={k <= i ? "on" : ""} />)}</div>
      <h1 className="qh rise">{q.q}</h1>
      <div className="opts" role="group" aria-label="Escolha uma resposta">
        {q.o.map((o, k) => (
          <button key={o} disabled={locked} onClick={() => choose(k)}
            className={"opt" + (locked && k === q.c ? " right" : "") + (locked && k === pick && k !== q.c ? " wrong" : "")}>
            <b>{"abcd"[k]}</b>{o}
          </button>
        ))}
      </div>
      {locked && (
        <div aria-live="polite">
          <p className="react rise">{pick === q.c ? q.ok : q.no}</p>
          <button className="btn" onClick={() => { setPick(null); setI(i + 1); }}>{i + 1 === quiz.length ? "Ver resultado" : "Próxima"} <Icon n="arrow" /></button>
        </div>
      )}
    </main>
  );
}

function Gift() {
  const [open, setOpen] = useState(false);
  return (
    <main className="wrap gift">
      <header className="rise">
        <p className="kicker">{gift.kicker}</p>
        <h1 style={{ marginTop: 14 }}>{gift.title} <em>{gift.em}</em></h1>
      </header>
      <button type="button" className={"envelope" + (open ? " open" : "")} onClick={() => setOpen((o) => !o)}
        aria-expanded={open} aria-label={open ? "Fechar o envelope" : "Abrir o envelope"}>
        <span className="env-flap" /><span className="env-pocket" />
        <span className="env-seal"><Icon n="heart" size={22} /></span>
      </button>
      <p className="env-hint" aria-hidden={open}>{open ? "\u00a0" : gift.hint}</p>
      {open && (
        <article className="note rise" aria-live="polite">
          <figure className="oval">
            <img src={gift.photo} alt={gift.alt} />
            <i className="st1"><Icon n="spark" size={20} /></i><i className="st2"><Icon n="spark" size={14} /></i>
          </figure>
          <div className="note-copy">
            <span className="hand">{gift.to}</span>
            {gift.text.map((t, k) => <p key={k}>{t}</p>)}
            <button className="btn" onClick={() => go("setlist")}>Entrar no presente <Icon n="arrow" /></button>
          </div>
        </article>
      )}
    </main>
  );
}

function Setlist() {
  const days = useMemo(() => {
    const n = new Date();
    return Math.max(0, Math.floor((new Date(n.getFullYear(), n.getMonth(), n.getDate()) - SINCE) / 86400000));
  }, []);
  return (
    <main className="wrap">
      <section className="set-hero rise">
        <p className="kicker">Ingresso liberado</p>
        <h1 style={{ marginTop: 14 }}>Seu <em>setlist.</em></h1>
        <p className="lead">Seis faixas. Começa pela primeira ou pula direto para o refrão. A carta fica para o final.</p>
        <div className="stub"><b>{days.toLocaleString("pt-BR")}</b><span>dias desde o rolê da igreja<br />e o contador não para</span></div>
      </section>
      <ol className="tracks">
        {chapters.map((c, k) => (
          <li key={c.id}>
            <a className={"track c-" + c.c} href={"#/faixa/" + c.id}>
              <span className="tk-ic"><Icon n={c.i} /></span>
              <span className="tk-n">{String(k + 1).padStart(2, "0")}</span>
              <span className="tk-t"><strong>{c.title}</strong><small>{c.hint}</small></span>
              <Icon n="arrow" />
            </a>
          </li>
        ))}
      </ol>
    </main>
  );
}

const Story = () => (
  <ol className="story">{story.map((s) => (
    <li key={s.d}>
      <span className="hand">{s.d}</span>
      <div><h2>{s.t}</h2><p>{s.p}</p>{s.img && <figure className="photo story-photo"><img src={s.img} alt={s.alt} loading="lazy" /><figcaption>{s.cap}</figcaption></figure>}</div>
    </li>
  ))}</ol>
);
const Photo = ({ p }) => <figure className="photo"><img src={p.src} alt={p.alt} loading="lazy" /><figcaption>{p.cap}</figcaption></figure>;
function Photos() {
  const [mural, setMural] = useState(false);
  return (
    <>
      <div className="seg" role="group" aria-label="Modo de ver as fotos">
        <button type="button" aria-pressed={!mural} onClick={() => setMural(false)}>Carrossel</button>
        <button type="button" aria-pressed={mural} onClick={() => setMural(true)}>Mural</button>
      </div>
      {mural
        ? <div className="mural">{photos.map((p) => <Photo key={p.src} p={p} />)}</div>
        : <Carousel label="Fotos" items={photos} render={(p) => <Photo p={p} />} />}
    </>
  );
}
const Videos = () => (
  <Carousel wide label="Recados em vídeo" items={videos} render={(v) => (
    <figure className="photo">
      <video controls playsInline preload="none" aria-label={"Recado em vídeo de " + v.who}
        onPlay={(e) => document.querySelectorAll("video").forEach((o) => o !== e.target && o.pause())}>
        <source src={v.src} type="video/mp4" />
      </video>
      <figcaption>{v.who}</figcaption>
    </figure>
  )} />
);
const Mixtape = () => (
  <>
    <div className="mix-head"><span className="vinyl" aria-hidden="true" /><p>Toque na seta de cada música para ouvir. Nada começa sozinho.</p></div>
    {SPOTIFY_PLAYLIST_ID && <iframe className="spot" title="Playlist da Giovanna" loading="lazy"
      src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator`}
      allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture" />}
    <ol className="songs">{tracks.map(([t, a, r], k) => <li key={t}><span>{k + 1}</span><div><strong>{t}</strong><small>{a}</small></div><em>{r}</em><a className="song-link" href={"https://www.youtube.com/results?search_query=" + encodeURIComponent(t + " " + a)} target="_blank" rel="noreferrer" aria-label={`Ouvir ${t}, de ${a}`}><Icon n="arrow" size={18} /></a></li>)}</ol>
  </>
);
const Universe = () => (
  <div className="uni">{universe.map((u) => <article key={u.t} className={"card c-" + u.c}><Icon n={u.i} /><h2>{u.t}</h2><p>{u.d}</p></article>)}</div>
);
const Letter = () => (
  <article className="letter"><figure className="polaroid"><img src={letterPhoto.src} alt={letterPhoto.alt} loading="lazy" /><span>{letterPhoto.cap}</span></figure>{letter.map((p, k) => <p key={k}>{p}</p>)}<span className="sign">— Vitor</span></article>
);
const BODY = { historia: Story, fotos: Photos, recados: Videos, mixtape: Mixtape, universo: Universe, carta: Letter };

function Track({ id }) {
  const k = chapters.findIndex((c) => c.id === id);
  if (k < 0) return <Setlist />;
  const c = chapters[k], next = chapters[k + 1], Body = BODY[id];
  return (
    <main className="wrap chap">
      <header className="rise">
        <span className={"chip c-" + c.c}><Icon n={c.i} size={26} /></span>
        <p className="kicker">Faixa {k + 1} de {chapters.length}</p>
        <h1>{c.title}</h1>
        <p className="lead">{c.lead}</p>
      </header>
      <Body />
      <nav className="pager" aria-label="Navegação entre faixas">
        <a href="#/setlist">← setlist</a>
        {next && <a href={"#/faixa/" + next.id}>{next.title} →</a>}
      </nav>
    </main>
  );
}

function Foot() {
  const [m, setM] = useState(false);
  return (
    <footer className="wrap foot">
      <span>feito por Vitor, para Giovanna</span>
      <button aria-label="Fazer o gato miar" onClick={() => { setM(true); setTimeout(() => setM(false), 1800); }}>
        {m && <b>miau ♥</b>}<Icon n="cat" size={22} />
      </button>
    </footer>
  );
}

export default function App() {
  const [a, b] = useRoute();
  const light = a === "faixa";
  useEffect(() => {
    const c = chapters.find((x) => x.id === b);
    document.title = light && c ? c.title + " · Giovanna 2026" : "Giovanna 2026";
  }, [a, b]);
  const back = a === "soundcheck" ? "" : a === "presente" ? "soundcheck" : light ? "setlist" : null;
  return (
    <div className={"app " + (light ? "paper" : "night")}>
      <Top back={back} />
      {a === "soundcheck" ? <Quiz /> : a === "presente" ? <Gift /> : a === "setlist" ? <Setlist /> : light ? <Track id={b} /> : <Welcome />}
      <Foot />
    </div>
  );
}