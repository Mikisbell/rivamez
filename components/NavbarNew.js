// components/NavbarNew.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const megaMenuData = {
  servicios: {
    sections: [
      {
        title: 'Construcción',
        links: [
          { name: 'Construcción Residencial', href: '/servicios', desc: 'Viviendas y edificios multifamiliares' },
          { name: 'Proyectos Comerciales', href: '/servicios', desc: 'Centros comerciales y oficinas' },
          { name: 'Proyectos Institucionales', href: '/servicios', desc: 'Hospitales y centros educativos' },
        ]
      },
      {
        title: 'Servicios Especializados',
        links: [
          { name: 'Remodelación', href: '/servicios', desc: 'Transformación de espacios' },
          { name: 'Consultoría', href: '/servicios', desc: 'Gerencia de proyectos' },
          { name: 'Diseño & Arquitectura', href: '/servicios', desc: 'Planos y visualización 3D' },
        ]
      }
    ],
    featured: {
      title: 'Por qué elegirnos',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&q=80',
      desc: 'Más de 15 años construyendo proyectos de excelencia en Huancayo',
      cta: 'Ver todos los servicios',
      href: '/servicios'
    }
  },
  proyectos: {
    sections: [
      {
        title: 'Proyectos Destacados',
        links: [
          { name: 'Torres del Valle', href: '/proyectos', desc: '72 departamentos premium' },
          { name: 'Plaza San Carlos', href: '/proyectos', desc: 'Centro comercial moderno' },
          { name: 'Condominio Los Portales', href: '/proyectos', desc: '42 casas de lujo' },
        ]
      },
      {
        title: 'Por Categoría',
        links: [
          { name: 'Residencial', href: '/proyectos', desc: 'Viviendas y departamentos' },
          { name: 'Comercial', href: '/proyectos', desc: 'Locales y oficinas' },
          { name: 'Institucional', href: '/proyectos', desc: 'Hospitales y colegios' },
        ]
      }
    ],
    featured: {
      title: 'Portafolio Completo',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80',
      desc: '285+ proyectos completados con éxito en Huancayo y Junín',
      cta: 'Ver todos los proyectos',
      href: '/proyectos'
    }
  }
};

export default function NavbarNew() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    
    // Si el href empieza con /, es una ruta, navegar normalmente
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    
    // Si es un anchor (#), hacer scroll
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
      setActiveMenu(null);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center space-x-2 md:space-x-3 group z-10"
            >
              <img 
                src="/images/logo.png" 
                alt="GRUPO RIVAMEZ" 
                className="h-10 md:h-14 w-auto transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-bold text-sm md:text-lg lg:text-xl leading-tight text-rivamez-navy">
                  GRUPO RIVAMEZ
                </span>
                <span className="text-[10px] md:text-xs leading-tight text-gray-600">
                  Constructora & Inmobiliaria
                </span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Servicios - Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('servicios')}
              >
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1">
                  Servicios
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Proyectos - Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMenu('proyectos')}
              >
                <button className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1">
                  Proyectos
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              {/* Valores */}
              <a
                href="#valores"
                onClick={(e) => scrollToSection(e, '#valores')}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors"
              >
                Valores
              </a>

              {/* Nosotros */}
              <a
                href="/nosotros"
                onClick={(e) => scrollToSection(e, '/nosotros')}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors"
              >
                Nosotros
              </a>

              {/* Blog */}
              <a
                href="/blog"
                onClick={(e) => scrollToSection(e, '/blog')}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors"
              >
                Blog
              </a>

              {/* Contacto */}
              <a
                href="/contacto"
                onClick={(e) => scrollToSection(e, '/contacto')}
                className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-rivamez-navy transition-colors"
              >
                Contacto
              </a>
            </div>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+51943818788"
                className="px-5 py-2.5 text-sm font-semibold text-rivamez-navy hover:text-rivamez-cyan transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +51 943 818 788
              </a>
              <a
                href="/contacto"
                onClick={(e) => scrollToSection(e, '/contacto')}
                className="px-6 py-2.5 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white text-sm font-semibold rounded-lg hover:shadow-xl hover:shadow-rivamez-cyan/30 hover:scale-105 transition-all duration-300"
              >
                Solicitar Cotización
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && megaMenuData[activeMenu] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Sections */}
                  {megaMenuData[activeMenu].sections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.links.map((link, linkIdx) => (
                          <li key={linkIdx}>
                            <a
                              href={link.href}
                              onClick={(e) => scrollToSection(e, link.href)}
                              className="group flex flex-col hover:bg-gray-50 p-2 rounded-lg transition-colors"
                            >
                              <span className="text-sm font-semibold text-gray-900 group-hover:text-rivamez-cyan">
                                {link.name}
                              </span>
                              <span className="text-xs text-gray-600">
                                {link.desc}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Featured */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                    <img
                      src={megaMenuData[activeMenu].featured.image}
                      alt={megaMenuData[activeMenu].featured.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {megaMenuData[activeMenu].featured.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      {megaMenuData[activeMenu].featured.desc}
                    </p>
                    <a
                      href={megaMenuData[activeMenu].featured.href}
                      onClick={(e) => scrollToSection(e, megaMenuData[activeMenu].featured.href)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-rivamez-cyan hover:text-rivamez-navy transition-colors"
                    >
                      {megaMenuData[activeMenu].featured.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-xl text-gray-900">Menú</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="space-y-2">
                  <a
                    href="/servicios"
                    onClick={(e) => scrollToSection(e, '/servicios')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Servicios
                  </a>
                  <a
                    href="/proyectos"
                    onClick={(e) => scrollToSection(e, '/proyectos')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#valores"
                    onClick={(e) => scrollToSection(e, '#valores')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Valores
                  </a>
                  <a
                    href="/nosotros"
                    onClick={(e) => scrollToSection(e, '/nosotros')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Nosotros
                  </a>
                  <a
                    href="/blog"
                    onClick={(e) => scrollToSection(e, '/blog')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="/contacto"
                    onClick={(e) => scrollToSection(e, '/contacto')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                  >
                    Contacto
                  </a>
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href="tel:+51943818788"
                    className="block px-6 py-3 bg-gray-100 text-rivamez-navy text-center font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    +51 943 818 788
                  </a>
                  <a
                    href="/contacto"
                    onClick={(e) => scrollToSection(e, '/contacto')}
                    className="block px-6 py-3 bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white text-center font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Solicitar Cotización
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
