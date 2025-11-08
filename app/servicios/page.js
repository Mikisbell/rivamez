// app/servicios/page.js
'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    title: 'Construcción Residencial',
    description: 'Desde casas unifamiliares hasta torres de departamentos de lujo con los más altos estándares de calidad.',
    features: ['Viviendas unifamiliares premium', 'Torres residenciales', 'Condominios cerrados', 'Acabados de lujo'],
    process: ['Diseño arquitectónico', 'Permisos y licencias', 'Construcción supervisada', 'Entrega llave en mano'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    ),
    title: 'Proyectos Comerciales',
    description: 'Centros comerciales, oficinas clase AAA y espacios comerciales que impulsan tu negocio.',
    features: ['Centros comerciales', 'Edificios de oficinas AAA', 'Locales comerciales', 'Certificación LEED'],
    process: ['Estudio de factibilidad', 'Diseño funcional', 'Construcción eficiente', 'Smart building'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    title: 'Proyectos Institucionales',
    description: 'Hospitales, clínicas, centros educativos y edificios públicos con estándares internacionales.',
    features: ['Hospitales y clínicas', 'Centros educativos', 'Edificios públicos', 'Normativas internacionales'],
    process: ['Cumplimiento normativo', 'Equipamiento integrado', 'Infraestructura especializada', 'Certificaciones'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    ),
    title: 'Remodelación y Ampliación',
    description: 'Transformación y modernización de espacios existentes con diseños innovadores.',
    features: ['Remodelación integral', 'Ampliaciones verticales', 'Modernización de fachadas', 'Reforzamiento estructural'],
    process: ['Evaluación estructural', 'Diseño de intervención', 'Ejecución controlada', 'Renovación completa'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
    title: 'Gerencia de Proyectos',
    description: 'Gestión integral de proyectos con metodologías ágiles y control total de calidad.',
    features: ['Project Management', 'Control de costos', 'Gestión de cronogramas', 'Supervisión técnica'],
    process: ['Planificación', 'Ejecución', 'Monitoreo continuo', 'Cierre de proyecto'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    ),
    title: 'Diseño y Arquitectura',
    description: 'Soluciones arquitectónicas innovadoras con renders 3D y visualización inmersiva.',
    features: ['Diseño arquitectónico', 'Planos de ingeniería', 'Renders 3D fotorrealistas', 'Recorridos virtuales'],
    process: ['Concepto inicial', 'Desarrollo de planos', 'Visualización 3D', 'Documentación técnica'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80'
  }
];

const benefits = [
  {
    title: 'Experiencia Comprobada',
    description: 'Más de 15 años y 285+ proyectos completados exitosamente',
    icon: '🏆'
  },
  {
    title: 'Equipo Profesional',
    description: '150+ profesionales especializados y certificados',
    icon: '👥'
  },
  {
    title: 'Tecnología Avanzada',
    description: 'BIM, drones, IoT y software de última generación',
    icon: '💻'
  },
  {
    title: 'Garantía de Calidad',
    description: 'Certificaciones ISO y control de calidad total',
    icon: '✓'
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rivamez-navy via-gray-900 to-rivamez-dark text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} className="absolute inset-0" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold mb-6">
                SERVICIOS
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Soluciones Integrales de Construcción
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Desde el diseño hasta la entrega, ofrecemos servicios completos para hacer realidad tu proyecto de construcción
              </p>
            </motion.div>
          </div>
        </section>

        {/* EXPERTISE SECTION */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-4">
              Nuestro Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Capacidades multidisciplinarias para soluciones integrales
            </p>
          </div>

          {/* Arquitectura */}
          <div id="arquitectura" className="container mx-auto max-w-6xl mb-20 scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">🏛️</div>
                <h3 className="text-3xl font-bold text-rivamez-navy mb-4">Arquitectura</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Diseño arquitectónico innovador que combina funcionalidad, estética y sostenibilidad. Creamos espacios que inspiran y transforman.
                </p>
                <ul className="space-y-3">
                  {['Diseño conceptual y esquemático', 'Modelado 3D y visualización', 'Planos arquitectónicos ejecutivos', 'Diseño bioclimático y sostenible', 'Arquitectura interior'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-rivamez-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Arquitectura" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Ingeniería */}
          <div id="ingenieria" className="container mx-auto max-w-6xl mb-20 scroll-mt-20 bg-gray-50 -mx-4 px-4 py-12 lg:mx-0 lg:px-12 lg:rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-1"
              >
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="Ingeniería" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="text-6xl mb-4">⚙️</div>
                <h3 className="text-3xl font-bold text-rivamez-navy mb-4">Ingeniería</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Ingeniería estructural y civil de vanguardia. Soluciones técnicas robustas que garantizan seguridad, eficiencia y durabilidad.
                </p>
                <ul className="space-y-3">
                  {['Ingeniería estructural y sísmica', 'Diseño de instalaciones (MEP)', 'Análisis de suelos y cimentaciones', 'Ingeniería de costos', 'Supervisión técnica'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-rivamez-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Construcción */}
          <div id="construccion" className="container mx-auto max-w-6xl mb-20 scroll-mt-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl mb-4">🏗️</div>
                <h3 className="text-3xl font-bold text-rivamez-navy mb-4">Construcción</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Ejecución de obra con los más altos estándares de calidad y seguridad. Equipos especializados y tecnología de punta para resultados excepcionales.
                </p>
                <ul className="space-y-3">
                  {['Gestión integral de obra', 'Control de calidad ISO 9001', 'Seguridad ocupacional', 'Programación y control (MS Project)', 'Entrega llave en mano'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-rivamez-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" alt="Construcción" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </div>

          {/* Gestión de Proyectos */}
          <div id="gestion" className="container mx-auto max-w-6xl mb-20 scroll-mt-20 bg-gray-50 -mx-4 px-4 py-12 lg:mx-0 lg:px-12 lg:rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl lg:order-1"
              >
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" alt="Gestión" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-3xl font-bold text-rivamez-navy mb-4">Gestión de Proyectos</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Metodologías PMI y ágiles para la gestión efectiva de proyectos. Control total desde la planificación hasta el cierre exitoso.
                </p>
                <ul className="space-y-3">
                  {['Project Management PMI', 'Metodologías ágiles (Scrum)', 'Control de presupuestos', 'Gestión de riesgos', 'Coordinación multidisciplinaria'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-rivamez-cyan flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* BIM & Tecnología, Sostenibilidad, Consultoría - Grid compacto */}
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* BIM */}
              <motion.div
                id="bim"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all scroll-mt-20"
              >
                <div className="text-5xl mb-4">🖥️</div>
                <h3 className="text-2xl font-bold text-rivamez-navy mb-3">BIM & Tecnología</h3>
                <p className="text-gray-600 mb-4">
                  Building Information Modeling para diseño, coordinación y gestión eficiente.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Revit, ArchiCAD, Navisworks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Coordinación 4D/5D
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Clash detection
                  </li>
                </ul>
              </motion.div>

              {/* Sostenibilidad */}
              <motion.div
                id="sostenibilidad"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all scroll-mt-20"
              >
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-rivamez-navy mb-3">Sostenibilidad</h3>
                <p className="text-gray-600 mb-4">
                  Construcción verde certificada LEED con enfoque ambiental.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Certificación LEED
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Eficiencia energética
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Materiales sostenibles
                  </li>
                </ul>
              </motion.div>

              {/* Consultoría */}
              <motion.div
                id="consultoria"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all scroll-mt-20"
              >
                <div className="text-5xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-rivamez-navy mb-3">Consultoría</h3>
                <p className="text-gray-600 mb-4">
                  Asesoría técnica experta en todas las fases del proyecto.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Estudios de factibilidad
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Due diligence técnico
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rivamez-cyan">•</span>
                    Peritajes
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICIOS POR SECTOR */}
        <section id="residencial" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
          <div className="container mx-auto max-w-6xl text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-4">
              Servicios por Sector
            </h2>
            <p className="text-xl text-gray-600">
              Soluciones especializadas para cada tipo de proyecto
            </p>
          </div>
          
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-16">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rivamez-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon}
                      </svg>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-rivamez-cyan mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Proceso:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.process.map((step, i) => (
                          <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg">
                            {i + 1}. {step}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="/contacto"
                      className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-rivamez-cyan/30 hover:scale-105 transition-all duration-300"
                    >
                      Solicitar Información
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                ¿Por Qué Elegir RIVAMEZ?
              </h2>
              <p className="text-xl text-gray-600">
                Ventajas que nos hacen únicos en el mercado
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center p-6 rounded-2xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Empezar?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Contáctanos hoy y descubre cómo podemos ayudarte con tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="tel:+51943818788"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  Llamar Ahora
                </a>
              </div>
            </motion.div>
          </div>
        </section>
    </div>
  );
}
