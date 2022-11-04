<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Card from '@components/card.svelte';

	export let icon: typeof SvelteComponent;
	export let title: string;
	export let text: string;
</script>

<Card>
	<div class="w-full h-full flex flex-col justify-between items-center px-[44px] py-[26px]">
		<svelte:component this={icon} />

		<span class="text-center text-[20px] font-bold">{title}</span>
		<p class="text-center text-[20px]">
			{text}
		</p>
	</div>
</Card>
