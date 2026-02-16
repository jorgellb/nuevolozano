import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import heroImage from '@/assets/hero-metalwork.jpg'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src={heroImage}
          alt={t('hero.tag')}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-transparent" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse-slow delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-40 pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="tag-premium inline-flex items-center gap-2 mb-8">
              <Sparkles className="w-4 h-4" />
              {t('hero.tag')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-[1.1] mb-8"
          >
            {t('hero.title1')}{' '}
            <span className="text-gradient-gold relative">
              {t('hero.titleHighlight')}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 0 150 8 200 4" stroke="url(#gold-gradient)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gold-gradient" x1="0" y1="0" x2="200" y2="0">
                    <stop stopColor="hsl(45, 85%, 55%)" />
                    <stop offset="0.5" stopColor="hsl(38, 90%, 60%)" />
                    <stop offset="1" stopColor="hsl(45, 85%, 55%)" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />
            <span className="text-foreground/90">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href="#contacto" className="btn-premium text-lg px-10 py-5 text-center">
              {t('hero.cta1')}
            </a>
            <a href="#proyectos" className="btn-outline-premium text-lg px-10 py-5 text-center">
              {t('hero.cta2')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { number: '20+', label: t('hero.stats.experience') },
              { number: '500+', label: t('hero.stats.projects') },
              { number: '100%', label: t('hero.stats.clients') },
              { number: '24h', label: t('about.stats.emergency') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center md:text-left group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold font-display mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a
          href="#servicios"
          className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
          aria-label={t('hero.cta2')}
        >
          <span className="text-sm uppercase tracking-[0.3em] font-medium">{t('hero.cta2')}</span>
          <div className="w-10 h-16 rounded-full border-2 border-current flex items-start justify-center pt-2 group-hover:border-primary transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-current rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
