<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Oops! {$page.error?.message}</title>
</svelte:head>

<section class="w-full h-screen flex items-center justify-center flex-col px-4 gap-16">
	<div class="text-center">
		<h2 class="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
			Error <span class="bg-clip-text text-transparent text-gradient-blue">{$page.status}</span>
		</h2>
	</div>

	<div class="md:text-xl text-center">
		<p class="text-gray-500">
			{$page.error?.message === 'Not Found'
				? "Page not found. Maybe I'm still working on it. Maybe not."
				: $page.error?.message}
		</p>
		{#if dev === true}
			<p class="text-white">{$page.data}</p>
		{/if}
	</div>
</section>
