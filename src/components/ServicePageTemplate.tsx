import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, CheckCircle, ArrowLeft, Quote, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { TownData } from '@/data/townsData'
import { z } from 'zod'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const quoteSchema = z.object({
  name: z.string().trim().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  phone: z.string().trim().min(9, 'Teléfono inválido').max(20),
  service: z.string().min(1, 'Selecciona un servicio'),
  message: z.string().trim().min(10, 'Describe tu proyecto (mín. 10 caracteres)').max(1000),
})

interface ServicePageTemplateProps {
  town: TownData
}

export const ServicePageTemplate = ({ town }: ServicePageTemplateProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const result = quoteSchema.safeParse(formData)
    if (!result.success) {
      toast.error(result.error.errors[0].message)
      return
    }

    setIsSubmitting(true)

    // Prepare Netlify form submission
    const body = new URLSearchParams()
    body.set('form-name', 'service-quote')
    body.set('town', town.name)
    Object.entries(formData).forEach(([key, value]) => {
      body.set(key, value)
    })

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      })

      toast.success('¡Solicitud enviada! Te contactaremos pronto.')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      toast.error('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-48 pb-10">
        <div className="container mx-auto px-6 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full bg-accent/5 hover:bg-accent/10 border border-border/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="tag-premium inline-block mb-6">
                <MapPin className="w-4 h-4 inline mr-2" />
                {town.province}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                Carpintería Metálica en{' '}
                <span className="text-gradient-gold">{town.name}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {town.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Image Display (Single Image, no slider) */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-elevated"
            >
              <div className="aspect-[16/9] relative">
                <motion.img
                  src={town.images[0].src}
                  alt={town.images[0].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Description & Services */}
              <div className="lg:col-span-2 space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    Nuestros Servicios en {town.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {town.longDescription}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Servicios Disponibles
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {town.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    ¿Por Qué Elegirnos?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {town.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {town.testimonial && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-premium p-8 rounded-2xl"
                  >
                    <Quote className="w-10 h-10 text-primary mb-4" />
                    <blockquote className="text-lg text-foreground italic mb-4">
                      "{town.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">
                          {town.testimonial.author[0]}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{town.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{town.testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right Column - Quote Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-24"
                >
                  <div className="card-premium p-8 rounded-2xl">
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Solicita Presupuesto
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      Cuéntanos tu proyecto y te contactaremos sin compromiso.
                    </p>

                    <form
                      name="service-quote"
                      method="POST"
                      data-netlify="true"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <input type="hidden" name="form-name" value="service-quote" />
                      <input type="hidden" name="town" value={town.name} />

                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre"
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@email.com"
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+34 653 94 07 50"
                          className="bg-background/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Servicio de interés</Label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background/50 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Selecciona un servicio</option>
                          {town.services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Describe tu proyecto</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Cuéntanos qué necesitas..."
                          rows={4}
                          className="bg-background/50 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-premium"
                      >
                        {isSubmitting ? (
                          'Enviando...'
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Solicitar Presupuesto
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-border/30 space-y-4">
                      <p className="text-sm text-muted-foreground text-center">
                        ¿Prefieres llamarnos?
                      </p>
                      <a
                        href="tel:+34653940750"
                        className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                      >
                        <Phone className="w-4 h-4" />
                        +34 653 94 07 50
                      </a>
                      <a
                        href="mailto:info@metalesdelsureste.com"
                        className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        info@metalesdelsureste.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
