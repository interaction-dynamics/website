import { Translations } from '../types'

export const findTranslation = (
  key: string,
  translations: Translations
): string => {
  const keys = key.split('.')

  return keys.reduce((acc: Translations | string, key: string) => {
    if (typeof acc === 'string') return acc

    if (acc === undefined) {
      throw new Error(`Impossible to find translation: ${key}`)
    }

    return key in acc ? acc[key] : ''
  }, translations) as string
}
