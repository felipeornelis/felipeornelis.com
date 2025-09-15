<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        action: VoidFunction;
        children: Snippet;
    }

    let { action, children }: Props = $props();
</script>

<button
    type="button"
    class="transition-color duration-300 text-muted-foreground hover:text-foreground cursor-pointer"
    onclick={action}
>
    {@render children()}
</button>