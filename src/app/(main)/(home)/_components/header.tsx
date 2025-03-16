'use client'
import { LanguageSelector } from '@/components/language-selector'
import { Navigation } from './navigation'
import { Logo } from './logo'

export function Header() {
  return (
    <nav className="flex flex-row justify-between items-center gap-4 p-4">
      <Logo />
      <div className="flex flex-row justify-end items-stretch gap-4">
        <Navigation />
        <LanguageSelector />
      </div>
    </nav>
  )
}
