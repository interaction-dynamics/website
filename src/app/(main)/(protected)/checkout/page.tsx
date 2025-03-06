import { getPlans } from '@/services/payment'
import { CheckoutForm } from './_components/checkout-form'

export default async function CheckoutPage() {
  const plans = await getPlans()

  return <CheckoutForm plans={plans} />
}
