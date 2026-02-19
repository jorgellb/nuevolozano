import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import heroImage from '@/assets/hero-metalwork.jpg'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 lg:pt-32"
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
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-foreground leading-[1.1] mb-8"
          >
            {t('hero.title1')}{' '}
            <br className="block sm:hidden" />
            <span className="text-gradient-gold relative whitespace-nowrap">
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
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
          >
            <a href="#contacto" className="btn-premium text-lg px-8 py-4 sm:px-10 sm:py-5 text-center w-full sm:w-auto">
              {t('hero.cta1')}
            </a>
            <a href="#proyectos" className="btn-outline-premium text-lg px-8 py-4 sm:px-10 sm:py-5 text-center w-full sm:w-auto">
              {t('hero.cta2')}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full"
          >
            {[
              { number: '20+', label: t('hero.stats.experience') },
              { number: '500+', label: t('hero.stats.projects') },
              { number: '100%', label: t('hero.stats.clients') },
              { number: '24h', label: t('about.stats.emergency') },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-gold font-display mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</p>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
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
