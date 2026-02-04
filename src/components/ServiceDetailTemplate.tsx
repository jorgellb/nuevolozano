import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Phone, Mail, Send, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { ServiceData } from '@/data/servicesData'
import { z } from 'zod'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const quoteSchema = z.object({
  name: z.string().trim().min(1, 'El nombre es obligatorio').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  phone: z.string().trim().min(9, 'Teléfono inválido').max(20),
  message: z.string().trim().min(10, 'Describe tu proyecto (mín. 10 caracteres)').max(1000),
})

interface ServiceDetailTemplateProps {
  service: ServiceData
}

export const ServiceDetailTemplate = ({ service }: ServiceDetailTemplateProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    await new Promise(resolve => setTimeout(resolve, 1500))
    toast.success('¡Solicitud enviada! Te contactaremos pronto.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-48 pb-10">
        <div className="container mx-auto px-6 mb-12">
          <Link to="/servicios">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5, scale: 1.02, backgroundColor: "rgba(220, 38, 38, 0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-red-500/5 backdrop-blur-md border border-red-500/10 text-red-600/90 shadow-[0_8px_32px_rgba(220,38,38,0.05)] hover:border-red-500/30 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-display font-medium text-lg tracking-wide">Volver a Servicios</span>
            </motion.div>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-gold shadow-gold mb-8">
                <Icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                <span className="text-gradient-gold">{service.title}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left Column - Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                    Sobre Este Servicio
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                </motion.div>

                {/* Single Showcase Image (No Slider) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Muestra de Trabajo
                  </h3>
                  <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                    <div className="aspect-[16/9] relative">
                      <motion.img
                        src={service.gallery[0].src}
                        alt={service.gallery[0].alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Ventajas
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    ¿Qué Ofrecemos?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="card-premium p-6 rounded-xl"
                      >
                        <h4 className="font-display font-bold text-foreground mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* FAQs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">
                    Preguntas Frecuentes
                  </h3>
                  <div className="space-y-4">
                    {service.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="card-premium rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full flex items-center justify-between p-5 text-left"
                        >
                          <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                          {openFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </button>
                        <motion.div
                          initial={false}
                          animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-muted-foreground">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </motion.div>
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
                      Cuéntanos tu proyecto de {service.title.toLowerCase()} y te contactaremos sin compromiso.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
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
