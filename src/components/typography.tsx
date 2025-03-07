import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode
  className?: string
}

export function Typography({ variant, className, ...props }: TypographyProps) {
  const Comp = variant ?? 'h1'

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  )
}
