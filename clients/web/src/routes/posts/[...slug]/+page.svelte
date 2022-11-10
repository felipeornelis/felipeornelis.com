<script lang="ts">
	import { page } from '$app/stores';
	import Title from '@components/title.svelte';

	const posts = [
		{
			slug: 'this-is-a-post-page',
			title: 'This a post page. Good to see you'
		},
		{
			slug: 'svelte/creating-nice-interfaces-with-svelte',
			title: 'Creating nice interfaces with Svelte'
		}
	];

	const post = posts.find((p) => p.slug === $page.params.slug)!;
</script>

<section class="max-w-[1200px] mx-auto">
	<Title title={post.title} />

	<p>{$page.params.slug}</p>
</section>
