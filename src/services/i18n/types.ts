import { namespaces } from './config'

export interface Translations {
  [key: string]: string | Translations
}

export interface Messages {
  [key: (typeof namespaces)[number]]: Translations
}
