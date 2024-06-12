export interface UseCase<R, E> {
	execute(request: R): Promise<E>;
}
