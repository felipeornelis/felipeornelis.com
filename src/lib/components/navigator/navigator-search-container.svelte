<script>
	import { searchContainer } from "$lib/runes/search.svelte";

</script>

{#if searchContainer.isOpen}
    <div class="h-full flex-1 items-center flex justify-between">
        <!-- svelte-ignore a11y_autofocus -->
        <input
            type="text"
            class="placeholder:text-foreground/40 text-foreground bg-transparent h-full focus-visible:outline-0 w-full pr-5"
            placeholder="Pesquisar em felipeornelis.com"
            autofocus
        />
    </div>
{/if}