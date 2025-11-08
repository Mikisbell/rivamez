'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getAllPosts, getFeaturedPost, getAllCategories, urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [allPosts, featured, allCategories] = await Promise.all([
          getAllPosts(),
          getFeaturedPost(),
          getAllCategories()
        ]);
        
        setPosts(allPosts);
        setFeaturedPost(featured);
        setCategories(allCategories);
      } catch (error) {
        console.error('Error fetching blog data:', error);
        // Fallback a datos estáticos si Sanity no está configurado
        loadFallbackData();
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Datos de fallback si Sanity no está configurado
  function loadFallbackData() {
    const fallbackCategories = [
      { _id: '1', title: 'Todas', slug: { current: 'all' }, icon: '📰', color: 'cyan' },
      { _id: '2', title: 'Proyectos', slug: { current: 'proyectos' }, icon: '🏗️', color: 'navy' },
      { _id: '3', title: 'Empresa', slug: { current: 'empresa' }, icon: '🏢', color: 'green' },
      { _id: '4', title: 'Innovación', slug: { current: 'innovacion' }, icon: '💡', color: 'purple' },
      { _id: '5', title: 'Sostenibilidad', slug: { current: 'sostenibilidad' }, icon: '🌱', color: 'green' }
    ];

    const fallbackPosts = [
      {
        _id: '1',
        title: "RIVAMEZ inicia construcción de Torres Residenciales Premium en El Tambo",
        excerpt: "Nuevo proyecto de 120 departamentos con amenities de lujo y tecnología smart home marca el inicio de una nueva era en la construcción residencial de Huancayo.",
        slug: { current: 'torres-residenciales-el-tambo' },
        publishedAt: "2025-01-15",
        readTime: 4,
        featured: true,
        mainImage: null,
        categories: [{ title: 'Proyectos', slug: { current: 'proyectos' }, color: 'cyan', icon: '🏗️' }],
        author: { name: 'RIVAMEZ', role: 'Comunicaciones' }
      },
      {
        _id: '2',
        title: "Certificación ISO 45001:2018 en Seguridad y Salud Ocupacional",
        excerpt: "RIVAMEZ obtiene nueva certificación internacional que refuerza nuestro compromiso con la seguridad.",
        slug: { current: 'certificacion-iso-45001' },
        publishedAt: "2025-01-10",
        readTime: 3,
        mainImage: null,
        categories: [{ title: 'Empresa', slug: { current: 'empresa' }, color: 'green', icon: '🏢' }],
        author: { name: 'RIVAMEZ', role: 'Comunicaciones' }
      },
      {
        _id: '3',
        title: "5 Tendencias en Construcción Sostenible para 2025",
        excerpt: "Descubre las innovaciones que están transformando la industria desde materiales eco-amigables hasta sistemas de energía renovable.",
        slug: { current: 'tendencias-construccion-sostenible-2025' },
        publishedAt: "2025-01-08",
        readTime: 6,
        mainImage: null,
        categories: [{ title: 'Sostenibilidad', slug: { current: 'sostenibilidad' }, color: 'green', icon: '🌱' }],
        author: { name: 'RIVAMEZ', role: 'Comunicaciones' }
      },
      {
        _id: '4',
        title: "Tecnología BIM: Cómo la usamos en nuestros proyectos",
        excerpt: "Conoce cómo la metodología Building Information Modeling nos permite entregar proyectos más eficientes y precisos.",
        slug: { current: 'tecnologia-bim-proyectos' },
        publishedAt: "2025-01-05",
        readTime: 5,
        mainImage: null,
        categories: [{ title: 'Innovación', slug: { current: 'innovacion' }, color: 'purple', icon: '💡' }],
        author: { name: 'RIVAMEZ', role: 'Comunicaciones' }
      }
    ];

    setCategories(fallbackCategories);
    setPosts(fallbackPosts);
    setFeaturedPost(fallbackPosts[0]);
  }

  const filteredPosts = activeCategory === 'all'
    ? posts.filter(p => !p.featured)
    : posts.filter(p => 
        !p.featured && 
        p.categories?.some(cat => cat.slug?.current === activeCategory)
      );

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'from-rivamez-cyan to-blue-600',
      navy: 'from-rivamez-navy to-blue-900',
      green: 'from-rivamez-green to-emerald-700',
      orange: 'from-orange-400 to-amber-600',
      purple: 'from-purple-500 to-purple-700'
    };
    return colors[color] || colors.cyan;
  };

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
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
            BLOG DE RIVAMEZ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rivamez-navy mb-6">
            Noticias, Guías y
            <span className="block bg-gradient-to-r from-rivamez-cyan to-rivamez-green bg-clip-text text-transparent">
              Consejos de Construcción
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre nuestros proyectos, las últimas tendencias en construcción
            y consejos prácticos para tu próximo proyecto.
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
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <span className="mr-2">📰</span>
            Todas
          </button>
          {categories.map((category) => (
            category.slug?.current !== 'all' && (
              <button
                key={category._id}
                onClick={() => setActiveCategory(category.slug.current)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.slug.current
                    ? 'bg-gradient-to-r from-rivamez-cyan to-rivamez-navy text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            )
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link href={`/blog/${featuredPost.slug.current}`}>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-amber-600 text-white text-xs font-bold rounded-full">
                        ⭐ DESTACADO
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(featuredPost.publishedAt).toLocaleDateString('es-PE', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-rivamez-navy mb-4 leading-tight group-hover:text-rivamez-cyan transition-colors">
                      {featuredPost.title}
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 mb-6">
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {featuredPost.readTime} min
                      </span>
                      {featuredPost.categories?.[0] && (
                        <span className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{featuredPost.categories[0].icon}</span>
                          {featuredPost.categories[0].title}
                        </span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-2 text-rivamez-cyan font-semibold group-hover:gap-4 transition-all">
                      Leer artículo completo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`relative bg-gradient-to-br ${getColorClasses(featuredPost.categories?.[0]?.color)} rounded-2xl flex items-center justify-center min-h-[300px]`}>
                    {featuredPost.mainImage ? (
                      <Image
                        src={urlFor(featuredPost.mainImage).width(800).height(600).url()}
                        alt={featuredPost.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="text-9xl">📰</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug.current}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent cursor-pointer h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${getColorClasses(post.categories?.[0]?.color)} flex items-center justify-center overflow-hidden`}>
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                        {post.categories?.[0]?.icon || '📰'}
                      </div>
                    )}
                    {post.categories?.[0] && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                        {post.categories[0].icon} {post.categories[0].title}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(post.publishedAt).toLocaleDateString('es-PE', { month: 'short', day: 'numeric' })}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {post.readTime} min
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-rivamez-navy mb-3 line-clamp-2 group-hover:text-rivamez-cyan transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-rivamez-cyan group-hover:gap-3 transition-all">
                      Leer más
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
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
              Suscríbete a nuestro Blog
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Recibe las últimas noticias, guías y tendencias de construcción directamente en tu correo.
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
