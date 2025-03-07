import { Typography } from './typography'

export interface SectionProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <main className="p-10">
      <Typography variant="h1">{title}</Typography>
      <div>{children}</div>
    </main>
  )
}
