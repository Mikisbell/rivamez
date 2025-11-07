// components/InteractiveTabs.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabsData = [
  {
    id: 'residencial',
    label: 'CONSTRUCCIÓN RESIDENCIAL',
    title: 'Viviendas de Lujo y Edificios Multifamiliares',
    description: 'Diseñamos y construimos desde casas unifamiliares premium hasta torres residenciales de hasta 15 pisos. Cada proyecto combina diseño contemporáneo, materiales de primera calidad y tecnología constructiva avanzada para crear espacios que superan expectativas.',
    features: [
      'Departamentos premium con acabados de lujo',
      'Casas personalizadas según tu visión',
      'Condominios cerrados con amenidades completas',
      'Certificaciones de eficiencia energética'
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
    stats: [
      { value: '72', label: 'Departamentos' },
      { value: '15', label: 'Pisos máximo' },
      { value: '98%', label: 'Satisfacción' }
    ]
  },
  {
    id: 'comercial',
    label: 'PROYECTOS COMERCIALES',
    title: 'Centros Comerciales y Oficinas AAA',
    description: 'Desarrollamos espacios comerciales modernos y funcionales que impulsan tu negocio. Desde plazas comerciales con múltiples locales hasta edificios de oficinas con certificación LEED, cada proyecto está diseñado para maximizar el retorno de inversión.',
    features: [
      'Centros comerciales de hasta 95 locales',
      'Edificios de oficinas clase AAA',
      'Diseño sostenible certificado LEED',
      'Tecnología de automatización integrada'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    stats: [
      { value: '95', label: 'Locales' },
      { value: '8', label: 'Pisos' },
      { value: 'AAA', label: 'Categoría' }
    ]
  },
  {
    id: 'institucional',
    label: 'PROYECTOS INSTITUCIONALES',
    title: 'Hospitales, Clínicas y Centros Educativos',
    description: 'Construimos infraestructura institucional de primer nivel con estándares internacionales. Cada proyecto cumple con normativas estrictas de seguridad, accesibilidad y funcionalidad, garantizando espacios óptimos para salud y educación.',
    features: [
      'Hospitales y clínicas especializadas',
      'Centros educativos para 1,200+ alumnos',
      'Equipamiento médico integrado',
      'Cumplimiento de normativas internacionales'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    stats: [
      { value: '80', label: 'Camas' },
      { value: '6', label: 'Quirófanos' },
      { value: '1.2k', label: 'Alumnos' }
    ]
  },
  {
    id: 'remodelacion',
    label: 'REMODELACIÓN Y AMPLIACIÓN',
    title: 'Transformación de Espacios Existentes',
    description: 'Renovamos y modernizamos tu propiedad con diseños innovadores y ejecución impecable. Ya sea una remodelación integral, ampliación vertical u horizontal, o modernización de fachadas, transformamos espacios antiguos en ambientes contemporáneos.',
    features: [
      'Remodelación integral residencial y comercial',
      'Ampliaciones verticales y horizontales',
      'Modernización de fachadas',
      'Reforzamiento estructural certificado'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
    stats: [
      { value: '100+', label: 'Remodelaciones' },
      { value: '30%', label: 'Ahorro energético' },
      { value: '45', label: 'Días promedio' }
    ]
  }
];

export default function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  const activeContent = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-navy/10 text-rivamez-navy text-sm font-semibold rounded-full mb-4">
            NUESTRAS ESPECIALIDADES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Soluciones de Construcción a tu Medida
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-rivamez-navy text-white shadow-lg shadow-rivamez-navy/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {activeContent.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {activeContent.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {activeContent.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  {activeContent.stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold bg-gradient-to-r from-rivamez-cyan to-rivamez-navy bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="#contacto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-rivamez-cyan/30 hover:scale-105 transition-all duration-300"
                >
                  Solicitar Información
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Right Image */}
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rivamez-navy/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-8 right-8 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg"
                >
                  <span className="text-sm font-semibold text-rivamez-navy">
                    Proyecto {activeContent.label.split(' ')[0]}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
