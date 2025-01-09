<script lang="ts">
	import { twm } from "$lib/utils/twm";
	import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";

    interface Props extends HTMLAnchorAttributes {
        children: Snippet;
    }

    let { children, class: className, ...props }: Props = $props();
</script>

<a
    class={twm("relative text-accent pb-0.5  decoration-inherit after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:left-0 hover:after:w-full", className)}
    {...props}
>
    {@render children()}
</a>
