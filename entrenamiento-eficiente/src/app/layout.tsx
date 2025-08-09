import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comentario (ES): Metadatos base del sitio. Nombre de marca y descripción breve.
export const metadata: Metadata = {
  title: "ENTRENO EFICIENTE | Cambia tu cuerpo en menos tiempo",
  description:
    "Método Entreno Eficiente: sesiones <40 min, fuerza + cardio, nutrición simple y resultados reales. 400+ casos de éxito.",
  icons: {
    icon: "/icon-entrena-eficiente-transparente.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Comentario (ES): ID de Google Analytics (GA4). En producción puede venir de variables de entorno.
  const GA_ID = "G-V9J183MYG7";
  return (
    <html lang="es">
      <head>
        {/* Comentario (ES): Preconexión a Cloudinary para acelerar la carga inicial de imágenes/vídeos */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

        {/* Comentario (ES): Google Analytics (GA4) con carga diferida tras la hidratación */}
        <Script
          id="ga4-lib"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
