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
          - generic:
            - generic:
              - generic:
                - generic:
                  - generic: ✨
                  - generic:
                    - generic: EXPERIENCIA
                    - heading "Acabados Premium" [level=3]
                - generic: "3"
        - generic [ref=e123]: 🏗️
      - generic [ref=e124]:
        - generic [ref=e127]:
          - generic [ref=e128]: ✨
          - generic [ref=e129]: EXPERIENCIA
          - heading "Acabados Premium" [level=3] [ref=e130]
          - paragraph [ref=e131]: Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.
          - img [ref=e133]
        - generic [ref=e137]:
          - generic [ref=e138]: ⚙️
          - generic [ref=e139]: DESARROLLO
          - heading "Construcción + Tecnología" [level=3] [ref=e140]
          - paragraph [ref=e141]: Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.
          - img [ref=e143]
        - generic [ref=e147]:
          - generic [ref=e148]: 🏗️
          - generic [ref=e149]: FUNDAMENTOS
          - heading "Base Sólida" [level=3] [ref=e150]
          - paragraph [ref=e151]: Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.
          - img [ref=e153]
      - generic [ref=e156]:
        - link "Explora Nuestros Proyectos" [ref=e157] [cursor=pointer]:
          - /url: "#proyectos"
          - generic [ref=e158]: Explora Nuestros Proyectos
          - img [ref=e159]
        - link "Solicitar Cotización" [ref=e161] [cursor=pointer]:
          - /url: "#contacto"
      - generic [ref=e163]:
        - generic [ref=e164]: Desliza para descubrir más
        - img [ref=e165]
    - generic [ref=e174]:
      - generic [ref=e175]:
        - generic [ref=e176]: ¿POR QUÉ ELEGIRNOS?
        - heading "Compromiso con la Excelencia" [level=2] [ref=e177]
        - paragraph [ref=e178]: Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
      - generic [ref=e179]:
        - generic [ref=e181]:
          - img [ref=e184]
          - heading "Certificación ISO 9001" [level=3] [ref=e187]
          - paragraph [ref=e188]: Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.
          - generic [ref=e189]:
            - generic [ref=e190]: Conoce más
            - img [ref=e191]
        - generic [ref=e194]:
          - img [ref=e197]
          - heading "Entrega a Tiempo" [level=3] [ref=e200]
          - paragraph [ref=e201]: Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.
          - generic [ref=e202]:
            - generic [ref=e203]: Conoce más
            - img [ref=e204]
        - generic [ref=e207]:
          - img [ref=e210]
          - heading "Presupuesto Transparente" [level=3] [ref=e213]
          - paragraph [ref=e214]: Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.
          - generic [ref=e215]:
            - generic [ref=e216]: Conoce más
            - img [ref=e217]
        - generic [ref=e220]:
          - img [ref=e223]
          - heading "Tecnología Avanzada" [level=3] [ref=e226]
          - paragraph [ref=e227]: Utilizamos BIM, drones y software de última generación para optimizar cada fase.
          - generic [ref=e228]:
            - generic [ref=e229]: Conoce más
            - img [ref=e230]
        - generic [ref=e233]:
          - img [ref=e236]
          - heading "Equipo Especializado" [level=3] [ref=e239]
          - paragraph [ref=e240]: 62+ profesionales certificados con experiencia en proyectos de gran envergadura.
          - generic [ref=e241]:
            - generic [ref=e242]: Conoce más
            - img [ref=e243]
        - generic [ref=e246]:
          - img [ref=e249]
          - heading "Sostenibilidad" [level=3] [ref=e252]
          - paragraph [ref=e253]: Construcciones ecoeficientes con certificación LEED y compromiso ambiental.
          - generic [ref=e254]:
            - generic [ref=e255]: Conoce más
            - img [ref=e256]
      - generic [ref=e258]:
        - paragraph [ref=e259]: ¿Listo para iniciar tu proyecto con nosotros?
        - link "Solicita una Cotización Gratuita" [ref=e260] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e261]
    - generic [ref=e265]:
      - generic [ref=e266]:
        - generic [ref=e267]: NUESTRAS ESPECIALIDADES
        - heading "Soluciones de Construcción a tu Medida" [level=2] [ref=e268]
      - generic [ref=e269]:
        - button "CONSTRUCCIÓN RESIDENCIAL" [ref=e270] [cursor=pointer]
        - button "PROYECTOS COMERCIALES" [ref=e271] [cursor=pointer]
        - button "PROYECTOS INSTITUCIONALES" [ref=e272] [cursor=pointer]
        - button "REMODELACIÓN Y AMPLIACIÓN" [ref=e273] [cursor=pointer]
      - generic [ref=e275]:
        - generic [ref=e276]:
          - heading "Viviendas de Lujo y Edificios Multifamiliares" [level=3] [ref=e277]
          - paragraph [ref=e278]: Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.
          - list [ref=e279]:
            - listitem [ref=e280]:
              - img [ref=e282]
              - generic [ref=e284]: Departamentos premium con acabados de lujo
            - listitem [ref=e285]:
              - img [ref=e287]
              - generic [ref=e289]: Casas personalizadas según tu visión
            - listitem [ref=e290]:
              - img [ref=e292]
              - generic [ref=e294]: Condominios cerrados con amenidades completas
            - listitem [ref=e295]:
              - img [ref=e297]
              - generic [ref=e299]: Certificaciones de eficiencia energética
          - generic [ref=e300]:
            - generic [ref=e301]:
              - generic [ref=e302]: "72"
              - generic [ref=e303]: Departamentos
            - generic [ref=e304]:
              - generic [ref=e305]: "15"
              - generic [ref=e306]: Pisos máximo
            - generic [ref=e307]:
              - generic [ref=e308]: 98%
              - generic [ref=e309]: Satisfacción
          - link "Solicitar Información" [ref=e310] [cursor=pointer]:
            - /url: "#contacto"
            - text: Solicitar Información
            - img [ref=e311]
        - generic [ref=e313]:
          - img "Torres residenciales premium" [ref=e315]
          - generic [ref=e317]: Casas de lujo personalizadas
          - generic [ref=e318]:
            - button [ref=e319] [cursor=pointer]
            - button [ref=e320] [cursor=pointer]
            - button [ref=e321] [cursor=pointer]
    - generic [ref=e327]:
      - generic [ref=e328]:
        - generic [ref=e329]: NUESTRO IMPACTO
        - heading "Construyendo el Futuro con Resultados Medibles" [level=2] [ref=e330]:
          - text: Construyendo el Futuro con
          - generic [ref=e331]: Resultados Medibles
        - paragraph [ref=e332]: Más de 15 años transformando Huancayo con proyectos que generan valor real para nuestros clientes y la comunidad.
      - generic [ref=e333]:
        - generic [ref=e334]:
          - generic [ref=e336]:
            - img [ref=e338]
            - generic [ref=e341]:
              - generic [ref=e342]: S/.
              - generic [ref=e343]: 150M+
            - heading "En Inversión Ejecutada" [level=4] [ref=e344]
            - paragraph [ref=e345]: Soles en proyectos completados desde 2009
          - img [ref=e347]
        - generic [ref=e349]:
          - generic [ref=e351]:
            - img [ref=e353]
            - generic [ref=e356]:
              - generic [ref=e357]: 45,000
              - generic [ref=e358]: m²
            - heading "m² Construidos/Año" [level=4] [ref=e359]
            - paragraph [ref=e360]: Metros cuadrados promedio anual
          - img [ref=e362]
        - generic [ref=e364]:
          - generic [ref=e366]:
            - img [ref=e368]
            - generic [ref=e372]: 98%
            - heading "Entregas Puntuales" [level=4] [ref=e373]
            - paragraph [ref=e374]: Proyectos entregados a tiempo o antes
          - img [ref=e376]
        - generic [ref=e378]:
          - generic [ref=e380]:
            - img [ref=e382]
            - generic [ref=e385]:
              - generic [ref=e386]: "4.8"
              - generic [ref=e387]: /5
            - heading "Satisfacción del Cliente" [level=4] [ref=e388]
            - paragraph [ref=e389]: Calificación promedio en reseñas
          - img [ref=e391]
      - generic [ref=e393]:
        - heading "Más Números que Nos Definen" [level=3] [ref=e394]
        - generic [ref=e395]:
          - generic [ref=e396]:
            - generic [ref=e397]: 🌱
            - generic [ref=e398]: "15"
            - generic [ref=e399]: Proyectos Sostenibles
            - generic [ref=e400]: Con certificación ambiental
          - generic [ref=e401]:
            - generic [ref=e402]: 👷
            - generic [ref=e403]: 2,500+
            - generic [ref=e404]: Empleos Generados
            - generic [ref=e405]: Puestos de trabajo creados
          - generic [ref=e406]:
            - generic [ref=e407]: 💻
            - generic [ref=e408]: 100%
            - generic [ref=e409]: Procesos Digitalizados
            - generic [ref=e410]: Tecnología BIM implementada
          - generic [ref=e411]:
            - generic [ref=e412]: 🛠️
            - generic [ref=e413]: 24/7
            - generic [ref=e414]: Soporte Post-Venta
            - generic [ref=e415]: Atención continua a clientes
          - generic [ref=e416]:
            - generic [ref=e417]: 📍
            - generic [ref=e418]: "8"
            - generic [ref=e419]: Distritos de Huancayo
            - generic [ref=e420]: Presencia en la región
          - generic [ref=e421]:
            - generic [ref=e422]: 🏆
            - generic [ref=e423]: ISO
            - generic [ref=e424]: Certificaciones
            - generic [ref=e425]: Estándares internacionales
      - generic [ref=e426]:
        - heading "Reconocimientos Recientes" [level=3] [ref=e427]
        - generic [ref=e428]:
          - generic [ref=e432]:
            - generic [ref=e433]: "2023"
            - heading "Mayor Constructora" [level=4] [ref=e434]
            - paragraph [ref=e435]: de Junín
            - img [ref=e437]
          - generic [ref=e442]:
            - generic [ref=e443]: "2022"
            - heading "Premio Excelencia" [level=4] [ref=e444]
            - paragraph [ref=e445]: en Construcción
            - img [ref=e447]
          - generic [ref=e452]:
            - generic [ref=e453]: "2021"
            - heading "Reconocimiento" [level=4] [ref=e454]
            - paragraph [ref=e455]: Municipalidad
            - img [ref=e457]
      - generic [ref=e459]:
        - heading "Comparación con la Industria" [level=3] [ref=e460]
        - generic [ref=e461]:
          - generic [ref=e462]:
            - heading "Entrega Puntual" [level=4] [ref=e463]
            - generic [ref=e465]:
              - generic [ref=e466]: RIVAMEZ
              - generic [ref=e467]: 98%
            - generic [ref=e470]:
              - generic [ref=e471]: Promedio Industria
              - generic [ref=e472]: 75%
            - generic [ref=e475]:
              - generic [ref=e476]: 📈
              - generic [ref=e477]: +23% mejor que el promedio
          - generic [ref=e478]:
            - heading "Satisfacción Cliente" [level=4] [ref=e479]
            - generic [ref=e481]:
              - generic [ref=e482]: RIVAMEZ
              - generic [ref=e483]: 96%
            - generic [ref=e486]:
              - generic [ref=e487]: Promedio Industria
              - generic [ref=e488]: 82%
            - generic [ref=e491]:
              - generic [ref=e492]: 📈
              - generic [ref=e493]: +14% mejor que el promedio
          - generic [ref=e494]:
            - heading "Proyectos Sostenibles" [level=4] [ref=e495]
            - generic [ref=e497]:
              - generic [ref=e498]: RIVAMEZ
              - generic [ref=e499]: 85%
            - generic [ref=e502]:
              - generic [ref=e503]: Promedio Industria
              - generic [ref=e504]: 45%
            - generic [ref=e507]:
              - generic [ref=e508]: 📈
              - generic [ref=e509]: +40% mejor que el promedio
          - generic [ref=e510]:
            - heading "Adopción BIM" [level=4] [ref=e511]
            - generic [ref=e513]:
              - generic [ref=e514]: RIVAMEZ
              - generic [ref=e515]: 100%
            - generic [ref=e518]:
              - generic [ref=e519]: Promedio Industria
              - generic [ref=e520]: 38%
            - generic [ref=e523]:
              - generic [ref=e524]: 📈
              - generic [ref=e525]: +62% mejor que el promedio
      - generic [ref=e526]:
        - heading "Hitos de Crecimiento" [level=3] [ref=e527]
        - generic [ref=e529]:
          - generic [ref=e530] [cursor=pointer]:
            - generic [ref=e531]: 🏁
            - generic [ref=e532]: "3"
            - generic [ref=e533]: Proyectos
            - generic [ref=e534]: "2009"
          - generic [ref=e535] [cursor=pointer]:
            - generic [ref=e536]: 📈
            - generic [ref=e537]: "25"
            - generic [ref=e538]: Proyectos
            - generic [ref=e539]: "2012"
          - generic [ref=e540] [cursor=pointer]:
            - generic [ref=e541]: 🚀
            - generic [ref=e542]: "75"
            - generic [ref=e543]: Proyectos
            - generic [ref=e544]: "2015"
          - generic [ref=e545] [cursor=pointer]:
            - generic [ref=e546]: 💯
            - generic [ref=e547]: "150"
            - generic [ref=e548]: Proyectos
            - generic [ref=e549]: "2020"
          - generic [ref=e550] [cursor=pointer]:
            - generic [ref=e551]: 🏆
            - generic [ref=e552]: 285+
            - generic [ref=e553]: Proyectos
            - generic [ref=e554]: "2025"
      - generic [ref=e555]:
        - heading "Densidad de Proyectos en Huancayo" [level=3] [ref=e556]
        - generic [ref=e558]:
          - generic [ref=e559]:
            - generic [ref=e560] [cursor=pointer]:
              - generic [ref=e561]:
                - generic [ref=e562]: El Tambo
                - generic [ref=e563]: 92 proyectos
              - generic [ref=e566]: 100%
            - generic [ref=e567] [cursor=pointer]:
              - generic [ref=e568]:
                - generic [ref=e569]: Huancayo Centro
                - generic [ref=e570]: 85 proyectos
              - generic [ref=e573]: 92%
            - generic [ref=e574] [cursor=pointer]:
              - generic [ref=e575]:
                - generic [ref=e576]: Chilca
                - generic [ref=e577]: 48 proyectos
              - generic [ref=e580]: 52%
            - generic [ref=e581] [cursor=pointer]:
              - generic [ref=e582]:
                - generic [ref=e583]: Pilcomayo
                - generic [ref=e584]: 22 proyectos
              - generic [ref=e587]: 24%
            - generic [ref=e588] [cursor=pointer]:
              - generic [ref=e589]:
                - generic [ref=e590]: Huancán
                - generic [ref=e591]: 18 proyectos
              - generic [ref=e594]: 20%
            - generic [ref=e596] [cursor=pointer]:
              - generic [ref=e597]: San Agustín
              - generic [ref=e598]: 12 proyectos
            - generic [ref=e602] [cursor=pointer]:
              - generic [ref=e603]: Concepción
              - generic [ref=e604]: 8 proyectos
          - generic [ref=e607]:
            - generic [ref=e608]:
              - heading "📊 Análisis de Densidad" [level=4] [ref=e609]
              - generic [ref=e610]:
                - generic [ref=e613]: Alta densidad (80%+)
                - generic [ref=e616]: Media-alta (50-80%)
                - generic [ref=e619]: Media (20-50%)
                - generic [ref=e622]: Baja (<20%)
            - generic [ref=e623]:
              - generic [ref=e624]:
                - generic [ref=e625]: "7"
                - generic [ref=e626]: Distritos
              - generic [ref=e627]:
                - generic [ref=e628]: "285"
                - generic [ref=e629]: Proyectos
              - generic [ref=e630]:
                - generic [ref=e631]: "41"
                - generic [ref=e632]: Promedio/Distrito
              - generic [ref=e633]:
                - generic [ref=e634]: 🔥
                - generic [ref=e635]: El Tambo Líder
      - generic [ref=e637]:
        - link "Ver Nuestros Proyectos" [ref=e638] [cursor=pointer]:
          - /url: /proyectos
        - link "Solicitar Cotización" [ref=e639] [cursor=pointer]:
          - /url: "#contacto"
    - generic [ref=e643]:
      - generic [ref=e644]:
        - generic [ref=e645]: QUIÉNES SOMOS
        - heading "Construyendo el Futuro de Huancayo" [level=2] [ref=e646]
        - paragraph [ref=e647]: Con más de 15 años de experiencia, somos líderes en el desarrollo de proyectos residenciales y comerciales en la región central del Perú.
      - generic [ref=e648]:
        - generic [ref=e649]:
          - img [ref=e651]
          - heading "Nuestra Misión" [level=3] [ref=e653]
          - paragraph [ref=e654]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo.
        - generic [ref=e655]:
          - img [ref=e657]
          - heading "Nuestra Visión" [level=3] [ref=e660]
          - paragraph [ref=e661]: Ser la empresa constructora e inmobiliaria líder en la región central del Perú, reconocida por nuestra innovación, calidad excepcional y compromiso inquebrantable con el desarrollo sostenible.
      - generic [ref=e662]:
        - heading "Nuestros Valores" [level=3] [ref=e663]
        - generic [ref=e664]:
          - generic [ref=e665]:
            - img [ref=e667]
            - heading "Compromiso" [level=4] [ref=e669]
            - paragraph [ref=e670]: Cumplimos lo que prometemos, entregando proyectos en tiempo y forma con los más altos estándares.
          - generic [ref=e671]:
            - img [ref=e673]
            - heading "Innovación" [level=4] [ref=e675]
            - paragraph [ref=e676]: Aplicamos tecnología de punta y métodos constructivos modernos para resultados superiores.
          - generic [ref=e677]:
            - img [ref=e679]
            - heading "Trabajo en Equipo" [level=4] [ref=e681]
            - paragraph [ref=e682]: Colaboramos estrechamente con clientes y socios para garantizar el éxito de cada proyecto.
          - generic [ref=e683]:
            - img [ref=e685]
            - heading "Excelencia" [level=4] [ref=e687]
            - paragraph [ref=e688]: Buscamos la perfección en cada detalle, desde el diseño hasta la entrega final del proyecto.
      - link "Trabajemos Juntos" [ref=e690] [cursor=pointer]:
        - /url: "#contacto"
        - text: Trabajemos Juntos
        - img [ref=e691]
    - generic [ref=e694]:
      - img [ref=e696]
      - generic [ref=e700]:
        - generic [ref=e701]:
          - generic [ref=e702]: SERVICIOS PROFESIONALES
          - heading "Soluciones Integrales de Construcción" [level=2] [ref=e703]
          - paragraph [ref=e704]: Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
        - generic [ref=e705]:
          - generic [ref=e706]:
            - generic [ref=e707]:
              - generic [ref=e708]: "0"
              - text: +
            - paragraph [ref=e709]: Años de Experiencia
          - generic [ref=e710]:
            - generic [ref=e711]:
              - generic [ref=e712]: "0"
              - text: +
            - paragraph [ref=e713]: Proyectos Completados
          - generic [ref=e714]:
            - generic [ref=e715]:
              - generic [ref=e716]: "0"
              - text: "%"
            - paragraph [ref=e717]: Satisfacción del Cliente
          - generic [ref=e718]:
            - generic [ref=e719]:
              - generic [ref=e720]: "0"
              - text: +
            - paragraph [ref=e721]: Profesionales Certificados
        - generic [ref=e722]:
          - generic [ref=e723]:
            - img [ref=e725]
            - heading "Construcción Residencial" [level=3] [ref=e727]
            - paragraph [ref=e728]: Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.
            - list [ref=e729]:
              - listitem [ref=e730]:
                - img [ref=e731]
                - generic [ref=e733]: Casas unifamiliares personalizadas
              - listitem [ref=e734]:
                - img [ref=e735]
                - generic [ref=e737]: Edificios multifamiliares de hasta 15 pisos
              - listitem [ref=e738]:
                - img [ref=e739]
                - generic [ref=e741]: Condominios cerrados con amenidades
              - listitem [ref=e742]:
                - img [ref=e743]
                - generic [ref=e745]: Acabados de alta calidad y diseño moderno
          - generic [ref=e746]:
            - img [ref=e748]
            - heading "Proyectos Comerciales" [level=3] [ref=e750]
            - paragraph [ref=e751]: Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.
            - list [ref=e752]:
              - listitem [ref=e753]:
                - img [ref=e754]
                - generic [ref=e756]: Centros comerciales y plazas
              - listitem [ref=e757]:
                - img [ref=e758]
                - generic [ref=e760]: Edificios de oficinas AAA
              - listitem [ref=e761]:
                - img [ref=e762]
                - generic [ref=e764]: Hoteles y establecimientos turísticos
              - listitem [ref=e765]:
                - img [ref=e766]
                - generic [ref=e768]: Locales comerciales especializados
          - generic [ref=e769]:
            - img [ref=e771]
            - heading "Proyectos Institucionales" [level=3] [ref=e773]
            - paragraph [ref=e774]: Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.
            - list [ref=e775]:
              - listitem [ref=e776]:
                - img [ref=e777]
                - generic [ref=e779]: Hospitales y clínicas especializadas
              - listitem [ref=e780]:
                - img [ref=e781]
                - generic [ref=e783]: Centros educativos modernos
              - listitem [ref=e784]:
                - img [ref=e785]
                - generic [ref=e787]: Edificios gubernamentales
              - listitem [ref=e788]:
                - img [ref=e789]
                - generic [ref=e791]: Infraestructura pública de calidad
          - generic [ref=e792]:
            - img [ref=e794]
            - heading "Remodelación y Ampliación" [level=3] [ref=e796]
            - paragraph [ref=e797]: Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.
            - list [ref=e798]:
              - listitem [ref=e799]:
                - img [ref=e800]
                - generic [ref=e802]: Remodelación integral de viviendas
              - listitem [ref=e803]:
                - img [ref=e804]
                - generic [ref=e806]: Ampliaciones verticales y horizontales
              - listitem [ref=e807]:
                - img [ref=e808]
                - generic [ref=e810]: Modernización de fachadas
              - listitem [ref=e811]:
                - img [ref=e812]
                - generic [ref=e814]: Reforzamiento estructural
          - generic [ref=e815]:
            - img [ref=e817]
            - heading "Consultoría y Gerencia" [level=3] [ref=e819]
            - paragraph [ref=e820]: Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.
            - list [ref=e821]:
              - listitem [ref=e822]:
                - img [ref=e823]
                - generic [ref=e825]: Estudios de factibilidad
              - listitem [ref=e826]:
                - img [ref=e827]
                - generic [ref=e829]: Gerencia de proyectos
              - listitem [ref=e830]:
                - img [ref=e831]
                - generic [ref=e833]: Supervisión técnica
              - listitem [ref=e834]:
                - img [ref=e835]
                - generic [ref=e837]: Control de calidad y costos
          - generic [ref=e838]:
            - img [ref=e840]
            - heading "Diseño y Arquitectura" [level=3] [ref=e842]
            - paragraph [ref=e843]: Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.
            - list [ref=e844]:
              - listitem [ref=e845]:
                - img [ref=e846]
                - generic [ref=e848]: Diseño arquitectónico personalizado
              - listitem [ref=e849]:
                - img [ref=e850]
                - generic [ref=e852]: Ingeniería estructural
              - listitem [ref=e853]:
                - img [ref=e854]
                - generic [ref=e856]: Renders y visualización 3D
              - listitem [ref=e857]:
                - img [ref=e858]
                - generic [ref=e860]: Planos y especificaciones técnicas
        - link "Solicita una Cotización Gratuita" [ref=e862] [cursor=pointer]:
          - /url: "#contacto"
          - text: Solicita una Cotización Gratuita
          - img [ref=e863]
    - generic [ref=e869]:
      - generic [ref=e870]:
        - generic [ref=e871]: PORTAFOLIO
        - heading "Proyectos Destacados" [level=2] [ref=e872]
        - paragraph [ref=e873]: Descubre nuestra excelencia en cada proyecto entregado
      - generic [ref=e874]:
        - generic [ref=e875]:
          - generic [ref=e876]:
            - generic [ref=e878]:
              - img [ref=e879]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e882] [cursor=pointer]
          - generic [ref=e884]:
            - heading "Torres del Valle" [level=3] [ref=e885]
            - generic [ref=e886]:
              - generic [ref=e887]:
                - img [ref=e888]
                - generic [ref=e891]: Av. Ferrocarril, Huancayo
              - generic [ref=e892]:
                - img [ref=e893]
                - generic [ref=e895]: 3,850 m²
              - generic [ref=e896]:
                - img [ref=e897]
                - generic [ref=e899]: Completado en 2024
        - generic [ref=e901]:
          - generic [ref=e902]:
            - generic [ref=e904]:
              - img [ref=e905]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e908] [cursor=pointer]
          - generic [ref=e910]:
            - heading "Plaza Comercial San Carlos" [level=3] [ref=e911]
            - generic [ref=e912]:
              - generic [ref=e913]:
                - img [ref=e914]
                - generic [ref=e917]: El Tambo, Huancayo
              - generic [ref=e918]:
                - img [ref=e919]
                - generic [ref=e921]: 5,200 m²
              - generic [ref=e922]:
                - img [ref=e923]
                - generic [ref=e925]: Completado en 2023
        - generic [ref=e927]:
          - generic [ref=e928]:
            - generic [ref=e930]:
              - img [ref=e931]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e934] [cursor=pointer]
          - generic [ref=e936]:
            - heading "Condominio Los Portales" [level=3] [ref=e937]
            - generic [ref=e938]:
              - generic [ref=e939]:
                - img [ref=e940]
                - generic [ref=e943]: Chilca, Huancayo
              - generic [ref=e944]:
                - img [ref=e945]
                - generic [ref=e947]: 6,400 m²
              - generic [ref=e948]:
                - img [ref=e949]
                - generic [ref=e951]: Completado en 2024
        - generic [ref=e953]:
          - generic [ref=e954]:
            - generic [ref=e956]:
              - img [ref=e957]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e960] [cursor=pointer]
          - generic [ref=e962]:
            - heading "Hospital Clínica Central" [level=3] [ref=e963]
            - generic [ref=e964]:
              - generic [ref=e965]:
                - img [ref=e966]
                - generic [ref=e969]: Av. Real, Huancayo
              - generic [ref=e970]:
                - img [ref=e971]
                - generic [ref=e973]: 4,600 m²
              - generic [ref=e974]:
                - img [ref=e975]
                - generic [ref=e977]: Completado en 2023
        - generic [ref=e979]:
          - generic [ref=e980]:
            - generic [ref=e982]:
              - img [ref=e983]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e986] [cursor=pointer]
          - generic [ref=e988]:
            - heading "Oficinas Corporativas Mantaro" [level=3] [ref=e989]
            - generic [ref=e990]:
              - generic [ref=e991]:
                - img [ref=e992]
                - generic [ref=e995]: San Carlos, Huancayo
              - generic [ref=e996]:
                - img [ref=e997]
                - generic [ref=e999]: 3,200 m²
              - generic [ref=e1000]:
                - img [ref=e1001]
                - generic [ref=e1003]: Completado en 2024
        - generic [ref=e1005]:
          - generic [ref=e1006]:
            - generic [ref=e1008]:
              - img [ref=e1009]
              - text: Imagen del Proyecto
            - button "Ver Detalles" [ref=e1012] [cursor=pointer]
          - generic [ref=e1014]:
            - heading "Centro Educativo Los Andes" [level=3] [ref=e1015]
            - generic [ref=e1016]:
              - generic [ref=e1017]:
                - img [ref=e1018]
                - generic [ref=e1021]: Pilcomayo, Huancayo
              - generic [ref=e1022]:
                - img [ref=e1023]
                - generic [ref=e1025]: 7,800 m²
              - generic [ref=e1026]:
                - img [ref=e1027]
                - generic [ref=e1029]: Completado en 2023
      - link "Ver Todos los Proyectos" [ref=e1032] [cursor=pointer]:
        - /url: "#contacto"
        - text: Ver Todos los Proyectos
        - img [ref=e1033]
    - generic [ref=e1038]:
      - generic [ref=e1039]:
        - generic [ref=e1040]: TESTIMONIOS
        - heading "Lo Que Dicen Nuestros Clientes" [level=2] [ref=e1041]
        - paragraph [ref=e1042]: La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
      - generic [ref=e1043]:
        - generic [ref=e1044]:
          - generic [ref=e1045]:
            - img [ref=e1046]
            - img [ref=e1048]
            - img [ref=e1050]
            - img [ref=e1052]
            - img [ref=e1054]
          - paragraph [ref=e1056]: "\"Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.\""
          - generic [ref=e1057]:
            - img "Carlos Mendoza Pérez" [ref=e1058]
            - generic [ref=e1059]:
              - heading "Carlos Mendoza Pérez" [level=4] [ref=e1060]
              - paragraph [ref=e1061]: Propietario - Torres del Valle
              - paragraph [ref=e1062]: Torres del Valle
        - generic [ref=e1063]:
          - generic [ref=e1064]:
            - img [ref=e1065]
            - img [ref=e1067]
            - img [ref=e1069]
            - img [ref=e1071]
            - img [ref=e1073]
          - paragraph [ref=e1075]: "\"La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.\""
          - generic [ref=e1076]:
            - img "María Elena Rojas" [ref=e1077]
            - generic [ref=e1078]:
              - heading "María Elena Rojas" [level=4] [ref=e1079]
              - paragraph [ref=e1080]: Gerente General - Inversiones El Tambo SAC
              - paragraph [ref=e1081]: Plaza Comercial San Carlos
        - generic [ref=e1082]:
          - generic [ref=e1083]:
            - img [ref=e1084]
            - img [ref=e1086]
            - img [ref=e1088]
            - img [ref=e1090]
            - img [ref=e1092]
          - paragraph [ref=e1094]: "\"GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.\""
          - generic [ref=e1095]:
            - img "Roberto Villanueva Castro" [ref=e1096]
            - generic [ref=e1097]:
              - heading "Roberto Villanueva Castro" [level=4] [ref=e1098]
              - paragraph [ref=e1099]: Director - Colegio Los Andes
              - paragraph [ref=e1100]: Centro Educativo Los Andes
        - generic [ref=e1101]:
          - generic [ref=e1102]:
            - img [ref=e1103]
            - img [ref=e1105]
            - img [ref=e1107]
            - img [ref=e1109]
            - img [ref=e1111]
          - paragraph [ref=e1113]: "\"Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!\""
          - generic [ref=e1114]:
            - img "Ana Lucía Torres" [ref=e1115]
            - generic [ref=e1116]:
              - heading "Ana Lucía Torres" [level=4] [ref=e1117]
              - paragraph [ref=e1118]: Propietaria - Condominio Los Portales
              - paragraph [ref=e1119]: Condominio Los Portales
        - generic [ref=e1120]:
          - generic [ref=e1121]:
            - img [ref=e1122]
            - img [ref=e1124]
            - img [ref=e1126]
            - img [ref=e1128]
            - img [ref=e1130]
          - paragraph [ref=e1132]: "\"La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.\""
          - generic [ref=e1133]:
            - img "Dr. Javier Campos Quispe" [ref=e1134]
            - generic [ref=e1135]:
              - heading "Dr. Javier Campos Quispe" [level=4] [ref=e1136]
              - paragraph [ref=e1137]: Director Médico - Clínica Central
              - paragraph [ref=e1138]: Hospital Clínica Central
        - generic [ref=e1139]:
          - generic [ref=e1140]:
            - img [ref=e1141]
            - img [ref=e1143]
            - img [ref=e1145]
            - img [ref=e1147]
            - img [ref=e1149]
          - paragraph [ref=e1151]: "\"Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.\""
          - generic [ref=e1152]:
            - img "Patricia Robles Huamán" [ref=e1153]
            - generic [ref=e1154]:
              - heading "Patricia Robles Huamán" [level=4] [ref=e1155]
              - paragraph [ref=e1156]: CEO - Tech Solutions Peru
              - paragraph [ref=e1157]: Oficinas Corporativas Mantaro
      - generic [ref=e1158]:
        - generic [ref=e1159]:
          - generic [ref=e1160]: 98%
          - generic [ref=e1161]: Satisfacción
        - generic [ref=e1162]:
          - generic [ref=e1163]: 250+
          - generic [ref=e1164]: Clientes Felices
        - generic [ref=e1165]:
          - generic [ref=e1166]: 15+
          - generic [ref=e1167]: Años Experiencia
        - generic [ref=e1168]:
          - generic [ref=e1169]: "5.0"
          - generic [ref=e1170]: Calificación
    - generic [ref=e1176]:
      - generic [ref=e1177]:
        - generic [ref=e1178]: CONTÁCTANOS
        - heading "Construyamos Algo Juntos" [level=2] [ref=e1179]
        - paragraph [ref=e1180]: ¿Tienes un proyecto en mente? Estamos listos para convertir tu visión en realidad.
      - generic [ref=e1181]:
        - generic [ref=e1182]:
          - generic [ref=e1184]:
            - img [ref=e1186]
            - generic [ref=e1188]:
              - heading "Ubicación" [level=3] [ref=e1189]
              - link "Av. Cahuide 298, Huancayo, Perú" [ref=e1190] [cursor=pointer]:
                - /url: https://maps.google.com/?q=Av.+Cahuide+298,+Huancayo
          - generic [ref=e1192]:
            - img [ref=e1194]
            - generic [ref=e1196]:
              - heading "Teléfono" [level=3] [ref=e1197]
              - link "+51 943 818 788" [ref=e1198] [cursor=pointer]:
                - /url: tel:+51943818788
          - generic [ref=e1200]:
            - img [ref=e1202]
            - generic [ref=e1204]:
              - heading "Email" [level=3] [ref=e1205]
              - link "info@rivamez.com" [ref=e1206] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
          - generic [ref=e1208]:
            - img [ref=e1210]
            - generic [ref=e1212]:
              - heading "Horario" [level=3] [ref=e1213]
              - paragraph [ref=e1214]: "Lun - Vie: 8:00 AM - 6:00 PM Sáb: 9:00 AM - 1:00 PM"
          - generic [ref=e1217]:
            - img [ref=e1218]
            - paragraph [ref=e1220]: Mapa de ubicación
        - generic [ref=e1222]:
          - generic [ref=e1223]:
            - generic [ref=e1224]:
              - generic [ref=e1225]: Nombre Completo *
              - textbox "Juan Pérez" [ref=e1226]
            - generic [ref=e1227]:
              - generic [ref=e1228]: Email *
              - textbox "juan@ejemplo.com" [ref=e1229]
          - generic [ref=e1230]:
            - generic [ref=e1231]:
              - generic [ref=e1232]: Teléfono *
              - textbox "+51 999 999 999" [ref=e1233]
            - generic [ref=e1234]:
              - generic [ref=e1235]: Servicio de Interés *
              - combobox [ref=e1236]:
                - option "Seleccione un servicio" [selected]
                - option "Construcción Residencial"
                - option "Proyectos Comerciales"
                - option "Remodelación"
                - option "Otro"
          - generic [ref=e1237]:
            - generic [ref=e1238]: Mensaje *
            - textbox "Cuéntanos sobre tu proyecto..." [ref=e1239]
          - button "Enviar Mensaje" [ref=e1240] [cursor=pointer]:
            - text: Enviar Mensaje
            - img [ref=e1241]
  - contentinfo [ref=e1243]:
    - generic [ref=e1244]:
      - generic [ref=e1245]:
        - generic [ref=e1246]:
          - generic [ref=e1247]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1248]
            - generic [ref=e1249]:
              - generic [ref=e1250]: GRUPO RIVAMEZ
              - generic [ref=e1251]: Constructora & Inmobiliaria
          - paragraph [ref=e1252]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1253]:
          - heading "Navegación" [level=3] [ref=e1254]
          - list [ref=e1255]:
            - listitem [ref=e1256]:
              - link "Inicio" [ref=e1257] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1258]:
              - link "Proyectos" [ref=e1259] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1260]:
              - link "Servicios" [ref=e1261] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1262]:
              - link "Nosotros" [ref=e1263] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1264]:
              - link "Contacto" [ref=e1265] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1266]:
          - heading "Contacto" [level=3] [ref=e1267]
          - list [ref=e1268]:
            - listitem [ref=e1269]:
              - img [ref=e1270]
              - generic [ref=e1273]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1274]:
              - img [ref=e1275]
              - link "+51 943 818 788" [ref=e1277] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1278]:
              - img [ref=e1279]
              - link "info@rivamez.com" [ref=e1281] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1282]:
          - heading "Síguenos" [level=3] [ref=e1283]
          - generic [ref=e1284]:
            - link [ref=e1285] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1286]
            - link [ref=e1288] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1289]
            - link [ref=e1291] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1292]
      - paragraph [ref=e1295]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos" [ref=e1296] [cursor=pointer]:
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic [ref=e1297]:
      - img [ref=e1300]
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