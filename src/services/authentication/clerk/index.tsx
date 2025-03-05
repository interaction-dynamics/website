import { clerkMiddleware } from '@clerk/nextjs/server'
import {
  ClerkProvider,
  SignInButton as ClerkSignInButton,
  SignUpButton as ClerkSignUpButton,
} from '@clerk/nextjs'
import { Button, type ButtonProps } from '@/components/ui/button'

export {
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from '@clerk/nextjs'

export const authMiddleware = clerkMiddleware

export const AuthenticationProvider = ClerkProvider

interface SignInButtonProps extends ButtonProps {
  forceRedirectUrl?: string
}

export function SignInButton({
  forceRedirectUrl,
  ...props
}: SignInButtonProps) {
  return (
    <ClerkSignInButton forceRedirectUrl={forceRedirectUrl}>
      <Button {...props}>Sign In</Button>
    </ClerkSignInButton>
  )
}

interface SignUpButtonProps extends ButtonProps {
  forceRedirectUrl?: string
}

export function SignUpButton({
  forceRedirectUrl,
  ...props
}: SignUpButtonProps) {
  return (
    <ClerkSignUpButton forceRedirectUrl={forceRedirectUrl}>
      <Button {...props}>Sign Up</Button>
    </ClerkSignUpButton>
  )
}
