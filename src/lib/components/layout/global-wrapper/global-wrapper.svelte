<script lang="ts">
	import type { Snippet } from 'svelte';
    import { type WrapperProps, wrapper } from './types';
    import { audioPlayer } from '$lib/runes/player.svelte';

    let { children }: { children: Snippet } = $props();

    let playerStatus = $derived(audioPlayer.isReproducing() ? 'open' : 'closed') as WrapperProps;
</script>

<div class={wrapper({ player : playerStatus })}>
    {@render children()}
</div>