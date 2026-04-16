'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Sistema de Gestión de Calidad",
      year: "2018",
      issuer: "Bureau Veritas",
      description: "Certificación internacional que garantiza estándares de calidad en todos nuestros procesos constructivos.",
      icon: "🎯",
      color: "from-blue-500 to-blue-700",
      verified: true
    },
    {
      name: "ISO 14001",
      category: "Gestión Ambiental",
      year: "2019",
      issuer: "SGS",
      description: "Compromiso con la sostenibilidad y el cuidado del medio ambiente en cada proyecto.",
      icon: "🌱",
      color: "from-green-500 to-emerald-700",
      verified: true
    },
    {
      name: "OHSAS 18001",
      category: "Seguridad y Salud Ocupacional",
      year: "2020",
      issuer: "Intertek",
      description: "Máximos estándares de seguridad para proteger a nuestro equipo y colaboradores.",
      icon: "🛡️",
      color: "from-orange-500 to-red-600",
      verified: true
    },
    {
      name: "Registro CAPECO",
      category: "Cámara Peruana de la Construcción",
      year: "2009",
      issuer: "CAPECO",
      description: "Miembro activo del gremio constructor más importante del Perú.",
      icon: "🏗️",
      color: "from-rivamez-navy to-blue-900",
      verified: true
    },
    {
      name: "CIP Hábil",
      category: "Colegio de Ingenieros del Perú",
      year: "2009",
      issuer: "CIP - CD Junín",
      description: "Todos nuestros ingenieros están habilitados y colegiados en el CIP.",
      icon: "👨‍💼",
      color: "from-purple-500 to-purple-700",
      verified: true
    },
    {
      name: "BIM Certified",
      category: "Building Information Modeling",
      year: "2021",
      issuer: "Autodesk",
      description: "Certificación en metodología BIM para proyectos de alta complejidad.",
      icon: "💻",
      color: "from-rivamez-cyan to-blue-600",
      verified: true
    }
  ];

  const awards = [
    {
      title: "Mejor Constructora de Junín",
      year: "2023",
      issuer: "Cámara de Comercio de Huancayo",
      description: "Reconocimiento por excelencia en construcción y contribución al desarrollo regional.",
      icon: "🏆",
      color: "from-yellow-400 to-amber-600"
    },
    {
      title: "Premio Excelencia en Construcción",
      year: "2022",
      issuer: "CAPECO Nacional",
      description: "Por innovación, calidad y cumplimiento en proyectos residenciales.",
      icon: "⭐",
      color: "from-rivamez-cyan to-blue-600"
    },
    {
      title: "Reconocimiento Municipalidad de Huancayo",
      year: "2021",
      issuer: "Municipalidad Provincial de Huancayo",
      description: "Por aporte al desarrollo urbano sostenible de la ciudad.",
      icon: "🎖️",
      color: "from-rivamez-green to-green-700"
    },
    {
      title: "Mejor Proyecto Residencial",
      year: "2020",
      issuer: "Feria Inmobiliaria del Centro",
      description: "Torres del Sol - Proyecto destacado por diseño, calidad y entrega puntual.",
      icon: "🏅",
      color: "from-rivamez-navy to-blue-900"
    }
  ];

  return (
    <section id="certificaciones" className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rivamez-cyan/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rivamez-green/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-cyan/10 text-rivamez-cyan rounded-full text-sm font-semibold mb-4">
            CALIDAD CERTIFICADA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Certificaciones
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              y Reconocimientos
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia está respaldado por certificaciones internacionales 
            y el reconocimiento de la industria de la construcción.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-rivamez-navy text-center mb-12"
          >
            Certificaciones Internacionales
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-[2px] bg-white rounded-2xl" />

                <div className="relative">
                  {/* Icon & Verified Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`text-5xl`}>{cert.icon}</div>
                    {cert.verified && (
                      <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Verificado
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-rivamez-navy mb-2">
                    {cert.name}
                  </h4>

                  {/* Category */}
                  <p className="text-sm font-semibold text-gray-500 mb-3">
                    {cert.category}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Emitido por <span className="font-semibold text-gray-700">{cert.issuer}</span>
                    </span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full font-semibold`}>
                      {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-rivamez-navy text-center mb-12">
            Premios y Reconocimientos
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-gradient-to-br ${award.color} rounded-2xl p-8 text-white overflow-hidden hover:scale-105 transition-transform duration-300`}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-6xl">{award.icon}</div>
                    <div className="text-5xl font-bold opacity-20">{award.year}</div>
                  </div>

                  <h4 className="text-2xl md:text-3xl font-bold mb-2">
                    {award.title}
                  </h4>

                  <p className="text-white/90 mb-4 text-lg">
                    {award.description}
                  </p>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-white/80">
                      Otorgado por <span className="font-semibold text-white">{award.issuer}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Certificaciones que Respaldan tu Inversión
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Cada certificación representa nuestro compromiso inquebrantable con la calidad, 
              seguridad y excelencia en cada proyecto que construimos.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <span>Construye con Confianza</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
