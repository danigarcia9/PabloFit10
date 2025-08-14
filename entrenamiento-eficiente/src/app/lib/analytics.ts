// Comentario (ES): Utilidades para tracking de eventos en Google Analytics 4 (GA4)
// Uso: funciones para registrar clicks en botones de WhatsApp y otros elementos

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

// Función base para enviar eventos a GA4
export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Evento para clicks en botones de WhatsApp
export const trackWhatsAppClick = (buttonLabel: string, location: string) => {
  trackEvent('whatsapp_click', {
    button_label: buttonLabel,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_${buttonLabel}`,
  });
};

// Evento para clicks en botón "Ver más" de galería de cambios
export const trackGalleryViewMoreClick = () => {
  trackEvent('gallery_view_more_click', {
    event_category: 'engagement',
    event_label: 'gallery_changes_view_more',
  });
};

// Evento para clicks en otros botones específicos
export const trackButtonClick = (buttonLabel: string, location: string) => {
  trackEvent('button_click', {
    button_label: buttonLabel,
    location: location,
    event_category: 'engagement',
    event_label: `${location}_${buttonLabel}`,
  });
};
