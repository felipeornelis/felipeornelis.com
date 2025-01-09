<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";

    interface Props extends HTMLInputAttributes {}

    let {
        value = $bindable(),
        placeholder = 'Pesquisar em felipeornelis.com',
        ...props
    }: Props = $props();
</script>

<div class="relative">
    <div class="relative max-w-[36rem] mx-auto">
        <div class="size-full rounded-md ring-accent focus-within:ring-2 transition-all duration-200 border border-zinc-700/20">
            <label for="q" class="absolute left-4 top-[17.6px] z-40 text-muted-foreground transition-[font-size,top] duration-200 {value !== '' ? 'filled' : ''}">
                {placeholder}
            </label>

            <input
                type="text"
                name="q"
                id="q"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                spellcheck="false"
                aria-autocomplete="none"
                aria-disabled="false"
                aria-required="true"
                aria-label={placeholder}
                class="w-full text-[0.95rem] bg-transparent border-none pt-[1.7rem] px-[1rem] pb-[0.5rem] rounded-md text-foreground relative z-40 focus-visible:outline-0"
                bind:value
                {...props}
            >
        </div>
    </div>
</div>


<style lang="postcss">
    @reference "tailwindcss";

    div:focus-within label, div label.filled {
        @apply top-[0.7rem] text-[0.8rem];
    }
</style>