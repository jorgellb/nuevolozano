import { motion } from 'framer-motion'
import { Phone, Clock, Shield, CheckCircle, MapPin, Wrench, Key, Lock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import type { Locksmith24hTown } from '@/data/locksmith24hData'
import { useLanguage } from '@/hooks/useLanguage'

interface Locksmith24hTemplateProps {
  town: Locksmith24hTown
}

export const Locksmith24hTemplate = ({ town }: Locksmith24hTemplateProps) => {
  const { localizedPath } = useLanguage()
  const handleCall = () => {
    window.location.href = `tel:${town.phoneNumber}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Emergency Focus */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-background to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Emergency Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              Servicio de Urgencias 24/7
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              {town.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              {town.heroSubtitle}
            </motion.p>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-10"
            >
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">Llegamos en {town.responseTime}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">{town.name}, {town.province}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-red-600/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleCall}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-xl"
              >
                {town.phoneNumber}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {town.emergencyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-background border border-border/50"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-3" />
                <span className="text-sm font-medium text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Cerrajeros Profesionales en {town.name}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {town.description}
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {town.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Key className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Somos la opción preferida para emergencias de cerrajería en {town.name}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Respuesta Inmediata</h3>
              <p className="text-muted-foreground">
                Llegamos a tu ubicación en {town.responseTime}. Servicio disponible las 24 horas, todos los días del año.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Profesionales Expertos</h3>
              <p className="text-muted-foreground">
                Técnicos certificados con años de experiencia. Aperturas sin daños y trabajos garantizados.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 rounded-2xl bg-background border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Precios Justos</h3>
              <p className="text-muted-foreground">
                Presupuesto sin compromiso antes de empezar. Sin sorpresas ni costes ocultos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-red-600/20 to-primary/20 border border-red-500/20"
          >
            <Lock className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Te has quedado fuera de casa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              No te preocupes, estamos disponibles ahora mismo para ayudarte en {town.name}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-6 rounded-xl shadow-lg shadow-red-600/30"
              >
                <Phone className="w-5 h-5 mr-2" />
                Llámanos: {town.phoneNumber}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Servicio de Cerrajería Urgente en {town.name}, {town.province}
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground mb-4">
                  Si necesitas un <strong>cerrajero urgente en {town.name}</strong>, has llegado al lugar correcto. 
                  Nuestro equipo de profesionales está disponible las <strong>24 horas del día, los 365 días del año</strong> para 
                  atender cualquier emergencia de cerrajería en {town.name} y alrededores.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ofrecemos servicios de <strong>apertura de puertas en {town.name}</strong> sin causar daños, 
                  <strong> cambio de cerraduras</strong>, instalación de <strong>cerraduras de alta seguridad</strong>, 
                  reparación de cerrojos y mucho más. Somos especialistas en todo tipo de cerraduras y sistemas de seguridad.
                </p>
                <p className="text-muted-foreground">
                  Contamos con técnicos locales que conocen perfectamente la zona de {town.name}, 
                  lo que nos permite llegar rápidamente a tu ubicación. No importa la hora ni el día, 
                  siempre tendrás un <strong>cerrajero de confianza en {town.name}</strong> a tu disposición.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <Link
            to={localizedPath("/")}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Volver a la página principal
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
