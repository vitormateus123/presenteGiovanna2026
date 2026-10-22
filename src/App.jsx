import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { SINCE, SPOTIFY_PLAYLIST_ID, quiz, results, chapters, prologue, story, hist, memories, trio, photos, photoComparison, videos, universe, letter, wish, nos } from "./content.js";
import { themes, label, items, src, sticker } from "./stickers.js";

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
  check: "M5 12.5l4.5 4.5L19 7",
  gamepad: "M6 8h12a4 4 0 0 1 4 4v2a3 3 0 0 1-5 2l-1-2H8l-1 2a3 3 0 0 1-5-2v-2a4 4 0 0 1 4-4zM8 10.5v3M6.5 12h3M16 11.5h.01M18 13h.01",
};
const Icon = ({ n, size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]} /></svg>
);

const Stk = ({ t, k = 0, size, className = "", style }) => (
  <img className={"sk " + className} src={sticker(t, k)} alt="" decoding="async" loading="lazy"
    style={size ? { width: size, height: size, ...style } : style} />
);

const hash = () => location.hash.replace(/^#\/?/, "");
const go = (p) => { location.hash = "/" + p; };
function useRoute() {
  const [h, setH] = useState(hash);
  useEffect(() => {
    const f = () => setH(hash());
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [h]);
  return h.split("/");
}

// partes já visitadas (só para marcar no sumário)
const SEEN = "pg26-vistos";
const readSeen = () => { try { return JSON.parse(localStorage.getItem(SEEN)) || []; } catch { return []; } };
const markSeen = (id) => { try { const s = readSeen(); if (!s.includes(id)) localStorage.setItem(SEEN, JSON.stringify([...s, id])); } catch { /* sem storage: segue sem marcar */ } };

function Typed({ text }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(text.length); return; }
    const t = setInterval(() => setN((x) => { if (x >= text.length) { clearInterval(t); return x; } return x + 1; }), 32);
    return () => clearInterval(t);
  }, [text]);
  return <><span className="sr">{text}</span><span aria-hidden="true">{text.slice(0, n)}<i className="caret" /></span></>;
}

const Cake = ({ lit }) => (
  <svg viewBox="0 0 120 120" width="100%" aria-hidden="true">
    <rect x="20" y="70" width="80" height="34" rx="8" fill="#e23b5a" />
    <rect x="28" y="50" width="64" height="26" rx="8" fill="#ff9ccf" />
    <path d="M20 78c8 8 14-6 22 0s14-6 22 0 14-6 22 0 10 4 14-1" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
    <rect x="57" y="30" width="6" height="22" rx="3" fill="#4560e6" />
    {lit && <path className="flame" d="M60 12c6 7 7 11 0 16-7-5-6-9 0-16z" fill="#f5cf5c" />}
  </svg>
);

const Flower = () => (
  <svg className="flower" viewBox="0 0 100 100" aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((r) => <ellipse key={r} cx="50" cy="26" rx="11" ry="22" fill="#fff" stroke="#e8dfd0" strokeWidth="1.5" transform={`rotate(${r} 50 50)`} />)}
    <circle cx="50" cy="50" r="10" fill="#f5cf5c" />
  </svg>
);

function Surprise() {
  const [step, setStep] = useState(0), [no, setNo] = useState(0);
  return (
    <main className="wrap stage surprise">
      {step === 0 && <div className="rise">
        <Stk t="gatos" k={4} size={120} className="mx" />
        <p className="kicker">Uma surpresa</p>
        <h1 style={{ fontSize: "clamp(38px,8vw,68px)", marginTop: 14 }}>Tenho uma surpresa. <em>Quer ver?</em></h1>
        <div className="row">
          <button className="btn" style={{ transform: `scale(${1 + no * 0.08})` }} onClick={() => setStep(1)}>Quero!</button>
          <button className="ghost" onClick={() => (no === nos.length - 1 ? setStep(1) : setNo(no + 1))}>{nos[no]}</button>
        </div>
      </div>}
      {step === 1 && <div className="rise">
        <p className="kicker">Primeiro, o bolo</p>
        <button className="cake" onClick={() => setStep(2)} aria-label="Tocar no bolo para abrir o presente"><Cake lit /></button>
        <p className="lead" style={{ margin: "0 auto" }}>Toque no bolo para abrir o presente.</p>
      </div>}
      {step === 2 && <div className="rise">
        <div className="msg">
          <img className="circ a" src={photos[0].src} alt="" />
          <img className="circ b" src={photos[1].src} alt="" />
          <span className="stk"><Cake /></span>
          <Stk t="gatos" k={7} size={84} className="msg-sk" />
          <Typed text={wish} />
        </div>
        <button className="btn" onClick={() => go("parte/" + chapters[0].id)}>Começar <Icon n="arrow" /></button>
      </div>}
    </main>
  );
}

