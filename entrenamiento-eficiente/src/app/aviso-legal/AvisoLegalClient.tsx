"use client";

// Comentario (ES): Componente cliente interactivo para la página de Aviso Legal.
// Uso: maneja el estado de idioma y muestra el modal de privacidad; se renderiza desde `page.tsx`.

import { useState } from "react";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=34640974820";

export default function AvisoLegalClient() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <main className="container" style={{ paddingTop: 24, paddingBottom: 64 }}>
      {/* Header local con selector de idioma */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: 16 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={() => setLang("es")}
            className="badge"
            aria-pressed={lang === "es"}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px" }}
          >
            <img src="/spain.webp" alt="ES" style={{ width: 18, height: 18, objectFit: "cover", borderRadius: 999 }} />
            <span>ES</span>
          </button>
          <button
            onClick={() => setLang("en")}
            className="badge"
            aria-pressed={lang === "en"}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px" }}
          >
            <img src="/uk.webp" alt="EN" style={{ width: 18, height: 18, objectFit: "cover", borderRadius: 999 }} />
            <span>EN</span>
          </button>
        </div>
      </header>

      {lang === "es" ? <ContenidoES /> : <ContenidoEN />}

      <button className="btn btn--block" onClick={() => setShowPrivacy(true)} style={{ marginTop: 16 }}>
        {lang === "es" ? "Ver Política de Privacidad" : "View Privacy Policy"}
      </button>

      {/* Modal privacidad */}
      {showPrivacy && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "grid",
            placeItems: "center",
            padding: 16,
          }}
          onClick={() => setShowPrivacy(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="container"
            style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, maxHeight: "80vh", overflow: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12 }}>
              <h3 className="title">{lang === "es" ? "Política de Privacidad de PABLOFIT10" : "Privacy Policy of PABLOFIT10"}</h3>
              <button className="badge" onClick={() => setShowPrivacy(false)} aria-label="Cerrar">×</button>
            </div>
            {lang === "es" ? <PrivacidadES /> : <PrivacidadEN />}
          </div>
        </div>
      )}

      <footer style={{ marginTop: 20 }}>
        <p>Contacta con nosotros:</p>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 8 }}>
          <a href="https://www.instagram.com/pablofit_10/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.webp" alt="Instagram" style={{ height: 28 }} />
          </a>
          <a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px" }}>
            <img src="/whatsapp.webp" alt="WhatsApp" style={{ width: 18, height: 18 }} />
            CONTACTAR
          </a>
        </div>
      </footer>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="section">
      <h2 className="title">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

