import type { Tool } from '@types/tool';

export type Post = {
    stack: Array<Tool>;
    title: string;
    shortText: string;
}