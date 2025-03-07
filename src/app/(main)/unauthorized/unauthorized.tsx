import Link from 'next/link'
import { LogIn, UserX } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ErrorLayout } from '@/components/error-layout'

export default function UnauthorizedError() {
  return (
    <ErrorLayout
      title="Members-Only Content"
      subTitle="Please sign in to continue your journey"
      description="The page you're trying to access requires authentication. Sign in to
            your account to view this content or explore other areas of our
            site."
      error="Error Code: 401 - Authentication Required"
      icon={<UserX className="w-16 h-16 text-amber-600 dark:text-amber-400" />}
    >
      <Button asChild size="lg" className="gap-2">
        <Link href="/login">
          <LogIn size={18} />
          <span>Sign In</span>
        </Link>
      </Button>
    </ErrorLayout>
  )
}
