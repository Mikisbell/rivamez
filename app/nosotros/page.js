// app/nosotros/page.js

'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Team from '@/components/Team';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import Values from '@/components/Values';
import VideoModal from '@/components/VideoModal';

const leadership = [
  {
    name: 'Ricardo Vásquez',
    role: 'CEO & Fundador',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'Ingeniero Civil con más de 20 años de experiencia en proyectos de gran envergadura.'
  },
  {
    name: 'María Elena Rojas',
    role: 'Directora de Proyectos',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'Arquitecta especializada en desarrollo comercial y residencial de alto nivel.'
  },
  {
    name: 'Jorge Mendoza',
    role: 'Director de Operaciones',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    bio: 'MBA con experiencia en gestión de equipos de construcción y optimización de procesos.'
  },
  {
    name: 'Ana Gutiérrez',
    role: 'Directora Financiera',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'Contadora Pública especializada en finanzas corporativas y análisis de inversiones.'
  }
];

const values = [
  {
    icon: '🎯',
    title: 'Excelencia',
    description: 'Compromiso con la calidad en cada detalle de nuestros proyectos.'
  },
  {
    icon: '🤝',
    title: 'Integridad',
    description: 'Transparencia y honestidad en todas nuestras relaciones comerciales.'
  },
  {
    icon: '💡',
    title: 'Innovación',
    description: 'Adopción de las últimas tecnologías y metodologías constructivas.'
  },
  {
    icon: '🌱',
    title: 'Sostenibilidad',
    description: 'Compromiso con el medio ambiente y construcción responsable.'
  },
  {
    icon: '👥',
    title: 'Trabajo en Equipo',
    description: 'Colaboración efectiva entre todos los miembros de nuestro equipo.'
  },
  {
    icon: '⏱️',
    title: 'Puntualidad',
    description: 'Entrega de proyectos en tiempo y forma según lo acordado.'
  }
];

const stats = [
  { value: '285+', label: 'Proyectos Completados' },
  { value: '15+', label: 'Años de Experiencia' },
  { value: '150+', label: 'Profesionales' },
  { value: '98%', label: 'Satisfacción' }
];

const clients = [
  'https://via.placeholder.com/150x60/06B6D4/FFFFFF?text=Cliente+1',
  'https://via.placeholder.com/150x60/0F172A/FFFFFF?text=Cliente+2',
  'https://via.placeholder.com/150x60/059669/FFFFFF?text=Cliente+3',
  'https://via.placeholder.com/150x60/06B6D4/FFFFFF?text=Cliente+4',
  'https://via.placeholder.com/150x60/0F172A/FFFFFF?text=Cliente+5',
  'https://via.placeholder.com/150x60/059669/FFFFFF?text=Cliente+6',
];

