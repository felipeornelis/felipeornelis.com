<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
	import { Search, X } from "@lucide/svelte";
	import NavigatorButton from "./navigator-button.svelte";
</script>

<NavigatorButton action={searchContainer.toggle}>
    {#if searchContainer.isOpen}
        <X size={18}/>
    {:else}
        <Search size={18}/>
    {/if}
</NavigatorButton>