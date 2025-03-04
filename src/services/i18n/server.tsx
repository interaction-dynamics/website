'use server'
import { headers } from 'next/headers'
import { match } from '@formatjs/intl-localematcher'
import { cookies } from 'next/headers'
import Negotiator from 'negotiator'
import {
  defaultLocale,
  defaultNamespace,
  languages,
  namespaces,
  NEXT_LOCALE,
} from './config'
import { findTranslation } from './private/findTranslation'
import { TranslationProviderClient } from './client'

export async function getLanguages() {
  return languages
}

export async function getLocale() {
  const cookieStore = await cookies()

  if (cookieStore.has(NEXT_LOCALE)) {
    return cookieStore.get(NEXT_LOCALE)?.value ?? defaultLocale
  }

  const headersList = await headers()

  const allHeaders = [...headersList.entries()].reduce(
    (acc, [name, value]) => ({
      ...acc,
      [name]: value,
    }),
    {}
  )

  const browerLanguages = new Negotiator({ headers: allHeaders }).languages()

  const locales = languages.map((l) => l.locale)

  try {
    return match(browerLanguages, locales, defaultLocale)
  } catch {
    return defaultLocale
  }
}

export async function changeLocale(locale: string) {
  const cookieStore = await cookies()
  cookieStore.set(NEXT_LOCALE, locale)
}

export async function getMessages(locale: string) {
  const promises = namespaces.map(async (namespace) => [
    namespace,
    (await import(`../../messages/${locale}/${namespace}.json`)).default,
  ])

  return Object.fromEntries(await Promise.all(promises))
}

export async function getTranslation(namespace?: string) {
  const locale = await getLocale()
  const messages = await getMessages(locale)

  return {
    locale,
    t: (key: string, specificNamespace?: string) => {
      return findTranslation(
        key,
        messages[specificNamespace ?? namespace ?? defaultNamespace]
      )
    },
  }
}

interface Props extends React.PropsWithChildren {
  defaultNamespace: string
}

export async function TranslationProvider(props: Props) {
  const locale = await getLocale()
  const messages = await getMessages(locale)
  const languages = await getLanguages()

  return (
    <TranslationProviderClient
      {...props}
      locale={locale}
      messages={messages}
      languages={languages}
    />
  )
}
