import { motion } from 'framer-motion'
import { CheckCircle2, Award, Users, Clock, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Award, text: 'Calidad Certificada', description: 'Materiales premium' },
  { icon: Users, text: 'Equipo Profesional', description: '+15 especialistas' },
  { icon: Clock, text: 'Cumplimiento', description: 'Plazos garantizados' },
  { icon: Shield, text: 'Garantía Total', description: 'En todos los trabajos' },
]

const highlights = [
  'Presupuestos personalizados sin compromiso',
  'Asesoramiento técnico especializado',
  'Materiales de primera calidad',
  'Garantía de satisfacción',
  'Servicio post-venta',
]

export const About = () => {
  return (
    <section id="nosotros" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Decorative gradients */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="tag-premium inline-block mb-6">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 md:mb-8 leading-tight">
              Tradición y{' '}
              <span className="text-gradient-gold">Excelencia</span>
              <br className="hidden md:block" /> en Cada Proyecto
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-6 leading-relaxed">
              En <strong className="text-foreground">Metales Del Sureste Andaluz</strong>,
              combinamos la artesanía tradicional con las últimas tecnologías para ofrecer
              soluciones de carpintería metálica de la más alta calidad.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              Con más de dos décadas de experiencia en el sector, nos hemos convertido en
              referentes en Andalucía por nuestra dedicación, profesionalismo y compromiso
              con la satisfacción del cliente.
            </p>

            {/* Highlights list */}
            <div className="space-y-4 mb-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="card-premium p-4 md:p-5 rounded-xl group"
                >
                  <div className="flex items-center gap-4">
                    <div className="icon-container w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{feature.text}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Visual composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative aspect-auto lg:aspect-square">
              {/* Main card */}
              <div className="card-premium rounded-3xl p-8 md:p-10 h-full flex flex-col items-center justify-center text-center relative overflow-hidden py-12 md:py-16 lg:py-10">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 w-full">
                  <motion.div
                    className="w-20 h-20 md:w-28 md:h-28 bg-gradient-gold rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-gold-intense mx-auto"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">M</span>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 md:mb-3">
                    Metales Del Sureste
                  </h3>
                  <p className="text-primary font-semibold tracking-[0.2em] uppercase text-base md:text-lg mb-6 md:mb-8">
                    Andaluz
                  </p>

                  <div className="section-divider w-20 mx-auto mb-6 md:mb-8" />

                  <p className="text-muted-foreground mb-8 md:mb-10 text-sm md:text-base">
                    Desde <span className="text-primary font-bold">2004</span> creando excelencia
                  </p>

                  <div className="grid grid-cols-2 gap-6 md:gap-10">
                    <div className="group">
                      <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                        500+
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">Proyectos</p>
                    </div>
                    <div className="group">
                      <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-gold mb-1 md:mb-2 group-hover:scale-110 transition-transform">
                        20+
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">Años</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 lg:-left-10 z-20"
              >
                <div className="bg-gradient-gold text-primary-foreground px-4 md:px-8 py-3 md:py-5 rounded-2xl shadow-gold-intense">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Zap className="w-5 h-5 md:w-6 md:h-6" />
                    <div className="text-left">
                      <p className="text-[10px] md:text-sm font-medium opacity-90 uppercase tracking-wider">Presupuesto Gratis</p>
                      <p className="text-lg md:text-2xl font-display font-bold leading-none">Consultar</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary floating element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -top-3 -right-2 md:-top-4 md:-right-4 lg:-right-8 z-20"
              >
                <div className="card-premium px-4 md:px-6 py-2 md:py-4 rounded-xl border-gold-gradient">
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-xs md:text-base font-bold">Calidad Premium</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
