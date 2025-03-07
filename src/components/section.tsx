export interface SectionProps {
  title: React.ReactNode
  children?: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <main className="p-10">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <div>{children}</div>
    </main>
  )
}
