'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Ing. Carlos Ramírez Vega",
      role: "Director General",
      specialty: "Ingeniería Civil - MBA",
      experience: "25+ años",
      description: "Líder visionario con más de dos décadas transformando Huancayo. Especialista en proyectos de gran envergadura y gestión estratégica.",
      quote: "Cada proyecto es una oportunidad para construir el futuro de nuestra ciudad.",
      avatar: "👨‍💼",
      color: "from-rivamez-navy to-blue-900",
      linkedin: "#"
    },
    {
      name: "Ing. María Flores Soto",
      role: "Jefa de Proyectos",
      specialty: "Ingeniería Civil - PMP",
      experience: "18+ años",
      description: "Experta en planificación y ejecución de proyectos complejos. Certificada PMP con especialización en metodología BIM.",
      quote: "La excelencia está en los detalles de cada fase del proyecto.",
      avatar: "👩‍💼",
      color: "from-rivamez-cyan to-blue-600",
      linkedin: "#"
    },
    {
      name: "Arq. Roberto Mendoza Cruz",
      role: "Director de Diseño",
      specialty: "Arquitectura - Diseño Sostenible",
      experience: "20+ años",
      description: "Arquitecto visionario especializado en diseño sostenible y espacios innovadores que mejoran la calidad de vida.",
      quote: "El diseño debe inspirar y funcionar en perfecta armonía.",
      avatar: "👨‍🎨",
      color: "from-purple-500 to-purple-700",
      linkedin: "#"
    },
    {
      name: "Ing. Pedro Quispe Rojas",
      role: "Supervisor de Obras",
      specialty: "Ingeniería Civil - Seguridad",
      experience: "22+ años",
      description: "Supervisor experimentado con enfoque en seguridad y calidad. Garantiza que cada proyecto cumpla los más altos estándares.",
      quote: "La seguridad no es negociable, es nuestro compromiso número uno.",
      avatar: "👷",
      color: "from-orange-500 to-red-600",
      linkedin: "#"
    },
    {
      name: "Lic. Ana Torres Vilca",
      role: "Gerente de Ventas",
      specialty: "Administración - Marketing",
      experience: "15+ años",
      description: "Experta en mercado inmobiliario regional. Conecta a las familias con sus hogares soñados y asesora inversiones inteligentes.",
      quote: "Cada cliente es único y merece una solución personalizada.",
      avatar: "👩‍💻",
      color: "from-rivamez-green to-green-700",
      linkedin: "#"
    },
    {
      name: "Maestro Juan Sánchez Pérez",
      role: "Maestro de Obra Senior",
      specialty: "Construcción - Acabados",
      experience: "30+ años",
      description: "Maestro artesano con tres décadas de experiencia. Su ojo experto asegura acabados perfectos en cada detalle.",
      quote: "El verdadero arte está en hacer bien las cosas desde la primera vez.",
      avatar: "🔨",
      color: "from-yellow-500 to-amber-700",
      linkedin: "#"
    }
  ];

  return (
    <section id="equipo" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rivamez-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rivamez-green/10 rounded-full blur-3xl" />

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
            NUESTRO EQUIPO
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            La Gente Detrás de
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              Cada Proyecto
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un equipo de profesionales altamente calificados con décadas de experiencia combinada, 
            dedicados a hacer realidad tus proyectos con excelencia y compromiso.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute inset-[2px] bg-white rounded-2xl" />

              <div className="relative p-8">
                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300`}>
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-rivamez-navy mb-1">
                    {member.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.specialty}
                  </p>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">{member.experience}</span>
                  </div>

                  {/* Quote Preview */}
                  <p className="text-sm italic text-gray-500 line-clamp-2 mb-4">
                    "{member.quote}"
                  </p>

                  {/* Read More */}
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-rivamez-cyan transition-colors">
                    <span>Ver perfil completo</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-rivamez-navy to-rivamez-navy/90 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Nuestro Equipo en Números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-rivamez-cyan mb-2">62+</div>
              <div className="text-white/80 text-sm">Profesionales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-rivamez-green mb-2">130+</div>
              <div className="text-white/80 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-rivamez-cyan mb-2">15+</div>
              <div className="text-white/80 text-sm">Especialidades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-rivamez-green mb-2">100%</div>
              <div className="text-white/80 text-sm">Comprometidos</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres formar parte de este equipo excepcional?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>Únete a RIVAMEZ</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Simple Modal (cuando se clickea un miembro) */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className={`w-32 h-32 bg-gradient-to-br ${selectedMember.color} rounded-full flex items-center justify-center text-6xl`}>
                  {selectedMember.avatar}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-rivamez-navy mb-2">
                  {selectedMember.name}
                </h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${selectedMember.color} bg-clip-text text-transparent mb-3`}>
                  {selectedMember.role}
                </p>
                <p className="text-gray-600 mb-4">{selectedMember.specialty}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <span className="text-sm font-semibold text-gray-700">{selectedMember.experience} de experiencia</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedMember.description}
                </p>
                <blockquote className="border-l-4 border-rivamez-cyan pl-4 italic text-gray-600 mb-6">
                  "{selectedMember.quote}"
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
