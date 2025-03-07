import { Section } from '@/components/section'
import { EmailButton } from './_components/email-button'
import { getTranslations } from '@/services/i18n'

export default async function EmailPage() {
  const { t } = await getTranslations('email')

  return (
    <Section title={t('title')}>
      <p className="py-10">{t('description')}</p>
      <EmailButton />
    </Section>
  )
}
