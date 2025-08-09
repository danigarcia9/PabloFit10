"use client";

// Comentario (ES): Carrusel de vídeos con soporte de swipe, pausa al cambiar slide y flechas laterales.
// Uso: recibe una lista de URLs de vídeo; en móvil permite deslizar y pausa el vídeo anterior al navegar.

import { useEffect, useRef, useState } from "react";

type Props = { videos: { url: string }[] };

export default function VideoCarousel({ videos }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < videos.length - 1;

  function pauseAllExcept(activeIndex: number) {
    for (let i = 0; i < videoRefs.current.length; i += 1) {
      const el = videoRefs.current[i];
      if (!el) continue;
      if (i !== activeIndex) {
        try { el.pause(); } catch {}
      }
    }
  }

  function scrollToIndex(i: number) {
    const next = Math.max(0, Math.min(i, videos.length - 1));
    setIndex(next);
    const container = containerRef.current;
    if (container) {
      const width = container.clientWidth;
      container.scrollTo({ left: width * next, behavior: "smooth" });
    }
    pauseAllExcept(next);
  }

  // Swipe handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let startX = 0;
    let deltaX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; deltaX = 0; };
    const onTouchMove = (e: TouchEvent) => { deltaX = e.touches[0].clientX - startX; };
    const onTouchEnd = () => {
      const threshold = 50; // px
      if (Math.abs(deltaX) > threshold) {
        if (deltaX < 0 && canNext) scrollToIndex(index + 1);
        if (deltaX > 0 && canPrev) scrollToIndex(index - 1);
      }
      deltaX = 0;
    };
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, canNext, canPrev, videos.length]);

  // Pause others on index change when user navigates via arrows/keys
  useEffect(() => { pauseAllExcept(index); }, [index]);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "center", gap: 8 }}>
        {/* Flecha izquierda fuera del área del video */}
        <button
          aria-label="Anterior"
          onClick={() => scrollToIndex(index - 1)}
          disabled={!canPrev}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(249,224,74,0.7)",
            fontSize: 28,
            lineHeight: 1,
            padding: 8,
            cursor: canPrev ? "pointer" : "default",
            opacity: canPrev ? 1 : 0.3,
          }}
        >
          ‹
        </button>

        {/* Área de carrusel */}
        <div
          ref={containerRef}
          style={{ display: "flex", overflow: "hidden", scrollSnapType: "x mandatory" }}
        >
          {videos.map((v, i) => (
            <div key={v.url} style={{ minWidth: "100%", scrollSnapAlign: "start", padding: "8px 32px", boxSizing: "border-box" }}>
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%", borderRadius: 12 }}
              >
                <source src={v.url} />
              </video>
            </div>
          ))}
        </div>

        {/* Flecha derecha fuera del área del video */}
        <button
          aria-label="Siguiente"
          onClick={() => scrollToIndex(index + 1)}
          disabled={!canNext}
          style={{
            background: "transparent",
            border: "none",
            color: "rgba(249,224,74,0.7)",
            fontSize: 28,
            lineHeight: 1,
            padding: 8,
            cursor: canNext ? "pointer" : "default",
            opacity: canNext ? 1 : 0.3,
          }}
        >
          ›
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 8 }}>
        <span className="subtitle">{index + 1} / {videos.length}</span>
      </div>
    </div>
  );
}

