// Comentario (ES): Pie con enlaces básicos y CTA final a WhatsApp.
const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

export default function Footer() {
  return (
    <footer className="container" style={{ paddingTop: 24, paddingBottom: 120, opacity: 0.9 }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "space-between" }}>
        <small>© {new Date().getFullYear()} Entreno Eficiente</small>
        <nav style={{ display: "flex", gap: 12 }}>
          <a href="/aviso-legal">Aviso Legal</a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}

