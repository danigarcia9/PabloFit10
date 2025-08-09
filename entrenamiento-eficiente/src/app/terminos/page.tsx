// Comentario (ES): Página de términos/aviso legal migrada del index.html original.
// Uso: muestra contenido legal en ES/EN con estilo básico y CTA a WhatsApp.

export const metadata = {
  title: "Redirección | Aviso Legal",
  description: "Esta ruta redirige a /aviso-legal.",
};

// Nota: Eliminado WHATSAPP no utilizado para evitar lints

export default function TerminosPage() {
  if (typeof window !== "undefined") {
    window.location.replace("/aviso-legal");
  }
  return null;
}

