import React, { useCallback, useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(() => {
    try { return localStorage.getItem("giovanna-music-muted") === "true"; } catch { return false; }
  });
  const [blocked, setBlocked] = useState(false);
  const [missing, setMissing] = useState(false);
  const mutedRef = useRef(muted);
  const playPendingRef = useRef(false);
  mutedRef.current = muted;

  const play = useCallback((fromUserGesture = false) => {
    const audio = audioRef.current;
    if (!audio || mutedRef.current) return;
    if (Array.from(document.querySelectorAll("video")).some(v => !v.paused && !v.ended)) return;
    if (!audio.paused) {
      setBlocked(false);
      return;
    }
    if (playPendingRef.current && !fromUserGesture) return;

    let request;
    try {
      request = audio.play();
    } catch {
      setBlocked(true);
      return;
    }

    if (!request?.then) {
      setBlocked(false);
      return;
    }

    playPendingRef.current = true;
    request
      .then(() => setBlocked(false))
      .catch(() => setBlocked(true))
      .finally(() => { playPendingRef.current = false; });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.2;
    const startFromQuiz = () => play(true);
    const pauseForVideo = e => { if (e.target.tagName === "VIDEO") audio.pause(); };
    const resumeAfterVideo = e => { if (e.target.tagName === "VIDEO") play(); };
    play();
    window.addEventListener("giovanna:quiz-start", startFromQuiz);
    document.addEventListener("pointerdown", play);
    document.addEventListener("touchend", play, { passive: true });
    document.addEventListener("click", play);
    document.addEventListener("keydown", play);
    document.addEventListener("play", pauseForVideo, true);
    document.addEventListener("pause", resumeAfterVideo, true);
    document.addEventListener("ended", resumeAfterVideo, true);
    return () => {
      window.removeEventListener("giovanna:quiz-start", startFromQuiz);
      document.removeEventListener("pointerdown", play);
      document.removeEventListener("touchend", play);
      document.removeEventListener("click", play);
      document.removeEventListener("keydown", play);
      document.removeEventListener("play", pauseForVideo, true);
      document.removeEventListener("pause", resumeAfterVideo, true);
      document.removeEventListener("ended", resumeAfterVideo, true);
    };
  }, [play]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const videoPlaying = Array.from(document.querySelectorAll("video"))
      .some(v => !v.paused && !v.ended);
    const shouldStart = muted || blocked || (audio.paused && !videoPlaying);

    if (shouldStart) {
      mutedRef.current = false;
      audio.muted = false;
      setMuted(false);
      try { localStorage.setItem("giovanna-music-muted", "false"); } catch {}
      if (!videoPlaying) play();
      return;
    }

    mutedRef.current = true;
    audio.muted = true;
    setMuted(true);
    setBlocked(false);
    try { localStorage.setItem("giovanna-music-muted", "true"); } catch {}
  };

  return <>
    <audio ref={audioRef} src="./media/trilha-giovanna.mp3" loop preload="auto"
      muted={muted} onError={() => setMissing(true)} />
    {!missing && <button className="sound-toggle" type="button" onClick={toggle}
      aria-label={muted ? "Ativar música de fundo" : blocked ? "Tocar música de fundo" : "Silenciar música de fundo"}
      aria-pressed={!muted && !blocked}
      title={muted ? "Ativar música" : blocked ? "Tocar música" : "Silenciar música"}>
      <span aria-hidden="true">{muted ? "♪" : "♫"}</span>
      <span>{muted ? "Som desligado" : blocked ? "Tocar música" : "Som ligado"}</span>
    </button>}
  </>;
}
