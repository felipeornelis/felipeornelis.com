<script>
    import { about } from '$lib/config/about';
</script>

<div>
    {#each about.socialNetworks as { icon, url }}
        <a
            href={url}
            target="_blank"
            rel="nooponer noreferrer"
        >
            <svelte:component this={icon} color="#52525B" size={20} />
        </a>
    {/each}
</div>

<style lang="scss">
    div {
        display: flex;

        & a + a {
            margin-left: 1.25rem;
        }

        & a :global(svg){
            transition: all 200ms ease-in-out;
        }

        & a:hover :global(svg) {
            fill: rgb(192, 132, 252);
        }

    }
</style>