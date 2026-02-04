import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Calendar, MapPin, Ruler } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const projects = [
  {
    id: 1,
    title: 'Nave Industrial Agroalimentaria',
    category: 'Estructuras Metálicas',
    description: 'Construcción de estructura metálica para nave industrial de 2000m² destinada al sector agroalimentario, con cubierta autoportante y sistema de ventilación integrado.',
    location: 'Huércal-Overa, Almería',
    year: '2023',
    size: '2.000 m²',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 2,
    title: 'Fachada Muro Cortina',
    category: 'Carpintería de Aluminio',
    description: 'Cerramiento completo de fachada con sistema de muro cortina de aluminio de alta eficiencia energética para edificio de oficinas.',
    location: 'Vera, Almería',
    year: '2023',
    size: '450 m²',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 3,
    title: 'Escalera Ornamental de Forja',
    category: 'Forja Artística',
    description: 'Diseño y fabricación de escalera helicoidal en hierro forjado con barandilla artística para vivienda unifamiliar de lujo.',
    location: 'Mojácar, Almería',
    year: '2023',
    size: '35 ml',
    accent: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 4,
    title: 'Puertas Seccionales Industriales',
    category: 'Automatización',
    description: 'Instalación de 6 puertas seccionales industriales motorizadas con sistema de seguridad avanzado para centro logístico.',
    location: 'Cuevas de Almanzora, Almería',
    year: '2022',
    size: '6 unidades',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 5,
    title: 'Cerramientos de Seguridad',
    category: 'Cerrajería',
    description: 'Fabricación e instalación de puertas de seguridad y rejas decorativas para urbanización residencial de 20 viviendas.',
    location: 'Garrucha, Almería',
    year: '2022',
    size: '20 viviendas',
    accent: 'from-red-500/20 to-orange-500/20',
  },
  {
    id: 6,
    title: 'Mobiliario Urbano Parque Municipal',
    category: 'Mobiliario Urbano',
    description: 'Diseño y fabricación de bancos, papeleras, pérgolas y elementos decorativos para la renovación del parque municipal.',
    location: 'Albox, Almería',
    year: '2022',
    size: '5.000 m²',
    accent: 'from-green-500/20 to-lime-500/20',
  },
  {
    id: 7,
    title: 'Escaparates Comerciales',
    category: 'Manipulado de Vidrio',
    description: 'Instalación de escaparates de vidrio templado con perfilería de aluminio para centro comercial.',
    location: 'Vera Playa, Almería',
    year: '2021',
    size: '120 m²',
    accent: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    id: 8,
    title: 'Estructura para Invernadero',
    category: 'Metalistería',
    description: 'Fabricación de estructura metálica en acero galvanizado para invernadero tipo multitúnel con sistema de ventilación.',
    location: 'Palomares, Almería',
    year: '2021',
    size: '8.000 m²',
    accent: 'from-yellow-500/20 to-amber-500/20',
  },
]

const categories = ['Todos', 'Estructuras Metálicas', 'Carpintería de Aluminio', 'Cerrajería', 'Automatización', 'Forja Artística', 'Mobiliario Urbano', 'Manipulado de Vidrio', 'Metalistería']

const ProyectosPage = () => {
  return (
    <HelmetProvider>
      <SEOHead 
        title="Proyectos Realizados | Metales Del Sureste Andaluz"
        description="Descubre nuestros proyectos de carpintería metálica en Almería: estructuras industriales, fachadas de aluminio, forja artística, puertas automáticas y más."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto"
              >
                <span className="tag-premium inline-block mb-6">Nuestro Portfolio</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
                  Proyectos{' '}
                  <span className="text-gradient-gold">Realizados</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Cada proyecto es una muestra de nuestra dedicación, experiencia y 
                  compromiso con la excelencia en carpintería metálica.
                </p>
                <div className="ornament-line mx-auto mt-10" />
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 border-y border-border/30">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Proyectos completados' },
                  { value: '12+', label: 'Años de experiencia' },
                  { value: '100%', label: 'Clientes satisfechos' },
                  { value: '8', label: 'Especialidades' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <span className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">
                      {stat.value}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              {/* Category filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3 mb-16"
              >
                {categories.map((category, index) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-gold text-primary-foreground'
                        : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="card-premium rounded-3xl overflow-hidden">
                      {/* Image placeholder with gradient */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                        
                        {/* Grid pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }} />

                        {/* Center number */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-card">
                            <span className="text-4xl font-display font-bold text-gradient-gold">
                              {String(project.id).padStart(2, '0')}
                            </span>
                          </div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold text-primary border border-primary/20">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-gradient-gold transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{project.year}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Ruler className="w-4 h-4 text-primary" />
                            <span>{project.size}</span>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                          <Eye className="w-5 h-5" />
                          <span>Ver detalles del proyecto</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  ¿Tienes un proyecto en <span className="text-gradient-gold">mente</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Cuéntanos tu idea y te ayudaremos a hacerla realidad. 
                  Solicita un presupuesto sin compromiso.
                </p>
                <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                  Solicitar Presupuesto
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  )
}

export default ProyectosPage
