import formData from 'form-data'
import Mailgun from 'mailgun.js'
import { Email } from '../_types/email'

/**
 * @see https://documentation.mailgun.com/docs/mailgun/sdk/nodejs_sdk/
 *
 */
const mailgun = new Mailgun(formData)

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY ?? '',
})

export async function sendEmail(email: Email) {
  console.log('sendEmail', email)
  return mg.messages
    .create(process.env.MAILGUN_DOMAIN ?? '', {
      from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
      ...email,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.error(err)) // logs any error
}
