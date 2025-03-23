'use client'
import { useContext } from 'react'
import { changeLocale } from '@/services/translation'
import { TranslationContext } from './_private/context'
import { Parameters } from '../_types/parameters'

export function useTranslations(namespace?: string) {
  const { locale, t, languages } = useContext(TranslationContext)

  return {
    locale,
    languages,
    t: (key: string, parameters: Parameters = {}, specificNamespace?: string) =>
      t(key, parameters, specificNamespace ?? namespace),
    changeLocale,
  }
}
