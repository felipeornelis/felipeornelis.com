<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { cva, type VariantProps } from "class-variance-authority";
	import { twm } from "$lib/utils/twm";

    type PropsWithChildrenAndVariant = VariantProps<typeof button> & {
        children: Snippet;
    }

	type Props = PropsWithChildrenAndVariant & (
		| (HTMLButtonAttributes & { as?: 'button' })
		| (HTMLAnchorAttributes & { as: 'a' }));

	let {
		as = 'button',
        variant,
        children,
        class: className,
        ...props
	}: Props = $props();

    const button = cva('px-[19px] py-2 rounded-full text-[14px] font-medium cursor-pointer transition-colors select-none',
        {
            variants: {
                variant: {
                    primary: 'bg-primary/90 text-primary-foreground hover:bg-primary',
                    secondary: 'bg-secondary/90 text-secondary-foreground hover:bg-secondary',
                    ghost: 'bg-transparent text-muted-foreground hover:text-foreground',
                }
            },
            defaultVariants: {
                variant: 'primary'
            }
        }
    )
</script>

<svelte:element
    this={as}
    class={twm(button({ variant }), className)}
    {...props}
>
	{@render children()}
</svelte:element>