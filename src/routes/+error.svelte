<script>
	import { Heading, Metadata, Section } from "$lib/components";
</script>

<Metadata
    title="Page not found"
    description="The page you're looking for doesn't exist"
/>

<div>
    <h1>
        <span>Page not found.</span>
    </h1>

    <p>The page you're looking for doesn't exist.</p>
</div>

<style lang="scss">
    div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        row-gap: 2.75rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;

        & h1 {
            font-size: 2.75rem;
            font-weight: var(--bold);
            letter-spacing: -0.125rem;
            max-width: var(--max-boundary);
            margin-left: auto;
            margin-right: auto;
            padding-top: calc(var(--navigator-height) + 1rem);
            text-align: center;
            display: flex;
            flex-direction: column;

            @media screen and (min-width: 640px) {
                & {
                    font-size: 4rem;
                }
            }
        }

        & p {
            max-width: var(--max-lg);
            text-align: center;
            font-size: var(--font-normal);
            font-weight: var(--medium);
            color: #52525B;

            @media screen and (min-width: 640px) {
                & {
                    font-size: var(--font-large);
                }
            }
        }       
    }

    :global(section) p {
        $max-width: 43rem;

        max-width: $max-width;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
        font-size: var(--font-normal);

        @media screen and (min-width: 640px) {
            & {
                font-size: 1.125rem;
            }
        }
    }
</style>