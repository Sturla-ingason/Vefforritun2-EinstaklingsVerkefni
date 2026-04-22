import prisma from '$lib/server/db';

const PER_PAGE = 4;

export async function load({ url }) {
    const page = Math.max(1, Number(url.searchParams.get('page') ?? 1));

    const [projects, total] = await Promise.all([
        prisma.projects.findMany({
            orderBy: { createdAt: 'desc' },
            skip: (page - 1) * PER_PAGE,
            take: PER_PAGE,
            select: { id: true, title: true, content: true, url: true }
        }),
        prisma.projects.count()
    ]);

    return {
        projects,
        page,
        totalPages: Math.ceil(total / PER_PAGE)
    };
}
