// Comentario (ES): Título de sección en mayúsculas con icono por variante.
// Uso: <SectionTitle label="Cambios reales" variant="changes" />

import React from "react";

type SectionTitleProps = {
  label: string;
  variant?: "changes" | "video" | "faq";
  className?: string;
};

function Icon({ variant = "changes" }: { variant?: "changes" | "video" | "faq" }) {
  if (variant === "video") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
      </svg>
    );
  }
  if (variant === "faq") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 10a2.5 2.5 0 1 1 3.8 2.1c-.9.6-1.3 1-1.3 1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="currentColor" />
      </svg>
    );
  }
  // changes (galería/cuadrículas)
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="10" height="10" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="10" width="10" height="10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function SectionTitle({ label, variant = "changes", className = "" }: SectionTitleProps) {
  return (
    <h2 className={`section-title ${className}`}>
      <span className="section-title__icon" aria-hidden>
        <Icon variant={variant} />
      </span>
      <span className="section-title__text">{label}</span>
    </h2>
  );
}

