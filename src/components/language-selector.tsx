'use client'
import { useTranslations } from '@/services/i18n'
import { Button } from '@/components/ui/button'
import { Globe } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import React from 'react'

export interface LanguageSwitcherProps {
  locale: string
}

export const languageSwitcherTestId = 'language-switcher'

export function LanguageSelector() {
  const { locale, changeLocale, languages } = useTranslations()

  const onToggleLocale = async () => {
    const newLocale = locale === 'en' ? 'fr' : 'en'
    await changeLocale(newLocale)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuCheckboxItem
            onClick={() => changeLocale(language.locale)}
            key={language.locale}
            checked={language.locale === locale}
          >
            {language.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
