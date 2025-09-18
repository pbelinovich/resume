import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, ITranslationKeys } from './types'
import { ru } from './locales/ru'
import { en } from './locales/en'

interface II18nContext {
  language: Language
  setLanguage: (language: Language) => void
  t: ITranslationKeys
}

const I18nContext = createContext<II18nContext | undefined>(undefined)

export interface I18nProviderProps {
  children: React.ReactNode
  defaultLanguage?: Language
}

const translations: Record<Language, ITranslationKeys> = {
  ru,
  en,
}

export const I18nProvider = ({ children, defaultLanguage = 'ru' }: I18nProviderProps) => {
  const [language, setLanguage] = useState(defaultLanguage)

  useEffect(() => {
    // Загружаем сохраненный язык из localStorage при инициализации
    const savedLanguage = localStorage.getItem('resume-language') as Language | null

    if (savedLanguage !== language) {
      document.documentElement.setAttribute('lang', language)
      localStorage.setItem('resume-language', language)
    }
  }, [language])

  const value = React.useMemo<II18nContext>(() => ({ language, setLanguage, t: translations[language] }), [language])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useTranslation = (): II18nContext => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useTranslation должен использоваться внутри I18nProvider')
  }
  return context
}

// Хук для быстрого доступа к переводам
export const useT = (): ITranslationKeys => {
  const { t } = useTranslation()
  return t
}
