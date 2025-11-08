# 📱 GUÍA RESPONSIVE - RIVAMEZ

## Sistema Responsive Implementado

Toda la web ahora usa un sistema de utility classes responsive optimizado para:
- 📱 Mobile (< 640px)
- 📱 Mobile grande (640-767px)  
- 📱 Tablet (768-1023px) ← OPTIMIZADO
- 💻 Desktop (1024-1279px)
- 🖥️ Desktop XL (1280px+)

---

## 🎯 UTILITY CLASSES DISPONIBLES

### **1. CONTENEDORES**

```jsx
// Padding de secciones responsive
<section className="section-padding">
  Mobile:   py-8 px-3
  Tablet:   py-12 px-4
  Desktop:  py-16 px-6
  XL:       py-20 px-8
</section>

// Container responsive
<div className="container-responsive">
  Mobile:   px-3
  Tablet:   px-4
  Desktop:  px-6
  XL:       px-8
</div>
```

---

### **2. TÍTULOS (HEADINGS)**

```jsx
// Hero (más grande)
<h1 className="heading-hero">
  Mobile:   24px (text-2xl)
  Tablet:   24px (text-3xl)
  Desktop:  48px (text-5xl)
  XL:       60px (text-6xl)
</h1>

// Extra Large
<h1 className="heading-xl">
  Mobile:   20px (text-xl)
  Tablet:   24px (text-2xl)
  Desktop:  36px (text-4xl)
  XL:       48px (text-5xl)
</h1>

// Large
<h2 className="heading-lg">
  Mobile:   18px (text-lg)
  Tablet:   20px (text-xl)
  Desktop:  30px (text-3xl)
  XL:       36px (text-4xl)
</h2>

// Medium
<h3 className="heading-md">
  Mobile:   16px (text-base)
  Tablet:   18px (text-lg)
  Desktop:  24px (text-2xl)
  XL:       30px (text-3xl)
</h3>

// Small
<h4 className="heading-sm">
  Mobile:   14px (text-sm)
  Tablet:   16px (text-base)
  Desktop:  20px (text-xl)
  XL:       24px (text-2xl)
</h4>
```

---

### **3. TEXTO**

```jsx
// Texto body normal
<p className="text-body">
  Mobile:   12px (text-xs)
  Tablet:   14px (text-sm)
  Desktop:  16px (text-base)
  XL:       18px (text-lg)
</p>

// Texto pequeño
<p className="text-small">
  Mobile:   10px
  Tablet:   12px (text-xs)
  Desktop:  14px (text-sm)
  XL:       16px (text-base)
</p>
```

---

### **4. BOTONES**

```jsx
// Botón primario
<button className="btn-primary bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white">
  Mobile:   px-3 py-2 text-xs
  Tablet:   px-4 py-2.5 text-sm
  Desktop:  px-6 py-3 text-base
  XL:       px-8 py-4 text-lg
</button>

// Botón secundario (más pequeño)
<button className="btn-secondary border-2 border-rivamez-navy text-rivamez-navy">
  Mobile:   px-2.5 py-1.5 text-xs
  Tablet:   px-3 py-2 text-sm
  Desktop:  px-5 py-2.5 text-base
  XL:       px-6 py-3 text-base
</button>

// Botón táctil (touch-friendly)
<button className="btn-touch">
  Mínimo: 44x44px (accesibilidad)
</button>
```

---

### **5. GRIDS**

```jsx
// Grid responsive (1-2-3-4 columnas)
<div className="grid-responsive">
  Mobile:   1 columna
  SM:       2 columnas
  Tablet:   2 columnas
  Desktop:  3 columnas
  XL:       4 columnas
</div>

// Grid 2 columnas
<div className="grid-2-cols">
  Mobile:   1 columna
  Tablet+:  2 columnas
</div>

// Grid 3 columnas
<div className="grid-3-cols">
  Mobile:   1 columna
  SM:       2 columnas
  Desktop:  3 columnas
</div>
```

---

### **6. SPACING**

