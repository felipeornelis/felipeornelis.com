<script>
	import { Heading } from "$lib/components";
	import WorkImage from "./work-image.svelte";
    import WorkDescription from "./work-description.svelte";
</script>

<Heading
    title="Recent Work"
    description="I am always creating something new. This is the last work I have done."
/>

<div>
    <WorkImage />
    <WorkDescription
        name="1ª CLNGIP"
        description="1ª Conferência Nacional Livre de Gestão Interfederativa e Participativa (1ª CLNGIP) is a national conference based on the collective construction to strengthen the Unified Health System of Brazil (SUS)."
        href="/articles/inside-development-of-1clngip"
    />
</div>

<style lang="scss">
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        row-gap: 3.25rem;
        margin-top: 2.75rem;

        @media screen and (min-width: 840px) {
            & {
                flex-direction: row;
                column-gap: 3.25rem;
            }
        }
    }
</style>