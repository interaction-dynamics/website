'use client'
import { useContext } from 'react'
import { changeLocale } from '@/services/translation'
import { TranslationContext } from './_private/context'

export function useTranslations(namespace?: string) {
  const { locale, t, languages } = useContext(TranslationContext)

  return {
    locale,
    languages,
    t: (key: string, specificNamespace?: string) =>
      t(key, specificNamespace ?? namespace),
    changeLocale,
  }
}
