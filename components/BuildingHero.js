'use client';

import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function BuildingHero() {
  const containerRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effects
  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y3 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Building construction animation states
  const [phase, setPhase] = useState(0); // 0: foundation, 1: structure, 2: finishing

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 1000);
    const timer2 = setTimeout(() => setPhase(2), 2500);
    const timer3 = setTimeout(() => setIsComplete(true), 4000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const buildingLayers = [
    {
      id: 'foundation',
      title: 'Base Sólida',
      subtitle: 'FUNDAMENTOS',
      description: 'Cimientos de concreto armado y sistemas estructurales que garantizan estabilidad y durabilidad.',
      icon: '🏗️',
      gradient: 'from-gray-700 to-gray-900',
      delay: 0,
      height: 'h-32'
    },
    {
      id: 'structure',
      title: 'Construcción + Tecnología',
      subtitle: 'DESARROLLO',
      description: 'Automatización de procesos constructivos con metodologías ágiles y tecnología BIM.',
      icon: '⚙️',
      gradient: 'from-rivamez-navy to-blue-900',
      delay: 0.8,
      height: 'h-40'
    },
    {
      id: 'finishing',
      title: 'Acabados Premium',
      subtitle: 'EXPERIENCIA',
      description: 'Espacios personalizados que transforman tu visión en realidad con estándares de alta gama.',
      icon: '✨',
      gradient: 'from-rivamez-cyan to-rivamez-green',
      delay: 1.6,
      height: 'h-48'
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-gray-900 via-rivamez-dark to-black overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridSlide 20s linear infinite'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-rivamez-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [null, 0.8, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 container-responsive py-20 md:py-32"
        style={{ opacity }}
      >
        {/* Main Title with Reveal Animation */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8"
          >
            <div className="relative mr-3">
              <div className="w-2 h-2 bg-rivamez-cyan rounded-full animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-rivamez-cyan rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-white/90 text-sm md:text-base font-semibold tracking-wide">
              CONSTRUYENDO EL FUTURO DE HUANCAYO
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block text-white">Arquitectura que</span>
            <span className="block bg-gradient-to-r from-rivamez-cyan via-blue-400 to-rivamez-green bg-clip-text text-transparent">
              Transforma Vidas
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Desde la planificación hasta los acabados finales, construimos cada detalle con excelencia
          </motion.p>
        </div>

        {/* Building Visualization */}
        <div className="relative max-w-7xl mx-auto perspective-1000">
          {/* Construction Timeline */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
              {['Cimientos', 'Estructura', 'Acabados'].map((label, idx) => (
                <div key={label} className="flex items-center gap-2">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      phase >= idx ? 'bg-rivamez-cyan' : 'bg-gray-600'
                    }`}
                    animate={phase >= idx ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  />
                  <span className={`text-sm font-medium ${
                    phase >= idx ? 'text-white' : 'text-gray-500'
                  }`}>
                    {label}
                  </span>
                  {idx < 2 && <div className="w-8 h-0.5 bg-gray-700" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Building Layers - Stacked from bottom to top */}
          <div className="relative flex flex-col-reverse items-center gap-1">
            {buildingLayers.map((layer, index) => (
              <BuildingLayer
                key={layer.id}
                layer={layer}
                index={index}
                isVisible={phase >= index}
              />
            ))}
          </div>

          {/* Crane Animation */}
          <motion.div
            className="absolute -top-20 right-0 md:right-20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: phase === 2 ? -50 : 0,
              opacity: phase < 2 ? 1 : 0,
              x: [0, -10, 0]
            }}
            transition={{ 
              y: { duration: 1, delay: 0.5 },
              x: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="text-6xl md:text-8xl">🏗️</div>
          </motion.div>

          {/* Completion Celebration */}
          {isComplete && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="text-6xl animate-bounce">🎉</div>
            </motion.div>
          )}
        </div>

        {/* Feature Cards Below Building */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          {buildingLayers.reverse().map((layer, idx) => (
            <motion.div
              key={layer.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan/20 to-rivamez-navy/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-rivamez-cyan/50 transition-all">
                <div className="text-5xl mb-4">{layer.icon}</div>
                <div className="text-xs font-bold text-rivamez-cyan mb-2 tracking-wider">
                  {layer.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {layer.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {layer.description}
                </p>
                
                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 border-2 border-rivamez-cyan rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <svg className="w-4 h-4 text-rivamez-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#proyectos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-rivamez-cyan to-rivamez-green text-white rounded-xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
            >
              <span>Explora Nuestros Proyectos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Solicitar Cotización
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm">Desliza para descubrir más</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

// Building Layer Component
function BuildingLayer({ layer, index, isVisible }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0, scaleY: 0 }}
      animate={isVisible ? { 
        y: 0, 
        opacity: 1, 
        scaleY: 1 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: layer.delay,
        type: "spring",
        stiffness: 100
      }}
      className="w-full max-w-4xl"
      style={{ transformOrigin: 'bottom' }}
    >
      <motion.div
        whileHover={{ scale: 1.02, z: 50 }}
        className={`
          relative ${layer.height} w-full
          bg-gradient-to-r ${layer.gradient}
          rounded-lg
          border-2 border-white/10
          overflow-hidden
          group cursor-pointer
          shadow-2xl
        `}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4">
            <motion.div
              className="text-4xl md:text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            >
              {layer.icon}
            </motion.div>
            <div>
              <div className="text-xs font-bold text-white/60 mb-1 tracking-wider">
                {layer.subtitle}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                {layer.title}
              </h3>
              <p className="text-sm text-white/80 max-w-md hidden md:block">
                {layer.description}
              </p>
            </div>
          </div>

          {/* Floor indicator */}
          <motion.div
            className="text-6xl md:text-8xl font-bold text-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: layer.delay + 0.5 }}
          >
            {index + 1}
          </motion.div>
        </div>

        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />

        {/* Construction progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-rivamez-cyan"
          initial={{ width: '0%' }}
          animate={isVisible ? { width: '100%' } : {}}
          transition={{ duration: 1, delay: layer.delay }}
        />
      </motion.div>
    </motion.div>
  );
}
