# 🏗️ RIVAMEZ - Sitio Web Corporativo

> Constructora e Inmobiliaria líder con más de 15 años de experiencia en Huancayo, Perú

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-pink)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://rivamez.vercel.app)

## 🌟 Características Principales

### ✨ Experiencia de Usuario Moderna
- ✅ **SPA (Single Page Application)** con navegación fluida sin recargas
- ✅ **Dark Mode** con persistencia en localStorage y detección de preferencia del sistema
- ✅ **PWA Completo** - Instalable como app nativa con soporte offline
- ✅ **Mega Menús** informativos con hover states y transiciones suaves
- ✅ **Búsqueda Global** con atajo de teclado (Cmd+K / Ctrl+K)
- ✅ **Animaciones Suaves** con Framer Motion y ScrollReveal
- ✅ **Page Transitions** con loading bar y efectos de entrada/salida
- ✅ **Loading Skeletons** con efecto shimmer para mejor UX
- ✅ **Responsive Design** optimizado para mobile, tablet y desktop

### 🎯 Arquitectura de Información Profesional

```
🏢 EMPRESA
   ├─ Nosotros (Historia y visión)
   ├─ Liderazgo (Equipo directivo)
   ├─ Valores & Cultura
   ├─ Certificaciones (ISO)
   ├─ Premios y Reconocimientos
   ├─ Logros Destacados
   └─ Responsabilidad Social

🎯 CAPACIDADES
   ├─ Disciplinas Core
   │  ├─ Arquitectura
   │  ├─ Ingeniería
   │  ├─ Construcción
   │  └─ Gestión de Proyectos
   │
   └─ Tecnología Avanzada
      ├─ BIM & Gemelos Digitales
      ├─ IA & Diseño Generativo
      ├─ Construcción Modular DfMA
      └─ AR/VR & Drones

📐 SERVICIOS
   ├─ Por Sector (Residencial, Comercial, Industrial, Institucional)
   └─ Adicionales (Remodelación, Mantenimiento, Valuaciones)

🏆 PROYECTOS
   ├─ Destacados
   ├─ En Construcción
   └─ Completados (285+)

📰 BLOG & 📞 CONTACTO
```

### 🚀 Tecnologías Innovadoras (USA + Europa)

#### 1. **BIM & Gemelos Digitales** 🏗️
- Building Information Modeling 4D/5D
- Digital Twins con sensores IoT
- Clash Detection automática
- **Software:** Revit, ArchiCAD, Navisworks, Bentley
- **Beneficio:** Reduce errores hasta 40%

#### 2. **IA & Diseño Generativo** 🤖
- Inteligencia Artificial para optimización de diseños
- Machine Learning para predicción de riesgos
- **Plataformas:** Autodesk Generative Design, Spacemaker
- **Beneficio:** 20% reducción en costos de materiales

#### 3. **Construcción Modular & DfMA** 🏢
- Prefabricación industrializada
- Design for Manufacturing and Assembly
- Cross-Laminated Timber (CLT)
- **Beneficio:** 60% más rápido, 90% menos residuos

#### 4. **AR/VR & Drones** 🥽
- VR Walkthroughs pre-construcción
- AR para visualización en obra
- Drones para mapeo 3D y fotogrametría
- **Beneficio:** Inspecciones 10x más rápidas

#### 5. **Sostenibilidad LEED** 🌱
- Certificación LEED Platinum
- PassivHaus (estándar europeo)
- Net Zero Buildings
- **Beneficio:** 90% menos consumo energético

#### 6. **Lean Construction & IPD** 💼
- Metodología Lean Construction Institute
- Integrated Project Delivery
- **Beneficio:** 25% reducción en desperdicios

## 🛠️ Stack Tecnológico

### Frontend
- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons, Lucide React

### Backend & Data
- **CMS:** Sanity (con fallback simulado)
- **Routing:** Next.js App Router con ISR
- **Forms:** React Hook Form + Optimistic UI

### Performance & SEO
- **SSG/ISR:** Pre-renderizado estático incremental
- **Image Optimization:** Next.js Image con lazy loading
- **Prefetching:** Links con prefetch predictivo
- **Service Worker:** Offline support y background sync
- **PWA:** Manifest + Meta tags completos

### Developer Experience
- **Type Safety:** PropTypes validation
- **Code Quality:** ESLint
- **Version Control:** Git + GitHub
- **Deployment:** Vercel con CI/CD automático

## 📁 Estructura del Proyecto

