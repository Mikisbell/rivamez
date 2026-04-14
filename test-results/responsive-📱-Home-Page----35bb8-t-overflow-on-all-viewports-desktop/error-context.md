# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> 📱 Home Page - Responsive Visual Tests >> Footer renders without overflow on all viewports
- Location: tests\responsive.spec.ts:55:7

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 385
Received:    450
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
  - main [ref=e23]:
    - generic [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e54]: CONSTRUYENDO EL FUTURO DE HUANCAYO
        - heading "Arquitectura que Transforma Vidas" [level=1] [ref=e55]:
          - generic [ref=e56]: Arquitectura que
          - generic [ref=e57]: Transforma Vidas
        - paragraph [ref=e58]: Desde la planificación hasta los acabados finales, construimos cada detalle con excelencia
      - generic [ref=e59]:
        - generic [ref=e61]:
          - generic [ref=e64]: Cimientos
          - generic [ref=e68]: Estructura
          - generic [ref=e72]: Acabados
        - generic [ref=e73]:
          - generic [ref=e78] [cursor=pointer]:
            - generic [ref=e79]:
              - generic [ref=e80]: 🏗️
              - generic [ref=e81]:
                - generic [ref=e82]: FUNDAMENTOS
                - heading "Base Sólida" [level=3] [ref=e83]
            - generic [ref=e84]: "1"
          - generic [ref=e91] [cursor=pointer]:
            - generic [ref=e92]:
              - generic [ref=e93]: ⚙️
              - generic [ref=e94]:
                - generic [ref=e95]: DESARROLLO
                - heading "Construcción + Tecnología" [level=3] [ref=e96]
            - generic [ref=e97]: "2"
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic: ✨
                  - generic:
                    - generic: EXPERIENCIA
                    - heading "Acabados Premium" [level=3]
                - generic: "3"
        - generic [ref=e101]: 🏗️
      - generic [ref=e102]:
        - generic [ref=e105]:
          - generic [ref=e106]: ✨
          - generic [ref=e107]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e108]
          - paragraph [ref=e109]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e111]
        - generic [ref=e115]:
          - generic [ref=e116]: ⚙️
          - generic [ref=e117]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e118]
          - paragraph [ref=e119]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e121]
        - generic [ref=e125]:
          - generic [ref=e126]: 🏗️
          - generic [ref=e127]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e128]
          - paragraph [ref=e129]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e131]
      - generic [ref=e134]:
        - link "Explora Nuestros Proyectos" [ref=e135] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e136]: Explora Nuestros Proyectos
          - img [ref=e137]
        - link "Solicitar Cotización" [ref=e139] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e141]:
        - generic [ref=e142]: Desliza para descubrir más
        - img [ref=e143]
    - generic [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e155]
        - paragraph [ref=e156]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e157]:
        - generic [ref=e159]:
          - img [ref=e162]
          - heading "Certificación ISO 9001" [level=3] [ref=e165]
          - paragraph [ref=e166]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e167]:
            - generic [ref=e168]: Conoce más
            - img [ref=e169]
        - generic [ref=e172]:
          - img [ref=e175]
          - heading "Entrega a Tiempo" [level=3] [ref=e178]
          - paragraph [ref=e179]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e180]:
            - generic [ref=e181]: Conoce más
            - img [ref=e182]
        - generic [ref=e185]:
          - img [ref=e188]
          - heading "Presupuesto Transparente" [level=3] [ref=e191]
          - paragraph [ref=e192]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e193]:
            - generic [ref=e194]: Conoce más
            - img [ref=e195]
        - generic [ref=e198]:
          - img [ref=e201]
          - heading "Tecnología Avanzada" [level=3] [ref=e204]
          - paragraph [ref=e205]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e206]:
            - generic [ref=e207]: Conoce más
            - img [ref=e208]
        - generic [ref=e211]:
          - img [ref=e214]
          - heading "Equipo Especializado" [level=3] [ref=e217]
          - paragraph [ref=e218]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e219]:
            - generic [ref=e220]: Conoce más
            - img [ref=e221]
        - generic [ref=e224]:
          - img [ref=e227]
          - heading "Sostenibilidad" [level=3] [ref=e230]
          - paragraph [ref=e231]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e232]:
            - generic [ref=e233]: Conoce más
            - img [ref=e234]
      - generic [ref=e236]:
        - paragraph [ref=e237]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e238] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e239]
    - generic [ref=e243]:
      - generic [ref=e244]:
        - generic [ref=e245]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e246]
      - generic [ref=e247]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e248] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e249] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e250] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e251] [cursor=pointer]
      - generic [ref=e253]:
        - generic [ref=e254]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e255]
          - paragraph [ref=e256]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e257]:
            - listitem [ref=e258]:
              - img [ref=e260]
              - generic [ref=e262]: Departamentos premium con acabados de lujo
            - listitem [ref=e263]:
              - img [ref=e265]
              - generic [ref=e267]: Casas personalizadas según tu visión
            - listitem [ref=e268]:
              - img [ref=e270]
              - generic [ref=e272]: Condominios cerrados con amenidades completas
            - listitem [ref=e273]:
              - img [ref=e275]
              - generic [ref=e277]: Certificaciones de eficiencia energética
          - generic [ref=e278]:
            - generic [ref=e279]:
              - generic [ref=e280]: "72"
              - generic [ref=e281]: Departamentos
            - generic [ref=e282]:
              - generic [ref=e283]: "15"
              - generic [ref=e284]: Pisos máximo
            - generic [ref=e285]:
              - generic [ref=e286]: 98%
              - generic [ref=e287]: Satisfacción
          - link "Solicitar Información" [ref=e288] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e289]
        - generic [ref=e291]:
          - img "Torres residenciales premium" [ref=e293]
          - generic [ref=e295]: Torres residenciales premium
          - generic [ref=e296]:
            - button [ref=e297] [cursor=pointer]
            - button [ref=e298] [cursor=pointer]
            - button [ref=e299] [cursor=pointer]
    - generic [ref=e305]:
      - generic [ref=e306]:
        - generic [ref=e307]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e308]:
          - text: Construyendo el Futuro con
          - generic [ref=e309]: Resultados Medibles
        - paragraph [ref=e310]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e311]:
        - generic [ref=e312]:
          - generic [ref=e314]:
            - img [ref=e316]
            - generic [ref=e319]:
              - generic [ref=e320]: S/.
              - generic [ref=e321]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e322]
            - paragraph [ref=e323]: Soles en proyectos completados desde 2009
          - img [ref=e325]
        - generic [ref=e327]:
          - generic [ref=e329]:
            - img [ref=e331]
            - generic [ref=e334]:
              - generic [ref=e335]: 45,000
              - generic [ref=e336]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e337]
            - paragraph [ref=e338]: Metros cuadrados promedio anual
          - img [ref=e340]
        - generic [ref=e342]:
          - generic [ref=e344]:
            - img [ref=e346]
            - generic [ref=e350]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e351]
            - paragraph [ref=e352]: Proyectos entregados a tiempo o antes
          - img [ref=e354]
        - generic [ref=e356]:
          - generic [ref=e358]:
            - img [ref=e360]
            - generic [ref=e363]:
              - generic [ref=e364]: "4.8"
              - generic [ref=e365]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e366]
            - paragraph [ref=e367]: Calificación promedio en reseñas
          - img [ref=e369]
      - generic [ref=e371]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e372]
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e375]: 🌱
            - generic [ref=e376]: "15"
            - generic [ref=e377]: Proyectos Sostenibles
            - generic [ref=e378]: Con certificación ambiental
          - generic [ref=e379]:
            - generic [ref=e380]: 👷
            - generic [ref=e381]: 2,500+
            - generic [ref=e382]: Empleos Generados
            - generic [ref=e383]: Puestos de trabajo creados
          - generic [ref=e384]:
            - generic [ref=e385]: 💻
            - generic [ref=e386]: 100%
            - generic [ref=e387]: Procesos Digitalizados
            - generic [ref=e388]: Tecnología BIM implementada
          - generic [ref=e389]:
            - generic [ref=e390]: 🛠️
            - generic [ref=e391]: 24/7
            - generic [ref=e392]: Soporte Post-Venta
            - generic [ref=e393]: Atención continua a clientes
          - generic [ref=e394]:
            - generic [ref=e395]: 📍
            - generic [ref=e396]: "8"
            - generic [ref=e397]: Distritos de Huancayo
            - generic [ref=e398]: Presencia en la región
          - generic [ref=e399]:
            - generic [ref=e400]: 🏆
            - generic [ref=e401]: ISO
            - generic [ref=e402]: Certificaciones
            - generic [ref=e403]: Estándares internacionales
      - generic [ref=e404]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e405]
        - generic [ref=e406]:
          - generic [ref=e410]:
            - generic [ref=e411]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e412]
            - paragraph [ref=e413]: de Junín
            - img [ref=e415]
          - generic [ref=e420]:
            - generic [ref=e421]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e422]
            - paragraph [ref=e423]: en Construcción
            - img [ref=e425]
          - generic [ref=e430]:
            - generic [ref=e431]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e432]
            - paragraph [ref=e433]: Municipalidad
            - img [ref=e435]
      - generic [ref=e437]:
        - heading "Comparación con la Industria" [level=3] [ref=e438]
        - generic [ref=e439]:
          - generic [ref=e440]:
            - heading "Entrega Puntual" [level=4] [ref=e441]
            - generic [ref=e443]:
              - generic [ref=e444]: RIVAMEZ
              - generic [ref=e445]: 98%
            - generic [ref=e448]:
              - generic [ref=e449]: Promedio Industria
              - generic [ref=e450]: 75%
            - generic [ref=e453]:
              - generic [ref=e454]: 📈
              - generic [ref=e455]: +23% mejor que el promedio
          - generic [ref=e456]:
            - heading "Satisfacción Cliente" [level=4] [ref=e457]
            - generic [ref=e459]:
              - generic [ref=e460]: RIVAMEZ
              - generic [ref=e461]: 96%
            - generic [ref=e464]:
              - generic [ref=e465]: Promedio Industria
              - generic [ref=e466]: 82%
            - generic [ref=e469]:
              - generic [ref=e470]: 📈
              - generic [ref=e471]: +14% mejor que el promedio
          - generic [ref=e472]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e473]
            - generic [ref=e475]:
              - generic [ref=e476]: RIVAMEZ
              - generic [ref=e477]: 85%
            - generic [ref=e480]:
              - generic [ref=e481]: Promedio Industria
              - generic [ref=e482]: 45%
            - generic [ref=e485]:
              - generic [ref=e486]: 📈
              - generic [ref=e487]: +40% mejor que el promedio
          - generic [ref=e488]:
            - heading "Adopción BIM" [level=4] [ref=e489]
            - generic [ref=e491]:
              - generic [ref=e492]: RIVAMEZ
              - generic [ref=e493]: 100%
            - generic [ref=e496]:
              - generic [ref=e497]: Promedio Industria
              - generic [ref=e498]: 38%
            - generic [ref=e501]:
              - generic [ref=e502]: 📈
              - generic [ref=e503]: +62% mejor que el promedio
      - generic [ref=e504]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e505]
        - generic [ref=e507]:
          - generic [ref=e508] [cursor=pointer]:
            - generic [ref=e509]: 🏁
            - generic [ref=e510]: "3"
            - generic [ref=e511]: Proyectos
            - generic [ref=e512]: "2009"
          - generic [ref=e513] [cursor=pointer]:
            - generic [ref=e514]: 📈
            - generic [ref=e515]: "25"
            - generic [ref=e516]: Proyectos
            - generic [ref=e517]: "2012"
          - generic [ref=e518] [cursor=pointer]:
            - generic [ref=e519]: 🚀
            - generic [ref=e520]: "75"
            - generic [ref=e521]: Proyectos
            - generic [ref=e522]: "2015"
          - generic [ref=e523] [cursor=pointer]:
            - generic [ref=e524]: 💯
            - generic [ref=e525]: "150"
            - generic [ref=e526]: Proyectos
            - generic [ref=e527]: "2020"
          - generic [ref=e528] [cursor=pointer]:
            - generic [ref=e529]: 🏆
            - generic [ref=e530]: 285+
            - generic [ref=e531]: Proyectos
            - generic [ref=e532]: "2025"
      - generic [ref=e533]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e534]
        - generic [ref=e536]:
          - generic [ref=e537]:
            - generic [ref=e538] [cursor=pointer]:
              - generic [ref=e539]:
                - generic [ref=e540]: El Tambo
                - generic [ref=e541]: 92 proyectos
              - generic [ref=e544]: 100%
            - generic [ref=e545] [cursor=pointer]:
              - generic [ref=e546]:
                - generic [ref=e547]: Huancayo Centro
                - generic [ref=e548]: 85 proyectos
              - generic [ref=e551]: 92%
            - generic [ref=e552] [cursor=pointer]:
              - generic [ref=e553]:
                - generic [ref=e554]: Chilca
                - generic [ref=e555]: 48 proyectos
              - generic [ref=e558]: 52%
            - generic [ref=e559] [cursor=pointer]:
              - generic [ref=e560]:
                - generic [ref=e561]: Pilcomayo
                - generic [ref=e562]: 22 proyectos
              - generic [ref=e565]: 24%
            - generic [ref=e566] [cursor=pointer]:
              - generic [ref=e567]:
                - generic [ref=e568]: Huancán
                - generic [ref=e569]: 18 proyectos
              - generic [ref=e572]: 20%
            - generic [ref=e574] [cursor=pointer]:
              - generic [ref=e575]: San Agustín
              - generic [ref=e576]: 12 proyectos
            - generic [ref=e580] [cursor=pointer]:
              - generic [ref=e581]: Concepción
              - generic [ref=e582]: 8 proyectos
          - generic [ref=e585]:
            - generic [ref=e586]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e587]
              - generic [ref=e588]:
                - generic [ref=e591]: Alta densidad (80%+)
                - generic [ref=e594]: Media-alta (50-80%)
                - generic [ref=e597]: Media (20-50%)
                - generic [ref=e600]: Baja (<20%)
            - generic [ref=e601]:
              - generic [ref=e602]:
                - generic [ref=e603]: "7"
                - generic [ref=e604]: Distritos
              - generic [ref=e605]:
                - generic [ref=e606]: "285"
                - generic [ref=e607]: Proyectos
              - generic [ref=e608]:
                - generic [ref=e609]: "41"
                - generic [ref=e610]: Promedio/Distrito
              - generic [ref=e611]:
                - generic [ref=e612]: 🔥
                - generic [ref=e613]: El Tambo Líder
      - generic [ref=e615]:
        - link "Ver Nuestros Proyectos" [ref=e616] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e617] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e621]:
      - generic [ref=e622]:
        - generic [ref=e623]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e624]
        - paragraph [ref=e625]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e626]:
        - generic [ref=e627]:
          - img [ref=e629]
          - heading "Nuestra Misión" [level=3] [ref=e631]
          - paragraph [ref=e632]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e633]:
          - img [ref=e635]
          - heading "Nuestra Visión" [level=3] [ref=e638]
          - paragraph [ref=e639]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e640]:
        - heading "Nuestros Valores" [level=3] [ref=e641]
        - generic [ref=e642]:
          - generic [ref=e643]:
            - img [ref=e645]
            - heading "Compromiso" [level=4] [ref=e647]
            - paragraph [ref=e648]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e649]:
            - img [ref=e651]
            - heading "Innovación" [level=4] [ref=e653]
            - paragraph [ref=e654]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e655]:
            - img [ref=e657]
            - heading "Trabajo en Equipo" [level=4] [ref=e659]
            - paragraph [ref=e660]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e661]:
            - img [ref=e663]
            - heading "Excelencia" [level=4] [ref=e665]
            - paragraph [ref=e666]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e668] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e669]
    - generic [ref=e672]:
      - img [ref=e674]
      - generic [ref=e678]:
        - generic [ref=e679]:
          - generic [ref=e680]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e681]
          - paragraph [ref=e682]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e683]:
          - generic [ref=e684]:
            - generic [ref=e685]:
              - generic [ref=e686]: "12"
              - text: +
            - paragraph [ref=e687]: Años de Experiencia
          - generic [ref=e688]:
            - generic [ref=e689]:
              - generic [ref=e690]: "237"
              - text: +
            - paragraph [ref=e691]: Proyectos Completados
          - generic [ref=e692]:
            - generic [ref=e693]:
              - generic [ref=e694]: "81"
              - text: "%"
            - paragraph [ref=e695]: Satisfacción del Cliente
          - generic [ref=e696]:
            - generic [ref=e697]:
              - generic [ref=e698]: "51"
              - text: +
            - paragraph [ref=e699]: Profesionales Certificados
        - generic [ref=e700]:
          - generic [ref=e701]:
            - img [ref=e703]
            - heading "Construcción Residencial" [level=3] [ref=e705]
            - paragraph [ref=e706]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e707]:
              - listitem [ref=e708]:
                - img [ref=e709]
                - generic [ref=e711]: Casas unifamiliares personalizadas
              - listitem [ref=e712]:
                - img [ref=e713]
                - generic [ref=e715]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e716]:
                - img [ref=e717]
                - generic [ref=e719]: Condominios cerrados con amenidades
              - listitem [ref=e720]:
                - img [ref=e721]
                - generic [ref=e723]: Acabados de alta calidad y diseño moderno
          - generic [ref=e724]:
            - img [ref=e726]
            - heading "Proyectos Comerciales" [level=3] [ref=e728]
            - paragraph [ref=e729]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e730]:
              - listitem [ref=e731]:
                - img [ref=e732]
                - generic [ref=e734]: Centros comerciales y plazas
              - listitem [ref=e735]:
                - img [ref=e736]
                - generic [ref=e738]: Edificios de oficinas AAA
              - listitem [ref=e739]:
                - img [ref=e740]
                - generic [ref=e742]: Hoteles y establecimientos turísticos
              - listitem [ref=e743]:
                - img [ref=e744]
                - generic [ref=e746]: Locales comerciales especializados
          - generic [ref=e747]:
            - img [ref=e749]
            - heading "Proyectos Institucionales" [level=3] [ref=e751]
            - paragraph [ref=e752]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e753]:
              - listitem [ref=e754]:
                - img [ref=e755]
                - generic [ref=e757]: Hospitales y clínicas especializadas
              - listitem [ref=e758]:
                - img [ref=e759]
                - generic [ref=e761]: Centros educativos modernos
              - listitem [ref=e762]:
                - img [ref=e763]
                - generic [ref=e765]: Edificios gubernamentales
              - listitem [ref=e766]:
                - img [ref=e767]
                - generic [ref=e769]: Infraestructura pública de calidad
          - generic [ref=e770]:
            - img [ref=e772]
            - heading "Remodelación y Ampliación" [level=3] [ref=e774]
            - paragraph [ref=e775]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e776]:
              - listitem [ref=e777]:
                - img [ref=e778]
                - generic [ref=e780]: Remodelación integral de viviendas
              - listitem [ref=e781]:
                - img [ref=e782]
                - generic [ref=e784]: Ampliaciones verticales y horizontales
              - listitem [ref=e785]:
                - img [ref=e786]
                - generic [ref=e788]: Modernización de fachadas
              - listitem [ref=e789]:
                - img [ref=e790]
                - generic [ref=e792]: Reforzamiento estructural
          - generic [ref=e793]:
            - img [ref=e795]
            - heading "Consultoría y Gerencia" [level=3] [ref=e797]
            - paragraph [ref=e798]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e799]:
              - listitem [ref=e800]:
                - img [ref=e801]
                - generic [ref=e803]: Estudios de factibilidad
              - listitem [ref=e804]:
                - img [ref=e805]
                - generic [ref=e807]: Gerencia de proyectos
              - listitem [ref=e808]:
                - img [ref=e809]
                - generic [ref=e811]: Supervisión técnica
              - listitem [ref=e812]:
                - img [ref=e813]
                - generic [ref=e815]: Control de calidad y costos
          - generic [ref=e816]:
            - img [ref=e818]
            - heading "Diseño y Arquitectura" [level=3] [ref=e820]
            - paragraph [ref=e821]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e822]:
              - listitem [ref=e823]:
                - img [ref=e824]
                - generic [ref=e826]: Diseño arquitectónico personalizado
              - listitem [ref=e827]:
                - img [ref=e828]
                - generic [ref=e830]: Ingeniería estructural
              - listitem [ref=e831]:
                - img [ref=e832]
                - generic [ref=e834]: Renders y visualización 3D
              - listitem [ref=e835]:
                - img [ref=e836]
                - generic [ref=e838]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e840] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e841]
    - generic [ref=e847]:
      - generic [ref=e848]:
        - generic [ref=e849]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e850]
        - paragraph [ref=e851]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e852]:
        - generic [ref=e853]:
          - generic [ref=e854]:
            - generic [ref=e856]:
              - img [ref=e857]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e860] [cursor=pointer]
          - generic [ref=e862]:
            - heading "Torres del Valle" [level=3] [ref=e863]
            - generic [ref=e864]:
              - generic [ref=e865]:
                - img [ref=e866]
                - generic [ref=e869]: Av. Ferrocarril, Huancayo
              - generic [ref=e870]:
                - img [ref=e871]
                - generic [ref=e873]: 3,850 m²
              - generic [ref=e874]:
                - img [ref=e875]
                - generic [ref=e877]: Completado en 2024
        - generic [ref=e879]:
          - generic [ref=e880]:
            - generic [ref=e882]:
              - img [ref=e883]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e886] [cursor=pointer]
          - generic [ref=e888]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e889]
            - generic [ref=e890]:
              - generic [ref=e891]:
                - img [ref=e892]
                - generic [ref=e895]: El Tambo, Huancayo
              - generic [ref=e896]:
                - img [ref=e897]
                - generic [ref=e899]: 5,200 m²
              - generic [ref=e900]:
                - img [ref=e901]
                - generic [ref=e903]: Completado en 2023
        - generic [ref=e905]:
          - generic [ref=e906]:
            - generic [ref=e908]:
              - img [ref=e909]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e912] [cursor=pointer]
          - generic [ref=e914]:
            - heading "Condominio Los Portales" [level=3] [ref=e915]
            - generic [ref=e916]:
              - generic [ref=e917]:
                - img [ref=e918]
                - generic [ref=e921]: Chilca, Huancayo
              - generic [ref=e922]:
                - img [ref=e923]
                - generic [ref=e925]: 6,400 m²
              - generic [ref=e926]:
                - img [ref=e927]
                - generic [ref=e929]: Completado en 2024
        - generic [ref=e931]:
          - generic [ref=e932]:
            - generic [ref=e934]:
              - img [ref=e935]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e938] [cursor=pointer]
          - generic [ref=e940]:
            - heading "Hospital Clínica Central" [level=3] [ref=e941]
            - generic [ref=e942]:
              - generic [ref=e943]:
                - img [ref=e944]
                - generic [ref=e947]: Av. Real, Huancayo
              - generic [ref=e948]:
                - img [ref=e949]
                - generic [ref=e951]: 4,600 m²
              - generic [ref=e952]:
                - img [ref=e953]
                - generic [ref=e955]: Completado en 2023
        - generic [ref=e957]:
          - generic [ref=e958]:
            - generic [ref=e960]:
              - img [ref=e961]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e964] [cursor=pointer]
          - generic [ref=e966]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e967]
            - generic [ref=e968]:
              - generic [ref=e969]:
                - img [ref=e970]
                - generic [ref=e973]: San Carlos, Huancayo
              - generic [ref=e974]:
                - img [ref=e975]
                - generic [ref=e977]: 3,200 m²
              - generic [ref=e978]:
                - img [ref=e979]
                - generic [ref=e981]: Completado en 2024
        - generic [ref=e983]:
          - generic [ref=e984]:
            - generic [ref=e986]:
              - img [ref=e987]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e990] [cursor=pointer]
          - generic [ref=e992]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e993]
            - generic [ref=e994]:
              - generic [ref=e995]:
                - img [ref=e996]
                - generic [ref=e999]: Pilcomayo, Huancayo
              - generic [ref=e1000]:
                - img [ref=e1001]
                - generic [ref=e1003]: 7,800 m²
              - generic [ref=e1004]:
                - img [ref=e1005]
                - generic [ref=e1007]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e1010] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e1011]
    - generic [ref=e1016]:
      - generic [ref=e1017]:
        - generic [ref=e1018]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1019]
        - paragraph [ref=e1020]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1021]:
        - generic [ref=e1022]:
          - generic [ref=e1023]:
            - img [ref=e1024]
            - img [ref=e1026]
            - img [ref=e1028]
            - img [ref=e1030]
            - img [ref=e1032]
          - paragraph [ref=e1034]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1035]:
            - img "Carlos Mendoza Pérez" [ref=e1036]
            - generic [ref=e1037]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1038]
              - paragraph [ref=e1039]: Propietario - Torres del Valle
              - paragraph [ref=e1040]: Torres del Valle
        - generic [ref=e1041]:
          - generic [ref=e1042]:
            - img [ref=e1043]
            - img [ref=e1045]
            - img [ref=e1047]
            - img [ref=e1049]
            - img [ref=e1051]
          - paragraph [ref=e1053]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1054]:
            - img "María Elena Rojas" [ref=e1055]
            - generic [ref=e1056]:
              - heading "María Elena Rojas" [level=4] [ref=e1057]
              - paragraph [ref=e1058]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1059]: Plaza Comercial San Carlos
        - generic [ref=e1060]:
          - generic [ref=e1061]:
            - img [ref=e1062]
            - img [ref=e1064]
            - img [ref=e1066]
            - img [ref=e1068]
            - img [ref=e1070]
          - paragraph [ref=e1072]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1073]:
            - img "Roberto Villanueva Castro" [ref=e1074]
            - generic [ref=e1075]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1076]
              - paragraph [ref=e1077]: Director - Colegio Los Andes
              - paragraph [ref=e1078]: Centro Educativo Los Andes
        - generic [ref=e1079]:
          - generic [ref=e1080]:
            - img [ref=e1081]
            - img [ref=e1083]
            - img [ref=e1085]
            - img [ref=e1087]
            - img [ref=e1089]
          - paragraph [ref=e1091]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1092]:
            - img "Ana Lucía Torres" [ref=e1093]
            - generic [ref=e1094]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1095]
              - paragraph [ref=e1096]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1097]: Condominio Los Portales
        - generic [ref=e1098]:
          - generic [ref=e1099]:
            - img [ref=e1100]
            - img [ref=e1102]
            - img [ref=e1104]
            - img [ref=e1106]
            - img [ref=e1108]
          - paragraph [ref=e1110]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1111]:
            - img "Dr. Javier Campos Quispe" [ref=e1112]
            - generic [ref=e1113]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1114]
              - paragraph [ref=e1115]: Director Médico - Clínica Central
              - paragraph [ref=e1116]: Hospital Clínica Central
        - generic [ref=e1117]:
          - generic [ref=e1118]:
            - img [ref=e1119]
            - img [ref=e1121]
            - img [ref=e1123]
            - img [ref=e1125]
            - img [ref=e1127]
          - paragraph [ref=e1129]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1130]:
            - img "Patricia Robles Huamán" [ref=e1131]
            - generic [ref=e1132]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1133]
              - paragraph [ref=e1134]: CEO - Tech Solutions Peru
              - paragraph [ref=e1135]: Oficinas Corporativas Mantaro
      - generic [ref=e1136]:
        - generic [ref=e1137]:
          - generic [ref=e1138]: 98%
          - generic [ref=e1139]: Satisfacción
        - generic [ref=e1140]:
          - generic [ref=e1141]: 250+
          - generic [ref=e1142]: Clientes Felices
        - generic [ref=e1143]:
          - generic [ref=e1144]: 15+
          - generic [ref=e1145]: Años Experiencia
        - generic [ref=e1146]:
          - generic [ref=e1147]: "5.0"
          - generic [ref=e1148]: Calificación
    - generic [ref=e1154]:
      - generic [ref=e1155]:
        - generic [ref=e1156]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1157]
        - paragraph [ref=e1158]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1159]:
        - generic [ref=e1160]:
          - generic [ref=e1162]:
            - img [ref=e1164]
            - generic [ref=e1166]:
              - heading "Ubicación" [level=3] [ref=e1167]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1168] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1170]:
            - img [ref=e1172]
            - generic [ref=e1174]:
              - heading "Teléfono" [level=3] [ref=e1175]
              - link "+51 943 818 788" [ref=e1176] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1178]:
            - img [ref=e1180]
            - generic [ref=e1182]:
              - heading "Email" [level=3] [ref=e1183]
              - link "info@rivamez.com" [ref=e1184] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1186]:
            - img [ref=e1188]
            - generic [ref=e1190]:
              - heading "Horario" [level=3] [ref=e1191]
              - paragraph [ref=e1192]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1195]:
            - img [ref=e1196]
            - paragraph [ref=e1198]: Mapa de ubicación
        - generic [ref=e1200]:
          - generic [ref=e1201]:
            - generic [ref=e1202]:
              - generic [ref=e1203]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1204]
            - generic [ref=e1205]:
              - generic [ref=e1206]: Email *
              - textbox "juan@ejemplo.com" [ref=e1207]
          - generic [ref=e1208]:
            - generic [ref=e1209]:
              - generic [ref=e1210]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1211]
            - generic [ref=e1212]:
              - generic [ref=e1213]: Servicio de Interés *
              - combobox [ref=e1214]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1215]:
            - generic [ref=e1216]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1217]
          - button "Enviar Mensaje" [ref=e1218] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1219]
  - contentinfo [ref=e1221]:
    - generic [ref=e1222]:
      - generic [ref=e1223]:
        - generic [ref=e1224]:
          - generic [ref=e1225]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1226]
            - generic [ref=e1227]:
              - generic [ref=e1228]: GRUPO RIVAMEZ
              - generic [ref=e1229]: Constructora & Inmobiliaria
          - paragraph [ref=e1230]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1231]:
          - heading "Navegación" [level=3] [ref=e1232]
          - list [ref=e1233]:
            - listitem [ref=e1234]:
              - link "Inicio" [ref=e1235] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1236]:
              - link "Proyectos" [ref=e1237] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1238]:
              - link "Servicios" [ref=e1239] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1240]:
              - link "Nosotros" [ref=e1241] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1242]:
              - link "Contacto" [ref=e1243] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1244]:
          - heading "Contacto" [level=3] [ref=e1245]
          - list [ref=e1246]:
            - listitem [ref=e1247]:
              - img [ref=e1248]
              - generic [ref=e1251]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1252]:
              - img [ref=e1253]
              - link "+51 943 818 788" [ref=e1255] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1256]:
              - img [ref=e1257]
              - link "info@rivamez.com" [ref=e1259] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1260]:
          - heading "Síguenos" [level=3] [ref=e1261]
          - generic [ref=e1262]:
            - link [ref=e1263] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1264]
            - link [ref=e1266] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1267]
            - link [ref=e1269] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1270]
      - paragraph [ref=e1273]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos" [ref=e1274] [cursor=pointer]:
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic [ref=e1275]:
      - img [ref=e1278]
      - generic: ¿Necesitas ayuda? Escríbenos
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | // ============================================
  4   | // RESPONSIVE VISUAL TEST SUITE - RIVAMEZ
  5   | // Tests across all breakpoints
  6   | // ============================================
  7   | 
  8   | const VIEWPORTS = {
  9   |   mobileSmall: { width: 375, height: 667 },
  10  |   mobileLarge: { width: 430, height: 932 },
  11  |   tablet: { width: 768, height: 1024 },
  12  |   laptop: { width: 1280, height: 800 },
  13  |   desktop: { width: 1920, height: 1080 },
  14  | };
  15  | 
  16  | const PAGES = ['/', '/nosotros', '/servicios', '/proyectos', '/contacto', '/blog'];
  17  | 
  18  | // ============================================
  19  | // 1. HOME PAGE - RESPONSIVE VISUAL TESTS
  20  | // ============================================
  21  | 
  22  | test.describe('📱 Home Page - Responsive Visual Tests', () => {
  23  |   test('BuildingHero renders correctly on all viewports', async ({ page }) => {
  24  |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  25  |       await page.setViewportSize(vp);
  26  |       await page.goto('/');
  27  |       await page.waitForLoadState('networkidle');
  28  |       await expect(page.locator('section').first()).toBeVisible();
  29  |       // Check no horizontal scroll
  30  |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  31  |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  32  |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px tolerance
  33  |     }
  34  |   });
  35  | 
  36  |   test('Navbar is visible and usable on all viewports', async ({ page }) => {
  37  |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  38  |       await page.setViewportSize(vp);
  39  |       await page.goto('/');
  40  |       await page.waitForLoadState('networkidle');
  41  |       const nav = page.locator('nav').first();
  42  |       await expect(nav).toBeVisible();
  43  | 
  44  |       // On mobile, hamburger menu should be present
  45  |       if (vp.width < 768) {
  46  |         const hamburger = page.locator('button').filter({ hasText: '' }).first();
  47  |         // Check there's a clickable menu button
  48  |         const menuButtons = page.locator('button[aria-label], button.md\\:hidden');
  49  |         const count = await menuButtons.count();
  50  |         expect(count).toBeGreaterThanOrEqual(1);
  51  |       }
  52  |     }
  53  |   });
  54  | 
  55  |   test('Footer renders without overflow on all viewports', async ({ page }) => {
  56  |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  57  |       await page.setViewportSize(vp);
  58  |       await page.goto('/');
  59  |       await page.waitForLoadState('networkidle');
  60  |       await page.waitForTimeout(1000);
  61  |       // Scroll to bottom
  62  |       await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  63  |       await page.waitForTimeout(500);
  64  |       const footer = page.locator('footer').first();
  65  |       await expect(footer).toBeVisible();
  66  |       // No horizontal overflow (allow 10px tolerance for scrollbar)
  67  |       const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  68  |       const viewWidth = await page.evaluate(() => window.innerWidth);
> 69  |       expect(bodyWidth).toBeLessThanOrEqual(viewWidth + 10);
      |                         ^ Error: expect(received).toBeLessThanOrEqual(expected)
  70  |     }
  71  |   });
  72  | 
  73  |   test('CTA buttons are tappable (min 44px) on mobile', async ({ page }) => {
  74  |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  75  |       if (vp.width >= 768) continue; // Only test mobile
  76  |       await page.setViewportSize(vp);
  77  |       await page.goto('/');
  78  |       await page.waitForLoadState('networkidle');
  79  | 
  80  |       // Find all anchor tags and check their sizes
  81  |       const buttons = page.locator('a, button');
  82  |       const count = await buttons.count();
  83  |       for (let i = 0; i < Math.min(count, 20); i++) {
  84  |         const btn = buttons.nth(i);
  85  |         const isVisible = await btn.isVisible();
  86  |         if (isVisible) {
  87  |           const box = await btn.boundingBox();
  88  |           if (box) {
  89  |             expect(box.height).toBeGreaterThanOrEqual(24); // Minimum reasonable height
  90  |           }
  91  |         }
  92  |       }
  93  |     }
  94  |   });
  95  | });
  96  | 
  97  | // ============================================
  98  | // 2. GRID RESPONSIVENESS TESTS
  99  | // ============================================
  100 | 
  101 | test.describe('📐 Grid Responsiveness Tests', () => {
  102 |   test('Projects grid adapts correctly on all viewports', async ({ page }) => {
  103 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  104 |       await page.setViewportSize(vp);
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
```