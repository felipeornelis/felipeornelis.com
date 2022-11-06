import type { Tool } from '@types/tool';

import Golang from '@icons/stack/golang.svelte';
import Svelte from '@icons/stack/svelte.svelte';
import Tailwindcss from '@icons/stack/tailwindcss.svelte';
import Graphql from '@icons/stack/graphql.svelte';
import React from '@icons/stack/react.svelte';
import Nodejs from '@icons/stack/nodejs.svelte';
import Elm from '@icons/stack/elm.svelte';
import Flutter from '@icons/stack/flutter.svelte';
import Rust from '@icons/stack/rust.svelte';

export const stack: Array<Tool> = [
{
    name: 'Svelte',
    color: '#ff3e00',
    background: 'bg-[#ff3e00]',
    icon: Svelte
},
{
    name: 'TailwindCSS',
    color: '#36b8f2',
    background: 'bg-[#36b8f2]',
    icon: Tailwindcss
},
{
    name: 'Go',
    color: '#007d9c',
    background: 'bg-[#007d9c]',
    icon: Golang
},
{
    name: 'GraphQL',
    color: '#e00098',
    background: 'bg-[#e00098]',
    icon: Graphql
},
{
    name: 'React',
    color: '#69d5f3',
    background: 'bg-[#69d5f3]',
    icon: React
},
{
    name: 'Node.js',
    color: '#5c9956',
    background: 'bg-[#5c9956]',
    icon: Nodejs
},
{
    name: 'Elm',
    color: '#1293d8',
    background: 'bg-[#1293d8]',
    icon: Elm
},
{
    name: 'Flutter',
    color: '#045697',
    background: 'bg-[#045697]',
    icon: Flutter
},
{
    name: 'Rust',
    color: '#000000',
    background: 'bg-[#000000]',
    icon: Rust
}
];