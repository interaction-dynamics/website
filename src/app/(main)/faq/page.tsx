import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getTranslations } from '@/services/i18n'

export default async function FaqPage() {
  const { locale, t } = await getTranslations('faq')

  const { faq }: { faq: Array<{ question: string; answer: string }> } =
    await import(`../../../messages/faq/faq.${locale}.json`)

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
        <p className="mt-4 text-muted-foreground">{t('description')}</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item) => (
          <AccordionItem value={item.question} key={item.question}>
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
