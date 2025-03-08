'use client'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface ErrorLayoutProps {
  title: string
  icon: React.ReactNode
  subTitle?: string
  description: string
  error: React.ReactNode
  children: React.ReactNode
}

export function ErrorLayout({
  title,

  icon,
  description,
  error,
  children,
}: ErrorLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="relative h-48 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/10 rounded-full animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {icon}
            {/* <Search
              className="w-16 h-16 text-primary animate-bounce"
              style={{ animationDuration: '3s' }}
            /> */}
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            {title}
          </h1>
          {/* <h2 className="text-xl font-medium text-foreground">{subTitle}</h2> */}
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="pt-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild size="lg" className="gap-2">
              <Link href="/">
                <Home size={18} />
                <span>Return Home</span>
              </Link>
            </Button>
            {children}
          </div>

          <p className="text-sm text-muted-foreground pt-4">{error}</p>
        </div>
      </div>
    </div>
  )
}
