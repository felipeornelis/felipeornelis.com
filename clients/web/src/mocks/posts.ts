import type { Post } from '@types/post';
import { stack } from '@resources/stack';


export const posts: Array<Post> = [
    {
        title: 'Svelte best UI Tool',
        shortText: 'It improves the developer experience and builds small bundles',
        stack: [
            stack[0],
            stack[2],
            stack[4],
        ]
    },
    {
        title: 'Recommendation: Ilher',
        shortText: 'Pedro Reis is an amazing Frontend Developer who talks about React and Remix',
        stack: [
            stack[1],
            stack[3],
            stack[4],
        ]
    },
    {
        title: 'Tutorial: Programming Language',
        shortText: 'Code your own programming language with Rust',
        stack: [
            stack[8],
        ]
    },
]