import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import es from './locales/es.json'
import en from './locales/en.json'

export const supportedLanguages = ['es', 'en'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]
export const defaultLanguage: SupportedLanguage = 'es'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'navigator'],
      lookupFromPathIndex: 0,
    },
  })

export default i18n
