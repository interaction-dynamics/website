import { NextConfig } from 'next'
import { wrapConfig } from '@/lib/wrap-config'
import * as contentManagement from '@/services/content-management/wrappers'
import * as devTools from '@/services/dev-tools'

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

const wrappers = [
  ...devTools.wrappers,
  ...contentManagement.wrappers,
  // Add more wrappers here, as desired
]

export default wrapConfig(nextConfig, wrappers)
