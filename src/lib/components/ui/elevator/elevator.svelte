<script lang="ts">
	import { ElevatorIcon } from "$lib/icons";
	import { cn } from "$lib/utils";

    let scrollY = $state(0);

    function onclick() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
</script>

<svelte:window bind:scrollY  />

<!-- {#if scrollY >= 480} -->
    <div class={cn("fixed bottom-7 md:bottom-12 right-7 z-50 hidden", scrollY > 480 && 'block')}>
        <button
            type="button"
            class={cn(
                "p-3 bg-background/60 text-foreground border rounded [&>svg]:stroke-muted-foreground [&>svg]:stroke-1 [&>svg]:size-6 cursor-pointer hover:border-primary! z-[51] transition-all duration-300 [&>svg]:border-0 backdrop-blur-md"
            )}
            aria-label="Subir para o topo da página"
            {onclick}
        >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-32,80v96H136V112Zm-56,96H80V112h40Zm88,0H192V104a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V208H48V48H208V208ZM152,72a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,72Z"></path></svg>
        </button>
    </div>
<!-- {/if} -->