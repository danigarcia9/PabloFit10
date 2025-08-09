// Comentario (ES): Cabecera fija con logo enlazado al home y CTA de contacto por WhatsApp.
// Uso: se incluye en el layout principal; el logo y texto llevan a "/" y el botón abre WhatsApp.
import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

export default function Header() {
  return (
    <header
      className="container"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "saturate(140%) blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }} aria-label="Ir al inicio">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/icon-entrena-eficiente-transparente.png" alt="Icono Entreno Eficiente" width={28} height={28} />
          <strong style={{ letterSpacing: 0.3 }}>ENTRENA <span className="accent">EFICIENTE</span></strong>
        </div>
      </Link>
      <a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 12px", display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, lineHeight: 1.1 }}>
        <Image src="/whatsapp.png" alt="WhatsApp" width={16} height={16} style={{ color: "black" }} />
        CONTACTAR
      </a>
    </header>
  );
}

