import type { Handle } from '@sveltejs/kit';
import { PostRepositoryMemory } from './routes/sypave/+page.server';

export const handle: Handle = ({ event, resolve }) => {
	const repository = new PostRepositoryMemory();

	return resolve(event);
};
