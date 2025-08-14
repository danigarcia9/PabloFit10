"use client";

// Comentario (ES): Banner final con imagen difuminada arriba/abajo y titular con parte en amarillo.
// Uso: cerrar la home con un CTA fuerte y botón a WhatsApp por encima de la imagen.

import Image from "next/image";
import React from "react";
import { trackWhatsAppClick } from "../lib/analytics";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

export default function FinalCtaBanner() {
  return (
    <section className="section">
      <div className="finalCta">
        <Image
          src="/pablo-polo-sentado.jpg"
          alt="Pablo Díez sentado"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ objectFit: "cover" }}
        />

        <div className="finalCta__overlay">
          <h2 className="finalCta__title">
            EMPECEMOS A <span className="accent">TRABAJAR YA</span>
          </h2>
          <a
            className="btn btn--block"
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("Habla conmigo por WhatsApp", "final_banner")}
          >
            Habla conmigo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

