import prisma from '$lib/server/db';

export async function load() {
    const posts = await prisma.blogPost.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, title: true, excerpt: true, content: true }
    });
    return { latest: posts[0] ?? null, rest: posts.slice(1) };
}
