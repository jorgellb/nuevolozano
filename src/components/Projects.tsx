import { motion } from 'framer-motion'
import { ArrowRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Nave Industrial',
    category: 'Estructuras Metálicas',
    description: 'Construcción de estructura metálica para nave de 2000m² con cubierta autoportante.',
    accent: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Fachada de Aluminio',
    category: 'Carpintería de Aluminio',
    description: 'Cerramiento completo de fachada con sistema de muro cortina de alta eficiencia.',
    accent: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Escalera de Forja',
    category: 'Forja Artística',
    description: 'Diseño y fabricación de escalera ornamental en hierro forjado con barandilla.',
    accent: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Puerta Automática',
    category: 'Automatización',
    description: 'Instalación de puerta seccional industrial motorizada con sistema de seguridad.',
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
]

export const Projects = () => {
  return (
    <section id="proyectos" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="tag-premium inline-block mb-6">
            Proyectos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
            Nuestros <span className="text-gradient-gold">Trabajos</span> Destacados
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una oportunidad para demostrar nuestra calidad,
            creatividad y compromiso con la excelencia.
          </p>
          <div className="ornament-line mx-auto mt-10" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] card-premium rounded-2xl overflow-hidden">
                {/* Colored gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 shadow-card">
                    <span className="text-4xl font-display font-bold text-gradient-gold">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                      <Eye className="w-4 h-4" />
                      <span>Ver proyecto</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/proyectos" className="btn-outline-premium inline-flex items-center">
            Ver Todos los Proyectos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