const Top = ({ toc }) => (
  <header className="wrap top">
    <span className="mark">Giovanna <i>2026</i></span>
    {toc && <a className="back" href="#/sumario">Sumário</a>}
  </header>
);

const Progress = ({ k, n }) => (
  <div className="prog" role="img" aria-label={`Parte ${k} de ${n}`}>
    {Array.from({ length: n }, (_, x) => <i key={x} className={x < k ? "on" : ""} />)}
  </div>
);

// Primeira tela do site: apresentação curta + quiz. Ao terminar, segue para a surpresa.
function Quiz() {
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0), [pick, setPick] = useState(null), [score, setScore] = useState(0);
  useLayoutEffect(() => {
    if (started) window.scrollTo(0, 0);
  }, [started, i]);
  if (!started) return (
    <main className="wrap hero">
      <div className="rise">
        <p className="kicker">Feliz aniversário</p>
        <h1>Giovanna, isso é <em>para você.</em></h1>
        <p className="hero-note">18tou bb.</p>
        <p className="lead">Um manifesto do meu amor por você, em forma de site. Para iniciar, algumas perguntas sobre a gente. Aproveite com calma cada espaço e volte sempre que quiser.</p>
        <button className="btn" onClick={() => {
          window.dispatchEvent(new Event("giovanna:quiz-start"));
          setStarted(true);
        }}>Começar o quiz <Icon n="arrow" /></button>
      </div>
      <div className="frame rise">
        <img src="./media/fotos-giovanna/outubro-2024-fantasia.webp" alt="Giovanna e Vitor sorrindo juntos, fantasiados" fetchPriority="high" />
        <span>desde 27.11.21</span>
        <Stk t="gatos" k={3} size={84} className="fl f1" />
        <Stk t="kate" k={2} size={92} className="fl f2" />
      </div>
    </main>
  );
  if (i >= quiz.length) {
    const r = results.find((x) => score >= x.min);
    return (
      <main className="wrap stage rise">
        <p className="kicker">Quiz concluído</p>
        <div className="score">{score}<small>/{quiz.length}</small></div>
        <h1 style={{ fontSize: "clamp(36px,7vw,60px)" }}><em>{r.t}</em></h1>
        <p className="lead" style={{ margin: "16px 0 30px" }}>{r.d}</p>
        <div><button className="btn" onClick={() => go("surpresa")}>Continuar <Icon n="arrow" /></button></div>
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
          <div className="react rise"><Stk t={q.st[0]} k={q.st[1]} size={72} /><p>{pick === q.c ? q.ok : q.no}</p></div>
          <button className="btn" onClick={() => { setPick(null); setI(i + 1); }}>{i + 1 === quiz.length ? "Ver resultado" : "Próxima"} <Icon n="arrow" /></button>
        </div>
      )}
    </main>
  );
}

const Story = () => (
  <ol className="story">{story.map((s) => <li key={s.d}><span className="hand">{s.d}</span><div><h2>{s.t}</h2><p>{s.p}</p></div></li>)}</ol>
);

// Pular o texto longo: botão no início + atalho flutuante enquanto o fim não aparece na tela.
const jumpEnd = () => document.getElementById("fim")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
function SkipEnd() {
  const [fab, setFab] = useState(false);
  useEffect(() => {
    const f = () => { const r = document.getElementById("fim")?.getBoundingClientRect(); setFab(window.scrollY > 600 && !!r && r.top > window.innerHeight); };
    f();
    window.addEventListener("scroll", f, { passive: true });
    window.addEventListener("resize", f);
    return () => { window.removeEventListener("scroll", f); window.removeEventListener("resize", f); };
  }, []);
  return (
    <>
      <div className="skip-box">
        <p>É bastante coisa. Se preferir, dá para pular direto para o fim.</p>
        <button className="ghost" onClick={jumpEnd}>Pular para o fim <span className="dn"><Icon n="arrow" size={20} /></span></button>
      </div>
      {fab && <button className="btn skip-fab" onClick={jumpEnd} aria-label="Pular para o fim desta parte">Pular <span className="dn"><Icon n="arrow" size={20} /></span></button>}
    </>
  );
}

