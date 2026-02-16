import { useLanguage } from '@/hooks/useLanguage'

export const LanguageSwitcher = () => {
  const { currentLang, switchLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('es')}
        className={`px-2.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          currentLang === 'es'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  )
}
