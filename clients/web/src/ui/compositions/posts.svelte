<script lang="ts">
	import PostCard from '@components/post-card.svelte';

	type PostCardProps = {
		title: string;
		shortText: string;
	};

	const posts: PostCardProps[] = [
		{
			title: 'Svelte best framework',
			shortText: 'Create the best user interface with this amazing tool'
		},
		{
			title: 'Dear Ilher',
			shortText: 'Experienced professional sharing amazing content about React and Remix'
		},
		{
			title: 'Svelte over React',
			shortText: 'Developer Experience and some benchmark made choose Svelte'
		}
	];
</script>

{#each posts as { title, shortText } (title)}
	<PostCard {title} {shortText} />
{/each}
