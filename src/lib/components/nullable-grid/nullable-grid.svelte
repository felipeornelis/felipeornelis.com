<script lang="ts" generics="T">
	import type { Snippet } from "svelte";
	import { cva } from "class-variance-authority";

    interface Props {
        columns: number;
        children: Snippet;
        loading: Snippet;
    }
    
    let { columns, children }: Props = $props()

    const grid = cva()
</script>

<div class={grid()}>
    {@render children()}
</div>