```jsx
// Margen vertical responsive
<div className="space-y-responsive">
  Mobile:   12px (space-y-3)
  Tablet:   16px (space-y-4)
  Desktop:  24px (space-y-6)
  XL:       32px (space-y-8)
</div>

// Margen horizontal responsive
<div className="space-x-responsive">
  Mobile:   8px (space-x-2)
  Tablet:   12px (space-x-3)
  Desktop:  16px (space-x-4)
  XL:       24px (space-x-6)
</div>

// Margen top responsive
<div className="mt-responsive">
  Mobile:   16px (mt-4)
  Tablet:   24px (mt-6)
  Desktop:  32px (mt-8)
  XL:       48px (mt-12)
</div>

// Margen bottom responsive
<div className="mb-responsive">
  Mobile:   16px (mb-4)
  Tablet:   24px (mb-6)
  Desktop:  32px (mb-8)
  XL:       48px (mb-12)
</div>

// Margen vertical responsive
<div className="my-responsive">
  Mobile:   16px (my-4)
  Tablet:   24px (my-6)
  Desktop:  32px (my-8)
  XL:       48px (my-12)
</div>
```

---

### **7. CARDS**

```jsx
// Card responsive
<div className="card-responsive bg-white shadow-lg">
  Mobile:   p-3
  Tablet:   p-4
  Desktop:  p-6
  XL:       p-8
</div>
```

---

### **8. IMÁGENES**

```jsx
// Imagen responsive
<img src="..." className="img-responsive" />
  // width: 100%
  // height: auto
  // rounded-lg

// Video responsive (16:9)
<div className="aspect-video-responsive">
  <video src="..." />
</div>

// Imagen cuadrada responsive (1:1)
<div className="aspect-square-responsive">
  <img src="..." />
</div>
```

---

## 📋 EJEMPLOS PRÁCTICOS

### **Ejemplo 1: Sección Hero**

```jsx
<section className="section-padding bg-gradient-to-br from-rivamez-navy to-rivamez-cyan">
  <div className="container-responsive">
    <h1 className="heading-hero text-white mb-responsive">
      Construyendo el Futuro de Huancayo
    </h1>
    <p className="text-body text-white/90 mb-responsive">
      Más de 15 años de experiencia en construcción
    </p>
    <button className="btn-primary bg-white text-rivamez-navy hover:shadow-xl">
      Solicitar Cotización
    </button>
  </div>
</section>
```

### **Ejemplo 2: Grid de Servicios**

```jsx
<section className="section-padding bg-gray-50">
  <div className="container-responsive">
    <h2 className="heading-xl text-center mb-responsive">
      Nuestros Servicios
    </h2>
    
    <div className="grid-3-cols">
      {servicios.map(servicio => (
        <div key={servicio.id} className="card-responsive bg-white hover:shadow-xl">
          <img src={servicio.imagen} className="img-responsive mb-responsive" />
          <h3 className="heading-md mb-responsive">
            {servicio.titulo}
          </h3>
          <p className="text-body text-gray-600">
            {servicio.descripcion}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### **Ejemplo 3: Call to Action**

```jsx
<section className="section-padding bg-rivamez-navy">
  <div className="container-responsive text-center">
    <h2 className="heading-xl text-white mb-responsive">
      ¿Listo para tu proyecto?
    </h2>
    <p className="text-body text-white/90 mb-responsive">
      Contáctanos hoy y recibe una cotización gratuita
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="btn-primary bg-white text-rivamez-navy">
        Contactar Ahora
      </button>
      <button className="btn-secondary border-white text-white hover:bg-white hover:text-rivamez-navy">
        Ver Proyectos
      </button>
    </div>
  </div>
