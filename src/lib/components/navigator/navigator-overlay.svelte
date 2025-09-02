<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>


{#if searchContainer.isOpen}
    <div class="fixed inset-0 size-full h-screen w-full bg-transparent backdrop-blur-2xl z-[90] transition-all duration-200">
        {@render children()}
    </div>
{/if}