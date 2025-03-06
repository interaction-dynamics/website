'use client'

import { Button } from '@/components/ui/button'
import { createPaymentCheckoutSession, Plan, Stripe } from '@/services/payment'
import { loadStripe } from '@stripe/stripe-js'

interface CheckoutFormProps {
  plans: Plan[]
}

const secureStripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''
)

const renderProduct = (
  product: string | Stripe.Product | Stripe.DeletedProduct
) => {
  if (typeof product === 'string') {
    return product
  }

  if (product.deleted) {
    return 'deleted product'
  }

  return product.name
}

export function CheckoutForm({ plans }: CheckoutFormProps) {
  const handleSubmit = async (priceId: string) => {
    const session = await createPaymentCheckoutSession(priceId)

    if (!session) {
      return
    }

    return (await secureStripe)?.redirectToCheckout({ sessionId: session.id })
  }

  return (
    <div>
      <h1>Choose a Subscription Plan</h1>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h2>{renderProduct(plan.product)}</h2>
          <p>
            Price: ${plan.price ?? 0 / 100} / {plan.interval}
          </p>
          <Button onClick={() => handleSubmit(plan.price_id)}>Subscribe</Button>
        </div>
      ))}
    </div>
  )
}
