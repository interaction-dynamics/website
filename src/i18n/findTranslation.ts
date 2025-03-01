import { Translations } from './types'

export const findTranslation = (
  key: string,
  translations: Translations
): string => {
  const keys = key.split('.')

  return keys.reduce((acc: Translations | string, key: string) => {
    if (typeof acc === 'string') return acc
    return key in acc ? acc[key] : ''
  }, translations) as string
}
