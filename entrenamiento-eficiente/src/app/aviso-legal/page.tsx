// Comentario (ES): Página servidor de Aviso Legal; expone metadata y renderiza el componente cliente.
// Uso: mantiene `metadata` válido en App Router y delega interactividad a `AvisoLegalClient`.

import AvisoLegalClient from "./AvisoLegalClient";

export const metadata = {
  title: "Aviso Legal | PABLOFIT10",
  description: "Aviso Legal, términos y política de privacidad.",
};

export default function Page() {
  return <AvisoLegalClient />;
}

