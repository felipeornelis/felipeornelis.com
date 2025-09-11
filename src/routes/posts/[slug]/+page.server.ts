import type { PageServerLoad } from './$types';
import { posts } from '$lib/mocks/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const post = posts.find((p) => p.slug === params.slug);

	if (!post) {
		return error(404, 'Not found');
	}

	return { post };
};
