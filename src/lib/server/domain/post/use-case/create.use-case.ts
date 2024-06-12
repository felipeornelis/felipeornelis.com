import type { PostRepository } from '../repository/post.repository';
import { z } from 'zod';

const schema = z.object({
	title: z.string(),
	content: z.string()
});

type Payload = z.infer<typeof schema>;

export class CreatePostUseCase {
	constructor(private repository: PostRepository) {}

	async execute(payload: Payload) {
		try {
			schema.parse(payload);

			const post = await this.repository.create(payload);

			return post;
		} catch (e) {
			console.log('Deu ruim', e);
			return 'Falha no bagulho';
		}
	}
}
