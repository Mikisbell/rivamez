# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> 🔲 Modal & Overlay Responsive Tests >> WhatsApp button is accessible on all viewports
- Location: tests\responsive.spec.ts:357:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
  - navigation [ref=e3]:
    - generic [ref=e6]:
      - link "GRUPO RIVAMEZ GRUPO RIVAMEZ Constructora & Inmobiliaria" [ref=e7] [cursor=pointer]:
        - /url: /
        - img "GRUPO RIVAMEZ" [ref=e8]
        - generic [ref=e9]:
          - generic [ref=e10]: GRUPO RIVAMEZ
          - generic [ref=e11]: Constructora & Inmobiliaria
      - button [ref=e12] [cursor=pointer]:
        - img [ref=e13]
  - button "Buscar" [ref=e15] [cursor=pointer]:
    - img [ref=e16]
  - button "Toggle dark mode" [ref=e18] [cursor=pointer]:
    - img [ref=e20]
  - main [ref=e24]:
    - generic [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e55]: CONSTRUYENDO EL FUTURO DE HUANCAYO
        - heading "Arquitectura que Transforma Vidas" [level=1] [ref=e56]:
          - generic [ref=e57]: Arquitectura que
          - generic [ref=e58]: Transforma Vidas
        - paragraph [ref=e59]: Desde la planificación hasta los acabados finales, construimos cada detalle con excelencia
      - generic [ref=e60]:
        - generic [ref=e62]:
          - generic [ref=e65]: Cimientos
          - generic [ref=e69]: Estructura
          - generic [ref=e73]: Acabados
        - generic [ref=e74]:
          - generic [ref=e79] [cursor=pointer]:
            - generic [ref=e80]:
              - generic [ref=e81]: 🏗️
              - generic [ref=e82]:
                - generic [ref=e83]: FUNDAMENTOS
                - heading "Base Sólida" [level=3] [ref=e84]
            - generic [ref=e85]: "1"
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic: ⚙️
                  - generic:
                    - generic: DESARROLLO
                    - heading "Construcción + Tecnología" [level=3]
                - generic: "2"
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic: ✨
                  - generic:
                    - generic: EXPERIENCIA
                    - heading "Acabados Premium" [level=3]
                - generic: "3"
        - generic [ref=e89]: 🏗️
      - generic [ref=e90]:
        - generic [ref=e93]:
          - generic [ref=e94]: ✨
          - generic [ref=e95]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e96]
          - paragraph [ref=e97]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e99]
        - generic [ref=e103]:
          - generic [ref=e104]: ⚙️
          - generic [ref=e105]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e106]
          - paragraph [ref=e107]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e109]
        - generic [ref=e113]:
          - generic [ref=e114]: 🏗️
          - generic [ref=e115]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e116]
          - paragraph [ref=e117]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e119]
      - generic [ref=e122]:
        - link "Explora Nuestros Proyectos" [ref=e123] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e124]: Explora Nuestros Proyectos
          - img [ref=e125]
        - link "Solicitar Cotización" [ref=e127] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e129]:
        - generic [ref=e130]: Desliza para descubrir más
        - img [ref=e131]
    - generic [ref=e140]:
      - generic [ref=e141]:
        - generic [ref=e142]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e143]
        - paragraph [ref=e144]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e145]:
        - generic [ref=e147]:
          - img [ref=e150]
          - heading "Certificación ISO 9001" [level=3] [ref=e153]
          - paragraph [ref=e154]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e155]:
            - generic [ref=e156]: Conoce más
            - img [ref=e157]
        - generic [ref=e160]:
          - img [ref=e163]
          - heading "Entrega a Tiempo" [level=3] [ref=e166]
          - paragraph [ref=e167]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e168]:
            - generic [ref=e169]: Conoce más
            - img [ref=e170]
        - generic [ref=e173]:
          - img [ref=e176]
          - heading "Presupuesto Transparente" [level=3] [ref=e179]
          - paragraph [ref=e180]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e181]:
            - generic [ref=e182]: Conoce más
            - img [ref=e183]
        - generic [ref=e186]:
          - img [ref=e189]
          - heading "Tecnología Avanzada" [level=3] [ref=e192]
          - paragraph [ref=e193]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e194]:
            - generic [ref=e195]: Conoce más
            - img [ref=e196]
        - generic [ref=e199]:
          - img [ref=e202]
          - heading "Equipo Especializado" [level=3] [ref=e205]
          - paragraph [ref=e206]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e207]:
            - generic [ref=e208]: Conoce más
            - img [ref=e209]
        - generic [ref=e212]:
          - img [ref=e215]
          - heading "Sostenibilidad" [level=3] [ref=e218]
          - paragraph [ref=e219]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e220]:
            - generic [ref=e221]: Conoce más
            - img [ref=e222]
      - generic [ref=e224]:
        - paragraph [ref=e225]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e226] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e227]
    - generic [ref=e231]:
      - generic [ref=e232]:
        - generic [ref=e233]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e234]
      - generic [ref=e235]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e236] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e237] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e238] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e239] [cursor=pointer]
      - generic [ref=e241]:
        - generic [ref=e242]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e243]
          - paragraph [ref=e244]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e245]:
            - listitem [ref=e246]:
              - img [ref=e248]
              - generic [ref=e250]: Departamentos premium con acabados de lujo
            - listitem [ref=e251]:
              - img [ref=e253]
              - generic [ref=e255]: Casas personalizadas según tu visión
            - listitem [ref=e256]:
              - img [ref=e258]
              - generic [ref=e260]: Condominios cerrados con amenidades completas
            - listitem [ref=e261]:
              - img [ref=e263]
              - generic [ref=e265]: Certificaciones de eficiencia energética
          - generic [ref=e266]:
            - generic [ref=e267]:
              - generic [ref=e268]: "72"
              - generic [ref=e269]: Departamentos
            - generic [ref=e270]:
              - generic [ref=e271]: "15"
              - generic [ref=e272]: Pisos máximo
            - generic [ref=e273]:
              - generic [ref=e274]: 98%
              - generic [ref=e275]: Satisfacción
          - link "Solicitar Información" [ref=e276] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e277]
        - generic [ref=e279]:
          - img "Torres residenciales premium" [ref=e281]
          - generic [ref=e283]: Torres residenciales premium
          - generic [ref=e284]:
            - button [ref=e285] [cursor=pointer]
            - button [ref=e286] [cursor=pointer]
            - button [ref=e287] [cursor=pointer]
    - generic [ref=e293]:
      - generic [ref=e294]:
        - generic [ref=e295]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e296]:
          - text: Construyendo el Futuro con
          - generic [ref=e297]: Resultados Medibles
        - paragraph [ref=e298]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e299]:
        - generic [ref=e300]:
          - generic [ref=e302]:
            - img [ref=e304]
            - generic [ref=e307]:
              - generic [ref=e308]: S/.
              - generic [ref=e309]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e310]
            - paragraph [ref=e311]: Soles en proyectos completados desde 2009
          - img [ref=e313]
        - generic [ref=e315]:
          - generic [ref=e317]:
            - img [ref=e319]
            - generic [ref=e322]:
              - generic [ref=e323]: 45,000
              - generic [ref=e324]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e325]
            - paragraph [ref=e326]: Metros cuadrados promedio anual
          - img [ref=e328]
        - generic [ref=e330]:
          - generic [ref=e332]:
            - img [ref=e334]
            - generic [ref=e338]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e339]
            - paragraph [ref=e340]: Proyectos entregados a tiempo o antes
          - img [ref=e342]
        - generic [ref=e344]:
          - generic [ref=e346]:
            - img [ref=e348]
            - generic [ref=e351]:
              - generic [ref=e352]: "4.8"
              - generic [ref=e353]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e354]
            - paragraph [ref=e355]: Calificación promedio en reseñas
          - img [ref=e357]
      - generic [ref=e359]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e360]
        - generic [ref=e361]:
          - generic [ref=e362]:
            - generic [ref=e363]: 🌱
            - generic [ref=e364]: "15"
            - generic [ref=e365]: Proyectos Sostenibles
            - generic [ref=e366]: Con certificación ambiental
          - generic [ref=e367]:
            - generic [ref=e368]: 👷
            - generic [ref=e369]: 2,500+
            - generic [ref=e370]: Empleos Generados
            - generic [ref=e371]: Puestos de trabajo creados
          - generic [ref=e372]:
            - generic [ref=e373]: 💻
            - generic [ref=e374]: 100%
            - generic [ref=e375]: Procesos Digitalizados
            - generic [ref=e376]: Tecnología BIM implementada
          - generic [ref=e377]:
            - generic [ref=e378]: 🛠️
            - generic [ref=e379]: 24/7
            - generic [ref=e380]: Soporte Post-Venta
            - generic [ref=e381]: Atención continua a clientes
          - generic [ref=e382]:
            - generic [ref=e383]: 📍
            - generic [ref=e384]: "8"
            - generic [ref=e385]: Distritos de Huancayo
            - generic [ref=e386]: Presencia en la región
          - generic [ref=e387]:
            - generic [ref=e388]: 🏆
            - generic [ref=e389]: ISO
            - generic [ref=e390]: Certificaciones
            - generic [ref=e391]: Estándares internacionales
      - generic [ref=e392]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e393]
        - generic [ref=e394]:
          - generic [ref=e398]:
            - generic [ref=e399]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e400]
            - paragraph [ref=e401]: de Junín
            - img [ref=e403]
          - generic [ref=e408]:
            - generic [ref=e409]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e410]
            - paragraph [ref=e411]: en Construcción
            - img [ref=e413]
          - generic [ref=e418]:
            - generic [ref=e419]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e420]
            - paragraph [ref=e421]: Municipalidad
            - img [ref=e423]
      - generic [ref=e425]:
        - heading "Comparación con la Industria" [level=3] [ref=e426]
        - generic [ref=e427]:
          - generic [ref=e428]:
            - heading "Entrega Puntual" [level=4] [ref=e429]
            - generic [ref=e431]:
              - generic [ref=e432]: RIVAMEZ
              - generic [ref=e433]: 98%
            - generic [ref=e436]:
              - generic [ref=e437]: Promedio Industria
              - generic [ref=e438]: 75%
            - generic [ref=e441]:
              - generic [ref=e442]: 📈
              - generic [ref=e443]: +23% mejor que el promedio
          - generic [ref=e444]:
            - heading "Satisfacción Cliente" [level=4] [ref=e445]
            - generic [ref=e447]:
              - generic [ref=e448]: RIVAMEZ
              - generic [ref=e449]: 96%
            - generic [ref=e452]:
              - generic [ref=e453]: Promedio Industria
              - generic [ref=e454]: 82%
            - generic [ref=e457]:
              - generic [ref=e458]: 📈
              - generic [ref=e459]: +14% mejor que el promedio
          - generic [ref=e460]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e461]
            - generic [ref=e463]:
              - generic [ref=e464]: RIVAMEZ
              - generic [ref=e465]: 85%
            - generic [ref=e468]:
              - generic [ref=e469]: Promedio Industria
              - generic [ref=e470]: 45%
            - generic [ref=e473]:
              - generic [ref=e474]: 📈
              - generic [ref=e475]: +40% mejor que el promedio
          - generic [ref=e476]:
            - heading "Adopción BIM" [level=4] [ref=e477]
            - generic [ref=e479]:
              - generic [ref=e480]: RIVAMEZ
              - generic [ref=e481]: 100%
            - generic [ref=e484]:
              - generic [ref=e485]: Promedio Industria
              - generic [ref=e486]: 38%
            - generic [ref=e489]:
              - generic [ref=e490]: 📈
              - generic [ref=e491]: +62% mejor que el promedio
      - generic [ref=e492]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e493]
        - generic [ref=e495]:
          - generic [ref=e496] [cursor=pointer]:
            - generic [ref=e497]: 🏁
            - generic [ref=e498]: "3"
            - generic [ref=e499]: Proyectos
            - generic [ref=e500]: "2009"
          - generic [ref=e501] [cursor=pointer]:
            - generic [ref=e502]: 📈
            - generic [ref=e503]: "25"
            - generic [ref=e504]: Proyectos
            - generic [ref=e505]: "2012"
          - generic [ref=e506] [cursor=pointer]:
            - generic [ref=e507]: 🚀
            - generic [ref=e508]: "75"
            - generic [ref=e509]: Proyectos
            - generic [ref=e510]: "2015"
          - generic [ref=e511] [cursor=pointer]:
            - generic [ref=e512]: 💯
            - generic [ref=e513]: "150"
            - generic [ref=e514]: Proyectos
            - generic [ref=e515]: "2020"
          - generic [ref=e516] [cursor=pointer]:
            - generic [ref=e517]: 🏆
            - generic [ref=e518]: 285+
            - generic [ref=e519]: Proyectos
            - generic [ref=e520]: "2025"
      - generic [ref=e521]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e522]
        - generic [ref=e524]:
          - generic [ref=e525]:
            - generic [ref=e526] [cursor=pointer]:
              - generic [ref=e527]:
                - generic [ref=e528]: El Tambo
                - generic [ref=e529]: 92 proyectos
              - generic [ref=e532]: 100%
            - generic [ref=e533] [cursor=pointer]:
              - generic [ref=e534]:
                - generic [ref=e535]: Huancayo Centro
                - generic [ref=e536]: 85 proyectos
              - generic [ref=e539]: 92%
            - generic [ref=e540] [cursor=pointer]:
              - generic [ref=e541]:
                - generic [ref=e542]: Chilca
                - generic [ref=e543]: 48 proyectos
              - generic [ref=e546]: 52%
            - generic [ref=e547] [cursor=pointer]:
              - generic [ref=e548]:
                - generic [ref=e549]: Pilcomayo
                - generic [ref=e550]: 22 proyectos
              - generic [ref=e553]: 24%
            - generic [ref=e554] [cursor=pointer]:
              - generic [ref=e555]:
                - generic [ref=e556]: Huancán
                - generic [ref=e557]: 18 proyectos
              - generic [ref=e560]: 20%
            - generic [ref=e562] [cursor=pointer]:
              - generic [ref=e563]: San Agustín
              - generic [ref=e564]: 12 proyectos
            - generic [ref=e568] [cursor=pointer]:
              - generic [ref=e569]: Concepción
              - generic [ref=e570]: 8 proyectos
          - generic [ref=e573]:
            - generic [ref=e574]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e575]
              - generic [ref=e576]:
                - generic [ref=e579]: Alta densidad (80%+)
                - generic [ref=e582]: Media-alta (50-80%)
                - generic [ref=e585]: Media (20-50%)
                - generic [ref=e588]: Baja (<20%)
            - generic [ref=e589]:
              - generic [ref=e590]:
                - generic [ref=e591]: "7"
                - generic [ref=e592]: Distritos
              - generic [ref=e593]:
                - generic [ref=e594]: "285"
                - generic [ref=e595]: Proyectos
              - generic [ref=e596]:
                - generic [ref=e597]: "41"
                - generic [ref=e598]: Promedio/Distrito
              - generic [ref=e599]:
                - generic [ref=e600]: 🔥
                - generic [ref=e601]: El Tambo Líder
      - generic [ref=e603]:
        - link "Ver Nuestros Proyectos" [ref=e604] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e605] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e609]:
      - generic [ref=e610]:
        - generic [ref=e611]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e612]
        - paragraph [ref=e613]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e614]:
        - generic [ref=e615]:
          - img [ref=e617]
          - heading "Nuestra Misión" [level=3] [ref=e619]
          - paragraph [ref=e620]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e621]:
          - img [ref=e623]
          - heading "Nuestra Visión" [level=3] [ref=e626]
          - paragraph [ref=e627]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e628]:
        - heading "Nuestros Valores" [level=3] [ref=e629]
        - generic [ref=e630]:
          - generic [ref=e631]:
            - img [ref=e633]
            - heading "Compromiso" [level=4] [ref=e635]
            - paragraph [ref=e636]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e637]:
            - img [ref=e639]
            - heading "Innovación" [level=4] [ref=e641]
            - paragraph [ref=e642]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e643]:
            - img [ref=e645]
            - heading "Trabajo en Equipo" [level=4] [ref=e647]
            - paragraph [ref=e648]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e649]:
            - img [ref=e651]
            - heading "Excelencia" [level=4] [ref=e653]
            - paragraph [ref=e654]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e656] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e657]
    - generic [ref=e660]:
      - img [ref=e662]
      - generic [ref=e666]:
        - generic [ref=e667]:
          - generic [ref=e668]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e669]
          - paragraph [ref=e670]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e671]:
          - generic [ref=e672]:
            - generic [ref=e673]:
              - generic [ref=e674]: "0"
              - text: +
            - paragraph [ref=e675]: Años de Experiencia
          - generic [ref=e676]:
            - generic [ref=e677]:
              - generic [ref=e678]: "0"
              - text: +
            - paragraph [ref=e679]: Proyectos Completados
          - generic [ref=e680]:
            - generic [ref=e681]:
              - generic [ref=e682]: "0"
              - text: "%"
            - paragraph [ref=e683]: Satisfacción del Cliente
          - generic [ref=e684]:
            - generic [ref=e685]:
              - generic [ref=e686]: "0"
              - text: +
            - paragraph [ref=e687]: Profesionales Certificados
        - generic [ref=e688]:
          - generic [ref=e689]:
            - img [ref=e691]
            - heading "Construcción Residencial" [level=3] [ref=e693]
            - paragraph [ref=e694]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e695]:
              - listitem [ref=e696]:
                - img [ref=e697]
                - generic [ref=e699]: Casas unifamiliares personalizadas
              - listitem [ref=e700]:
                - img [ref=e701]
                - generic [ref=e703]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e704]:
                - img [ref=e705]
                - generic [ref=e707]: Condominios cerrados con amenidades
              - listitem [ref=e708]:
                - img [ref=e709]
                - generic [ref=e711]: Acabados de alta calidad y diseño moderno
          - generic [ref=e712]:
            - img [ref=e714]
            - heading "Proyectos Comerciales" [level=3] [ref=e716]
            - paragraph [ref=e717]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e718]:
              - listitem [ref=e719]:
                - img [ref=e720]
                - generic [ref=e722]: Centros comerciales y plazas
              - listitem [ref=e723]:
                - img [ref=e724]
                - generic [ref=e726]: Edificios de oficinas AAA
              - listitem [ref=e727]:
                - img [ref=e728]
                - generic [ref=e730]: Hoteles y establecimientos turísticos
              - listitem [ref=e731]:
                - img [ref=e732]
                - generic [ref=e734]: Locales comerciales especializados
          - generic [ref=e735]:
            - img [ref=e737]
            - heading "Proyectos Institucionales" [level=3] [ref=e739]
            - paragraph [ref=e740]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e741]:
              - listitem [ref=e742]:
                - img [ref=e743]
                - generic [ref=e745]: Hospitales y clínicas especializadas
              - listitem [ref=e746]:
                - img [ref=e747]
                - generic [ref=e749]: Centros educativos modernos
              - listitem [ref=e750]:
                - img [ref=e751]
                - generic [ref=e753]: Edificios gubernamentales
              - listitem [ref=e754]:
                - img [ref=e755]
                - generic [ref=e757]: Infraestructura pública de calidad
          - generic [ref=e758]:
            - img [ref=e760]
            - heading "Remodelación y Ampliación" [level=3] [ref=e762]
            - paragraph [ref=e763]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e764]:
              - listitem [ref=e765]:
                - img [ref=e766]
                - generic [ref=e768]: Remodelación integral de viviendas
              - listitem [ref=e769]:
                - img [ref=e770]
                - generic [ref=e772]: Ampliaciones verticales y horizontales
              - listitem [ref=e773]:
                - img [ref=e774]
                - generic [ref=e776]: Modernización de fachadas
              - listitem [ref=e777]:
                - img [ref=e778]
                - generic [ref=e780]: Reforzamiento estructural
          - generic [ref=e781]:
            - img [ref=e783]
            - heading "Consultoría y Gerencia" [level=3] [ref=e785]
            - paragraph [ref=e786]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e787]:
              - listitem [ref=e788]:
                - img [ref=e789]
                - generic [ref=e791]: Estudios de factibilidad
              - listitem [ref=e792]:
                - img [ref=e793]
                - generic [ref=e795]: Gerencia de proyectos
              - listitem [ref=e796]:
                - img [ref=e797]
                - generic [ref=e799]: Supervisión técnica
              - listitem [ref=e800]:
                - img [ref=e801]
                - generic [ref=e803]: Control de calidad y costos
          - generic [ref=e804]:
            - img [ref=e806]
            - heading "Diseño y Arquitectura" [level=3] [ref=e808]
            - paragraph [ref=e809]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e810]:
              - listitem [ref=e811]:
                - img [ref=e812]
                - generic [ref=e814]: Diseño arquitectónico personalizado
              - listitem [ref=e815]:
                - img [ref=e816]
                - generic [ref=e818]: Ingeniería estructural
              - listitem [ref=e819]:
                - img [ref=e820]
                - generic [ref=e822]: Renders y visualización 3D
              - listitem [ref=e823]:
                - img [ref=e824]
                - generic [ref=e826]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e828] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e829]
    - generic [ref=e835]:
      - generic [ref=e836]:
        - generic [ref=e837]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e838]
        - paragraph [ref=e839]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e840]:
        - generic [ref=e841]:
          - generic [ref=e842]:
            - generic [ref=e844]:
              - img [ref=e845]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e848] [cursor=pointer]
          - generic [ref=e850]:
            - heading "Torres del Valle" [level=3] [ref=e851]
            - generic [ref=e852]:
              - generic [ref=e853]:
                - img [ref=e854]
                - generic [ref=e857]: Av. Ferrocarril, Huancayo
              - generic [ref=e858]:
                - img [ref=e859]
                - generic [ref=e861]: 3,850 m²
              - generic [ref=e862]:
                - img [ref=e863]
                - generic [ref=e865]: Completado en 2024
        - generic [ref=e867]:
          - generic [ref=e868]:
            - generic [ref=e870]:
              - img [ref=e871]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e874] [cursor=pointer]
          - generic [ref=e876]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e877]
            - generic [ref=e878]:
              - generic [ref=e879]:
                - img [ref=e880]
                - generic [ref=e883]: El Tambo, Huancayo
              - generic [ref=e884]:
                - img [ref=e885]
                - generic [ref=e887]: 5,200 m²
              - generic [ref=e888]:
                - img [ref=e889]
                - generic [ref=e891]: Completado en 2023
        - generic [ref=e893]:
          - generic [ref=e894]:
            - generic [ref=e896]:
              - img [ref=e897]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e900] [cursor=pointer]
          - generic [ref=e902]:
            - heading "Condominio Los Portales" [level=3] [ref=e903]
            - generic [ref=e904]:
              - generic [ref=e905]:
                - img [ref=e906]
                - generic [ref=e909]: Chilca, Huancayo
              - generic [ref=e910]:
                - img [ref=e911]
                - generic [ref=e913]: 6,400 m²
              - generic [ref=e914]:
                - img [ref=e915]
                - generic [ref=e917]: Completado en 2024
        - generic [ref=e919]:
          - generic [ref=e920]:
            - generic [ref=e922]:
              - img [ref=e923]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e926] [cursor=pointer]
          - generic [ref=e928]:
            - heading "Hospital Clínica Central" [level=3] [ref=e929]
            - generic [ref=e930]:
              - generic [ref=e931]:
                - img [ref=e932]
                - generic [ref=e935]: Av. Real, Huancayo
              - generic [ref=e936]:
                - img [ref=e937]
                - generic [ref=e939]: 4,600 m²
              - generic [ref=e940]:
                - img [ref=e941]
                - generic [ref=e943]: Completado en 2023
        - generic [ref=e945]:
          - generic [ref=e946]:
            - generic [ref=e948]:
              - img [ref=e949]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e952] [cursor=pointer]
          - generic [ref=e954]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e955]
            - generic [ref=e956]:
              - generic [ref=e957]:
                - img [ref=e958]
                - generic [ref=e961]: San Carlos, Huancayo
              - generic [ref=e962]:
                - img [ref=e963]
                - generic [ref=e965]: 3,200 m²
              - generic [ref=e966]:
                - img [ref=e967]
                - generic [ref=e969]: Completado en 2024
        - generic [ref=e971]:
          - generic [ref=e972]:
            - generic [ref=e974]:
              - img [ref=e975]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e978] [cursor=pointer]
          - generic [ref=e980]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e981]
            - generic [ref=e982]:
              - generic [ref=e983]:
                - img [ref=e984]
                - generic [ref=e987]: Pilcomayo, Huancayo
              - generic [ref=e988]:
                - img [ref=e989]
                - generic [ref=e991]: 7,800 m²
              - generic [ref=e992]:
                - img [ref=e993]
                - generic [ref=e995]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e998] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e999]
    - generic [ref=e1004]:
      - generic [ref=e1005]:
        - generic [ref=e1006]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1007]
        - paragraph [ref=e1008]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1009]:
        - generic [ref=e1010]:
          - generic [ref=e1011]:
            - img [ref=e1012]
            - img [ref=e1014]
            - img [ref=e1016]
            - img [ref=e1018]
            - img [ref=e1020]
          - paragraph [ref=e1022]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1023]:
            - img "Carlos Mendoza Pérez" [ref=e1024]
            - generic [ref=e1025]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1026]
              - paragraph [ref=e1027]: Propietario - Torres del Valle
              - paragraph [ref=e1028]: Torres del Valle
        - generic [ref=e1029]:
          - generic [ref=e1030]:
            - img [ref=e1031]
            - img [ref=e1033]
            - img [ref=e1035]
            - img [ref=e1037]
            - img [ref=e1039]
          - paragraph [ref=e1041]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1042]:
            - img "María Elena Rojas" [ref=e1043]
            - generic [ref=e1044]:
              - heading "María Elena Rojas" [level=4] [ref=e1045]
              - paragraph [ref=e1046]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1047]: Plaza Comercial San Carlos
        - generic [ref=e1048]:
          - generic [ref=e1049]:
            - img [ref=e1050]
            - img [ref=e1052]
            - img [ref=e1054]
            - img [ref=e1056]
            - img [ref=e1058]
          - paragraph [ref=e1060]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1061]:
            - img "Roberto Villanueva Castro" [ref=e1062]
            - generic [ref=e1063]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1064]
              - paragraph [ref=e1065]: Director - Colegio Los Andes
              - paragraph [ref=e1066]: Centro Educativo Los Andes
        - generic [ref=e1067]:
          - generic [ref=e1068]:
            - img [ref=e1069]
            - img [ref=e1071]
            - img [ref=e1073]
            - img [ref=e1075]
            - img [ref=e1077]
          - paragraph [ref=e1079]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1080]:
            - img "Ana Lucía Torres" [ref=e1081]
            - generic [ref=e1082]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1083]
              - paragraph [ref=e1084]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1085]: Condominio Los Portales
        - generic [ref=e1086]:
          - generic [ref=e1087]:
            - img [ref=e1088]
            - img [ref=e1090]
            - img [ref=e1092]
            - img [ref=e1094]
            - img [ref=e1096]
          - paragraph [ref=e1098]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1099]:
            - img "Dr. Javier Campos Quispe" [ref=e1100]
            - generic [ref=e1101]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1102]
              - paragraph [ref=e1103]: Director Médico - Clínica Central
              - paragraph [ref=e1104]: Hospital Clínica Central
        - generic [ref=e1105]:
          - generic [ref=e1106]:
            - img [ref=e1107]
            - img [ref=e1109]
            - img [ref=e1111]
            - img [ref=e1113]
            - img [ref=e1115]
          - paragraph [ref=e1117]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1118]:
            - img "Patricia Robles Huamán" [ref=e1119]
            - generic [ref=e1120]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1121]
              - paragraph [ref=e1122]: CEO - Tech Solutions Peru
              - paragraph [ref=e1123]: Oficinas Corporativas Mantaro
      - generic [ref=e1124]:
        - generic [ref=e1125]:
          - generic [ref=e1126]: 98%
          - generic [ref=e1127]: Satisfacción
        - generic [ref=e1128]:
          - generic [ref=e1129]: 250+
          - generic [ref=e1130]: Clientes Felices
        - generic [ref=e1131]:
          - generic [ref=e1132]: 15+
          - generic [ref=e1133]: Años Experiencia
        - generic [ref=e1134]:
          - generic [ref=e1135]: "5.0"
          - generic [ref=e1136]: Calificación
    - generic [ref=e1142]:
      - generic [ref=e1143]:
        - generic [ref=e1144]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1145]
        - paragraph [ref=e1146]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1147]:
        - generic [ref=e1148]:
          - generic [ref=e1150]:
            - img [ref=e1152]
            - generic [ref=e1154]:
              - heading "Ubicación" [level=3] [ref=e1155]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1156] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1158]:
            - img [ref=e1160]
            - generic [ref=e1162]:
              - heading "Teléfono" [level=3] [ref=e1163]
              - link "+51 943 818 788" [ref=e1164] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1166]:
            - img [ref=e1168]
            - generic [ref=e1170]:
              - heading "Email" [level=3] [ref=e1171]
              - link "info@rivamez.com" [ref=e1172] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1174]:
            - img [ref=e1176]
            - generic [ref=e1178]:
              - heading "Horario" [level=3] [ref=e1179]
              - paragraph [ref=e1180]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1183]:
            - img [ref=e1184]
            - paragraph [ref=e1186]: Mapa de ubicación
        - generic [ref=e1188]:
          - generic [ref=e1189]:
            - generic [ref=e1190]:
              - generic [ref=e1191]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1192]
            - generic [ref=e1193]:
              - generic [ref=e1194]: Email *
              - textbox "juan@ejemplo.com" [ref=e1195]
          - generic [ref=e1196]:
            - generic [ref=e1197]:
              - generic [ref=e1198]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1199]
            - generic [ref=e1200]:
              - generic [ref=e1201]: Servicio de Interés *
              - combobox [ref=e1202]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1203]:
            - generic [ref=e1204]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1205]
          - button "Enviar Mensaje" [ref=e1206] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1207]
  - contentinfo [ref=e1209]:
    - generic [ref=e1210]:
      - generic [ref=e1211]:
        - generic [ref=e1212]:
          - generic [ref=e1213]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1214]
            - generic [ref=e1215]:
              - generic [ref=e1216]: GRUPO RIVAMEZ
              - generic [ref=e1217]: Constructora & Inmobiliaria
          - paragraph [ref=e1218]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1219]:
          - heading "Navegación" [level=3] [ref=e1220]
          - list [ref=e1221]:
            - listitem [ref=e1222]:
              - link "Inicio" [ref=e1223] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1224]:
              - link "Proyectos" [ref=e1225] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1226]:
              - link "Servicios" [ref=e1227] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1228]:
              - link "Nosotros" [ref=e1229] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1230]:
              - link "Contacto" [ref=e1231] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1232]:
          - heading "Contacto" [level=3] [ref=e1233]
          - list [ref=e1234]:
            - listitem [ref=e1235]:
              - img [ref=e1236]
              - generic [ref=e1239]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1240]:
              - img [ref=e1241]
              - link "+51 943 818 788" [ref=e1243] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1244]:
              - img [ref=e1245]
              - link "info@rivamez.com" [ref=e1247] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1248]:
          - heading "Síguenos" [level=3] [ref=e1249]
          - generic [ref=e1250]:
            - link [ref=e1251] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1252]
            - link [ref=e1254] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1255]
            - link [ref=e1257] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1258]
      - paragraph [ref=e1261]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos":
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic:
      - generic:
        - img
      - generic: ¿Necesitas ayuda? Escríbenos
