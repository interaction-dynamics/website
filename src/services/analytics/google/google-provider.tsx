import { GoogleAnalytics } from '@next/third-parties/google'

export function GoogleProvider() {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  ) {
    return (
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    )
  }

  return null
}
