import prisma from '$lib/server/db';

export async function load() {
    const latest = await prisma.blogPost.findFirst({
        orderBy: { createdAt: 'desc' },
        select: { id: true }
    });
    return { latestId: latest?.id ?? null };
}
