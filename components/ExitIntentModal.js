'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    // Check if user already saw the modal
    const hasSeenModal = localStorage.getItem('exitIntentShown');
    if (hasSeenModal) return;

    const handleMouseLeave = (e) => {
      // Only trigger when mouse leaves from top of page
      if (e.clientY <= 0 && !hasSeenModal) {
        setIsOpen(true);
        trackEvent.exitIntentShown();
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [mounted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Track conversion
    trackEvent.exitIntentConverted();
    trackEvent.formSubmit('Exit Intent Lead Magnet');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);

    // Auto download lead magnet PDF
    setTimeout(() => {
      // Aquí iría la descarga real del PDF
      setIsOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {!submitted ? (
                <>
                  {/* Close Button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="bg-gradient-to-br from-rivamez-navy to-rivamez-cyan p-8 text-white text-center">
                    <div className="text-5xl mb-4">🎁</div>
                    <h2 className="text-3xl font-bold mb-2">
                      ¡Espera! Regalo Especial
                    </h2>
                    <p className="text-cyan-100">
                      Descarga GRATIS nuestra guía exclusiva
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        📘 "10 Errores que Encarecen tu Proyecto de Construcción"
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Descubre cómo ahorrar hasta <strong className="text-rivamez-cyan">30%</strong> en tu proyecto evitando estos errores comunes
                      </p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Planificación efectiva desde el inicio
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Selección correcta de materiales
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Tecnología BIM para prevenir errores
                        </li>
                      </ul>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="exit-email" className="block text-sm font-medium text-gray-700 mb-2">
                          Ingresa tu email para descargar:
                        </label>
                        <input
                          type="email"
                          id="exit-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@email.com"
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-rivamez-cyan focus:ring-2 focus:ring-rivamez-cyan/20 outline-none transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white font-bold py-4 px-6 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      >
                        📥 Descargar Guía Gratis
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        No spam. Solo contenido valioso para tu proyecto.
                      </p>
                    </form>
                  </div>
                </>
              ) : (
                // Success State
                <div className="p-12 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    ¡Listo! Descargando...
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Revisa tu email. Te enviamos la guía completa.
                  </p>
                  <div className="inline-flex items-center gap-2 text-rivamez-cyan">
                    <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Preparando descarga...
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
