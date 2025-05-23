import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { VercelToolbar } from '@vercel/toolbar/next'

import './globals.css'
import type { Metadata } from 'next'
import { dir, getLocale, TranslationProvider } from '@/services/translation'
import { AnalyticsScript } from '@/services/analytics'
import { ABTestingProvider } from '@/services/ab-testing'
import { description, productName } from '@/lib/constants'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: productName,
  description,
}

export interface LocaleLayoutProps {
  children: React.ReactNode
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  const locale = await getLocale()
  const shouldInjectToolbar = process.env.NODE_ENV === 'development'

  return (
    <ABTestingProvider>
      <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
        <head>
          <AnalyticsScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TranslationProvider defaultNamespace="common">
              {children}
            </TranslationProvider>
          </ThemeProvider>
          {shouldInjectToolbar && <VercelToolbar />}
        </body>
      </html>
    </ABTestingProvider>
  )
}
