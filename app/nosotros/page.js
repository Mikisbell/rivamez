// app/nosotros/page.js
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-gradient-to-br from-rivamez-navy via-gray-900 to-rivamez-dark text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} className="absolute inset-0" />
          </div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold mb-6">
                SOBRE NOSOTROS
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Construyendo el Futuro de Huancayo
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Desde 2009, GRUPO RIVAMEZ ha sido líder en el desarrollo de proyectos residenciales, comerciales e institucionales en la región central del Perú, transformando la visión de nuestros clientes en realidad.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-rivamez-cyan mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
        <section className="py-20 px-4 bg-white relative overflow-hidden">
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
