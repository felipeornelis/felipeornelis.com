<script>
    import { FeatureCard } from "$lib/components";
	import { Code, TestTube, HandHeart } from "$lib/icons/elements";
</script>

<div>
    <FeatureCard
        icon={Code}
        title="Engineering"
        content="The best technologies to create performing, scalable and secure applications."
    />

    <FeatureCard
        icon={TestTube}
        title="Quality Assurance"
        content="Ensuring that the software meets the highest standards of quality, reliability and functionality."
    />

    <FeatureCard
        icon={HandHeart}
        title="Service"
        content="Going beyond just delivering services to help you reaching your desired achievements."
    />
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 2.75rem;

        @media screen and (min-width: 680px) {
            flex-direction: row;
            column-gap: 1.75rem;
            /* column-gap: 2.75rem; */
        }

        & :global(article) {
           flex: 1 1 0;
            
        }
        
    }
</style>