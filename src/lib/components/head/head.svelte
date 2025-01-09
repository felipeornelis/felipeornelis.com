<script lang="ts">
	import type { Snippet } from "svelte";
	import { format_title } from "./format-title";

    interface Props {
        title: string;
        description?: string;
        children?: Snippet;
    }

    let {
        title,
        description = '',
        children
    }: Props = $props();
</script>

<svelte:head>
    <title>{format_title(title)}</title>
    <meta name="description" content="{description}" />

    {@render children?.()}
</svelte:head>