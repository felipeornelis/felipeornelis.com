<script lang="ts">
	import { bodyScroll } from "$lib/runes/body.svelte";
	import { mobileMenu } from "$lib/runes/mobile-menu.svelte";
	import { cn } from "$lib/utils";
    import { onMount, type Snippet } from "svelte";

    type Props = {
        children: Snippet
    };

    let { children }: Props = $props();

    let body: HTMLBodyElement;
    

    $effect(() => {
        body = document.querySelector('body') as HTMLBodyElement;

        if (mobileMenu.isOpen) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    })
</script>

<div class={cn("md:hidden z-[100] inset-0 h-screen", mobileMenu.isOpen ? "fixed" : "hidden")}>
    <div class="size-full bg-background relative supports-[backdrop-filter]:bg-background/30 backdrop-blur-2xl transition-all duration-200 p-5 overflow-x-hidden overflow-y-auto">
        {@render children()}
    </div>
</div>