import { Language } from './types'

export const languages: Language[] = [
  { label: 'English', locale: 'en' },
  { label: 'Français', locale: 'fr' },
]

export const namespaces = ['common', 'dashboard', 'pricing']

export const defaultNamespace = 'common'

export const defaultLocale = 'en'

export const NEXT_LOCALE = 'locale'
