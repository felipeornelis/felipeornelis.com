export interface Repository<T> {
	create(entity: T): Promise<void>;
	update(entity: T): Promise<void>;
	find(id: string): Promise<T>;
	findMany(): Promise<Array<T>>;
}
