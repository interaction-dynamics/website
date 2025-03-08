'use client'
import { createContext, useMemo } from 'react'
import { Language, Messages } from '../types'
import { findTranslation } from './findTranslation'

interface TranslationContextType {
  locale: string
  languages: Language[]
  t: (key: string, namespace?: string) => string
}

export const TranslationContext = createContext<TranslationContextType>({
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

export function TranslationProviderClient({
  languages,
  locale,
  messages,
  children,
  defaultNamespace,
}: TranslationProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      languages,
      t: (key: string, namespace?: string) => {
        return findTranslation(key, messages, namespace ?? defaultNamespace)
      },
    }),
    [messages, locale, languages, defaultNamespace]
  )

  return <TranslationContext value={value}>{children}</TranslationContext>
}
