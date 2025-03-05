'use client'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useTranslations } from '@/services/i18n'

interface Plan {
  name: string
  description: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
}

export interface PricingPlan extends Plan {
  cta: string
  popular: boolean
}

export interface PricingSectionProps {
  plans: PricingPlan[]
}

const byFrequence = (isYearly: boolean, plan: Plan) =>
  plan.price.monthly === 0 ? 'forever' : isYearly ? '/year' : '/month'

export function PricingSection({ plans }: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false)

  const { t } = useTranslations('pricing')

  return (
    <section className="py-16 px-4 w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
          {t('Simple, transparent pricing')}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t('Choose the perfect plan')}
        </p>
      </div>
      <div className="flex items-center justify-center mb-8 space-x-2">
        <Label
          htmlFor="billing-toggle"
          className={isYearly ? 'text-muted-foreground' : ''}
        >
          {t('Monthly')}
        </Label>
        <Switch
          id="billing-toggle"
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Label
          htmlFor="billing-toggle"
          className={!isYearly ? 'text-muted-foreground' : ''}
        >
          {t('Yearly')}{' '}
          <span className="text-sm text-green-600 font-medium">
            {t('Save 20%')}
          </span>
        </Label>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.popular ? 'border-primary shadow-lg relative' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {t('Popular')}
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-muted-foreground ml-2">
                  {t(byFrequence(isYearly, plan))}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
                  plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
