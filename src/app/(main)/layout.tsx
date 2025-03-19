import { Footer } from '@/components/sitemap-footer'
import { Header } from './(home)/_components/header'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-stretch">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
