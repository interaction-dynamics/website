import { flag } from 'flags/next'
// import { statsigAdapter } from '@flags-sdk/statsig'

export const showDeploy = flag({
  key: 'showDeploy',
  defaultValue: false,
  identify() {
    return { user: { id: 'user1' } }
  },
  decide({ entities }) {
    return entities?.user?.id === 'user1'
  },
  // adapter: statsigAdapter.featureGate((config) => config.value),
})
