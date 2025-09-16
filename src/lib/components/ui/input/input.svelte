<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import { cva } from "class-variance-authority";

    interface Props extends HTMLInputAttributes {}

    let {
        value = $bindable(),
        class: className,
        ...props
    }: Props = $props();

    const input = cva('text-sm border px-2 py-2 rounded transition-all duration-300 focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-accent md:text-base', {
        variants: {
            type: {
                number: 'appearence-none'
            }
        }
    })
</script>

<input
    bind:value={value}
    {...props}
    class={cn(input(), className)}
>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
}

/* For Firefox */
input[type=number] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>