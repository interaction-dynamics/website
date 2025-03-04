'use client'
import { createContext, useContext, useMemo } from 'react'
import { Language, Messages } from './types'
import { findTranslation } from './private/findTranslation'
import { changeLocale } from '@/services/i18n/server'
import { defaultNamespace } from './config'

interface TranslationContextType {
  locale: string
  languages: Language[]
  t: (key: string, namespace?: string) => string
}

const TranslationContext = createContext<TranslationContextType>({
  locale: '',
  languages: [],
  t: () => '',
})

interface TranslationProviderProps extends React.PropsWithChildren {
  locale: string
  languages: Language[]
  messages: Messages
  defaultNamespace: string
}

export function useTranslations(namespace?: string) {
  const { locale, t, languages } = useContext(TranslationContext)

  return {
    locale,
    languages,
    t: (key: string, specificNamespace: string) =>
      t(key, specificNamespace ?? namespace),
    changeLocale,
  }
}

export function TranslationProviderClient({
  languages,
  locale,
  messages,
  children,
}: TranslationProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      languages,
      t: (key: string, namespace?: string) => {
        return findTranslation(key, messages[namespace ?? defaultNamespace])
      },
    }),
    [messages, locale]
  )

  return <TranslationContext value={value}>{children}</TranslationContext>
}
