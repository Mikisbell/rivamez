'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import VideoModal from '@/components/ui/VideoModal';

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-[100dvh] overflow-hidden flex flex-col">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #113572 50%, #1385BB 100%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(at 20% 30%, rgba(19, 133, 187, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(17, 53, 114, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 80%, rgba(19, 133, 187, 0.2) 0px, transparent 50%),
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
            linear-gradient(30deg, #1385BB 12%, transparent 12.5%, transparent 87%, #1385BB 87.5%, #1385BB),
            linear-gradient(150deg, #1385BB 12%, transparent 12.5%, transparent 87%, #1385BB 87.5%, #1385BB),
            linear-gradient(30deg, #1385BB 12%, transparent 12.5%, transparent 87%, #1385BB 87.5%, #1385BB),
            linear-gradient(150deg, #1385BB 12%, transparent 12.5%, transparent 87%, #1385BB 87.5%, #1385BB)
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
      {/* pt-40 en tablet: el buscador flotante (fixed, top-24) cae justo sobre la fila
          del badge cuando el texto ocupa todo el ancho. */}
      <div className="relative z-10 flex-1 flex items-center section-padding pt-20 md:pt-40 lg:pt-28 pb-6">
        <div className="container-responsive w-full">
          {/* En tablet (md-lg) el grid sigue siendo de una columna: la ilustracion baja
              como segunda fila y rellena el aire muerto que dejaba el centrado vertical. */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 items-center">
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
                <span className="text-white text-small font-semibold tracking-wide">Ingeniería, arquitectura y gestión de proyectos en Huancayo desde 2015</span>
                <svg className="w-4 h-4 ml-2 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="heading-hero text-white mb-responsive leading-tight"
              >
                <span className="block">Construimos</span>
                {/* Sobre el azul del hero van las variantes CLARAS de la marca:
                    celeste #5BBCE4 (5.5:1 sobre navy) y verde lima #8FCB5E (6.1:1). */}
                <span className="block bg-gradient-to-r from-rivamez-cyan-lighter to-rivamez-lime-light bg-clip-text text-transparent">
                  Sueños Sólidos
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-body text-gray-200 mb-responsive max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed"
              >
                Desarrollo de proyectos residenciales y comerciales de alta gama en Huancayo, Perú
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-stretch sm:items-center w-full"
              >
                <a
                  href="#proyectos"
                  className="w-full sm:w-auto group relative btn-primary bg-white text-rivamez-navy rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan to-rivamez-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 group-hover:text-white transition-colors">Ver Proyectos</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto group btn-secondary bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-rivamez-navy hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/30 text-center"
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
              className="relative hidden md:flex lg:flex justify-center items-center max-lg:[@media(max-height:820px)]:hidden"
            >
              {/* max-h en tablet: en pantallas bajas (landscape) la ilustracion se encoge
                  sola y evita que el contenido del hero se desborde hacia arriba. */}
              <div className="relative w-full max-w-[260px] max-h-[32dvh] lg:max-w-[260px] lg:max-h-none xl:max-w-[320px] aspect-square">
                {/* Glow effect behind robot */}
                <div className="absolute inset-0 bg-gradient-to-r from-rivamez-cyan/20 to-rivamez-lime/20 rounded-full animate-glow-pulse" />

                {/* Robot Image */}
                <img
                  src="/images/robot-ingeniero.svg"
                  alt="Robot Ingeniero RIVAMEZ - Tecnología en Construcción"
                  className="relative w-full h-full object-contain drop-shadow-2xl animate-robot-dance"
                />

                {/* Partículas decorativas */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-rivamez-cyan rounded-full animate-ping" />
                <div className="absolute bottom-10 right-6 w-2 h-2 bg-rivamez-lime rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 px-4 pb-10 md:pb-12 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-6xl mx-auto px-4"
        >
          {/* Vidrio OSCURO: el degradado del hero termina en celeste de marca y un vidrio
              blanco aclaraba la zona hasta hacer ilegibles cifras y etiquetas. */}
          {/* Solo metricas verificables: antiguedad registral, proyectos respaldados por
              contratos, certificados ISO con numero propio y verificacion publica en linea. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-rivamez-dark/45 backdrop-blur-md rounded-2xl p-4 md:p-8 border border-white/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan-lighter bg-clip-text text-transparent mb-2">
                +10 <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">años</span>
              </div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">De empresa formal desde 2015</div>
            </div>
            <div className="text-center md:border-x border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan-lighter bg-clip-text text-transparent mb-2">+50</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Proyectos desarrollados</div>
            </div>
            <div className="text-center md:border-r border-white/20">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-lime-light bg-clip-text text-transparent mb-2">4</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Certificaciones ISO vigentes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-rivamez-cyan-lighter bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-200 text-xs sm:text-sm font-medium">Verificable en línea</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/90 text-sm hidden md:block">Scroll para explorar</span>
          <span className="text-white/90 text-xs md:hidden">Desliza</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="" // Dejar vacío hasta tener el video en YouTube/Vimeo
        title="RIVAMEZ - Construyendo Huancayo"
        duration="3:00"
      />
    </section>
  );
}