const COLORS = ["ruby", "sapphire", "fusion", "teal", "gold", "bubble"];
// st: figurinha grudada no canto do cartão.
function Timeline({ items }) {
  return (
    <ol className="tl">
      {items.map((m, k) => (
        <li key={m.d} className={"c-" + COLORS[k % COLORS.length]}>
          <span className="hand">{m.d}</span>
          <article className="card"><h2>{m.t}</h2><p>{m.p}</p></article>
          {m.st && <Stk t={m.st[0]} k={m.st[1]} size={68} className={"tl-sk" + (k % 2 ? " r" : "")} />}
        </li>
      ))}
    </ol>
  );
}
function History() {
  return (
    <>
      <SkipEnd />
      <article className="letter hist">
        <div className="letter-text">
          <p><strong>{hist.lead}</strong> {hist.text[0]}</p>
          {hist.text.slice(1).map((p, k) => <p key={k}>{p}</p>)}
          <span className="sign">— Vitor</span>
        </div>
      </article>
      <div className="letter-decor" aria-hidden="true">
        <Stk t="gatos" k={9} size={76} className="sc b" />
        <Flower />
        <Stk t="su" k={5} size={76} className="sc a" />
      </div>
      <h2 className="hsub">Como começou</h2>
      <Story />
      <h2 className="hsub">Lembranças de nós dois</h2>
      <Timeline items={memories} />
      <h2 className="hsub">E tinha o nosso trio também</h2>
      <Timeline items={trio} />
    </>
  );
}
function Photos() {
  return (
    <>
      <div className="mural" aria-label="Mural de fotos de Giovanna e Vitor">
        {photos.map((p) => <figure key={p.src}><img src={p.src} alt={p.alt} loading="lazy" decoding="async" /><figcaption>{p.cap}</figcaption>{p.st && <Stk t={p.st[0]} k={p.st[1]} size={60} className="mural-sk" />}</figure>)}
      </div>
      <section className="photo-comparison" aria-labelledby="photo-comparison-title">
        <h2 id="photo-comparison-title">De lá pra cá <span aria-hidden="true">♡</span></h2>
        <div className="photo-comparison-pair">
          {photoComparison.map((p, i) => (
            <React.Fragment key={p.src}>
              {i > 0 && <span className="photo-comparison-times" aria-hidden="true">×</span>}
              <figure className="photo-comparison-card">
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                <figcaption>{p.cap}</figcaption>
                <Stk t={p.st[0]} k={p.st[1]} size={72} className="photo-comparison-sticker" />
              </figure>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
// Cada recado termina antes de oferecer o próximo. A troca fica nas mãos de quem assiste.
function Videos({ done, onDone, onReset, next }) {
  const [i, setI] = useState(0), [finished, setFinished] = useState(false), [failed, setFailed] = useState(false), [ar, setAr] = useState(9 / 16);
  const v = videos[i];
  const nextVideo = () => {
    document.querySelector(".rec video")?.pause();
    setFinished(false);
    setFailed(false);
    setAr(9 / 16);
    if (i < videos.length - 1) setI((n) => n + 1);
    else onDone();
  };
  const selectVideo = (k) => {
    document.querySelector(".rec video")?.pause();
    onReset();
    setFinished(false);
    setFailed(false);
    setAr(9 / 16);
    setI(k);
  };
  const again = () => selectVideo(0);
  return (
    <>
      <figure key={i} className="photo rec rec-switch">
        <video src={v.src + "#t=0.001"} controls playsInline preload="metadata" aria-label={"Recado em vídeo de " + v.who}
          style={{ aspectRatio: ar }} onLoadedMetadata={(e) => e.target.videoWidth && setAr(e.target.videoWidth / e.target.videoHeight)}
          onEnded={() => setFinished(true)} onError={() => { setFailed(true); setFinished(true); }} />
        <figcaption>Recado {i + 1} de {videos.length} · {v.who}</figcaption>
        <Stk t="su" k={0} size={64} className="rec-sk a" />
        <Stk t="gatos" k={7} size={64} className="rec-sk b" />
      </figure>
      {!done && !finished && i < videos.length - 1 && <button className="rec-skip" onClick={nextVideo} aria-label={"Pular o recado de " + v.who + " e ir para o próximo"}>Pular este recado <Icon n="arrow" size={16} /></button>}
      {finished && !done && <div className="rec-next" aria-live="polite">
        <p>{failed ? "Este recado não carregou. Você pode tentar reproduzir de novo ou seguir." : i < videos.length - 1 ? "Quando quiser, o próximo recado está aqui." : "Você viu todos os recados."}</p>
        <button className="btn" onClick={nextVideo}>{i < videos.length - 1 ? "Assistir próximo recado" : "Finalizar recados"} <Icon n="arrow" size={20} /></button>
      </div>}
      {done
        ? <section className="rec-library" aria-labelledby="rec-library-title">
            <p className="rec-end">Esses foram os recados.</p>
            <div className="rec-list-wrap">
              <h2 id="rec-library-title">Rever um recado</h2>
              <nav aria-label="Navegação pelos recados">
                <ol className="rec-list">{videos.map((item, k) => <li key={item.who}>
                  <button className="rec-choice" onClick={() => selectVideo(k)} aria-label={"Assistir ao recado de " + item.who}>
                    <span>{String(k + 1).padStart(2, "0")}</span>{item.who}<Icon n="arrow" size={17} />
                  </button>
                </li>)}</ol>
              </nav>
              <button className="ghost rec-restart" onClick={again}>Rever do começo</button>
            </div>
          </section>
        : next && <a className="btn skip-fab" href={"#/parte/" + next.id}>Pular <Icon n="arrow" size={20} /></a>}
    </>
  );
}
const Playlist = () => (
  <>
    {SPOTIFY_PLAYLIST_ID && <iframe className="spot" title="Playlist da Giovanna" loading="lazy"
      src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator`}
      allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture" />}
  </>
);
const Universe = () => (
  <div className="uni">{universe.map((u) => <article key={u.t} className={"card c-" + u.c}>{u.art ? <img className="card-art" src={u.art} alt="" loading="lazy" decoding="async" /> : u.th ? <Stk t={u.th} k={u.k || 0} size={84} className="card-sk" /> : <Icon n={u.i} />}<h2>{u.t}</h2><p>{u.d}</p></article>)}</div>
);
function Letter() {
  const [stage, setStage] = useState("closed");
  useEffect(() => {
    if (stage !== "opening") return;
    const timer = setTimeout(() => setStage("open"), 760);
    return () => clearTimeout(timer);
  }, [stage]);
  const openLetter = () => setStage(window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "open" : "opening");
  if (stage !== "open") return (
    <div className="env-wrap">
      <button className={"env" + (stage === "opening" ? " env-opening" : "")} onClick={openLetter} disabled={stage === "opening"} aria-label="Abrir o envelope">
        <span className="flap" /><span className="seal"><Icon n="heart" /></span><em>Para Giovanna</em>
      </button>
      <p className="hint">{stage === "opening" ? "abrindo a carta…" : "toque no envelope para abrir"}</p>
    </div>
  );
  return (
    <div className="scene letter-unfold">
      <article className="letter">
        <figure className="pol"><img src={photos[0].src} alt="Giovanna e Vitor juntos" loading="lazy" /></figure>
        <div className="letter-text">{letter.map((p, k) => <React.Fragment key={k}><p>{p}</p>{[1, 3, 5].includes(k) && <div className={"letter-inline-sticker " + (k === 3 ? "right" : "left")} aria-hidden="true"><Stk t={k === 1 ? "gatos" : k === 3 ? "su" : "kate"} k={k === 1 ? 9 : k === 3 ? 5 : 1} size={68} /></div>}</React.Fragment>)}<span className="sign">— Vitor</span></div>
      </article>
      <div className="letter-decor" aria-hidden="true">
        <Stk t="kate" k={1} size={76} className="sc b" />
        <Flower />
        <Stk t="sdpm" k={3} size={76} className="sc a" />
      </div>
    </div>
  );
}
function Album() {
  const [t, setT] = useState("todos"), [n, setN] = useState(48), [sel, setSel] = useState(null);
  const all = t === "todos" ? themes.flatMap((k) => items(k).map((i) => [k, i])) : items(t).map((i) => [t, i]);
  const pickTheme = (k) => { setT(k); setN(48); };
  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por tema">
        <button aria-pressed={t === "todos"} onClick={() => pickTheme("todos")}>Todos</button>
        {themes.map((k) => <button key={k} aria-pressed={t === k} onClick={() => pickTheme(k)}>{label(k)}</button>)}
      </div>
      <div className="album">
        {all.slice(0, n).map(([k, i], x) => (
          <button key={k + i.f} className="tile" style={{ "--r": ((x * 7) % 9) - 4 + "deg" }} onClick={() => setSel([k, i])} aria-label={"Ampliar figurinha de " + label(k)}>
            <img src={src(k, i.f)} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
      {n < all.length && <button className="btn more" onClick={() => setN(n + 48)}>Mostrar mais ({all.length - n})</button>}
      {sel && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Figurinha ampliada" onClick={() => setSel(null)}>
          <img src={src(sel[0], sel[1].f)} alt="" /><p>{label(sel[0])}</p>
          <button className="btn" onClick={() => setSel(null)}>Fechar</button>
        </div>
      )}
    </>
  );
}
const BODY = { historia: History, fotos: Photos, recados: Videos, universo: Universe, album: Album, playlist: Playlist, carta: Letter };

// Uma parte do site: progresso no topo, conteúdo e botão para a próxima (a última leva ao sumário).
function Part({ id }) {
  const k = chapters.findIndex((c) => c.id === id);
  const [done, setDone] = useState(false);
  useEffect(() => { if (k >= 0) markSeen(id); }, [id, k]);
  if (k < 0) return <Summary />;
  const c = chapters[k], prev = chapters[k - 1], next = chapters[k + 1], Body = BODY[id];
  return (
    <main className="wrap chap">
      <Progress k={k + 1} n={chapters.length} />
      <header className="rise">
        <span className={"chip c-" + c.c}><Icon n={c.i} size={26} /></span>
        <p className="kicker">Parte {k + 1} de {chapters.length}</p>
        <h1>{c.title}</h1>
        <p className="lead">{c.lead}</p>
      </header>
      <Body done={done} onDone={() => setDone(true)} onReset={() => setDone(false)} next={next} />
      <nav id="fim" className="pager" aria-label="Navegação entre partes">
        <a className="pv" href={prev ? "#/parte/" + prev.id : "#/surpresa"}>← {prev ? prev.title : "A surpresa"}</a>
        {(id !== "recados" || done) && <a className="btn" href={next ? "#/parte/" + next.id : "#/sumario"}>{next ? "Continuar: " + next.title : "Ver o sumário"} <Icon n="arrow" /></a>}
      </nav>
    </main>
  );
}

const TocItem = ({ href, n, title, hint, th, k, seen, c }) => (
  <li className={c ? "c-" + c : undefined}>
    <a className="toc-link" href={href}>
      <span className="toc-n">{n}</span>
      <span className="toc-t"><strong>{title}{seen && <Icon n="check" size={16} />}</strong><small>{hint}</small></span>
      <Stk t={th} k={k} size={48} className="toc-st" />
      <Icon n="arrow" />
    </a>
  </li>
);

// Fim do caminho: tudo fica acessível, na ordem do fluxo.
function Summary() {
  const days = useMemo(() => {
    const n = new Date();
    return Math.max(0, Math.floor((new Date(n.getFullYear(), n.getMonth(), n.getDate()) - SINCE) / 86400000));
  }, []);
  const seen = useMemo(readSeen, []);
  return (
    <main className="wrap toc">
      <header className="rise">
        <p className="kicker">Sumário</p>
        <h1>Tudo isso é <em>para você.</em></h1>
        <p className="lead">Você chegou ao fim do caminho. Daqui dá para voltar a qualquer parte, na ordem que quiser.</p>
        <p className="count"><b>{days.toLocaleString("pt-BR")}</b><span>dias desde o rolê da igreja,<br />e o contador não para</span></p>
      </header>
      <h2>Para começar</h2>
      <ol>{prologue.map((p, k) => <TocItem key={p.href} {...p} n="–" k={k} />)}</ol>
      <h2>As partes</h2>
      <ol>{chapters.map((c, k) => <TocItem key={c.id} href={"#/parte/" + c.id} n={k + 1} title={c.title} hint={c.hint} th={c.th} k={k} c={c.c} seen={seen.includes(c.id)} />)}</ol>
      <div className="toc-home"><a className="btn" href="#/">Voltar ao início</a></div>
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
  useEffect(() => {
    const c = chapters.find((x) => x.id === b);
    document.title = a === "parte" && c ? c.title + " · Giovanna 2026" : a === "sumario" ? "Sumário · Giovanna 2026" : "Giovanna 2026";
  }, [a, b]);
  return (
    <div className="app">
      <Top toc={a === "parte"} />
      {a === "surpresa" ? <Surprise /> : a === "parte" ? <Part key={b} id={b} /> : a === "sumario" ? <Summary /> : <Quiz />}
      <Foot />
    </div>
  );
}
