<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";

    interface Props extends HTMLAttributes<HTMLDivElement> {}

    let { class: className, ...props }: Props = $props();
</script>

<div class={cn("bg-muted animate-pulse rounded-md h-4", className)} {...props}></div>