import { Building2, DoorOpen, Lock, Wrench, Sparkles, Fence, GlassWater, Hammer, LucideIcon } from 'lucide-react'

export interface ServiceData {
  slug: string
  title: string
  shortDescription: string
  icon: LucideIcon
  heroImage: string
  description: string
  benefits: string[]
  features: {
    title: string
    description: string
  }[]
  gallery: {
    src: string
    alt: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const servicesData: ServiceData[] = [
  {
    slug: 'estructuras-metalicas',
    title: 'Estructuras Metálicas',
    shortDescription: 'Diseño y fabricación de estructuras metálicas para naves industriales, edificios y proyectos arquitectónicos de gran envergadura.',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200',
    description: 'Somos especialistas en el diseño, fabricación y montaje de estructuras metálicas para todo tipo de proyectos. Desde naves industriales hasta edificios residenciales, nuestro equipo de ingenieros y soldadores certificados garantiza estructuras seguras, duraderas y eficientes. Utilizamos acero de primera calidad y las últimas técnicas de soldadura para crear soluciones estructurales que cumplen con todas las normativas vigentes.',
    benefits: [
      'Mayor rapidez de construcción frente al hormigón',
      'Excelente relación resistencia-peso',
      'Posibilidad de grandes luces sin pilares intermedios',
      'Flexibilidad para futuras ampliaciones',
      'Material 100% reciclable y sostenible',
      'Menor coste de cimentación',
    ],
    features: [
      { title: 'Naves Industriales', description: 'Estructuras para almacenes, fábricas y centros logísticos de cualquier tamaño.' },
      { title: 'Edificios Comerciales', description: 'Estructuras metálicas para oficinas, centros comerciales y edificios públicos.' },
      { title: 'Estructuras Agrícolas', description: 'Invernaderos, almacenes agrícolas y estructuras para explotaciones ganaderas.' },
      { title: 'Pérgolas y Cubiertas', description: 'Estructuras ligeras para terrazas, parkings y espacios al aire libre.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800', alt: 'Estructura metálica industrial' }],
    faqs: [
      { question: '¿Cuánto tarda el montaje de una estructura metálica?', answer: 'El tiempo depende del tamaño del proyecto. Una nave de 500m² puede montarse en 2-3 semanas. Proyectos más grandes pueden requerir 1-2 meses.' },
      { question: '¿Qué mantenimiento requieren las estructuras metálicas?', answer: 'Con el tratamiento anticorrosión adecuado, las estructuras metálicas requieren un mantenimiento mínimo. Recomendamos revisiones cada 5-10 años.' },
      { question: '¿Ofrecen garantía en sus estructuras?', answer: 'Sí, ofrecemos garantía de 10 años en todas nuestras estructuras metálicas, cubriendo defectos de fabricación y montaje.' },
    ],
  },
  {
    slug: 'carpinteria-aluminio',
    title: 'Carpintería de Aluminio',
    shortDescription: 'Ventanas, puertas, cerramientos y fachadas de aluminio con acabados premium y máximo aislamiento térmico y acústico.',
    icon: DoorOpen,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    description: 'Fabricamos e instalamos carpintería de aluminio de alta calidad para proyectos residenciales, comerciales e industriales. Trabajamos con los mejores sistemas del mercado (Cortizo, Technal, Schüco) para garantizar el máximo aislamiento térmico y acústico. Nuestras ventanas y puertas de aluminio combinan diseño, durabilidad y eficiencia energética.',
    benefits: [
      'Máximo aislamiento térmico con rotura de puente térmico',
      'Aislamiento acústico hasta 47 dB',
      'Resistencia a la corrosión y al salitre',
      'Amplia gama de colores y acabados',
      'Bajo mantenimiento',
      'Perfiles estrechos para mayor luminosidad',
    ],
    features: [
      { title: 'Ventanas', description: 'Ventanas correderas, practicables, oscilobatientes y de grandes dimensiones.' },
      { title: 'Puertas', description: 'Puertas de entrada, balconeras, plegables y correderas elevables.' },
      { title: 'Cerramientos', description: 'Cerramientos de terrazas, porches y balcones con cristal.' },
      { title: 'Fachadas', description: 'Fachadas ligeras y muros cortina para edificios.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', alt: 'Ventanas de aluminio modernas' }],
    faqs: [
      { question: '¿Qué diferencia hay entre aluminio con y sin rotura de puente térmico?', answer: 'La rotura de puente térmico (RPT) incorpora un aislante entre los perfiles interior y exterior, mejorando el aislamiento hasta un 60% y evitando condensaciones.' },
      { question: '¿Cuánto se tarda en fabricar e instalar ventanas de aluminio?', answer: 'El plazo habitual es de 2-3 semanas desde la toma de medidas hasta la instalación, dependiendo de la cantidad y complejidad.' },
      { question: '¿Qué garantía ofrecen?', answer: 'Ofrecemos 5 años de garantía en la carpintería y 2 años en la instalación.' },
    ],
  },
  {
    slug: 'cerrajeria',
    title: 'Cerrajería',
    shortDescription: 'Servicios integrales de cerrajería: puertas de seguridad, rejas decorativas, verjas y sistemas de protección personalizados.',
    icon: Lock,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    description: 'Ofrecemos servicios completos de cerrajería para proteger tu hogar o negocio. Fabricamos puertas de seguridad, rejas, verjas y todo tipo de elementos de protección combinando seguridad y estética. Nuestro equipo de cerrajeros profesionales trabaja tanto en obra nueva como en reformas, adaptándose a las necesidades específicas de cada cliente.',
    benefits: [
      'Máxima seguridad con cerraduras de alta gama',
      'Diseños personalizados y decorativos',
      'Materiales resistentes y duraderos',
      'Tratamiento anticorrosión incluido',
      'Instalación profesional',
      'Servicio de urgencias 24h',
    ],
    features: [
      { title: 'Puertas de Seguridad', description: 'Puertas acorazadas y blindadas con cerraduras de máxima seguridad.' },
      { title: 'Rejas y Verjas', description: 'Rejas para ventanas, verjas de acceso y vallas perimetrales.' },
      { title: 'Barandillas', description: 'Barandillas de seguridad para escaleras, balcones y terrazas.' },
      { title: 'Cerraduras', description: 'Instalación y cambio de cerraduras, bombines y sistemas de acceso.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Trabajos de cerrajería' }],
    faqs: [
      { question: '¿Cuánto cuesta una reja para ventana?', answer: 'El precio depende del tamaño y diseño. Una reja estándar para ventana de 1x1m puede costar entre 150€ y 400€ según el modelo.' },
      { question: '¿Ofrecen servicio de urgencias?', answer: 'Sí, disponemos de servicio de cerrajería urgente 24 horas para aperturas, cambios de cerraduras y reparaciones.' },
      { question: '¿Pueden fabricar diseños personalizados?', answer: 'Absolutamente. Fabricamos cualquier diseño a medida según las preferencias del cliente.' },
    ],
  },
  {
    slug: 'automatizacion',
    title: 'Automatización',
    shortDescription: 'Instalación y mantenimiento de puertas automáticas: correderas, batientes, seccionales y enrollables de última generación.',
    icon: Wrench,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
    description: 'Especializados en la automatización de puertas y accesos, ofrecemos soluciones completas para garajes, comercios, naves industriales y comunidades de vecinos. Trabajamos con las mejores marcas del mercado (Nice, BFT, CAME, Hörmann) e instalamos todo tipo de automatismos: puertas correderas, batientes, seccionales, enrollables y barreras. Nuestro servicio incluye instalación, programación y mantenimiento preventivo.',
    benefits: [
      'Mayor comodidad y seguridad',
      'Acceso controlado y registro de entradas',
      'Motores silenciosos y de bajo consumo',
      'Sistemas de seguridad integrados',
      'Compatibilidad con domótica',
      'Mantenimiento preventivo incluido',
    ],
    features: [
      { title: 'Puertas de Garaje', description: 'Automatización de puertas seccionales, basculantes y enrollables.' },
      { title: 'Puertas Correderas', description: 'Motores para puertas correderas de hasta 2000 kg.' },
      { title: 'Puertas Batientes', description: 'Automatismos para puertas batientes de 1 o 2 hojas.' },
      { title: 'Barreras y Bolardos', description: 'Sistemas de control de acceso para parkings y recintos.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'Puerta automática de garaje' }],
    faqs: [
      { question: '¿Cuánto cuesta automatizar una puerta de garaje?', answer: 'El precio depende del tipo y tamaño de la puerta. Un motor para puerta seccional doméstica puede costar entre 400€ y 800€ instalado.' },
      { question: '¿Qué mantenimiento necesitan los automatismos?', answer: 'Recomendamos un mantenimiento anual que incluye engrase, ajuste de finales de carrera y revisión de seguridades.' },
      { question: '¿Pueden reparar cualquier marca?', answer: 'Sí, reparamos y mantenemos automatismos de todas las marcas del mercado.' },
    ],
  },
  {
    slug: 'forja-artistica',
    title: 'Forja Artística',
    shortDescription: 'Creación de piezas de forja artesanal: barandillas, escaleras, mobiliario y elementos decorativos únicos.',
    icon: Sparkles,
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200',
    description: 'La forja artística es nuestro sello distintivo. Creamos piezas únicas trabajadas a mano por maestros forjadores con décadas de experiencia. Desde barandillas y escaleras hasta mobiliario y elementos decorativos, cada pieza es una obra de arte que combina tradición artesanal con diseño contemporáneo. Perfecta para quienes buscan exclusividad y personalización total.',
    benefits: [
      'Piezas únicas y exclusivas',
      'Trabajo artesanal de calidad',
      'Diseños personalizados',
      'Durabilidad excepcional',
      'Valor estético y patrimonial',
      'Combinación de tradición e innovación',
    ],
    features: [
      { title: 'Barandillas de Forja', description: 'Barandillas artísticas para escaleras, balcones y terrazas.' },
      { title: 'Escaleras', description: 'Escaleras de caracol y rectas con diseños exclusivos.' },
      { title: 'Mobiliario', description: 'Mesas, sillas, camas y elementos decorativos de forja.' },
      { title: 'Elementos Decorativos', description: 'Apliques, lámparas, espejos y complementos de decoración.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800', alt: 'Forja artística tradicional' }],
    faqs: [
      { question: '¿Cuánto tarda una barandilla de forja a medida?', answer: 'Dependiendo de la complejidad del diseño, entre 2 y 4 semanas desde la aprobación del diseño.' },
      { question: '¿La forja es más cara que otros materiales?', answer: 'La forja artística es una inversión en calidad y exclusividad. Los precios son superiores al hierro estándar pero el resultado es incomparable.' },
      { question: '¿Pueden replicar diseños antiguos?', answer: 'Sí, somos especialistas en restauración y réplica de forja antigua y elementos patrimoniales.' },
    ],
  },
  {
    slug: 'mobiliario-urbano',
    title: 'Mobiliario Urbano',
    shortDescription: 'Fabricación de bancos, papeleras, marquesinas, pérgolas y elementos para espacios públicos y jardines.',
    icon: Fence,
    heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200',
    description: 'Diseñamos y fabricamos mobiliario urbano para ayuntamientos, urbanizaciones, parques y espacios públicos. Nuestros productos combinan funcionalidad, durabilidad y estética, creando espacios más agradables y acogedores. Todos nuestros elementos cumplen con las normativas de accesibilidad y seguridad vigentes.',
    benefits: [
      'Diseño funcional y estético',
      'Materiales de alta resistencia',
      'Tratamiento anti-vandálico',
      'Cumplimiento de normativas de accesibilidad',
      'Fácil mantenimiento',
      'Personalización de colores y acabados',
    ],
    features: [
      { title: 'Bancos y Asientos', description: 'Bancos de madera y metal, jardineras con asientos y mobiliario de descanso.' },
      { title: 'Papeleras', description: 'Papeleras de reciclaje, ceniceros y contenedores urbanos.' },
      { title: 'Pérgolas', description: 'Pérgolas, marquesinas y estructuras de sombra para espacios públicos.' },
      { title: 'Vallado Urbano', description: 'Vallas peatonales, bolardos y elementos de ordenación del tráfico.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800', alt: 'Mobiliario de parque' }],
    faqs: [
      { question: '¿Trabajan con ayuntamientos?', answer: 'Sí, tenemos amplia experiencia trabajando con administraciones públicas y estamos inscritos en los registros de contratistas correspondientes.' },
      { question: '¿Qué materiales utilizan para mobiliario urbano?', answer: 'Principalmente acero galvanizado, acero inoxidable, aluminio y madera tratada para exteriores.' },
      { question: '¿Pueden instalar en toda Andalucía?', answer: 'Sí, realizamos instalaciones en toda la comunidad autónoma.' },
    ],
  },
  {
    slug: 'manipulado-vidrio',
    title: 'Manipulado de Vidrio',
    shortDescription: 'Corte, templado e instalación de vidrios para ventanas, escaparates, mamparas y cerramientos de cristal.',
    icon: GlassWater,
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
    description: 'Ofrecemos servicios completos de manipulado e instalación de vidrio para construcción y decoración. Trabajamos con vidrios simples, dobles, laminados, templados y especiales para todo tipo de aplicaciones: ventanas, escaparates, mamparas, barandillas de cristal, puertas y cerramientos. Nuestro taller cuenta con maquinaria de última generación para corte, pulido, taladrado y biselado.',
    benefits: [
      'Amplia variedad de tipos de vidrio',
      'Corte de precisión milimétrica',
      'Templado para máxima seguridad',
      'Vidrios de control solar y térmico',
      'Instalación profesional',
      'Servicio de urgencias para roturas',
    ],
    features: [
      { title: 'Vidrio para Ventanas', description: 'Doble y triple acristalamiento, vidrios de baja emisividad y control solar.' },
      { title: 'Escaparates', description: 'Vidrios de seguridad y laminados para comercios.' },
      { title: 'Mamparas', description: 'Mamparas de baño de cristal templado y divisorias de oficina.' },
      { title: 'Barandillas de Cristal', description: 'Sistemas de barandilla con vidrio templado o laminado.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800', alt: 'Cerramiento de cristal' }],
    faqs: [
      { question: '¿Qué diferencia hay entre vidrio templado y laminado?', answer: 'El templado es más resistente a impactos y al romperse se fragmenta en pequeños trozos. El laminado mantiene los fragmentos unidos gracias a una lámina intermedia.' },
      { question: '¿Pueden sustituir cristales rotos urgentemente?', answer: 'Sí, disponemos de servicio de urgencias para sustitución de vidrios rotos en 24-48 horas.' },
      { question: '¿Trabajan con vidrios especiales?', answer: 'Sí, trabajamos con vidrios acústicos, antibalas, antirrobo, espejos y vidrios decorativos.' },
    ],
  },
  {
    slug: 'metalisteria',
    title: 'Metalistería',
    shortDescription: 'Trabajos especializados en acero inoxidable, hierro, aluminio y aleaciones para proyectos industriales y decorativos.',
    icon: Hammer,
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    description: 'Nuestro taller de metalistería está equipado para trabajar con todo tipo de metales: acero al carbono, acero inoxidable, aluminio, cobre, latón y aleaciones especiales. Realizamos trabajos de corte, plegado, soldadura, torneado y fresado para proyectos industriales, comerciales y decorativos. Desde pequeñas piezas hasta grandes estructuras, garantizamos precisión y calidad.',
    benefits: [
      'Trabajo con todo tipo de metales',
      'Maquinaria CNC de precisión',
      'Soldadura TIG, MIG y electrodo',
      'Acabados personalizados',
      'Fabricación de piezas únicas',
      'Servicio de reparación y restauración',
    ],
    features: [
      { title: 'Acero Inoxidable', description: 'Mobiliario, barandillas, cocinas industriales y elementos decorativos.' },
      { title: 'Hierro', description: 'Estructuras, rejas, puertas y elementos de construcción.' },
      { title: 'Aluminio', description: 'Perfiles, carpintería y elementos ligeros de precisión.' },
      { title: 'Trabajos Especiales', description: 'Piezas a medida, prototipos y restauraciones.' },
    ],
    gallery: [{ src: 'https://images.unsplash.com/photo-558618666-fcd25c85cd64?w=800', alt: 'Taller de metalistería' }],
    faqs: [
      { question: '¿Pueden fabricar piezas a partir de planos?', answer: 'Sí, trabajamos con planos técnicos en cualquier formato (PDF, DWG, DXF) y también podemos crear planos a partir de piezas existentes o bocetos.' },
      { question: '¿Qué certificaciones tienen para soldadura?', answer: 'Nuestros soldadores están certificados según normas EN ISO 9606 para soldadura de acero y aluminio.' },
      { question: '¿Realizan trabajos de reparación?', answer: 'Sí, reparamos piezas metálicas, maquinaria industrial y elementos estructurales.' },
    ],
  },
]

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug)
}

export const getAllServiceSlugs = (): string[] => {
  return servicesData.map(service => service.slug)
}
