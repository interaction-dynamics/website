import { Config } from '@/services/translation/_types/config'

export const translationConfig: Config = {
  languages: [
    { label: 'English', locale: 'en' },
    { label: 'Français', locale: 'fr' },
  ],
  defaultLocale: 'en',
  namespaces: [
    'common',
    'dashboard',
    'pricing',
    'email',
    'footer',
    'faq',
    'navigation',
    'home',
  ],
  defaultNamespace: 'common',
}
