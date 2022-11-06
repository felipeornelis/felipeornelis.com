<script lang="ts">
	import PostCard from '@components/post-card.svelte';
	import { posts } from '@mocks/posts';
</script>

{#each posts as { title, shortText, stack } (title)}
	<PostCard {title} {shortText} {stack} />
{/each}
