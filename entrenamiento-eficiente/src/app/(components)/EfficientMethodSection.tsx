// Comentario (ES): Sección explicativa del método Entreno Eficiente con tarjetas e iconos.
// Uso: coloca <EfficientMethodSection /> después de testimonios para explicar el método por bloques.

import React from "react";
import SectionTitle from "./SectionTitle";
import { trackWhatsAppClick } from "../lib/analytics";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

type InfoItem = {
  title: string;
  text: string;
  icon: React.ReactNode;
};

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10h3v4H3v-4zm15 0h3v4h-3v-4z" fill="currentColor"/>
      <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function NutritionIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 3v8m0 0l-2 10m2-10l2 10M17 3c-2 2-3 5-3 8s1 5 3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function RoadmapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h6M4 12h10M4 18h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l7 3v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Eliminado AdaptIcon por no utilizarse para evitar lints

const ITEMS: InfoItem[] = [
  {
    title: "Para gente con poco tiempo",
    text: "Pensado para agendas apretadas: claro, directo y sostenible.",
    icon: <ClockIcon />,
  },
  {
    title: "< 40 min, 3–4 días/sem",
    text: "Sesiones cortas que maximizan resultados sin sacrificar tu vida.",
    icon: <DumbbellIcon />,
  },
  {
    title: "Fuerza + cardio estratégico",
    text: "Combinación inteligente para mejorar composición corporal y salud.",
    icon: <DumbbellIcon />,
  },
  {
    title: "Nutrición práctica y flexible",
    text: "Sin prohibiciones extremas: porciones y hábitos que encajan contigo.",
    icon: <NutritionIcon />,
  },
  {
    title: "Plan por fases (3 meses)",
    text: "Objetivos claros, progresión medible y resultados visibles.",
    icon: <RoadmapIcon />,
  },
  {
    title: "+400 casos y acompañamiento",
    text: "Personas reales con poco tiempo logrando cambios duraderos.",
    icon: <SupportIcon />,
  },
];

export default function EfficientMethodSection() {
  return (
    <section className="section" aria-labelledby="metodo-eficiente">
      <SectionTitle label="CÓMO FUNCIONA EL ENTRENO EFICIENTE" variant="faq" />

      <div className="infoGrid">
        {ITEMS.map((it) => (
          <article key={it.title} className="infoCard">
            <div className="infoCard__icon" aria-hidden>
              {it.icon}
            </div>
            <h3 className="infoCard__title">{it.title}</h3>
            <p className="infoCard__text">{it.text}</p>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <a 
          className="btn btn--block" 
          href={WHATSAPP} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("Quiero mi plan eficiente", "method_section")}
        >
          Quiero mi plan eficiente
        </a>
      </div>
    </section>
  );
}

