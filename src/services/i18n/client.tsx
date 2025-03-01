'use client'
import { createContext, useContext, useMemo } from 'react'
import { Messages } from './types'
import { findTranslation } from './private/findTranslation'

interface TranslationContextType {
  locale: string
  t: (key: string, namespace?: string) => string
}

const TranslationContext = createContext<TranslationContextType>({
  locale: '',
  t: () => '',
})

interface TranslationProviderProps extends React.PropsWithChildren {
  locale: string
  messages: Messages
  defaultNamespace: string
}

export function useTranslations(namespace?: string) {
  const { locale, t } = useContext(TranslationContext)

  return {
    locale,
    t: (key: string, specificNamespace: string) =>
      t(key, specificNamespace ?? namespace),
  }
}

export function TranslationProvider({
  locale,
  messages,
  children,
  defaultNamespace,
}: TranslationProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      t: (key: string, namespace?: string) => {
        return findTranslation(key, messages[namespace ?? defaultNamespace])
      },
    }),
    [messages, locale]
  )

  return <TranslationContext value={value}>{children}</TranslationContext>
}
