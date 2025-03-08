import { useTranslations } from '@/services/i18n'
import {
  DateFormatShortOption,
  formatDatetimeInternal,
} from './format-datetime'

export function useDatetime() {
  const { locale } = useTranslations()

  return {
    formatDatetime: (
      date: string | Date,
      options: Intl.DateTimeFormatOptions | DateFormatShortOption = 'standard'
    ) => formatDatetimeInternal(date, options, locale),
  }
}
