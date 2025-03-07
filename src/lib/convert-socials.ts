import { Social } from '@/entities/social'

export const convertSocials = (socials: Record<string, string>): Social[] =>
  Object.entries(socials)
    .map(([name, url]) => ({
      name,
      url,
    }))
    .filter(({ url }) => url)
