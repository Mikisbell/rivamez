'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const milestones = [
    {
      year: "2009",
      title: "Inicio de la trayectoria profesional",
      description: "Nuestro equipo fundador empieza a ejercer en Huancayo con una visión clara: transformar la industria de la construcción en la región central del Perú.",
      icon: "🏁",
      color: "from-rivamez-navy to-blue-900",
      achievements: ["3 proyectos iniciales", "10 colaboradores"]
    },
    {
      year: "2012",
      title: "Primer Edificio Multifamiliar",
      description: "Inauguración de 'Residencial Los Andes', nuestro primer proyecto de gran envergadura con 24 departamentos.",
      icon: "🏢",
      color: "from-blue-500 to-blue-700",
      achievements: ["24 departamentos entregados", "100% ocupación"]
    },
    {
      year: "2015",
      title: "Constitución de FreeCloud S.A.C.",
      description: "La operación se formaliza como FreeCloud S.A.C., empresa que opera bajo el nombre comercial Grupo Rivamez, con actividad de arquitectura, ingeniería y consultoría técnica.",
      icon: "🏛️",
      color: "from-green-500 to-emerald-700",
      achievements: [
        "Inscrita en Registros Públicos el 23/04/2015",
        "Partida registral 11209511",
        "Sede en El Tambo, Huancayo"
      ]
    },
    {
      year: "2018",
      title: "Inscripción del RUC ante SUNAT",
      description: "La empresa queda inscrita en el Registro Único de Contribuyentes y opera desde entonces con estado activo y condición de habida.",
      icon: "🧾",
      color: "from-blue-500 to-blue-700",
      achievements: [
        "RUC 20600345665",
        "Actividad 7110: arquitectura e ingeniería",
        "Estado activo y habido ante SUNAT"
      ]
    },
    {
      year: "2020",
      title: "Consolidación de la cartera de obra",
      description: "La empresa consolida su cartera de proyectos residenciales y comerciales en Huancayo, cada uno respaldado por contrato y expediente técnico.",
      icon: "🏗️",
      color: "from-purple-500 to-purple-700",
      achievements: [
        "Proyectos con contrato y expediente técnico",
        "Cobertura en Huancayo, El Tambo y Chilca"
      ]
    },
    {
      year: "2021",
      title: "Implementación BIM",
      description: "Adopción completa de metodología BIM (Building Information Modeling) en todos nuestros proyectos.",
      icon: "💻",
      color: "from-rivamez-cyan to-blue-600",
      achievements: ["100% proyectos BIM", "Equipo certificado", "Tecnología de punta"]
    },
    {
      year: "2025",
      title: "Una Década de Empresa Formal",
      description: "La empresa cumple diez años desde su constitución, sosteniendo la operación con formalidad tributaria y registral continua.",
      icon: "🎉",
      color: "from-rivamez-navy to-rivamez-cyan",
      achievements: [
        "10 años desde la constitución en 2015",
        "Registro vigente en Registros Públicos y SUNAT"
      ]
    },
    {
      year: "2026",
      title: "Cuatro sistemas de gestión certificados",
      description: "Obtención de las certificaciones ISO 9001, ISO 14001, ISO 45001 e ISO 37001, emitidas por CCL y verificables en línea.",
      icon: "🎯",
      color: "from-green-500 to-emerald-700",
      achievements: ["ISO 9001:2015 y ISO 14001", "ISO 45001:2018 e ISO 37001:2025", "Vigentes hasta la recertificación de 2028"]
    }
  ];

  return (
    <section id="historia" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-cyan/10 text-rivamez-cyan rounded-full text-sm font-semibold mb-4">
            NUESTRA HISTORIA
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Construyendo Historia
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              Más de 10 Años
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            FreeCloud S.A.C., que opera bajo el nombre comercial Grupo Rivamez, se constituyó el 23
            de abril de 2015 según su partida registral. Los hitos anteriores corresponden a la
            trayectoria profesional del equipo fundador.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rivamez-cyan via-rivamez-green to-rivamez-navy hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12 md:space-y-20">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full font-bold mb-4`}>
                      <span className="text-2xl">{milestone.icon}</span>
                      <span className="text-xl">{milestone.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-rivamez-navy mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {milestone.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {milestone.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 ${
                            index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                          }`}
                        >
                          <svg className="w-5 h-5 text-rivamez-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm font-medium text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex flex-shrink-0 w-16 h-16 items-center justify-center relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center text-3xl shadow-lg ring-4 ring-white`}>
                    {milestone.icon}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-br from-rivamez-navy to-rivamez-cyan rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Nuestra Trayectoria en Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                +10 <span className="text-2xl md:text-4xl">años</span>
              </div>
              <div className="text-white">De empresa formal desde 2015</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">+50</div>
              <div className="text-white">Proyectos desarrollados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">4</div>
              <div className="text-white">Certificaciones ISO vigentes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">100%</div>
              <div className="text-white">Verificable en línea</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para ser parte de nuestra próxima historia de éxito?
          </p>
          <a
            href="/proyectos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Explora Nuestros Proyectos</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
