'use client'
import { createContext, useContext, useMemo } from 'react'
import { defaultNamespace } from './config'
import { Messages } from './types'
import { findTranslation } from './findTranslation'

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
}

export function useTranslations(namespace: string = defaultNamespace) {
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
}: TranslationProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      t: (key: string, namespace: string = 'global') => {
        return findTranslation(key, messages[namespace])
      },
    }),
    [messages, locale]
  )

  return <TranslationContext value={value}>{children}</TranslationContext>
}
