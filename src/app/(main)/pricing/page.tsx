import { PricingSection } from '@/components/pricing-section'
import { getTranslations } from '@/services/translation'

const plans = [
  {
    name: 'Free',
    description: 'Essential features for individuals and small projects',
    price: {
      monthly: 0,
      yearly: 0,
    },
    features: [
      'Up to 3 projects',
      'Basic analytics',
      '24-hour support response time',
      'Community access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'Perfect for professionals and growing teams',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: [
      'Unlimited projects',
      'Advanced analytics',
      '4-hour support response time',
      'API access',
      'Team collaboration tools',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Advanced features for large organizations',
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: [
      'Unlimited everything',
      'Custom analytics dashboard',
      '1-hour support response time',
      'Dedicated account manager',
      'Custom integrations',
      'SSO authentication',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default async function PricingPage() {
  const { t } = await getTranslations('pricing')

  return (
    <main className="flex-1 p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {t('title')}
      </h1>
      <PricingSection plans={plans} />
    </main>
  )
}
