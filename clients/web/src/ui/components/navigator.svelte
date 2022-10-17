<script lang="ts">
	import { links } from '@resources/navigation';
</script>

<header class="w-full h-16 fixed top-o border-b-[1px] px-5 bg-transparent backdrop-blur-[7px]">
	<div class="mx-auto h-full max-w-screen-xl text-white flex items-center justify-between">
		<a href="/" target="self">Felipe Ornelis</a>

		<nav class="hidden md:flex gap-11">
			{#each links as { label, href } (label)}
				<a {href} class="text-white text-sm hover:underline">{label}</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	header {
		--color-variation: hsla(0, 0%, 100%, 0.1);

		border-bottom-color: var(--color-variation);
	}
</style>
