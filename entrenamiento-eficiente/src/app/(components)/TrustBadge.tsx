// Comentario (ES): Componente de confianza tipo "badge" para destacar prueba social.
// Uso: Mostrar una píldora con icono y texto como "Método probado · 400+ casos".

import React from "react";

type TrustBadgeProps = {
  label?: string;
  value?: string;
  className?: string;
};

export default function TrustBadge({
  label = "Método probado",
  value = "+400 casos",
  className = "",
}: TrustBadgeProps) {
  return (
    <div className={`trust-badge ${className}`} aria-label={`${label} · ${value}`}>
      <span className="trust-badge__icon" aria-hidden>
        {/* Icono de escudo con check para transmitir fiabilidad */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3l7 3v6c0 4.418-3.582 8-8 8s-8-3.582-8-8V6l9-3z"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="trust-badge__text">
        <strong>{label}</strong>
        <span className="sep">·</span>
        {/* Enfatizamos los primeros 4 caracteres (+400) sobre el resto */}
        <span className="accent">
          <span className="trust-badge__valueBig">{value.slice(0, 4)}</span>
          <span className="trust-badge__valueRest">{value.slice(4)}</span>
        </span>
      </span>
    </div>
  );
}

