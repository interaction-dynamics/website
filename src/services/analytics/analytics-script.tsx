import { GoogleProvider } from './google'
import { HotJar } from './hotjar'

export function AnalyticsScript() {
  return (
    <>
      <HotJar />
      <GoogleProvider />
    </>
  )
}
