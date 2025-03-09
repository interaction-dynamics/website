import { Language } from './language'

export interface Config {
  languages: Language[]
  namespaces: string[]
  defaultNamespace: string
  defaultLocale: string
}
