import { getTranslations } from '@/services/i18n'
import {
  DateFormatShortOption,
  formatDatetimeInternal,
} from './format-datetime'

export async function formatDatetime(
  date: string | Date,
  options: Intl.DateTimeFormatOptions | DateFormatShortOption = 'standard'
) {
  const { locale } = await getTranslations()

  return formatDatetimeInternal(date, options, locale)
}
