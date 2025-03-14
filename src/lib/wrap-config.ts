export const wrapConfig = <T>(config: T, wrappers: Array<(config: T) => T>) => {
  return wrappers.reduce((acc, wrapper) => wrapper(acc), config)
}
