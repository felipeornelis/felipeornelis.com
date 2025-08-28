import { Keyboard } from '$lib/enums/keyboard';
import { searchContainer } from '$lib/runes/search.svelte';

export function closeSearchContainerCommand(e: KeyboardEvent, cb: VoidFunction) {
	if (!window) return;
	if (!searchContainer.isOpen) return;

	if (e.key === Keyboard.Escape) {
		cb();
	}
}

export function openSearchContainerCommand(e: KeyboardEvent, cb: VoidFunction) {
	if (!window) return;
	if (searchContainer.isOpen) return;

	if (e.key === Keyboard.K && e.ctrlKey && e.shiftKey) {
		cb();
	}
}
