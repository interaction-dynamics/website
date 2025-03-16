import { Container } from '@/components/ui/container'

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return <Container className="max-w-4xl">{children}</Container>
}
