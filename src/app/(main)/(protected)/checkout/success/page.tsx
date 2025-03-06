import { checkPaymentSession } from '@/services/payment'

interface SuccessPageProps {
  searchParams: Promise<{ sessionId: string }>
}

export default async function SuccessPage(props: SuccessPageProps) {
  const { sessionId } = await props.searchParams

  const session = await checkPaymentSession(sessionId)

  if (!session) {
    return <>Impossible to find session</>
  }

  const { status, customer_email } = session

  if (status?.toString() === 'loading') {
    return <div>Loading...</div>
  }

  if (status?.toString() === 'failed') {
    return <div>Failed to process subscription. Please try again.</div>
  }

  return (
    <div>
      <h1>Subscription Successful!</h1>
      <p>
        Thank you for your subscription. A confirmation email has been sent to{' '}
        {customer_email}.
      </p>
    </div>
  )
}
