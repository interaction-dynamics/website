import { getTranslations } from '@/services/i18n'

export default async function LegalPage() {
  const { locale } = await getTranslations()

  // you need to use relative imports for dynamic imports with a variable
  const { default: TermsOfService } = await import(
    `../../../messages/markdown/${locale}/terms-of-service.mdx`
  )

  return (
    <div className="container max-w-2xl m-auto">
      <TermsOfService />
    </div>
  )
}
