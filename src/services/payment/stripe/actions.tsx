'use server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { Plan } from './_types/plan'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '')

export async function checkPaymentSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      // Update your database to mark the user as subscribed
      // await updateUserSubscriptionStatus(session.client_reference_id, 'active');
    }

    return session
  } catch {
    return null
  }
}

export async function createPaymentCheckoutSession(priceId: string) {
  const origin = (await headers()).get('origin') ?? ''

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/checkout/success?sessionId={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    })

    return session
  } catch {
    return null
  }
}

export async function getPlans(): Promise<Plan[]> {
  const prices = await stripe.prices.list({
    expand: ['data.product'],
    active: true,
    type: 'recurring',
  })

  const plans = prices.data.map((price) => ({
    id: price.id,
    product: price.product,
    price: price.unit_amount,
    interval: price.recurring?.interval,
    price_id: price.id,
  }))

  return plans
}
