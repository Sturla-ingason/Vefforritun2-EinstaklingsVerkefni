import { z } from 'zod'

export const BlogPostSchema = z.object({
    title: z.string(),
    content: z.string(),
    excerpt: z.string()
})