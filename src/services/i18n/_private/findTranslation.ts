import { Translations } from '../types'

export const findTranslation = (
  key: string,
  translations: Translations
): string => {
  const keys = key.split('.')

  try {
    return keys.reduce((acc: Translations | string, key: string) => {
      if (typeof acc === 'string') return acc

      if (acc === undefined) {
        throw new Error(`Impossible to find translation: ${key}`)
      }

      if (!(key in acc)) {
        throw new Error(`Impossible to find translation: ${key}`)
      }

      return acc[key]
    }, translations) as string
  } catch {
    console.error('Impossible to find translation:', key)
    return key
  }
}
