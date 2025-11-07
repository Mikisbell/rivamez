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
    <section id="inicio" className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #06B6D4 100%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(at 20% 30%, rgba(6, 182, 212, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(30, 58, 138, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(6, 182, 212, 0.2) 0px, transparent 50%),
          radial-gradient(at 0% 80%, rgba(15, 23, 42, 0.3) 0px, transparent 50%)
        `
      }} />

      {/* Dot Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
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

      {/* Hospital Blueprint Background - Hidden on mobile */}
      <div 
        className="absolute inset-0 opacity-0 md:opacity-5"
        style={{
          backgroundImage: 'url(/images/hospital-blueprint.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Blurred Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-rivamez-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
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
            <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">Construyendo el futuro de Huancayo desde 2009</span>
            <svg className="w-4 h-4 ml-2 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
          >
            Desarrollo de proyectos residenciales y comerciales de alta gama en Huancayo, Perú
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center"
          >
            <a
              href="#proyectos"
              className="w-full sm:w-auto group relative px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors">Ver Proyectos</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contacto"
              className="w-full sm:w-auto group px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-rivamez-navy hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/30 text-center"
            >
              Solicitar Cotización
            </a>
          </motion.div>
            </div>

            {/* Right Column - Robot Ingeniero */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              {/* Glow effect behind robot - con animación pulsante */}
              <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan/20 to-rivamez-green/20 rounded-full animate-glow-pulse" />
              
              {/* Robot Image - con animación compleja */}
              <img 
                src="/images/robot-ingeniero.svg" 
                alt="Robot Ingeniero RIVAMEZ - Tecnología en Construcción" 
                className="relative w-full max-w-lg h-auto drop-shadow-2xl animate-robot-dance"
              />
              
              {/* Partículas decorativas animadas - Hidden on mobile */}
              <div className="hidden lg:block absolute top-10 left-10 w-3 h-3 bg-rivamez-cyan rounded-full animate-ping" />
              <div className="hidden lg:block absolute bottom-20 right-10 w-2 h-2 bg-rivamez-green rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="hidden lg:block absolute top-1/2 left-5 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats - Moved below */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 right-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center md:border-x border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">285+</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Proyectos Completados</div>
            </div>
            <div className="text-center md:border-r border-white/20">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-green bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan bg-clip-text text-transparent mb-2">62+</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Profesionales</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex"
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
