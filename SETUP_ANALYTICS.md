# 🎯 GUÍA DE CONFIGURACIÓN - Analytics y SEO

## 📊 PASO 1: Google Analytics 4

### 1.1 Crear Cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Click en "Empezar a medir"
3. Nombre de cuenta: **RIVAMEZ**
4. Nombre de propiedad: **Sitio Web RIVAMEZ**
5. Zona horaria: **Perú (GMT-5)**
6. Moneda: **Soles peruanos (PEN)**

### 1.2 Configurar Flujo de Datos

1. Plataforma: **Web**
2. URL del sitio web: `https://rivamez.vercel.app`
3. Nombre del flujo: **Sitio Principal**
4. **Copiar el ID de medición** (formato: `G-XXXXXXXXXX`)

### 1.3 Agregar al Proyecto

```bash
# Editar .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Pegar tu ID aquí
```

### 1.4 Configurar Conversiones

En Google Analytics, ve a **Administrar → Eventos → Crear evento**:

1. **form_submit** - Envíos de formularios
2. **whatsapp_click** - Clics en WhatsApp
3. **quote_request** - Solicitudes de cotización
4. **download** - Descargas de PDF

Marcar como conversiones ✅

---

## 🏷️ PASO 2: Google Tag Manager (Opcional pero Recomendado)

### 2.1 Crear Cuenta

1. Ve a [Google Tag Manager](https://tagmanager.google.com/)
2. Crear cuenta: **RIVAMEZ**
3. Nombre del contenedor: **Sitio Web RIVAMEZ**
4. Plataforma: **Web**
5. **Copiar el ID del contenedor** (formato: `GTM-XXXXXXX`)

### 2.2 Agregar al Proyecto

```bash
# Editar .env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX  # Pegar tu ID aquí
```

### 2.3 Configurar Etiquetas

1. **Google Analytics 4** - Conectar con GA4
2. **Facebook Pixel** (si tienes campañas)
3. **LinkedIn Insight Tag** (si tienes campañas B2B)

---

## 🔍 PASO 3: Google Search Console

### 3.1 Verificar Propiedad

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agregar propiedad: `https://rivamez.com`
3. Método de verificación: **Etiqueta HTML**
4. **Copiar el código de verificación**

### 3.2 Agregar al Proyecto

```javascript
// Ya está configurado en app/layout.js
verification: {
  google: 'tu-codigo-de-verificacion-aqui'
}
```

### 3.3 Enviar Sitemap

1. URL del sitemap: `https://rivamez.com/sitemap.xml`
2. Crear archivo `app/sitemap.js`:

```javascript
export default function sitemap() {
  return [
    {
      url: 'https://rivamez.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://rivamez.com/nosotros',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rivamez.com/servicios',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://rivamez.com/proyectos',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://rivamez.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: 'https://rivamez.com/contacto',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
```

---

## 📈 PASO 4: Microsoft Clarity (Heatmaps y Session Recording)

### 4.1 Crear Proyecto

1. Ve a [Microsoft Clarity](https://clarity.microsoft.com/)
2. Agregar nuevo proyecto: **RIVAMEZ**
3. URL: `https://rivamez.com`
4. **Copiar el código de instalación**

### 4.2 Agregar a GTM

Si usas GTM, agrega Clarity como etiqueta HTML personalizada.

Si no, puedes agregarlo directamente en `app/layout.js`:

```javascript
<Script
  id="microsoft-clarity"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "TU_CLARITY_ID");
    `,
  }}
/>
```

---

## 🎨 PASO 5: Facebook Pixel (Opcional - Para Publicidad)

```javascript
// components/FacebookPixel.js
'use client';

import Script from 'next/script';

export default function FacebookPixel({ pixelId }) {
  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

Después de configurar todo:

- [ ] Google Analytics 4 instalado y funcionando
- [ ] Google Tag Manager configurado (opcional)
- [ ] Google Search Console verificado
- [ ] Sitemap enviado a Search Console
- [ ] Microsoft Clarity funcionando
- [ ] Exit Intent Modal activado
- [ ] Formularios rastreando conversiones
- [ ] WhatsApp button rastreando clics
- [ ] Schema.org JSON-LD implementado

---

## 📊 MÉTRICAS A MONITOREAR

### Semana 1-4:
1. **Tráfico total** (objetivo: +20%)
2. **Fuentes de tráfico** (orgánico vs directo vs social)
3. **Bounce rate** (objetivo: <60%)
4. **Tiempo en sitio** (objetivo: >2min)
5. **Conversiones** (formularios + WhatsApp)

### Mes 2-3:
1. **Keywords ranking** en Google Search Console
2. **CTR en resultados de búsqueda**
3. **Páginas más visitadas**
4. **Embudos de conversión**
5. **ROI de campañas** (si aplica)

---

## 🚀 PRÓXIMOS PASOS

1. Configurar **robots.txt** personalizado
2. Crear **sitemap dinámico** con blog posts
3. Implementar **breadcrumbs** visuales
4. Agregar **FAQs con Schema.org**
5. Optimizar **imágenes** con WebP
6. Implementar **lazy loading** agresivo

---

## 📞 SOPORTE

Si necesitas ayuda con la configuración:
- 📧 Email: soporte@rivamez.com
- 💬 WhatsApp: +51 995 060 806

---

**¡Todo listo para medir y optimizar tu sitio! 🎉**
