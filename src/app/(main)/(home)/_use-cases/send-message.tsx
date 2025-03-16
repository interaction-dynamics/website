'use server'
import { sendEmail } from '@/services/email'

export async function sendMessage(
  subject: string,
  message: string,
  email: string
) {
  sendEmail({
    to: ['thibault.friedrich@interaction-dynamics.io'],
    subject: 'You received a message from the website',
    text: `
      Subject: ${subject}
      Message: ${message}
      From: ${email}    
    `,
    html: `<div>
      <p>Subject: ${subject}</p>
      <p>Message: ${message}</p>
      <p>From: ${email}</p>
    </div> `,
  })
}
