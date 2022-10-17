<script lang="ts">
	import Navigator from '@components/navigator.svelte';

	import '@styles/app.css';
</script>

<svelte:head>
	<title>Felipe Ornelis — Fullstack Developer</title>
</svelte:head>

<Navigator />
<section class="w-full h-96 lg:h-screen flex items-center justify-center flex-col px-4 gap-16">
	<div class="text-center">
		<h2 class="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
			Where <span class="bg-clip-text text-transparent ideas-gradient">ideas</span>
		</h2>
		<h2 class="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
			are alive.
		</h2>
	</div>

	<div class="text-xl">
		<p class="text-gray-500">Fullstack Web Developer and Quality Assurance Engineer.</p>
	</div>

	<div>
		<button
			class="flex items-center justify-center py-2 px-5 rounded-[3rem] bg-blue-600 text-white"
		>
			Sign up for free
		</button>
	</div>
</section>

<style>
	.ideas-gradient {
		background-image: linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%);
	}
</style>
