import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Typography } from './components/typography'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
        alt=""
      />
    ),
    ...components,
  }
}
