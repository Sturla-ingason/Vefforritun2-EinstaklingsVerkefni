import prisma from '$lib/server/db';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const project = await prisma.projects.findUnique({
        where: { id: Number(params.id) }
    });

    if (!project) {
        error(404, 'Project not found');
    }

    return { project };
}
