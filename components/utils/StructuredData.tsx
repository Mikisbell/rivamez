// Schema.org JSON-LD Structured Data
import { localSEO } from '@/lib/seo-local';

export const structuredData = {
  // Organization (Global)
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RIVAMEZ - Constructora e Inmobiliaria Huancayo',
    legalName: 'FREECLOUD S.A.C.',
    taxID: '20600345665',
    alternateName: ['Grupo RIVAMEZ', 'Constructora RIVAMEZ Huancayo', 'RIVAMEZ Junín'],
    url: 'https://rivamez.com',
    logo: 'https://rivamez.com/images/logo.png',
    description: 'Constructora e inmobiliaria en Huancayo y Junín, constituida en 2015. Ingeniería, arquitectura y gestión de proyectos: construcción residencial, comercial e industrial y formalización ante la municipalidad, con certificaciones ISO 9001, ISO 14001, ISO 45001 e ISO 37001.',
    // Fecha real de constitucion segun la ficha RUC: inscripcion en Registros Publicos
    // el 23/04/2015 (partida 11209511). 2018 era la inscripcion del RUC, no la fundacion.
    foundingDate: '2015-04-23',
    slogan: 'Construyendo sueños en Junín',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Huancavelica 123',
      addressLocality: 'Huancayo',
      addressRegion: 'Junín',
      postalCode: '12001',
      addressCountry: 'PE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+51-943-818-788',
      contactType: 'customer service',
      areaServed: ['PE', 'Junín', 'Huancayo'],
      availableLanguage: ['Spanish'],
    },
    sameAs: [
      'https://facebook.com/rivamez',
      'https://instagram.com/rivamez',
      'https://linkedin.com/company/rivamez',
    ],
  },

  // LocalBusiness (Para SEO local)
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'GeneralContractor', 'RealEstateAgent'],
    '@id': 'https://rivamez.com/#business',
    name: 'RIVAMEZ - Constructora e Inmobiliaria en Huancayo y Junín',
    legalName: 'FREECLOUD S.A.C.',
    taxID: '20600345665',
    alternateName: 'Constructora RIVAMEZ Huancayo',
    image: ['https://rivamez.com/images/logo.png', 'https://rivamez.com/images/oficina-huancayo.jpg'],
    description: 'Constructora en Huancayo y toda la región Junín, empresa formal constituida en 2015. Construcción de casas, departamentos, locales comerciales e industriales, y formalización ante la municipalidad. Certificaciones ISO 9001, ISO 14001, ISO 45001 e ISO 37001.',
    foundingDate: '2015-04-23',
    url: 'https://rivamez.com',
    telephone: '+51995060806',
    email: 'info@rivamez.com',
    priceRange: 'S/. 1,200 - S/. 2,500 por m²',
    paymentAccepted: ['Cash', 'Credit Card', 'Financiamiento directo', 'Mi Vivienda', 'Techo Propio'],
    currenciesAccepted: 'PEN, USD',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Huancavelica 123',
      addressLocality: 'Huancayo',
      addressRegion: 'Junín',
      postalCode: '12001',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.0653,
      longitude: -75.2049,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    // Sin aggregateRating: declarar calificaciones sin un perfil publico de resenas que las
    // respalde es publicidad enganosa y Google lo penaliza como rich snippet invalido.
  },

  // Website (Sitelinks Search Box)
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RIVAMEZ',
    url: 'https://rivamez.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://rivamez.com/buscar?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },

  // Service (Servicios de construcción)
  service: (serviceName, description, category) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'RIVAMEZ',
    },
    areaServed: {
      '@type': 'City',
      name: 'Huancayo',
      containedIn: {
        '@type': 'State',
        name: 'Junín',
      },
    },
    description: description,
    category: category,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  }),

  // Breadcrumb
  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://rivamez.com${item.url}`,
        name: item.name,
      },
    })),
  }),

  // Article (Blog posts)
  article: (post) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.description,
    image: post.coverImage || 'https://rivamez.com/images/og-default.jpg',
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'RIVAMEZ Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RIVAMEZ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rivamez.com/images/logo.png',
      },
    },
  }),

  // FAQ
  faq: (questions) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }),
};

export default function StructuredData({ data, type = 'custom' }) {
  let jsonLd;

  switch (type) {
    case 'organization':
      jsonLd = structuredData.organization;
      break;
    case 'localBusiness':
      jsonLd = structuredData.localBusiness;
      break;
    case 'website':
      jsonLd = structuredData.website;
      break;
    case 'custom':
      jsonLd = data;
      break;
    default:
      jsonLd = data;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
