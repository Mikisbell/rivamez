// components/Projects.js
'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Torres del Valle',
    location: 'Av. Ferrocarril, Huancayo',
    area: '3,850 m²',
    year: '2024',
    category: 'Residencial',
    description: 'Complejo de 2 torres con 72 departamentos premium de 2 y 3 dormitorios. Incluye gimnasio, sala de eventos, juegos infantiles y estacionamiento techado. Vista panorámica al Valle del Mantaro.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    features: ['Gimnasio equipado', 'Seguridad 24/7', 'Áreas verdes', '2 ascensores por torre']
  },
  {
    id: 2,
    title: 'Plaza Comercial San Carlos',
    location: 'El Tambo, Huancayo',
    area: '5,200 m²',
    year: '2023',
    category: 'Comercial',
    description: 'Centro comercial de 4 niveles con 95 locales comerciales, food court con capacidad para 300 personas, cines multiplex y estacionamiento para 180 vehículos. Diseño moderno y sostenible.',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80',
    features: ['95 locales', 'Food court', 'Cines', 'Estacionamiento 180 autos']
  },
  {
    id: 3,
    title: 'Condominio Los Portales',
    location: 'Chilca, Huancayo',
    area: '6,400 m²',
    year: '2024',
    category: 'Residencial',
    description: 'Exclusivo condominio de 42 casas de 2 y 3 pisos con diseño contemporáneo. Casa club, piscina temperada, cancha multideportiva, parque infantil y circuito de jogging. Máxima privacidad y confort.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    features: ['Casa club', 'Piscina', 'Cancha deportiva', 'Seguridad privada']
  },
  {
    id: 4,
    title: 'Hospital Clínica Central',
    location: 'Av. Real, Huancayo',
    area: '4,600 m²',
    year: '2023',
    category: 'Institucional',
    description: 'Moderna clínica de 5 pisos con 80 camas, quirófanos de última generación, UCI, emergencia y laboratorio clínico. Equipamiento médico de primer nivel y tecnología avanzada.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    features: ['80 camas', '6 quirófanos', 'UCI completa', 'Laboratorio']
  },
  {
    id: 5,
    title: 'Oficinas Corporativas Mantaro',
    location: 'San Carlos, Huancayo',
    area: '3,200 m²',
    year: '2024',
    category: 'Comercial',
    description: 'Edificio de oficinas AAA con 8 pisos, 64 oficinas ejecutivas, salas de reuniones, auditorio para 120 personas, terraza lounge y estacionamiento exclusivo. Certificación LEED.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    features: ['Certificación LEED', 'Auditorio 120 personas', 'Terraza lounge', '64 oficinas']
  },
  {
    id: 6,
    title: 'Centro Educativo Los Andes',
    location: 'Pilcomayo, Huancayo',
    area: '7,800 m²',
    year: '2023',
    category: 'Educativo',
    description: 'Complejo educativo de nivel inicial, primaria y secundaria con capacidad para 1,200 alumnos. Laboratorios, biblioteca, auditorio, coliseo deportivo, canchas y áreas recreativas.',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    features: ['1,200 alumnos', 'Laboratorios', 'Coliseo deportivo', 'Biblioteca']
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const cards = cardsRef.current;
    
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );

    // Animate cards
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="proyectos"
      ref={sectionRef} 
      className="py-24 px-4 bg-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rivamez-cyan/10 text-rivamez-cyan text-sm font-semibold rounded-full mb-4">
            PORTAFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra excelencia en cada proyecto entregado
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-rivamez-cyan/20 hover:-translate-y-2 transition-all duration-500 opacity-0 border border-gray-100 hover:border-rivamez-cyan/30"
            >
              {/* Image Placeholder */}
              <div className="relative h-72 bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-gray-500 text-sm font-medium">Imagen del Proyecto</span>
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-rivamez-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-rivamez-navy rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver Detalles
                  </button>
                </div>

                {/* Project Type Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-rivamez-navy">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rivamez-cyan transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-rivamez-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-rivamez-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-rivamez-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Completado en {project.year}</span>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-rivamez-cyan to-rivamez-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-rivamez-navy text-white font-semibold rounded-lg hover:bg-rivamez-cyan transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Ver Todos los Proyectos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
