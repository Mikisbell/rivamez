// Dynamic sitemap for SEO

export default function sitemap() {
  const baseUrl = 'https://rivamez.com';
  
  // Páginas principales
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Páginas de servicios específicos (para SEO local)
  const servicios = [
    'construccion-casas-huancayo',
    'construccion-departamentos-huancayo',
    'construccion-comercial-junin',
    'remodelacion-huancayo',
    'arquitectura-huancayo',
    'ingenieria-civil-junin',
  ].map((servicio) => ({
    url: `${baseUrl}/servicios/${servicio}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Páginas de ubicaciones (para SEO local)
  const ubicaciones = [
    'huancayo',
    'el-tambo',
    'chilca',
    'concepcion',
    'jauja',
    'tarma',
  ].map((ubicacion) => ({
    url: `${baseUrl}/cobertura/${ubicacion}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...routes, ...servicios, ...ubicaciones];
}
