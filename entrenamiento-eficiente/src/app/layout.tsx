import type { Metadata } from "next";
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
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
