'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsBlog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todas', icon: '📰' },
    { id: 'proyectos', name: 'Proyectos', icon: '🏗️' },
    { id: 'empresa', name: 'Empresa', icon: '🏢' },
    { id: 'industria', name: 'Industria', icon: '💡' },
    { id: 'sostenibilidad', name: 'Sostenibilidad', icon: '🌱' }
  ];

  const articles = [
    {
      id: 1,
      title: "RIVAMEZ inicia construcción de Torres Residenciales Premium en El Tambo",
      excerpt: "Nuevo proyecto de 120 departamentos con amenities de lujo y tecnología smart home marca el inicio de una nueva era en la construcción residencial de Huancayo.",
      category: "proyectos",
      date: "2025-01-15",
      readTime: "4 min",
      image: "🏗️",
      featured: true,
      color: "from-rivamez-cyan to-blue-600"
    },
    {
      id: 2,
      title: "Certificación ISO 45001:2018 en Seguridad y Salud Ocupacional",
      excerpt: "RIVAMEZ obtiene nueva certificación internacional que refuerza nuestro compromiso con la seguridad de nuestros colaboradores y la excelencia operativa.",
      category: "empresa",
      date: "2025-01-10",
      readTime: "3 min",
      image: "🎯",
      featured: false,
      color: "from-green-500 to-emerald-700"
    },
    {
      id: 3,
      title: "5 Tendencias en Construcción Sostenible para 2025",
      excerpt: "Descubre las innovaciones que están transformando la industria: desde materiales eco-amigables hasta sistemas de energía renovable integrados.",
      category: "industria",
      date: "2025-01-08",
      readTime: "6 min",
      image: "🌱",
      featured: false,
      color: "from-rivamez-green to-green-700"
    },
    {
      id: 4,
      title: "Tecnología BIM: Cómo la usamos en nuestros proyectos",
      excerpt: "Conoce cómo la metodología Building Information Modeling nos permite entregar proyectos más eficientes, precisos y con cero errores de construcción.",
      category: "industria",
      date: "2025-01-05",
      readTime: "5 min",
      image: "💻",
      featured: false,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 5,
      title: "Alianza estratégica con proveedores internacionales de materiales",
      excerpt: "Acuerdos con líderes mundiales en materiales de construcción garantizan calidad superior y mejores precios para nuestros clientes.",
      category: "empresa",
      date: "2025-01-03",
      readTime: "3 min",
      image: "🤝",
      featured: false,
      color: "from-rivamez-navy to-blue-900"
    },
    {
      id: 6,
      title: "Paneles Solares en Edificio Las Palmas: Ahorro del 60% en electricidad",
      excerpt: "Proyecto piloto de energía renovable demuestra viabilidad económica y ambiental de la construcción sostenible en Huancayo.",
      category: "sostenibilidad",
      date: "2024-12-28",
      readTime: "4 min",
      image: "☀️",
      featured: false,
      color: "from-yellow-400 to-amber-600"
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section id="noticias" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rivamez-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rivamez-green/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-rivamez-cyan/10 text-rivamez-cyan rounded-full text-sm font-semibold mb-4">
            NOTICIAS Y ACTUALIZACIONES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Últimas Noticias
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              de RIVAMEZ
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestros proyectos, logros y las últimas tendencias 
            en la industria de la construcción.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-600 text-white text-xs font-bold rounded-full">
                      ⭐ DESTACADO
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(featuredArticle.date).toLocaleDateString('es-PE', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-rivamez-navy mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex items-center gap-6 mb-6">
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredArticle.readTime} de lectura
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {categories.find(c => c.id === featuredArticle.category)?.name}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-rivamez-cyan font-semibold hover:gap-4 transition-all"
                  >
                    Leer artículo completo
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Image Placeholder */}
                <div className={`relative bg-gradient-to-br ${featuredArticle.color} rounded-2xl flex items-center justify-center min-h-[300px]`}>
                  <div className="text-9xl">{featuredArticle.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              {/* Image */}
              <div className={`relative h-48 bg-gradient-to-br ${article.color} flex items-center justify-center overflow-hidden`}>
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                  {categories.find(c => c.id === article.category)?.icon} {categories.find(c => c.id === article.category)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(article.date).toLocaleDateString('es-PE', { month: 'short', day: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-rivamez-navy mb-3 line-clamp-2 group-hover:text-rivamez-cyan transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rivamez-cyan hover:gap-3 transition-all"
                >
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-rivamez-navy to-rivamez-cyan rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Suscríbete a nuestro Newsletter
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Recibe las últimas noticias, proyectos y tendencias de la industria directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-white text-rivamez-navy font-semibold rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
