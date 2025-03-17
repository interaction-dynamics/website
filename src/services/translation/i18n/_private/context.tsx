'use client'
import { createContext, useMemo } from 'react'
import { Messages } from '../../_types/messages'
import { Language } from '../../_types/language'
import { findTranslation } from './findTranslation'
import { Parameters } from '../../_types/parameters'

interface TranslationContextType {
  locale: string
  languages: Language[]
  t: (
    key: string,
    parameters: Parameters,
    namespace?: string
  ) => React.ReactNode
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
      t: (
        key: string,
        parameters: Parameters = {},
        namespace?: string
      ): React.ReactNode => {
        return findTranslation(
          key,
          messages,
          namespace ?? defaultNamespace,
          parameters
        )
      },
    }),
    [messages, locale, languages, defaultNamespace]
  )

  return <TranslationContext value={value}>{children}</TranslationContext>
}
