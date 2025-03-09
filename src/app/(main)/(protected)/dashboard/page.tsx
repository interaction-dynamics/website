import { Section } from '@/components/section'
import { getTranslations } from '@/services/translation'

export default async function DashboardPage() {
  const { t } = await getTranslations('dashboard')

  return <Section title={t('title')}></Section>
}
