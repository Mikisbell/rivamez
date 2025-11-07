// components/Services.js
'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Datos de los contadores (estadísticas)
const stats = [
  { id: 1, value: 15, suffix: '+', label: 'Años de Experiencia' },
  { id: 2, value: 285, suffix: '+', label: 'Proyectos Completados' },
  { id: 3, value: 98, suffix: '%', label: 'Satisfacción del Cliente' },
  { id: 4, value: 62, suffix: '+', label: 'Profesionales Certificados' },
];

const services = [
  {
    id: 1,
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    title: 'Construcción Residencial',
    description: 'Diseñamos y construimos viviendas de lujo, condominios y edificios multifamiliares con acabados premium.',
    features: [
      'Casas unifamiliares personalizadas',
      'Edificios multifamiliares de hasta 15 pisos',
      'Condominios cerrados con amenidades',
      'Acabados de alta calidad y diseño moderno'
    ]
  },
  {
    id: 2,
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'Proyectos Comerciales',
    description: 'Desarrollamos centros comerciales, oficinas corporativas, hoteles y espacios comerciales de primer nivel.',
    features: [
      'Centros comerciales y plazas',
      'Edificios de oficinas AAA',
      'Hoteles y establecimientos turísticos',
      'Locales comerciales especializados'
    ]
  },
  {
    id: 3,
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Proyectos Institucionales',
    description: 'Construimos hospitales, clínicas, colegios y edificaciones públicas con estándares internacionales.',
    features: [
      'Hospitales y clínicas especializadas',
      'Centros educativos modernos',
      'Edificios gubernamentales',
      'Infraestructura pública de calidad'
    ]
  },
  {
    id: 4,
    icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    title: 'Remodelación y Ampliación',
    description: 'Transformamos y modernizamos espacios existentes con diseños innovadores y funcionales.',
    features: [
      'Remodelación integral de viviendas',
      'Ampliaciones verticales y horizontales',
      'Modernización de fachadas',
      'Reforzamiento estructural'
    ]
  },
  {
    id: 5,
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
    title: 'Consultoría y Gerencia',
    description: 'Brindamos asesoría especializada en planificación, supervisión y gerencia de proyectos.',
    features: [
      'Estudios de factibilidad',
      'Gerencia de proyectos',
      'Supervisión técnica',
      'Control de calidad y costos'
    ]
  },
  {
    id: 6,
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
    title: 'Diseño y Arquitectura',
    description: 'Servicios completos de diseño arquitectónico, ingeniería y visualización 3D para tus proyectos.',
    features: [
      'Diseño arquitectónico personalizado',
      'Ingeniería estructural',
      'Renders y visualización 3D',
      'Planos y especificaciones técnicas'
    ]
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  useLayoutEffect(() => {
    const counters = counterRefs.current;

    counters.forEach((counter, index) => {
      if (!counter) return;

      const stat = stats[index];
      const endValue = stat.value;

      // Crear un objeto temporal para animar el número
      const obj = { value: 0 };

      gsap.to(obj, {
        value: endValue,
        duration: 2, // Duración del conteo (2 segundos)
        ease: 'power2.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%', // Empieza cuando llega al 80% de la ventana
          toggleActions: 'play none none none',
          // markers: true, // Descomenta para debugging
        },
        onUpdate: () => {
          // Actualiza el texto del contador en cada frame de la animación
          counter.textContent = Math.floor(obj.value);
        },
        onComplete: () => {
          // Al terminar, asegura que muestre el valor exacto
          counter.textContent = endValue;
        },
      });
    });

    // Cleanup cuando el componente se desmonte
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="servicios"
      ref={sectionRef} 
      className="py-20 px-4 bg-rivamez-dark text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-rivamez-cyan/20 text-rivamez-cyan text-sm font-semibold rounded-full mb-4">
            SERVICIOS PROFESIONALES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluciones Integrales de Construcción
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Con más de 15 años de experiencia, ofrecemos servicios completos desde el diseño conceptual hasta la entrega final del proyecto.
          </p>
        </div>

        {/* Grid de Estadísticas/Contadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center p-6 bg-gray-800 rounded-lg"
            >
              <div className="text-5xl font-bold mb-2">
                <span 
                  ref={(el) => (counterRefs.current[index] = el)}
                  className="inline-block"
                >
                  0
                </span>
                <span className="text-blue-400">{stat.suffix}</span>
              </div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lista de Servicios */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:shadow-2xl hover:shadow-rivamez-cyan/20 transition-all duration-300 border border-gray-700 hover:border-rivamez-cyan group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-rivamez-cyan to-rivamez-navy rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-rivamez-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicita una Cotización Gratuita
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
