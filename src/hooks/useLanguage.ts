import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { supportedLanguages, defaultLanguage, type SupportedLanguage } from '@/i18n'

export function useLanguage() {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const currentLang: SupportedLanguage =
    lang && supportedLanguages.includes(lang as SupportedLanguage)
      ? (lang as SupportedLanguage)
      : defaultLanguage

  useEffect(() => {
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang)
    }
    document.documentElement.lang = currentLang
  }, [currentLang, i18n])

  const switchLanguage = (newLang: SupportedLanguage) => {
    const pathWithoutLang = location.pathname.replace(/^\/(es|en)/, '') || '/'
    navigate(`/${newLang}${pathWithoutLang}`)
  }

  const localizedPath = (path: string) => {
    return `/${currentLang}${path}`
  }

  return { currentLang, switchLanguage, localizedPath }
}
