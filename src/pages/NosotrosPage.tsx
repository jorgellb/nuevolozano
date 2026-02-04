import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Clock, Shield, Target, Heart, ArrowRight, CheckCircle2, Building2, Wrench } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'

const values = [
  {
    icon: Shield,
    title: 'Calidad',
    description: 'Utilizamos los mejores materiales y técnicas para garantizar resultados duraderos.'
  },
  {
    icon: Users,
    title: 'Profesionalidad',
    description: 'Equipo altamente cualificado con años de experiencia en el sector.'
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    description: 'Cumplimos con los plazos acordados en cada proyecto.'
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Nos involucramos en cada proyecto como si fuera propio.'
  }
]

const milestones = [
  { year: '2012', title: 'Fundación', description: 'Nace Metales Del Sureste Andaluz SL en Huércal-Overa.' },
  { year: '2015', title: 'Expansión', description: 'Ampliamos nuestros servicios a toda la comarca del Levante Almeriense.' },
  { year: '2018', title: 'Automatización', description: 'Incorporamos el servicio de puertas automáticas y sistemas de seguridad.' },
  { year: '2020', title: 'Innovación', description: 'Inversión en maquinaria de última generación para mayor precisión.' },
  { year: '2023', title: 'Liderazgo', description: 'Consolidados como referentes en carpintería metálica en Almería.' }
]

const stats = [
  { value: '12+', label: 'Años de experiencia' },
  { value: '500+', label: 'Proyectos completados' },
  { value: '100%', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Servicio de urgencias' }
]

const NosotrosPage = () => {
  return (
    <HelmetProvider>
      <SEOHead 
        title="Sobre Nosotros | Metales Del Sureste Andaluz"
        description="Conoce a Metales Del Sureste Andaluz SL: más de 12 años de experiencia en carpintería metálica en Almería. Profesionalidad, calidad y compromiso."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="tag-premium inline-block mb-6">Nuestra Historia</span>
                  <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-8 leading-tight">
                    Expertos en{' '}
                    <span className="text-gradient-gold">Carpintería Metálica</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Desde 2012, <strong>Metales Del Sureste Andaluz SL</strong> se ha consolidado como 
                    referente en carpintería metálica en la provincia de Almería. Nuestra pasión por 
                    el metal y el compromiso con la excelencia nos han llevado a completar más de 
                    500 proyectos satisfactoriamente.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                      Contactar
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/servicios" className="btn-outline-premium">
                      Ver Servicios
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative"
                >
                  <div className="card-premium rounded-3xl p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="text-center p-6 rounded-2xl bg-muted/30"
                        >
                          <span className="text-4xl lg:text-5xl font-display font-bold text-gradient-gold">
                            {stat.value}
                          </span>
                          <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Razón Social</h3>
                  <p className="text-muted-foreground">METALES DEL SURESTE ANDALUZ SL</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">CIF</h3>
                  <p className="text-muted-foreground">B04738415</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="card-premium rounded-2xl p-8 text-center"
                >
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Fundación</h3>
                  <p className="text-muted-foreground">02 de Marzo de 2012</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="tag-premium inline-block mb-6">Nuestros Valores</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Lo que nos <span className="text-gradient-gold">define</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nuestros valores son la base de todo lo que hacemos y nos guían en cada proyecto.
                </p>
                <div className="ornament-line mx-auto mt-8" />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="card-premium rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="icon-container w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-16"
              >
                <span className="tag-premium inline-block mb-6">Nuestra Trayectoria</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  Hitos <span className="text-gradient-gold">importantes</span>
                </h2>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-4" />
                      )}
                    </div>
                    <div className="card-premium rounded-2xl p-6 flex-1">
                      <h3 className="text-xl font-display font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="card-premium rounded-3xl p-10"
                >
                  <Target className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Nuestra Misión</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ofrecer soluciones integrales en carpintería metálica que superen las expectativas 
                    de nuestros clientes, combinando tradición artesanal con las últimas tecnologías 
                    del sector.
                  </p>
                  <ul className="space-y-3">
                    {['Excelencia en cada proyecto', 'Innovación constante', 'Satisfacción del cliente'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="card-premium rounded-3xl p-10"
                >
                  <Wrench className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">Nuestra Visión</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Ser la empresa de referencia en carpintería metálica en el sureste español, 
                    reconocidos por nuestra calidad, innovación y compromiso con el desarrollo 
                    sostenible.
                  </p>
                  <ul className="space-y-3">
                    {['Liderazgo regional', 'Sostenibilidad', 'Crecimiento continuo'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
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
                  ¿Listo para trabajar <span className="text-gradient-gold">con nosotros</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contacta con nuestro equipo y descubre cómo podemos ayudarte con tu próximo proyecto.
                </p>
                <Link to="/contacto" className="btn-premium inline-flex items-center gap-2">
                  Contactar Ahora
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

export default NosotrosPage
