import type {
	CreatePostPayload,
	CreatePostRequest,
	CreatePostResponse
} from '$lib/server/domain/post/dto/create.dto';
import type { FindPostResponse } from '$lib/server/domain/post/dto/find.dto';
import type { PostRepository } from '$lib/server/domain/post/repository/post.repository';
import type { PageServerLoad } from '../$types';
import { Post } from '$lib/server/domain/post/entity/post.entity';
import { CreatePostUseCase } from '$lib/server/domain/post/use-case/create.use-case';

export class PostRepositoryMemory implements PostRepository {
	private posts: Array<Post> = [];

	async create(payload: CreatePostPayload): Promise<Post> {
		const post = new Post();

		Object.assign(post, {
			title: payload.title,
			content: payload.content
		});

		this.posts.push(post);
		return post;
	}

	async find(id: string): Promise<Post> {
		return this.posts.find((p) => p.id === id)!;
	}
}

export const load: PageServerLoad = ({ request }) => {
	const createPostUseCase = new CreatePostUseCase(new PostRepositoryMemory());

	createPostUseCase.execute(request.body);
};
