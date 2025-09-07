<script lang="ts">
	import { Navigator, NavigatorItem, NavigatorItemsRoot, NavigatorOverlay, NavigatorSearchButton, NavigatorSearchContainer, NavigatorSearchTrigger } from '$lib/components/navigator';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import NavigatorSearchRoot from '$lib/components/navigator/navigator-search-root.svelte';
	import { Footer } from '$lib/components/footer';
	import { WindowPlayer } from '$lib/components/ui/window-player';

	let { children } = $props();

	let show_creepy_mind_ads = $state(false);

	function markAdsAsSeen() {
		show_creepy_mind_ads = false;

		window.localStorage.setItem('seen.creepymind.ads', 'true');
	}

	$effect.pre(() => {
		if (!window) return;

		const hasSeenAds = window.localStorage.getItem('seen.creepymind.ads');

		if (!hasSeenAds || hasSeenAds === 'false') {
			show_creepy_mind_ads = true;
		}
	});
	
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-background flex flex-col relative transition-[padding]">
	<div class="top-0 left-0 right-0 z-[100] h-auto sticky">

		{#if show_creepy_mind_ads}
		<div class="h-11 bg-zinc-300 w-full text-background flex items-center justify-between px-5">
			oie

			<button type="button" onclick={markAdsAsSeen}>X</button>
		</div>
		{/if}

		<Navigator>
			<NavigatorItemsRoot>
				<NavigatorItem href="/collection" label="Coletânea"/>
				<NavigatorItem href="/posts" label="Publicações"/>
				<NavigatorItem href="/bookmarks" label="Marcadores"/>
				<NavigatorItem href="/projects" label="Acervo"/>
			</NavigatorItemsRoot>

			<NavigatorSearchRoot>
				<NavigatorSearchTrigger>
					<NavigatorSearchButton />
				</NavigatorSearchTrigger>

				<NavigatorSearchContainer />
			</NavigatorSearchRoot>
		</Navigator>
	</div>

	<NavigatorOverlay>
		<p>Lorem ipsum dolor sit amet</p>
	</NavigatorOverlay>

	<main class="h-full flex-1">
		{@render children?.()}
	</main>

	<Footer />

	<WindowPlayer />
</div>
