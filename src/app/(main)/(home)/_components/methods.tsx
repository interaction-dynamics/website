import { Typography } from '@/components/typography'

export function Methods() {
  return (
    <main className="py-20 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Typography variant="h1" component="h2">
          Smart Development, Faster Results
        </Typography>
        <Typography variant="p" className="text-muted-foreground">
          With over a decade of experience, our developers and designers
          optimize
          <br /> software practices to craft tailored solutions for demanding
          businesses.
        </Typography>
        <div className="grid grid-cols-3 gap-10 pt-10"></div>
      </div>
    </main>
  )
}
