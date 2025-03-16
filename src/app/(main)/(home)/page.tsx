'use server'
import { Hero } from './_components/hero'
import { PropositionValue } from './_components/proposition-value'
import { Differentiators } from './_components/differentiators'
import { Contact } from './_components/contact'

export default async function Index() {
  return (
    <>
      <Hero />
      <PropositionValue />
      <Differentiators />
      <Contact />
    </>
  )
}
