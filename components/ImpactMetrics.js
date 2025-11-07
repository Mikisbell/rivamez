'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ImpactMetrics() {
  const [isVisible, setIsVisible] = useState(false);

  const primaryMetrics = [
    {
      value: "150M+",
      label: "En Inversión Ejecutada",
      prefix: "S/.",
      description: "Soles en proyectos completados desde 2009",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    },
    {
      value: "45,000",
      label: "m² Construidos/Año",
      suffix: "m²",
      description: "Metros cuadrados promedio anual",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "from-rivamez-cyan to-blue-600"
    },
    {
      value: "98%",
      label: "Entregas Puntuales",
      description: "Proyectos entregados a tiempo o antes",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-orange-500 to-red-600"
    },
    {
      value: "4.8",
      label: "Satisfacción del Cliente",
      suffix: "/5",
      description: "Calificación promedio en reseñas",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-600"
    }
  ];

  const secondaryMetrics = [
    {
      value: "15",
      label: "Proyectos Sostenibles",
      icon: "🌱",
      description: "Con certificación ambiental"
    },
    {
      value: "2,500+",
      label: "Empleos Generados",
      icon: "👷",
      description: "Puestos de trabajo creados"
    },
    {
      value: "100%",
      label: "Procesos Digitalizados",
      icon: "💻",
      description: "Tecnología BIM implementada"
    },
    {
      value: "24/7",
      label: "Soporte Post-Venta",
      icon: "🛠️",
      description: "Atención continua a clientes"
    },
    {
      value: "8",
      label: "Distritos de Huancayo",
      icon: "📍",
      description: "Presencia en la región"
    },
    {
      value: "ISO",
      label: "Certificaciones",
      icon: "🏆",
      description: "Estándares internacionales"
    }
  ];

  const achievements = [
    {
      title: "Mayor Constructora",
      subtitle: "de Junín",
      year: "2023",
      color: "bg-gradient-to-br from-rivamez-navy to-blue-900"
    },
    {
      title: "Premio Excelencia",
      subtitle: "en Construcción",
      year: "2022",
      color: "bg-gradient-to-br from-rivamez-cyan to-blue-600"
    },
    {
      title: "Reconocimiento",
      subtitle: "Municipalidad",
      year: "2021",
      color: "bg-gradient-to-br from-rivamez-green to-emerald-600"
    }
  ];

  return (
    <section id="impacto" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-rivamez-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-rivamez-green/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
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
          <span className="inline-block px-4 py-2 bg-rivamez-navy/10 text-rivamez-navy rounded-full text-sm font-semibold mb-4">
            NUESTRO IMPACTO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Construyendo el Futuro con
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              Resultados Medibles
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 15 años transformando Huancayo con proyectos que generan valor real 
            para nuestros clientes y la comunidad.
          </p>
        </motion.div>

        {/* Primary Metrics - Large Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {primaryMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {metric.icon}
                </div>

                {/* Value */}
                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    {metric.prefix && (
                      <span className="text-lg font-semibold text-gray-500">{metric.prefix}</span>
                    )}
                    <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </span>
                    {metric.suffix && (
                      <span className="text-lg font-semibold text-gray-500">{metric.suffix}</span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <h4 className="text-lg font-bold text-rivamez-navy mb-2">
                  {metric.label}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {metric.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Metrics - Compact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-rivamez-navy to-rivamez-navy/90 rounded-3xl p-8 md:p-12 mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Más Números que Nos Definen
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {secondaryMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{metric.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-rivamez-cyan mb-1">{metric.label}</div>
                <div className="text-xs text-gray-300">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements / Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-rivamez-navy text-center mb-8">
            Reconocimientos Recientes
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${achievement.color} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                <div className="relative">
                  <div className="text-6xl font-bold mb-2 opacity-20">{achievement.year}</div>
                  <h4 className="text-2xl font-bold mb-1">{achievement.title}</h4>
                  <p className="text-lg opacity-90">{achievement.subtitle}</p>
                  
                  {/* Trophy Icon */}
                  <div className="absolute top-0 right-0 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/proyectos"
              className="px-8 py-4 bg-rivamez-navy text-white font-semibold rounded-xl hover:bg-rivamez-navy/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Ver Nuestros Proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl border-2 border-rivamez-navy hover:bg-rivamez-navy hover:text-white hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
