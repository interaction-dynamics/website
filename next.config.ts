import { NextConfig } from 'next'
import WithVercelToolbar from '@vercel/toolbar/plugins/next'

const withVercelToolbar = WithVercelToolbar()

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
}

export default withVercelToolbar(nextConfig)
