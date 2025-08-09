// Comentario (ES): Página de términos/aviso legal migrada del index.html original.
// Uso: muestra contenido legal en ES/EN con estilo básico y CTA a WhatsApp.

export const metadata = {
  title: "Redirección | Aviso Legal",
  description: "Esta ruta redirige a /aviso-legal.",
};

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

export default function TerminosPage() {
  if (typeof window !== "undefined") {
    window.location.replace("/aviso-legal");
  }
  return null;
}

