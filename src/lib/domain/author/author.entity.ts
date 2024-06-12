export class Author {
	private _id: string;
	private _username: string;
	private _displayName: string;
	private _email: string;
	private _passwordHash: string;
	private _createdAt: Date;

	constructor() {
		if (!this._id) {
			this._id = crypto.randomUUID();
			this._createdAt = new Date();
		}
	}
}
