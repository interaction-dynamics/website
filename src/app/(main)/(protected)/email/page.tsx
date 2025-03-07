import { Section } from '@/components/section'
import { EmailButton } from './_components/email-button'

export default function EmailPage() {
  return (
    <Section title="Email">
      <p className="py-10">Here you can manage your email settings.</p>
      <EmailButton />
    </Section>
  )
}
