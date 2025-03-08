import { NextConfig } from 'next'
import createMDX from '@next/mdx'
import WithVercelToolbar from '@vercel/toolbar/plugins/next'

const withVercelToolbar = WithVercelToolbar()

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    authInterrupts: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(withVercelToolbar(nextConfig))
