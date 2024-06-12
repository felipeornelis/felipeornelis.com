import type { Repository } from '../@shared/repository';
import type { Post } from './post.entity';

export interface PostRepository extends Repository<Post> {}
