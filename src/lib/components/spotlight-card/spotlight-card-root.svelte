<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
    }

    let { children }: Props = $props();
</script>

<article class="relative inline-block rounded-lg px-[var(--bw)] overflow-hidden cursor-pointer w-full hover:[&>.idx-border]:opacity-100">
                    <div class="absolute inset-0 p-[var(--bw)] rounded-[inherit] opacity-0 transition-all mask-exclude after:absolute after:top-1/2  after:left-1/2 after:min-w-[200%] after:min-h-[200%] after:aspect-square after:animate-spin idx-border"></div>

                    <div class="relative rounded-[inherit] py-[32px] px-[40px] shadow-[#252525] min-h-full min-w-full flex flex-col gap-2 idx-bg">
                        {@render children()}
                    </div>
                </article>

<style lang="postcss">
    @reference "tailwindcss";

    article {
        --bw: 2px;
    }

    .idx-border {
        -webkit-mask: linear-gradient(var(--color-accent) 0 0) content-box, linear-gradient(var(--color-accent) 0 0);
        mask: linear-gradient(var(--color-accent) 0 0) content-box, linear-gradient(var(--color-accent) 0 0);
        -webkit-mask-composite: xor;
    }

    .idx-border::after {
        background: conic-gradient(from 0deg, rgb(194, 203, 247), var(--color-accent), rgb(192, 132, 252), rgb(0, 0, 0));
        transform: translate(-50%, -50%) rotate(0deg);
        animation: rotate 5s linear infinite;   

    }

    .idx-bg {
        box-shadow: inset 0 0 0 1px #252525;
    }

    @keyframes rotate {
        to {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
</style>