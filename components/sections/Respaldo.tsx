// components/sections/Respaldo.tsx
'use client';

import { motion } from 'framer-motion';

// Datos verificables del respaldo institucional.
const CERTIFIER = "CCL (Consultanst & Constructors Louis's)";
const VERIFICATION_URL = 'https://www.cclouiss.com/verificacion-certificacion/';

const normas = [
  {
    id: 1,
    name: 'ISO 9001:2015',
    category: 'Gestión de Calidad',
    certNumber: 'IEC/QM-CCL-PERJ1-MAY070526-J1-01 Rev. 0',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    id: 2,
    name: 'ISO 14001',
    category: 'Gestión Ambiental',
    certNumber: 'IEC/EM-CCL-PERJ2-MAY070526-J2-02 Rev. 0',
    icon: 'M3 21c0-8.284 6.716-15 15-15h3v3c0 8.284-6.716 15-15 15H3v-3zm0 0L14 10',
  },
  {
    id: 3,
    name: 'ISO 45001:2018',
    category: 'Seguridad y Salud en el Trabajo',
    certNumber: 'IEC/OS-CCL-PERJ3-MAY070526-J3-03 Rev. 0',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    id: 4,
    name: 'ISO 37001:2025',
    category: 'Antisoborno',
    certNumber: 'IEC/AB-CCL-PERJ4-MAY070526-J4-04 Rev. 0',
    icon: 'M12 3v18m0-18l7 4m-7-4L5 7m0 0l-2 6a3 3 0 006 0L5 7zm14 0l-2 6a3 3 0 006 0l-2-6H19zM7 21h10',
  },
];

export default function Respaldo() {
  return (
    <section
      id="respaldo"
      className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-rivamez-cyan/10 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-rivamez-navy/10 rounded-full blur-3xl hidden sm:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-navy/10 text-rivamez-navy text-sm font-semibold rounded-full mb-4">
            RESPALDO Y CERTIFICACIONES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rivamez-navy mb-6">
            La credibilidad no se declara,
            <span className="block text-rivamez-cyan">se verifica</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Grupo Rivamez es el nombre comercial de FreeCloud S.A.C., empresa constructora formal de
            Huancayo, activa y habida ante SUNAT desde 2018. Su sistema de gestión está certificado
            por un organismo acreditado internacionalmente en cuatro normas ISO.
          </p>
        </motion.div>

        {/* Identificación de la empresa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-3 gap-4 mb-10 md:mb-14"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Razón social
            </p>
            <p className="text-base font-bold text-rivamez-navy">FreeCloud S.A.C.</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-1">
              RUC
            </p>
            <p className="text-base font-bold text-rivamez-navy font-mono">20600345665</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold mb-1">
              Estado ante SUNAT
            </p>
            <p className="text-base font-bold text-rivamez-green">Activa y habida desde 2018</p>
          </div>
        </motion.div>

        {/* Las cuatro normas certificadas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {normas.map((norma, index) => (
            <motion.div
              key={norma.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-xl hover:shadow-rivamez-cyan/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={norma.icon}
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-rivamez-navy mb-1">{norma.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{norma.category}</p>

              <div className="mt-auto rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                <p className="text-[11px] uppercase tracking-wide text-gray-500 font-semibold">
                  N.° de certificado
                </p>
                <p className="text-[11px] text-gray-700 font-mono break-all leading-snug">
                  {norma.certNumber}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organismo certificador y verificación pública */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-rivamez-navy mb-3">
                Organismo certificador
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {CERTIFIER}, Management System Certification Body N.° MSCB-1550, acreditado por IAS y
                miembro del IAF. Certificación inicial: 04/05/2026; auditoría de vigilancia:
                07/05/2027; recertificación: 04/05/2028.
              </p>
              <div className="flex flex-wrap gap-2">
                {['CCL', 'MSCB-1550', 'IAS', 'IAF'].map((sello) => (
                  <span
                    key={sello}
                    className="px-3 py-1 rounded-full border border-rivamez-navy/20 bg-white text-xs font-semibold text-rivamez-navy"
                  >
                    {sello}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:text-right shrink-0">
              <p className="text-sm text-gray-600 mb-3 lg:max-w-xs">
                Cada certificado tiene número propio y se comprueba en línea, sin depender de nuestra
                palabra.
              </p>
              <a
                href={VERIFICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rivamez-navy text-white font-semibold rounded-lg hover:bg-rivamez-cyan transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Verificar certificados
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="mt-2 text-xs text-gray-500 break-all lg:max-w-xs">{VERIFICATION_URL}</p>
            </div>
          </div>
        </motion.div>

        {/* Cierre */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-base sm:text-lg text-gray-600"
        >
          Detrás hay más de 15 años de experiencia profesional del equipo en ejecución, consultoría y
          supervisión de obras.{' '}
          <span className="font-semibold text-rivamez-navy">
            Ingeniería que se comprueba, respaldo que se verifica.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