function ContenidoES() {
  return (
    <section className="spanish">
      <h1 className="title">Aviso Legal</h1>
      <Section title="RIESGOS DEL USO DEL PRODUCTO">
        <p>
          El contenido de este sitio web no reemplaza a la atención médica ni al diagnóstico directo,
          personal y profesional. Ninguno de los planes de comidas o programas de ejercicios debe realizarse
          sin la autorización previa de su médico o proveedor de atención médica. La información contenida
          en este documento no pretende proporcionar consejos específicos de salud física o mental, o
          cualquier otro consejo, para ninguna persona o empresa.
        </p>
        <p>
          Puede haber riesgos asociados con la participación en actividades mencionadas en nuestro sitio para
          personas con problemas de salud o con afecciones físicas o mentales preexistentes. Debido a que
          existen estos riesgos, no participará en ningún plan de comidas disponible de nosotros si tiene mala
          salud o una condición mental o física preexistente. Si elige participar en estos riesgos, lo hace por
          su propia voluntad, asumiendo todos los riesgos asociados.
        </p>
        <p>
          Como con cualquier programa de ejercicios, usted asume ciertos riesgos para su salud y seguridad.
          Cualquier forma de programa de ejercicios puede causar lesiones, y nuestros programas no son una
          excepción. Es posible que se lastime realizando los ejercicios, especialmente si los ejecuta con mala
          técnica, aunque se incluye instrucción en la forma para cada ejercicio.
        </p>
        <p>
          Tenga en cuenta que nuestros programas implican un riesgo de lesión. Si elige participar, lo hace por su
          propia voluntad, asumiendo a sabiendas y voluntariamente todos los riesgos. Estos riesgos también pueden
          existir para quienes actualmente gozan de buena salud.
        </p>
        <p>
          No somos médicos. Nuestros consejos, ya sea en el sitio, planes de comidas, programa de ejercicios o por
          correo electrónico, no sustituyen el asesoramiento médico. Debe consultar a su médico antes de comenzar
          cualquier plan o programa. Usa nuestros planes y tutorías bajo su propio riesgo.
        </p>
      </Section>
      <Section title="RESULTADOS GENERALMENTE ESPERADOS">
        <p>
          Aunque nuestros productos y servicios están destinados a implementarse en su totalidad, a veces no lo son,
          lo que podría resultar en falta de progreso para el usuario. Incluso implementándolos correctamente, es
          posible que no se obtengan los resultados esperados ni se produzca pérdida de grasa, ganancia muscular u
          otros resultados positivos.
        </p>
      </Section>
      <Section title="RENUNCIA DE RESPONSABILIDAD TESTIMONIAL">
        <p>
          Todas las transformaciones y testimonios son reales, pero no representan resultados típicos. Muestran lo
          que las personas más motivadas y dedicadas pueden lograr siguiendo planes personalizados. Los resultados
          varían según historial de ejercicio, genética y dedicación.
        </p>
      </Section>
      <Section title="POLÍTICA DE ENVÍOS">
        <p>
          Al tratarse de un servicio, no habrá envíos presenciales. La entrega de algunos servicios online se
          realizará en 24–36 horas desde la compra.
        </p>
      </Section>
      <Section title="CANCELACIÓN DE PEDIDOS, DEVOLUCIÓN Y REEMBOLSO">
        <p>
          No se aceptan devoluciones de productos adquiridos en línea, sean suscripciones o no. Una vez realizada la
          compra, no se otorgarán reembolsos por ninguna razón, incluyendo servicios de suscripción y productos
          promocionales.
        </p>
      </Section>
      <Section title="SEGURIDAD Y PROTECCIÓN A LOS COMPRADORES">
        <p>
          Al pagar mediante Visa o Mastercard, se solicitarán nombre del titular, número de tarjeta, fecha de caducidad
          y CVV. La información será gestionada por pasarelas externas como Stripe según su política de privacidad.
        </p>
      </Section>
      <Section title="INFORMACIÓN DE FACTURACIÓN DE LA SUSCRIPCIÓN RECURRENTE IMPORTANTE">
        <p>
          Tras adquirir el programa, se cobrará automáticamente en la fecha de facturación indicada y continuará
          recibiendo actualizaciones según la modalidad elegida (mensual, trimestral o anual). Para cancelar, escriba a
          pablotrainer10@gmail.com con al menos 72 horas de antelación.
        </p>
      </Section>
      <Section title="POLÍTICA DE DEVOLUCIÓN">
        <p>
          No se aceptan devoluciones. Asegúrese de estar satisfecho antes de finalizar la compra. No habrá reembolsos y
          todas las ventas son finales.
        </p>
      </Section>
      <Section title="Contacto">
        <p>
          ¿Tiene preguntas? Escríbanos a <a href="mailto:pablotrainer10@gmail.com">pablotrainer10@gmail.com</a> y le
          responderemos encantados.
        </p>
      </Section>
    </section>
  );
}

