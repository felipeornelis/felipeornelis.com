<script lang="ts">
	import Svelte from '$lib/icons/svelte.svelte';
	import Go from '$lib/icons/go.svelte';
	import TypeScript from '$lib/icons/typescript.svelte';

	const colors = {
		svelte: '#ff3e00',
		go: '#007d9c',
		typescript: '#0076c6'
	};
</script>

<section class="w-full">
	<div class="grid grid-cols-2 pt-32">
		<div>
			<div class="flex flex-col gap-3">
				<p class="font-bold text-6xl text-white tracking-tighter">
					I'm Felipe <span class="bg-hero-blue bg-clip-text text-transparent">Ornelis</span>
				</p>
				<div class="text-xl text-gray-600">
					<p class="text-white">Fullstack Developer and Quality Assurance Engineer</p>
					<p class="mt-10">Sharing knowledge about Web Development,</p>
					<p>Developer Experience and Test Engineering</p>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<Svelte size={7} color={colors.svelte} />
			<Go size={7} color={colors.go} />
			<TypeScript size={7} color={colors.typescript} />
		</div>
	</div>
</section>
