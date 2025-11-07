// components/Services.js
'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Datos de los contadores (estadísticas)
const stats = [
  { id: 1, value: 15, suffix: '+', label: 'Años de Experiencia' },
  { id: 2, value: 120, suffix: '+', label: 'Proyectos Completados' },
  { id: 3, value: 98, suffix: '%', label: 'Satisfacción del Cliente' },
  { id: 4, value: 50, suffix: '+', label: 'Profesionales Certificados' },
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
        <h2 className="text-4xl font-bold text-center mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Ofrecemos soluciones integrales en construcción, desde el diseño hasta la ejecución final.
        </p>

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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Construcción Residencial</h3>
            <p className="text-gray-400">
              Diseño y construcción de viviendas personalizadas con los más altos estándares de calidad.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Proyectos Comerciales</h3>
            <p className="text-gray-400">
              Desarrollo de espacios comerciales funcionales y modernos adaptados a tu negocio.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Remodelación</h3>
            <p className="text-gray-400">
              Transformamos tus espacios existentes con diseños innovadores y ejecución impecable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
