# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> 🧭 Navbar Responsive Behavior >> Mobile hamburger menu opens and closes
- Location: tests\responsive.spec.ts:182:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[class*="fixed"][class*="right-0"]')
Expected: visible
Error: strict mode violation: locator('[class*="fixed"][class*="right-0"]') resolved to 2 elements:
    1) <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm">…</nav> aka getByRole('navigation').filter({ hasText: 'GRUPO RIVAMEZConstructora &' })
    2) <div class="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto">…</div> aka locator('div').filter({ hasText: 'Menú🏢 Empresa→ Arquitectura' }).first()

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[class*="fixed"][class*="right-0"]')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - alert [ref=e2]
  - navigation [ref=e3]:
    - generic [ref=e6]:
      - link "GRUPO RIVAMEZ GRUPO RIVAMEZ Constructora & Inmobiliaria" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "GRUPO RIVAMEZ" [ref=e8]
        - generic [ref=e9]:
          - generic [ref=e10]: GRUPO RIVAMEZ
          - generic [ref=e11]: Constructora & Inmobiliaria
      - button [active] [ref=e12] [cursor=pointer]:
        - img [ref=e13]
  - generic [ref=e17]:
    - generic [ref=e18]:
      - generic [ref=e19]: Menú
      - button [ref=e20] [cursor=pointer]:
        - img [ref=e21]
    - navigation [ref=e23]:
      - link "🏢 Empresa" [ref=e24] [cursor=pointer]:
        - /url: /nosotros
      - link "→ Arquitectura" [ref=e25] [cursor=pointer]:
        - /url: /servicios#arquitectura
      - link "→ Ingeniería" [ref=e26] [cursor=pointer]:
        - /url: /servicios#ingenieria
      - link "→ Construcción" [ref=e27] [cursor=pointer]:
        - /url: /servicios#construccion
      - link "📐 Servicios" [ref=e28] [cursor=pointer]:
        - /url: /servicios
      - link "🏆 Proyectos" [ref=e29] [cursor=pointer]:
        - /url: /proyectos
      - link "📰 Blog" [ref=e30] [cursor=pointer]:
        - /url: /blog
      - link "📞 Contacto" [ref=e31] [cursor=pointer]:
        - /url: /contacto
    - link "Solicitar Cotización por WhatsApp" [ref=e33] [cursor=pointer]:
      - /url: https://wa.me/51943818788?text=Hola,%20quiero%20solicitar%20una%20cotización%20para%20mi%20proyecto%20de%20construcción
      - img [ref=e34]
      - generic [ref=e36]: Solicitar Cotización por WhatsApp
  - button "Buscar" [ref=e37] [cursor=pointer]:
    - img [ref=e38]
  - button "Toggle dark mode" [ref=e40] [cursor=pointer]:
    - img [ref=e42]
  - main [ref=e45]:
    - generic [ref=e70]:
      - generic [ref=e71]:
        - generic [ref=e76]: CONSTRUYENDO EL FUTURO DE HUANCAYO
        - heading "Arquitectura que Transforma Vidas" [level=1] [ref=e77]:
          - generic [ref=e78]: Arquitectura que
          - generic [ref=e79]: Transforma Vidas
        - paragraph [ref=e80]: Desde la planificación hasta los acabados finales, construimos cada detalle con excelencia
      - generic [ref=e81]:
        - generic [ref=e83]:
          - generic [ref=e86]: Cimientos
          - generic [ref=e90]: Estructura
          - generic [ref=e94]: Acabados
        - generic [ref=e95]:
          - generic [ref=e100] [cursor=pointer]:
            - generic [ref=e101]:
              - generic [ref=e102]: 🏗️
              - generic [ref=e103]:
                - generic [ref=e104]: FUNDAMENTOS
                - heading "Base Sólida" [level=3] [ref=e105]
            - generic [ref=e106]: "1"
          - generic [ref=e113] [cursor=pointer]:
            - generic [ref=e114]:
              - generic [ref=e115]: ⚙️
              - generic [ref=e116]:
                - generic [ref=e117]: DESARROLLO
                - heading "Construcción + Tecnología" [level=3] [ref=e118]
            - generic [ref=e119]: "2"
          - generic [ref=e126] [cursor=pointer]:
            - generic [ref=e127]:
              - generic [ref=e128]: ✨
              - generic [ref=e129]:
                - generic [ref=e130]: EXPERIENCIA
                - heading "Acabados Premium" [level=3] [ref=e131]
            - generic [ref=e132]: "3"
        - generic [ref=e136]: 🏗️
        - generic [ref=e138]: 🎉
      - generic [ref=e139]:
        - generic [ref=e142]:
          - generic [ref=e143]: ✨
          - generic [ref=e144]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e145]
          - paragraph [ref=e146]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e148]
        - generic [ref=e152]:
          - generic [ref=e153]: ⚙️
          - generic [ref=e154]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e155]
          - paragraph [ref=e156]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e158]
        - generic [ref=e162]:
          - generic [ref=e163]: 🏗️
          - generic [ref=e164]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e165]
          - paragraph [ref=e166]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e168]
      - generic [ref=e171]:
        - link "Explora Nuestros Proyectos" [ref=e172] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e173]: Explora Nuestros Proyectos
          - img [ref=e174]
        - link "Solicitar Cotización" [ref=e176] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e178]:
        - generic [ref=e179]: Desliza para descubrir más
        - img [ref=e180]
    - generic [ref=e189]:
      - generic [ref=e190]:
        - generic [ref=e191]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e192]
        - paragraph [ref=e193]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e194]:
        - generic [ref=e196]:
          - img [ref=e199]
          - heading "Certificación ISO 9001" [level=3] [ref=e202]
          - paragraph [ref=e203]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e204]:
            - generic [ref=e205]: Conoce más
            - img [ref=e206]
        - generic [ref=e209]:
          - img [ref=e212]
          - heading "Entrega a Tiempo" [level=3] [ref=e215]
          - paragraph [ref=e216]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e217]:
            - generic [ref=e218]: Conoce más
            - img [ref=e219]
        - generic [ref=e222]:
          - img [ref=e225]
          - heading "Presupuesto Transparente" [level=3] [ref=e228]
          - paragraph [ref=e229]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e230]:
            - generic [ref=e231]: Conoce más
            - img [ref=e232]
        - generic [ref=e235]:
          - img [ref=e238]
          - heading "Tecnología Avanzada" [level=3] [ref=e241]
          - paragraph [ref=e242]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e243]:
            - generic [ref=e244]: Conoce más
            - img [ref=e245]
        - generic [ref=e248]:
          - img [ref=e251]
          - heading "Equipo Especializado" [level=3] [ref=e254]
          - paragraph [ref=e255]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e256]:
            - generic [ref=e257]: Conoce más
            - img [ref=e258]
        - generic [ref=e261]:
          - img [ref=e264]
          - heading "Sostenibilidad" [level=3] [ref=e267]
          - paragraph [ref=e268]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e269]:
            - generic [ref=e270]: Conoce más
            - img [ref=e271]
      - generic [ref=e273]:
        - paragraph [ref=e274]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e275] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e276]
    - generic [ref=e280]:
      - generic [ref=e281]:
        - generic [ref=e282]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e283]
      - generic [ref=e284]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e285] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e286] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e287] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e288] [cursor=pointer]
      - generic [ref=e290]:
        - generic [ref=e291]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e292]
          - paragraph [ref=e293]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e294]:
            - listitem [ref=e295]:
              - img [ref=e297]
              - generic [ref=e299]: Departamentos premium con acabados de lujo
            - listitem [ref=e300]:
              - img [ref=e302]
              - generic [ref=e304]: Casas personalizadas según tu visión
            - listitem [ref=e305]:
              - img [ref=e307]
              - generic [ref=e309]: Condominios cerrados con amenidades completas
            - listitem [ref=e310]:
              - img [ref=e312]
              - generic [ref=e314]: Certificaciones de eficiencia energética
          - generic [ref=e315]:
            - generic [ref=e316]:
              - generic [ref=e317]: "72"
              - generic [ref=e318]: Departamentos
            - generic [ref=e319]:
              - generic [ref=e320]: "15"
              - generic [ref=e321]: Pisos máximo
            - generic [ref=e322]:
              - generic [ref=e323]: 98%
              - generic [ref=e324]: Satisfacción
          - link "Solicitar Información" [ref=e325] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e326]
        - generic [ref=e328]:
          - img "Casas de lujo personalizadas" [ref=e330]
          - generic [ref=e332]: Casas de lujo personalizadas
          - generic [ref=e333]:
            - button [ref=e334] [cursor=pointer]
            - button [ref=e335] [cursor=pointer]
            - button [ref=e336] [cursor=pointer]
    - generic [ref=e342]:
      - generic [ref=e343]:
        - generic [ref=e344]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e345]:
          - text: Construyendo el Futuro con
          - generic [ref=e346]: Resultados Medibles
        - paragraph [ref=e347]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e348]:
        - generic [ref=e349]:
          - generic [ref=e351]:
            - img [ref=e353]
            - generic [ref=e356]:
              - generic [ref=e357]: S/.
              - generic [ref=e358]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e359]
            - paragraph [ref=e360]: Soles en proyectos completados desde 2009
          - img [ref=e362]
        - generic [ref=e364]:
          - generic [ref=e366]:
            - img [ref=e368]
            - generic [ref=e371]:
              - generic [ref=e372]: 45,000
              - generic [ref=e373]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e374]
            - paragraph [ref=e375]: Metros cuadrados promedio anual
          - img [ref=e377]
        - generic [ref=e379]:
          - generic [ref=e381]:
            - img [ref=e383]
            - generic [ref=e387]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e388]
            - paragraph [ref=e389]: Proyectos entregados a tiempo o antes
          - img [ref=e391]
        - generic [ref=e393]:
          - generic [ref=e395]:
            - img [ref=e397]
            - generic [ref=e400]:
              - generic [ref=e401]: "4.8"
              - generic [ref=e402]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e403]
            - paragraph [ref=e404]: Calificación promedio en reseñas
          - img [ref=e406]
      - generic [ref=e408]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e409]
        - generic [ref=e410]:
          - generic [ref=e411]:
            - generic [ref=e412]: 🌱
            - generic [ref=e413]: "15"
            - generic [ref=e414]: Proyectos Sostenibles
            - generic [ref=e415]: Con certificación ambiental
          - generic [ref=e416]:
            - generic [ref=e417]: 👷
            - generic [ref=e418]: 2,500+
            - generic [ref=e419]: Empleos Generados
            - generic [ref=e420]: Puestos de trabajo creados
          - generic [ref=e421]:
            - generic [ref=e422]: 💻
            - generic [ref=e423]: 100%
            - generic [ref=e424]: Procesos Digitalizados
            - generic [ref=e425]: Tecnología BIM implementada
          - generic [ref=e426]:
            - generic [ref=e427]: 🛠️
            - generic [ref=e428]: 24/7
            - generic [ref=e429]: Soporte Post-Venta
            - generic [ref=e430]: Atención continua a clientes
          - generic [ref=e431]:
            - generic [ref=e432]: 📍
            - generic [ref=e433]: "8"
            - generic [ref=e434]: Distritos de Huancayo
            - generic [ref=e435]: Presencia en la región
          - generic [ref=e436]:
            - generic [ref=e437]: 🏆
            - generic [ref=e438]: ISO
            - generic [ref=e439]: Certificaciones
            - generic [ref=e440]: Estándares internacionales
      - generic [ref=e441]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e442]
        - generic [ref=e443]:
          - generic [ref=e447]:
            - generic [ref=e448]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e449]
            - paragraph [ref=e450]: de Junín
            - img [ref=e452]
          - generic [ref=e457]:
            - generic [ref=e458]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e459]
            - paragraph [ref=e460]: en Construcción
            - img [ref=e462]
          - generic [ref=e467]:
            - generic [ref=e468]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e469]
            - paragraph [ref=e470]: Municipalidad
            - img [ref=e472]
      - generic [ref=e474]:
        - heading "Comparación con la Industria" [level=3] [ref=e475]
        - generic [ref=e476]:
          - generic [ref=e477]:
            - heading "Entrega Puntual" [level=4] [ref=e478]
            - generic [ref=e480]:
              - generic [ref=e481]: RIVAMEZ
              - generic [ref=e482]: 98%
            - generic [ref=e485]:
              - generic [ref=e486]: Promedio Industria
              - generic [ref=e487]: 75%
            - generic [ref=e490]:
              - generic [ref=e491]: 📈
              - generic [ref=e492]: +23% mejor que el promedio
          - generic [ref=e493]:
            - heading "Satisfacción Cliente" [level=4] [ref=e494]
            - generic [ref=e496]:
              - generic [ref=e497]: RIVAMEZ
              - generic [ref=e498]: 96%
            - generic [ref=e501]:
              - generic [ref=e502]: Promedio Industria
              - generic [ref=e503]: 82%
            - generic [ref=e506]:
              - generic [ref=e507]: 📈
              - generic [ref=e508]: +14% mejor que el promedio
          - generic [ref=e509]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e510]
            - generic [ref=e512]:
              - generic [ref=e513]: RIVAMEZ
              - generic [ref=e514]: 85%
            - generic [ref=e517]:
              - generic [ref=e518]: Promedio Industria
              - generic [ref=e519]: 45%
            - generic [ref=e522]:
              - generic [ref=e523]: 📈
              - generic [ref=e524]: +40% mejor que el promedio
          - generic [ref=e525]:
            - heading "Adopción BIM" [level=4] [ref=e526]
            - generic [ref=e528]:
              - generic [ref=e529]: RIVAMEZ
              - generic [ref=e530]: 100%
            - generic [ref=e533]:
              - generic [ref=e534]: Promedio Industria
              - generic [ref=e535]: 38%
            - generic [ref=e538]:
              - generic [ref=e539]: 📈
              - generic [ref=e540]: +62% mejor que el promedio
      - generic [ref=e541]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e542]
        - generic [ref=e544]:
          - generic [ref=e545] [cursor=pointer]:
            - generic [ref=e546]: 🏁
            - generic [ref=e547]: "3"
            - generic [ref=e548]: Proyectos
            - generic [ref=e549]: "2009"
          - generic [ref=e550] [cursor=pointer]:
            - generic [ref=e551]: 📈
            - generic [ref=e552]: "25"
            - generic [ref=e553]: Proyectos
            - generic [ref=e554]: "2012"
          - generic [ref=e555] [cursor=pointer]:
            - generic [ref=e556]: 🚀
            - generic [ref=e557]: "75"
            - generic [ref=e558]: Proyectos
            - generic [ref=e559]: "2015"
          - generic [ref=e560] [cursor=pointer]:
            - generic [ref=e561]: 💯
            - generic [ref=e562]: "150"
            - generic [ref=e563]: Proyectos
            - generic [ref=e564]: "2020"
          - generic [ref=e565] [cursor=pointer]:
            - generic [ref=e566]: 🏆
            - generic [ref=e567]: 285+
            - generic [ref=e568]: Proyectos
            - generic [ref=e569]: "2025"
      - generic [ref=e570]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e571]
        - generic [ref=e573]:
          - generic [ref=e574]:
            - generic [ref=e575] [cursor=pointer]:
              - generic [ref=e576]:
                - generic [ref=e577]: El Tambo
                - generic [ref=e578]: 92 proyectos
              - generic [ref=e581]: 100%
            - generic [ref=e582] [cursor=pointer]:
              - generic [ref=e583]:
                - generic [ref=e584]: Huancayo Centro
                - generic [ref=e585]: 85 proyectos
              - generic [ref=e588]: 92%
            - generic [ref=e589] [cursor=pointer]:
              - generic [ref=e590]:
                - generic [ref=e591]: Chilca
                - generic [ref=e592]: 48 proyectos
              - generic [ref=e595]: 52%
            - generic [ref=e596] [cursor=pointer]:
              - generic [ref=e597]:
                - generic [ref=e598]: Pilcomayo
                - generic [ref=e599]: 22 proyectos
              - generic [ref=e602]: 24%
            - generic [ref=e603] [cursor=pointer]:
              - generic [ref=e604]:
                - generic [ref=e605]: Huancán
                - generic [ref=e606]: 18 proyectos
              - generic [ref=e609]: 20%
            - generic [ref=e611] [cursor=pointer]:
              - generic [ref=e612]: San Agustín
              - generic [ref=e613]: 12 proyectos
            - generic [ref=e617] [cursor=pointer]:
              - generic [ref=e618]: Concepción
              - generic [ref=e619]: 8 proyectos
          - generic [ref=e622]:
            - generic [ref=e623]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e624]
              - generic [ref=e625]:
                - generic [ref=e628]: Alta densidad (80%+)
                - generic [ref=e631]: Media-alta (50-80%)
                - generic [ref=e634]: Media (20-50%)
                - generic [ref=e637]: Baja (<20%)
            - generic [ref=e638]:
              - generic [ref=e639]:
                - generic [ref=e640]: "7"
                - generic [ref=e641]: Distritos
              - generic [ref=e642]:
                - generic [ref=e643]: "285"
                - generic [ref=e644]: Proyectos
              - generic [ref=e645]:
                - generic [ref=e646]: "41"
                - generic [ref=e647]: Promedio/Distrito
              - generic [ref=e648]:
                - generic [ref=e649]: 🔥
                - generic [ref=e650]: El Tambo Líder
      - generic [ref=e652]:
        - link "Ver Nuestros Proyectos" [ref=e653] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e654] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e658]:
      - generic [ref=e659]:
        - generic [ref=e660]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e661]
        - paragraph [ref=e662]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e663]:
        - generic [ref=e664]:
          - img [ref=e666]
          - heading "Nuestra Misión" [level=3] [ref=e668]
          - paragraph [ref=e669]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e670]:
          - img [ref=e672]
          - heading "Nuestra Visión" [level=3] [ref=e675]
          - paragraph [ref=e676]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e677]:
        - heading "Nuestros Valores" [level=3] [ref=e678]
        - generic [ref=e679]:
          - generic [ref=e680]:
            - img [ref=e682]
            - heading "Compromiso" [level=4] [ref=e684]
            - paragraph [ref=e685]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e686]:
            - img [ref=e688]
            - heading "Innovación" [level=4] [ref=e690]
            - paragraph [ref=e691]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e692]:
            - img [ref=e694]
            - heading "Trabajo en Equipo" [level=4] [ref=e696]
            - paragraph [ref=e697]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e698]:
            - img [ref=e700]
            - heading "Excelencia" [level=4] [ref=e702]
            - paragraph [ref=e703]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e705] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e706]
    - generic [ref=e709]:
      - img [ref=e711]
      - generic [ref=e715]:
        - generic [ref=e716]:
          - generic [ref=e717]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e718]
          - paragraph [ref=e719]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e720]:
          - generic [ref=e721]:
            - generic [ref=e722]:
              - generic [ref=e723]: "0"
              - text: +
            - paragraph [ref=e724]: Años de Experiencia
          - generic [ref=e725]:
            - generic [ref=e726]:
              - generic [ref=e727]: "0"
              - text: +
            - paragraph [ref=e728]: Proyectos Completados
          - generic [ref=e729]:
            - generic [ref=e730]:
              - generic [ref=e731]: "0"
              - text: "%"
            - paragraph [ref=e732]: Satisfacción del Cliente
          - generic [ref=e733]:
            - generic [ref=e734]:
              - generic [ref=e735]: "0"
              - text: +
            - paragraph [ref=e736]: Profesionales Certificados
        - generic [ref=e737]:
          - generic [ref=e738]:
            - img [ref=e740]
            - heading "Construcción Residencial" [level=3] [ref=e742]
            - paragraph [ref=e743]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e744]:
              - listitem [ref=e745]:
                - img [ref=e746]
                - generic [ref=e748]: Casas unifamiliares personalizadas
              - listitem [ref=e749]:
                - img [ref=e750]
                - generic [ref=e752]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e753]:
                - img [ref=e754]
                - generic [ref=e756]: Condominios cerrados con amenidades
              - listitem [ref=e757]:
                - img [ref=e758]
                - generic [ref=e760]: Acabados de alta calidad y diseño moderno
          - generic [ref=e761]:
            - img [ref=e763]
            - heading "Proyectos Comerciales" [level=3] [ref=e765]
            - paragraph [ref=e766]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e767]:
              - listitem [ref=e768]:
                - img [ref=e769]
                - generic [ref=e771]: Centros comerciales y plazas
              - listitem [ref=e772]:
                - img [ref=e773]
                - generic [ref=e775]: Edificios de oficinas AAA
              - listitem [ref=e776]:
                - img [ref=e777]
                - generic [ref=e779]: Hoteles y establecimientos turísticos
              - listitem [ref=e780]:
                - img [ref=e781]
                - generic [ref=e783]: Locales comerciales especializados
          - generic [ref=e784]:
            - img [ref=e786]
            - heading "Proyectos Institucionales" [level=3] [ref=e788]
            - paragraph [ref=e789]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e790]:
              - listitem [ref=e791]:
                - img [ref=e792]
                - generic [ref=e794]: Hospitales y clínicas especializadas
              - listitem [ref=e795]:
                - img [ref=e796]
                - generic [ref=e798]: Centros educativos modernos
              - listitem [ref=e799]:
                - img [ref=e800]
                - generic [ref=e802]: Edificios gubernamentales
              - listitem [ref=e803]:
                - img [ref=e804]
                - generic [ref=e806]: Infraestructura pública de calidad
          - generic [ref=e807]:
            - img [ref=e809]
            - heading "Remodelación y Ampliación" [level=3] [ref=e811]
            - paragraph [ref=e812]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e813]:
              - listitem [ref=e814]:
                - img [ref=e815]
                - generic [ref=e817]: Remodelación integral de viviendas
              - listitem [ref=e818]:
                - img [ref=e819]
                - generic [ref=e821]: Ampliaciones verticales y horizontales
              - listitem [ref=e822]:
                - img [ref=e823]
                - generic [ref=e825]: Modernización de fachadas
              - listitem [ref=e826]:
                - img [ref=e827]
                - generic [ref=e829]: Reforzamiento estructural
          - generic [ref=e830]:
            - img [ref=e832]
            - heading "Consultoría y Gerencia" [level=3] [ref=e834]
            - paragraph [ref=e835]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e836]:
              - listitem [ref=e837]:
                - img [ref=e838]
                - generic [ref=e840]: Estudios de factibilidad
              - listitem [ref=e841]:
                - img [ref=e842]
                - generic [ref=e844]: Gerencia de proyectos
              - listitem [ref=e845]:
                - img [ref=e846]
                - generic [ref=e848]: Supervisión técnica
              - listitem [ref=e849]:
                - img [ref=e850]
                - generic [ref=e852]: Control de calidad y costos
          - generic [ref=e853]:
            - img [ref=e855]
            - heading "Diseño y Arquitectura" [level=3] [ref=e857]
            - paragraph [ref=e858]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e859]:
              - listitem [ref=e860]:
                - img [ref=e861]
                - generic [ref=e863]: Diseño arquitectónico personalizado
              - listitem [ref=e864]:
                - img [ref=e865]
                - generic [ref=e867]: Ingeniería estructural
              - listitem [ref=e868]:
                - img [ref=e869]
                - generic [ref=e871]: Renders y visualización 3D
              - listitem [ref=e872]:
                - img [ref=e873]
                - generic [ref=e875]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e877] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e878]
    - generic [ref=e884]:
      - generic [ref=e885]:
        - generic [ref=e886]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e887]
        - paragraph [ref=e888]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e889]:
        - generic [ref=e890]:
          - generic [ref=e891]:
            - generic [ref=e893]:
              - img [ref=e894]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e897] [cursor=pointer]
          - generic [ref=e899]:
            - heading "Torres del Valle" [level=3] [ref=e900]
            - generic [ref=e901]:
              - generic [ref=e902]:
                - img [ref=e903]
                - generic [ref=e906]: Av. Ferrocarril, Huancayo
              - generic [ref=e907]:
                - img [ref=e908]
                - generic [ref=e910]: 3,850 m²
              - generic [ref=e911]:
                - img [ref=e912]
                - generic [ref=e914]: Completado en 2024
        - generic [ref=e916]:
          - generic [ref=e917]:
            - generic [ref=e919]:
              - img [ref=e920]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e923] [cursor=pointer]
          - generic [ref=e925]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e926]
            - generic [ref=e927]:
              - generic [ref=e928]:
                - img [ref=e929]
                - generic [ref=e932]: El Tambo, Huancayo
              - generic [ref=e933]:
                - img [ref=e934]
                - generic [ref=e936]: 5,200 m²
              - generic [ref=e937]:
                - img [ref=e938]
                - generic [ref=e940]: Completado en 2023
        - generic [ref=e942]:
          - generic [ref=e943]:
            - generic [ref=e945]:
              - img [ref=e946]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e949] [cursor=pointer]
          - generic [ref=e951]:
            - heading "Condominio Los Portales" [level=3] [ref=e952]
            - generic [ref=e953]:
              - generic [ref=e954]:
                - img [ref=e955]
                - generic [ref=e958]: Chilca, Huancayo
              - generic [ref=e959]:
                - img [ref=e960]
                - generic [ref=e962]: 6,400 m²
              - generic [ref=e963]:
                - img [ref=e964]
                - generic [ref=e966]: Completado en 2024
        - generic [ref=e968]:
          - generic [ref=e969]:
            - generic [ref=e971]:
              - img [ref=e972]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e975] [cursor=pointer]
          - generic [ref=e977]:
            - heading "Hospital Clínica Central" [level=3] [ref=e978]
            - generic [ref=e979]:
              - generic [ref=e980]:
                - img [ref=e981]
                - generic [ref=e984]: Av. Real, Huancayo
              - generic [ref=e985]:
                - img [ref=e986]
                - generic [ref=e988]: 4,600 m²
              - generic [ref=e989]:
                - img [ref=e990]
                - generic [ref=e992]: Completado en 2023
        - generic [ref=e994]:
          - generic [ref=e995]:
            - generic [ref=e997]:
              - img [ref=e998]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e1001] [cursor=pointer]
          - generic [ref=e1003]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e1004]
            - generic [ref=e1005]:
              - generic [ref=e1006]:
                - img [ref=e1007]
                - generic [ref=e1010]: San Carlos, Huancayo
              - generic [ref=e1011]:
                - img [ref=e1012]
                - generic [ref=e1014]: 3,200 m²
              - generic [ref=e1015]:
                - img [ref=e1016]
                - generic [ref=e1018]: Completado en 2024
        - generic [ref=e1020]:
          - generic [ref=e1021]:
            - generic [ref=e1023]:
              - img [ref=e1024]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e1027] [cursor=pointer]
          - generic [ref=e1029]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e1030]
            - generic [ref=e1031]:
              - generic [ref=e1032]:
                - img [ref=e1033]
                - generic [ref=e1036]: Pilcomayo, Huancayo
              - generic [ref=e1037]:
                - img [ref=e1038]
                - generic [ref=e1040]: 7,800 m²
              - generic [ref=e1041]:
                - img [ref=e1042]
                - generic [ref=e1044]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e1047] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e1048]
    - generic [ref=e1053]:
      - generic [ref=e1054]:
        - generic [ref=e1055]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1056]
        - paragraph [ref=e1057]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1058]:
        - generic [ref=e1059]:
          - generic [ref=e1060]:
            - img [ref=e1061]
            - img [ref=e1063]
            - img [ref=e1065]
            - img [ref=e1067]
            - img [ref=e1069]
          - paragraph [ref=e1071]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1072]:
            - img "Carlos Mendoza Pérez" [ref=e1073]
            - generic [ref=e1074]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1075]
              - paragraph [ref=e1076]: Propietario - Torres del Valle
              - paragraph [ref=e1077]: Torres del Valle
        - generic [ref=e1078]:
          - generic [ref=e1079]:
            - img [ref=e1080]
            - img [ref=e1082]
            - img [ref=e1084]
            - img [ref=e1086]
            - img [ref=e1088]
          - paragraph [ref=e1090]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1091]:
            - img "María Elena Rojas" [ref=e1092]
            - generic [ref=e1093]:
              - heading "María Elena Rojas" [level=4] [ref=e1094]
              - paragraph [ref=e1095]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1096]: Plaza Comercial San Carlos
        - generic [ref=e1097]:
          - generic [ref=e1098]:
            - img [ref=e1099]
            - img [ref=e1101]
            - img [ref=e1103]
            - img [ref=e1105]
            - img [ref=e1107]
          - paragraph [ref=e1109]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1110]:
            - img "Roberto Villanueva Castro" [ref=e1111]
            - generic [ref=e1112]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1113]
              - paragraph [ref=e1114]: Director - Colegio Los Andes
              - paragraph [ref=e1115]: Centro Educativo Los Andes
        - generic [ref=e1116]:
          - generic [ref=e1117]:
            - img [ref=e1118]
            - img [ref=e1120]
            - img [ref=e1122]
            - img [ref=e1124]
            - img [ref=e1126]
          - paragraph [ref=e1128]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1129]:
            - img "Ana Lucía Torres" [ref=e1130]
            - generic [ref=e1131]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1132]
              - paragraph [ref=e1133]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1134]: Condominio Los Portales
        - generic [ref=e1135]:
          - generic [ref=e1136]:
            - img [ref=e1137]
            - img [ref=e1139]
            - img [ref=e1141]
            - img [ref=e1143]
            - img [ref=e1145]
          - paragraph [ref=e1147]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1148]:
            - img "Dr. Javier Campos Quispe" [ref=e1149]
            - generic [ref=e1150]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1151]
              - paragraph [ref=e1152]: Director Médico - Clínica Central
              - paragraph [ref=e1153]: Hospital Clínica Central
        - generic [ref=e1154]:
          - generic [ref=e1155]:
            - img [ref=e1156]
            - img [ref=e1158]
            - img [ref=e1160]
            - img [ref=e1162]
            - img [ref=e1164]
          - paragraph [ref=e1166]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1167]:
            - img "Patricia Robles Huamán" [ref=e1168]
            - generic [ref=e1169]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1170]
              - paragraph [ref=e1171]: CEO - Tech Solutions Peru
              - paragraph [ref=e1172]: Oficinas Corporativas Mantaro
      - generic [ref=e1173]:
        - generic [ref=e1174]:
          - generic [ref=e1175]: 98%
          - generic [ref=e1176]: Satisfacción
        - generic [ref=e1177]:
          - generic [ref=e1178]: 250+
          - generic [ref=e1179]: Clientes Felices
        - generic [ref=e1180]:
          - generic [ref=e1181]: 15+
          - generic [ref=e1182]: Años Experiencia
        - generic [ref=e1183]:
          - generic [ref=e1184]: "5.0"
          - generic [ref=e1185]: Calificación
    - generic [ref=e1191]:
      - generic [ref=e1192]:
        - generic [ref=e1193]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1194]
        - paragraph [ref=e1195]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1196]:
        - generic [ref=e1197]:
          - generic [ref=e1199]:
            - img [ref=e1201]
            - generic [ref=e1203]:
              - heading "Ubicación" [level=3] [ref=e1204]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1205] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1207]:
            - img [ref=e1209]
            - generic [ref=e1211]:
              - heading "Teléfono" [level=3] [ref=e1212]
              - link "+51 943 818 788" [ref=e1213] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1215]:
            - img [ref=e1217]
            - generic [ref=e1219]:
              - heading "Email" [level=3] [ref=e1220]
              - link "info@rivamez.com" [ref=e1221] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1223]:
            - img [ref=e1225]
            - generic [ref=e1227]:
              - heading "Horario" [level=3] [ref=e1228]
              - paragraph [ref=e1229]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1232]:
            - img [ref=e1233]
            - paragraph [ref=e1235]: Mapa de ubicación
        - generic [ref=e1237]:
          - generic [ref=e1238]:
            - generic [ref=e1239]:
              - generic [ref=e1240]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1241]
            - generic [ref=e1242]:
              - generic [ref=e1243]: Email *
              - textbox "juan@ejemplo.com" [ref=e1244]
          - generic [ref=e1245]:
            - generic [ref=e1246]:
              - generic [ref=e1247]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1248]
            - generic [ref=e1249]:
              - generic [ref=e1250]: Servicio de Interés *
              - combobox [ref=e1251]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1252]:
            - generic [ref=e1253]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1254]
          - button "Enviar Mensaje" [ref=e1255] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1256]
  - contentinfo [ref=e1258]:
    - generic [ref=e1259]:
      - generic [ref=e1260]:
        - generic [ref=e1261]:
          - generic [ref=e1262]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1263]
            - generic [ref=e1264]:
              - generic [ref=e1265]: GRUPO RIVAMEZ
              - generic [ref=e1266]: Constructora & Inmobiliaria
          - paragraph [ref=e1267]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1268]:
          - heading "Navegación" [level=3] [ref=e1269]
          - list [ref=e1270]:
            - listitem [ref=e1271]:
              - link "Inicio" [ref=e1272] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1273]:
              - link "Proyectos" [ref=e1274] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1275]:
              - link "Servicios" [ref=e1276] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1277]:
              - link "Nosotros" [ref=e1278] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1279]:
              - link "Contacto" [ref=e1280] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1281]:
          - heading "Contacto" [level=3] [ref=e1282]
          - list [ref=e1283]:
            - listitem [ref=e1284]:
              - img [ref=e1285]
              - generic [ref=e1288]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1289]:
              - img [ref=e1290]
              - link "+51 943 818 788" [ref=e1292] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1293]:
              - img [ref=e1294]
              - link "info@rivamez.com" [ref=e1296] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1297]:
          - heading "Síguenos" [level=3] [ref=e1298]
          - generic [ref=e1299]:
            - link [ref=e1300] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1301]
            - link [ref=e1303] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1304]
            - link [ref=e1306] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1307]
      - paragraph [ref=e1310]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos" [ref=e1311] [cursor=pointer]:
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic [ref=e1312]:
      - img [ref=e1315]
      - generic: ¿Necesitas ayuda? Escríbenos
