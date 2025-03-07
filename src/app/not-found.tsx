'use client'

import { Search, ArrowLeft } from 'lucide-react'
import { ErrorLayout } from '@/components/error-layout'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <ErrorLayout
      title={'Lost in Digital Space'}
      icon={
        <Search
          className="w-16 h-16 text-primary animate-bounce"
          style={{ animationDuration: '3s' }}
        />
      }
      subTitle={"The page you're looking for has gone exploring"}
      description={
        "We've searched high and low, but couldn't find the page you requested. It might have moved to a new location, been renamed, or perhaps it never existed in the first place."
      }
      error={'Error Code: 404 - Page Not Found'}
    >
      <Button size="lg" onClick={() => window.history.back()} className="gap-2">
        <ArrowLeft size={18} />
        <span>Go Back</span>
      </Button>
    </ErrorLayout>
  )
}
