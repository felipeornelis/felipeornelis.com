<script lang="ts">
    import type { Snippet } from "svelte";
	import { searchContainer } from "$lib/runes/search.svelte";
	import NavigatorButton from "./navigator-button.svelte";
	import { ChartNoAxesGantt } from "@lucide/svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

{#if !searchContainer.isOpen}
    <nav class="contents">
        <div class="flex-1 md:grow-0 shrink-0">
            <a href="/" draggable="false">
                felipeornelis
            </a>
        </div>

        <div class="hidden md:contents">
            {@render children()}
        </div>

        <div class="contents md:hidden">
            <NavigatorButton action={() => {}}>
                <ChartNoAxesGantt />
            </NavigatorButton>
        </div>
    </nav>
{/if}