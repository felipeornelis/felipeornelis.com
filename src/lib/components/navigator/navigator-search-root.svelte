<script lang="ts">
	import { searchContainer } from "$lib/runes/search.svelte";
	import { cva, type VariantProps } from "class-variance-authority";
    import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();

    const container = cva('', {
        variants: {
            status: {
                open: 'w-full flex justify-between items-center flex-row-reverse',
                closed: 'contents',
            }
        },
        defaultVariants: {
            status: 'closed',
        }

    });

    //type ContainerProps = VariantProps<typeof container>;
</script>

<div class={container({ status: searchContainer.isOpen ? 'open' : 'closed'})}>
    {@render children()}
</div>