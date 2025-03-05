interface ABTestingProviderProps {
  children: React.ReactNode
}

export function ABTestingProvider({ children }: ABTestingProviderProps) {
  return <>{children}</>
}
