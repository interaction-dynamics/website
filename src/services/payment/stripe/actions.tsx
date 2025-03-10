'use server'
import Stripe from 'stripe'
import { headers } from 'next/headers'
import { Plan } from '../_types/plan'
import { logError } from '@/services/monitoring'

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY ?? '')
  : null

const getStripe = () => {
  if (!stripe) {
    throw new Error(
      `Stripe is not configured. Please set environment variable STRIPE_SECRET_KEY`
    )
  }

  return stripe
}

export async function checkPaymentSession(sessionId: string) {
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)

    if (session.payment_status === 'paid') {
      // Update your database to mark the user as subscribed
      // await updateUserSubscriptionStatus(session.client_reference_id, 'active');
    }

    return session
  } catch (error: unknown) {
    logError('Failed to check payment session', error)
    return null
  }
}

export async function createPaymentCheckoutSession(priceId: string) {
  const origin = (await headers()).get('origin') ?? ''

  try {
    const session = await getStripe().checkout.sessions.create({
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
  } catch (error) {
    logError('Failed to check payment session', error)
    return null
  }
}

export async function getPlans(): Promise<Plan[]> {
  try {
    const prices = await getStripe().prices.list({
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
  } catch (error) {
    logError('Failed to check payment session', error)
    return []
  }
}
