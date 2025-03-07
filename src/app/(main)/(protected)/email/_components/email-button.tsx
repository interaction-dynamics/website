'use client'
import { Button } from '@/components/ui/button'
import { sendTestEmail } from '../_use-cases/send-test-email'

export function EmailButton() {
  return <Button onClick={() => sendTestEmail()}>Send Email</Button>
}
