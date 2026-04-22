import prisma from '$lib/server/db';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const post = await prisma.blogPost.findUnique({
        where: { id: Number(params.id) }
    });

    if (!post) {
        error(404, 'Post not found');
    }

    return { post };
}
