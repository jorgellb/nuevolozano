import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building2, CheckCircle2, MessageCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Introduce un email válido'),
  phone: z.string().min(9, 'Introduce un teléfono válido'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+34 653 94 07 50',
    href: 'tel:+34653940750',
    description: 'Llámanos para consultas inmediatas'
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+34 653 94 07 50',
    href: 'https://wa.me/34653940750?text=Hola,%20me%20gustar%C3%ADa%20informaci%C3%B3n',
    description: 'Chat directo y rápido'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@metalesdelsureste.com',
    href: 'mailto:info@metalesdelsureste.com',
    description: 'Respuesta en menos de 24 horas'
  },
  {
    icon: MapPin,
    title: 'Dirección',
    value: 'C/ Paraje La Ventica, 8',
    subtitle: 'Pedanía de Santa María de Nieva, 04600 Huércal-Overa, Almería, España',
    href: 'https://maps.google.com/?q=C/+Paraje+La+Ventica,+8,+04600+Huércal-Overa,+Almería',
    description: 'Visítanos en nuestro taller'
  },
  {
    icon: Clock,
    title: 'Horario',
    value: 'Lunes a Viernes: 9:00 - 20:00',
    subtitle: 'Urgencias 24h disponibles',
    description: 'Servicio de cerrajería 24/7'
  }
]

const ContactoPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form data:', data)
    toast.success('¡Mensaje enviado correctamente! Te contactaremos pronto.')
    reset()
    setIsSubmitting(false)
  }

  return (
    <HelmetProvider>
      <SEOHead
        title="Contacto | Metales Del Sureste Andaluz"
        description="Contacta con Metales Del Sureste Andaluz SL. Teléfono: +34 653 94 07 50. Dirección: C/ Paraje La Ventica, 8, Huércal-Overa, Almería. Presupuesto sin compromiso."
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-4xl mx-auto"
              >
                <span className="tag-premium inline-flex items-center gap-2 mb-6">
                  <MessageSquare className="w-4 h-4" />
                  Estamos aquí para ayudarte
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-8 leading-tight">
                  <span className="text-gradient-gold">Contacta</span> con Nosotros
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  ¿Tienes un proyecto en mente? Cuéntanos tu idea y te ayudaremos
                  a hacerla realidad con la mejor calidad.
                </p>
                <div className="ornament-line mx-auto mt-10" />
              </motion.div>
            </div>
          </section>

          {/* Contact Info Cards */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="block h-full"
                        >
                          <div className="card-premium h-full rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                            <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-foreground mb-2">{info.title}</h3>
                            <p className="text-primary font-semibold mb-1">{info.value}</p>
                            {info.subtitle && (
                              <p className="text-sm text-muted-foreground mb-2">{info.subtitle}</p>
                            )}
                            <p className="text-xs text-muted-foreground">{info.description}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="card-premium h-full rounded-2xl p-6">
                          <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <h3 className="text-lg font-display font-bold text-foreground mb-2">{info.title}</h3>
                          <p className="text-primary font-semibold mb-1">{info.value}</p>
                          {info.subtitle && (
                            <p className="text-sm text-muted-foreground mb-2">{info.subtitle}</p>
                          )}
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Form & Map Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="card-premium rounded-3xl p-8 lg:p-10">
                    <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                      Envíanos un mensaje
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Rellena el formulario y te responderemos en menos de 24 horas.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Nombre completo *
                          </label>
                          <Input
                            {...register('name')}
                            placeholder="Tu nombre"
                            className="bg-muted/50 border-border/50 focus:border-primary"
                          />
                          {errors.name && (
                            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <Input
                            {...register('email')}
                            type="email"
                            placeholder="tu@email.com"
                            className="bg-muted/50 border-border/50 focus:border-primary"
                          />
                          {errors.email && (
                            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Teléfono *
                          </label>
                          <Input
                            {...register('phone')}
                            type="tel"
                            placeholder="+34 653 94 07 50"
                            className="bg-muted/50 border-border/50 focus:border-primary"
                          />
                          {errors.phone && (
                            <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Asunto *
                          </label>
                          <Input
                            {...register('subject')}
                            placeholder="¿En qué podemos ayudarte?"
                            className="bg-muted/50 border-border/50 focus:border-primary"
                          />
                          {errors.subject && (
                            <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          {...register('message')}
                          placeholder="Cuéntanos los detalles de tu proyecto..."
                          rows={5}
                          className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                        />
                        {errors.message && (
                          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-premium w-full"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                </motion.div>

                {/* Map & Company Info */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Map */}
                  <div className="card-premium rounded-3xl overflow-hidden h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.8!2d-1.94!3d37.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIzJzI0LjAiTiAxwrA1NiczNi4wIlc!5e0!3m2!1ses!2ses!4v1"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Metales Del Sureste Andaluz"
                    />
                  </div>

                  {/* Company Info */}
                  <div className="card-premium rounded-3xl p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="icon-container w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-foreground">
                          Metales Del Sureste Andaluz SL
                        </h3>
                        <p className="text-muted-foreground">CIF: B04738415</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Empresa constituida</p>
                          <p className="text-sm text-muted-foreground">02 de Marzo de 2012</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Más de 12 años de experiencia</p>
                          <p className="text-sm text-muted-foreground">Especialistas en carpintería metálica</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">Servicio en toda la provincia</p>
                          <p className="text-sm text-muted-foreground">Almería y alrededores</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="card-premium rounded-3xl p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                    <h3 className="text-xl font-display font-bold text-foreground mb-4">
                      ¿Prefieres llamarnos?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Estamos disponibles para atenderte de lunes a viernes de 9:00 a 20:00.
                      Para urgencias de cerrajería, disponemos de servicio 24 horas.
                    </p>
                    <a
                      href="tel:+34653940750"
                      className="btn-premium inline-flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      +34 653 94 07 50
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  )
}

export default ContactoPage
