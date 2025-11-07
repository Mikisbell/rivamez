'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CoverageMap() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = [
    {
      id: 'huancayo',
      name: 'Huancayo Centro',
      projects: 85,
      type: 'Residencial y Comercial',
      color: '#0F172A',
      position: { x: 50, y: 45 }
    },
    {
      id: 'eltambo',
      name: 'El Tambo',
      projects: 92,
      type: 'Residencial Premium',
      color: '#06B6D4',
      position: { x: 65, y: 35 }
    },
    {
      id: 'chilca',
      name: 'Chilca',
      projects: 48,
      type: 'Residencial',
      color: '#10B981',
      position: { x: 35, y: 55 }
    },
    {
      id: 'pilcomayo',
      name: 'Pilcomayo',
      projects: 22,
      type: 'Industrial y Comercial',
      color: '#8B5CF6',
      position: { x: 70, y: 60 }
    },
    {
      id: 'huancan',
      name: 'Huancán',
      projects: 18,
      type: 'Residencial',
      color: '#F59E0B',
      position: { x: 45, y: 65 }
    },
    {
      id: 'sancajas',
      name: 'San Agustín de Cajas',
      projects: 12,
      type: 'Residencial',
      color: '#EC4899',
      position: { x: 30, y: 40 }
    },
    {
      id: 'concepcion',
      name: 'Concepción',
      projects: 8,
      type: 'Comercial',
      color: '#6366F1',
      position: { x: 80, y: 50 }
    }
  ];

  const projectTypes = [
    { type: 'Residencial', count: 185, icon: '🏘️', color: 'from-blue-500 to-blue-700' },
    { type: 'Comercial', count: 48, icon: '🏪', color: 'from-purple-500 to-purple-700' },
    { type: 'Industrial', count: 22, icon: '🏭', color: 'from-orange-500 to-red-600' },
    { type: 'Mixto', count: 30, icon: '🏢', color: 'from-green-500 to-emerald-700' }
  ];

  const totalProjects = districts.reduce((sum, d) => sum + d.projects, 0);

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
            Con presencia en 7 distritos de Huancayo y más de {totalProjects} proyectos completados, 
            somos la constructora con mayor cobertura en la región.
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
            <div className="relative aspect-square max-w-lg mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Background */}
                <rect width="100" height="100" fill="#F3F4F6" rx="8"/>
                
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
                      r={Math.sqrt(district.projects) * 0.8}
                      fill={district.color}
                      opacity={selectedDistrict === district.id ? 1 : 0.7}
                      className="cursor-pointer transition-all hover:opacity-100"
                      onMouseEnter={() => setSelectedDistrict(district.id)}
                      onMouseLeave={() => setSelectedDistrict(null)}
                    />
                    
                    {/* Project count */}
                    <text
                      x={district.position.x}
                      y={district.position.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="6"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {district.projects}
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
                  className="absolute top-0 right-0 bg-white rounded-xl p-4 shadow-2xl border-2 border-rivamez-cyan max-w-xs"
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
                            <span className="font-semibold text-rivamez-cyan">
                              {district.projects}
                            </span>
                            <span className="text-gray-600">proyectos</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">Tipo:</span>
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
              * Tamaño de círculo representa cantidad de proyectos
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
              Proyectos por Distrito
            </h3>

            <div className="space-y-4">
              {districts.sort((a, b) => b.projects - a.projects).map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setSelectedDistrict(district.id)}
                  onMouseLeave={() => setSelectedDistrict(null)}
                  className={`relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    selectedDistrict === district.id ? 'border-rivamez-cyan scale-105' : 'border-gray-100'
                  } cursor-pointer`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: district.color }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-rivamez-navy">
                          {district.name}
                        </h4>
                        <p className="text-sm text-gray-600">{district.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-rivamez-cyan">
                        {district.projects}
                      </div>
                      <div className="text-xs text-gray-500">proyectos</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 bg-gray-100 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(district.projects / totalProjects) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: district.color }}
                    />
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
            Proyectos por Tipo
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
                <div className="text-4xl font-bold mb-2">{type.count}</div>
                <div className="text-sm opacity-90">{type.type}</div>
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
            Con presencia en toda la región y experiencia en todo tipo de proyectos, 
            somos tu mejor opción para construir en cualquier distrito de Huancayo.
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
