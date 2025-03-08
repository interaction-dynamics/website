export const TimeFormat: Record<string, Intl.DateTimeFormatOptions> = {
  standard: {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  },
}

export type DateFormatShortOption = keyof typeof TimeFormat

/**
 * shouldn't be used outside the folder format-datetime
 */
export function formatDatetimeInternal(
  date: string | Date,
  options?: Intl.DateTimeFormatOptions | DateFormatShortOption,
  locale: string = 'en-US'
) {
  const finalOptions =
    typeof options === 'string' ? TimeFormat[options] : options

  const formattedDate = new Date(date).toLocaleDateString(locale, finalOptions)
  return formattedDate
}
