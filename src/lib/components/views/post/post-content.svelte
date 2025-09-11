<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet
    };

    let { children }: Props = $props();
</script>

<article class="[&>p]:my-5 [&_code]:bg-primary/20 [&_code]:text-primary [&_code]:px-1 [&_code]:py-0.5">
    {@render children()}
</article>