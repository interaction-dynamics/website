// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapPost(post: any) {
  return {
    slug: post.slug.current,
    title: post.title,
    description: '',
    content: post.body,
    date: post._createdAt,
    imageUrl: undefined,
    categories: [],
  }
}
