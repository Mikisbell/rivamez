// components/Testimonials.js
'use client';

import { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Carlos Mendoza Pérez',
    role: 'Propietario - Torres del Valle',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Excelente trabajo de GRUPO RIVAMEZ. Cumplieron con todos los plazos y la calidad superó nuestras expectativas. Mi departamento es exactamente lo que soñé, con acabados premium y una vista espectacular del Valle del Mantaro.',
    rating: 5,
    project: 'Torres del Valle'
  },
  {
    id: 2,
    name: 'María Elena Rojas',
    role: 'Gerente General - Inversiones El Tambo SAC',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'La construcción de nuestra plaza comercial fue impecable. El equipo de RIVAMEZ demostró profesionalismo en cada etapa. Hoy tenemos un centro comercial moderno que es orgullo de Huancayo. Totalmente recomendados.',
    rating: 5,
    project: 'Plaza Comercial San Carlos'
  },
  {
    id: 3,
    name: 'Roberto Villanueva Castro',
    role: 'Director - Colegio Los Andes',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    content: 'GRUPO RIVAMEZ construyó nuestro centro educativo con un diseño innovador y funcional. Las instalaciones son de primer nivel y nuestros alumnos disfrutan de espacios seguros y modernos. Un socio confiable para proyectos de gran envergadura.',
    rating: 5,
    project: 'Centro Educativo Los Andes'
  },
  {
    id: 4,
    name: 'Ana Lucía Torres',
    role: 'Propietaria - Condominio Los Portales',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    content: 'Vivir en Los Portales es un privilegio. RIVAMEZ creó un condominio con todas las comodidades que buscábamos: seguridad, áreas verdes, piscina y casa club. La atención al detalle en los acabados es notable. ¡Felices con nuestra inversión!',
    rating: 5,
    project: 'Condominio Los Portales'
  },
  {
    id: 5,
    name: 'Dr. Javier Campos Quispe',
    role: 'Director Médico - Clínica Central',
    image: 'https://randomuser.me/api/portraits/men/68.jpg',
    content: 'La construcción de nuestra clínica requería precisión técnica y cumplimiento estricto de normativas. RIVAMEZ entregó un proyecto que supera estándares internacionales. Cada quirófano, cada ambiente fue diseñado pensando en la eficiencia médica.',
    rating: 5,
    project: 'Hospital Clínica Central'
  },
  {
    id: 6,
    name: 'Patricia Robles Huamán',
    role: 'CEO - Tech Solutions Peru',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    content: 'Nuestras oficinas corporativas son el reflejo de nuestra visión empresarial. RIVAMEZ entendió nuestras necesidades y entregó un edificio sustentable, tecnológico y con espacios que inspiran productividad. El mejor partner constructivo.',
    rating: 5,
    project: 'Oficinas Corporativas Mantaro'
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="testimonios" ref={sectionRef} className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rivamez-navy/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rivamez-cyan/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-navy/10 text-rivamez-navy text-sm font-semibold rounded-full mb-4">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro. Conoce sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-rivamez-cyan hover:shadow-2xl hover:shadow-rivamez-cyan/10 hover:-translate-y-2 transition-all duration-500 opacity-0"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-rivamez-cyan"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-rivamez-cyan font-semibold mt-1">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan p-8 rounded-2xl"
        >
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Satisfacción</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">250+</div>
            <div className="text-sm opacity-90">Clientes Felices</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Años Experiencia</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">5.0</div>
            <div className="text-sm opacity-90">Calificación</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
