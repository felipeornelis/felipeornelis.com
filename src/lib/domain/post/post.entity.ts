import type { Author } from '../author/author.entity';

export class Post {
	private id: string;
	private title: string;
	private content: string;
	// private _title: string;
	// private _description: string;
	// private _category: string;
	// private _language: string;
	// private _author: Author;
	// private _content: string;
	// private _createdAt: Date;
	// private _updatedAt: Date;

	constructor() {
		if (!this.id) {
			this.id = crypto.randomUUID();
		}
	}
}