function ContenidoEN() {
  return (
    <section className="english">
      <h1 className="title">Legal Notice</h1>
      <Section title="RISKS OF USING THE PRODUCT">
        <p>
          The content of this website does not replace medical care or direct, personal, and professional diagnosis.
          None of the meal plans or exercise programs should be performed without prior authorization from your doctor
          or healthcare provider. The information herein is not intended to provide specific physical or mental health
          advice for any individual or company.
        </p>
        <p>
          There may be risks associated with activities mentioned on our site for people with health issues or
          pre-existing conditions. If you choose to participate, you do so willingly, assuming all associated risks.
        </p>
        <p>
          Any exercise program can cause injuries. Our programs are no exception, especially if exercises are performed
          with improper form, even though instruction in form is included for each exercise.
        </p>
        <p>
          We are not doctors. Our advice, whether on our website, meal plan, exercise program, or via email, is not a
          substitute for medical advice. Consult your doctor before beginning any program. You use our plans at your own
          risk.
        </p>
      </Section>
      <Section title="TYPICAL RESULTS EXPECTED">
        <p>
          Although our products and services are intended to be fully implemented, sometimes they are not, which may
          result in lack of progress. Even when implemented correctly, results may vary and are not guaranteed.
        </p>
      </Section>
      <Section title="TESTIMONIAL DISCLAIMER">
        <p>
          All transformations and testimonials are real but do not represent typical results. They showcase what highly
          motivated and dedicated individuals can achieve following personalized plans. Results vary by history,
          genetics, and dedication.
        </p>
      </Section>
      <Section title="SHIPPING POLICY">
        <p>As this is a service, there will be no physical shipments. Some online services are delivered within 24–36 hours.</p>
      </Section>
      <Section title="ORDER CANCELLATION, RETURN & REFUND">
        <p>
          We do not accept returns on any online products or subscriptions. Once purchased, no refunds will be granted
          for any reason.
        </p>
      </Section>
      <Section title="SECURITY AND PROTECTION FOR BUYERS">
        <p>
          When paying via Visa or Mastercard, you will be asked for cardholder name, card number, expiration date, and
          CVV. Information is managed by external payment gateways such as Stripe, under their privacy policy.
        </p>
      </Section>
      <Section title="IMPORTANT RECURRING SUBSCRIPTION BILLING INFORMATION">
        <p>
          After purchasing our program, you will be automatically charged on the indicated billing date and continue to
          receive updates per your selected plan (monthly, quarterly, or annual). To cancel, email
          pablotrainer10@gmail.com at least 72 hours in advance.
        </p>
      </Section>
      <Section title="RETURN POLICY">
        <p>No returns are accepted. Ensure you are satisfied before purchasing. All sales are final.</p>
      </Section>
      <Section title="Contact">
        <p>
          Questions? Email <a href="mailto:pablotrainer10@gmail.com">pablotrainer10@gmail.com</a> and we will be happy
          to help.
        </p>
      </Section>
    </section>
  );
}

function PrivacidadES() {
  return (
    <div className="section" style={{ paddingBottom: 24 }}>
      <Section title="Información sobre protección de datos en PABLOFIT10">
        <p>
          Esta política de privacidad establece cómo se gestionan los datos personales en el sitio web
          www.pablotfit10.com, propiedad de VERGARA & CISNEROS LLC (EIN 61-2223030), 1209 Mountain Road Place
          Northeast, Albuquerque, NM 87110.
        </p>
      </Section>
      <Section title="Compromiso con la Privacidad">
        <p>
          Valoramos la transparencia y la seguridad mediante prácticas responsables de manejo, comunicación y
          almacenamiento de datos. Explicamos qué información recopilamos, cómo la usamos y tus derechos como usuario.
        </p>
      </Section>
      <Section title="Principios de Privacidad">
        <ul>
          <li>No solicitamos información personal salvo que sea necesario para ofrecer nuestros servicios.</li>
          <li>No compartimos información personal salvo por ley o consentimiento explícito del usuario.</li>
          <li>Los datos se usan únicamente para los fines especificados en esta política.</li>
        </ul>
      </Section>
      <Section title="Cumplimiento Normativo">
        <p>
          Cumplimos LOPD, RGPD y LSSICE. Esta política puede modificarse por cambios legislativos o autorregulatorios.
        </p>
      </Section>
      <Section title="Responsable del Tratamiento de Datos">
        <p>
          Identidad: VERGARA & CISNEROS LLC — EIN: 61-2223030 — Dirección: 1209 Mountain Road Place NE, Albuquerque,
          NM 87110.
        </p>
      </Section>
      <Section title="Finalidad del Tratamiento">
        <p>Envío de información sobre eventos, noticias, productos y servicios. Conservación hasta solicitud de eliminación.</p>
      </Section>
      <Section title="Derechos de los Usuarios">
        <p>
          Acceso, rectificación, supresión, limitación, oposición y portabilidad. Revocación del consentimiento en
          cualquier momento contactando a pablotrainer10@gmail.com.
        </p>
      </Section>
      <Section title="Transferencia de Datos">
        <ul>
          <li>Microsoft OneDrive para almacenamiento (amparado por acuerdos internacionales vigentes).</li>
          <li>Google Analytics para análisis de uso mediante cookies.</li>
        </ul>
      </Section>
      <Section title="Seguridad de Datos">
        <p>
          Protegemos tus datos con medidas físicas, electrónicas y de procedimiento, sin poder garantizar seguridad
          absoluta por la naturaleza de Internet.
        </p>
      </Section>
      <Section title="Datos Recopilados">
        <ul>
          <li>Identificación (nombre, correo, teléfono).</li>
          <li>Dirección postal o electrónica.</li>
          <li>Información financiera aportada para los servicios solicitados.</li>
        </ul>
        <p>También datos no identificativos mediante cookies (ver política de cookies).</p>
      </Section>
      <Section title="No Vendemos Datos Personales">
        <p>No vendemos ni alquilamos tus datos. Compartimos con terceros solo cuando es necesario y con tu consentimiento.</p>
      </Section>
      <Section title="Responsabilidad del Usuario y Actualización">
        <p>El usuario debe mantener sus datos exactos y actualizados. Notificaremos cambios relevantes de esta política.</p>
      </Section>
      <p className="subtitle">Última actualización: 24 de diciembre de 2024.</p>
    </div>
  );
}

