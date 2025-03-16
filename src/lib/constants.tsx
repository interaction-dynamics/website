import { Social } from '../entities/social'
import { convertSocials } from './convert-socials'

import config from '../../package.json'

export const version: string = config?.version ?? '0.0.0'

export const productName: string = config?.name ?? 'boilerplate-next'

export const companyName: string = 'Interaction Dynamics'

export const description: string =
  config?.description ?? 'Boilerplate for Next.js'

export const socials: Social[] = [
  ...convertSocials(config?.socials ?? {}),
  /**
   * If you need to override the logic about social media icons, you can do it here.
   *
   */
  // {
  //   name: 'x',
  //   url: 'https://example.com',
  //   icon: (props) => <svg {...props}></svg>,
  // },
]

export const siteMap = config?.site_map ?? {}
