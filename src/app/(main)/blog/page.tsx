import { fetchPosts } from '@/services/content-management'
import { Typography } from '@/components/typography'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDatetime } from '@/lib/format-datetime'

export default async function BlogPage() {
  const posts = await fetchPosts()

  return (
    <>
      <Typography variant="h1" className="pb-2">
        Blog
      </Typography>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={post.imageUrl || '/placeholder.svg'}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute left-3 top-3 ">
                {post.categories.map((category) => (
                  <div
                    className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground"
                    key={category}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <CardHeader className="flex-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{formatDatetime(post.date)}</span>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>
              <CardTitle className="line-clamp-2 mt-2">{post.title}</CardTitle>
              {/* <CardDescription className="line-clamp-3 mt-2">
                {post.excerpt}
              </CardDescription> */}
            </CardHeader>
            <CardFooter className="pt-0">
              <Button variant="link" className="px-0" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
