'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoUrl, title, duration }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl bg-rivamez-navy rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-rivamez-navy to-rivamez-cyan/20 px-6 py-4 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    {duration && (
                      <p className="text-sm text-gray-300">Duración: {duration}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Cerrar video"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative bg-black aspect-video">
              {videoUrl ? (
                <iframe
                  src={videoUrl}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                // Placeholder cuando no hay video - Imagen generada
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src="/images/video-placeholder.svg" 
                    alt="Video Corporativo RIVAMEZ - Próximamente"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay con mensaje adicional */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-12">
                    <div className="text-center px-8">
                      <p className="text-white text-lg font-semibold mb-2">
                        🎬 Próximamente: Video Corporativo 4K
                      </p>
                      <p className="text-white/80 text-sm">
                        Drone shots, time-lapse de construcciones y testimonios de clientes
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer - Quick Actions */}
            <div className="bg-gradient-to-r from-rivamez-navy to-rivamez-cyan/20 px-6 py-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-300">
                  ¿Te gustó lo que viste?
                </div>
                <div className="flex gap-3">
                  <a
                    href="/proyectos"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Ver Proyectos
                  </a>
                  <a
                    href="#contacto"
                    onClick={onClose}
                    className="px-4 py-2 bg-rivamez-cyan hover:bg-rivamez-cyan/90 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
