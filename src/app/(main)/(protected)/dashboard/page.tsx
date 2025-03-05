import { getTranslations } from '@/services/i18n'

export default async function DashboardPage() {
  const { t } = await getTranslations('dashboard')

  return (
    <div className="p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t('title')}
      </h1>
    </div>
  )
}
