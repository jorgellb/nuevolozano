export interface TownData {
  slug: string
  name: string
  province: string
  description: string
  longDescription: string
  services: string[]
  features: string[]
  images: {
    src: string
    alt: string
  }[]
  testimonial?: {
    quote: string
    author: string
    location: string
  }
}

export const townsData: TownData[] = [
  {
    slug: 'huercal-overa',
    name: 'Huércal-Overa',
    province: 'Almería',
    description: 'Servicios de carpintería metálica en Huércal-Overa. Especialistas en estructuras, cerrajería y automatización.',
    longDescription: 'Huércal-Overa, capital del Alto Almanzora, cuenta con nuestros servicios especializados de carpintería metálica desde hace más de 20 años. Atendemos tanto a particulares como a empresas del sector agrícola e industrial de la zona, ofreciendo soluciones a medida para naves agrícolas, invernaderos, viviendas y locales comerciales.',
    services: ['Estructuras Metálicas', 'Carpintería de Aluminio', 'Cerrajería', 'Automatización', 'Forja Artística', 'Metalistería'],
    features: ['Servicio de urgencias 24h', 'Presupuestos sin compromiso', 'Garantía de 5 años', 'Materiales de primera calidad'],
    images: [{ src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72', alt: 'Estructura metálica industrial' }],
    testimonial: {
      quote: 'Excelente trabajo en la estructura de nuestra nave agrícola. Profesionales y puntuales.',
      author: 'José García',
      location: 'Huércal-Overa'
    }
  },
  {
    slug: 'vera',
    name: 'Vera',
    province: 'Almería',
    description: 'Carpintería metálica profesional en Vera. Cerramientos, puertas automáticas y estructuras a medida.',
    longDescription: 'En Vera ofrecemos servicios completos de carpintería metálica para el sector residencial, comercial e industrial. Nuestra experiencia nos permite abordar proyectos de cualquier envergadura, desde pequeñas reformas hasta grandes estructuras para el sector turístico y agrícola de la comarca.',
    services: ['Carpintería de Aluminio', 'Cerramientos', 'Puertas Automáticas', 'Estructuras Metálicas', 'Rejas y Verjas', 'Barandillas'],
    features: ['Atención personalizada', 'Diseño a medida', 'Instalación profesional', 'Mantenimiento incluido'],
    images: [{ src: 'https://images.unsplash.com/photo-1525570665650-76bb26af503d?q=80', alt: 'Edificio con carpintería de aluminio' }],
    testimonial: {
      quote: 'Instalaron los cerramientos de nuestro hotel. Resultado impecable y en plazo.',
      author: 'María López',
      location: 'Vera'
    }
  },
  {
    slug: 'overa',
    name: 'Overa',
    province: 'Almería',
    description: 'Servicios de metalistería y cerrajería en Overa. Soluciones para agricultura e industria.',
    longDescription: 'Overa y su entorno agrícola confían en nosotros para sus necesidades de carpintería metálica. Especializados en estructuras para invernaderos, naves de almacenamiento y sistemas de riego, también atendemos las necesidades residenciales de la zona con cerramientos, puertas y rejas de seguridad.',
    services: ['Estructuras para Invernaderos', 'Naves Agrícolas', 'Cerrajería', 'Puertas de Seguridad', 'Vallados', 'Metalistería'],
    features: ['Especialistas en sector agrícola', 'Rapidez en urgencias', 'Materiales anticorrosión', 'Asesoramiento técnico'],
    images: [{ src: 'https://images.unsplash.com/photo-1662624915046-02d9d4ee724d', alt: 'Estructura de invernadero' }],
    testimonial: {
      quote: 'Nos montaron toda la estructura del invernadero en tiempo récord. Muy satisfechos.',
      author: 'Antonio Martínez',
      location: 'Overa'
    }
  },
  {
    slug: 'vera-playa',
    name: 'Vera Playa',
    province: 'Almería',
    description: 'Carpintería metálica especializada para zona costera en Vera Playa. Materiales anticorrosión.',
    longDescription: 'Vera Playa requiere soluciones especiales debido al ambiente marino. Utilizamos materiales y tratamientos anticorrosión específicos para garantizar la durabilidad de nuestros trabajos en esta zona costera. Especializados en cerramientos para apartamentos, hoteles y locales comerciales del paseo marítimo.',
    services: ['Cerramientos Anticorrosión', 'Aluminio Marino', 'Barandillas Inoxidables', 'Puertas Automáticas', 'Pérgolas', 'Toldos'],
    features: ['Materiales resistentes al salitre', 'Tratamiento anticorrosión', 'Garantía extendida', 'Mantenimiento preventivo'],
    images: [{ src: 'https://plus.unsplash.com/premium_photo-1661906854568-8964f58ed859', alt: 'Apartamentos en la costa' }],
    testimonial: {
      quote: 'Las barandillas llevan 10 años perfectas a pesar del salitre. Gran calidad.',
      author: 'Carmen Ruiz',
      location: 'Vera Playa'
    }
  },
  {
    slug: 'puerto-rey',
    name: 'Puerto Rey',
    province: 'Almería',
    description: 'Servicios de carpintería metálica en Puerto Rey. Especialistas en cerramientos costeros.',
    longDescription: 'Puerto Rey, con su urbanización residencial junto al mar, cuenta con nuestros servicios especializados para ambiente marino. Realizamos cerramientos de terrazas, barandillas de acero inoxidable, puertas de seguridad y todo tipo de trabajos en metal adaptados a las condiciones de la costa.',
    services: ['Cerramientos de Terrazas', 'Barandillas Inoxidables', 'Puertas de Seguridad', 'Ventanas de Aluminio', 'Pérgolas', 'Vallados'],
    features: ['Acero inoxidable marino', 'Diseños personalizados', 'Instalación rápida', 'Presupuesto gratuito'],
    images: [{ src: 'https://images.unsplash.com/photo-1662624919582-007c57fdc3dd', alt: 'Trabajo de metal' }],
    testimonial: {
      quote: 'Cerramiento de terraza espectacular. Ahora disfrutamos de las vistas todo el año.',
      author: 'Pedro Sánchez',
      location: 'Puerto Rey'
    }
  },
  {
    slug: 'garrucha',
    name: 'Garrucha',
    province: 'Almería',
    description: 'Carpintería metálica en Garrucha. Expertos en cerramientos náuticos y estructuras portuarias.',
    longDescription: 'Garrucha, pueblo marinero por excelencia, confía en nosotros para sus proyectos de carpintería metálica. Trabajamos con el puerto pesquero, restaurantes del paseo marítimo y viviendas de la zona, utilizando siempre materiales de máxima resistencia al ambiente salino.',
    services: ['Estructuras Portuarias', 'Cerramientos de Terrazas', 'Carpintería Náutica', 'Barandillas', 'Puertas Automáticas', 'Toldos'],
    features: ['Experiencia en sector náutico', 'Materiales de alta resistencia', 'Servicio integral', 'Atención 24 horas'],
    images: [{ src: 'https://images.unsplash.com/photo-1765728614194-881a2a837b97', alt: 'Puerto pesquero' }],
    testimonial: {
      quote: 'Montaron la estructura de la terraza de nuestro restaurante. Trabajo excelente.',
      author: 'Francisco Navarro',
      location: 'Garrucha'
    }
  },
  {
    slug: 'villaricos',
    name: 'Villaricos',
    province: 'Almería',
    description: 'Servicios de metalistería en Villaricos. Cerramientos, estructuras y trabajos a medida.',
    longDescription: 'Villaricos, pequeño pueblo costero con encanto, cuenta con nuestros servicios de carpintería metálica. Realizamos trabajos para viviendas, apartamentos turísticos y comercios locales, siempre con materiales adaptados al ambiente marino y diseños que respetan la estética tradicional del pueblo.',
    services: ['Cerramientos', 'Puertas y Ventanas', 'Rejas Decorativas', 'Barandillas', 'Pérgolas', 'Vallados'],
    features: ['Respeto por la estética local', 'Materiales duraderos', 'Diseño personalizado', 'Precio competitivo'],
    images: [{ src: 'https://images.unsplash.com/photo-1579424098101-7249e9009151', alt: 'Carpintería metálica' }],
    testimonial: {
      quote: 'Rejas preciosas que combinan perfectamente con nuestra casa tradicional.',
      author: 'Ana Fernández',
      location: 'Villaricos'
    }
  },
  {
    slug: 'mojacar',
    name: 'Mojácar',
    province: 'Almería',
    description: 'Carpintería metálica en Mojácar. Diseños que respetan la arquitectura tradicional del pueblo.',
    longDescription: 'Mojácar, uno de los pueblos más bonitos de España, requiere un cuidado especial en cualquier trabajo de carpintería metálica. Nuestros diseños respetan la estética tradicional del pueblo blanco mientras incorporan las últimas tecnologías en cerramientos, puertas automáticas y sistemas de seguridad.',
    services: ['Forja Artística', 'Rejas Tradicionales', 'Barandillas de Diseño', 'Cerramientos', 'Puertas Automáticas', 'Estructuras'],
    features: ['Diseños tradicionales', 'Forja artesanal', 'Respeto arquitectónico', 'Acabados premium'],
    images: [{ src: 'https://images.unsplash.com/photo-1769394002578-3a3e359130bd', alt: 'Trabajo de forja' }],
    testimonial: {
      quote: 'La barandilla de forja que nos hicieron es una obra de arte. Perfecta para Mojácar.',
      author: 'Isabel Torres',
      location: 'Mojácar'
    }
  },
  {
    slug: 'palomares',
    name: 'Palomares',
    province: 'Almería',
    description: 'Servicios de carpintería metálica en Palomares. Estructuras agrícolas y cerramientos residenciales.',
    longDescription: 'Palomares combina zonas agrícolas con desarrollos residenciales, y nosotros atendemos ambos sectores. Realizamos estructuras para invernaderos y naves agrícolas, así como cerramientos, puertas y trabajos de cerrajería para las viviendas de la zona.',
    services: ['Estructuras Agrícolas', 'Invernaderos', 'Cerramientos', 'Puertas de Seguridad', 'Vallados', 'Metalistería'],
    features: ['Especialistas agrícolas', 'Doble servicio', 'Rapidez de ejecución', 'Precio ajustado'],
    images: [{ src: 'https://images.unsplash.com/photo-1605317039225-0001f706cdef', alt: 'Carpintería metálica' }],
    testimonial: {
      quote: 'Nos hicieron la estructura del almacén agrícola. Muy profesionales.',
      author: 'Miguel Hernández',
      location: 'Palomares'
    }
  },
  {
    slug: 'cuevas-de-almanzora',
    name: 'Cuevas de Almanzora',
    province: 'Almería',
    description: 'Carpintería metálica en Cuevas de Almanzora. Servicios completos para industria y residencial.',
    longDescription: 'Cuevas de Almanzora, con su rico patrimonio industrial minero, cuenta con nuestros servicios de carpintería metálica. Atendemos tanto las necesidades del sector industrial y de canteras como los proyectos residenciales del casco urbano y las pedanías.',
    services: ['Estructuras Industriales', 'Carpintería de Aluminio', 'Cerrajería', 'Puertas Automáticas', 'Forja', 'Metalistería'],
    features: ['Experiencia industrial', 'Grandes proyectos', 'Equipo especializado', 'Maquinaria propia'],
    images: [{ src: 'https://images.unsplash.com/photo-1680034733365-ad7263988417', alt: 'Carpintería industrial' }],
    testimonial: {
      quote: 'Realizaron toda la estructura de nuestra planta de procesado. Impecable.',
      author: 'Roberto Jiménez',
      location: 'Cuevas de Almanzora'
    }
  },
  {
    slug: 'albox',
    name: 'Albox',
    province: 'Almería',
    description: 'Servicios de carpintería metálica en Albox. Centro comercial del Almanzora.',
    longDescription: 'Albox, centro comercial del Valle del Almanzora, confía en nosotros para sus proyectos de carpintería metálica. Trabajamos con comercios, industrias y particulares de la zona, ofreciendo desde cerramientos para locales hasta grandes estructuras industriales.',
    services: ['Cerramientos Comerciales', 'Estructuras Metálicas', 'Carpintería de Aluminio', 'Puertas Automáticas', 'Persianas', 'Escaparates'],
    features: ['Servicio comercial', 'Instalación rápida', 'Mínima molestia', 'Horarios flexibles'],
    images: [{ src: 'https://images.unsplash.com/photo-1759691555010-7f3f8674d2f2', alt: 'Carpintería metálica local' }],
    testimonial: {
      quote: 'Nos renovaron el escaparate del negocio. Quedó espectacular.',
      author: 'Laura Gómez',
      location: 'Albox'
    }
  },
  {
    slug: 'zurgena',
    name: 'Zurgena',
    province: 'Almería',
    description: 'Carpintería metálica en Zurgena y La Alfoquia. Servicios para agricultura y viviendas.',
    longDescription: 'Zurgena y su pedanía La Alfoquia cuentan con nuestros servicios de carpintería metálica. La zona combina actividad agrícola con desarrollos residenciales, y nosotros atendemos ambos sectores con soluciones a medida: desde estructuras para invernaderos hasta cerramientos y puertas para viviendas.',
    services: ['Estructuras Agrícolas', 'Cerramientos', 'Puertas y Ventanas', 'Cerrajería', 'Vallados', 'Barandillas'],
    features: ['Servicio rural', 'Conocimiento local', 'Trato cercano', 'Precios competitivos'],
    images: [{ src: 'https://images.unsplash.com/photo-1758565811272-e79917ca0adc', alt: 'Trabajo de metal rural' }],
    testimonial: {
      quote: 'Muy atentos y profesionales. Las ventanas quedaron perfectas.',
      author: 'Juan Pérez',
      location: 'Zurgena'
    }
  }
]

export const getTownBySlug = (slug: string): TownData | undefined => {
  return townsData.find(town => town.slug === slug)
}

export const getAllTownSlugs = (): string[] => {
  return townsData.map(town => town.slug)
}
