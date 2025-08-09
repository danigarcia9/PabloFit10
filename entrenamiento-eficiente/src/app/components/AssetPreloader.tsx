"use client";

// Comentario (ES): Pre-cargador de assets para mejorar la percepción de velocidad al entrar.
// Uso: monta este componente en la página y pásale listas de URLs de imágenes y vídeos para cachearlas al inicio.

import React, { useEffect } from "react";

type AssetPreloaderProps = {
  imageUrls?: string[];
  videoPosterUrls?: string[];
};

export default function AssetPreloader({ imageUrls = [], videoPosterUrls = [] }: AssetPreloaderProps) {
  // Comentario (ES): Cargamos todas las imágenes y pósters de vídeo nada más montar el componente.
  useEffect(() => {
    const urlsToPreload: string[] = [];
    for (const url of imageUrls) {
      if (typeof url === "string" && url.length > 0) urlsToPreload.push(url);
    }
    for (const url of videoPosterUrls) {
      if (typeof url === "string" && url.length > 0) urlsToPreload.push(url);
    }

    const createdImages: HTMLImageElement[] = [];
    for (const url of urlsToPreload) {
      const img = new Image();
      img.decoding = "async";
      img.loading = "eager";
      img.src = url;
      createdImages.push(img);
    }

    return () => {
      // Comentario (ES): Soltamos referencias para ayudar al GC cuando se desmonta.
      createdImages.length = 0;
    };
  }, [imageUrls, videoPosterUrls]);

  return null;
}

