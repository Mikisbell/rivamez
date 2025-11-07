// app/proyectos/page.js
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/NavbarNew';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const categories = ['Todos', 'Residencial', 'Comercial', 'Institucional', 'Remodelación'];

const projects = [
  {
    title: 'Torres del Valle Premium',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    location: 'El Tambo, Huancayo',
    area: '12,500 m²',
    units: '72 departamentos',
    status: 'Completado',
    year: '2023',
    description: 'Complejo residencial de lujo con 3 torres de 15 pisos cada una, amenities completos incluyendo piscina, gimnasio, áreas verdes y seguridad 24/7.',
    features: ['3 Torres', '15 Pisos c/u', 'Piscina', 'Gimnasio', 'Áreas Verdes', 'Seguridad 24/7']
  },
  {
    title: 'Plaza San Carlos',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    location: 'Centro, Huancayo',
    area: '8,200 m²',
    units: '95 locales comerciales',
    status: 'Completado',
    year: '2022',
    description: 'Centro comercial moderno con arquitectura contemporánea, sistema de climatización inteligente y amplios estacionamientos.',
    features: ['95 Locales', '4 Niveles', 'Food Court', 'Cines', 'Parqueos', 'Smart Building']
  },
  {
    title: 'Clínica Santa Isabel',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    location: 'Chilca, Huancayo',
    area: '6,500 m²',
    units: '80 camas',
    status: 'En Construcción',
    year: '2024',
    description: 'Clínica especializada de último nivel con 6 quirófanos equipados, UCI moderna y tecnología médica de punta.',
    features: ['80 Camas', '6 Quirófanos', 'UCI', 'Emergencia', 'Laboratorio', 'Imagenología']
  },
  {
    title: 'Condominio Los Portales',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    location: 'San Antonio, Huancayo',
    area: '15,000 m²',
    units: '42 casas',
    status: 'Completado',
    year: '2023',
    description: 'Exclusivo condominio de 42 casas unifamiliares con acabados de lujo, áreas comunes y parque central.',
    features: ['42 Casas', 'Parque Central', 'Club House', 'Canchas', 'Juegos', 'Seguridad']
  },
  {
    title: 'Edificio Corporativo Mantaro',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    location: 'Real, Huancayo',
    area: '5,800 m²',
    units: '120 oficinas',
    status: 'Completado',
    year: '2022',
    description: 'Edificio inteligente clase AAA con certificación LEED, tecnología de automatización y eficiencia energética.',
    features: ['8 Pisos', '120 Oficinas', 'LEED', 'Domótica', 'Helipuerto', 'Smart AC']
  },
  {
    title: 'Colegio Innova',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    location: 'El Tambo, Huancayo',
    area: '10,000 m²',
    units: '1,200 alumnos',
    status: 'Completado',
    year: '2021',
    description: 'Institución educativa moderna con aulas inteligentes, laboratorios equipados, auditorio y complejo deportivo.',
    features: ['40 Aulas', 'Laboratorios', 'Auditorio', 'Polideportivo', 'Biblioteca', 'Cafetería']
  },
  {
    title: 'Residencial Vista Hermosa',
    category: 'Remodelación',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    location: 'Huancayo',
    area: '4,500 m²',
    units: '28 departamentos',
    status: 'Completado',
    year: '2023',
    description: 'Remodelación integral de edificio antiguo transformándolo en residencial moderno con todos los servicios.',
    features: ['Fachada Nueva', 'Refuerzo', 'Ascensores', 'Terrazas', 'Áreas Verdes', 'Estacionamiento']
  },
  {
    title: 'Hotel Business Huancayo',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    location: 'Centro, Huancayo',
    area: '7,200 m²',
    units: '85 habitaciones',
    status: 'En Construcción',
    year: '2024',
    description: 'Hotel 4 estrellas con salas de conferencias, restaurante, spa y rooftop bar con vista panorámica.',
    features: ['85 Habitaciones', 'Restaurante', 'Spa', 'Conferencias', 'Rooftop', 'Piscina']
  },
  {
    title: 'Centro Médico San Jorge',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&q=80',
    location: 'Chilca, Huancayo',
    area: '3,500 m²',
    units: '45 consultorios',
    status: 'Completado',
    year: '2022',
    description: 'Centro médico multiespecialidad con equipamiento moderno y atención integral de salud.',
    features: ['45 Consultorios', 'Emergencia', 'Farmacia', 'Laboratorio', 'Rayos X', 'Ecografía']
  }
];

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
                PORTAFOLIO
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Nuestros Proyectos
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                285+ proyectos completados con éxito en Huancayo y la región Junín, construyendo el futuro de la infraestructura peruana
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="sticky top-20 z-30 py-6 px-4 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg shadow-rivamez-cyan/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Completado' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-rivamez-cyan transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Área</div>
                        <div className="text-sm font-bold text-gray-900">{project.area}</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-500 mb-1">Unidades</div>
                        <div className="text-sm font-bold text-gray-900">{project.units}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-rivamez-cyan/10 text-rivamez-cyan text-xs font-semibold rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">
                          +{project.features.length - 3} más
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-rivamez-cyan/30 transition-all duration-300">
                      Ver Detalles
                    </button>
                  </div>
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
                ¿Tienes un Proyecto en Mente?
              </h2>
              <p className="text-xl mb-8 text-gray-200">
                Convierte tu visión en realidad con los expertos de RIVAMEZ
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