```

# Test source

```ts
  105 |       await page.goto('/proyectos');
  106 |       await page.waitForLoadState('networkidle');
  107 |       await page.waitForTimeout(1000);
  108 | 
  109 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  110 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  111 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  112 | 
  113 |       // Check grid has correct columns based on viewport
  114 |       const grid = page.locator('[class*="grid"]').first();
  115 |       await expect(grid).toBeVisible();
  116 |     }
  117 |   });
  118 | 
  119 |   test('Services cards stack properly on mobile', async ({ page }) => {
  120 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  121 |       await page.setViewportSize(vp);
  122 |       await page.goto('/servicios');
  123 |       await page.waitForLoadState('networkidle');
  124 |       await page.waitForTimeout(1000);
  125 | 
  126 |       // No horizontal overflow
  127 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  128 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  129 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  130 |     }
  131 |   });
  132 | 
  133 |   test('Impact metrics cards are readable on all viewports', async ({ page }) => {
  134 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  135 |       await page.setViewportSize(vp);
  136 |       await page.goto('/');
  137 |       await page.waitForLoadState('networkidle');
  138 |       await page.waitForTimeout(500);
  139 | 
  140 |       // Scroll to metrics section
  141 |       await page.evaluate(() => {
  142 |         const el = document.querySelector('[class*="ImpactMetrics"], [class*="impact"]');
  143 |         if (el) el.scrollIntoView();
  144 |       });
  145 |       await page.waitForTimeout(500);
  146 | 
  147 |       // No overflow
  148 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  149 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  150 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  151 |     }
  152 |   });
  153 | });
  154 | 
  155 | // ============================================
  156 | // 3. NAVBAR RESPONSIVE BEHAVIOR TESTS
  157 | // ============================================
  158 | 
  159 | test.describe('🧭 Navbar Responsive Behavior', () => {
  160 |   test('Desktop navbar (≥768px) shows all links', async ({ page }) => {
  161 |     await page.setViewportSize({ width: 1280, height: 800 });
  162 |     await page.goto('/');
  163 |     await page.waitForLoadState('networkidle');
  164 | 
  165 |     // Check nav links are visible (not in hamburger)
  166 |     const navLinks = page.locator('nav a:not(.md\\:hidden), nav button:not(.md\\:hidden)');
  167 |     const count = await navLinks.count();
  168 |     expect(count).toBeGreaterThanOrEqual(5); // Empresa, Capacidades, Servicios, Proyectos, Blog, Contacto + CTA
  169 |   });
  170 | 
  171 |   test('Mobile navbar (<768px) shows hamburger menu', async ({ page }) => {
  172 |     await page.setViewportSize({ width: 375, height: 667 });
  173 |     await page.goto('/');
  174 |     await page.waitForLoadState('networkidle');
  175 | 
  176 |     // Desktop nav should be hidden
  177 |     const desktopNav = page.locator('.md\\:flex').filter({ has: page.locator('button') }).first();
  178 |     const isVisible = await desktopNav.isVisible().catch(() => false);
  179 |     expect(isVisible).toBe(false);
  180 |   });
  181 | 
  182 |   test('Mobile hamburger menu opens and closes', async ({ page }) => {
  183 |     await page.setViewportSize({ width: 375, height: 667 });
  184 |     await page.goto('/');
  185 |     await page.waitForLoadState('networkidle');
  186 |     await page.waitForTimeout(1000);
  187 | 
  188 |     // Find the mobile hamburger button
  189 |     const allButtons = await page.locator('button').all();
  190 | 
  191 |     let hamburgerFound = false;
  192 |     for (const btn of allButtons) {
  193 |       const classes = await btn.getAttribute('class');
  194 |       if (classes && classes.includes('md:hidden')) {
  195 |         await btn.click();
  196 |         hamburgerFound = true;
  197 |         break;
  198 |       }
  199 |     }
  200 |     expect(hamburgerFound).toBe(true);
  201 | 
  202 |     // Mobile menu sidebar should appear
  203 |     await page.waitForTimeout(500);
  204 |     const sidebar = page.locator('[class*="fixed"][class*="right-0"]');
> 205 |     await expect(sidebar).toBeVisible();
      |                           ^ Error: expect(locator).toBeVisible() failed
  206 | 
  207 |     // Links should be present in mobile menu
  208 |     const mobileLinks = sidebar.locator('a, nav a');
  209 |     const linkCount = await mobileLinks.count();
  210 |     expect(linkCount).toBeGreaterThanOrEqual(4);
  211 |   });
  212 | 
  213 |   test('Mega menu responsive on tablet', async ({ page }) => {
  214 |     await page.setViewportSize({ width: 768, height: 1024 });
  215 |     await page.goto('/');
  216 |     await page.waitForLoadState('networkidle');
  217 | 
  218 |     // Hover over a mega menu trigger
  219 |     const empresaBtn = page.locator('button', { hasText: 'Empresa' }).first();
  220 |     if (await empresaBtn.isVisible()) {
  221 |       await empresaBtn.hover();
  222 |       await page.waitForTimeout(300);
  223 | 
  224 |       // Check mega menu appears without overflow
  225 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  226 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  227 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  228 |     }
  229 |   });
  230 | });
  231 | 
  232 | // ============================================
  233 | // 4. IMAGE RESPONSIVENESS TESTS
  234 | // ============================================
  235 | 
  236 | test.describe('🖼️ Image Responsiveness Tests', () => {
  237 |   test('Hero images scale properly on all viewports', async ({ page }) => {
  238 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  239 |       await page.setViewportSize(vp);
  240 |       await page.goto('/');
  241 |       await page.waitForLoadState('networkidle');
  242 | 
  243 |       // Images should not exceed container width
  244 |       const images = page.locator('img');
  245 |       const count = await images.count();
  246 |       for (let i = 0; i < Math.min(count, 10); i++) {
  247 |         const img = images.nth(i);
  248 |         const isVisible = await img.isVisible();
  249 |         if (isVisible) {
  250 |           const box = await img.boundingBox();
  251 |           if (box) {
  252 |             expect(box.width).toBeLessThanOrEqual(vp.width + 2);
  253 |           }
  254 |         }
  255 |       }
  256 |     }
  257 |   });
  258 | 
  259 |   test('No images overflow on mobile (375px)', async ({ page }) => {
  260 |     await page.setViewportSize({ width: 375, height: 667 });
  261 |     await page.goto('/');
  262 |     await page.waitForLoadState('networkidle');
  263 |     await page.waitForTimeout(500);
  264 | 
  265 |     const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  266 |     const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  267 |     expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  268 |   });
  269 | 
  270 |   test('Blog images are responsive on blog page', async ({ page }) => {
  271 |     await page.setViewportSize({ width: 375, height: 667 });
  272 |     await page.goto('/blog');
  273 |     await page.waitForLoadState('networkidle');
  274 |     await page.waitForTimeout(500);
  275 | 
  276 |     const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  277 |     const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  278 |     expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  279 |   });
  280 | });
  281 | 
  282 | // ============================================
  283 | // 5. TEXT READABILITY TESTS
  284 | // ============================================
  285 | 
  286 | test.describe('📖 Text Readability Tests', () => {
  287 |   test('No text below 12px on mobile', async ({ page }) => {
  288 |     await page.setViewportSize({ width: 375, height: 667 });
  289 |     await page.goto('/');
  290 |     await page.waitForLoadState('networkidle');
  291 | 
  292 |     // Check font sizes of all visible text
  293 |     const fontSizes = await page.evaluate(() => {
  294 |       const elements = document.querySelectorAll('*');
  295 |       const sizes: number[] = [];
  296 |       elements.forEach(el => {
  297 |         const style = window.getComputedStyle(el);
  298 |         const fontSize = parseFloat(style.fontSize);
  299 |         if (fontSize > 0 && style.display !== 'none' && style.visibility !== 'hidden') {
  300 |           sizes.push(fontSize);
  301 |         }
  302 |       });
  303 |       return sizes;
  304 |     });
  305 | 
```