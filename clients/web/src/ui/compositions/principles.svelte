<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import PrincipleCard from '@components/principle-card.svelte';
	import ContentIcon from '@icons/content-icon.svelte';
	import LabsIcon from '@icons/labs-icon.svelte';
	import TalkIcon from '@icons/talk-icon.svelte';

	type Cards = {
		icon: typeof SvelteComponent;
		title: string;
		text: string;
	};

	const principles: Cards[] = [
		{
			icon: ContentIcon,
			title: 'Interactions',
			text: 'Tutorials and fresh content about technology and legal stuff'
		},
		{
			icon: LabsIcon,
			title: 'Labs',
			text: 'Nice tools and services available on the labs. It’s all free and open source.'
		},
		{
			icon: TalkIcon,
			title: 'Interactive',
			text: 'Have a question or a suggestion? Feel free to get in touch.'
		}
	];
</script>

{#each principles as { icon, title, text }, i}
	<PrincipleCard {icon} {title} {text} />
{/each}
