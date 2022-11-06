<script lang="ts">
	import type { Tool } from '@types/tool';

	import Card from '@components/card.svelte';
	import TechCircle from '@components/tech-circle.svelte';

	export let title: string;
	export let shortText: string;
	export let stack: Array<Tool>;
</script>

<Card>
	<div class="w-full h-full flex flex-col justify-between px-[44px] py-[26px]">
		<div class="flex w-full xxx">
			{#each stack as { name, background, icon }}
				<TechCircle {name} {background} {icon} />
			{/each}
		</div>
		<header>
			<h3 class="text-[22px] font-semibold tracking-[0.23px]">{title}</h3>
		</header>
		<p class="text-[20px] leading-[29px] tracking-[0.23px]">
			{shortText}
		</p>
	</div>
</Card>