function PrivacidadEN() {
  return (
    <div className="section" style={{ paddingBottom: 24 }}>
      <Section title="Data Protection Information at PABLOFIT10">
        <p>
          This privacy policy outlines how personal data is managed on www.pablotfit10.com, owned by VERGARA & CISNEROS
          LLC (EIN 61-2223030), 1209 Mountain Road Place NE, Albuquerque, NM 87110.
        </p>
      </Section>
      <Section title="Commitment to Privacy">
        <p>
          We value transparency and secure your information through responsible management, communication and storage.
          We explain what we collect, how we use it, and your rights as a user.
        </p>
      </Section>
      <Section title="Privacy Principles">
        <ul>
          <li>No personal data is requested unless necessary to provide our services.</li>
          <li>No sharing unless required by law or with explicit user consent.</li>
          <li>Data is used only for the purposes specified in this policy.</li>
        </ul>
      </Section>
      <Section title="Regulatory Compliance">
        <p>We comply with GDPR and applicable regulations. This policy may change due to legislative updates.</p>
      </Section>
      <Section title="Data Controller">
        <p>VERGARA & CISNEROS LLC — EIN: 61-2223030 — 1209 Mountain Road Place NE, Albuquerque, NM 87110.</p>
      </Section>
      <Section title="Purpose of Data Processing">
        <p>Send information about events, news, products and services. Retained until deletion is requested.</p>
      </Section>
      <Section title="User Rights">
        <p>
          Access, rectification, deletion, restriction, objection and portability. Revoke consent by emailing
          pablotrainer10@gmail.com.
        </p>
      </Section>
      <Section title="Data Transfer">
        <ul>
          <li>Microsoft OneDrive for storage.</li>
          <li>Google Analytics via cookies.</li>
        </ul>
      </Section>
      <Section title="Data Security">
        <p>We protect your data but cannot guarantee absolute security due to the nature of the Internet.</p>
      </Section>
      <Section title="Data Collected">
        <ul>
          <li>Identification (name, email, phone).</li>
          <li>Postal or electronic address.</li>
          <li>Financial information provided for requested services.</li>
        </ul>
        <p>We also collect non-identifying data through cookies.</p>
      </Section>
      <Section title="We Do Not Sell Personal Data">
        <p>We do not sell or rent your personal data. We share it only when necessary and with your consent.</p>
      </Section>
      <Section title="User Responsibility and Updates">
        <p>The user is responsible for data accuracy and updates. We will notify significant policy changes.</p>
      </Section>
      <p className="subtitle">Last update: December 24, 2024.</p>
    </div>
  );
}

