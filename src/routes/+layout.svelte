<script lang="ts">
	import { Navigator, NavigatorItem, NavigatorItemsRoot, NavigatorMobileRoot, NavigatorOverlay, NavigatorSearchButton, NavigatorSearchContainer, NavigatorSearchTrigger } from '$lib/components/navigator';
	import favicon from '$lib/assets/favicon.svg';
	import NavigatorSearchRoot from '$lib/components/navigator/navigator-search-root.svelte';
	import { Footer } from '$lib/components/footer';
	import { WindowPlayer } from '$lib/components/ui/window-player';
	import { GlobalWrapper } from '$lib/components/layout/global-wrapper';
	import '../app.css';
	import { items } from '$lib/config/navigation';
	import { Elevator } from '$lib/components/ui/elevator';
	import { Button } from '$lib/components/button';
	import { bodyScroll } from '$lib/runes/body.svelte';
	import { mobileMenu } from '$lib/runes/mobile-menu.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Search, X } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import { page } from '$app/state';

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

<GlobalWrapper>
	<div class="top-0 left-0 right-0 z-[100] h-auto sticky">

		{#if show_creepy_mind_ads}
		<div class="h-11 bg-zinc-300 w-full text-background flex items-center justify-between px-5">
			oie

			<button type="button" onclick={markAdsAsSeen}>X</button>
		</div>
		{/if}

		<Navigator>
			<NavigatorItemsRoot>
				{#each items as { url, label, available }, i}
					{#if available}
						<NavigatorItem href={url} label={label}/>
					{/if}
				{/each}
			</NavigatorItemsRoot>

			<NavigatorSearchRoot>
				<NavigatorSearchTrigger>
					<NavigatorSearchButton />
				</NavigatorSearchTrigger>

				<NavigatorSearchContainer />
			</NavigatorSearchRoot>
		</Navigator>
	</div>

	<NavigatorMobileRoot>
		<div class="flex flex-col gap-10">
			<div class="flex gap-1.5 items-center [&_svg]:size-5">
				<Input type="search" class="flex-1" placeholder="Pesquisar em felipeornelis.com"/>
				<Button variant="ghost" onclick={() => mobileMenu.close()}>
					<X />
				</Button>
			</div>

			<nav aria-hidden="false" class="flex flex-col gap-2.5">
				{#each items as { url, label, available }, i}
					{#if available}
						<a
							href={url}
							onclick={() => mobileMenu.close()}
							class={cn("px-3 py-2 rounded text-foreground", page.url.pathname.startsWith(url) && "border border-primary! text-accent bg-primary/10")}
						>
							{label}
						</a>
					{/if}
				{/each}
			</nav>
		</div>		
	</NavigatorMobileRoot>

	<NavigatorOverlay>
		<p>Lorem ipsum dolor sit amet</p>
	</NavigatorOverlay>

	<main class="h-full flex-1">
		{@render children?.()}
	</main>

	<Footer />
	<WindowPlayer />
	<Elevator />
</GlobalWrapper>