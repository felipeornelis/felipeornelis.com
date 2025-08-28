<script>
	import { searchContainer } from "$lib/runes/search.svelte";

</script>

{#if searchContainer.isOpen}
    <div class="h-full flex-1 items-center flex justify-between">
        <span class="text-foreground/40">Pesquisar em felipeornelis.com</span>
    </div>
{/if}