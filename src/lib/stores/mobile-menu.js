import { writable } from "svelte/store";

function mobileMenuStore() {
    const { subscribe, set, update } = writable(false);

    return {
        subscribe,
        open: () => set(true),
        close: () => set(false),
        toggle: () => update((status) => !status)
    }
}

export const mobileMenu = mobileMenuStore();