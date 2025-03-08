import { z } from 'zod'

export const Post = z.object({
  title: z.string(),
  slug: z.string(),
  content: z.any(),
  description: z.string(),
  date: z.string(),
  readTime: z.string().optional(),
  categories: z.array(z.string()),
  imageUrl: z.string().optional(),
})

export type Post = z.infer<typeof Post>