export default function NosotrosPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="pt-20">
        {/* Cinematic Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rivamez-navy/95 via-gray-900/90 to-black/95">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)`
            }} />
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '48px 48px'
            }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                La Gente Detrás de
                <span className="block bg-gradient-to-r from-rivamez-cyan via-rivamez-green to-white bg-clip-text text-transparent">
                  los Proyectos
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Equipos extraordinarios con perspectivas globales, capaces de desempeñarse al más alto nivel 
                y producir resultados que transforman el mundo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#excelencia"
                  className="px-10 py-5 bg-gradient-to-r from-rivamez-cyan to-rivamez-green text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-rivamez-cyan/50 hover:scale-105 transition-all duration-300"
                >
                  Descubre Nuestra Historia
                </a>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Ver Video Corporativo
                </button>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-sm font-semibold">Scroll</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-rivamez-cyan/10 to-white p-10 rounded-2xl border border-rivamez-cyan/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Transformar la visión de nuestros clientes en realidad, entregando proyectos de construcción de la más alta calidad que superen expectativas y generen valor a largo plazo para la comunidad de Huancayo y la región central del Perú.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-rivamez-navy/10 to-white p-10 rounded-2xl border border-rivamez-navy/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rivamez-green to-rivamez-cyan rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ser la constructora líder en la región central del Perú, reconocida por la excelencia en la ejecución de proyectos, innovación tecnológica, compromiso con la sostenibilidad y la satisfacción total de nuestros clientes.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impulsados por la Excelencia */}
        <section id="excelencia" className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rivamez-cyan/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rivamez-green/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
                Impulsados por la Excelencia
                <span className="block text-rivamez-cyan mt-2">Definidos por Nuestra Gente</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Los clientes necesitan equipos con perspectivas integrales — equipos capaces de desempeñarse al más alto nivel,
                  superando los límites de lo posible y produciendo resultados que transforman el mundo. En RIVAMEZ, 
                  eso es por lo que nuestra gente es conocida, y es lo que nos distingue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Con presencia en 7 distritos de Huancayo, tenemos colegas de diferentes orígenes, culturas y especializaciones 
                  que aportan una combinación única de habilidades altamente especializadas, experiencia y conocimiento incomparable.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Investimos en atraer talento de clase mundial y lo fomentamos en el trabajo. A través de nuestra cultura de 
                  aprendizaje, colaboración y crecimiento, empoderamos a los miembros de nuestro equipo para convertirse en 
                  los mejores en lo que hacen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: "285+", label: "Proyectos Entregados", icon: "🏗️" },
                  { value: "150+", label: "Profesionales", icon: "👥" },
                  { value: "15+", label: "Años de Trayectoria", icon: "📅" },
                  { value: "98%", label: "Satisfacción Cliente", icon: "⭐" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-rivamez-navy mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <a
                href="#valores"
                className="inline-flex items-center gap-2 px-8 py-4 bg-rivamez-navy text-white font-semibold rounded-xl hover:bg-rivamez-navy/90 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Conoce Nuestros Valores
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Establecemos el Estándar */}
        <section className="py-32 px-4 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(15, 23, 42, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 23, 42, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
                Establecemos el Estándar
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Nuestros centros de excelencia especializados son centros de experiencia técnica, 
                impulsados por las mentes más brillantes de la industria.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Centro BIM de Excelencia",
                  icon: "💻",
                  description: "Modelado de Información de Construcción de última generación para entregar proyectos más eficientes, precisos y sin errores.",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Centro de Sostenibilidad",
                  icon: "🌱",
                  description: "Soluciones sostenibles que garantizan la eficiencia energética y el respeto al medio ambiente en cada proyecto.",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  title: "Centro de Seguridad",
                  icon: "🦺",
                  description: "Cultura de seguridad rigurosa que protege a nuestros colaboradores y garantiza cero accidentes en obra.",
                  color: "from-orange-500 to-red-600"
                },
                {
                  title: "Laboratorio de Innovación",
                  icon: "🔬",
                  description: "Investigación y desarrollo de nuevas tecnologías y materiales para la construcción del futuro.",
                  color: "from-purple-500 to-pink-600"
                },
                {
                  title: "Centro de Capacitación",
                  icon: "🎓",
                  description: "Programas de formación continua para mantener a nuestro equipo a la vanguardia de la industria.",
                  color: "from-rivamez-cyan to-blue-700"
                },
                {
                  title: "Control de Calidad",
                  icon: "✅",
                  description: "Procesos rigurosos de verificación que garantizan los más altos estándares en cada etapa del proyecto.",
                  color: "from-rivamez-navy to-gray-800"
                }
              ].map((center, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`h-2 bg-gradient-to-r ${center.color}`} />
                  <div className="p-8">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {center.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{center.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{center.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-rivamez-navy to-rivamez-cyan rounded-3xl p-12 text-white text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Asociarse con RIVAMEZ significa acceso a una red de especialistas líderes en la industria
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Cuyo conocimiento e ingenio entregan valor y aseguran el éxito de sus proyectos más complejos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/proyectos"
                  className="px-8 py-4 bg-white text-rivamez-navy font-bold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Ver Proyectos
                </a>
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  Contactar
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programas de Reconocimiento */}
        <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
                Reconocimiento a la Excelencia
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Programas especiales que honran a nuestros profesionales más destacados
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-10 shadow-xl border-2 border-rivamez-cyan/20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-2xl mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Maestros RIVAMEZ</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Programa que reconoce a ingenieros y arquitectos senior que han alcanzado estatura de clase mundial 
                  en su campo de especialización. Elegidos por sus logros técnicos sustanciales a lo largo de sus carreras.
                </p>
                <div className="flex items-center gap-3 text-rivamez-cyan font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>12 Maestros Certificados</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-10 shadow-xl border-2 border-rivamez-green/20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rivamez-green to-emerald-700 rounded-2xl mb-6">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Especialistas Técnicos Distinguidos</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Reconocimiento a empleados que han realizado contribuciones técnicas particularmente significativas 
                  al éxito de RIVAMEZ. Promueven la excelencia técnica a través de la aplicación de tecnología avanzada.
                </p>
                <div className="flex items-center gap-3 text-rivamez-green font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>28 Especialistas Activos</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestro Equipo Directivo
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Líderes con décadas de experiencia comprometidos con la excelencia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-rivamez-cyan font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section id="valores" className="py-20 px-4 bg-white relative overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada uno de nuestros proyectos
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Clientes que Confían en Nosotros
              </h2>
              <p className="text-xl text-gray-600">
                Empresas líderes eligen RIVAMEZ para sus proyectos
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-lg transition-all duration-300"
                >
                  <img src={client} alt={`Cliente ${idx + 1}`} className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Liderazgo Section */}
        <section id="liderazgo" className="scroll-mt-20">
          <Team />
        </section>

        {/* Historia/Timeline Section */}
        <Timeline />

        {/* Valores & Cultura Section */}
        <section id="valores" className="scroll-mt-20">
          <Values />
        </section>

        {/* Certificaciones Section */}
        <section id="certificaciones" className="scroll-mt-20">
          <Certifications />
        </section>

        {/* Premios y Logros Section */}
        <section id="premios" className="py-20 px-4 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-4">
                Premios y Reconocimientos
              </h2>
              <p className="text-xl text-gray-600">
                Galardones que validan nuestro compromiso con la excelencia
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: '2024',
                  title: 'Mejor Constructora Regional',
                  org: 'Cámara de Comercio de Junín',
                  icon: '🏆'
                },
                {
                  year: '2023',
                  title: 'Premio a la Innovación',
                  org: 'Ministerio de Vivienda',
                  icon: '💡'
                },
                {
                  year: '2023',
                  title: 'Certificación ISO 9001',
                  org: 'Bureau Veritas',
                  icon: '✓'
                },
                {
                  year: '2022',
                  title: 'Obra del Año',
                  org: 'Asociación de Constructores',
                  icon: '🏗️'
                },
                {
                  year: '2021',
                  title: 'Empresa Socialmente Responsable',
                  org: 'Perú 2021',
                  icon: '🌱'
                },
                {
                  year: '2020',
                  title: 'Excelencia en Gestión',
                  org: 'CAPECO',
                  icon: '⭐'
                }
              ].map((award, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="text-5xl mb-4">{award.icon}</div>
                  <div className="text-rivamez-cyan font-bold text-xl mb-2">{award.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.org}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Logros Destacados Section */}
        <section id="logros" className="py-20 px-4 scroll-mt-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-4">
                Logros Destacados
              </h2>
              <p className="text-xl text-gray-600">
                Hitos que marcan nuestra trayectoria
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: '285+',
                  label: 'Proyectos Completados',
                  desc: 'En Huancayo y Junín'
                },
                {
                  number: '95%',
                  label: 'Clientes Satisfechos',
                  desc: 'Recomendarían nuestros servicios'
                },
                {
                  number: '15+',
                  label: 'Años de Experiencia',
                  desc: 'Construyendo confianza'
                },
                {
                  number: '50+',
                  label: 'Colaboradores',
                  desc: 'Equipo multidisciplinario'
                }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-rivamez-navy to-rivamez-cyan p-8 rounded-2xl text-white text-center shadow-2xl"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                  <h3 className="text-2xl font-bold mb-2">{stat.label}</h3>
                  <p className="text-gray-200">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsabilidad Social Section */}
        <section id="rse" className="py-20 px-4 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-rivamez-navy mb-4">
                Responsabilidad Social
              </h2>
              <p className="text-xl text-gray-600">
                Comprometidos con el desarrollo de nuestra comunidad
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '🌱',
                  title: 'Medio Ambiente',
                  desc: 'Construcción sostenible y uso de materiales eco-amigables'
                },
                {
                  icon: '👷',
                  title: 'Desarrollo Local',
                  desc: 'Capacitación y empleo para la comunidad local'
                },
                {
                  icon: '🏘️',
                  title: 'Impacto Social',
                  desc: 'Programas de vivienda accesible y espacios públicos'
                },
                {
                  icon: '📚',
                  title: 'Educación',
                  desc: 'Becas y talleres técnicos para jóvenes'
                },
                {
                  icon: '🤝',
                  title: 'Colaboración',
                  desc: 'Alianzas con ONGs y gobierno local'
                },
                {
                  icon: '♻️',
                  title: 'Reciclaje',
                  desc: 'Gestión responsable de residuos de construcción'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para Empezar tu Proyecto?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Contáctanos hoy y descubre cómo podemos hacer realidad tu visión
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="tel:+51943818788"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  Llamar Ahora
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl=""
      />
    </div>
  );
}
