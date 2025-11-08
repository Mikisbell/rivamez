'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Open search with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mock search data - replace with real search API
  const searchData = [
    { title: 'Inicio', url: '/', category: 'Página' },
    { title: 'Empresa', url: '/nosotros', category: 'Compañía' },
    { title: 'Liderazgo', url: '/nosotros#liderazgo', category: 'Compañía' },
    { title: 'Valores & Cultura', url: '/nosotros#valores', category: 'Compañía' },
    { title: 'Certificaciones', url: '/nosotros#certificaciones', category: 'Compañía' },
    { title: 'Arquitectura', url: '/servicios#arquitectura', category: 'Capacidades' },
    { title: 'Ingeniería', url: '/servicios#ingenieria', category: 'Capacidades' },
    { title: 'Construcción', url: '/servicios#construccion', category: 'Capacidades' },
    { title: 'BIM & Gemelos Digitales', url: '/servicios#bim', category: 'Tecnología' },
    { title: 'Inteligencia Artificial', url: '/servicios#ia', category: 'Tecnología' },
    { title: 'Construcción Modular', url: '/servicios#modular', category: 'Tecnología' },
    { title: 'AR/VR & Drones', url: '/servicios#innovacion', category: 'Tecnología' },
    { title: 'Servicios Residencial', url: '/servicios#residencial', category: 'Servicios' },
    { title: 'Servicios Comercial', url: '/servicios#comercial', category: 'Servicios' },
    { title: 'Proyectos', url: '/proyectos', category: 'Portfolio' },
    { title: 'Blog & Noticias', url: '/blog', category: 'Contenido' },
    { title: 'Contacto', url: '/contacto', category: 'Página' },
  ];

  useEffect(() => {
    if (query.length > 0) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      {/* Search Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-6 z-40 hidden md:flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-rivamez-cyan transition-all shadow-lg"
      >
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="text-sm text-gray-600 dark:text-gray-300">Buscar...</span>
        <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Search Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar en RIVAMEZ..."
                    className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">
                      ESC
                    </kbd>
                  </button>
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto">
                  {results.length > 0 ? (
                    <div className="p-2">
                      {results.map((result, index) => (
                        <Link
                          key={index}
                          href={result.url}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-rivamez-navy to-rivamez-cyan rounded-lg flex items-center justify-center text-white font-bold">
                            {result.title.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-rivamez-cyan">
                              {result.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {result.category}
                            </p>
                          </div>
                          <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  ) : query.length > 0 ? (
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                      <p>No se encontraron resultados para "{query}"</p>
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                      <p>Escribe para buscar...</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
