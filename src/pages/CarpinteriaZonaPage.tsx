import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Hammer, Shield, ArrowRight, Star, Construction } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { townsData } from '@/data/townsData'

const CarpinteriaZonaPage = () => {
    return (
        <HelmetProvider>
            <SEOHead
                title="Carpintería Metálica en Almería y Levante | Cobertura y Servicios"
                description="Servicios de carpintería metálica, estructuras y aluminio en toda la zona del Levante Almeriense. Huércal-Overa, Vera, Mojácar y más. Calidad Premium."
            />
            <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-32">
                    {/* Hero Section */}
                    <section className="relative py-20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
                        <div className="absolute -top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

                        <div className="container mx-auto px-6 relative z-10">
                            <div className="text-center max-w-4xl mx-auto mb-16">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
                                >
                                    <Star className="w-4 h-4 fill-primary" />
                                    <span className="font-bold text-sm uppercase tracking-wide">Excelencia en Metal</span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                                    Carpintería Metálica en <span className="text-gradient-gold">Almería y Levante</span>
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                    Desplegamos nuestra experiencia y artesanía en toda la comarca. Desde grandes estructuras industriales en Huércal-Overa hasta cerramientos de diseño en la costa de Mojácar.
                                </p>
                            </div>

                            {/* Towns Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {townsData.map((town, index) => (
                                    <motion.div
                                        key={town.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <Link to={`/servicios/${town.slug}`} className="block h-full group">
                                            <div className="card-premium h-full rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col">

                                                {/* Image area */}
                                                <div className="h-48 overflow-hidden relative">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                                    <img
                                                        src={town.images[0].src}
                                                        alt={town.name}
                                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute bottom-4 left-6 z-20">
                                                        <h2 className="text-2xl font-display font-bold text-white mb-1">
                                                            {town.name}
                                                        </h2>
                                                        <div className="flex items-center gap-1 text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider">
                                                            <MapPin className="w-3 h-3" />
                                                            {town.province}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-6 flex-grow flex flex-col relative bg-card/50 backdrop-blur-sm">
                                                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                                                        {town.description}
                                                    </p>

                                                    <div className="space-y-3 mb-6">
                                                        {town.services.slice(0, 3).map((service, i) => (
                                                            <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                {service}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-auto flex items-center justify-between border-t border-border/50 pt-4 group-hover:border-primary/30 transition-colors">
                                                        <span className="text-sm font-semibold text-primary">
                                                            Ver Proyectos
                                                        </span>
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* SEO Content Section */}
                            <div className="mt-24 max-w-5xl mx-auto">
                                <div className="relative p-8 md:p-12 rounded-3xl bg-glass-heavy border border-white/10 overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

                                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                                                Líderes en Metalistería y Estructuras
                                            </h2>
                                            <div className="prose prose-invert text-muted-foreground">
                                                <p>
                                                    Nuestra presencia en el Levante Almeriense no es casualidad. Llevamos más de una década transformando espacios con metal, vidrio y aluminio.
                                                </p>
                                                <p>
                                                    Entendemos las necesidades específicas de cada localidad: la resistencia a la salinidad necesaria en <strong>Vera Playa</strong> y <strong>Garrucha</strong>, la robustez industrial requerida en <strong>Huércal-Overa</strong> y <strong>Cuevas de Almanzora</strong>, y la integración estética fundamental en pueblos como <strong>Mojácar</strong>.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid gap-4">
                                            {[
                                                { icon: Hammer, title: "Fabricación Propia", desc: "Taller equipado con tecnología CNC." },
                                                { icon: Construction, title: "Montaje Certificado", desc: "Equipo técnico cualificado y seguro." },
                                                { icon: Shield, title: "Garantía Premium", desc: "Respaldo total en cada instalación." }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-white/5 hover:border-primary/20 transition-colors">
                                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-foreground">{item.title}</h3>
                                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default CarpinteriaZonaPage
