// Comentario (ES): Galería de cambios: muestra 9 imágenes y un overlay "Ver más" que revela el resto.
// Uso: <ChangesGallery photos={[{secureUrl, width, height}]}/> en una sección.

"use client";

import Image from "next/image";
import React from "react";

export type GalleryPhoto = {
  secureUrl: string;
  width?: number | null;
  height?: number | null;
};

type ChangesGalleryProps = {
  photos: GalleryPhoto[];
};

export default function ChangesGallery({ photos }: ChangesGalleryProps) {
  const [showAll, setShowAll] = React.useState(false);

  if (!photos || photos.length === 0) return null;

  const firstNine = photos.slice(0, 9);
  const tenth = photos[9];
  const CTA_VARIANTS = [
    { title: "Empieza hoy", sub: "WhatsApp en 1 min", btn: "Hablar ahora" },
    { title: "Sesiones < 40 min", sub: "3–4 días/sem", btn: "Quiero el plan" },
    { title: "Resultados reales", sub: "+400 casos", btn: "Ver mi caso" },
  ];

  const renderImage = (p: GalleryPhoto, key: string) => (
    <div key={key} style={{ position: "relative" }}>
      <Image
        src={p.secureUrl}
        alt="Cambio físico"
        width={p.width || 800}
        height={p.height || 800}
        className="gallery__img"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );

  if (!showAll) {
    // Construimos la vista colapsada con CTA tras la 7ª imagen si hay suficientes
    if (photos.length <= 9) {
      const items: React.ReactNode[] = [];
      firstNine.forEach((p, i) => {
        items.push(renderImage(p, `g-${i}`));
        if (i === 6 && firstNine.length > 7) {
          // CTA simple en colapsado
          items.push(
            <div className="gallery__ctaCard" key={`cta-collapsed-7`}>
              <h3 className="title" style={{ margin: 0 }}>Empieza hoy</h3>
              <p className="subtitle" style={{ margin: 0 }}>WhatsApp en 1 min</p>
              <a className="btn btn--block" href="https://api.whatsapp.com/send/?phone=34640974820" target="_blank" rel="noopener noreferrer">Hablar ahora</a>
            </div>
          );
        }
      });
      return <div className="gallery">{items}</div>;
    }

    // Tenemos 10+ fotos: 0..6, CTA, 7, overlay en 8
    const items: React.ReactNode[] = [];
    for (let i = 0; i < 7; i += 1) items.push(renderImage(firstNine[i], `g-${i}`));
    items.push(
      <div className="gallery__ctaCard" key={`cta-collapsed-7`}>
        <h3 className="title" style={{ margin: 0 }}>Empieza hoy</h3>
        <p className="subtitle" style={{ margin: 0 }}>WhatsApp en 1 min</p>
        <a className="btn btn--block" href="https://api.whatsapp.com/send/?phone=34640974820" target="_blank" rel="noopener noreferrer">Hablar ahora</a>
      </div>
    );
    items.push(renderImage(firstNine[7], `g-7`));

    items.push(
      <div className="gallery__cell--overlay" key={`overlay-8`}>
        {renderImage(firstNine[8], "g-8")}
        {tenth ? (
          <div
            className="gallery__moreOverlay"
            aria-hidden
            style={{ backgroundImage: `url(${tenth.secureUrl})` }}
          />
        ) : null}

        <div className="gallery__moreCta" style={{ textAlign: "center" }}>
          <button className="btn btn--ghostAccent" onClick={() => setShowAll(true)}>
            Ver más
          </button>
        </div>
      </div>
    );

    return <div className="gallery">{items}</div>;
  }

  // Mostrar todo
  return (
    <div className="gallery">
      {(() => {
        let ctaCount = 0;
        return photos.map((p, i) => {
        const elements: React.ReactNode[] = [renderImage(p, `g-all-${i}`)];
        // Insertar CTA cada 7 imágenes aproximadamente
        if ((i + 1) % 7 === 0 && i < photos.length - 1) {
            const variant = CTA_VARIANTS[ctaCount % CTA_VARIANTS.length];
            ctaCount += 1;
          elements.push(
            <div className="gallery__ctaCard" key={`cta-${i}`}>
                <h3 className="title" style={{ margin: 0 }}>{variant.title}</h3>
                <p className="subtitle" style={{ margin: 0 }}>{variant.sub}</p>
                <a className="btn btn--block" href="https://api.whatsapp.com/send/?phone=34640974820" target="_blank" rel="noopener noreferrer">{variant.btn}</a>
            </div>
          );
        }
          return <React.Fragment key={`frag-${i}`}>{elements}</React.Fragment>;
        });
      })()}
    </div>
  );
}

