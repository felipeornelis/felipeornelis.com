import { bodyScroll } from './body.svelte';

class MobileMenu {
	#isMobileMenuActive = $state(false);

	get isOpen() {
		return this.#isMobileMenuActive === true;
	}

	get isNotOpen() {
		return this.#isMobileMenuActive === false;
	}

	open() {
		this.#isMobileMenuActive = true;
		bodyScroll.disable();
	}

	close() {
		this.#isMobileMenuActive = false;
		bodyScroll.enable();
	}

	toggle() {
		this.#isMobileMenuActive ? this.close() : this.open();
	}
}

export const mobileMenu = new MobileMenu();
