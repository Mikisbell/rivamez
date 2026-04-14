# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> 📄 Page-Specific Responsive Tests >> Nosotros page: no overflow on any viewport
- Location: tests\responsive.spec.ts:433:7

# Error details

```
Error: expect(received).toBeLessThanOrEqual(expected)

Expected: <= 385
Received:    389
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
    - generic [ref=e24]:
      - generic [ref=e25]:
        - generic [ref=e30]:
          - heading "La Gente Detrás de los Proyectos" [level=1] [ref=e31]:
            - text: La Gente Detrás de
            - generic [ref=e32]: los Proyectos
          - paragraph [ref=e33]: Equipos extraordinarios con perspectivas globales, capaces de desempeñarse al más alto nivel y producir resultados que transforman el mundo.
          - generic [ref=e34]:
            - link "Descubre Nuestra Historia" [ref=e35] [cursor=pointer]:
              - /url: "#excelencia"
            - button "Ver Video Corporativo" [ref=e36] [cursor=pointer]:
              - img [ref=e37]
              - text: Ver Video Corporativo
        - generic [ref=e40]:
          - generic [ref=e41]: Scroll
          - img [ref=e43]
      - generic [ref=e47]:
        - generic [ref=e48]:
          - img [ref=e50]
          - heading "Nuestra Misión" [level=2] [ref=e52]
          - paragraph [ref=e53]: Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo y la región central del Perú.
        - generic [ref=e54]:
          - img [ref=e56]
          - heading "Nuestra Visión" [level=2] [ref=e59]
          - paragraph [ref=e60]: Ser la constructora líder en la región central del Perú, reconocida por la excelencia en la ejecución de proyectos, innovación tecnológica, compromiso con la sostenibilidad y la satisfacción total de nuestros clientes.
      - generic [ref=e64]:
        - heading "Impulsados por la Excelencia Definidos por Nuestra Gente" [level=2] [ref=e66]:
          - text: Impulsados por la Excelencia
          - generic [ref=e67]: Definidos por Nuestra Gente
        - generic [ref=e68]:
          - generic [ref=e69]:
            - paragraph [ref=e70]: Los clientes necesitan equipos con perspectivas integrales — equipos capaces de desempeñarse al más alto nivel, superando los límites de lo posible y produciendo resultados que transforman el mundo. En RIVAMEZ, eso es por lo que nuestra gente es conocida, y es lo que nos distingue.
            - paragraph [ref=e71]: Con presencia en 7 distritos de Huancayo, tenemos colegas de diferentes orígenes, culturas y especializaciones que aportan una combinación única de habilidades altamente especializadas, experiencia y conocimiento incomparable.
            - paragraph [ref=e72]: Investimos en atraer talento de clase mundial y lo fomentamos en el trabajo. A través de nuestra cultura de aprendizaje, colaboración y crecimiento, empoderamos a los miembros de nuestro equipo para convertirse en los mejores en lo que hacen.
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]: 🏗️
              - generic [ref=e76]: 285+
              - generic [ref=e77]: Proyectos Entregados
            - generic [ref=e78]:
              - generic [ref=e79]: 👥
              - generic [ref=e80]: 150+
              - generic [ref=e81]: Profesionales
            - generic [ref=e82]:
              - generic [ref=e83]: 📅
              - generic [ref=e84]: 15+
              - generic [ref=e85]: Años de Trayectoria
            - generic [ref=e86]:
              - generic [ref=e87]: ⭐
              - generic [ref=e88]: 98%
              - generic [ref=e89]: Satisfacción Cliente
        - link "Conoce Nuestros Valores" [ref=e91] [cursor=pointer]:
          - /url: "#valores"
          - text: Conoce Nuestros Valores
          - img [ref=e92]
      - generic [ref=e96]:
        - generic [ref=e97]:
          - heading "Establecemos el Estándar" [level=2] [ref=e98]
          - paragraph [ref=e99]: Nuestros centros de excelencia especializados son centros de experiencia técnica, impulsados por las mentes más brillantes de la industria.
        - generic [ref=e100]:
          - generic [ref=e103]:
            - generic [ref=e104]: 💻
            - heading "Centro BIM de Excelencia" [level=3] [ref=e105]
            - paragraph [ref=e106]: Modelado de Información de Construcción de última generación para entregar proyectos más eficientes, precisos y sin errores.
          - generic [ref=e109]:
            - generic [ref=e110]: 🌱
            - heading "Centro de Sostenibilidad" [level=3] [ref=e111]
            - paragraph [ref=e112]: Soluciones sostenibles que garantizan la eficiencia energética y el respeto al medio ambiente en cada proyecto.
          - generic [ref=e115]:
            - generic [ref=e116]: 🦺
            - heading "Centro de Seguridad" [level=3] [ref=e117]
            - paragraph [ref=e118]: Cultura de seguridad rigurosa que protege a nuestros colaboradores y garantiza cero accidentes en obra.
          - generic [ref=e121]:
            - generic [ref=e122]: 🔬
            - heading "Laboratorio de Innovación" [level=3] [ref=e123]
            - paragraph [ref=e124]: Investigación y desarrollo de nuevas tecnologías y materiales para la construcción del futuro.
          - generic [ref=e127]:
            - generic [ref=e128]: 🎓
            - heading "Centro de Capacitación" [level=3] [ref=e129]
            - paragraph [ref=e130]: Programas de formación continua para mantener a nuestro equipo a la vanguardia de la industria.
          - generic [ref=e133]:
            - generic [ref=e134]: ✅
            - heading "Control de Calidad" [level=3] [ref=e135]
            - paragraph [ref=e136]: Procesos rigurosos de verificación que garantizan los más altos estándares en cada etapa del proyecto.
        - generic [ref=e137]:
          - heading "Asociarse con RIVAMEZ significa acceso a una red de especialistas líderes en la industria" [level=3] [ref=e138]
          - paragraph [ref=e139]: Cuyo conocimiento e ingenio entregan valor y aseguran el éxito de sus proyectos más complejos.
          - generic [ref=e140]:
            - link "Ver Proyectos" [ref=e141] [cursor=pointer]:
              - /url: /proyectos
            - link "Contactar" [ref=e142] [cursor=pointer]:
              - /url: /contacto
      - generic [ref=e144]:
        - generic [ref=e145]:
          - heading "Reconocimiento a la Excelencia" [level=2] [ref=e146]
          - paragraph [ref=e147]: Programas especiales que honran a nuestros profesionales más destacados
        - generic [ref=e148]:
          - generic [ref=e149]:
            - img [ref=e151]
            - heading "Maestros RIVAMEZ" [level=3] [ref=e153]
            - paragraph [ref=e154]: Programa que reconoce a ingenieros y arquitectos senior que han alcanzado estatura de clase mundial en su campo de especialización. Elegidos por sus logros técnicos sustanciales a lo largo de sus carreras.
            - generic [ref=e155]:
              - img [ref=e156]
              - generic [ref=e158]: 12 Maestros Certificados
          - generic [ref=e159]:
            - img [ref=e161]
            - heading "Especialistas Técnicos Distinguidos" [level=3] [ref=e163]
            - paragraph [ref=e164]: Reconocimiento a empleados que han realizado contribuciones técnicas particularmente significativas al éxito de RIVAMEZ. Promueven la excelencia técnica a través de la aplicación de tecnología avanzada.
            - generic [ref=e165]:
              - img [ref=e166]
              - generic [ref=e168]: 28 Especialistas Activos
      - generic [ref=e170]:
        - generic [ref=e171]:
          - heading "Nuestro Equipo Directivo" [level=2] [ref=e172]
          - paragraph [ref=e173]: Líderes con décadas de experiencia comprometidos con la excelencia
        - generic [ref=e174]:
          - generic [ref=e175]:
            - img "Ricardo Vásquez" [ref=e177]
            - generic [ref=e178]:
              - heading "Ricardo Vásquez" [level=3] [ref=e179]
              - paragraph [ref=e180]: CEO & Fundador
              - paragraph [ref=e181]: Ingeniero Civil con más de 20 años de experiencia en proyectos de gran envergadura.
          - generic [ref=e182]:
            - img "María Elena Rojas" [ref=e184]
            - generic [ref=e185]:
              - heading "María Elena Rojas" [level=3] [ref=e186]
              - paragraph [ref=e187]: Directora de Proyectos
              - paragraph [ref=e188]: Arquitecta especializada en desarrollo comercial y residencial de alto nivel.
          - generic [ref=e189]:
            - img "Jorge Mendoza" [ref=e191]
            - generic [ref=e192]:
              - heading "Jorge Mendoza" [level=3] [ref=e193]
              - paragraph [ref=e194]: Director de Operaciones
              - paragraph [ref=e195]: MBA con experiencia en gestión de equipos de construcción y optimización de procesos.
          - generic [ref=e196]:
            - img "Ana Gutiérrez" [ref=e198]
            - generic [ref=e199]:
              - heading "Ana Gutiérrez" [level=3] [ref=e200]
              - paragraph [ref=e201]: Directora Financiera
              - paragraph [ref=e202]: Contadora Pública especializada en finanzas corporativas y análisis de inversiones.
      - generic [ref=e205]:
        - generic [ref=e206]:
          - heading "Nuestros Valores" [level=2] [ref=e207]
          - paragraph [ref=e208]: Los principios que guían cada uno de nuestros proyectos
        - generic [ref=e209]:
          - generic [ref=e210]:
            - generic [ref=e211]: 🎯
            - heading "Excelencia" [level=3] [ref=e212]
            - paragraph [ref=e213]: Compromiso con la calidad en cada detalle de nuestros proyectos.
          - generic [ref=e214]:
            - generic [ref=e215]: 🤝
            - heading "Integridad" [level=3] [ref=e216]
            - paragraph [ref=e217]: Transparencia y honestidad en todas nuestras relaciones comerciales.
          - generic [ref=e218]:
            - generic [ref=e219]: 💡
            - heading "Innovación" [level=3] [ref=e220]
            - paragraph [ref=e221]: Adopción de las últimas tecnologías y metodologías constructivas.
          - generic [ref=e222]:
            - generic [ref=e223]: 🌱
            - heading "Sostenibilidad" [level=3] [ref=e224]
            - paragraph [ref=e225]: Compromiso con el medio ambiente y construcción responsable.
          - generic [ref=e226]:
            - generic [ref=e227]: 👥
            - heading "Trabajo en Equipo" [level=3] [ref=e228]
            - paragraph [ref=e229]: Colaboración efectiva entre todos los miembros de nuestro equipo.
          - generic [ref=e230]:
            - generic [ref=e231]: ⏱️
            - heading "Puntualidad" [level=3] [ref=e232]
            - paragraph [ref=e233]: Entrega de proyectos en tiempo y forma según lo acordado.
      - generic [ref=e235]:
        - generic [ref=e236]:
          - heading "Clientes que Confían en Nosotros" [level=2] [ref=e237]
          - paragraph [ref=e238]: Empresas líderes eligen RIVAMEZ para sus proyectos
        - generic [ref=e239]:
          - img "Cliente 1" [ref=e241]
          - img "Cliente 2" [ref=e243]
          - img "Cliente 3" [ref=e245]
          - img "Cliente 4" [ref=e247]
          - img "Cliente 5" [ref=e249]
          - img "Cliente 6" [ref=e251]
      - generic [ref=e256]:
        - generic [ref=e257]:
          - generic [ref=e258]: NUESTRO EQUIPO
          - heading "La Gente Detrás de Cada Proyecto" [level=2] [ref=e259]:
            - text: La Gente Detrás de
            - generic [ref=e260]: Cada Proyecto
          - paragraph [ref=e261]: Un equipo de profesionales altamente calificados con décadas de experiencia combinada, dedicados a hacer realidad tus proyectos con excelencia y compromiso.
        - generic [ref=e262]:
          - generic [ref=e266] [cursor=pointer]:
            - generic [ref=e268]: 👨‍💼
            - generic [ref=e269]:
              - heading "Ing. Carlos Ramírez Vega" [level=3] [ref=e270]
              - paragraph [ref=e271]: Director General
              - paragraph [ref=e272]: Ingeniería Civil - MBA
              - generic [ref=e273]:
                - img [ref=e274]
                - generic [ref=e276]: 25+ años
              - paragraph [ref=e277]: "\"Cada proyecto es una oportunidad para construir el futuro de nuestra ciudad.\""
              - generic [ref=e278]:
                - generic [ref=e279]: Ver perfil completo
                - img [ref=e280]
          - generic [ref=e285] [cursor=pointer]:
            - generic [ref=e287]: 👩‍💼
            - generic [ref=e288]:
              - heading "Ing. María Flores Soto" [level=3] [ref=e289]
              - paragraph [ref=e290]: Jefa de Proyectos
              - paragraph [ref=e291]: Ingeniería Civil - PMP
              - generic [ref=e292]:
                - img [ref=e293]
                - generic [ref=e295]: 18+ años
              - paragraph [ref=e296]: "\"La excelencia está en los detalles de cada fase del proyecto.\""
              - generic [ref=e297]:
                - generic [ref=e298]: Ver perfil completo
                - img [ref=e299]
          - generic [ref=e304] [cursor=pointer]:
            - generic [ref=e306]: 👨‍🎨
            - generic [ref=e307]:
              - heading "Arq. Roberto Mendoza Cruz" [level=3] [ref=e308]
              - paragraph [ref=e309]: Director de Diseño
              - paragraph [ref=e310]: Arquitectura - Diseño Sostenible
              - generic [ref=e311]:
                - img [ref=e312]
                - generic [ref=e314]: 20+ años
              - paragraph [ref=e315]: "\"El diseño debe inspirar y funcionar en perfecta armonía.\""
              - generic [ref=e316]:
                - generic [ref=e317]: Ver perfil completo
                - img [ref=e318]
          - generic [ref=e323] [cursor=pointer]:
            - generic [ref=e325]: 👷
            - generic [ref=e326]:
              - heading "Ing. Pedro Quispe Rojas" [level=3] [ref=e327]
              - paragraph [ref=e328]: Supervisor de Obras
              - paragraph [ref=e329]: Ingeniería Civil - Seguridad
              - generic [ref=e330]:
                - img [ref=e331]
                - generic [ref=e333]: 22+ años
              - paragraph [ref=e334]: "\"La seguridad no es negociable, es nuestro compromiso número uno.\""
              - generic [ref=e335]:
                - generic [ref=e336]: Ver perfil completo
                - img [ref=e337]
          - generic [ref=e342] [cursor=pointer]:
            - generic [ref=e344]: 👩‍💻
            - generic [ref=e345]:
              - heading "Lic. Ana Torres Vilca" [level=3] [ref=e346]
              - paragraph [ref=e347]: Gerente de Ventas
              - paragraph [ref=e348]: Administración - Marketing
              - generic [ref=e349]:
                - img [ref=e350]
                - generic [ref=e352]: 15+ años
              - paragraph [ref=e353]: "\"Cada cliente es único y merece una solución personalizada.\""
              - generic [ref=e354]:
                - generic [ref=e355]: Ver perfil completo
                - img [ref=e356]
          - generic [ref=e361] [cursor=pointer]:
            - generic [ref=e363]: 🔨
            - generic [ref=e364]:
              - heading "Maestro Juan Sánchez Pérez" [level=3] [ref=e365]
              - paragraph [ref=e366]: Maestro de Obra Senior
              - paragraph [ref=e367]: Construcción - Acabados
              - generic [ref=e368]:
                - img [ref=e369]
                - generic [ref=e371]: 30+ años
              - paragraph [ref=e372]: "\"El verdadero arte está en hacer bien las cosas desde la primera vez.\""
              - generic [ref=e373]:
                - generic [ref=e374]: Ver perfil completo
                - img [ref=e375]
        - generic [ref=e377]:
          - heading "Nuestro Equipo en Números" [level=3] [ref=e378]
          - generic [ref=e379]:
            - generic [ref=e380]:
              - generic [ref=e381]: 62+
              - generic [ref=e382]: Profesionales
            - generic [ref=e383]:
              - generic [ref=e384]: 130+
              - generic [ref=e385]: Años de Experiencia
            - generic [ref=e386]:
              - generic [ref=e387]: 15+
              - generic [ref=e388]: Especialidades
            - generic [ref=e389]:
              - generic [ref=e390]: 100%
              - generic [ref=e391]: Comprometidos
        - generic [ref=e392]:
          - paragraph [ref=e393]: ¿Quieres formar parte de este equipo excepcional?
          - link "Únete a RIVAMEZ" [ref=e394] [cursor=pointer]:
            - /url: "#contacto"
            - generic [ref=e395]: Únete a RIVAMEZ
            - img [ref=e396]
      - generic [ref=e401]:
        - generic [ref=e402]:
          - generic [ref=e403]: NUESTRA HISTORIA
          - heading "Construyendo Historia Desde 2009" [level=2] [ref=e404]:
            - text: Construyendo Historia
            - generic [ref=e405]: Desde 2009
          - paragraph [ref=e406]: Un viaje de 15 años transformando Huancayo, superando desafíos y creando legados que perdurarán por generaciones.
        - generic [ref=e408]:
          - generic [ref=e411]:
            - generic [ref=e412]:
              - generic [ref=e413]: 🏁
              - generic [ref=e414]: "2009"
            - heading "Fundación de RIVAMEZ" [level=3] [ref=e415]
            - paragraph [ref=e416]: "Inicio de operaciones en Huancayo con una visión clara: transformar la industria de la construcción en la región central del Perú."
            - generic [ref=e417]:
              - generic [ref=e418]:
                - img [ref=e419]
                - generic [ref=e421]: 3 proyectos iniciales
              - generic [ref=e422]:
                - img [ref=e423]
                - generic [ref=e425]: 10 colaboradores
              - generic [ref=e426]:
                - img [ref=e427]
                - generic [ref=e429]: Registro en CAPECO
          - generic [ref=e432]:
            - generic [ref=e433]:
              - generic [ref=e434]: 🏢
              - generic [ref=e435]: "2012"
            - heading "Primer Edificio Multifamiliar" [level=3] [ref=e436]
            - paragraph [ref=e437]: Inauguración de 'Residencial Los Andes', nuestro primer proyecto de gran envergadura con 24 departamentos.
            - generic [ref=e438]:
              - generic [ref=e439]:
                - img [ref=e440]
                - generic [ref=e442]: 24 departamentos entregados
              - generic [ref=e443]:
                - img [ref=e444]
                - generic [ref=e446]: 100% ocupación
              - generic [ref=e447]:
                - img [ref=e448]
                - generic [ref=e450]: Premio diseño arquitectónico
          - generic [ref=e453]:
            - generic [ref=e454]:
              - generic [ref=e455]: 📍
              - generic [ref=e456]: "2015"
            - heading "Expansión a El Tambo" [level=3] [ref=e457]
            - paragraph [ref=e458]: Apertura de operaciones en El Tambo, marcando el inicio de nuestra expansión regional.
            - generic [ref=e459]:
              - generic [ref=e460]:
                - img [ref=e461]
                - generic [ref=e463]: Nueva oficina El Tambo
              - generic [ref=e464]:
                - img [ref=e465]
                - generic [ref=e467]: 50+ colaboradores
              - generic [ref=e468]:
                - img [ref=e469]
                - generic [ref=e471]: 12 proyectos simultáneos
          - generic [ref=e474]:
            - generic [ref=e475]:
              - generic [ref=e476]: 🎯
              - generic [ref=e477]: "2018"
            - heading "Certificación ISO 9001" [level=3] [ref=e478]
            - paragraph [ref=e479]: Obtención de la certificación ISO 9001:2015, validando nuestros estándares internacionales de calidad.
            - generic [ref=e480]:
              - generic [ref=e481]:
                - img [ref=e482]
                - generic [ref=e484]: ISO 9001:2015
              - generic [ref=e485]:
                - img [ref=e486]
                - generic [ref=e488]: Procesos estandarizados
              - generic [ref=e489]:
                - img [ref=e490]
                - generic [ref=e492]: Auditorías exitosas
          - generic [ref=e495]:
            - generic [ref=e496]:
              - generic [ref=e497]: 💯
              - generic [ref=e498]: "2020"
            - 'heading "Hito: 100 Proyectos Completados" [level=3] [ref=e499]'
            - paragraph [ref=e500]: Celebración de nuestro proyecto número 100, un momento histórico que demuestra nuestro compromiso continuo.
            - generic [ref=e501]:
              - generic [ref=e502]:
                - img [ref=e503]
                - generic [ref=e505]: 100 proyectos entregados
              - generic [ref=e506]:
                - img [ref=e507]
                - generic [ref=e509]: 5,000+ familias
              - generic [ref=e510]:
                - img [ref=e511]
                - generic [ref=e513]: 98% satisfacción
          - generic [ref=e516]:
            - generic [ref=e517]:
              - generic [ref=e518]: 💻
              - generic [ref=e519]: "2021"
            - heading "Implementación BIM" [level=3] [ref=e520]
            - paragraph [ref=e521]: Adopción completa de metodología BIM (Building Information Modeling) en todos nuestros proyectos.
            - generic [ref=e522]:
              - generic [ref=e523]:
                - img [ref=e524]
                - generic [ref=e526]: 100% proyectos BIM
              - generic [ref=e527]:
                - img [ref=e528]
                - generic [ref=e530]: Equipo certificado
              - generic [ref=e531]:
                - img [ref=e532]
                - generic [ref=e534]: Tecnología de punta
          - generic [ref=e537]:
            - generic [ref=e538]:
              - generic [ref=e539]: ⭐
              - generic [ref=e540]: "2022"
            - heading "Premio Nacional CAPECO" [level=3] [ref=e541]
            - paragraph [ref=e542]: Reconocimiento como mejor constructora en innovación y calidad por la Cámara Peruana de la Construcción.
            - generic [ref=e543]:
              - generic [ref=e544]:
                - img [ref=e545]
                - generic [ref=e547]: Premio CAPECO Nacional
              - generic [ref=e548]:
                - img [ref=e549]
                - generic [ref=e551]: Finalista 3 categorías
              - generic [ref=e552]:
                - img [ref=e553]
                - generic [ref=e555]: Reconocimiento industria
          - generic [ref=e558]:
            - generic [ref=e559]:
              - generic [ref=e560]: 🏆
              - generic [ref=e561]: "2023"
            - heading "Mayor Constructora de Junín" [level=3] [ref=e562]
            - paragraph [ref=e563]: Distinción otorgada por la Cámara de Comercio de Huancayo como la constructora líder de la región.
            - generic [ref=e564]:
              - generic [ref=e565]:
                - img [ref=e566]
                - generic [ref=e568]: "#1 en Junín"
              - generic [ref=e569]:
                - img [ref=e570]
                - generic [ref=e572]: S/.150M+ en proyectos
              - generic [ref=e573]:
                - img [ref=e574]
                - generic [ref=e576]: 285+ proyectos totales
          - generic [ref=e579]:
            - generic [ref=e580]:
              - generic [ref=e581]: 🎉
              - generic [ref=e582]: "2025"
            - heading "15 Años Construyendo Futuro" [level=3] [ref=e583]
            - paragraph [ref=e584]: Celebramos tres lustros de excelencia, innovación y compromiso con Huancayo y sus familias.
            - generic [ref=e585]:
              - generic [ref=e586]:
                - img [ref=e587]
                - generic [ref=e589]: 15 años de trayectoria
              - generic [ref=e590]:
                - img [ref=e591]
                - generic [ref=e593]: 62+ profesionales
              - generic [ref=e594]:
                - img [ref=e595]
                - generic [ref=e597]: Proyectos en 8 distritos
        - generic [ref=e598]:
          - heading "15 Años en Números" [level=3] [ref=e599]
          - generic [ref=e600]:
            - generic [ref=e601]:
              - generic [ref=e602]: "15"
              - generic [ref=e603]: Años de Historia
            - generic [ref=e604]:
              - generic [ref=e605]: 285+
              - generic [ref=e606]: Proyectos Completados
            - generic [ref=e607]:
              - generic [ref=e608]: "9"
              - generic [ref=e609]: Hitos Importantes
            - generic [ref=e610]:
              - generic [ref=e611]: 5K+
              - generic [ref=e612]: Familias Beneficiadas
        - generic [ref=e613]:
          - paragraph [ref=e614]: ¿Listo para ser parte de nuestra próxima historia de éxito?
          - link "Explora Nuestros Proyectos" [ref=e615] [cursor=pointer]:
            - /url: /proyectos
            - generic [ref=e616]: Explora Nuestros Proyectos
            - img [ref=e617]
      - generic [ref=e624]:
        - generic [ref=e625]:
          - generic [ref=e626]: NUESTRA CULTURA
          - heading "Visión, Valores y Compromisos" [level=2] [ref=e627]
          - paragraph [ref=e628]: Estos principios son fundamentales para la cultura de RIVAMEZ. Guían nuestras acciones y sirven como compromiso con nuestros clientes, colegas, socios y vecinos.
        - generic [ref=e633]:
          - img [ref=e636]
          - generic [ref=e639]:
            - heading "Nuestra Visión" [level=3] [ref=e640]
            - paragraph [ref=e641]: Ser la constructora líder en Huancayo y la región central del Perú, reconocida por la excelencia en cada proyecto, la innovación constante y el compromiso inquebrantable con nuestros clientes y la comunidad.
        - generic [ref=e642]:
          - heading "Nuestros Valores" [level=3] [ref=e643]
          - generic [ref=e644]:
            - generic [ref=e648]:
              - img [ref=e650]
              - heading "Seguridad Primero" [level=4] [ref=e652]
              - paragraph [ref=e653]: La seguridad de nuestro equipo y clientes es nuestra máxima prioridad en cada proyecto.
              - generic [ref=e654]:
                - generic [ref=e655]: Saber más
                - img [ref=e656]
            - generic [ref=e661]:
              - img [ref=e663]
              - heading "Calidad Garantizada" [level=4] [ref=e665]
              - paragraph [ref=e666]: Estándares internacionales y atención meticulosa al detalle en cada fase de construcción.
              - generic [ref=e667]:
                - generic [ref=e668]: Saber más
                - img [ref=e669]
            - generic [ref=e674]:
              - img [ref=e676]
              - heading "Compromiso con Huancayo" [level=4] [ref=e678]
              - paragraph [ref=e679]: Construimos el futuro de nuestra ciudad, generando empleo y desarrollo sostenible.
              - generic [ref=e680]:
                - generic [ref=e681]: Saber más
                - img [ref=e682]
            - generic [ref=e687]:
              - img [ref=e689]
              - heading "Innovación Constante" [level=4] [ref=e691]
              - paragraph [ref=e692]: Tecnología BIM, materiales modernos y métodos de construcción de vanguardia.
              - generic [ref=e693]:
                - generic [ref=e694]: Saber más
                - img [ref=e695]
            - generic [ref=e700]:
              - img [ref=e702]
              - heading "Integridad Total" [level=4] [ref=e704]
              - paragraph [ref=e705]: Transparencia, honestidad y ética en cada decisión y transacción comercial.
              - generic [ref=e706]:
                - generic [ref=e707]: Saber más
                - img [ref=e708]
            - generic [ref=e713]:
              - img [ref=e715]
              - heading "Sostenibilidad" [level=4] [ref=e717]
              - paragraph [ref=e718]: Construcción responsable con el medio ambiente, pensando en las futuras generaciones.
              - generic [ref=e719]:
                - generic [ref=e720]: Saber más
                - img [ref=e721]
        - generic [ref=e723]:
          - heading "Nuestros Compromisos" [level=3] [ref=e724]
          - generic [ref=e725]:
            - generic [ref=e726]:
              - heading "A Nuestros Clientes" [level=4] [ref=e727]
              - list [ref=e728]:
                - listitem [ref=e729]:
                  - img [ref=e730]
                  - generic [ref=e732]: Entrega puntual de proyectos
                - listitem [ref=e733]:
                  - img [ref=e734]
                  - generic [ref=e736]: Comunicación transparente
                - listitem [ref=e737]:
                  - img [ref=e738]
                  - generic [ref=e740]: Post-venta excepcional
                - listitem [ref=e741]:
                  - img [ref=e742]
                  - generic [ref=e744]: Garantía extendida
            - generic [ref=e745]:
              - heading "A Nuestro Equipo" [level=4] [ref=e746]
              - list [ref=e747]:
                - listitem [ref=e748]:
                  - img [ref=e749]
                  - generic [ref=e751]: Ambiente laboral seguro
                - listitem [ref=e752]:
                  - img [ref=e753]
                  - generic [ref=e755]: Capacitación continua
                - listitem [ref=e756]:
                  - img [ref=e757]
                  - generic [ref=e759]: Crecimiento profesional
                - listitem [ref=e760]:
                  - img [ref=e761]
                  - generic [ref=e763]: Compensación justa
            - generic [ref=e764]:
              - heading "A Huancayo" [level=4] [ref=e765]
              - list [ref=e766]:
                - listitem [ref=e767]:
                  - img [ref=e768]
                  - generic [ref=e770]: Generación de empleo local
                - listitem [ref=e771]:
                  - img [ref=e772]
                  - generic [ref=e774]: Apoyo a la comunidad
                - listitem [ref=e775]:
                  - img [ref=e776]
                  - generic [ref=e778]: Desarrollo urbano sostenible
                - listitem [ref=e779]:
                  - img [ref=e780]
                  - generic [ref=e782]: Responsabilidad social
        - generic [ref=e783]:
          - paragraph [ref=e784]: ¿Quieres ser parte de un equipo que vive estos valores cada día?
          - link "Únete a RIVAMEZ" [ref=e785] [cursor=pointer]:
            - /url: "#contacto"
            - generic [ref=e786]: Únete a RIVAMEZ
            - img [ref=e787]
      - generic [ref=e794]:
        - generic [ref=e795]:
          - generic [ref=e796]: CALIDAD CERTIFICADA
          - heading "Certificaciones y Reconocimientos" [level=2] [ref=e797]:
            - text: Certificaciones
            - generic [ref=e798]: y Reconocimientos
          - paragraph [ref=e799]: Nuestro compromiso con la excelencia está respaldado por certificaciones internacionales y el reconocimiento de la industria de la construcción.
        - generic [ref=e800]:
          - heading "Certificaciones Internacionales" [level=3] [ref=e801]
          - generic [ref=e802]:
            - generic [ref=e806]:
              - generic [ref=e807]:
                - generic [ref=e808]: 🎯
                - generic [ref=e809]:
                  - img [ref=e810]
                  - text: Verificado
              - heading "ISO 9001:2015" [level=4] [ref=e812]
              - paragraph [ref=e813]: Sistema de Gestión de Calidad
              - paragraph [ref=e814]: Certificación internacional que garantiza estándares de calidad en todos nuestros procesos constructivos.
              - generic [ref=e815]:
                - generic [ref=e816]: Emitido por Bureau Veritas
                - generic [ref=e817]: "2018"
            - generic [ref=e821]:
              - generic [ref=e822]:
                - generic [ref=e823]: 🌱
                - generic [ref=e824]:
                  - img [ref=e825]
                  - text: Verificado
              - heading "ISO 14001" [level=4] [ref=e827]
              - paragraph [ref=e828]: Gestión Ambiental
              - paragraph [ref=e829]: Compromiso con la sostenibilidad y el cuidado del medio ambiente en cada proyecto.
              - generic [ref=e830]:
                - generic [ref=e831]: Emitido por SGS
                - generic [ref=e832]: "2019"
            - generic [ref=e836]:
              - generic [ref=e837]:
                - generic [ref=e838]: 🛡️
                - generic [ref=e839]:
                  - img [ref=e840]
                  - text: Verificado
              - heading "OHSAS 18001" [level=4] [ref=e842]
              - paragraph [ref=e843]: Seguridad y Salud Ocupacional
              - paragraph [ref=e844]: Máximos estándares de seguridad para proteger a nuestro equipo y colaboradores.
              - generic [ref=e845]:
                - generic [ref=e846]: Emitido por Intertek
                - generic [ref=e847]: "2020"
            - generic [ref=e851]:
              - generic [ref=e852]:
                - generic [ref=e853]: 🏗️
                - generic [ref=e854]:
                  - img [ref=e855]
                  - text: Verificado
              - heading "Registro CAPECO" [level=4] [ref=e857]
              - paragraph [ref=e858]: Cámara Peruana de la Construcción
              - paragraph [ref=e859]: Miembro activo del gremio constructor más importante del Perú.
              - generic [ref=e860]:
                - generic [ref=e861]: Emitido por CAPECO
                - generic [ref=e862]: "2009"
            - generic [ref=e866]:
              - generic [ref=e867]:
                - generic [ref=e868]: 👨‍💼
                - generic [ref=e869]:
                  - img [ref=e870]
                  - text: Verificado
              - heading "CIP Hábil" [level=4] [ref=e872]
              - paragraph [ref=e873]: Colegio de Ingenieros del Perú
              - paragraph [ref=e874]: Todos nuestros ingenieros están habilitados y colegiados en el CIP.
              - generic [ref=e875]:
                - generic [ref=e876]: Emitido por CIP - CD Junín
                - generic [ref=e877]: "2009"
            - generic [ref=e881]:
              - generic [ref=e882]:
                - generic [ref=e883]: 💻
                - generic [ref=e884]:
                  - img [ref=e885]
                  - text: Verificado
              - heading "BIM Certified" [level=4] [ref=e887]
              - paragraph [ref=e888]: Building Information Modeling
              - paragraph [ref=e889]: Certificación en metodología BIM para proyectos de alta complejidad.
              - generic [ref=e890]:
                - generic [ref=e891]: Emitido por Autodesk
                - generic [ref=e892]: "2021"
        - generic [ref=e893]:
          - heading "Premios y Reconocimientos" [level=3] [ref=e894]
          - generic [ref=e895]:
            - generic [ref=e899]:
              - generic [ref=e900]:
                - generic [ref=e901]: 🏆
                - generic [ref=e902]: "2023"
              - heading "Mejor Constructora de Junín" [level=4] [ref=e903]
              - paragraph [ref=e904]: Reconocimiento por excelencia en construcción y contribución al desarrollo regional.
              - paragraph [ref=e906]: Otorgado por Cámara de Comercio de Huancayo
            - generic [ref=e910]:
              - generic [ref=e911]:
                - generic [ref=e912]: ⭐
                - generic [ref=e913]: "2022"
              - heading "Premio Excelencia en Construcción" [level=4] [ref=e914]
              - paragraph [ref=e915]: Por innovación, calidad y cumplimiento en proyectos residenciales.
              - paragraph [ref=e917]: Otorgado por CAPECO Nacional
            - generic [ref=e921]:
              - generic [ref=e922]:
                - generic [ref=e923]: 🎖️
                - generic [ref=e924]: "2021"
              - heading "Reconocimiento Municipalidad de Huancayo" [level=4] [ref=e925]
              - paragraph [ref=e926]: Por aporte al desarrollo urbano sostenible de la ciudad.
              - paragraph [ref=e928]: Otorgado por Municipalidad Provincial de Huancayo
            - generic [ref=e932]:
              - generic [ref=e933]:
                - generic [ref=e934]: 🏅
                - generic [ref=e935]: "2020"
              - heading "Mejor Proyecto Residencial" [level=4] [ref=e936]
              - paragraph [ref=e937]: Torres del Sol - Proyecto destacado por diseño, calidad y entrega puntual.
              - paragraph [ref=e939]: Otorgado por Feria Inmobiliaria del Centro
        - generic [ref=e941]:
          - heading "Certificaciones que Respaldan tu Inversión" [level=3] [ref=e942]
          - paragraph [ref=e943]: Cada certificación representa nuestro compromiso inquebrantable con la calidad, seguridad y excelencia en cada proyecto que construimos.
          - link "Construye con Confianza" [ref=e944] [cursor=pointer]:
            - /url: "#contacto"
            - generic [ref=e945]: Construye con Confianza
            - img [ref=e946]
      - generic [ref=e949]:
        - generic [ref=e950]:
          - heading "Premios y Reconocimientos" [level=2] [ref=e951]
          - paragraph [ref=e952]: Galardones que validan nuestro compromiso con la excelencia
        - generic [ref=e953]:
          - generic [ref=e954]:
            - generic [ref=e955]: 🏆
            - generic [ref=e956]: "2024"
            - heading "Mejor Constructora Regional" [level=3] [ref=e957]
            - paragraph [ref=e958]: Cámara de Comercio de Junín
          - generic [ref=e959]:
            - generic [ref=e960]: 💡
            - generic [ref=e961]: "2023"
            - heading "Premio a la Innovación" [level=3] [ref=e962]
            - paragraph [ref=e963]: Ministerio de Vivienda
          - generic [ref=e964]:
            - generic [ref=e965]: ✓
            - generic [ref=e966]: "2023"
            - heading "Certificación ISO 9001" [level=3] [ref=e967]
            - paragraph [ref=e968]: Bureau Veritas
          - generic [ref=e969]:
            - generic [ref=e970]: 🏗️
            - generic [ref=e971]: "2022"
            - heading "Obra del Año" [level=3] [ref=e972]
            - paragraph [ref=e973]: Asociación de Constructores
          - generic [ref=e974]:
            - generic [ref=e975]: 🌱
            - generic [ref=e976]: "2021"
            - heading "Empresa Socialmente Responsable" [level=3] [ref=e977]
            - paragraph [ref=e978]: Perú 2021
          - generic [ref=e979]:
            - generic [ref=e980]: ⭐
            - generic [ref=e981]: "2020"
            - heading "Excelencia en Gestión" [level=3] [ref=e982]
            - paragraph [ref=e983]: CAPECO
      - generic [ref=e985]:
        - generic [ref=e986]:
          - heading "Logros Destacados" [level=2] [ref=e987]
          - paragraph [ref=e988]: Hitos que marcan nuestra trayectoria
        - generic [ref=e989]:
          - generic [ref=e990]:
            - generic [ref=e991]: 285+
            - heading "Proyectos Completados" [level=3] [ref=e992]
            - paragraph [ref=e993]: En Huancayo y Junín
          - generic [ref=e994]:
            - generic [ref=e995]: 95%
            - heading "Clientes Satisfechos" [level=3] [ref=e996]
            - paragraph [ref=e997]: Recomendarían nuestros servicios
          - generic [ref=e998]:
            - generic [ref=e999]: 15+
            - heading "Años de Experiencia" [level=3] [ref=e1000]
            - paragraph [ref=e1001]: Construyendo confianza
          - generic [ref=e1002]:
            - generic [ref=e1003]: 50+
            - heading "Colaboradores" [level=3] [ref=e1004]
            - paragraph [ref=e1005]: Equipo multidisciplinario
      - generic [ref=e1007]:
        - generic [ref=e1008]:
          - heading "Responsabilidad Social" [level=2] [ref=e1009]
          - paragraph [ref=e1010]: Comprometidos con el desarrollo de nuestra comunidad
        - generic [ref=e1011]:
          - generic [ref=e1012]:
            - generic [ref=e1013]: 🌱
            - heading "Medio Ambiente" [level=3] [ref=e1014]
            - paragraph [ref=e1015]: Construcción sostenible y uso de materiales eco-amigables
          - generic [ref=e1016]:
            - generic [ref=e1017]: 👷
            - heading "Desarrollo Local" [level=3] [ref=e1018]
            - paragraph [ref=e1019]: Capacitación y empleo para la comunidad local
          - generic [ref=e1020]:
            - generic [ref=e1021]: 🏘️
            - heading "Impacto Social" [level=3] [ref=e1022]
            - paragraph [ref=e1023]: Programas de vivienda accesible y espacios públicos
          - generic [ref=e1024]:
            - generic [ref=e1025]: 📚
            - heading "Educación" [level=3] [ref=e1026]
            - paragraph [ref=e1027]: Becas y talleres técnicos para jóvenes
          - generic [ref=e1028]:
            - generic [ref=e1029]: 🤝
            - heading "Colaboración" [level=3] [ref=e1030]
            - paragraph [ref=e1031]: Alianzas con ONGs y gobierno local
          - generic [ref=e1032]:
            - generic [ref=e1033]: ♻️
            - heading "Reciclaje" [level=3] [ref=e1034]
            - paragraph [ref=e1035]: Gestión responsable de residuos de construcción
      - generic [ref=e1038]:
        - heading "¿Listo para Empezar tu Proyecto?" [level=2] [ref=e1039]
        - paragraph [ref=e1040]: Contáctanos hoy y descubre cómo podemos hacer realidad tu visión
        - generic [ref=e1041]:
          - link "Solicitar Cotización" [ref=e1042] [cursor=pointer]:
            - /url: /contacto
          - link "Llamar Ahora" [ref=e1043] [cursor=pointer]:
            - /url: tel:+51943818788
  - contentinfo [ref=e1044]:
    - generic [ref=e1045]:
      - generic [ref=e1046]:
        - generic [ref=e1047]:
          - generic [ref=e1048]:
            - img "GRUPO RIVAMEZ Logo" [ref=e1049]
            - generic [ref=e1050]:
              - generic [ref=e1051]: GRUPO RIVAMEZ
              - generic [ref=e1052]: Constructora & Inmobiliaria
          - paragraph [ref=e1053]: Transformando espacios, construyendo futuro. Más de 15 años de experiencia y excelencia en Huancayo.
        - generic [ref=e1054]:
          - heading "Navegación" [level=3] [ref=e1055]
          - list [ref=e1056]:
            - listitem [ref=e1057]:
              - link "Inicio" [ref=e1058] [cursor=pointer]:
                - /url: "#inicio"
            - listitem [ref=e1059]:
              - link "Proyectos" [ref=e1060] [cursor=pointer]:
                - /url: "#proyectos"
            - listitem [ref=e1061]:
              - link "Servicios" [ref=e1062] [cursor=pointer]:
                - /url: "#servicios"
            - listitem [ref=e1063]:
              - link "Nosotros" [ref=e1064] [cursor=pointer]:
                - /url: "#nosotros"
            - listitem [ref=e1065]:
              - link "Contacto" [ref=e1066] [cursor=pointer]:
                - /url: "#contacto"
        - generic [ref=e1067]:
          - heading "Contacto" [level=3] [ref=e1068]
          - list [ref=e1069]:
            - listitem [ref=e1070]:
              - img [ref=e1071]
              - generic [ref=e1074]:
                - text: Av. Cahuide 298
                - text: Huancayo, Perú
            - listitem [ref=e1075]:
              - img [ref=e1076]
              - link "+51 943 818 788" [ref=e1078] [cursor=pointer]:
                - /url: tel:+51943818788
            - listitem [ref=e1079]:
              - img [ref=e1080]
              - link "info@rivamez.com" [ref=e1082] [cursor=pointer]:
                - /url: mailto:info@rivamez.com
        - generic [ref=e1083]:
          - heading "Síguenos" [level=3] [ref=e1084]
          - generic [ref=e1085]:
            - link [ref=e1086] [cursor=pointer]:
              - /url: https://linkedin.com
              - img [ref=e1087]
            - link [ref=e1089] [cursor=pointer]:
              - /url: https://instagram.com
              - img [ref=e1090]
            - link [ref=e1092] [cursor=pointer]:
              - /url: https://facebook.com
              - img [ref=e1093]
      - paragraph [ref=e1096]: © 2026 GRUPO RIVAMEZ. Todos los derechos reservados.
  - link "¿Necesitas ayuda? Escríbenos" [ref=e1097] [cursor=pointer]:
    - /url: https://wa.me/51943818788?text=Hola%2C%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20construcci%C3%B3n.
    - generic [ref=e1098]:
      - img [ref=e1101]
      - generic: ¿Necesitas ayuda? Escríbenos
```

