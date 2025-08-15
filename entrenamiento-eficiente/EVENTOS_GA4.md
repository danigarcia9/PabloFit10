# 📊 Eventos GA4 - Entreno Eficiente

## 🎯 **Estructura de Eventos Implementada**

### **📱 Eventos de WhatsApp (organizados por ubicación)**

Cada ubicación tiene su propio evento para facilitar el análisis en GA4:

| Evento | Ubicación | Botón | Descripción |
|--------|-----------|-------|-------------|
| `whatsapp_hero` | Hero principal | "Quiero empezar ahora" | Botón principal del hero (primera sección) |
| `whatsapp_commercial_text` | Texto comercial | "Reserva tu plaza" | Botón en la sección de texto comercial |
| `whatsapp_testimonials` | Testimonios | "Más información del programa" | Botón debajo del carrusel de testimonios |
| `whatsapp_method_section` | Sección método | "Quiero mi plan eficiente" | Botón en la sección explicativa del método |
| `whatsapp_final_banner` | Banner final | "Habla conmigo por WhatsApp" | Botón en el banner final con imagen |
| `whatsapp_gallery_collapsed` | Galería colapsada | "Hablar ahora" | Botón en galería colapsada (CTA simple) |
| `whatsapp_gallery_expanded` | Galería expandida | "Hablar ahora", "Quiero el plan", "Ver mi caso" | Botones en galería expandida |

### **🖼️ Eventos de Galería**

| Evento | Descripción |
|--------|-------------|
| `gallery_view_more_click` | Click en "Ver más" para expandir la galería de cambios |

---

## 📈 **Cómo aparecerá en GA4**

### **Panel de Eventos:**
```
Events (Eventos)
├── whatsapp_hero: [Número de clicks]
├── whatsapp_commercial_text: [Número de clicks]
├── whatsapp_testimonials: [Número de clicks]
├── whatsapp_method_section: [Número de clicks]
├── whatsapp_final_banner: [Número de clicks]
├── whatsapp_gallery_collapsed: [Número de clicks]
├── whatsapp_gallery_expanded: [Número de clicks]
├── gallery_view_more_click: [Número de clicks]
└── page_view: [Vistas de página]
```

### **Parámetros de cada evento:**
- `button_label`: Texto exacto del botón
- `location`: Ubicación/sección donde está el botón
- `event_category`: "engagement"
- `event_label`: Combinación de location + button_label

---

## 🎯 **Ventajas de esta estructura:**

1. **Análisis directo:** Cada ubicación aparece como evento separado en GA4
2. **Fácil comparación:** Puedes ver qué sección convierte mejor
3. **Funnel tracking:** Analizar el flujo de conversión por sección
4. **Optimización:** Identificar qué botones/ubicaciones necesitan mejora

---

## 📊 **Ejemplo de análisis en GA4:**

```
Event Name          | Clicks | Conversion Rate
-------------------|--------|----------------
whatsapp_hero      | 45     | 23.5%
whatsapp_final_banner | 12  | 6.3%
whatsapp_method_section | 18 | 9.4%
whatsapp_gallery_collapsed | 23 | 12.0%
gallery_view_more_click | 89 | 46.6%
```

---

## 🔧 **Configuración recomendada en GA4:**

1. **Marcar como conversiones:** Todos los eventos `whatsapp_*`
2. **Crear dimensiones personalizadas:** `button_label`, `location`
3. **Configurar alertas:** Caída en conversiones por ubicación
4. **Crear informes personalizados:** Funnel de conversión por sección
