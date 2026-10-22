import React, { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(() => {
    try { return localStorage.getItem("giovanna-music-muted") === "true"; } catch { return false; }
  });
  const [blocked, setBlocked] = useState(false);
  const [missing, setMissing] = useState(false);
  const mutedRef = useRef(muted);
  mutedRef.current = muted;

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;
    const play = () => {
      if (mutedRef.current || !audio.paused) return;
      if (Array.from(document.querySelectorAll("video")).some(v => !v.paused && !v.ended)) return;
      audio.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
    };
    const pauseForVideo = e => { if (e.target.tagName === "VIDEO") audio.pause(); };
    const resumeAfterVideo = e => { if (e.target.tagName === "VIDEO") play(); };
    play();
    document.addEventListener("pointerdown", play);
    document.addEventListener("keydown", play);
    document.addEventListener("play", pauseForVideo, true);
    document.addEventListener("pause", resumeAfterVideo, true);
    document.addEventListener("ended", resumeAfterVideo, true);
    return () => {
      document.removeEventListener("pointerdown", play);
      document.removeEventListener("keydown", play);
      document.removeEventListener("play", pauseForVideo, true);
      document.removeEventListener("pause", resumeAfterVideo, true);
      document.removeEventListener("ended", resumeAfterVideo, true);
    };
  }, []);

  const toggle = () => {
    const next = !muted;
    const audio = audioRef.current;
    audio.muted = next;
    setMuted(next);
    try { localStorage.setItem("giovanna-music-muted", String(next)); } catch {}
    if (!next) audio.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
  };

  return <>
    <audio ref={audioRef} src="./media/trilha-giovanna.mp3" loop preload="auto"
      muted={muted} onError={() => setMissing(true)} />
    {!missing && <button className="sound-toggle" type="button" onClick={toggle}
      aria-label={muted ? "Ativar música de fundo" : "Silenciar música de fundo"}
      aria-pressed={!muted} title={muted ? "Ativar música" : "Silenciar música"}>
      <span aria-hidden="true">{muted ? "♪" : "♫"}</span>
      <span>{muted ? "Som desligado" : blocked ? "Tocar música" : "Som ligado"}</span>
    </button>}
  </>;
}
