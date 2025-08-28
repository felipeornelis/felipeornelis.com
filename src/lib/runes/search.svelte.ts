let searchContainerState = $state(false);

export const searchContainer = {
	get isOpen() {
		return searchContainerState;
	},

	open: () => (searchContainerState = true),
	close: () => (searchContainerState = false),
	toggle: () => (searchContainerState = !searchContainerState)
};

export class SearchContainer {
	#is_opened = $state(false);

	close() {
		this.#is_opened = false;
	}

	open() {
		this.#is_opened = true;
	}

	get isOpen() {
		return this.#is_opened === true;
	}
}
