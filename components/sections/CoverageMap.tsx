'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CoverageMap() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Mapa de ZONAS atendidas, no de cifras: los conteos por distrito que publicaba esta
  // seccion (85, 92, 48...) sumaban los 285 proyectos que nunca tuvieron respaldo.
  const districts = [
    {
      id: 'huancayo',
      name: 'Huancayo Centro',
      short: 'Huancayo',
      type: 'Residencial y comercial',
      color: '#0F172A',
      position: { x: 50, y: 45 }
    },
    {
      id: 'eltambo',
      name: 'El Tambo',
      short: 'El Tambo',
      type: 'Residencial',
      color: '#1385BB',
      position: { x: 65, y: 35 }
    },
    {
      id: 'chilca',
      name: 'Chilca',
      short: 'Chilca',
      type: 'Residencial',
      color: '#10B981',
      position: { x: 35, y: 55 }
    },
    {
      id: 'pilcomayo',
      name: 'Pilcomayo',
      short: 'Pilcomayo',
      type: 'Industrial y comercial',
      color: '#8B5CF6',
      position: { x: 70, y: 60 }
    },
    {
      id: 'huancan',
      name: 'Huancán',
      short: 'Huancán',
      type: 'Residencial',
      color: '#F59E0B',
      position: { x: 45, y: 65 }
    },
    {
      id: 'sancajas',
      name: 'San Agustín de Cajas',
      short: 'San Agustín',
      type: 'Residencial',
      color: '#EC4899',
      position: { x: 30, y: 40 }
    },
    {
      id: 'concepcion',
      name: 'Concepción',
      short: 'Concepción',
      type: 'Comercial',
      color: '#6366F1',
      position: { x: 80, y: 50 }
    }
  ];

  const projectTypes = [
    { type: 'Residencial', desc: 'Viviendas, multifamiliares y condominios', icon: '🏘️', color: 'from-blue-500 to-blue-700' },
    { type: 'Comercial', desc: 'Locales, oficinas y espacios de venta', icon: '🏪', color: 'from-purple-500 to-purple-700' },
    { type: 'Industrial', desc: 'Naves, almacenes y plantas', icon: '🏭', color: 'from-orange-500 to-red-600' },
    { type: 'Institucional', desc: 'Salud, educación y edificios públicos', icon: '🏢', color: 'from-green-500 to-emerald-700' }
  ];

  return (
    <section id="cobertura" className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
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
            PRESENCIA REGIONAL
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Dónde Construimos
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              en Huancayo
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos proyectos en siete distritos de Huancayo y el valle del Mantaro, con obra,
            supervisión y gestión de trámites municipales en cada zona.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-rivamez-navy mb-6 text-center">
              Mapa de Cobertura
            </h3>

            {/* Simplified Map */}
            <div className="relative aspect-[4/3] md:aspect-square max-w-lg mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background */}
                <rect width="100" height="100" fill="#F3F4F6" rx="8" />

                {/* Districts as circles */}
                {districts.map((district, index) => (
                  <g key={district.id}>
                    {/* District Circle */}
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      cx={district.position.x}
                      cy={district.position.y}
                      r={4.5}
                      fill={district.color}
                      opacity={selectedDistrict === district.id ? 1 : 0.7}
                      className="cursor-pointer transition-all hover:opacity-100"
                      onMouseEnter={() => setSelectedDistrict(district.id)}
                      onMouseLeave={() => setSelectedDistrict(null)}
                    />

                    {/* Nombre del distrito (antes iba el conteo inventado de proyectos) */}
                    <text
                      x={district.position.x}
                      y={district.position.y + 8}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#334155"
                      fontSize="2.6"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {district.short}
                    </text>
                  </g>
                ))}

                {/* Legend */}
                <text x="50" y="8" textAnchor="middle" fill="#0F172A" fontSize="4" fontWeight="bold">
                  HUANCAYO - JUNÍN
                </text>
              </svg>

              {/* Hover Info Card */}
              {selectedDistrict && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-0 right-0 bg-white rounded-xl p-3 sm:p-4 shadow-2xl border-2 border-rivamez-cyan max-w-[calc(100vw-2rem)] sm:max-w-xs"
                >
                  {(() => {
                    const district = districts.find(d => d.id === selectedDistrict);
                    return (
                      <>
                        <h4 className="text-lg font-bold text-rivamez-navy mb-2">
                          {district.name}
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">Trabajo típico:</span>
                            <span className="font-semibold text-gray-800">
                              {district.type}
                            </span>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              )}
            </div>

            <p className="text-sm text-gray-500 text-center mt-4">
              * Esquema referencial de las zonas atendidas, no un mapa a escala
            </p>
          </motion.div>

          {/* Districts List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-rivamez-navy mb-6">
              Distritos donde trabajamos
            </h3>

            <div className="space-y-4">
              {districts.map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setSelectedDistrict(district.id)}
                  onMouseLeave={() => setSelectedDistrict(null)}
                  className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${selectedDistrict === district.id ? 'border-rivamez-cyan scale-105' : 'border-gray-100'
                    } cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-3 h-12 rounded-full flex-shrink-0"
                      style={{ backgroundColor: district.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-rivamez-navy">
                        {district.name}
                      </h4>
                      <p className="text-sm text-gray-600">{district.type}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-rivamez-navy text-center mb-8">
            Tipos de Proyecto que Ejecutamos
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${type.color} rounded-2xl p-6 text-white text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl mb-3">{type.icon}</div>
                <div className="text-xl font-bold mb-2">{type.type}</div>
                <div className="text-sm opacity-90">{type.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-rivamez-navy to-rivamez-cyan rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Buscas construir en Huancayo?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Trabajamos en toda la provincia, con contrato, expediente técnico y gestión de los
            trámites municipales que tu obra necesita.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <span>Consulta tu Proyecto</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
