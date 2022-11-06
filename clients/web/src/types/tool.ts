import type { SvelteComponent } from "svelte";

export type Tool = {
    name: string;
    color: string;
    background: string;
    icon: typeof SvelteComponent;
}