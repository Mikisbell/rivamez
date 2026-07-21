// components/NavbarNew.js
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const megaMenuData = {
  empresa: {
    sections: [
      {
        title: 'Compañía',
        links: [
          { name: 'Nosotros', href: '/nosotros', desc: 'Historia y visión de RIVAMEZ' },
          { name: 'Liderazgo', href: '/nosotros#liderazgo', desc: 'Nuestro equipo directivo' },
          { name: 'Valores & Cultura', href: '/nosotros#valores', desc: 'Lo que nos define' },
          { name: 'Certificaciones', href: '/nosotros#certificaciones', desc: 'Sistemas de gestión ISO vigentes' },
        ]
      },
      {
        title: 'Trayectoria',
        links: [
          { name: 'Historia', href: '/nosotros#historia', desc: 'Línea de tiempo de la empresa' },
          { name: 'Logros', href: '/nosotros#logros', desc: 'Hitos importantes' },
          { name: 'Responsabilidad Social', href: '/nosotros#rse', desc: 'Impacto comunitario' },
        ]
      }
    ],
    featured: {
      title: 'Equipo con más de 15 años',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80',
      desc: 'Liderando la construcción sostenible en Perú con excelencia e innovación',
      cta: 'Conocer más',
      href: '/nosotros'
    }
  },
  expertise: {
    sections: [
      {
        title: 'Disciplinas Core',
        links: [
          { name: 'Arquitectura', href: '/servicios#arquitectura', desc: 'Diseño arquitectónico innovador' },
          { name: 'Ingeniería', href: '/servicios#ingenieria', desc: 'Ingeniería estructural y civil' },
          { name: 'Construcción', href: '/servicios#construccion', desc: 'Ejecución de obra con calidad' },
          { name: 'Gestión de Proyectos', href: '/servicios#gestion', desc: 'PMI y metodologías ágiles' },
        ]
      },
      {
        title: 'Tecnología Avanzada',
        links: [
          { name: 'BIM & Gemelos Digitales', href: '/servicios#bim', desc: 'Modelado 4D/5D y Digital Twins' },
          { name: 'IA & Diseño Generativo', href: '/servicios#ia', desc: 'Inteligencia artificial aplicada' },
          { name: 'Construcción Modular', href: '/servicios#modular', desc: 'Prefabricación y DfMA' },
          { name: 'AR/VR & Drones', href: '/servicios#innovacion', desc: 'Realidad inmersiva e inspección' },
        ]
      }
    ],
    featured: {
      title: 'Innovación Tecnológica',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&q=80',
      desc: 'Adoptamos las últimas tecnologías de USA y Europa para construcción inteligente',
      cta: 'Ver tecnologías',
      href: '/servicios'
    }
  },
  servicios: {
    sections: [
      {
        title: 'Por Sector',
        links: [
          { name: 'Residencial', href: '/servicios#residencial', desc: 'Torres y viviendas premium' },
          { name: 'Comercial', href: '/servicios#comercial', desc: 'Centros comerciales y oficinas' },
          { name: 'Industrial', href: '/servicios#industrial', desc: 'Naves y almacenes' },
          { name: 'Institucional', href: '/servicios#institucional', desc: 'Hospitales y educación' },
        ]
      },
      {
        title: 'Servicios Adicionales',
        links: [
          { name: 'Remodelación', href: '/servicios#remodelacion', desc: 'Renovación integral' },
          { name: 'Mantenimiento', href: '/servicios#mantenimiento', desc: 'Post-construcción' },
          { name: 'Valuaciones', href: '/servicios#valuaciones', desc: 'Tasación técnica' },
        ]
      }
    ],
    featured: {
      title: 'Soluciones Llave en Mano',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&q=80',
      desc: 'Gestión completa de tu proyecto de principio a fin',
      cta: 'Explorar servicios',
      href: '/servicios'
    }
  },
  proyectos: {
    sections: [
      {
        title: 'Portfolio',
        links: [
          { name: 'Proyectos Destacados', href: '/proyectos#destacados', desc: 'Nuestros mejores trabajos' },
          { name: 'En Construcción', href: '/proyectos#en-construccion', desc: 'Obras actuales' },
          { name: 'Completados', href: '/proyectos#completados', desc: 'Proyectos finalizados' },
          { name: 'Portfolio Completo', href: '/proyectos', desc: '285+ proyectos exitosos' },
        ]
      },
      {
        title: 'Por Categoría',
        links: [
          { name: 'Residencial', href: '/proyectos?categoria=residencial', desc: 'Viviendas y departamentos' },
          { name: 'Comercial', href: '/proyectos?categoria=comercial', desc: 'Locales y oficinas' },
          { name: 'Institucional', href: '/proyectos?categoria=institucional', desc: 'Hospitales y colegios' },
        ]
      }
    ],
    featured: {
      title: '285+ Proyectos',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&q=80',
      desc: 'Transformando Huancayo y Junín con construcciones de clase mundial',
      cta: 'Ver portfolio',
      href: '/proyectos'
    }
  }
};

