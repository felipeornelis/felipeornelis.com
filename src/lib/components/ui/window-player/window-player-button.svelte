<script lang="ts">
	import type { SvelteComponent, Component } from "svelte";
	import { type ButtonType, PlayerOperations } from "./types";
	import { Pause, Play, SkipBack, SkipForward, StopCircle } from "@lucide/svelte";    

    interface Props {
        type: ButtonType;
        action?:VoidFunction;
    }

    let { type, action }: Props = $props();

    type ButtonIcon = {
		[k in ButtonType]: Component;
	};

    const button: Partial<ButtonIcon> = {
        play: Play,
        pause: Pause,
        previous: SkipBack,
        next: SkipForward,
        stop: StopCircle,
    }

    const IconComponent = $derived(button[type]);
</script>

<button
    type="button"
    class="size-9 rounded-full p-2 transition-color duration-200 flex items-center justify-center cursor-pointer hover:bg-muted/30 [&>svg]:stroke-1 [&>svg]:size-5"
    onclick={action}
>
    <IconComponent />
    <!-- {#if type === PlayerOperations.play}
        <Play />
    {:else if type === PlayerOperations.pause}
        <Pause />
    {:else if type === PlayerOperations.stop}
        <StopCircle />
    {:else if type === PlayerOperations.previous}
        <SkipBack />
    {:else if type === PlayerOperations.next}
        <SkipForward />
    {:else if type === PlayerOperations.backward || type === PlayerOperations.rewind}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3a9 9 0 1 0 5.66 2.34"/>
  <polyline points="7 8 3 12 7 16"/>

  <path d="M10 14.5v-5l-1.5 1.5"/>

  <path d="M12.5 14.5h2a2 2 0 0 0 0-4h-2v2h2"/>
</svg>
    {:else if type === PlayerOperations.forward || type === PlayerOperations.fastForward}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a9 9 0 1 1-5.66 2.34"/>
            <polyline points="17 8 21 12 17 16"/>
            
            <path d="M10 14.5v-5l-1.5 1.5"/>
            
            <path d="M12.5 14.5h2a2 2 0 0 0 0-4h-2v2h2"/>
        </svg>
    {/if} -->
</button>