'use client';

/** @type {import('$lib/types/cookies-consent').CookiesConset}  */
export const cookiesConsent = {
    set: (value) => {
        if(localStorage) {
            localStorage.setItem('ornelis:cookies:consent', String(value))
        }
    },

    get: () => {
        if(localStorage) {
            return !!localStorage.getItem('ornelis:cookies:consent');
        }

        return null;
    }
}