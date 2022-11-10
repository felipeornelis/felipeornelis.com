import type { SvelteComponent } from 'svelte';

import Github from '@icons/network/github.svelte';
import Linkedin from '@icons/network/linkedin.svelte';
import Twitter from '@icons/network/twitter.svelte';
import Twitch from '@icons/network/twitch.svelte';

interface Network {
    name: string;
    url: string;
    hidden: boolean;
    icon: typeof SvelteComponent;
}

export const networks: Array<Network> = [
    {
        name: 'Github',
        url: 'https://github.com/felipeornelis',
        hidden: false,
        icon: Github,
    },
    {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/felipeornelis',
        hidden: false,
        icon: Linkedin,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/felipeornelis',
        hidden: false,
        icon: Twitter,
    },
    {
        name: 'Twitch',
        url: 'https://twitch.tv/felipeornelis',
        hidden: true,
        icon: Twitch
    }
]