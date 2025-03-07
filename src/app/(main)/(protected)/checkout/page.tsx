import { getPlans } from '@/services/payment'
import { CheckoutForm } from './_components/checkout-form'
import { Section } from '@/components/section'

export default async function CheckoutPage() {
  const plans = await getPlans()

  return (
    <Section title="Checkout">
      {plans && <CheckoutForm plans={plans} />}
    </Section>
  )
}
