import { ReactNode } from 'react'
import { z } from 'zod'

export const SocialIconRenderer = z
  .function()
  .args(
    z.object({
      className: z.string(),
      'aria-hidden': z.literal('true'),
    })
  )
  .returns(z.custom<ReactNode>())

export type SocialIconRenderer = z.infer<typeof SocialIconRenderer>

export const Social = z.object({
  name: z.string(),
  url: z.string().url(),
  icon: SocialIconRenderer.optional(),
})

export type Social = z.infer<typeof Social>
