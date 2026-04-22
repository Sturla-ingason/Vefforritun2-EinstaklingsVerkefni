import prisma from '$lib/server/db';

const PER_PAGE = 4;

export async function load({ url }) {
    const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));

    const [posts, total] = await Promise.all([
        prisma.blogPost.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * PER_PAGE,
            take: PER_PAGE,
            select: { id: true, title: true, excerpt: true }
        }),
        prisma.blogPost.count()
    ]);

    return {
        posts,
        page,
        totalPages: Math.ceil(total / PER_PAGE)
    };
}
