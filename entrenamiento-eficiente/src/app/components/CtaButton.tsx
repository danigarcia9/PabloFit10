"use client";

// Comentario (ES): Componente de botón CTA con tracking de GA4 para WhatsApp
// Uso: <CtaButton label="Texto del botón" location="ubicación" />

import { trackWhatsAppClick } from "../lib/analytics";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

interface CtaButtonProps {
  label?: string;
  location?: string;
}

export default function CtaButton({ 
  label = "Habla conmigo por WhatsApp", 
  location = "general" 
}: CtaButtonProps) {
  const handleClick = () => {
    trackWhatsAppClick(label, location);
  };

  return (
    <a 
      className="btn btn--block" 
      href={WHATSAPP} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
