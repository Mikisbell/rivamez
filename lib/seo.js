// SEO Metadata Generator para todas las páginas
import { localSEO } from './seo-local';

const SITE_NAME = 'RIVAMEZ';
const SITE_URL = 'https://rivamez.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

export const generateSEO = {
  home: () => ({
    title: 'Constructora #1 en Huancayo y Junín | +15 Años | RIVAMEZ ⭐4.8/5',
    description: '🏆 Constructora líder en Huancayo y Junín con +15 años. ✅ Construcción de casas, departamentos y locales. ✅ ISO 9001 ✅ +127 clientes satisfechos. 📞 Cotización gratis en 24h ☎️ +51 943 818 788',
    keywords: localSEO.keywords.primary.join(', ') + ', ' + localSEO.keywords.secondary.join(', '),
    openGraph: {
      title: 'RIVAMEZ - Constructora e Inmobiliaria en Huancayo',
      description: 'Más de 15 años construyendo proyectos de calidad en Huancayo y Junín',
      url: SITE_URL,
      siteName: SITE_NAME,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      locale: 'es_PE',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'RIVAMEZ - Constructora e Inmobiliaria',
      description: 'Construcción de calidad en Huancayo con +15 años de experiencia',
      images: [DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: SITE_URL,
    },
  }),

  nosotros: () => ({
    title: 'Sobre RIVAMEZ - Empresa Constructora | +15 Años de Experiencia',
    description: 'Conoce nuestra historia, valores, liderazgo y certificaciones ISO. Empresa constructora líder en Huancayo con más de 285 proyectos completados exitosamente.',
    keywords: 'sobre rivamez, empresa constructora, historia rivamez, certificaciones iso, constructora huancayo, equipo construcción',
    openGraph: {
      title: 'Sobre RIVAMEZ - Nuestra Historia y Valores',
      description: 'Más de 15 años liderando la construcción en Huancayo',
      url: `${SITE_URL}/nosotros`,
      images: [{ url: `${SITE_URL}/images/og-nosotros.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre RIVAMEZ - Empresa Constructora',
      description: '+15 años de experiencia en construcción',
    },
    alternates: {
      canonical: `${SITE_URL}/nosotros`,
    },
  }),

  servicios: () => ({
    title: 'Servicios de Construcción - BIM, IA, Modular | RIVAMEZ',
    description: 'Servicios integrales de construcción con tecnología BIM, IA, construcción modular, AR/VR. Arquitectura, ingeniería, construcción residencial, comercial e industrial en Huancayo.',
    keywords: 'servicios construcción, bim huancayo, construcción modular, arquitectura huancayo, ingeniería civil, construcción residencial, construcción comercial, construcción industrial',
    openGraph: {
      title: 'Servicios de Construcción Integral - RIVAMEZ',
      description: 'Tecnología BIM, IA y construcción modular para proyectos de alta calidad',
      url: `${SITE_URL}/servicios`,
      images: [{ url: `${SITE_URL}/images/og-servicios.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Servicios de Construcción - RIVAMEZ',
      description: 'BIM, IA, Modular y más tecnologías de vanguardia',
    },
    alternates: {
      canonical: `${SITE_URL}/servicios`,
    },
  }),

  proyectos: () => ({
    title: 'Portafolio de Proyectos - +285 Obras Completadas | RIVAMEZ',
    description: 'Explora nuestros proyectos destacados: torres residenciales, centros comerciales, condominios y obras industriales en Huancayo y Junín. Casos de éxito con fotos y testimonios.',
    keywords: 'proyectos construcción huancayo, obras completadas, portafolio construcción, torres huancayo, centros comerciales, proyectos rivamez',
    openGraph: {
      title: 'Portafolio de Proyectos - RIVAMEZ',
      description: 'Más de 285 proyectos completados con éxito en Huancayo',
      url: `${SITE_URL}/proyectos`,
      images: [{ url: `${SITE_URL}/images/og-proyectos.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Proyectos RIVAMEZ',
      description: '+285 obras completadas con calidad',
    },
    alternates: {
      canonical: `${SITE_URL}/proyectos`,
    },
  }),

  blog: () => ({
    title: 'Blog de Construcción - Noticias y Tendencias | RIVAMEZ',
    description: 'Últimas noticias, tendencias y consejos sobre construcción, arquitectura moderna, sostenibilidad y tecnología BIM. Blog actualizado por expertos en construcción.',
    keywords: 'blog construcción, noticias construcción, tendencias arquitectura, consejos construcción, bim blog, sostenibilidad construcción',
    openGraph: {
      title: 'Blog de Construcción y Arquitectura - RIVAMEZ',
      description: 'Noticias, tendencias y consejos de expertos',
      url: `${SITE_URL}/blog`,
      images: [{ url: `${SITE_URL}/images/og-blog.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog RIVAMEZ',
      description: 'Noticias y tendencias en construcción',
    },
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
  }),

  contacto: () => ({
    title: 'Contacto - Solicita tu Cotización Gratis | RIVAMEZ Huancayo',
    description: 'Contáctanos para cotizar tu proyecto de construcción en Huancayo. WhatsApp: +51 943 818 788 | Email: info@rivamez.com. Respuesta en menos de 24 horas.',
    keywords: 'contacto rivamez, cotización construcción, presupuesto construcción huancayo, contacto constructora, solicitar cotización',
    openGraph: {
      title: 'Contacta con RIVAMEZ - Cotización Gratis',
      description: 'Solicita tu cotización sin compromiso. Respuesta en 24h',
      url: `${SITE_URL}/contacto`,
      images: [{ url: `${SITE_URL}/images/og-contacto.jpg`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contacto RIVAMEZ',
      description: 'Cotización gratis en 24 horas',
    },
    alternates: {
      canonical: `${SITE_URL}/contacto`,
    },
  }),

  // Generator para blog posts dinámicos
  blogPost: (post) => ({
    title: `${post.title} | Blog RIVAMEZ`,
    description: post.excerpt || post.description,
    keywords: post.keywords || 'construcción, arquitectura, blog rivamez',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: post.coverImage || DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author?.name || 'RIVAMEZ Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.description,
      images: [post.coverImage || DEFAULT_OG_IMAGE],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  }),
};

// Additional metadata helpers
export const robots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export const viewport = {
  themeColor: '#06B6D4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