</section>
```

---

## 🎯 BREAKPOINTS EXACTOS

```css
Mobile:        < 640px
Mobile Grande: 640px - 767px  (sm:)
Tablet:        768px - 1023px (md:)
Desktop:       1024px - 1279px (lg:)
Desktop XL:    1280px+         (xl:)
```

---

## ✅ CHECKLIST DE CONVERSIÓN

Para adaptar componentes existentes:

- [ ] Reemplazar tamaños fijos con utility classes responsive
- [ ] Usar `.section-padding` para secciones
- [ ] Usar `.container-responsive` para contenedores
- [ ] Usar `.heading-*` para títulos
- [ ] Usar `.text-body` para textos
- [ ] Usar `.btn-primary` o `.btn-secondary` para botones
- [ ] Usar `.grid-responsive` o `.grid-*-cols` para grids
- [ ] Usar `.card-responsive` para cards
- [ ] Usar `.img-responsive` para imágenes
- [ ] Probar en todos los breakpoints

---

## 🚀 CÓMO PROBAR

### **En DevTools:**

1. F12 → Abrir DevTools
2. Click icono dispositivos 📱
3. Probar en cada breakpoint:
   - iPhone SE (375px) - Mobile
   - iPhone 12 Pro (390px) - Mobile
   - iPad (768px) - Tablet ← IMPORTANTE
   - iPad Pro (1024px) - Desktop
   - Desktop (1280px+) - XL

### **Verificar:**

- ✅ Texto legible en todos los tamaños
- ✅ Botones fáciles de tocar (44px mín)
- ✅ Imágenes no se cortan
- ✅ Grid se adapta correctamente
- ✅ Spacing proporcional
- ✅ Sin scroll horizontal

---

## 💡 TIPS

1. **Siempre empezar Mobile First**
   - Diseñar primero para mobile
   - Agregar complejidad en pantallas grandes

2. **Usar utility classes en lugar de CSS custom**
   - Más fácil de mantener
   - Consistencia garantizada
   - Menos bugs

3. **Probar en tablet (768px) frecuentemente**
   - Es el tamaño más problemático
   - Muchos sitios fallan aquí

4. **No usar tamaños fijos**
   ```jsx
   // ❌ MAL
   <h1 className="text-4xl">Título</h1>
   
   // ✅ BIEN
   <h1 className="heading-lg">Título</h1>
   ```

5. **Combinar classes cuando sea necesario**
   ```jsx
   <div className="section-padding bg-gray-50">
     <div className="container-responsive space-y-responsive">
       <h2 className="heading-xl text-center">Título</h2>
       <div className="grid-3-cols">
         {/* contenido */}
       </div>
     </div>
   </div>
   ```

---

## 🎨 GUÍA VISUAL

```
📱 MOBILE (375px)
┌─────────────┐
│   Título    │  ← heading-lg
│             │
│  Texto      │  ← text-body
│  contenido  │
│             │
│ [  Botón  ] │  ← btn-primary
│             │
│   Grid 1    │  ← grid-responsive
│   columna   │     (1 col)
└─────────────┘

📱 TABLET (768px)
┌───────────────────────────┐
│      Título Mediano       │  ← heading-lg
│                           │
│   Texto más cómodo        │  ← text-body
│   de leer                 │
│                           │
│   [    Botón    ]         │  ← btn-primary
│                           │
│   ┌─────┐  ┌─────┐       │  ← grid-responsive
│   │Grid │  │Grid │       │     (2 cols)
│   └─────┘  └─────┘       │
└───────────────────────────┘

💻 DESKTOP (1280px)
┌─────────────────────────────────────────────┐
│            Título Grande                     │  ← heading-lg
│                                              │
│    Texto espaciado cómodamente              │  ← text-body
│    con más espacio                          │
│                                              │
│      [      Botón Grande      ]             │  ← btn-primary
│                                              │
│    ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐     │  ← grid-responsive
│    │Grid │  │Grid │  │Grid │  │Grid │     │     (4 cols)
│    └─────┘  └─────┘  └─────┘  └─────┘     │
└─────────────────────────────────────────────┘
```

---

## 🎯 PRIORIDADES

### **Alta Prioridad (hacer primero):**
1. Navbar ✅ (ya hecho)
2. Hero sections
3. CTAs principales
4. Footer

### **Media Prioridad:**
5. Grids de servicios/proyectos
6. Cards de testimonios
7. Formularios de contacto

### **Baja Prioridad:**
8. Blog posts
9. Secciones secundarias
10. Modals y overlays

---

**¿Necesitas ayuda aplicando estas classes a algún componente específico?**
