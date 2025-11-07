'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(6, 182, 212, 0.7) 100%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(30deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
            linear-gradient(150deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
            linear-gradient(30deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4),
            linear-gradient(150deg, #06B6D4 12%, transparent 12.5%, transparent 87%, #06B6D4 87.5%, #06B6D4)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge - Dataiku Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-8 shadow-lg hover:bg-white/15 transition-all duration-300 group"
          >
            <div className="relative mr-3">
              <div className="w-2 h-2 bg-rivamez-cyan rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-rivamez-cyan rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-white text-sm font-semibold tracking-wide">Construyendo el futuro de Huancayo desde 2009</span>
            <svg className="w-4 h-4 ml-2 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="block">Construimos</span>
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              Sueños Sólidos
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light"
          >
            Desarrollo de proyectos residenciales y comerciales de alta gama en Huancayo, Perú
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#proyectos"
              className="group relative px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors">Ver Proyectos</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-rivamez-navy hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/30"
            >
              Solicitar Cotización
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-200 text-sm font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center md:border-x border-white/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">285+</div>
              <div className="text-gray-200 text-sm font-medium">Proyectos Completados</div>
            </div>
            <div className="text-center md:border-r border-white/20">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-green bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-gray-200 text-sm font-medium">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">62+</div>
              <div className="text-gray-200 text-sm font-medium">Profesionales</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll para explorar</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
