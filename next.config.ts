import { NextConfig } from 'next'
import createMDX from '@next/mdx'
import WithVercelToolbar from '@vercel/toolbar/plugins/next'

const withVercelToolbar = WithVercelToolbar()

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    authInterrupts: true,
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(withVercelToolbar(nextConfig))
