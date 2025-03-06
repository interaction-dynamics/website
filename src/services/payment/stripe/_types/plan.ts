import Stripe from 'stripe'

export interface Plan {
  id: string
  product: string | Stripe.Product | Stripe.DeletedProduct
  price: number | null
  interval: string | undefined
  price_id: string
}