```
rivamez/
├── app/
│   ├── layout.js              # Root layout con Theme, Navbar, Footer
│   ├── page.js                # Homepage
│   ├── loading.js             # Global loading skeleton
│   ├── blog/
│   │   ├── page.js            # Blog listing
│   │   ├── loading.js         # Blog skeleton
│   │   └── [slug]/page.js     # Blog post dinámico
│   ├── nosotros/page.js       # Empresa (con #liderazgo, #valores, etc.)
│   ├── servicios/page.js      # Capacidades + Servicios
│   ├── proyectos/page.js      # Portfolio de proyectos
│   ├── contacto/page.js       # Formulario de contacto
│   └── globals.css            # Estilos globales + dark mode
│
├── components/
│   ├── NavbarNew.js           # Navegación con mega menús
│   ├── Footer.js              # Footer persistente
│   ├── WhatsAppButton.js      # Botón flotante de WhatsApp
│   ├── PageTransition.js      # Transiciones entre páginas
│   ├── ScrollReveal.js        # Animaciones en scroll
│   ├── GlobalSearch.js        # Búsqueda global (Cmd+K)
│   ├── ThemeProvider.js       # Context de dark mode
│   ├── ThemeToggle.js         # Botón de cambio de tema
│   ├── ClientOnly.js          # Wrapper para componentes client-side
│   ├── OptimisticForm.js      # Formularios con UI optimista
│   ├── OptimizedImage.js      # Imágenes con lazy loading
│   ├── ServiceWorkerRegister.js # Registro de SW
│   └── [50+ componentes más]
│
├── public/
│   ├── sw.js                  # Service Worker
│   ├── manifest.json          # PWA manifest
│   ├── offline.html           # Página offline
│   └── images/                # Assets estáticos
│
└── sanity/                    # Configuración de Sanity CMS
```

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18+
- npm o yarn
- Git

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Mikisbell/rivamez.git

# Navegar al directorio
cd rivamez/rivamez

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev          # Desarrollo con hot-reload
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
```

## 🌐 Deployment

### Vercel (Recomendado)

El sitio está configurado para deployment automático en Vercel:

1. Push a `main` branch
2. Vercel detecta cambios automáticamente
3. Build y deploy en ~2 minutos
4. Live en: `https://rivamez.vercel.app`

### Variables de Entorno

```env
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

## 📱 Progressive Web App (PWA)

El sitio es una PWA completa con:

- ✅ **Manifest.json** con iconos y configuración
- ✅ **Service Worker** para cache y offline
- ✅ **Instalable** en iOS, Android y Desktop
- ✅ **Offline-first** con fallback page
- ✅ **Background Sync** para formularios

### Instalar como App

**Mobile:**
1. Safari/Chrome → Compartir → "Agregar a pantalla de inicio"

**Desktop:**
1. Chrome → Icono de instalación en barra de URL
2. O menú → "Instalar RIVAMEZ..."

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'rivamez-navy': '#1e3a8a',    // Azul marino corporativo
  'rivamez-cyan': '#06b6d4',    // Cyan vibrante
  'rivamez-dark': '#0f172a',    // Oscuro profundo
}
```

### Dark Mode

El dark mode se maneja con Tailwind + Context:

```javascript
// Uso en componentes
<div className="bg-white dark:bg-gray-900">
  <h1 className="text-gray-900 dark:text-white">
    Título
  </h1>
</div>
```

## 📊 Performance

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s ✅
- **FID (First Input Delay):** < 100ms ✅
- **CLS (Cumulative Layout Shift):** < 0.1 ✅

### Optimizaciones Implementadas

1. **Image Optimization** - Next.js Image con lazy loading
2. **Code Splitting** - Chunks automáticos por ruta
3. **Prefetching** - Links prefetch on hover
4. **Static Generation** - ISR para páginas dinámicas
5. **Service Worker** - Cache strategy network-first
6. **Font Optimization** - Inter font con preload

## 🐛 Troubleshooting

### Error: "Application error: a client-side exception"

**Solución:** Hydration mismatch. Solo envolver componentes client-side específicos con `ClientOnly`:

```javascript
<ClientOnly>
  <ThemeToggle />
</ClientOnly>
```

### Build falla con "useTheme must be used within ThemeProvider"

**Solución:** Asegurar que `ThemeProvider` envuelve todos los componentes que usan `useTheme`.

### Dark mode no persiste

**Solución:** Verificar que `localStorage` esté disponible y `ThemeProvider` está montado correctamente.

## 📚 Documentación Adicional

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Sanity Docs](https://www.sanity.io/docs)

## 🤝 Contribuir

Este es un proyecto privado para RIVAMEZ. Para contribuir:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Convenciones de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: Nueva funcionalidad
fix: Corrección de bug
docs: Documentación
style: Formato, estilos
refactor: Refactorización de código
perf: Mejoras de performance
test: Tests
chore: Mantenimiento
```

## 🔐 Seguridad

- ✅ No hay credenciales hardcoded
- ✅ Variables de entorno para secrets
- ✅ HTTPS en producción (Vercel)
- ✅ CSP headers configurados
- ✅ Sanitización de inputs en formularios

## 📞 Contacto

**RIVAMEZ - Constructora & Inmobiliaria**
- 📧 Email: info@rivamez.com
- 📱 WhatsApp: +51 943 818 788
- 🌐 Web: [rivamez.vercel.app](https://rivamez.vercel.app)
- 📍 Ubicación: Huancayo, Junín, Perú

## 📄 Licencia

© 2024 RIVAMEZ. Todos los derechos reservados.

---

**Desarrollado con ❤️ usando Next.js 14 + Tailwind CSS**

*Última actualización: Noviembre 2024*
