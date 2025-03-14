import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      h3: 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
      p: 'leading-7 [&:not(:first-child)]:mt-6',
      blockquote: 'mt-6 border-l-2 pl-6 italic',
      ul: 'my-6 ml-6 list-disc [&>li]:mt-2',
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
  component?: React.ElementType
}

export function Typography({
  variant,
  component,
  className,
  ...props
}: TypographyProps) {
  const Comp = component ?? variant ?? 'h1'

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }), className)}
      {...props}
    />
  )
}
