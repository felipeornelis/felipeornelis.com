<script>
    import '$lib/styles/app.scss';

    import { Footer, Navigator, Metadata, CookiesDisclaimer } from '$lib/components';
	import { CallToActionSection } from '$lib/sections';
	import { cookiesDisclaimer } from '$lib/stores/cookies-disclaimer';
	import { cookiesConsent } from '$lib/services/cookies-disclaimer';
	import { onMount } from 'svelte';

    /** @type {boolean}*/
    let showCookiesDisclaimer;

    onMount(() => {
        if (!cookiesConsent.get()) {
            showCookiesDisclaimer = true;
        }
    });
</script>

<Metadata
    title={undefined}
    description="oie oeieoie"
    keywords="lindo,tesao,bonito,bostao"
    article={{
        title: 'oie',
        description: 'oie',
        href: '/',
        publishedAt: new Date(),
        updatedAt: undefined,
        tags: 'oie'
    }}
/>

<Navigator />

<main>
    <slot />
</main>

<CallToActionSection />

<Footer />

{#if showCookiesDisclaimer && $cookiesDisclaimer}
    <CookiesDisclaimer />
{/if}


<style lang="scss">
    main {
        display: inherit;
    }
</style>