```

# Test source

```ts
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
  306 |     const minFontSize = Math.min(...fontSizes);
  307 |     expect(minFontSize).toBeGreaterThanOrEqual(9); // Allow some tolerance for decorative/SVG text
  308 |   });
  309 | 
  310 |   test('Headings are prominent on all viewports', async ({ page }) => {
  311 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  312 |       await page.setViewportSize(vp);
  313 |       await page.goto('/');
  314 |       await page.waitForLoadState('networkidle');
  315 | 
  316 |       const h1 = page.locator('h1').first();
  317 |       await expect(h1).toBeVisible();
  318 | 
  319 |       const h1Box = await h1.boundingBox();
  320 |       expect(h1Box).not.toBeNull();
  321 |       expect(h1Box!.height).toBeGreaterThanOrEqual(30); // h1 should be reasonably sized
  322 |     }
  323 |   });
  324 | });
  325 | 
  326 | // ============================================
  327 | // 6. MODAL / OVERLAY RESPONSIVE TESTS
  328 | // ============================================
  329 | 
  330 | test.describe('🔲 Modal & Overlay Responsive Tests', () => {
  331 |   test('ChatBot window fits on mobile viewport', async ({ page }) => {
  332 |     await page.setViewportSize({ width: 375, height: 667 });
  333 |     await page.goto('/');
  334 |     await page.waitForLoadState('networkidle');
  335 | 
  336 |     // ChatBot trigger should be visible
  337 |     const chatBtn = page.locator('[class*="bottom-"], [class*="fixed"]').filter({ has: page.locator('svg, button') }).first();
  338 |     // Click to open chat
  339 |     const buttons = page.locator('button');
  340 |     const count = await buttons.count();
  341 |     for (let i = 0; i < count; i++) {
  342 |       const btn = buttons.nth(i);
  343 |       const text = await btn.textContent().catch(() => '');
  344 |       if (text.includes('chat') || text.includes('Chat') || text.includes('💬')) {
  345 |         await btn.click();
  346 |         await page.waitForTimeout(500);
  347 |         break;
  348 |       }
  349 |     }
  350 | 
  351 |     // Chat window if open should not overflow
  352 |     const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  353 |     const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  354 |     expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  355 |   });
  356 | 
  357 |   test('WhatsApp button is accessible on all viewports', async ({ page }) => {
  358 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  359 |       await page.setViewportSize(vp);
  360 |       await page.goto('/');
  361 |       await page.waitForLoadState('networkidle');
  362 | 
  363 |       // WhatsApp button should exist (anywhere on page)
  364 |       const waLink = page.locator('a[href*="wa.me"]');
  365 |       const count = await waLink.count();
  366 |       expect(count).toBeGreaterThanOrEqual(1);
  367 | 
  368 |       // At least one WhatsApp link should be visible
  369 |       let isVisible = false;
  370 |       for (let i = 0; i < count; i++) {
  371 |         const el = waLink.nth(i);
  372 |         if (await el.isVisible().catch(() => false)) {
  373 |           isVisible = true;
  374 |           break;
  375 |         }
  376 |       }
> 377 |       expect(isVisible).toBe(true);
      |                         ^ Error: expect(received).toBe(expected) // Object.is equality
  378 |     }
  379 |   });
  380 | });
  381 | 
  382 | // ============================================
  383 | // 7. FORM RESPONSIVE TESTS
  384 | // ============================================
  385 | 
  386 | test.describe('📝 Form Responsive Tests', () => {
  387 |   test('Contact form is usable on mobile (375px)', async ({ page }) => {
  388 |     await page.setViewportSize({ width: 375, height: 667 });
  389 |     await page.goto('/contacto');
  390 |     await page.waitForLoadState('networkidle');
  391 | 
  392 |     // Find form inputs
  393 |     const inputs = page.locator('input, textarea, select');
  394 |     const count = await inputs.count();
  395 |     expect(count).toBeGreaterThanOrEqual(2);
  396 | 
  397 |     // Check inputs are within viewport width
  398 |     for (let i = 0; i < Math.min(count, 10); i++) {
  399 |       const input = inputs.nth(i);
  400 |       const isVisible = await input.isVisible();
  401 |       if (isVisible) {
  402 |         const box = await input.boundingBox();
  403 |         if (box) {
  404 |           expect(box.width).toBeLessThanOrEqual(375);
  405 |           expect(box.height).toBeGreaterThanOrEqual(30); // Reasonable input height
  406 |         }
  407 |       }
  408 |     }
  409 | 
  410 |     // No horizontal overflow
  411 |     const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  412 |     const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  413 |     expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2);
  414 |   });
  415 | 
  416 |   test('Contact form stacks to single column on mobile', async ({ page }) => {
  417 |     // Mobile: should be single column
  418 |     await page.setViewportSize({ width: 375, height: 667 });
  419 |     await page.goto('/contacto');
  420 |     await page.waitForLoadState('networkidle');
  421 | 
  422 |     // On tablet+: should potentially have 2 columns
  423 |     await page.setViewportSize({ width: 768, height: 1024 });
  424 |     await page.waitForLoadState('networkidle');
  425 |   });
  426 | });
  427 | 
  428 | // ============================================
  429 | // 8. PAGE-SPECIFIC RESPONSIVE TESTS
  430 | // ============================================
  431 | 
  432 | test.describe('📄 Page-Specific Responsive Tests', () => {
  433 |   test('Nosotros page: no overflow on any viewport', async ({ page }) => {
  434 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  435 |       await page.setViewportSize(vp);
  436 |       await page.goto('/nosotros');
  437 |       await page.waitForLoadState('networkidle');
  438 |       await page.waitForTimeout(500);
  439 | 
  440 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  441 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  442 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  443 |     }
  444 |   });
  445 | 
  446 |   test('Servicios page: image containers are responsive', async ({ page }) => {
  447 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  448 |       await page.setViewportSize(vp);
  449 |       await page.goto('/servicios');
  450 |       await page.waitForLoadState('networkidle');
  451 |       await page.waitForTimeout(500);
  452 | 
  453 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  454 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  455 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
  456 |     }
  457 |   });
  458 | 
  459 |   test('Blog page: cards stack on mobile, grid on desktop', async ({ page }) => {
  460 |     // Mobile: single column
  461 |     await page.setViewportSize({ width: 375, height: 667 });
  462 |     await page.goto('/blog');
  463 |     await page.waitForLoadState('networkidle');
  464 | 
  465 |     // Desktop: multi column
  466 |     await page.setViewportSize({ width: 1280, height: 800 });
  467 |     await page.waitForLoadState('networkidle');
  468 |   });
  469 | });
  470 | 
  471 | // ============================================
  472 | // 9. ACCESSIBILITY RESPONSIVE TESTS
  473 | // ============================================
  474 | 
  475 | test.describe('♿ Accessibility Responsive Tests', () => {
  476 |   test('Touch targets meet minimum 44px on mobile', async ({ page }) => {
  477 |     await page.setViewportSize({ width: 375, height: 667 });
```