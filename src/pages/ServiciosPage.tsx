import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { servicesData } from '@/data/servicesData'

const ServiciosPage = () => {
  return (
    <HelmetProvider>
      <SEOHead 
        title="Nuestros Servicios | Metales Del Sureste Andaluz"
        description="Descubre todos nuestros servicios de carpintería metálica: estructuras metálicas, carpintería de aluminio, cerrajería, automatización, forja artística y más."
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-32">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto"
              >
                <span className="tag-premium inline-flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4" />
                  Excelencia en Metal
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
                  Nuestros{' '}
                  <span className="text-gradient-gold">Servicios</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Soluciones integrales en carpintería metálica con más de una década 
                  de experiencia y los más altos estándares de calidad.
                </p>
                <div className="ornament-line mx-auto mt-10" />
              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {servicesData.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={`/servicio/${service.slug}`} className="block h-full">
                        <div className="card-premium h-full rounded-3xl overflow-hidden relative">
                          {/* Background gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative z-10 p-8 lg:p-10">
                            {/* Header */}
                            <div className="flex items-start gap-6 mb-6">
                              <div className="icon-container w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Icon className="w-10 h-10 text-primary" />
                              </div>
                              <div>
                                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                  Servicio {String(index + 1).padStart(2, '0')}
                                </span>
                                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mt-2 group-hover:text-gradient-gold transition-all duration-300">
                                  {service.title}
                                </h2>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                              {service.description}
                            </p>

                            {/* Features preview */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                              {service.features.slice(0, 4).map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <span>{feature.title}</span>
                                </div>
                              ))}
                            </div>

                            {/* CTA */}
                            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                              <span>Ver detalles del servicio</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Decorative corner */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
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
                  ¿Necesitas un <span className="text-gradient-gold">presupuesto</span>?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contacta con nosotros para obtener un presupuesto personalizado sin compromiso. 
                  Estamos aquí para ayudarte con tu proyecto.
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

export default ServiciosPage
