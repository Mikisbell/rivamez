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
          - generic [ref=e104] [cursor=pointer]:
            - generic [ref=e105]:
              - generic [ref=e106]: ✨
              - generic [ref=e107]:
                - generic [ref=e108]: EXPERIENCIA
                - heading "Acabados Premium" [level=3] [ref=e109]
            - generic [ref=e110]: "3"
        - generic [ref=e114]: 🏗️
        - generic [ref=e116]: 🎉
      - generic [ref=e117]:
        - generic [ref=e120]:
          - generic [ref=e121]: ✨
          - generic [ref=e122]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e123]
          - paragraph [ref=e124]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e126]
        - generic [ref=e130]:
          - generic [ref=e131]: ⚙️
          - generic [ref=e132]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e133]
          - paragraph [ref=e134]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e136]
        - generic [ref=e140]:
          - generic [ref=e141]: 🏗️
          - generic [ref=e142]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e143]
          - paragraph [ref=e144]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e146]
      - generic [ref=e149]:
        - link "Explora Nuestros Proyectos" [ref=e150] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e151]: Explora Nuestros Proyectos
          - img [ref=e152]
        - link "Solicitar Cotización" [ref=e154] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e156]:
        - generic [ref=e157]: Desliza para descubrir más
        - img [ref=e158]
    - generic [ref=e167]:
      - generic [ref=e168]:
        - generic [ref=e169]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e170]
        - paragraph [ref=e171]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e172]:
        - generic [ref=e174]:
          - img [ref=e177]
          - heading "Certificación ISO 9001" [level=3] [ref=e180]
          - paragraph [ref=e181]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e182]:
            - generic [ref=e183]: Conoce más
            - img [ref=e184]
        - generic [ref=e187]:
          - img [ref=e190]
          - heading "Entrega a Tiempo" [level=3] [ref=e193]
          - paragraph [ref=e194]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e195]:
            - generic [ref=e196]: Conoce más
            - img [ref=e197]
        - generic [ref=e200]:
          - img [ref=e203]
          - heading "Presupuesto Transparente" [level=3] [ref=e206]
          - paragraph [ref=e207]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e208]:
            - generic [ref=e209]: Conoce más
            - img [ref=e210]
        - generic [ref=e213]:
          - img [ref=e216]
          - heading "Tecnología Avanzada" [level=3] [ref=e219]
          - paragraph [ref=e220]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e221]:
            - generic [ref=e222]: Conoce más
            - img [ref=e223]
        - generic [ref=e226]:
          - img [ref=e229]
          - heading "Equipo Especializado" [level=3] [ref=e232]
          - paragraph [ref=e233]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e234]:
            - generic [ref=e235]: Conoce más
            - img [ref=e236]
        - generic [ref=e239]:
          - img [ref=e242]
          - heading "Sostenibilidad" [level=3] [ref=e245]
          - paragraph [ref=e246]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e247]:
            - generic [ref=e248]: Conoce más
            - img [ref=e249]
      - generic [ref=e251]:
        - paragraph [ref=e252]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e253] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e254]
    - generic [ref=e258]:
      - generic [ref=e259]:
        - generic [ref=e260]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e261]
      - generic [ref=e262]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e263] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e264] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e265] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e266] [cursor=pointer]
      - generic [ref=e268]:
        - generic [ref=e269]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e270]
          - paragraph [ref=e271]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e272]:
            - listitem [ref=e273]:
              - img [ref=e275]
              - generic [ref=e277]: Departamentos premium con acabados de lujo
            - listitem [ref=e278]:
              - img [ref=e280]
              - generic [ref=e282]: Casas personalizadas según tu visión
            - listitem [ref=e283]:
              - img [ref=e285]
              - generic [ref=e287]: Condominios cerrados con amenidades completas
            - listitem [ref=e288]:
              - img [ref=e290]
              - generic [ref=e292]: Certificaciones de eficiencia energética
          - generic [ref=e293]:
            - generic [ref=e294]:
              - generic [ref=e295]: "72"
              - generic [ref=e296]: Departamentos
            - generic [ref=e297]:
              - generic [ref=e298]: "15"
              - generic [ref=e299]: Pisos máximo
            - generic [ref=e300]:
              - generic [ref=e301]: 98%
              - generic [ref=e302]: Satisfacción
          - link "Solicitar Información" [ref=e303] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e304]
        - generic [ref=e306]:
          - img "Casas de lujo personalizadas" [ref=e308]
          - generic [ref=e310]: Casas de lujo personalizadas
          - generic [ref=e311]:
            - button [ref=e312] [cursor=pointer]
            - button [ref=e313] [cursor=pointer]
            - button [ref=e314] [cursor=pointer]
    - generic [ref=e320]:
      - generic [ref=e321]:
        - generic [ref=e322]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e323]:
          - text: Construyendo el Futuro con
          - generic [ref=e324]: Resultados Medibles
        - paragraph [ref=e325]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e326]:
        - generic [ref=e327]:
          - generic [ref=e329]:
            - img [ref=e331]
            - generic [ref=e334]:
              - generic [ref=e335]: S/.
              - generic [ref=e336]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e337]
            - paragraph [ref=e338]: Soles en proyectos completados desde 2009
          - img [ref=e340]
        - generic [ref=e342]:
          - generic [ref=e344]:
            - img [ref=e346]
            - generic [ref=e349]:
              - generic [ref=e350]: 45,000
              - generic [ref=e351]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e352]
            - paragraph [ref=e353]: Metros cuadrados promedio anual
          - img [ref=e355]
        - generic [ref=e357]:
          - generic [ref=e359]:
            - img [ref=e361]
            - generic [ref=e365]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e366]
            - paragraph [ref=e367]: Proyectos entregados a tiempo o antes
          - img [ref=e369]
        - generic [ref=e371]:
          - generic [ref=e373]:
            - img [ref=e375]
            - generic [ref=e378]:
              - generic [ref=e379]: "4.8"
              - generic [ref=e380]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e381]
            - paragraph [ref=e382]: Calificación promedio en reseñas
          - img [ref=e384]
      - generic [ref=e386]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e387]
        - generic [ref=e388]:
          - generic [ref=e389]:
            - generic [ref=e390]: 🌱
            - generic [ref=e391]: "15"
            - generic [ref=e392]: Proyectos Sostenibles
            - generic [ref=e393]: Con certificación ambiental
          - generic [ref=e394]:
            - generic [ref=e395]: 👷
            - generic [ref=e396]: 2,500+
            - generic [ref=e397]: Empleos Generados
            - generic [ref=e398]: Puestos de trabajo creados
          - generic [ref=e399]:
            - generic [ref=e400]: 💻
            - generic [ref=e401]: 100%
            - generic [ref=e402]: Procesos Digitalizados
            - generic [ref=e403]: Tecnología BIM implementada
          - generic [ref=e404]:
            - generic [ref=e405]: 🛠️
            - generic [ref=e406]: 24/7
            - generic [ref=e407]: Soporte Post-Venta
            - generic [ref=e408]: Atención continua a clientes
          - generic [ref=e409]:
            - generic [ref=e410]: 📍
            - generic [ref=e411]: "8"
            - generic [ref=e412]: Distritos de Huancayo
            - generic [ref=e413]: Presencia en la región
          - generic [ref=e414]:
            - generic [ref=e415]: 🏆
            - generic [ref=e416]: ISO
            - generic [ref=e417]: Certificaciones
            - generic [ref=e418]: Estándares internacionales
      - generic [ref=e419]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e420]
        - generic [ref=e421]:
          - generic [ref=e425]:
            - generic [ref=e426]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e427]
            - paragraph [ref=e428]: de Junín
            - img [ref=e430]
          - generic [ref=e435]:
            - generic [ref=e436]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e437]
            - paragraph [ref=e438]: en Construcción
            - img [ref=e440]
          - generic [ref=e445]:
            - generic [ref=e446]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e447]
            - paragraph [ref=e448]: Municipalidad
            - img [ref=e450]
      - generic [ref=e452]:
        - heading "Comparación con la Industria" [level=3] [ref=e453]
        - generic [ref=e454]:
          - generic [ref=e455]:
            - heading "Entrega Puntual" [level=4] [ref=e456]
            - generic [ref=e458]:
              - generic [ref=e459]: RIVAMEZ
              - generic [ref=e460]: 98%
            - generic [ref=e463]:
              - generic [ref=e464]: Promedio Industria
              - generic [ref=e465]: 75%
            - generic [ref=e468]:
              - generic [ref=e469]: 📈
              - generic [ref=e470]: +23% mejor que el promedio
          - generic [ref=e471]:
            - heading "Satisfacción Cliente" [level=4] [ref=e472]
            - generic [ref=e474]:
              - generic [ref=e475]: RIVAMEZ
              - generic [ref=e476]: 96%
            - generic [ref=e479]:
              - generic [ref=e480]: Promedio Industria
              - generic [ref=e481]: 82%
            - generic [ref=e484]:
              - generic [ref=e485]: 📈
              - generic [ref=e486]: +14% mejor que el promedio
          - generic [ref=e487]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e488]
            - generic [ref=e490]:
              - generic [ref=e491]: RIVAMEZ
              - generic [ref=e492]: 85%
            - generic [ref=e495]:
              - generic [ref=e496]: Promedio Industria
              - generic [ref=e497]: 45%
            - generic [ref=e500]:
              - generic [ref=e501]: 📈
              - generic [ref=e502]: +40% mejor que el promedio
          - generic [ref=e503]:
            - heading "Adopción BIM" [level=4] [ref=e504]
            - generic [ref=e506]:
              - generic [ref=e507]: RIVAMEZ
              - generic [ref=e508]: 100%
            - generic [ref=e511]:
              - generic [ref=e512]: Promedio Industria
              - generic [ref=e513]: 38%
            - generic [ref=e516]:
              - generic [ref=e517]: 📈
              - generic [ref=e518]: +62% mejor que el promedio
      - generic [ref=e519]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e520]
        - generic [ref=e522]:
          - generic [ref=e523] [cursor=pointer]:
            - generic [ref=e524]: 🏁
            - generic [ref=e525]: "3"
            - generic [ref=e526]: Proyectos
            - generic [ref=e527]: "2009"
          - generic [ref=e528] [cursor=pointer]:
            - generic [ref=e529]: 📈
            - generic [ref=e530]: "25"
            - generic [ref=e531]: Proyectos
            - generic [ref=e532]: "2012"
          - generic [ref=e533] [cursor=pointer]:
            - generic [ref=e534]: 🚀
            - generic [ref=e535]: "75"
            - generic [ref=e536]: Proyectos
            - generic [ref=e537]: "2015"
          - generic [ref=e538] [cursor=pointer]:
            - generic [ref=e539]: 💯
            - generic [ref=e540]: "150"
            - generic [ref=e541]: Proyectos
            - generic [ref=e542]: "2020"
          - generic [ref=e543] [cursor=pointer]:
            - generic [ref=e544]: 🏆
            - generic [ref=e545]: 285+
            - generic [ref=e546]: Proyectos
            - generic [ref=e547]: "2025"
      - generic [ref=e548]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e549]
        - generic [ref=e551]:
          - generic [ref=e552]:
            - generic [ref=e553] [cursor=pointer]:
              - generic [ref=e554]:
                - generic [ref=e555]: El Tambo
                - generic [ref=e556]: 92 proyectos
              - generic [ref=e559]: 100%
            - generic [ref=e560] [cursor=pointer]:
              - generic [ref=e561]:
                - generic [ref=e562]: Huancayo Centro
                - generic [ref=e563]: 85 proyectos
              - generic [ref=e566]: 92%
            - generic [ref=e567] [cursor=pointer]:
              - generic [ref=e568]:
                - generic [ref=e569]: Chilca
                - generic [ref=e570]: 48 proyectos
              - generic [ref=e573]: 52%
            - generic [ref=e574] [cursor=pointer]:
              - generic [ref=e575]:
                - generic [ref=e576]: Pilcomayo
                - generic [ref=e577]: 22 proyectos
              - generic [ref=e580]: 24%
            - generic [ref=e581] [cursor=pointer]:
              - generic [ref=e582]:
                - generic [ref=e583]: Huancán
                - generic [ref=e584]: 18 proyectos
              - generic [ref=e587]: 20%
            - generic [ref=e589] [cursor=pointer]:
              - generic [ref=e590]: San Agustín
              - generic [ref=e591]: 12 proyectos
            - generic [ref=e595] [cursor=pointer]:
              - generic [ref=e596]: Concepción
              - generic [ref=e597]: 8 proyectos
          - generic [ref=e600]:
            - generic [ref=e601]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e602]
              - generic [ref=e603]:
                - generic [ref=e606]: Alta densidad (80%+)
                - generic [ref=e609]: Media-alta (50-80%)
                - generic [ref=e612]: Media (20-50%)
                - generic [ref=e615]: Baja (<20%)
            - generic [ref=e616]:
              - generic [ref=e617]:
                - generic [ref=e618]: "7"
                - generic [ref=e619]: Distritos
              - generic [ref=e620]:
                - generic [ref=e621]: "285"
                - generic [ref=e622]: Proyectos
              - generic [ref=e623]:
                - generic [ref=e624]: "41"
                - generic [ref=e625]: Promedio/Distrito
              - generic [ref=e626]:
                - generic [ref=e627]: 🔥
                - generic [ref=e628]: El Tambo Líder
      - generic [ref=e630]:
        - link "Ver Nuestros Proyectos" [ref=e631] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e632] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e636]:
      - generic [ref=e637]:
        - generic [ref=e638]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e639]
        - paragraph [ref=e640]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e641]:
        - generic [ref=e642]:
          - img [ref=e644]
          - heading "Nuestra Misión" [level=3] [ref=e646]
          - paragraph [ref=e647]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e648]:
          - img [ref=e650]
          - heading "Nuestra Visión" [level=3] [ref=e653]
          - paragraph [ref=e654]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e655]:
        - heading "Nuestros Valores" [level=3] [ref=e656]
        - generic [ref=e657]:
          - generic [ref=e658]:
            - img [ref=e660]
            - heading "Compromiso" [level=4] [ref=e662]
            - paragraph [ref=e663]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e664]:
            - img [ref=e666]
            - heading "Innovación" [level=4] [ref=e668]
            - paragraph [ref=e669]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e670]:
            - img [ref=e672]
            - heading "Trabajo en Equipo" [level=4] [ref=e674]
            - paragraph [ref=e675]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e676]:
            - img [ref=e678]
            - heading "Excelencia" [level=4] [ref=e680]
            - paragraph [ref=e681]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e683] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e684]
    - generic [ref=e687]:
      - img [ref=e689]
      - generic [ref=e693]:
        - generic [ref=e694]:
          - generic [ref=e695]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e696]
          - paragraph [ref=e697]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e698]:
          - generic [ref=e699]:
            - generic [ref=e700]:
              - generic [ref=e701]: "13"
              - text: +
            - paragraph [ref=e702]: Años de Experiencia
          - generic [ref=e703]:
            - generic [ref=e704]:
              - generic [ref=e705]: "257"
              - text: +
            - paragraph [ref=e706]: Proyectos Completados
          - generic [ref=e707]:
            - generic [ref=e708]:
              - generic [ref=e709]: "88"
              - text: "%"
            - paragraph [ref=e710]: Satisfacción del Cliente
          - generic [ref=e711]:
            - generic [ref=e712]:
              - generic [ref=e713]: "56"
              - text: +
            - paragraph [ref=e714]: Profesionales Certificados
        - generic [ref=e715]:
          - generic [ref=e716]:
            - img [ref=e718]
            - heading "Construcción Residencial" [level=3] [ref=e720]
            - paragraph [ref=e721]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e722]:
              - listitem [ref=e723]:
                - img [ref=e724]
                - generic [ref=e726]: Casas unifamiliares personalizadas
              - listitem [ref=e727]:
                - img [ref=e728]
                - generic [ref=e730]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e731]:
                - img [ref=e732]
                - generic [ref=e734]: Condominios cerrados con amenidades
              - listitem [ref=e735]:
                - img [ref=e736]
                - generic [ref=e738]: Acabados de alta calidad y diseño moderno
          - generic [ref=e739]:
            - img [ref=e741]
            - heading "Proyectos Comerciales" [level=3] [ref=e743]
            - paragraph [ref=e744]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e745]:
              - listitem [ref=e746]:
                - img [ref=e747]
                - generic [ref=e749]: Centros comerciales y plazas
              - listitem [ref=e750]:
                - img [ref=e751]
                - generic [ref=e753]: Edificios de oficinas AAA
              - listitem [ref=e754]:
                - img [ref=e755]
                - generic [ref=e757]: Hoteles y establecimientos turísticos
              - listitem [ref=e758]:
                - img [ref=e759]
                - generic [ref=e761]: Locales comerciales especializados
          - generic [ref=e762]:
            - img [ref=e764]
            - heading "Proyectos Institucionales" [level=3] [ref=e766]
            - paragraph [ref=e767]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e768]:
              - listitem [ref=e769]:
                - img [ref=e770]
                - generic [ref=e772]: Hospitales y clínicas especializadas
              - listitem [ref=e773]:
                - img [ref=e774]
                - generic [ref=e776]: Centros educativos modernos
              - listitem [ref=e777]:
                - img [ref=e778]
                - generic [ref=e780]: Edificios gubernamentales
              - listitem [ref=e781]:
                - img [ref=e782]
                - generic [ref=e784]: Infraestructura pública de calidad
          - generic [ref=e785]:
            - img [ref=e787]
            - heading "Remodelación y Ampliación" [level=3] [ref=e789]
            - paragraph [ref=e790]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e791]:
              - listitem [ref=e792]:
                - img [ref=e793]
                - generic [ref=e795]: Remodelación integral de viviendas
              - listitem [ref=e796]:
                - img [ref=e797]
                - generic [ref=e799]: Ampliaciones verticales y horizontales
              - listitem [ref=e800]:
                - img [ref=e801]
                - generic [ref=e803]: Modernización de fachadas
              - listitem [ref=e804]:
                - img [ref=e805]
                - generic [ref=e807]: Reforzamiento estructural
          - generic [ref=e808]:
            - img [ref=e810]
            - heading "Consultoría y Gerencia" [level=3] [ref=e812]
            - paragraph [ref=e813]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e814]:
              - listitem [ref=e815]:
                - img [ref=e816]
                - generic [ref=e818]: Estudios de factibilidad
              - listitem [ref=e819]:
                - img [ref=e820]
                - generic [ref=e822]: Gerencia de proyectos
              - listitem [ref=e823]:
                - img [ref=e824]
                - generic [ref=e826]: Supervisión técnica
              - listitem [ref=e827]:
                - img [ref=e828]
                - generic [ref=e830]: Control de calidad y costos
          - generic [ref=e831]:
            - img [ref=e833]
            - heading "Diseño y Arquitectura" [level=3] [ref=e835]
            - paragraph [ref=e836]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e837]:
              - listitem [ref=e838]:
                - img [ref=e839]
                - generic [ref=e841]: Diseño arquitectónico personalizado
              - listitem [ref=e842]:
                - img [ref=e843]
                - generic [ref=e845]: Ingeniería estructural
              - listitem [ref=e846]:
                - img [ref=e847]
                - generic [ref=e849]: Renders y visualización 3D
              - listitem [ref=e850]:
                - img [ref=e851]
                - generic [ref=e853]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e855] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e856]
    - generic [ref=e862]:
      - generic [ref=e863]:
        - generic [ref=e864]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e865]
        - paragraph [ref=e866]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e867]:
        - generic [ref=e868]:
          - generic [ref=e869]:
            - generic [ref=e871]:
              - img [ref=e872]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e875] [cursor=pointer]
          - generic [ref=e877]:
            - heading "Torres del Valle" [level=3] [ref=e878]
            - generic [ref=e879]:
              - generic [ref=e880]:
                - img [ref=e881]
                - generic [ref=e884]: Av. Ferrocarril, Huancayo
              - generic [ref=e885]:
                - img [ref=e886]
                - generic [ref=e888]: 3,850 m²
              - generic [ref=e889]:
                - img [ref=e890]
                - generic [ref=e892]: Completado en 2024
        - generic [ref=e894]:
          - generic [ref=e895]:
            - generic [ref=e897]:
              - img [ref=e898]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e901] [cursor=pointer]
          - generic [ref=e903]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e904]
            - generic [ref=e905]:
              - generic [ref=e906]:
                - img [ref=e907]
                - generic [ref=e910]: El Tambo, Huancayo
              - generic [ref=e911]:
                - img [ref=e912]
                - generic [ref=e914]: 5,200 m²
              - generic [ref=e915]:
                - img [ref=e916]
                - generic [ref=e918]: Completado en 2023
        - generic [ref=e920]:
          - generic [ref=e921]:
            - generic [ref=e923]:
              - img [ref=e924]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e927] [cursor=pointer]
          - generic [ref=e929]:
            - heading "Condominio Los Portales" [level=3] [ref=e930]
            - generic [ref=e931]:
              - generic [ref=e932]:
                - img [ref=e933]
                - generic [ref=e936]: Chilca, Huancayo
              - generic [ref=e937]:
                - img [ref=e938]
                - generic [ref=e940]: 6,400 m²
              - generic [ref=e941]:
                - img [ref=e942]
                - generic [ref=e944]: Completado en 2024
        - generic [ref=e946]:
          - generic [ref=e947]:
            - generic [ref=e949]:
              - img [ref=e950]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e953] [cursor=pointer]
          - generic [ref=e955]:
            - heading "Hospital Clínica Central" [level=3] [ref=e956]
            - generic [ref=e957]:
              - generic [ref=e958]:
                - img [ref=e959]
                - generic [ref=e962]: Av. Real, Huancayo
              - generic [ref=e963]:
                - img [ref=e964]
                - generic [ref=e966]: 4,600 m²
              - generic [ref=e967]:
                - img [ref=e968]
                - generic [ref=e970]: Completado en 2023
        - generic [ref=e972]:
          - generic [ref=e973]:
            - generic [ref=e975]:
              - img [ref=e976]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e979] [cursor=pointer]
          - generic [ref=e981]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e982]
            - generic [ref=e983]:
              - generic [ref=e984]:
                - img [ref=e985]
                - generic [ref=e988]: San Carlos, Huancayo
              - generic [ref=e989]:
                - img [ref=e990]
                - generic [ref=e992]: 3,200 m²
              - generic [ref=e993]:
                - img [ref=e994]
                - generic [ref=e996]: Completado en 2024
        - generic [ref=e998]:
          - generic [ref=e999]:
            - generic [ref=e1001]:
              - img [ref=e1002]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e1005] [cursor=pointer]
          - generic [ref=e1007]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e1008]
            - generic [ref=e1009]:
              - generic [ref=e1010]:
                - img [ref=e1011]
                - generic [ref=e1014]: Pilcomayo, Huancayo
              - generic [ref=e1015]:
                - img [ref=e1016]
                - generic [ref=e1018]: 7,800 m²
              - generic [ref=e1019]:
                - img [ref=e1020]
                - generic [ref=e1022]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e1025] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e1026]
    - generic [ref=e1031]:
      - generic [ref=e1032]:
        - generic [ref=e1033]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1034]
        - paragraph [ref=e1035]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1036]:
        - generic [ref=e1037]:
          - generic [ref=e1038]:
            - img [ref=e1039]
            - img [ref=e1041]
            - img [ref=e1043]
            - img [ref=e1045]
            - img [ref=e1047]
          - paragraph [ref=e1049]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1050]:
            - img "Carlos Mendoza Pérez" [ref=e1051]
            - generic [ref=e1052]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1053]
              - paragraph [ref=e1054]: Propietario - Torres del Valle
              - paragraph [ref=e1055]: Torres del Valle
        - generic [ref=e1056]:
          - generic [ref=e1057]:
            - img [ref=e1058]
            - img [ref=e1060]
            - img [ref=e1062]
            - img [ref=e1064]
            - img [ref=e1066]
          - paragraph [ref=e1068]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1069]:
            - img "María Elena Rojas" [ref=e1070]
            - generic [ref=e1071]:
              - heading "María Elena Rojas" [level=4] [ref=e1072]
              - paragraph [ref=e1073]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1074]: Plaza Comercial San Carlos
        - generic [ref=e1075]:
          - generic [ref=e1076]:
            - img [ref=e1077]
            - img [ref=e1079]
            - img [ref=e1081]
            - img [ref=e1083]
            - img [ref=e1085]
          - paragraph [ref=e1087]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1088]:
            - img "Roberto Villanueva Castro" [ref=e1089]
            - generic [ref=e1090]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1091]
              - paragraph [ref=e1092]: Director - Colegio Los Andes
              - paragraph [ref=e1093]: Centro Educativo Los Andes
        - generic [ref=e1094]:
          - generic [ref=e1095]:
            - img [ref=e1096]
            - img [ref=e1098]
            - img [ref=e1100]
            - img [ref=e1102]
            - img [ref=e1104]
          - paragraph [ref=e1106]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1107]:
            - img "Ana Lucía Torres" [ref=e1108]
            - generic [ref=e1109]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1110]
              - paragraph [ref=e1111]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1112]: Condominio Los Portales
        - generic [ref=e1113]:
          - generic [ref=e1114]:
            - img [ref=e1115]
            - img [ref=e1117]
            - img [ref=e1119]
            - img [ref=e1121]
            - img [ref=e1123]
          - paragraph [ref=e1125]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1126]:
            - img "Dr. Javier Campos Quispe" [ref=e1127]
            - generic [ref=e1128]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1129]
              - paragraph [ref=e1130]: Director Médico - Clínica Central
              - paragraph [ref=e1131]: Hospital Clínica Central
        - generic [ref=e1132]:
          - generic [ref=e1133]:
            - img [ref=e1134]
            - img [ref=e1136]
            - img [ref=e1138]
            - img [ref=e1140]
            - img [ref=e1142]
          - paragraph [ref=e1144]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1145]:
            - img "Patricia Robles Huamán" [ref=e1146]
            - generic [ref=e1147]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1148]
              - paragraph [ref=e1149]: CEO - Tech Solutions Peru
              - paragraph [ref=e1150]: Oficinas Corporativas Mantaro
      - generic [ref=e1151]:
        - generic [ref=e1152]:
          - generic [ref=e1153]: 98%
          - generic [ref=e1154]: Satisfacción
        - generic [ref=e1155]:
          - generic [ref=e1156]: 250+
          - generic [ref=e1157]: Clientes Felices
        - generic [ref=e1158]:
          - generic [ref=e1159]: 15+
          - generic [ref=e1160]: Años Experiencia
        - generic [ref=e1161]:
          - generic [ref=e1162]: "5.0"
          - generic [ref=e1163]: Calificación
    - generic [ref=e1169]:
      - generic [ref=e1170]:
        - generic [ref=e1171]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1172]
        - paragraph [ref=e1173]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1174]:
        - generic [ref=e1175]:
          - generic [ref=e1177]:
            - img [ref=e1179]
            - generic [ref=e1181]:
              - heading "Ubicación" [level=3] [ref=e1182]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1183] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1185]:
            - img [ref=e1187]
            - generic [ref=e1189]:
              - heading "Teléfono" [level=3] [ref=e1190]
              - link "+51 943 818 788" [ref=e1191] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1193]:
            - img [ref=e1195]
            - generic [ref=e1197]:
              - heading "Email" [level=3] [ref=e1198]
              - link "info@rivamez.com" [ref=e1199] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1201]:
            - img [ref=e1203]
            - generic [ref=e1205]:
              - heading "Horario" [level=3] [ref=e1206]
              - paragraph [ref=e1207]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1210]:
            - img [ref=e1211]
            - paragraph [ref=e1213]: Mapa de ubicación
        - generic [ref=e1215]:
          - generic [ref=e1216]:
            - generic [ref=e1217]:
              - generic [ref=e1218]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1219]
            - generic [ref=e1220]:
              - generic [ref=e1221]: Email *
              - textbox "juan@ejemplo.com" [ref=e1222]
          - generic [ref=e1223]:
            - generic [ref=e1224]:
              - generic [ref=e1225]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1226]
            - generic [ref=e1227]:
              - generic [ref=e1228]: Servicio de Interés *
              - combobox [ref=e1229]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1230]:
            - generic [ref=e1231]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1232]
          - button "Enviar Mensaje" [ref=e1233] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1234]
  - contentinfo [ref=e1236]:
    - generic [ref=e1237]:
      - generic [ref=e1238]:
        - generic [ref=e1239]:
          - generic [ref=e1240]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1241]
            - generic [ref=e1242]:
              - generic [ref=e1243]: GRUPO RIVAMEZ
              - generic [ref=e1244]: Constructora & Inmobiliaria
          - paragraph [ref=e1245]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1246]:
          - heading "Navegación" [level=3] [ref=e1247]
          - list [ref=e1248]:
            - listitem [ref=e1249]:
              - link "Inicio" [ref=e1250] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1251]:
              - link "Proyectos" [ref=e1252] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1253]:
              - link "Servicios" [ref=e1254] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1255]:
              - link "Nosotros" [ref=e1256] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1257]:
              - link "Contacto" [ref=e1258] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1259]:
          - heading "Contacto" [level=3] [ref=e1260]
          - list [ref=e1261]:
            - listitem [ref=e1262]:
              - img [ref=e1263]
              - generic [ref=e1266]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1267]:
              - img [ref=e1268]
              - link "+51 943 818 788" [ref=e1270] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1271]:
              - img [ref=e1272]
              - link "info@rivamez.com" [ref=e1274] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1275]:
          - heading "Síguenos" [level=3] [ref=e1276]
          - generic [ref=e1277]:
            - link [ref=e1278] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1279]
            - link [ref=e1281] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1282]
            - link [ref=e1284] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1285]
      - paragraph [ref=e1288]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos" [ref=e1289] [cursor=pointer]:
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic [ref=e1290]:
      - img [ref=e1293]
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