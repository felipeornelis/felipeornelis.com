<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#if !searchContainer.isOpen}
    <nav class="contents">
        <div>
            felipeornelis
        </div>
        {@render children()}
    </nav>
{/if}