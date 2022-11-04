<script lang="ts">
	import Card from '@components/card.svelte';

	export let title: string;
	export let shortText: string;
</script>

<Card>
	<div class="w-full h-full flex flex-col justify-between px-[44px] py-[26px]">
		<div>
			<span>Here goes tech</span>
		</div>
		<header>
			<h3 class="text-[22px] font-semibold tracking-[0.23px]">{title}</h3>
		</header>
		<p class="text-[20px] leading-[29px] tracking-[0.23px]">
			{shortText}
		</p>
	</div>
</Card>
