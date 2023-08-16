import { writable } from "svelte/store";

function cookiesDisclaimerStores() {
    const { subscribe, set } = writable(true);

    return {
        subscribe,
        close: () => set(false)
    }
}

export const cookiesDisclaimer = cookiesDisclaimerStores();