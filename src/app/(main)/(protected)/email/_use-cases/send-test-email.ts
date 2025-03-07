'use server'

import { sendEmail } from '@/services/email'

export async function sendTestEmail() {
  sendEmail({
    to: ['daneel09@gmail.com'],
    from: 'Mailgun Sandbox <postmaster@sandbox1efb2c64780b4be9bf0975a9e3026e95.mailgun.org>',
    subject: 'Test Email',
    text: 'This is a test email.',
    html: '<p>This is a test email.</p>',
  })
}
