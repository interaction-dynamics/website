import { useTranslations } from '@/services/translation'
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
