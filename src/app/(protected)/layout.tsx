import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@/services/authentication'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}
