'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  // Organismo certificador de los cuatro sistemas de gestión.
  const CERTIFIER = "CCL (Consultanst & Constructors Louis's)";
  const VERIFICATION_URL = "https://www.cclouiss.com/verificacion-certificacion/";

  const certifications = [
    {
      name: "ISO 9001:2015",
      category: "Sistema de Gestión de Calidad",
      year: "2026",
      issuer: CERTIFIER,
      certNumber: "IEC/QM-CCL-PERJ1-MAY070526-J1-01 Rev. 0",
      description: "Gestión de calidad certificada en nuestros procesos de diseño, ingeniería y ejecución de obra.",
      icon: "🎯",
      color: "from-blue-500 to-blue-700",
      verified: true
    },
    {
      name: "ISO 14001",
      category: "Sistema de Gestión Ambiental",
      year: "2026",
      issuer: CERTIFIER,
      certNumber: "IEC/EM-CCL-PERJ2-MAY070526-J2-02 Rev. 0",
      description: "Gestión ambiental aplicada al manejo de residuos, uso de recursos y control de impactos en obra.",
      icon: "🌱",
      color: "from-green-500 to-emerald-700",
      verified: true
    },
    {
      name: "ISO 45001:2018",
      category: "Seguridad y Salud en el Trabajo",
      year: "2026",
      issuer: CERTIFIER,
      certNumber: "IEC/OS-CCL-PERJ3-MAY070526-J3-03 Rev. 0",
      description: "Gestión de seguridad y salud ocupacional para proteger al personal en obra y en oficina.",
      icon: "🛡️",
      color: "from-orange-500 to-red-600",
      verified: true
    },
    {
      name: "ISO 37001:2025",
      category: "Sistema de Gestión Antisoborno",
      year: "2026",
      issuer: CERTIFIER,
      certNumber: "IEC/AB-CCL-PERJ4-MAY070526-J4-04 Rev. 0",
      description: "Gestión antisoborno aplicada a contrataciones, licitaciones y relación con proveedores.",
      icon: "⚖️",
      color: "from-rivamez-navy to-blue-900",
      verified: true
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
              vigentes y verificables
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con cuatro sistemas de gestión certificados bajo normas ISO, vigentes y
            verificables en línea. Los certificados están emitidos a nombre de FreeCloud S.A.C.,
            razón social de la que Grupo Rivamez es nombre comercial.
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

          <div className="grid md:grid-cols-2 gap-6">
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

                  {/* Número de certificado */}
                  <div className="mb-4 rounded-lg bg-gray-50 px-3 py-2">
                    <p className="text-[11px] uppercase tracking-wide text-gray-400 font-semibold">
                      N.° de certificado
                    </p>
                    <p className="text-xs text-gray-700 font-mono break-all">
                      {cert.certNumber}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-sm">
                    <span className="text-gray-500">
                      Emitido por <span className="font-semibold text-gray-700">{cert.issuer}</span>
                    </span>
                    <span className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white rounded-full font-semibold`}>
                      {cert.year}
                    </span>
                  </div>

                  {/* Verificación en línea */}
                  <a
                    href={VERIFICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-rivamez-cyan hover:underline"
                  >
                    Verificar certificado
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota del organismo certificador */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm text-gray-600 leading-relaxed"
          >
            <p className="mb-2">
              <span className="font-semibold text-rivamez-navy">Organismo certificador:</span>{' '}
              {CERTIFIER}, Management System Certification Body N.° MSCB-1550, acreditado por IAS y
              miembro del IAF.
            </p>
            <p className="mb-2">
              <span className="font-semibold text-rivamez-navy">Titular:</span> FreeCloud S.A.C.
              (nombre comercial: Grupo Rivamez). Certificación inicial: 04/05/2026. Fecha de emisión:
              07/05/2026. Auditoría de vigilancia: 07/05/2027. Recertificación: 04/05/2028.
            </p>
            <p>
              Puedes comprobar la vigencia de cada certificado en{' '}
              <a
                href={VERIFICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-rivamez-cyan hover:underline break-all"
              >
                {VERIFICATION_URL}
              </a>
            </p>
          </motion.div>
        </div>

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
