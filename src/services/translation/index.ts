export * from './i18n'

const rightToLeftLocales = [
  'ar',
  'arc',
  'dv',
  'fa',
  'ha',
  'he',
  'khw',
  'ks',
  'ku',
  'ps',
  'ur',
  'yi',
]

const isRTL = (locale: string) => rightToLeftLocales.includes(locale)

export function dir(locale: string) {
  return isRTL(locale) ? 'rtl' : 'ltr'
}
