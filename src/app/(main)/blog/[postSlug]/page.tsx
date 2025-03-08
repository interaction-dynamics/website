import { Typography } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { fetchOnePost } from '@/services/content-management'
import { PortableText } from '@portabletext/react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export interface OneBlogPageProps {
  params: Promise<{ postSlug: string }>
}

export default async function OneBlogPage({ params }: OneBlogPageProps) {
  const { postSlug } = await params

  const post = await fetchOnePost(postSlug)

  if (!post) notFound()

  return (
    <>
      <Button variant="outline" className="mb-4" asChild>
        <Link href="/blog">
          <ArrowLeft size={18} />
          <span>Back to list of articles</span>
        </Link>
      </Button>
      <Typography variant="h1" className="mb-3">
        {post?.title}
      </Typography>
      <PortableText value={post?.content} />
    </>
  )
}
