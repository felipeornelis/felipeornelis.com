export class Post {
	id: string;
	title: string;
	content: string;

	constructor() {
		this.id = crypto.randomUUID();
	}
}
