<script lang="ts">
	import Link from './link.svelte';

	export let title: string;
	export let description: string = '';
	export let learnMore: string = 'Learn more';
	export let to: string = '';
</script>

<header class="mb-16">
	<h2 class="font-semibold text-white tracking-tighter text-[56px] text-center">
		{title}
	</h2>
	{#if description != ''}
		<p class="text-center text-[#627486] text-[22px] leading-[32px]">
			{description}
		</p>
	{/if}
	{#if to != ''}
		<p class="text-[20px] text-center">
			<Link href={to} label={learnMore} />
		</p>
	{/if}
</header>
