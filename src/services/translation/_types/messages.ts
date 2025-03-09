import { translationConfig } from '../../../../translations.config'
import { Translations } from './translations'

export interface Messages {
  [key: (typeof translationConfig)['namespaces'][number]]: Translations
}
