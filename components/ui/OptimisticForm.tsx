'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OptimisticForm({ onSubmit, children, successMessage = "¡Enviado correctamente!" }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState('idle'); // idle, success, error
  const [optimisticData, setOptimisticData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Actualización optimista inmediata
    setOptimisticData(data);
    setStatus('pending');

    startTransition(async () => {
      try {
        await onSubmit(data);
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          setOptimisticData(null);
        }, 3000);
      } catch (error) {
        // Rollback en caso de error
        setStatus('error');
        setOptimisticData(null);
        setTimeout(() => setStatus('idle'), 3000);
      }
    });
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        {typeof children === 'function' ? children({ isPending, status }) : children}
      </form>

      {/* Status Messages */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center gap-3"
          >
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-800 font-semibold">{successMessage}</span>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="mt-4 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-center gap-3"
          >
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="text-red-800 font-semibold">Error al enviar. Intenta nuevamente.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isPending && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-rivamez-cyan border-t-transparent rounded-full animate-spin" />
              <p className="text-rivamez-navy font-semibold">Enviando...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
