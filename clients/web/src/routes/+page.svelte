<script lang="ts">
	import Linkedin from '@components/linkedin.svelte';
</script>

<svelte:head>
	<title>Felipe Ornelis — Fullstack Developer</title>
</svelte:head>

<section class="w-full h-screen flex items-center justify-center flex-col px-4 gap-16 mt-20">
	<div class="text-center">
		<h2 class="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
			Where <span class="bg-clip-text text-transparent text-gradient-blue">ideas</span>
		</h2>
		<h2 class="text-white text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
			are alive.
		</h2>
	</div>

	<div class="md:text-xl text-center">
		<p class="text-gray-500">Fullstack Web Developer and Quality Assurance Engineer.</p>
	</div>

	<div>
		<a
			class="flex items-center justify-center py-2 px-5 rounded-[3rem] bg-blue-600 text-white gap-2"
			href="https://linkedin.com/in/felipeornelis"
			referrerpolicy="no-referrer"
			rel="external, noreferrer"
			target="_blank"
		>
			<Linkedin size={32} color="#ffffff" />
			Let's talk
		</a>
	</div>
</section>
