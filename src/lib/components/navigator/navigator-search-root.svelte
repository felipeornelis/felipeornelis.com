<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
	import { cva, type VariantProps } from "class-variance-authority";
    import type { Snippet } from "svelte";
	import { closeSearchContainerCommand, openSearchContainerCommand } from "$lib/commands/search";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    const container = cva('', {
        variants: {
            status: {
                open: 'w-full flex justify-between items-center flex-row-reverse',
                closed: 'contents',
            }
        },
        defaultVariants: {
            status: 'closed',
        }

    });

    function closeSearchContainer(e: KeyboardEvent) {
        closeSearchContainerCommand(e, searchContainer.close);
    }

    function openSearchContainer(e: KeyboardEvent) {
        openSearchContainerCommand(e, searchContainer.open);
    }
</script>

<svelte:window onkeydown={(event) => {
    closeSearchContainer(event);
    openSearchContainer(event);
}}/>

<div class={container({ status: searchContainer.isOpen ? 'open' : 'closed'})}>
    {@render children()}
</div>