export default function NavbarNew() {
  const pathname = usePathname();
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

  // Función para determinar si un link está activo
  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Función para obtener las clases del link
  const getLinkClasses = (href) => {
    if (isActive(href)) {
      return "px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-sm md:text-sm lg:text-base font-bold bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white rounded-lg shadow-lg transition-all min-h-[44px] flex items-center";
    }
    return "px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-sm md:text-sm lg:text-base font-semibold text-gray-700 hover:text-rivamez-navy hover:bg-gray-50 rounded-lg transition-all min-h-[44px] flex items-center";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white shadow-sm'
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="relative">
          <div className="container mx-auto px-3 md:px-4 lg:px-6">
            <div className="flex items-center justify-between h-12 sm:h-13 md:h-14 lg:h-16 xl:h-20">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center space-x-2 md:space-x-2 lg:space-x-3 group z-10"
              >
                <img
                  src="/images/logo.png"
                  alt="GRUPO RIVAMEZ"
                  className="h-7 sm:h-8 md:h-8 lg:h-11 xl:h-14 w-auto transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg leading-tight text-rivamez-navy">
                    GRUPO RIVAMEZ
                  </span>
                  <span className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-sm leading-tight text-gray-600">
                    Constructora & Inmobiliaria
                  </span>
                </div>
              </a>

              {/* Desktop Menu + CTA juntos */}
              <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
                {/* Menu Links */}
                <div className="flex items-center space-x-0.5 lg:space-x-1 xl:space-x-2">
                  {/* Empresa - Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu('empresa')}
                  >
                    <button className="px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1 min-h-[44px]">
                      Empresa
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Capacidades - Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu('expertise')}
                  >
                    <button className="px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1 min-h-[44px]">
                      Capacidades
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Servicios - Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu('servicios')}
                  >
                    <button className="px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1 min-h-[44px]">
                      Servicios
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Proyectos - Mega Menu */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveMenu('proyectos')}
                  >
                    <button className="px-2 py-2 md:px-2.5 lg:px-3 xl:px-4 text-xs md:text-sm lg:text-base font-semibold text-gray-700 hover:text-rivamez-navy transition-colors flex items-center gap-1 min-h-[44px]">
                      Proyectos
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Blog */}
                  <a
                    href="/blog"
                    onClick={(e) => scrollToSection(e, '/blog')}
                    className={getLinkClasses('/blog')}
                  >
                    Blog
                  </a>

                  {/* Contacto */}
                  <a
                    href="/contacto"
                    onClick={(e) => scrollToSection(e, '/contacto')}
                    className={getLinkClasses('/contacto')}
                  >
                    Contacto
                  </a>
                </div>

                {/* CTA - Botón unificado */}
                <a
                  href="https://wa.me/51943818788?text=Hola,%20quiero%20solicitar%20una%20cotización%20para%20mi%20proyecto%20de%20construcción"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 md:gap-2 px-2 md:px-3 lg:px-4 xl:px-6 py-2 md:py-2 lg:py-2.5 min-h-[44px] bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs md:text-xs lg:text-sm xl:text-base font-semibold rounded-md lg:rounded-lg hover:shadow-xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="hidden xl:inline">Solicitar Cotización</span>
                  <span className="hidden lg:inline xl:hidden">Cotización</span>
                  <span className="md:inline lg:hidden">Cotizar</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
              >
                <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-h-[70vh] overflow-y-auto">
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
        </div>
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
              <div className="p-4 sm:p-6">
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
                    href="/nosotros"
                    onClick={(e) => scrollToSection(e, '/nosotros')}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive('/nosotros') ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    🏢 Empresa
                  </a>
                  <a
                    href="/servicios#arquitectura"
                    onClick={(e) => scrollToSection(e, '/servicios#arquitectura')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors pl-8 text-sm"
                  >
                    → Arquitectura
                  </a>
                  <a
                    href="/servicios#ingenieria"
                    onClick={(e) => scrollToSection(e, '/servicios#ingenieria')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors pl-8 text-sm"
                  >
                    → Ingeniería
                  </a>
                  <a
                    href="/servicios#construccion"
                    onClick={(e) => scrollToSection(e, '/servicios#construccion')}
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors pl-8 text-sm"
                  >
                    → Construcción
                  </a>
                  <a
                    href="/servicios"
                    onClick={(e) => scrollToSection(e, '/servicios')}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive('/servicios') ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    📐 Servicios
                  </a>
                  <a
                    href="/proyectos"
                    onClick={(e) => scrollToSection(e, '/proyectos')}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive('/proyectos') ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    🏆 Proyectos
                  </a>
                  <a
                    href="/blog"
                    onClick={(e) => scrollToSection(e, '/blog')}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive('/blog') ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    📰 Blog
                  </a>
                  <a
                    href="/contacto"
                    onClick={(e) => scrollToSection(e, '/contacto')}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all ${isActive('/contacto') ? 'bg-gradient-to-r from-rivamez-navy to-rivamez-cyan text-white shadow-lg' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    📞 Contacto
                  </a>
                </nav>

                {/* Mobile CTA - Un solo botón unificado */}
                <div className="mt-8">
                  <a
                    href="https://wa.me/51943818788?text=Hola,%20quiero%20solicitar%20una%20cotización%20para%20mi%20proyecto%20de%20construcción"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-center font-bold rounded-lg hover:from-green-600 hover:to-green-700 hover:shadow-xl shadow-lg transition-all"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Solicitar Cotización por WhatsApp</span>
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
