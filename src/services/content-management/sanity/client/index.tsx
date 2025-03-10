import { Post } from '@/entities/post'
import { createClient } from '@sanity/client'
import { mapPost } from './adapters/post'

/**
 * @see https://www.sanity.io/docs/js-client
 */
const sanity =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
  process.env.NEXT_PUBLIC_SANITY_DATASET
    ? createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
        useCdn: process.env.NODE_ENV === 'production',
        apiVersion: '2024-03-08',
      })
    : null

const getSanity = () => {
  if (!sanity) {
    throw new Error(
      `Sanity is not configured. Please set environment variables NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET`
    )
  }

  return sanity
}

export async function fetchPosts(): Promise<Post[]> {
  try {
    const posts =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await getSanity().fetch<any[]>(
        `*[_type == 'post']`,
        {},
        {
          cache: 'force-cache',
          next: { revalidate: 60 },
        }
      )

    return posts.map(mapPost)
  } catch (error) {
    console.error('Failed to fetch posts', error)
    return []
  }
}

export async function fetchOnePost(slug: string): Promise<Post | null> {
  try {
    const [post] =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await getSanity().fetch<any[]>(
        `*[_type == 'post' && slug.current == $slug]`,
        { slug },
        {
          cache: 'force-cache',
          next: { revalidate: 60 },
        }
      )

    return post ? mapPost(post) : null
  } catch (error) {
    console.error('Failed to fetch post', error)
    return null
  }
}
