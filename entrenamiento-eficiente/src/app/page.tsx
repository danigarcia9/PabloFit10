// Comentario (ES): Landing principal mobile-first con galería desde Cloudinary y carrusel de vídeos.
// Uso: obtiene imágenes/vídeos de carpetas Cloudinary y las muestra en mosaico + carrusel con CTAs.

import Image from "next/image";
import React from "react";
import { listCloudinaryFolderResources } from "./lib/cloudinary";
import VideoCarousel from "./components/VideoCarousel";
import TrustBadge from "./(components)/TrustBadge";
import FeatureItem from "./(components)/FeatureItem";
import SectionTitle from "./(components)/SectionTitle";
import ChangesGallery from "./components/ChangesGallery";
import EfficientMethodSection from "./(components)/EfficientMethodSection";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

function CtaButton({ label = "Habla conmigo por WhatsApp" }) {
  return (
    <a className="btn btn--block" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}

export default async function Home() {
  // Usa nombre del asset folder visible en Cloudinary (no el id interno)
  const cambiosFolder = "FOTOS DE CAMBIOS";
  const videosFolder = "VIDEOS TESTIMONIOS";

  const [changePhotos, testimonialVideos] = await Promise.all([
    listCloudinaryFolderResources(cambiosFolder, "image"),
    listCloudinaryFolderResources(videosFolder, "video"),
  ]);

  // Marcar puntos donde insertar una fila CTA completa tras cada 6 imágenes
  const ctaRowsAfterIndices = new Set<number>();
  changePhotos.forEach((_, idx) => { if ((idx + 1) % 6 === 0) ctaRowsAfterIndices.add(idx); });

  return (
    <main className="container" style={{ paddingTop: 2, paddingBottom: 64 }}>
      {/* Hero */}
      <section className="section" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2 }}>
        
        {/* Comentario (ES): Sustituimos el logo por una foto con degradado superior para integrarse con el fondo negro. */}
        <div style={{ width: "100%", maxWidth: 480 }}>
          <Image
            src="/hero-pablo.png"
            alt="Entrena Eficiente con Pablo Díez"
            width={1080}
            height={1620}
            priority
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 14,
              objectFit: "cover",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
        <div style={{ marginTop: 6 }}>
          <TrustBadge label="Método probado" value="+400 casos" />
        </div>
        <p className="subtitle" style={{ marginTop: 6 }}>
          Ponte en forma sin perder tiempo: sesiones &lt; 40 min, fuerza + cardio,
          nutrición simple y resultados reales.
        </p>
        <div style={{ marginTop: 16 }}>
          <CtaButton label="Quiero empezar ahora" />
        </div>
      </section>

      {/* Beneficios rápidos */}
      <section className="section" style={{ display: "grid", gap: 12 }}>
        {[
          "Perder grasa y ganar músculo con sesiones cortas",
          "Entrena 3-4 días/semana sin romper tu agenda",
          "Nutrición práctica, sin prohibiciones extremas",
          "Plan por fases de 3 meses con progresión real",
        ].map((text) => (
          <FeatureItem key={text} text={text} />
        ))}
      </section>

      {/* Texto comercial (resumido para móvil) */}
      <section className="section" style={{ display: "grid", gap: 12 }}>
        <h2 className="title">La solución definitiva para gente con poco tiempo</h2>
        <p className="subtitle">
          Método estructurado para transformar tu físico y tu salud sin pasar horas en el gym
          ni seguir dietas complicadas. Sostenible, efectivo y adaptado a tu vida.
        </p>
        <p>
          Sesiones estratégicas de &lt; 40 min que combinan fuerza y cardio. Diseñado para 3–4 días
          por semana, con opciones en casa o gimnasio, teniendo en cuenta tu nivel, peso y material.
        </p>
        <p>
          Incluye guía nutricional flexible: comer equilibrado, ajustar porciones y disfrutar
          sin planes rígidos. Estructura por fases de 3 meses con objetivos claros, seguimiento y
          hábitos duraderos.
        </p>
        <CtaButton label="Reserva tu plaza" />
      </section>

      {/* Galería de cambios (Cloudinary) con ver más */}
      <section className="section">
        <SectionTitle label="CAMBIOS REALES" variant="changes" />
        <ChangesGallery photos={changePhotos.map(a => ({ secureUrl: a.secureUrl, width: a.width, height: a.height }))} />
      </section>

      {/* Videos testimoniales (Cloudinary, carrusel) */}
      <section className="section">
        <SectionTitle label="TESTIMONIOS EN VÍDEO" variant="video" />
        <VideoCarousel videos={testimonialVideos.map(v => ({ url: v.secureUrl }))} />
        <div style={{ marginTop: 16 }}>
          <CtaButton label="Más información del programa" />
        </div>
      </section>

      {/* Explicación del método */}
      <EfficientMethodSection />

      {/* FAQs cortas */}
      <section className="section" style={{ display: "grid", gap: 10 }}>
        <SectionTitle label="PREGUNTAS FRECUENTES" variant="faq" />
        {[
          { q: "¿Cuánto tiempo necesito?", a: "Menos de 40 minutos por sesión, 3–4 días/semana." },
          { q: "¿Necesito gym?", a: "No. Puedes hacerlo en casa o gimnasio; adaptamos el material." },
          { q: "¿Hay dieta estricta?", a: "No. Nutrición flexible y práctica para tu día a día." },
        ].map(({ q, a }) => (
          <details key={q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 12 }}>
            <summary style={{ fontWeight: 800 }}>{q}</summary>
            <p style={{ marginTop: 8 }}>{a}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
