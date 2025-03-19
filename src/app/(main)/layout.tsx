import { LanguageSelector } from '@/components/language-selector'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { FeedbackButton } from '@/components/feedback-button'
import {
  SignInButton,
  SignedOut,
  SignUpButton,
  SignedIn,
  UserButton,
} from '@/services/authentication'
import { Footer } from '@/components/sitemap-footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-stretch">
      <nav className="flex flex-row justify-end items-stretch gap-4 p-4 sticky top-0">
        <FeedbackButton />
        <DarkModeToggle />
        <LanguageSelector />
        <SignedOut>
          <SignInButton variant="outline" forceRedirectUrl="/dashboard" />
          <SignUpButton forceRedirectUrl="/dashboard" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
