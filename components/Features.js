// components/Features.js
'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Certificación ISO 9001',
    description: 'Calidad garantizada en todos nuestros procesos constructivos bajo estándares internacionales.'
  },
  {
    id: 2,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Entrega a Tiempo',
    description: 'Cumplimiento del 98% de plazos de entrega gracias a nuestra gestión eficiente de proyectos.'
  },
  {
    id: 3,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    title: 'Presupuesto Transparente',
    description: 'Sin costos ocultos. Cotizaciones detalladas y transparentes desde el primer día.'
  },
  {
    id: 4,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    title: 'Tecnología Avanzada',
    description: 'Utilizamos BIM, drones y software de última generación para optimizar cada fase.'
  },
  {
    id: 5,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
    title: 'Equipo Especializado',
    description: '62+ profesionales certificados con experiencia en proyectos de gran envergadura.'
  },
  {
    id: 6,
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    ),
    title: 'Sostenibilidad',
    description: 'Construcciones ecoeficientes con certificación LEED y compromiso ambiental.'
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Blurred Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rivamez-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rivamez-navy/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rivamez-green/8 rounded-full blur-3xl" />

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-responsive"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-navy/10 text-rivamez-navy text-small font-semibold rounded-full mb-4">
            ¿POR QUÉ ELEGIRNOS?
          </span>
          <h2 className="heading-xl text-gray-900 mb-responsive">
            Compromiso con la Excelencia
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Combinamos experiencia, tecnología y un equipo altamente calificado para entregar proyectos excepcionales.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid-3-cols">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-xl hover:shadow-rivamez-cyan/10 hover:-translate-y-2 transition-all duration-500 bg-white">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-rivamez-cyan via-rivamez-navy to-rivamez-green rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon}
                    </svg>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="heading-md text-gray-900 mb-3 group-hover:text-rivamez-navy transition-colors">
                  {feature.title}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-rivamez-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-small font-semibold">Conoce más</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-responsive"
        >
          <p className="text-body text-gray-600 mb-responsive">¿Listo para iniciar tu proyecto con nosotros?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 btn-primary bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white rounded-xl hover:shadow-2xl hover:shadow-rivamez-cyan/30 hover:scale-105 transition-all duration-300"
          >
            Solicita una Cotización Gratuita
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
