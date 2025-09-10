<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";

    function onsubmit() {
        searchContainer.close();
    }

</script>

{#if searchContainer.isOpen}
    <div class="h-full flex-1 items-center flex justify-between">
        <form method="GET" class="contents" action="/search" {onsubmit}>
        <!-- svelte-ignore a11y_autofocus -->
        <input
            type="text"
            name="q"
            class="placeholder:text-foreground/40 text-foreground bg-transparent h-full focus-visible:outline-0 w-full pr-5"
            placeholder="Pesquisar em felipeornelis.com"
            autofocus
            onsubmit={() => alert('oie')}
        />
        </form>
    </div>
{/if}