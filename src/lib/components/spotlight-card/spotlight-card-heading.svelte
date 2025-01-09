<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<h4 class="text-foreground text-xl font-medium text-left -tracking-tight">
    {@render children()}
</h4>