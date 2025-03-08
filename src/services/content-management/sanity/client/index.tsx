import { Post } from '@/entities/post'
import { createClient } from '@sanity/client'
import { mapPost } from './adapters/post'

/**
 * @see https://www.sanity.io/docs/js-client
 */
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-03-08',
})

export async function fetchPosts(): Promise<Post[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = await client.fetch<any[]>(
    `*[_type == 'post']`,
    {},
    {
      cache: 'force-cache',
      next: { revalidate: 60 },
    }
  )

  return posts.map(mapPost)
}

export async function fetchOnePost(slug: string): Promise<Post | null> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post] = await client.fetch<any[]>(
    `*[_type == 'post' && slug.current == $slug]`,
    { slug },
    {
      cache: 'force-cache',
      next: { revalidate: 60 },
    }
  )

  return post ? mapPost(post) : null
}
