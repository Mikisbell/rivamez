# 🎨 SANITY CMS - GUÍA DE CONFIGURACIÓN

## 📋 **¿QUÉ ES ESTO?**

Sanity es un CMS (Content Management System) que permite a tu equipo **publicar artículos en el blog sin tocar código**. 

Tendrás un panel admin visual donde cualquier persona puede:
- ✅ Crear nuevos artículos
- ✅ Subir imágenes
- ✅ Editar contenido
- ✅ Organizar por categorías
- ✅ Marcar artículos destacados

---

## 🚀 **INSTALACIÓN RÁPIDA (5 PASOS)**

### **Paso 1: Crear cuenta en Sanity**
```bash
1. Ve a https://www.sanity.io/
2. Crea cuenta gratuita (usa tu email de GitHub)
3. Crea un nuevo proyecto:
   - Nombre: "RIVAMEZ Blog"
   - Dataset: "production"
4. Copia el PROJECT ID (aparecerá en la pantalla)
```

### **Paso 2: Instalar Sanity CLI**
```bash
npm install -g @sanity/cli
```

### **Paso 3: Inicializar Sanity en el proyecto**
```bash
cd /home/mateo/RIVAMEZ/rivamez
sanity init --project-id=TU_PROJECT_ID --dataset=production
```

Cuando pregunte:
- "Would you like to add configuration files?" → **YES**
- "Select project template" → **Clean project with no predefined schemas**

### **Paso 4: Configurar variables de entorno**
```bash
# Crea archivo .env.local en la raíz del proyecto
cp .env.local.example .env.local

# Edita .env.local y agrega:
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-aqui
NEXT_PUBLIC_SANITY_DATASET=production
```

### **Paso 5: Iniciar Sanity Studio**
```bash
# En una terminal separada:
cd sanity
npm install
npm run dev

# Se abrirá en http://localhost:3333
```

---

## 🎯 **CÓMO USAR EL PANEL ADMIN**

### **Acceder al Studio:**
```
http://localhost:3333
```

O después de deploy:
```
https://tu-proyecto.sanity.studio
```

### **Crear tu primer artículo:**

1. **Crear Autor:**
   - Ve a "Autor" en el menú
   - Click "Create"
   - Llena: Nombre, Cargo, Bio
   - Click "Publish"

2. **Crear Categoría:**
   - Ve a "Categoría"
   - Click "Create"
   - Llena: Título (ej: "Noticias"), Slug, Icon (emoji), Color
   - Click "Publish"

3. **Crear Blog Post:**
   - Ve a "Blog Post"
   - Click "Create"
   - Llena todos los campos:
     * **Título**: Título del artículo
     * **Slug**: Se genera automático del título
     * **Autor**: Selecciona el autor creado
     * **Imagen Principal**: Sube una imagen
     * **Categorías**: Selecciona categorías
     * **Fecha de Publicación**: Hoy
     * **Extracto**: Resumen corto (máx 200 caracteres)
     * **Contenido**: Artículo completo (editor visual)
     * **Tiempo de Lectura**: Ej: 5 (minutos)
     * **¿Destacado?**: Activa si quieres que aparezca grande
     * **Tags**: Palabras clave separadas
   - Click "Publish"

---

## 📂 **ESTRUCTURA DEL PROYECTO**

```
rivamez/
├── sanity/
│   ├── config.js          # Configuración de Sanity
│   └── schemas/
│       ├── index.js       # Exporta todos los schemas
│       ├── post.js        # Schema del blog post
│       ├── author.js      # Schema del autor
│       ├── category.js    # Schema de categoría
│       └── blockContent.js # Schema del editor de texto
├── lib/
│   └── sanity.js          # Cliente y queries
├── components/
│   └── BlogList.js        # Componente del blog
└── app/
    └── blog/
        └── page.js        # Página del blog
```

---

## 🎨 **SCHEMAS DISPONIBLES**

### **Blog Post:**
- Título (requerido)
- Slug (auto-generado)
- Autor (referencia)
- Imagen principal
- Categorías (múltiples)
- Fecha de publicación
- Extracto (200 caracteres)
- Contenido (rich text)
- Tiempo de lectura
- ¿Destacado? (boolean)
- Tags (array)

### **Autor:**
- Nombre
- Slug
- Imagen
- Biografía
- Cargo

### **Categoría:**
- Título
- Slug
- Descripción
- Color (cyan, navy, green, orange, purple)
- Icono (emoji)

---

## 🔥 **DEPLOY DEL STUDIO**

Cuando quieras que tu equipo acceda desde internet:

```bash
cd sanity
sanity deploy

# Te dará una URL tipo:
# https://rivamez.sanity.studio
```

Comparte esta URL con tu equipo.

---

## 👥 **AGREGAR USUARIOS**

1. Ve a https://www.sanity.io/manage
2. Selecciona tu proyecto "RIVAMEZ Blog"
3. Ve a "Team"
4. Click "Invite member"
5. Ingresa el email
6. Selecciona rol:
   - **Administrator**: Puede todo
   - **Editor**: Puede crear/editar contenido
   - **Viewer**: Solo puede ver

---

## 💰 **PLAN GRATUITO**

Sanity FREE incluye:
- ✅ 3 usuarios administradores
- ✅ 10,000 documentos
- ✅ Hasta 10GB de assets
- ✅ Ilimitados API requests
- ✅ CDN global

**Suficiente para un blog corporativo** 🎉

---

## 🐛 **TROUBLESHOOTING**

### **Error: "Project not found"**
```bash
# Verifica que el PROJECT_ID esté correcto en .env.local
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
```

### **No aparecen los artículos**
```bash
# 1. Verifica que los artículos estén publicados en Sanity Studio
# 2. Revisa la consola del navegador (F12)
# 3. Verifica que las queries en lib/sanity.js sean correctas
```

### **Fallback a datos estáticos**
```
Si Sanity no está configurado, el blog usará datos de ejemplo.
Esto es normal hasta que configures Sanity.
```

---

## 📝 **DATOS DE EJEMPLO**

Por defecto, el blog incluye 4 artículos de ejemplo:
1. Torres Residenciales Premium en El Tambo
2. Certificación ISO 45001:2018
3. 5 Tendencias en Construcción Sostenible
4. Tecnología BIM en nuestros proyectos

Estos se usan **solo si Sanity no está configurado**.

---

## 🎯 **PRÓXIMOS PASOS**

1. ✅ Configura Sanity (pasos arriba)
2. ✅ Crea 3-5 categorías
3. ✅ Crea 2-3 autores
4. ✅ Publica 5-10 artículos
5. ✅ Invita a tu equipo de marketing
6. ✅ Deploy del Studio
7. ✅ ¡Empieza a publicar!

---

## 📞 **SOPORTE**

- Documentación Sanity: https://www.sanity.io/docs
- Discord Sanity: https://slack.sanity.io/
- Video tutoriales: https://www.sanity.io/guides

---

**¿Preguntas?** Revisa la documentación o contacta al equipo de desarrollo.

