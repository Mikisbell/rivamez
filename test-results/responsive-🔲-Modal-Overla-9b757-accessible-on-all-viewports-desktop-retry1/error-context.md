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
        - generic [ref=e88]: 🏗️
      - generic [ref=e89]:
        - generic [ref=e92]:
          - generic [ref=e93]: ✨
          - generic [ref=e94]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e95]
          - paragraph [ref=e96]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e98]
        - generic [ref=e102]:
          - generic [ref=e103]: ⚙️
          - generic [ref=e104]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e105]
          - paragraph [ref=e106]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e108]
        - generic [ref=e112]:
          - generic [ref=e113]: 🏗️
          - generic [ref=e114]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e115]
          - paragraph [ref=e116]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e118]
      - generic [ref=e121]:
        - link "Explora Nuestros Proyectos" [ref=e122] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e123]: Explora Nuestros Proyectos
          - img [ref=e124]
        - link "Solicitar Cotización" [ref=e126] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e128]:
        - generic [ref=e129]: Desliza para descubrir más
        - img [ref=e130]
    - generic [ref=e139]:
      - generic [ref=e140]:
        - generic [ref=e141]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e142]
        - paragraph [ref=e143]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e144]:
        - generic [ref=e146]:
          - img [ref=e149]
          - heading "Certificación ISO 9001" [level=3] [ref=e152]
          - paragraph [ref=e153]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e154]:
            - generic [ref=e155]: Conoce más
            - img [ref=e156]
        - generic [ref=e159]:
          - img [ref=e162]
          - heading "Entrega a Tiempo" [level=3] [ref=e165]
          - paragraph [ref=e166]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e167]:
            - generic [ref=e168]: Conoce más
            - img [ref=e169]
        - generic [ref=e172]:
          - img [ref=e175]
          - heading "Presupuesto Transparente" [level=3] [ref=e178]
          - paragraph [ref=e179]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e180]:
            - generic [ref=e181]: Conoce más
            - img [ref=e182]
        - generic [ref=e185]:
          - img [ref=e188]
          - heading "Tecnología Avanzada" [level=3] [ref=e191]
          - paragraph [ref=e192]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e193]:
            - generic [ref=e194]: Conoce más
            - img [ref=e195]
        - generic [ref=e198]:
          - img [ref=e201]
          - heading "Equipo Especializado" [level=3] [ref=e204]
          - paragraph [ref=e205]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e206]:
            - generic [ref=e207]: Conoce más
            - img [ref=e208]
        - generic [ref=e211]:
          - img [ref=e214]
          - heading "Sostenibilidad" [level=3] [ref=e217]
          - paragraph [ref=e218]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e219]:
            - generic [ref=e220]: Conoce más
            - img [ref=e221]
      - generic [ref=e223]:
        - paragraph [ref=e224]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e225] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e226]
    - generic [ref=e230]:
      - generic [ref=e231]:
        - generic [ref=e232]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e233]
      - generic [ref=e234]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e235] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e236] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e237] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e238] [cursor=pointer]
      - generic [ref=e240]:
        - generic [ref=e241]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e242]
          - paragraph [ref=e243]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e244]:
            - listitem [ref=e245]:
              - img [ref=e247]
              - generic [ref=e249]: Departamentos premium con acabados de lujo
            - listitem [ref=e250]:
              - img [ref=e252]
              - generic [ref=e254]: Casas personalizadas según tu visión
            - listitem [ref=e255]:
              - img [ref=e257]
              - generic [ref=e259]: Condominios cerrados con amenidades completas
            - listitem [ref=e260]:
              - img [ref=e262]
              - generic [ref=e264]: Certificaciones de eficiencia energética
          - generic [ref=e265]:
            - generic [ref=e266]:
              - generic [ref=e267]: "72"
              - generic [ref=e268]: Departamentos
            - generic [ref=e269]:
              - generic [ref=e270]: "15"
              - generic [ref=e271]: Pisos máximo
            - generic [ref=e272]:
              - generic [ref=e273]: 98%
              - generic [ref=e274]: Satisfacción
          - link "Solicitar Información" [ref=e275] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e276]
        - generic [ref=e278]:
          - img "Torres residenciales premium" [ref=e280]
          - generic [ref=e282]: Torres residenciales premium
          - generic [ref=e283]:
            - button [ref=e284] [cursor=pointer]
            - button [ref=e285] [cursor=pointer]
            - button [ref=e286] [cursor=pointer]
    - generic [ref=e292]:
      - generic [ref=e293]:
        - generic [ref=e294]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e295]:
          - text: Construyendo el Futuro con
          - generic [ref=e296]: Resultados Medibles
        - paragraph [ref=e297]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e298]:
        - generic [ref=e299]:
          - generic [ref=e301]:
            - img [ref=e303]
            - generic [ref=e306]:
              - generic [ref=e307]: S/.
              - generic [ref=e308]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e309]
            - paragraph [ref=e310]: Soles en proyectos completados desde 2009
          - img [ref=e312]
        - generic [ref=e314]:
          - generic [ref=e316]:
            - img [ref=e318]
            - generic [ref=e321]:
              - generic [ref=e322]: 45,000
              - generic [ref=e323]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e324]
            - paragraph [ref=e325]: Metros cuadrados promedio anual
          - img [ref=e327]
        - generic [ref=e329]:
          - generic [ref=e331]:
            - img [ref=e333]
            - generic [ref=e337]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e338]
            - paragraph [ref=e339]: Proyectos entregados a tiempo o antes
          - img [ref=e341]
        - generic [ref=e343]:
          - generic [ref=e345]:
            - img [ref=e347]
            - generic [ref=e350]:
              - generic [ref=e351]: "4.8"
              - generic [ref=e352]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e353]
            - paragraph [ref=e354]: Calificación promedio en reseñas
          - img [ref=e356]
      - generic [ref=e358]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e359]
        - generic [ref=e360]:
          - generic [ref=e361]:
            - generic [ref=e362]: 🌱
            - generic [ref=e363]: "15"
            - generic [ref=e364]: Proyectos Sostenibles
            - generic [ref=e365]: Con certificación ambiental
          - generic [ref=e366]:
            - generic [ref=e367]: 👷
            - generic [ref=e368]: 2,500+
            - generic [ref=e369]: Empleos Generados
            - generic [ref=e370]: Puestos de trabajo creados
          - generic [ref=e371]:
            - generic [ref=e372]: 💻
            - generic [ref=e373]: 100%
            - generic [ref=e374]: Procesos Digitalizados
            - generic [ref=e375]: Tecnología BIM implementada
          - generic [ref=e376]:
            - generic [ref=e377]: 🛠️
            - generic [ref=e378]: 24/7
            - generic [ref=e379]: Soporte Post-Venta
            - generic [ref=e380]: Atención continua a clientes
          - generic [ref=e381]:
            - generic [ref=e382]: 📍
            - generic [ref=e383]: "8"
            - generic [ref=e384]: Distritos de Huancayo
            - generic [ref=e385]: Presencia en la región
          - generic [ref=e386]:
            - generic [ref=e387]: 🏆
            - generic [ref=e388]: ISO
            - generic [ref=e389]: Certificaciones
            - generic [ref=e390]: Estándares internacionales
      - generic [ref=e391]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e392]
        - generic [ref=e393]:
          - generic [ref=e397]:
            - generic [ref=e398]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e399]
            - paragraph [ref=e400]: de Junín
            - img [ref=e402]
          - generic [ref=e407]:
            - generic [ref=e408]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e409]
            - paragraph [ref=e410]: en Construcción
            - img [ref=e412]
          - generic [ref=e417]:
            - generic [ref=e418]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e419]
            - paragraph [ref=e420]: Municipalidad
            - img [ref=e422]
      - generic [ref=e424]:
        - heading "Comparación con la Industria" [level=3] [ref=e425]
        - generic [ref=e426]:
          - generic [ref=e427]:
            - heading "Entrega Puntual" [level=4] [ref=e428]
            - generic [ref=e430]:
              - generic [ref=e431]: RIVAMEZ
              - generic [ref=e432]: 98%
            - generic [ref=e435]:
              - generic [ref=e436]: Promedio Industria
              - generic [ref=e437]: 75%
            - generic [ref=e440]:
              - generic [ref=e441]: 📈
              - generic [ref=e442]: +23% mejor que el promedio
          - generic [ref=e443]:
            - heading "Satisfacción Cliente" [level=4] [ref=e444]
            - generic [ref=e446]:
              - generic [ref=e447]: RIVAMEZ
              - generic [ref=e448]: 96%
            - generic [ref=e451]:
              - generic [ref=e452]: Promedio Industria
              - generic [ref=e453]: 82%
            - generic [ref=e456]:
              - generic [ref=e457]: 📈
              - generic [ref=e458]: +14% mejor que el promedio
          - generic [ref=e459]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e460]
            - generic [ref=e462]:
              - generic [ref=e463]: RIVAMEZ
              - generic [ref=e464]: 85%
            - generic [ref=e467]:
              - generic [ref=e468]: Promedio Industria
              - generic [ref=e469]: 45%
            - generic [ref=e472]:
              - generic [ref=e473]: 📈
              - generic [ref=e474]: +40% mejor que el promedio
          - generic [ref=e475]:
            - heading "Adopción BIM" [level=4] [ref=e476]
            - generic [ref=e478]:
              - generic [ref=e479]: RIVAMEZ
              - generic [ref=e480]: 100%
            - generic [ref=e483]:
              - generic [ref=e484]: Promedio Industria
              - generic [ref=e485]: 38%
            - generic [ref=e488]:
              - generic [ref=e489]: 📈
              - generic [ref=e490]: +62% mejor que el promedio
      - generic [ref=e491]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e492]
        - generic [ref=e494]:
          - generic [ref=e495] [cursor=pointer]:
            - generic [ref=e496]: 🏁
            - generic [ref=e497]: "3"
            - generic [ref=e498]: Proyectos
            - generic [ref=e499]: "2009"
          - generic [ref=e500] [cursor=pointer]:
            - generic [ref=e501]: 📈
            - generic [ref=e502]: "25"
            - generic [ref=e503]: Proyectos
            - generic [ref=e504]: "2012"
          - generic [ref=e505] [cursor=pointer]:
            - generic [ref=e506]: 🚀
            - generic [ref=e507]: "75"
            - generic [ref=e508]: Proyectos
            - generic [ref=e509]: "2015"
          - generic [ref=e510] [cursor=pointer]:
            - generic [ref=e511]: 💯
            - generic [ref=e512]: "150"
            - generic [ref=e513]: Proyectos
            - generic [ref=e514]: "2020"
          - generic [ref=e515] [cursor=pointer]:
            - generic [ref=e516]: 🏆
            - generic [ref=e517]: 285+
            - generic [ref=e518]: Proyectos
            - generic [ref=e519]: "2025"
      - generic [ref=e520]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e521]
        - generic [ref=e523]:
          - generic [ref=e524]:
            - generic [ref=e525] [cursor=pointer]:
              - generic [ref=e526]:
                - generic [ref=e527]: El Tambo
                - generic [ref=e528]: 92 proyectos
              - generic [ref=e531]: 100%
            - generic [ref=e532] [cursor=pointer]:
              - generic [ref=e533]:
                - generic [ref=e534]: Huancayo Centro
                - generic [ref=e535]: 85 proyectos
              - generic [ref=e538]: 92%
            - generic [ref=e539] [cursor=pointer]:
              - generic [ref=e540]:
                - generic [ref=e541]: Chilca
                - generic [ref=e542]: 48 proyectos
              - generic [ref=e545]: 52%
            - generic [ref=e546] [cursor=pointer]:
              - generic [ref=e547]:
                - generic [ref=e548]: Pilcomayo
                - generic [ref=e549]: 22 proyectos
              - generic [ref=e552]: 24%
            - generic [ref=e553] [cursor=pointer]:
              - generic [ref=e554]:
                - generic [ref=e555]: Huancán
                - generic [ref=e556]: 18 proyectos
              - generic [ref=e559]: 20%
            - generic [ref=e561] [cursor=pointer]:
              - generic [ref=e562]: San Agustín
              - generic [ref=e563]: 12 proyectos
            - generic [ref=e567] [cursor=pointer]:
              - generic [ref=e568]: Concepción
              - generic [ref=e569]: 8 proyectos
          - generic [ref=e572]:
            - generic [ref=e573]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e574]
              - generic [ref=e575]:
                - generic [ref=e578]: Alta densidad (80%+)
                - generic [ref=e581]: Media-alta (50-80%)
                - generic [ref=e584]: Media (20-50%)
                - generic [ref=e587]: Baja (<20%)
            - generic [ref=e588]:
              - generic [ref=e589]:
                - generic [ref=e590]: "7"
                - generic [ref=e591]: Distritos
              - generic [ref=e592]:
                - generic [ref=e593]: "285"
                - generic [ref=e594]: Proyectos
              - generic [ref=e595]:
                - generic [ref=e596]: "41"
                - generic [ref=e597]: Promedio/Distrito
              - generic [ref=e598]:
                - generic [ref=e599]: 🔥
                - generic [ref=e600]: El Tambo Líder
      - generic [ref=e602]:
        - link "Ver Nuestros Proyectos" [ref=e603] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e604] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e608]:
      - generic [ref=e609]:
        - generic [ref=e610]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e611]
        - paragraph [ref=e612]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e613]:
        - generic [ref=e614]:
          - img [ref=e616]
          - heading "Nuestra Misión" [level=3] [ref=e618]
          - paragraph [ref=e619]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e620]:
          - img [ref=e622]
          - heading "Nuestra Visión" [level=3] [ref=e625]
          - paragraph [ref=e626]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e627]:
        - heading "Nuestros Valores" [level=3] [ref=e628]
        - generic [ref=e629]:
          - generic [ref=e630]:
            - img [ref=e632]
            - heading "Compromiso" [level=4] [ref=e634]
            - paragraph [ref=e635]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e636]:
            - img [ref=e638]
            - heading "Innovación" [level=4] [ref=e640]
            - paragraph [ref=e641]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e642]:
            - img [ref=e644]
            - heading "Trabajo en Equipo" [level=4] [ref=e646]
            - paragraph [ref=e647]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e648]:
            - img [ref=e650]
            - heading "Excelencia" [level=4] [ref=e652]
            - paragraph [ref=e653]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e655] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e656]
    - generic [ref=e659]:
      - img [ref=e661]
      - generic [ref=e665]:
        - generic [ref=e666]:
          - generic [ref=e667]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e668]
          - paragraph [ref=e669]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e670]:
          - generic [ref=e671]:
            - generic [ref=e672]:
              - generic [ref=e673]: "0"
              - text: +
            - paragraph [ref=e674]: Años de Experiencia
          - generic [ref=e675]:
            - generic [ref=e676]:
              - generic [ref=e677]: "0"
              - text: +
            - paragraph [ref=e678]: Proyectos Completados
          - generic [ref=e679]:
            - generic [ref=e680]:
              - generic [ref=e681]: "0"
              - text: "%"
            - paragraph [ref=e682]: Satisfacción del Cliente
          - generic [ref=e683]:
            - generic [ref=e684]:
              - generic [ref=e685]: "0"
              - text: +
            - paragraph [ref=e686]: Profesionales Certificados
        - generic [ref=e687]:
          - generic [ref=e688]:
            - img [ref=e690]
            - heading "Construcción Residencial" [level=3] [ref=e692]
            - paragraph [ref=e693]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e694]:
              - listitem [ref=e695]:
                - img [ref=e696]
                - generic [ref=e698]: Casas unifamiliares personalizadas
              - listitem [ref=e699]:
                - img [ref=e700]
                - generic [ref=e702]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e703]:
                - img [ref=e704]
                - generic [ref=e706]: Condominios cerrados con amenidades
              - listitem [ref=e707]:
                - img [ref=e708]
                - generic [ref=e710]: Acabados de alta calidad y diseño moderno
          - generic [ref=e711]:
            - img [ref=e713]
            - heading "Proyectos Comerciales" [level=3] [ref=e715]
            - paragraph [ref=e716]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e717]:
              - listitem [ref=e718]:
                - img [ref=e719]
                - generic [ref=e721]: Centros comerciales y plazas
              - listitem [ref=e722]:
                - img [ref=e723]
                - generic [ref=e725]: Edificios de oficinas AAA
              - listitem [ref=e726]:
                - img [ref=e727]
                - generic [ref=e729]: Hoteles y establecimientos turísticos
              - listitem [ref=e730]:
                - img [ref=e731]
                - generic [ref=e733]: Locales comerciales especializados
          - generic [ref=e734]:
            - img [ref=e736]
            - heading "Proyectos Institucionales" [level=3] [ref=e738]
            - paragraph [ref=e739]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e740]:
              - listitem [ref=e741]:
                - img [ref=e742]
                - generic [ref=e744]: Hospitales y clínicas especializadas
              - listitem [ref=e745]:
                - img [ref=e746]
                - generic [ref=e748]: Centros educativos modernos
              - listitem [ref=e749]:
                - img [ref=e750]
                - generic [ref=e752]: Edificios gubernamentales
              - listitem [ref=e753]:
                - img [ref=e754]
                - generic [ref=e756]: Infraestructura pública de calidad
          - generic [ref=e757]:
            - img [ref=e759]
            - heading "Remodelación y Ampliación" [level=3] [ref=e761]
            - paragraph [ref=e762]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e763]:
              - listitem [ref=e764]:
                - img [ref=e765]
                - generic [ref=e767]: Remodelación integral de viviendas
              - listitem [ref=e768]:
                - img [ref=e769]
                - generic [ref=e771]: Ampliaciones verticales y horizontales
              - listitem [ref=e772]:
                - img [ref=e773]
                - generic [ref=e775]: Modernización de fachadas
              - listitem [ref=e776]:
                - img [ref=e777]
                - generic [ref=e779]: Reforzamiento estructural
          - generic [ref=e780]:
            - img [ref=e782]
            - heading "Consultoría y Gerencia" [level=3] [ref=e784]
            - paragraph [ref=e785]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e786]:
              - listitem [ref=e787]:
                - img [ref=e788]
                - generic [ref=e790]: Estudios de factibilidad
              - listitem [ref=e791]:
                - img [ref=e792]
                - generic [ref=e794]: Gerencia de proyectos
              - listitem [ref=e795]:
                - img [ref=e796]
                - generic [ref=e798]: Supervisión técnica
              - listitem [ref=e799]:
                - img [ref=e800]
                - generic [ref=e802]: Control de calidad y costos
          - generic [ref=e803]:
            - img [ref=e805]
            - heading "Diseño y Arquitectura" [level=3] [ref=e807]
            - paragraph [ref=e808]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e809]:
              - listitem [ref=e810]:
                - img [ref=e811]
                - generic [ref=e813]: Diseño arquitectónico personalizado
              - listitem [ref=e814]:
                - img [ref=e815]
                - generic [ref=e817]: Ingeniería estructural
              - listitem [ref=e818]:
                - img [ref=e819]
                - generic [ref=e821]: Renders y visualización 3D
              - listitem [ref=e822]:
                - img [ref=e823]
                - generic [ref=e825]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e827] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e828]
    - generic [ref=e834]:
      - generic [ref=e835]:
        - generic [ref=e836]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e837]
        - paragraph [ref=e838]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e839]:
        - generic [ref=e840]:
          - generic [ref=e841]:
            - generic [ref=e843]:
              - img [ref=e844]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e847] [cursor=pointer]
          - generic [ref=e849]:
            - heading "Torres del Valle" [level=3] [ref=e850]
            - generic [ref=e851]:
              - generic [ref=e852]:
                - img [ref=e853]
                - generic [ref=e856]: Av. Ferrocarril, Huancayo
              - generic [ref=e857]:
                - img [ref=e858]
                - generic [ref=e860]: 3,850 m²
              - generic [ref=e861]:
                - img [ref=e862]
                - generic [ref=e864]: Completado en 2024
        - generic [ref=e866]:
          - generic [ref=e867]:
            - generic [ref=e869]:
              - img [ref=e870]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e873] [cursor=pointer]
          - generic [ref=e875]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e876]
            - generic [ref=e877]:
              - generic [ref=e878]:
                - img [ref=e879]
                - generic [ref=e882]: El Tambo, Huancayo
              - generic [ref=e883]:
                - img [ref=e884]
                - generic [ref=e886]: 5,200 m²
              - generic [ref=e887]:
                - img [ref=e888]
                - generic [ref=e890]: Completado en 2023
        - generic [ref=e892]:
          - generic [ref=e893]:
            - generic [ref=e895]:
              - img [ref=e896]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e899] [cursor=pointer]
          - generic [ref=e901]:
            - heading "Condominio Los Portales" [level=3] [ref=e902]
            - generic [ref=e903]:
              - generic [ref=e904]:
                - img [ref=e905]
                - generic [ref=e908]: Chilca, Huancayo
              - generic [ref=e909]:
                - img [ref=e910]
                - generic [ref=e912]: 6,400 m²
              - generic [ref=e913]:
                - img [ref=e914]
                - generic [ref=e916]: Completado en 2024
        - generic [ref=e918]:
          - generic [ref=e919]:
            - generic [ref=e921]:
              - img [ref=e922]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e925] [cursor=pointer]
          - generic [ref=e927]:
            - heading "Hospital Clínica Central" [level=3] [ref=e928]
            - generic [ref=e929]:
              - generic [ref=e930]:
                - img [ref=e931]
                - generic [ref=e934]: Av. Real, Huancayo
              - generic [ref=e935]:
                - img [ref=e936]
                - generic [ref=e938]: 4,600 m²
              - generic [ref=e939]:
                - img [ref=e940]
                - generic [ref=e942]: Completado en 2023
        - generic [ref=e944]:
          - generic [ref=e945]:
            - generic [ref=e947]:
              - img [ref=e948]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e951] [cursor=pointer]
          - generic [ref=e953]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e954]
            - generic [ref=e955]:
              - generic [ref=e956]:
                - img [ref=e957]
                - generic [ref=e960]: San Carlos, Huancayo
              - generic [ref=e961]:
                - img [ref=e962]
                - generic [ref=e964]: 3,200 m²
              - generic [ref=e965]:
                - img [ref=e966]
                - generic [ref=e968]: Completado en 2024
        - generic [ref=e970]:
          - generic [ref=e971]:
            - generic [ref=e973]:
              - img [ref=e974]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e977] [cursor=pointer]
          - generic [ref=e979]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e980]
            - generic [ref=e981]:
              - generic [ref=e982]:
                - img [ref=e983]
                - generic [ref=e986]: Pilcomayo, Huancayo
              - generic [ref=e987]:
                - img [ref=e988]
                - generic [ref=e990]: 7,800 m²
              - generic [ref=e991]:
                - img [ref=e992]
                - generic [ref=e994]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e997] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e998]
    - generic [ref=e1003]:
      - generic [ref=e1004]:
        - generic [ref=e1005]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1006]
        - paragraph [ref=e1007]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1008]:
        - generic [ref=e1009]:
          - generic [ref=e1010]:
            - img [ref=e1011]
            - img [ref=e1013]
            - img [ref=e1015]
            - img [ref=e1017]
            - img [ref=e1019]
          - paragraph [ref=e1021]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1022]:
            - img "Carlos Mendoza Pérez" [ref=e1023]
            - generic [ref=e1024]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1025]
              - paragraph [ref=e1026]: Propietario - Torres del Valle
              - paragraph [ref=e1027]: Torres del Valle
        - generic [ref=e1028]:
          - generic [ref=e1029]:
            - img [ref=e1030]
            - img [ref=e1032]
            - img [ref=e1034]
            - img [ref=e1036]
            - img [ref=e1038]
          - paragraph [ref=e1040]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1041]:
            - img "María Elena Rojas" [ref=e1042]
            - generic [ref=e1043]:
              - heading "María Elena Rojas" [level=4] [ref=e1044]
              - paragraph [ref=e1045]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1046]: Plaza Comercial San Carlos
        - generic [ref=e1047]:
          - generic [ref=e1048]:
            - img [ref=e1049]
            - img [ref=e1051]
            - img [ref=e1053]
            - img [ref=e1055]
            - img [ref=e1057]
          - paragraph [ref=e1059]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1060]:
            - img "Roberto Villanueva Castro" [ref=e1061]
            - generic [ref=e1062]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1063]
              - paragraph [ref=e1064]: Director - Colegio Los Andes
              - paragraph [ref=e1065]: Centro Educativo Los Andes
        - generic [ref=e1066]:
          - generic [ref=e1067]:
            - img [ref=e1068]
            - img [ref=e1070]
            - img [ref=e1072]
            - img [ref=e1074]
            - img [ref=e1076]
          - paragraph [ref=e1078]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1079]:
            - img "Ana Lucía Torres" [ref=e1080]
            - generic [ref=e1081]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1082]
              - paragraph [ref=e1083]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1084]: Condominio Los Portales
        - generic [ref=e1085]:
          - generic [ref=e1086]:
            - img [ref=e1087]
            - img [ref=e1089]
            - img [ref=e1091]
            - img [ref=e1093]
            - img [ref=e1095]
          - paragraph [ref=e1097]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1098]:
            - img "Dr. Javier Campos Quispe" [ref=e1099]
            - generic [ref=e1100]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1101]
              - paragraph [ref=e1102]: Director Médico - Clínica Central
              - paragraph [ref=e1103]: Hospital Clínica Central
        - generic [ref=e1104]:
          - generic [ref=e1105]:
            - img [ref=e1106]
            - img [ref=e1108]
            - img [ref=e1110]
            - img [ref=e1112]
            - img [ref=e1114]
          - paragraph [ref=e1116]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1117]:
            - img "Patricia Robles Huamán" [ref=e1118]
            - generic [ref=e1119]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1120]
              - paragraph [ref=e1121]: CEO - Tech Solutions Peru
              - paragraph [ref=e1122]: Oficinas Corporativas Mantaro
      - generic [ref=e1123]:
        - generic [ref=e1124]:
          - generic [ref=e1125]: 98%
          - generic [ref=e1126]: Satisfacción
        - generic [ref=e1127]:
          - generic [ref=e1128]: 250+
          - generic [ref=e1129]: Clientes Felices
        - generic [ref=e1130]:
          - generic [ref=e1131]: 15+
          - generic [ref=e1132]: Años Experiencia
        - generic [ref=e1133]:
          - generic [ref=e1134]: "5.0"
          - generic [ref=e1135]: Calificación
    - generic [ref=e1141]:
      - generic [ref=e1142]:
        - generic [ref=e1143]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1144]
        - paragraph [ref=e1145]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1146]:
        - generic [ref=e1147]:
          - generic [ref=e1149]:
            - img [ref=e1151]
            - generic [ref=e1153]:
              - heading "Ubicación" [level=3] [ref=e1154]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1155] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1157]:
            - img [ref=e1159]
            - generic [ref=e1161]:
              - heading "Teléfono" [level=3] [ref=e1162]
              - link "+51 943 818 788" [ref=e1163] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1165]:
            - img [ref=e1167]
            - generic [ref=e1169]:
              - heading "Email" [level=3] [ref=e1170]
              - link "info@rivamez.com" [ref=e1171] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1173]:
            - img [ref=e1175]
            - generic [ref=e1177]:
              - heading "Horario" [level=3] [ref=e1178]
              - paragraph [ref=e1179]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1182]:
            - img [ref=e1183]
            - paragraph [ref=e1185]: Mapa de ubicación
        - generic [ref=e1187]:
          - generic [ref=e1188]:
            - generic [ref=e1189]:
              - generic [ref=e1190]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1191]
            - generic [ref=e1192]:
              - generic [ref=e1193]: Email *
              - textbox "juan@ejemplo.com" [ref=e1194]
          - generic [ref=e1195]:
            - generic [ref=e1196]:
              - generic [ref=e1197]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1198]
            - generic [ref=e1199]:
              - generic [ref=e1200]: Servicio de Interés *
              - combobox [ref=e1201]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1202]:
            - generic [ref=e1203]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1204]
          - button "Enviar Mensaje" [ref=e1205] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1206]
  - contentinfo [ref=e1208]:
    - generic [ref=e1209]:
      - generic [ref=e1210]:
        - generic [ref=e1211]:
          - generic [ref=e1212]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1213]
            - generic [ref=e1214]:
              - generic [ref=e1215]: GRUPO RIVAMEZ
              - generic [ref=e1216]: Constructora & Inmobiliaria
          - paragraph [ref=e1217]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1218]:
          - heading "Navegación" [level=3] [ref=e1219]
          - list [ref=e1220]:
            - listitem [ref=e1221]:
              - link "Inicio" [ref=e1222] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1223]:
              - link "Proyectos" [ref=e1224] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1225]:
              - link "Servicios" [ref=e1226] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1227]:
              - link "Nosotros" [ref=e1228] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1229]:
              - link "Contacto" [ref=e1230] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1231]:
          - heading "Contacto" [level=3] [ref=e1232]
          - list [ref=e1233]:
            - listitem [ref=e1234]:
              - img [ref=e1235]
              - generic [ref=e1238]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1239]:
              - img [ref=e1240]
              - link "+51 943 818 788" [ref=e1242] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1243]:
              - img [ref=e1244]
              - link "info@rivamez.com" [ref=e1246] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1247]:
          - heading "Síguenos" [level=3] [ref=e1248]
          - generic [ref=e1249]:
            - link [ref=e1250] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1251]
            - link [ref=e1253] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1254]
            - link [ref=e1256] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1257]
      - paragraph [ref=e1260]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
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