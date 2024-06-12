import type { CreatePostRequest, CreatePostResponse } from '../dto/create.dto';
import type { FindPostResponse } from '../dto/find.dto';
import type { Post } from '../entity/post.entity';

export interface PostRepository {
	create(payload: CreatePostRequest): Promise<CreatePostResponse>;
	find(id: string): Promise<Post>;
}
