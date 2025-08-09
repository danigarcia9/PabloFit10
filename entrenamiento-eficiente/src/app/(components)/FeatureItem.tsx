// Comentario (ES): Ítem de característica con icono, pensado para listas de beneficios.
// Uso: <FeatureItem text="Perder grasa y ganar músculo con sesiones cortas" />

import React from "react";

type FeatureItemProps = {
  text: string;
  className?: string;
};

export default function FeatureItem({ text, className = "" }: FeatureItemProps) {
  return (
    <div className={`feature ${className}`}>
      <span className="feature__icon" aria-hidden>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="#000"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="feature__text">{text}</span>
    </div>
  );
}