# Test source

```ts
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
  377 |       expect(isVisible).toBe(true);
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
> 442 |       expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 10);
      |                           ^ Error: expect(received).toBeLessThanOrEqual(expected)
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
  478 |     await page.goto('/');
  479 |     await page.waitForLoadState('networkidle');
  480 | 
  481 |     // Check all interactive elements
  482 |     const interactiveElements = page.locator('a, button, input, select, textarea');
  483 |     const count = await interactiveElements.count();
  484 |     let tooSmallCount = 0;
  485 | 
  486 |     for (let i = 0; i < Math.min(count, 30); i++) {
  487 |       const el = interactiveElements.nth(i);
  488 |       const isVisible = await el.isVisible();
  489 |       if (isVisible) {
  490 |         const box = await el.boundingBox();
  491 |         if (box && box.width > 0 && box.height > 0) {
  492 |           // Allow some tolerance, flag elements significantly below 44px
  493 |           if (box.height < 30) {
  494 |             tooSmallCount++;
  495 |           }
  496 |         }
  497 |       }
  498 |     }
  499 | 
  500 |     // Allow max 10 elements slightly below threshold (decorative icons, SVGs, etc.)
  501 |     expect(tooSmallCount).toBeLessThanOrEqual(10);
  502 |   });
  503 | 
  504 |   test('Content is readable without horizontal scroll', async ({ page }) => {
  505 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  506 |       await page.setViewportSize(vp);
  507 |       await page.goto('/');
  508 |       await page.waitForLoadState('networkidle');
  509 |       await page.waitForTimeout(500);
  510 | 
  511 |       const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  512 |       const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  513 |       const overflow = scrollWidth - clientWidth;
  514 |       expect(overflow).toBeLessThanOrEqual(10); // Max 10px tolerance
  515 |     }
  516 |   });
  517 | });
  518 | 
  519 | // ============================================
  520 | // 10. VISUAL REGRESSION SCREENSHOTS
  521 | // ============================================
  522 | 
  523 | test.describe('📸 Visual Regression Screenshots', () => {
  524 |   test('Home page screenshots at all breakpoints', async ({ page }) => {
  525 |     for (const [name, vp] of Object.entries(VIEWPORTS)) {
  526 |       await page.setViewportSize(vp);
  527 |       await page.goto('/');
  528 |       await page.waitForLoadState('networkidle');
  529 |       // Wait for animations to settle
  530 |       await page.waitForTimeout(1000);
  531 |       await expect(page).toHaveScreenshot(`home-${name}.png`, {
  532 |         fullPage: true,
  533 |         maxDiffPixelRatio: 0.15,
  534 |       });
  535 |     }
  536 |   });
  537 | });
  538 | 
```