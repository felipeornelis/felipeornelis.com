<script lang="ts">
	type Items = {
		title: string;
		url: string;
	};

	const items: Items[] = [
		{ title: 'Home', url: '/' },
		{ title: 'Articles', url: '/articles' },
		{ title: 'Portfolio', url: '/portfolio' },
		{ title: 'About me', url: '/about-me' }
	];
</script>

<header class="w-full h-16 border-b-[1px] border-gray px-5 fixed top-0 backdrop-blur-[8px]">
	<div class="max-w-screen-lg h-full flex items-center justify-between mx-auto">
		<div>
			<a href="#felipe" class="text-white">Ornelis</a>
		</div>

		<nav class="flex items-center gap-6">
			{#each items as item (item.title)}
				<a href={item.url} class="text-gray-600">{item.title}</a>
			{/each}
		</nav>
	</div>
</header>
