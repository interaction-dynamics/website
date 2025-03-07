import Welcome from './_components/welcome.mdx'
import { Typography } from '@/components/typography'

export default function BlogPage() {
  return (
    <main>
      <Typography variant="h1" className="pb-2">
        Blog
      </Typography>
      <Welcome />
    </main>
  )
}
