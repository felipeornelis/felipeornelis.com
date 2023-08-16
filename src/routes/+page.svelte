<script>
    import { Hero, Section } from '$lib/components';
	import Metadata from '$lib/components/metadata/metadata.svelte';
    import { FeatureCardComposition } from '$lib/compositions';
	import { 
        TechStackSection,
        RecentWorkSection,
        RecentPostsSection,
    } from '$lib/sections';

    /** @type {import('./$types').PageData}*/
    export let data;
</script>

<Metadata
    title=""
/>

<Hero />

<Section variant>
    <TechStackSection />
</Section>

<Section>
    <FeatureCardComposition />
</Section>

<Section>
    <RecentPostsSection articles={data.articles}/>
</Section>

<Section variant>
    <RecentWorkSection />
</Section>