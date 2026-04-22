// src/routes/api/posts/+server.ts
import { json } from '@sveltejs/kit';
import prisma from '$lib/server/db';
import { BlogPostSchema } from '$lib/ZodSchemas/Zod'

export async function GET() {
    const posts = await prisma.blogPost.findMany();
    return json(posts);
}

export async function POST({ request }) {
    const body = await request.json();
    const result = BlogPostSchema.safeParse(body)

    if (!result.success) {
        return json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    const post = await prisma.blogPost.create({ data: result.data });
    return json(post, { status: 201 });
}
