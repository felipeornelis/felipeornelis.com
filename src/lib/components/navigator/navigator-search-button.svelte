<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
	import { Search, X } from "@lucide/svelte";
</script>

<button
    type="button"
    class="transition-color duration-300 text-[#eaeaea80] hover:text-foreground cursor-pointer"
    onclick={searchContainer.toggle}
>
    {#if searchContainer.isOpen}
        <X size={18}/>
    {:else}
        <Search size={18}/>
    {/if}
</button>